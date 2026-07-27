import type { HeroLayer, HeroContent } from "./brands";

// ── Sub-brands (product lines) ────────────────────────────────────────────────
// Terminology (confirmed by the brand owner):
//   parent  → Makarizo / Makarizo Professional (umbrella, no page — 404)
//   brand   → Hair Energy, NPL, … (full page at /brands/{slug})
//   SUB-BRAND (this file) → a product LINE inside a brand, e.g. Hair Energy's
//     Fibertherapy Creambath / Scentsations / Shampoo / Vitaglitz.
//
// A sub-brand page lives at /brands/{parent}/{slug} (e.g. /brands/hair-energy/
// creambath). It is NOT in the navbar — it's reached only by clicking a variant in
// the parent brand's showcase (see ShowcaseVariant.href). Layout:
//   banner (parallax) → showcase (title image + card grid) → cross-sell → CTA.
//
// SKELETON NOTE: image fields are intentionally empty for now. Each image slot
// renders a plain placeholder until a real path is filled in, so the page works as
// a wireframe today. Each showcase card image is COMPLETE — it already includes its
// own background & border — so no card chrome is drawn around it; the image is
// placed as-is. Drop assets into public/brand/{parent}/{slug}/{hero,showcase}/ and
// set the paths + copy below to finish.

export type SubBrandCard = {
  image?: string; // complete card graphic (product + background + border baked in)
  href?: string; // optional link (defaults to the shop link)
  label?: string; // alt text / internal identifier
};

export type SubBrand = {
  slug: string; // e.g. "creambath" → /brands/{parent}/creambath
  parent: string; // parent brand slug, e.g. "hair-energy"
  name: string; // e.g. "Fibertherapy Creambath"
  tagline: string; // hero subtitle (1–2 short lines)
  ctaText?: string; // hero button label (default "Learn more")
  ctaHref?: string; // hero button target (default "#showcase")
  accentHex: string; // banner colour (usually inherits the parent brand)
  bannerBg?: string; // solid colour behind the hero while it loads
  // Layered/parallax hero products — same shape as a brand hero. Empty in the
  // skeleton (a placeholder banner shows); fill with layers pointing at
  // /brand/{parent}/{slug}/hero/… to switch the real parallax banner on. Each
  // product's `enterFrom` sets its fade-in direction; array order = stacking
  // (last = front).
  heroLayers?: HeroLayer[];
  heroContent?: HeroContent;
  heroImage?: string; // flat fallback banner if not using layers
  // Wordmark shown at the top of the hero (fades in). Text title/subtitle/button
  // come from `name` / `tagline` / `ctaText`.
  heroWordmark?: string;
  heroWordmarkAspect?: string; // e.g. "767 / 529"
  // Showcase = a title graphic + a grid of complete card images.
  showcaseTitle?: string; // title image at the top of the showcase
  showcaseTitleAspect?: string; // intrinsic ratio of the title (default "3 / 2")
  featured?: SubBrandCard; // optional full-width card above the grid
  featuredAspect?: string; // ratio of the featured card image (default "12 / 5")
  cardAspect?: string; // ratio of each grid card image (default "4 / 5")
  cards: SubBrandCard[]; // the variant card grid (2 columns on desktop)
};

// Auto-discovered sub-brand (product-line) registry. One module per sub-brand in
// content/sub-brands/*.ts, collected by webpack require.context at build time, so
// ADDING A SUB-BRAND NEVER EDITS THIS FILE. See docs/BRAND_PAGE_GUIDE.md §5.
const subCtx = (require as unknown as WebpackRequire).context("../content/sub-brands", false, /\.ts$/);
export const SUB_BRANDS: SubBrand[] = subCtx
  .keys()
  // See lib/brands.ts: keys() also returns the baseUrl form
  // ("content/sub-brands/010-x.ts") of every module, so filter to the relative form
  // or each sub-brand is listed twice.
  .filter((k) => k.startsWith("./"))
  .sort()
  .map((k) => (subCtx(k) as { default: SubBrand }).default);



export const getSubBrand = (parent: string, slug: string) =>
  SUB_BRANDS.find((s) => s.parent === parent && s.slug === slug);

export const subBrandsOf = (parent: string) =>
  SUB_BRANDS.filter((s) => s.parent === parent);
