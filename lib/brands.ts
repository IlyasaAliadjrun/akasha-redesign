import type { Localized } from "@/lib/locale/paths";

export type DivisionId =
  | "beverage"
  | "beauty"
  | "mens"
  | "food";

// One image layer of a parallax (layered) hero banner. Layers render back-to-front
// in array order; `depth` is how many px the layer drifts up as the hero scrolls
// away — bigger = faster, so a foreground decoration (high depth) appears to float
// over a slower product backdrop (low depth).
export type HeroLayer = {
  src: string;
  depth?: number; // px of parallax travel (default 40)
  fit?: "cover" | "contain"; // object-fit (default cover)
  position?: string; // CSS object-position, e.g. "left top"
  enterFrom?: "left" | "right" | "top" | "bottom"; // entrance slide direction (default: fade only)
  enterDelay?: number; // entrance delay in seconds (default: staggered by layer order)
  // When `width` is set, the layer renders as a *sized* element (not full-bleed)
  // — e.g. a logo/wordmark anchored in a corner. These map to inline CSS (not
  // Tailwind classes, because lib/ isn't scanned by Tailwind).
  width?: string; // CSS width, e.g. "44vw"
  maxWidth?: string; // e.g. "600px"
  aspectRatio?: string; // e.g. "1576 / 1086" (intrinsic ratio of the asset)
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  // Overrides applied on small screens (<768px) — reposition/resize a layer for
  // mobile without touching the desktop values.
  mobile?: {
    src?: string; // swap to a different asset on mobile (e.g. a tight product crop)
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    width?: string;
    enterFrom?: "left" | "right" | "top" | "bottom";
  };
};

// One variant banner in the showcase, built from two layered assets that animate
// independently (parallax on scroll + entrance), reusable across brands:
//   bg      — landscape banner art with text/sparkle (the "{n}-2" file)
//   product — portrait product that sits centred and overflows the banner top &
//             bottom, sliding in from the left (odd banner) or right (even banner).
export type ShowcaseVariant = {
  bg: string;
  product: string;
  // When set, the whole banner becomes a link — used to send each variant to its
  // sub-brand page (e.g. "/brands/hair-energy/creambath").
  href?: string;
  bgAspect?: string; // default "5010 / 2354"
  productAspect?: string; // default "2687 / 3660"
  productHeight?: string; // product height relative to the banner; default "110%" (see BrandShowcase)
  // Nudge the product horizontally (CSS translateX, % of the product box). Negative
  // moves it left, positive right — used to shift a bottle off text baked into the
  // banner background. e.g. "-14%".
  productShiftX?: string;
  // Nudge the product vertically (CSS translateY, % of the product box). Negative =
  // up, positive = down. Works whether the product is centred OR grounded.
  productShiftY?: string;
  // Per-viewport (mobile, <768px) overrides for size/position, so the composition can
  // be tuned independently on phones vs desktop. Any omitted field falls back to the
  // shared value above. All are % / CSS strings, so they hold at any resolution.
  mobile?: {
    productHeight?: string;
    productShiftX?: string;
    productShiftY?: string;
  };
  // In "sides" mode only: force which side the product rests on (and enters from),
  // overriding the default index-parity alternation (odd→left, even→right). Use when
  // each banner's baked-in text dictates the side per-SKU (Vica alternates the other
  // way: banner 1's bottle sits right).
  side?: "left" | "right";
  // Sit this product on the banner's bottom edge instead of centring it vertically.
  groundBottom?: boolean;
  // CSS translateY (e.g. "16%") applied only when `groundBottom` — set it to the
  // product PNG's transparent bottom margin so the bottle's *base* (not the canvas
  // edge) lands on the banner bottom.
  productBottomOffset?: string;
};

// Optional HTML overlay on a (parallax) brand hero — a left-aligned column with a
// logo/wordmark image, a tagline, and a CTA button. Positioned & coloured via CSS
// so it's reusable per brand.
export type HeroContent = {
  logo?: string;
  logoAspect?: string; // intrinsic ratio of the logo, e.g. "1576 / 1086"
  logoWidth?: string; // CSS width, e.g. "32vw"
  logoOffsetX?: string;
  tagline?: Localized<string>;
  taglineColor?: string;
  // Optional second line under the tagline — a lighter, smaller supporting sentence
  // (the tagline reads as the heading). Honours "\n" for a manual line break.
  subtitle?: Localized<string>;
  ctaText?: Localized<string>;
  ctaHref?: string;
  left?: string; // block left offset (default "5%")
  // Extra left padding applied to the tagline + CTA only (desktop), to line them up
  // with the *visible* wordmark letters when the logo art has transparent margin /
  // glow on its left. Express relative to logoWidth (e.g. logo solid-edge at 2.5% of
  // a 34vw logo → "0.85vw"). Omit for no indent.
  bodyIndent?: string;
  maxWidth?: string; // block max width (omit to let the tagline run wider than the logo)
  offsetY?: string; // vertical nudge from centre, e.g. "10vh" moves the block down
  // Text colour + banner-brightness assumption (the latter also drives the navbar
  // via `data-theme`, see BrandHero):
  //   "light"       → white text.  Assumes a DARK banner → navbar renders white.
  //   "dark"        → text-ink (#0A0A0A). Assumes a LIGHT banner → navbar renders dark.
  //   "accent-dark" → text = brand's own `accentHex`. Assumes a DARK banner → navbar white.
  //   "accent-light"→ text = brand's own `accentHex`. Assumes a LIGHT banner → navbar dark.
  // Pick the accent-* variant that matches the actual banner, not the text colour —
  // the accent colour itself doesn't tell you whether the banner behind it is dark
  // or light, so the wrong pick makes the navbar invisible against its own banner.
  theme?: "light" | "dark" | "accent-dark" | "accent-light";
  delay?: number; // entrance delay in seconds
  // On mobile (<768px) the layout switches to: wordmark top-centre, tagline + CTA
  // bottom-left. Size differs per brand, set here. `logo`/`logoAspect`/`tagline`/
  // `ctaText`/`ctaHref` are optional — only set them when mobile needs something
  // *different* from desktop (e.g. a stacked lockup, or shorter copy that fits a
  // narrower column); omitted, each falls back to its desktop value above.
  mobile?: {
    logoWidth?: string;
    logo?: string;
    logoAspect?: string;
    tagline?: Localized<string>;
    ctaText?: Localized<string>;
    ctaHref?: string;
  };
};

export type Brand = {
  slug: string;
  name: string;
  division: DivisionId;
  parent?: string; // slug of the parent brand, for sub-brands
  // Only meaningful on an umbrella brand (one that has sub-brands). An umbrella
  // has no page of its own, so tiles/slides that carry its artwork link here
  // instead. Falls back to the first sub-brand when unset.
  flagship?: string;
  tagline: Localized<string>;
  ctaHeadline?: Localized<string>;
  ctaHeadlineColor?: string;
  hideCtaTagline?: boolean;
  description: Localized<string>;
  accentClass: string; // tailwind bg class
  accentHex: string;
  heroImage: string;
  // Optional layered/parallax hero. When set, it overrides `heroImage` and the
  // layers animate at different scroll speeds (see BrandHero). Assets must be
  // separated into layers (background/product opaque + decoration PNG transparan).
  heroLayers?: HeroLayer[];
  heroContent?: HeroContent; // optional HTML overlay (wordmark + tagline + CTA)
  bannerBg?: string; // background behind a contained brand banner (hero)
  hero: boolean;
  // Heading above the product carousel (default "Explore the lineup."). Wonhae's
  // reference uses "Product.".
  lineupTitle?: Localized<string>;
  products?: {
    name: string; // brand/SKU proper noun — not translated
    variant?: Localized<string>; // e.g. "Gallon"/"Galon" — unit words vary by language
    size?: Localized<string>; // e.g. "24-pack / box" vs "24 pack / dus"
    price?: string; // Rupiah price — same in both locales
    image?: string;
    // Per-product size tweak in the lineup (default 1). <1 shrinks a product whose
    // artwork reads larger than its siblings (e.g. less transparent margin).
    imageScale?: number;
  }[];
  features?: { title: Localized<string>; body: Localized<string>; image: string }[];
  reasons?: { icon: string; title: Localized<string>; body: Localized<string> }[];
  about?: { image: string; title: Localized<string> }[];
  // Poster-style showcase: a title graphic (brand/{slug}/showcase/title) with layered
  // parallax variant banners (brand/{slug}/showcase/{n}-{1,2}) overlapping its bottom edge.
  // `heroAspect` = hero's intrinsic ratio (CSS aspect-ratio; defaults to square).
  // `heroMaxWidth` caps the title width (CSS, e.g. "22rem") — needed for a portrait
  //   title so it doesn't render far taller than a landscape one at the 768px default.
  // `productAlign` = where each variant's product rests: "center" (default, over
  //   full-bleed bg art like Hair Energy) or "sides" (alternating left/right on a
  //   plain bg, mirroring a side-by-side reference like NPL).
  // `parallax` = whether banners drift on scroll (default true); set false for a
  //   fully static showcase (NPL).
  showcase?: {
    hero: string;
    heroAspect?: string;
    heroMaxWidth?: string;
    heroOffsetY?: string;
    productAlign?: "center" | "sides";
    parallax?: boolean;
    // Aspect of each variant banner frame (default "5 / 2"). Set to the bg art's own
    // ratio when the banners are designed cards that must render in full (128).
    bannerAspect?: string;
    variants?: ShowcaseVariant[];
  };
};

export const DIVISIONS: {
  id: DivisionId;
  name: Localized<string>;
  tagline: Localized<string>;
  brandCount: number;
  accentHex: string;
  image: string;
}[] = [
  {
    id: "beverage",
    name: { en: "Mineral Water", id: "Air Mineral" },
    tagline: { en: "Purity you can taste", id: "Kemurnian yang terasa" },
    brandCount: 2,
    accentHex: "#0066CC",
    image: "/home/division-cards/beverage.jpg",
  },
  {
    id: "beauty",
    name: { en: "Beauty & Personal Care", id: "Kecantikan & Perawatan Diri" },
    tagline: { en: "Confidence, bottled", id: "Rasa percaya diri, dalam sebotol" },
    brandCount: 6,
    accentHex: "#C9956B",
    image: "/home/division-cards/beauty.png",
  },
  {
    id: "mens",
    name: { en: "Men's Care", id: "Perawatan Pria" },
    tagline: { en: "Groomed, every day", id: "Tampil rapi, setiap hari" },
    brandCount: 1,
    accentHex: "#5B6B7F",
    image: "/home/hero-carousel/barber-daily.jpg",
  },
  {
    id: "food",
    name: { en: "Food and Beverage", id: "Makanan dan Minuman" },
    tagline: {
      en: "Flavors that bring people together",
      id: "Rasa yang mempersatukan",
    },
    brandCount: 4,
    accentHex: "#E85D2C",
    image:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1600&auto=format&fit=crop",
  },
];

// Auto-discovered brand registry. Each brand is a standalone module in
// content/brands/*.ts (see docs/BRAND_PAGE_GUIDE.md §5). webpack's require.context
// collects them at build time, so ADDING A BRAND NEVER EDITS THIS FILE — you drop
// one new file in content/brands/ and it appears everywhere automatically.
// Files are ordered by their numeric filename prefix (010-, 020-, …); an
// unprefixed new file simply sorts after the numbered ones.
const brandCtx = (require as unknown as WebpackRequire).context("../content/brands", false, /\.ts$/);
export const BRANDS: Brand[] = brandCtx
  .keys()
  // keys() lists every *request form* that resolves to a module, not every file:
  // tsconfig's `baseUrl: "."` puts the project root on webpack's resolve path, so
  // each brand appears twice — "./010-x.ts" and "content/brands/010-x.ts". Keep only
  // the relative form; without this filter every brand is duplicated everywhere.
  .filter((k) => k.startsWith("./"))
  .sort()
  .map((k) => (brandCtx(k) as { default: Brand }).default);



export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
export const heroBrands = () => BRANDS.filter((b) => b.hero);
// Top-level brands of a division (sub-brands are excluded — reach them via childrenOf).
export const brandsByDivision = (id: DivisionId) =>
  BRANDS.filter((b) => b.division === id && !b.parent);
// Sub-brands that belong to a given parent brand.
export const childrenOf = (slug: string) =>
  BRANDS.filter((b) => b.parent === slug);

// An umbrella brand exists only to group its sub-brands (Makarizo, Makarizo
// Professional). It has no page: /brands/{slug} 404s rather than redirecting to a
// child, so nothing may link to it — use brandHref() to resolve a safe target.
export const isUmbrella = (b: Brand) => BRANDS.some((x) => x.parent === b.slug);
// Brands that actually get a page rendered at /brands/{slug}.
export const pageBrands = () => BRANDS.filter((b) => !isUmbrella(b));
// Where a tile/slide carrying `slug`'s artwork should link. Umbrella brands
// resolve to their flagship sub-brand.
export const brandHref = (slug: string) => {
  const b = getBrand(slug);
  if (!b || !isUmbrella(b)) return `/brands/${slug}`;
  return `/brands/${b.flagship ?? childrenOf(slug)[0]?.slug ?? slug}`;
};
