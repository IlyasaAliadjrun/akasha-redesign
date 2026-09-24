#!/usr/bin/env bash
# Build and release the website on the self-hosted server. Runs as user `akasha`.
#
#   deploy.sh            fetch origin/$BRANCH, build, test, switch, restart
#   deploy.sh rollback   point `current` at the previous release and restart
#   deploy.sh status     list releases and show which one is live
#
# Layout (deploy/SETUP.md §8):
#   /home/akasha/repo           shallow git checkout — the build happens here
#   /home/akasha/releases/<id>  self-contained standalone releases (last $KEEP kept)
#   /home/akasha/current        symlink to the live release
#   /home/akasha/shared/next-cache   image + ISR cache, survives releases
#
# The live release keeps serving throughout the build; the switch is one symlink
# rename plus a service restart (a few seconds). A release that fails its smoke
# test is never switched to, and a failed post-switch check rolls back.
set -Eeuo pipefail

APP_HOME=/home/akasha
REPO=$APP_HOME/repo
RELEASES=$APP_HOME/releases
CURRENT=$APP_HOME/current
SHARED=$APP_HOME/shared
ENV_FILE=/etc/akasha/web.env
SERVICE=akasha-web
BRANCH=${BRANCH:-main}
KEEP=${KEEP:-3}
LIVE_PORT=3000
TEST_PORT=3100

log() { printf '\n\033[1m==> %s\033[0m\n' "$*"; }
die() { printf '\n\033[31mERROR: %s\033[0m\n' "$*" >&2; exit 1; }

[ "$(id -un)" = akasha ] || die "run as user akasha:  sudo -iu akasha bash $0 ${1:-}"

exec 9>"$APP_HOME/.deploy.lock"
flock -n 9 || die "another deploy is running"

TEST_PID=""
cleanup() { [ -n "$TEST_PID" ] && kill "$TEST_PID" 2>/dev/null || true; }
trap cleanup EXIT

# Waits until the site answers 200 on /en at the given port.
wait_ok() {
  local port=$1 tries=${2:-40}
  for _ in $(seq "$tries"); do
    if [ "$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:$port/en")" = 200 ]; then
      return 0
    fi
    sleep 1
  done
  return 1
}

releases_sorted() { ls -1 "$RELEASES" 2>/dev/null | sort; }

switch_to() {
  ln -sfn "$RELEASES/$1" "$APP_HOME/current.next"
  mv -T "$APP_HOME/current.next" "$CURRENT"
  sudo /usr/bin/systemctl restart "$SERVICE"
}

cmd_status() {
  local live=""
  [ -L "$CURRENT" ] && live=$(basename "$(readlink -f "$CURRENT")")
  echo "releases (oldest first):"
  for r in $(releases_sorted); do
    [ "$r" = "$live" ] && echo "  * $r   <- live" || echo "    $r"
  done
  systemctl --no-pager --lines=0 status "$SERVICE" || true
}

cmd_rollback() {
  local live prev=""
  live=$(basename "$(readlink -f "$CURRENT")")
  for r in $(releases_sorted); do
    [ "$r" = "$live" ] && break
    prev=$r
  done
  [ -n "$prev" ] || die "no release older than $live to roll back to"
  log "Rolling back $live -> $prev"
  switch_to "$prev"
  wait_ok "$LIVE_PORT" || die "rolled back, but $prev is not answering either — check: journalctl -u $SERVICE"
  log "Live: $prev"
}

cmd_deploy() {
  mkdir -p "$RELEASES" "$SHARED/next-cache"
  cd "$REPO"

  log "Fetching origin/$BRANCH"
  local old new
  old=$(git rev-parse HEAD)
  git fetch --depth 1 origin "$BRANCH"
  # The server checkout is build-only: it must never carry local edits.
  git reset --hard FETCH_HEAD
  new=$(git rev-parse HEAD)
  echo "  $old -> $new"

  local media_changed=1
  if [ "$old" != "$new" ] && git cat-file -e "$old^{commit}" 2>/dev/null; then
    git diff --quiet "$old" "$new" -- public/media && media_changed=0
  elif [ "$old" = "$new" ]; then
    media_changed=0
  fi

  log "Installing dependencies"
  npm ci --no-audit --no-fund

  log "Checking assets"
  npm run -s verify:assets

  log "Building (live site keeps serving meanwhile)"
  # The env file is read for the build (NEXT_PUBLIC_* values are inlined at build
  # time) but not for `npm ci`: its NODE_ENV=production would skip devDependencies.
  (
    set -a; . "$ENV_FILE"; set +a
    NODE_OPTIONS=--max-old-space-size=2048 npm run build
  )

  local id dest
  id="$(date +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD)"
  dest="$RELEASES/$id"
  log "Assembling release $id"
  cp -a .next/standalone "$dest"
  mkdir -p "$dest/.next"
  cp -a .next/static "$dest/.next/static"
  # public/ is ~2 GB of media: link it instead of copying it into every release.
  ln -sfn "$REPO/public" "$dest/public"
  rm -rf "$dest/.next/cache"
  ln -sfn "$SHARED/next-cache" "$dest/.next/cache"
  # Next only finds sharp at runtime (require by name), so make sure the release
  # carries sharp and everything it depends on.
  node -e '
    const fs = require("fs"), path = require("path");
    const [src, dst] = process.argv.slice(1);
    const seen = new Set();
    // Walk node_modules upward like Node does; require.resolve("x/package.json")
    // fails for packages whose "exports" map hides package.json (e.g. @img/*).
    const find = (name, from) => {
      for (let d = from; ; d = path.dirname(d)) {
        const cand = path.join(d, "node_modules", name);
        if (fs.existsSync(path.join(cand, "package.json"))) return cand;
        if (path.dirname(d) === d) return null;
      }
    };
    (function add(name, from) {
      if (seen.has(name)) return;
      const dir = find(name, from);
      if (!dir) return; // optional platform package not installed on this OS
      seen.add(name);
      const target = path.join(dst, "node_modules", name);
      if (!fs.existsSync(target)) fs.cpSync(dir, target, { recursive: true });
      const pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"));
      for (const dep of Object.keys({ ...pkg.dependencies, ...pkg.optionalDependencies })) add(dep, dir);
    })("sharp", src);
  ' "$REPO" "$dest"
  (cd "$dest" && node -e 'require("sharp")') || die "sharp does not load in the release"

  log "Smoke-testing the new release on :$TEST_PORT"
  (
    set -a; . "$ENV_FILE"; set +a
    export PORT=$TEST_PORT HOSTNAME=127.0.0.1
    cd "$dest" && exec node server.js
  ) >"$APP_HOME/smoke-test.log" 2>&1 &
  TEST_PID=$!
  if ! wait_ok "$TEST_PORT" 60; then
    rm -rf "$dest"
    die "new release did not answer 200 on /en — see $APP_HOME/smoke-test.log; live site untouched"
  fi
  kill "$TEST_PID" 2>/dev/null || true
  wait "$TEST_PID" 2>/dev/null || true
  TEST_PID=""

  if [ "$media_changed" = 1 ]; then
    log "public/media changed — clearing the optimized-image cache"
    rm -rf "$SHARED/next-cache/images"
  fi

  local prev=""
  [ -L "$CURRENT" ] && prev=$(basename "$(readlink -f "$CURRENT")")
  log "Switching live release to $id"
  switch_to "$id"
  if ! wait_ok "$LIVE_PORT"; then
    [ -n "$prev" ] || die "$id is not answering and there is no previous release — check: journalctl -u $SERVICE"
    echo "  $id is not answering — rolling back to $prev"
    switch_to "$prev"
    die "deploy failed, rolled back to $prev"
  fi

  log "Pruning old releases (keeping $KEEP)"
  local count
  count=$(releases_sorted | wc -l)
  if [ "$count" -gt "$KEEP" ]; then
    releases_sorted | head -n $((count - KEEP)) | while read -r r; do
      [ "$r" = "$id" ] || rm -rf "${RELEASES:?}/$r"
    done
  fi

  log "Live: $id"
}

case "${1:-deploy}" in
  deploy) cmd_deploy ;;
  rollback) cmd_rollback ;;
  status) cmd_status ;;
  *) die "usage: $0 [deploy|rollback|status]" ;;
esac
