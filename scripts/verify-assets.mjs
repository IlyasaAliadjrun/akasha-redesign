// Checks the public asset tree against the conventions in docs/PANDUAN-ASET.md §2:
//   - every /media/… and /documents/… path referenced in code exists in public/
//   - no pre-2026-09 path style is left (/brand/…, /home/…, /docs/…, /en/…)
//   - file and folder names are lowercase kebab-case
//   - a `.en` language variant always has its `.id` twin, and vice versa
// Unreferenced files are listed but do not fail the check.
//
//   npm run verify:assets
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public");
const CODE_DIRS = ["app", "components", "lib", "content", "dictionaries"];

const walk = (dir) => {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  (function rec(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      e.isDirectory() ? rec(p) : out.push(p);
    }
  })(dir);
  return out;
};
const rel = (p, base) => path.relative(base, p).split(path.sep).join("/");

const errors = [];
const warnings = [];
const referenced = new Set();

const codeFiles = CODE_DIRS.flatMap((d) => walk(path.join(ROOT, d))).filter((p) =>
  /\.(tsx?|mjs|js|css)$/.test(p),
);

for (const file of codeFiles) {
  const where = rel(file, ROOT);
  const src = fs.readFileSync(file, "utf8");

  // `const X = "/documents/…"` bases, resolved inside `${X}/rest` template literals
  const bases = {};
  for (const m of src.matchAll(/const (\w+) = "(\/(?:media|documents)\/[^"]*)"/g)) bases[m[1]] = m[2];

  src.split("\n").forEach((line, i) => {
    if (line.trimStart().startsWith("//")) return;
    const at = `${where}:${i + 1}`;
    const check = (p) => {
      referenced.add(p);
      if (!fs.existsSync(path.join(PUB, p))) errors.push(`missing file   ${at}  ${p}`);
    };
    for (const m of line.matchAll(/"(\/(?:media|documents)\/[^"]+\.[a-z0-9]+)"/gi)) check(m[1]);
    for (const m of line.matchAll(/`\$\{(\w+)\}\/([^`]+)`/g)) {
      if (bases[m[1]]) check(`${bases[m[1]]}/${m[2]}`);
    }
    for (const m of line.matchAll(
      /"(\/(?:brand|home|shared|about|investor|governance|contact|careers|docs|en|id)\/[^"]*\.(?:png|jpe?g|webp|avif|svg|gif|pdf|docx?))"/gi,
    )) {
      errors.push(`legacy path    ${at}  ${m[1]}  → use /media/… or /documents/…`);
    }
  });
}

const onDisk = [...walk(path.join(PUB, "media")), ...walk(path.join(PUB, "documents"))].map(
  (p) => "/" + rel(p, PUB),
);

for (const p of onDisk) {
  const segments = p.split("/").slice(1);
  const name = segments[segments.length - 1];
  if (name === ".gitkeep") continue;
  for (const s of segments.slice(0, -1)) {
    if (!/^[a-z0-9-]+$/.test(s)) errors.push(`folder name    ${p}  ("${s}" is not lowercase kebab-case)`);
  }
  if (!/^[a-z0-9-]+(\.(en|id))?\.[a-z0-9]+$/.test(name)) {
    errors.push(`file name      ${p}  (use lowercase kebab-case, optional .en/.id before the extension)`);
  }
  const variant = name.match(/^(.*)\.(en|id)(\.[a-z0-9]+)$/);
  if (variant) {
    const twin = p.replace(`.${variant[2]}${variant[3]}`, `.${variant[2] === "en" ? "id" : "en"}${variant[3]}`);
    if (!onDisk.includes(twin)) warnings.push(`no language twin  ${p}  (expected ${twin})`);
  }
}

const unreferenced = onDisk.filter((p) => !p.endsWith(".gitkeep") && !referenced.has(p));

console.log(`referenced paths: ${referenced.size}   files: ${onDisk.length}   unreferenced: ${unreferenced.length}`);
for (const w of warnings) console.log(`warning  ${w}`);
if (process.argv.includes("--list-unreferenced")) for (const u of unreferenced) console.log(`unused   ${u}`);
for (const e of errors) console.error(`error    ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s). See docs/PANDUAN-ASET.md §2 for the conventions.`);
  process.exit(1);
}
console.log("ok");
