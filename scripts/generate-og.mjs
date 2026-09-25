// Builds the 1200×630 link-preview image (Open Graph) for every brand and
// sub-brand page: the brand wordmark on a clean card, the Akasha logo underneath.
//
//   npm run og:generate            → only creates missing files
//   npm run og:generate -- --force → regenerates all of them
//
// Existing files are kept by default so a designer's hand-made og.jpg is never
// overwritten. Content modules only `import type`, so Node 24 loads them directly.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const FORCE = process.argv.includes("--force");
const W = 1200;
const H = 630;

const load = async (dir) => {
  const files = fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".ts")).sort();
  const mods = [];
  for (const f of files) mods.push((await import(pathToFileURL(path.join(ROOT, dir, f)).href)).default);
  return mods;
};

const pick = (asset) => (!asset ? undefined : typeof asset === "string" ? asset : asset.id);
const onDisk = (p) => p && fs.existsSync(path.join(PUBLIC, p));

const luminance = (hex) => {
  const [r, g, b] = hex.replace("#", "").match(/../g).map((x) => parseInt(x, 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Average brightness of the wordmark's visible pixels — decides whether it can
// sit on white or needs a dark card behind it.
async function inkLuminance(file) {
  const { data, info } = await sharp(file).ensureAlpha().resize(200, 200, { fit: "inside" }).raw().toBuffer({ resolveWithObject: true });
  let sum = 0, n = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i + 3] < 128) continue;
    sum += (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
    n++;
  }
  return n ? sum / n : 0;
}

async function render({ wordmark, accent, out, caption }) {
  const file = path.join(PUBLIC, wordmark);
  const light = (await inkLuminance(file)) > 0.72;
  const bg = !light ? "#ffffff" : luminance(accent) < 0.45 ? accent : "#0A0A0A";
  const onDark = bg !== "#ffffff";

  const mark = await sharp(await sharp(file).trim().png().toBuffer())
    .resize(820, caption ? 250 : 330, { fit: "inside" })
    .png()
    .toBuffer();
  const m = await sharp(mark).metadata();
  const akasha = await sharp(path.join(PUBLIC, `media/shared/logo-${onDark ? "white" : "color"}.png`))
    .resize({ width: 150 })
    .png()
    .toBuffer();
  const a = await sharp(akasha).metadata();

  const layers = [
    { input: mark, left: Math.round((W - m.width) / 2), top: Math.round((caption ? 230 : 275) - m.height / 2) },
    { input: akasha, left: Math.round((W - a.width) / 2), top: H - 70 - a.height },
  ];
  if (caption) {
    // Most line wordmarks are copies of the parent logo, so the line name is what
    // tells the previews apart. The images are generated locally and committed,
    // so a Windows system font is fine here.
    const esc = caption.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const text = await sharp({
      text: { text: `<span foreground="${onDark ? "#FFFFFF" : "#0A0A0A"}">${esc}</span>`, font: "Segoe UI Semibold 46", rgba: true, dpi: 72, width: 1000, align: "centre" },
    }).png().toBuffer();
    const t = await sharp(text).metadata();
    layers.push({ input: text, left: Math.round((W - t.width) / 2), top: 405 });
  }
  if (!onDark) {
    layers.push({ input: { create: { width: W, height: 14, channels: 3, background: accent } }, left: 0, top: 0 });
  }
  const canvas = await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
    .composite(layers)
    .png()
    .toBuffer();
  fs.mkdirSync(path.dirname(path.join(PUBLIC, out)), { recursive: true });
  await sharp(canvas).jpeg({ quality: 85, mozjpeg: true }).toFile(path.join(PUBLIC, out));
}

const brands = await load("content/brands");
const subBrands = await load("content/sub-brands");
const isUmbrella = (b) => brands.some((x) => x.parent === b.slug);
const brandWordmark = (b) =>
  [pick(b.heroContent?.logo), `/media/brands/${b.slug}/hero/wordmark.png`].find(onDisk);

const jobs = [
  ...brands
    .filter((b) => !isUmbrella(b))
    .map((b) => ({ label: b.slug, wordmark: brandWordmark(b), accent: b.accentHex, out: `/media/brands/${b.slug}/hero/og.jpg` })),
  ...subBrands.map((s) => {
    const parent = brands.find((b) => b.slug === s.parent);
    return {
      label: `${s.parent}/${s.slug}`,
      wordmark: [s.heroWordmark, parent && brandWordmark(parent)].find(onDisk),
      caption: s.name, // line wordmarks are mostly copies of the parent logo
      accent: s.accentHex || parent?.accentHex || "#0A0A0A",
      out: `/media/brands/${s.parent}/lines/${s.slug}/hero/og.jpg`,
    };
  }),
];

let made = 0, kept = 0;
for (const job of jobs) {
  if (!job.wordmark) { console.log(`skip  ${job.label} (no wordmark on disk — page uses the default share image)`); continue; }
  if (!FORCE && onDisk(job.out)) { kept++; continue; }
  await render(job);
  made++;
  console.log(`made  ${job.out}`);
}
console.log(`\n${made} created, ${kept} kept`);
