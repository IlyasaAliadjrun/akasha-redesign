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

const CARD = (label: string): SubBrandCard => ({ label });
const HE_ACCENT = "#F36C21"; // Hair Energy orange — sub-brands inherit it

export const SUB_BRANDS: SubBrand[] = [
  // ── Hair Energy → Fibertherapy Creambath ──────────────────────────────────
  {
    slug: "creambath",
    parent: "hair-energy",
    name: "Fibertherapy Creambath",
    tagline: `Creambath 5X Conditioner.\n5X lebih melembutkan dan menutrisi.`,
    ctaText: "Learn more",
    accentHex: HE_ACCENT,
    bannerBg: HE_ACCENT,
    heroWordmark: "/brand/hair-energy/creambath/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // Products render back-to-front. Jar (2.png) sits behind, upper-right, enters
    // from the right; tube (1.png) sits in front, centre, enters from the left and
    // fades in first (per the filename order).
    // Widths are a FIXED px (no vw term): the products keep exactly this size on
    // every desktop width — they never shrink or grow when the window is resized.
    // (The section is `overflow-hidden`, so on very narrow desktop widths the jar is
    // simply clipped rather than triggering a horizontal scrollbar.)
    heroLayers: [
      { src: "/brand/hair-energy/creambath/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "350px", aspectRatio: "2139 / 2345", left: "60%", top: "25%" },
      { src: "/brand/hair-energy/creambath/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "275px", aspectRatio: "1646 / 2786", left: "48%", top: "10%" },
    ],
    showcaseTitle: "/brand/hair-energy/creambath/showcase/title.png",
    showcaseTitleAspect: "4871 / 3832",
    featured: { image: "/brand/hair-energy/creambath/showcase/1.png", label: "Fibertherapy Creambath — varian unggulan" },
    featuredAspect: "4868 / 2326",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/creambath/showcase/2.png", label: "Fibertherapy Creambath varian 1" },
      { image: "/brand/hair-energy/creambath/showcase/3.png", label: "Fibertherapy Creambath varian 2" },
      { image: "/brand/hair-energy/creambath/showcase/4.png", label: "Fibertherapy Creambath varian 3" },
      { image: "/brand/hair-energy/creambath/showcase/5.png", label: "Fibertherapy Creambath varian 4" },
    ],
  },
  // ── Hair Energy → Scentsations ────────────────────────────────────────────
  {
    slug: "scentsations",
    parent: "hair-energy",
    name: "Scentsations",
    tagline: "Tagline sub-brand di sini — ganti dengan copy asli.",
    ctaText: "Learn more",
    ctaHref: "#showcase",
    accentHex: HE_ACCENT,
    bannerBg: HE_ACCENT,
    cards: [
      CARD("Varian 1"),
      CARD("Varian 2"),
      CARD("Varian 3"),
      CARD("Varian 4"),
      CARD("Varian 5"),
      CARD("Varian 6"),
      CARD("Varian 7"),
      CARD("Varian 8"),
    ],
  },
  // ── Hair Energy → Fibertherapy Shampoo ────────────────────────────────────
  {
    slug: "shampoo",
    parent: "hair-energy",
    name: "Fibertherapy Shampoo",
    tagline: "Tagline sub-brand di sini — ganti dengan copy asli.",
    ctaText: "Learn more",
    ctaHref: "#showcase",
    accentHex: HE_ACCENT,
    bannerBg: HE_ACCENT,
    cards: [
      CARD("Varian 1"),
      CARD("Varian 2"),
      CARD("Varian 3"),
      CARD("Varian 4"),
      CARD("Varian 5"),
      CARD("Varian 6"),
    ],
  },
  // ── Hair Energy → Vitaglitz ───────────────────────────────────────────────
  {
    slug: "vitaglitz",
    parent: "hair-energy",
    name: "Vitaglitz",
    tagline: "Tagline sub-brand di sini — ganti dengan copy asli.",
    ctaText: "Learn more",
    ctaHref: "#showcase",
    accentHex: HE_ACCENT,
    bannerBg: HE_ACCENT,
    featured: CARD("Varian unggulan"),
    cards: [CARD("Varian 1"), CARD("Varian 2")],
  },
];

export const getSubBrand = (parent: string, slug: string) =>
  SUB_BRANDS.find((s) => s.parent === parent && s.slug === slug);

export const subBrandsOf = (parent: string) =>
  SUB_BRANDS.filter((s) => s.parent === parent);
