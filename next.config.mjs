import fs from "node:fs";

// Build output dir. Parallel sessions (one per brand) must NOT share `.next` —
// concurrent writes corrupt the cache and crash every running dev server. Each
// session sets its own: NEXT_DIST_DIR=.next-{brand} PORT=31xx npm run dev
const distDir = process.env.NEXT_DIST_DIR || ".next";

// `next dev` rewrites tsconfig.json to add "{distDir}/types/**/*.ts" to `include`.
// With several sessions running that is a concurrent read-modify-write on one
// shared file — the fast way to a truncated tsconfig that kills every server at
// once. So an isolated session gets its own tsconfig, pre-seeded with the entry
// Next would otherwise add, leaving it nothing to rewrite. Same directory as the
// original, so every relative path (baseUrl, paths, include) still resolves.
function isolatedTsconfig() {
  if (distDir === ".next") return "tsconfig.json";
  const file = `tsconfig.${distDir.replace(/^\./, "")}.json`;
  const base = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));
  base.include = [
    ...(base.include ?? []).filter((p) => !/^\.next[^/]*\/types\//.test(p)),
    `${distDir}/types/**/*.ts`,
  ];
  const next = JSON.stringify(base, null, 2) + "\n";
  // Only write when the content actually differs — repeated `next dev` restarts
  // must not keep touching the file.
  if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== next) {
    fs.writeFileSync(file, next);
  }
  return file;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir,
  typescript: { tsconfigPath: isolatedTsconfig() },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "nestlepurelife.id" },
      { protocol: "https", hostname: "hairenergy.co" },
      { protocol: "https", hostname: "wonhaefoods.com" },
      { protocol: "https", hostname: "makarizoprofessional.com" },
      { protocol: "https", hostname: "makeitperfume.com" },
      { protocol: "https", hostname: "omoidefoods.com" },
      { protocol: "https", hostname: "floatysnack.com" },
      { protocol: "https", hostname: "fitmeup.id" },
    ],
  },
};

export default nextConfig;
