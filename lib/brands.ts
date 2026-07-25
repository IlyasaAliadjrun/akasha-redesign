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
  tagline?: string;
  // Optional second line under the tagline — a lighter, smaller supporting sentence
  // (the tagline reads as the heading). Honours "\n" for a manual line break.
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  left?: string; // block left offset (default "5%")
  // Extra left padding applied to the tagline + CTA only (desktop), to line them up
  // with the *visible* wordmark letters when the logo art has transparent margin /
  // glow on its left. Express relative to logoWidth (e.g. logo solid-edge at 2.5% of
  // a 34vw logo → "0.85vw"). Omit for no indent.
  bodyIndent?: string;
  maxWidth?: string; // block max width (omit to let the tagline run wider than the logo)
  offsetY?: string; // vertical nudge from centre, e.g. "10vh" moves the block down
  theme?: "light" | "dark"; // text colour (default "light" = white)
  delay?: number; // entrance delay in seconds
  // On mobile (<768px) the layout switches to: wordmark top-centre, tagline + CTA
  // bottom-left. Only the logo size differs per brand, set here.
  mobile?: { logoWidth?: string };
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
  tagline: string;
  description: string;
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
  lineupTitle?: string;
  products?: {
    name: string;
    variant?: string;
    size?: string;
    price?: string;
    image?: string;
    // Per-product size tweak in the lineup (default 1). <1 shrinks a product whose
    // artwork reads larger than its siblings (e.g. less transparent margin).
    imageScale?: number;
  }[];
  features?: { title: string; body: string; image: string }[];
  reasons?: { icon: string; title: string; body: string }[];
  about?: { image: string; title: string }[];
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
  name: string;
  tagline: string;
  brandCount: number;
  accentHex: string;
  image: string;
}[] = [
  {
    id: "beverage",
    name: "Mineral Water",
    tagline: "Purity you can taste",
    brandCount: 2,
    accentHex: "#0066CC",
    image: "/home/division-cards/beverage.jpg",
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    tagline: "Confidence, bottled",
    brandCount: 6,
    accentHex: "#C9956B",
    image: "/home/division-cards/beauty.png",
  },
  {
    id: "mens",
    name: "Men's Care",
    tagline: "Groomed, every day",
    brandCount: 1,
    accentHex: "#5B6B7F",
    image: "/home/hero-carousel/barber-daily.jpg",
  },
  {
    id: "food",
    name: "Food and Beverage",
    tagline: "Flavors that bring people together",
    brandCount: 4,
    accentHex: "#E85D2C",
    image:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1600&auto=format&fit=crop",
  },
];

export const BRANDS: Brand[] = [
  {
    slug: "nestle-pure-life",
    name: "Nestlé Pure Life",
    division: "beverage",
    tagline: "Kemurnian di setiap tetes",
    description: "Air mineral pH netral yang diproses ketat dengan 12 tahap kemurnian kualitas Nestlé",
    accentClass: "bg-brand-npl",
    accentHex: "#0077B6",
    heroImage: "/brand/nestle-pure-life/hero/background.jpg",
    // Layered parallax banner — same scheme as Hair Energy, but here the three
    // assets are pre-composed full-bleed layers on one shared 4267×2464 canvas, so
    // they line up pixel-perfect at scroll-top (parallax offset = 0) and only drift
    // apart as the hero scrolls away. Order = stacking (last = front).
    heroLayers: [
      // background.jpg — full-bleed gradient backdrop (image, not a flat colour).
      // `cover` so it always fills the hero; it's a smooth gradient, so any crop is
      // invisible. Slowest parallax drift, settles in first.
      { src: "/brand/nestle-pure-life/hero/background.jpg", depth: 20, enterDelay: 0 },
      // produk-1.png — the bottles. DESKTOP: full landscape canvas shown `contain`,
      // nudged right via `position`. MOBILE: swap to a tight bottles crop
      // (produk-bottles.png) rendered as a *sized & positioned* layer (Hair-Energy
      // style) so the product stays prominent and centred on a tall phone screen.
      // `aspectRatio` is the mobile crop's ratio (only used by the sized mobile path).
      { src: "/brand/nestle-pure-life/hero/1.png", depth: 70, fit: "contain", position: "72% 50%", enterFrom: "right", enterDelay: 0.4,
        aspectRatio: "1084 / 1304",
        mobile: { src: "/brand/nestle-pure-life/hero/1-mobile.png", width: "min(70vw, 46vh)", left: "20%", top: "25%" } },
    ],
    // Wordmark is an HTML overlay (same pattern as Hair Energy): the enlarged
    // wordmark logo with a tagline + CTA button beneath it. `wordmark-lockup.png` is
    // the tight content crop of the `wordmark-1.png` asset (the "NESTLÉ PURE LIFE"
    // lockup + its drop shadow); the tagline + button below are our own HTML.
    heroContent: {
      logo: "/brand/nestle-pure-life/hero/wordmark.png",
      logoAspect: "1430 / 297",
      logoWidth: "34vw",
      tagline: "Kemurnian di setiap tetes",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "9%",
      bodyIndent: "0.85vw", // aligns tagline/CTA with the wordmark's visible letters
      theme: "light",
      delay: 0.5,
      mobile: { logoWidth: "72vw" },
    },
    bannerBg: "#E6097E",
    hero: true,
    about: [
      { title: "Dari Sumber Mata Air Bersuhu Dingin (hingga 18°C)", image: "/brand/nestle-pure-life/about/1.png" },
      { title: "Teknologi Standar Internasional", image: "/brand/nestle-pure-life/about/2.png" },
      { title: "Dikirim dengan Armada Tertutup", image: "/brand/nestle-pure-life/about/3.png" },
    ],
    products: [
      { name: "Pure Life", variant: "330 mL", size: "24 pack / dus", image: "/brand/nestle-pure-life/product-lineup/330ml.jpg" },
      { name: "Pure Life", variant: "600 mL", size: "24 pack / dus", image: "/brand/nestle-pure-life/product-lineup/600ml.jpg" },
      { name: "Pure Life", variant: "1500 mL", size: "12 pack / dus", image: "/brand/nestle-pure-life/product-lineup/1500ml.jpg" },
      { name: "Pure Life", variant: "Galon", size: "15 L", image: "/brand/nestle-pure-life/product-lineup/galon-15l.jpg" },
    ],
    reasons: [
      { icon: "💧", title: "Dimurnikan 12 tahap", body: "Setiap botol melewati proses penyaringan berlapis sebelum sampai ke tanganmu." },
      { icon: "🌿", title: "Bebas mineral berlebih", body: "Rasanya bersih, ringan, dan tidak meninggalkan aftertaste." },
      { icon: "☕", title: "Disukai para barista", body: "Menjaga karakter asli kopi spesialti yang kamu seduh." },
      { icon: "👨‍👩‍👧", title: "Aman untuk keluarga", body: "Direkomendasikan untuk ibu hamil dan si kecil yang sedang tumbuh." },
    ],
    features: [
      {
        title: "Kemurnian di setiap tetes",
        body: "Dimurnikan melalui proses berlapis sehingga setiap teguk terasa bersih dan jernih.",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Segar tanpa harus dingin",
        body: "Rasa yang stabil di suhu ruang — cocok untuk kopi pagi hingga olahraga sore.",
        image:
          "https://images.unsplash.com/photo-1550505095-81378a674395?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Pilihan keluarga Indonesia",
        body: "Dari ibu hamil hingga barista kopi, dipercaya di rumah dan kafe di seluruh nusantara.",
        image:
          "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1400&auto=format&fit=crop",
      },
    ],
    // Same poster-style showcase system as Hair Energy, four variant banners (one
    // per SKU: 330 mL, 600 mL, 1500 mL, 15 L). NPL's assets differ from HE's:
    //   - title is a PORTRAIT person cutout (2048×3179), not a landscape poster —
    //     hence heroMaxWidth caps it so it isn't far taller than HE's title;
    //   - each variant bg (`{n}-2`) is a plain blue gradient with NO baked-in text
    //     (the design has no wording), so productAlign "sides" rests the bottle on
    //     alternating left/right (per the reference) with the other half left clear;
    //   - products (`{n}-1`) share one 1809×2015 canvas with each SKU drawn at its
    //     true relative size, so the 330 mL reads small and the 15 L gallon large.
    showcase: {
      hero: "/brand/nestle-pure-life/showcase/title.png",
      heroAspect: "1250 / 763",
      // Landscape title poster — sized close to the variant banners below it. min()
      // caps it at ~52rem on desktop and holds it at 92vw on a phone.
      heroMaxWidth: "min(92vw, 52rem)",
      productAlign: "sides",
      // Whole NPL showcase is static — no scroll parallax on product or background.
      parallax: false,
      variants: [
        // productHeight is tuned per SKU so every bottle sits FULLY INSIDE its banner
        // (no overflow/clipping). Each bottle fills a different share of the shared
        // 1809×2015 canvas (330 mL only 61%, gallon 93%), so the smaller SKUs take a
        // larger value to land at a comparable on-screen size; the gallon still reads
        // largest because it's much wider.
        // 330 mL & 600 mL: vertically centred. productShiftX nudges the bottle off
        // the wording baked into the banner background (left banner → left, etc.).
        { bg: "/brand/nestle-pure-life/showcase/1-2.png", product: "/brand/nestle-pure-life/showcase/1-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "125%", productShiftX: "-14%" },
        { bg: "/brand/nestle-pure-life/showcase/2-2.png", product: "/brand/nestle-pure-life/showcase/2-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "100%", productShiftX: "14%" },
        // 1500 mL & 15 L: grounded on the banner bottom.
        // Their PNGs have ~0 transparent margin below the bottle, so no bottom offset.
        { bg: "/brand/nestle-pure-life/showcase/3-2.png", product: "/brand/nestle-pure-life/showcase/3-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "96%", groundBottom: true },
        { bg: "/brand/nestle-pure-life/showcase/4-2.png", product: "/brand/nestle-pure-life/showcase/4-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "92%", groundBottom: true },
      ],
    },
  },
  {
    slug: "vica",
    name: "VICA",
    division: "beverage",
    tagline: "Tutup Kuning, Paling Bening.",
    // Becomes the BrandIntro headline (BrandIntro appends its own period, so no
    // trailing "." here; no ". " inside so it stays one line).
    description:
      "Kemurnian dari kaki Gunung Salak, disempurnakan filtrasi 0.2 micron",
    accentClass: "bg-brand-vica",
    accentHex: "#0044A1", // Vica splat blue (buttons, eyebrow, CTA)
    heroImage:
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1800&auto=format&fit=crop",
    // Hero — yellow banner (bannerBg) with the "ViCA" splat wordmark on the left and
    // the 3-bottle cluster (hero/1.png) on the right. Mirrors the Hair Energy hero
    // pattern; matches the provided VICA landing-page reference.
    heroLayers: [
      // hero/1.png is now a TIGHT portrait cluster of the 3 bottles (transparent,
      // 2785×3778) — one asset for both viewports, rendered as a sized layer.
      // DESKTOP: anchored right, vertically centred. MOBILE: centred between the
      // wordmark (top) and the tagline block (bottom). No parallax (depth 0).
      { src: "/brand/vica/hero/1.png", depth: 0, enterFrom: "right", enterDelay: 0.3,
        width: "min(32vw, 460px)", aspectRatio: "2785 / 3778", right: "9%", top: "17%",
        mobile: { width: "min(58vw, 34vh)", left: "21%", top: "42%" } },
    ],
    // Wordmark image already includes the "Tutup Kuning, Paling Bening" tagline, so no
    // separate HTML tagline/CTA (the reference hero has none either).
    heroContent: {
      logo: "/brand/vica/hero/wordmark.png",
      logoAspect: "550 / 595",
      logoWidth: "22vw",
      left: "10%",
      theme: "dark",
      delay: 0.5,
      mobile: { logoWidth: "46vw" },
    },
    bannerBg: "#ECE700", // Vica yellow
    hero: false,
    products: [
      { name: "VICA", variant: "220 mL", image: "/brand/vica/product-lineup/vica_220ml.png", imageScale: 0.7 },
      { name: "VICA", variant: "330 mL", image: "/brand/vica/product-lineup/vica_330ml.png", imageScale: 0.8},
      { name: "VICA", variant: "600 mL", image: "/brand/vica/product-lineup/vica_600ml.png", imageScale: 0.9 },
      { name: "VICA", variant: "1010 mL", image: "/brand/vica/product-lineup/vica_1010ml.png", imageScale: 0.9 },
      { name: "VICA", variant: "1500 mL", image: "/brand/vica/product-lineup/vica_1500ml.png" },
    ],
    about: [
      { title: "Dari mata air yang kemurniannya terjaga lebih dari 100 tahun", image: "/brand/vica/about/1.png" },
      { title: "Melalui teknologi filtrasi 0,2 micron", image: "/brand/vica/about/2.png" },
      { title: "Diproses mesin Krones dengan full automation", image: "/brand/vica/about/3.png" },
    ],
    reasons: [
      { icon: "⛰️", title: "Bersumber dari alam", body: "Air mineral alami langsung dari Mata Air Ciburial, kaki Gunung Salak." },
      { icon: "✨", title: "Mineral seimbang", body: "Kandungan mineral alami untuk menjaga kesegaran tubuh sepanjang hari." },
      { icon: "🏠", title: "Pilihan rumah tangga", body: "Diproduksi sejak 2011, sudah dipercaya ribuan keluarga." },
    ],
    // Poster-style showcase (same engine as Hair Energy / NPL). title.png = the
    // "Murni dari sumbernya" banner; then 5 SKU banners. Each bg ({n}-2) is a yellow
    // card with the giant name baked in, leaving one side clear for the bottle, so
    // productAlign "sides" — but the sides ALTERNATE the opposite way to the default
    // (banner 1's bottle sits RIGHT), hence the explicit `side` per variant.
    showcase: {
      hero: "/brand/vica/showcase/title.png",
      heroAspect: "1250 / 764",
      heroMaxWidth: "min(92vw, 52rem)",
      productAlign: "sides",
      parallax: false,
      variants: [
        // Sizing/position knobs per banner (all % → resolution-independent; each also
        // takes an optional `mobile: { productHeight?, productShiftX?, productShiftY? }`
        // to tune phones separately):
        //   productHeight — size (% of banner height)
        //   productShiftX / productShiftY — nudge left-right / up-down (% of product box)
        //   groundBottom — sit the bottle base on the banner's bottom edge
        // NOTE: the product PNGs are 1220×1220 SQUARE canvases with the bottle drawn
        // inside, so `productAspect` is 1/1 and the bottle only fills ~84–92% of the
        // box height — hence productHeight runs higher than the bottle's visual size.
        // productShiftX pushes the box back toward its side to cancel the canvas's
        // transparent side padding (~18–30%).
        // MOBILE: the banner is much narrower, so the bottle needs to be bigger
        // relative to it and sit OVER the wording (no side shift) — matching the
        // mobile reference. Hence `mobile: { productHeight, productShiftX: "0%" }`.
        // 220 mL — MINI BOOSTER (bottle right, centred)
        { bg: "/brand/vica/showcase/1-2.png", product: "/brand/vica/showcase/1-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "93%", side: "right", productShiftX: "-15%",
          mobile: { productHeight: "112%", productShiftX: "-5%" } },
        // 330 mL — POCKET FRESH (bottle left, centred)
        { bg: "/brand/vica/showcase/2-2.png", product: "/brand/vica/showcase/2-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "90%", side: "left", productShiftX: "25%",
          mobile: { productHeight: "106%", productShiftX: "20%" } },
        // 600 mL — DAILY BUDDY (bottle right, grounded)
        { bg: "/brand/vica/showcase/3-2.png", product: "/brand/vica/showcase/3-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "88%", side: "right", productShiftX: "-20%", groundBottom: true,
          mobile: { productHeight: "106%", productShiftX: "-10%" } },
        // 1010 mL — LONGER HYDRATION (bottle left, grounded)
        { bg: "/brand/vica/showcase/4-2.png", product: "/brand/vica/showcase/4-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "92%", side: "left", productShiftX: "18%", groundBottom: true,
          mobile: { productHeight: "106%", productShiftX: "15%" } },
        // 1500 mL — ALL-DAY HYDRATION (bottle right, grounded)
        { bg: "/brand/vica/showcase/5-2.png", product: "/brand/vica/showcase/5-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "93%", side: "right", productShiftX: "-16%", groundBottom: true,
          mobile: { productHeight: "106%", productShiftX: "-5%" } },
      ],
    },
  },

  /* ───────────────── Beauty & Personal Care ───────────────── */

  // 1 — Makarizo (umbrella brand)
  {
    slug: "makarizo",
    name: "Makarizo",
    division: "beauty",
    flagship: "hair-energy",
    tagline: "Ahli rambut Indonesia.",
    description:
      "Rumah bagi rangkaian perawatan rambut & tubuh Makarizo — dari Asters dan Advisor hingga Hair Energy, t1, dan 128.",
    accentClass: "bg-brand-makarizo",
    accentHex: "#D4447C",
    heroImage: "/home/hero-carousel/hair-energy.jpg",
    hero: false,
    reasons: [
      { icon: "💇", title: "Lebih dari 40 tahun keahlian rambut", body: "Inovasi perawatan rambut yang tumbuh bersama wanita Indonesia." },
      { icon: "🧴", title: "Satu rumah, banyak rangkaian", body: "Dari daily care hingga fragrance — semua kebutuhan rambut dalam satu brand." },
      { icon: "❤️", title: "Dipercaya lintas generasi", body: "Dari salon profesional hingga rutinitas di rumah." },
    ],
  },
  // 1a — Asters
  {
    slug: "asters",
    name: "Asters",
    division: "beauty",
    parent: "makarizo",
    tagline: "Solusi Teruji Klinis untuk Semua Masalah Kulit Kepala dan Rambut",
    description:
      "Advisor menghadirkan solusi berstandar klinis untuk rambut. Setiap formula dikembangkan oleh apoteker denagn dosis yang berkhasiat.",
    accentClass: "bg-brand-asters",
    accentHex: "#7C5CBF",
    heroImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 1b — Advisor
  {
    slug: "advisor",
    name: "Advisor",
    division: "beauty",
    parent: "makarizo",
    tagline: "Solusi Teruji Klinis untuk Semua Masalah Kulit Kepala dan Rambut",
    description:
      "Advisor menghadirkan solusi berstandar klinis untuk rambut. Setiap formula dikembangkan oleh apoteker denagn dosis yang berkhasiat.",
    accentClass: "bg-brand-advisor",
    accentHex: "#727272",
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop",
    hero: true,
  },
  // 1c — Hair Energy
  {
    slug: "hair-energy",
    name: "Hair Energy",
    division: "beauty",
    parent: "makarizo",
    tagline: "Salon-quality care, at home.",
    description:
      "Perawatan rambut lengkap dari Makarizo Hair Energy — untuk rambut rontok, kering, hingga berminyak.",
    accentClass: "bg-brand-he",
    // Hair Energy's visual identity is orange (matches its banner / bannerBg),
    // not the pink it used to inherit from Makarizo.
    accentHex: "#F36C21",
    // No standalone 3:4 brand card art yet — reuse the 16:9 home banner. Only
    // CrossSell reads this; the hero itself renders from `heroLayers`.
    heroImage: "/home/hero-carousel/hair-energy.jpg",
    // Per-brand layered parallax banner. Order in this array = stacking (last =
    // front); entrance timing is controlled by `enterDelay`, entrance direction by
    // `enterFrom`. Positions/sizes are vw/% so the whole composition scales as one.
    heroLayers: [
      // All three products share one (natural) size. produk-1 & produk-3 sit level;
      // produk-2 (front) sits slightly lower, with only a small overlap between them.
      // Creambath — left, enters from the LEFT (1st).
      { src: "/brand/hair-energy/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(28vw, 56vh)", aspectRatio: "2687 / 3660", left: "44%", top: "7%",
        mobile: { left: "5%", top: "25%", width: "min(54vw, 42vh)" } },
      // Scentsations — right, level with creambath, enters from the RIGHT (3rd).
      { src: "/brand/hair-energy/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(28vw, 56vh)", aspectRatio: "2687 / 3660", left: "64%", top: "4%",
        mobile: { left: "45%", top: "23%", width: "min(54vw, 42vh)" } },
      // Shampoo — front/centre, slightly lower, enters from the TOP (2nd).
      { src: "/brand/hair-energy/hero/2.png", depth: 72, enterFrom: "top", enterDelay: 0.2, width: "min(28vw, 56vh)", aspectRatio: "2687 / 3660", left: "54%", top: "19%",
        mobile: { left: "25%", top: "33%", width: "min(54vw, 42vh)" } },
    ],
    heroContent: {
      logo: "/brand/hair-energy/hero/wordmark.png",
      logoAspect: "1576 / 1086",
      logoWidth: "18vw",
      maxWidth: "26vw",
      tagline: "Rambut Lembut & Wangi Setiap Hari.",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "21%",
      offsetY: "8vh",
      theme: "light",
      delay: 0.6,
      mobile: { logoWidth: "26vw" },
    },
    bannerBg: "#F36C21",
    hero: true,
    products: [
      { name: "Fibertherapy Shampoo", variant: "Active Menthol", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-active-menthol-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Aloe Melon", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-aloe-melon-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Citrus Tea", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-citrus-tea-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Kiwi", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-kiwi-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Olive", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-olive-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Royal Jelly", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-royal-jelly-170ml.png" },
      { name: "Fibertherapy Creambath", variant: "Aloe Melon", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-aloe-melon-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Ginseng", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-ginseng-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Kiwi", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-kiwi-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Olive", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-olive-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Royal Jelly", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-royal-jelly-500ml.png" },
      { name: "Scentsations", variant: "Amber Wood", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-amber-wood-100ml.png" },
      { name: "Scentsations", variant: "Blue Coast", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-blue-coast-100ml.png" },
      { name: "Scentsations", variant: "Cherry Blossoms", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-cherry-blossoms-100ml.png" },
      { name: "Scentsations", variant: "Emerald Crush", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-emerald-crush-100ml.png" },
      { name: "Scentsations", variant: "Fresh Bouquet", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-fresh-bouquet-100ml.png" },
      { name: "Scentsations", variant: "Morning Dew", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-morning-dew-100ml.png" },
      { name: "Scentsations", variant: "Ocean Breeze", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-ocean-breeze-100ml.png" },
      { name: "Scentsations", variant: "White Musk", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-white-musk-100ml.png" },
      { name: "Vitaglitz", variant: "Aloe Melon", size: "6×1 mL", image: "/brand/hair-energy/product-lineup/vitaglitz-aloe-melon-6x1ml.png" },
      { name: "Vitaglitz", variant: "Kiwi", size: "6×1 mL", image: "/brand/hair-energy/product-lineup/vitaglitz-kiwi-6x1ml.png" },
      { name: "Vitaglitz", variant: "Royal Jelly", size: "6×1 mL", image: "/brand/hair-energy/product-lineup/vitaglitz-royal-jelly-6x1ml.png" },
    ],
    reasons: [
      { icon: "🌸", title: "Wangi tahan seharian", body: "Formula fragrance yang menempel lembut di rambut dan tubuh." },
      { icon: "🧴", title: "Nutrisi salon di rumah", body: "Creambath dengan Royal Jelly, Kiwi, dan Olive — senutrisi perawatan profesional." },
      { icon: "💆", title: "Untuk setiap kondisi rambut", body: "Rontok, kering, berminyak, atau rusak — ada varian yang tepat untukmu." },
      { icon: "💖", title: "Dicintai Gen-Z Indonesia", body: "Rutinitas #EasyToKnow yang jadi favorit self-care di TikTok." },
    ],
    about: [
      { title: "Perawatan Rambut dengan Keratin", image: "/brand/hair-energy/about/1.png" },
      { title: "Formula pH Balance", image: "/brand/hair-energy/about/2.png" },
      { title: "Natural Extract", image: "/brand/hair-energy/about/3.png" },
    ],
    showcase: {
      hero: "/brand/hair-energy/showcase/title.png",
      heroAspect: "5219 / 3799",
      // Each variant banner links to its sub-brand (product-line) page.
      variants: [
        { bg: "/brand/hair-energy/showcase/1-2.png", product: "/brand/hair-energy/showcase/1-1.png", href: "/brands/hair-energy/shampoo" },
        { bg: "/brand/hair-energy/showcase/2-2.png", product: "/brand/hair-energy/showcase/2-1.png", href: "/brands/hair-energy/creambath" },
        { bg: "/brand/hair-energy/showcase/3-2.png", product: "/brand/hair-energy/showcase/3-1.png", href: "/brands/hair-energy/scentsations" },
        { bg: "/brand/hair-energy/showcase/4-2.png", product: "/brand/hair-energy/showcase/4-1.png", productAspect: "1470 / 2073", productHeight: "75%", href: "/brands/hair-energy/vitaglitz" },
      ],
    },
    features: [
      {
        title: "Creambath berkualitas salon",
        body: "Fibertherapy dengan Royal Jelly, Kiwi, dan Olive untuk nutrisi mendalam dari akar ke ujung.",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Wangi tahan seharian",
        body: "Scentsations hair & body fragrance — tiga varian wangi yang menemani sepanjang hari.",
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Untuk setiap kondisi rambut",
        body: "Rambut rontok, kering, berminyak, atau bercabang — ada solusi untuk setiap cerita rambutmu.",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  // 1d — t1
  {
    slug: "t1",
    name: "T1",
    division: "beauty",
    parent: "makarizo",
    tagline: "Styling tanpa batas.",
    description:
      "Rangkaian styling t1 dari Makarizo untuk tampilan rambut yang ekspresif, tahan lama, dan mudah dibentuk.",
    accentClass: "bg-brand-t1",
    accentHex: "#E07A5F",
    heroImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 1e — 128
  {
    slug: "128",
    name: "128",
    division: "beauty",
    tagline: "Rahasia Kecantikan dari Dasar Samudera.",
    // Becomes the BrandIntro headline (it appends its own period, so none here).
    description:
      "Skincare pertama di Indonesia dengan Saccharina Japonica, yang melembapkan, menenangkan, dan kaya antioksidan",
    accentClass: "bg-brand-128",
    accentHex: "#E8735C", // 128 coral — Learn more / Buy / CTA
    heroImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop",
    // Hero — coral banner (bannerBg) with the "128" wordmark + tagline on the left and
    // the product cluster (composited from hero/1–4) on the right. Hair Energy pattern.
    heroLayers: [
      { src: "/brand/128/hero/cluster.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        width: "min(52vw, 700px)", aspectRatio: "3493 / 2130", right: "1%", top: "20%",
        mobile: { width: "min(96vw, 440px)", left: "2%", top: "34%" } },
    ],
    heroContent: {
      logo: "/brand/128/hero/wordmark.png",
      logoAspect: "2160 / 1415",
      logoWidth: "22vw",
      maxWidth: "40vw",
      tagline: "Rahasia Kecantikan\ndari Dasar Samudera",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "9%",
      // white text on the coral banner (theme omitted = white)
      delay: 0.5,
      mobile: { logoWidth: "50vw" },
    },
    bannerBg: "#FBA084", // 128 coral
    hero: true,
    // Full skincare line-up (9 SKU across the four ranges).
    products: [
      { name: "Facial Wash", variant: "Bright & Radiance", image: "/brand/128/product-lineup/facial-wash-bright-radiance.png" },
      { name: "Toner", variant: "Bright & Radiance", image: "/brand/128/product-lineup/toner-bright-radiance.png" },
      { name: "Serum", variant: "Bright & Radiance", image: "/brand/128/product-lineup/serum-bright-radiance.png" },
      { name: "Moisturizer", variant: "Bright & Radiance", image: "/brand/128/product-lineup/moisturizer-bright-radiance.png" },
      { name: "Facial Wash", variant: "Intensive Barrier Care", image: "/brand/128/product-lineup/facial-wash-intensive-barrier-care.png" },
      { name: "Primer", variant: "Intensive Barrier Care", image: "/brand/128/product-lineup/primer-intensive-barrier-care.png" },
      { name: "Boost", variant: "Intensive Barrier Care", image: "/brand/128/product-lineup/boost-intensive-barrier-care.png" },
      { name: "Moisturizer", variant: "Pro Acne Defense", image: "/brand/128/product-lineup/moisturizer-pro-acne-defense.png" },
      { name: "Moisturizer", variant: "Advanced Age Repair", image: "/brand/128/product-lineup/moisturizer-advanced-age-repair.png" },
    ],
    about: [
      { title: "Diperkaya Saccharina Japonica", image: "/brand/128/about/1.png" },
      { title: "Melembapkan Kulit", image: "/brand/128/about/2.png" },
      { title: "Skin Barrier Lebih Kuat", image: "/brand/128/about/3.png" },
    ],
    // Showcase — title poster then four range banners. Each bg ({n}-last) is a designed
    // coral/nude/green/purple text card (2160×1015), and the product cluster ({cluster-n},
    // composited from that range's product PNGs) sits centred over it. bannerAspect keeps
    // the designed card uncropped.
    showcase: {
      hero: "/brand/128/showcase/title.png",
      heroAspect: "2160 / 1348",
      heroMaxWidth: "min(92vw, 46rem)",
      productAlign: "center",
      bannerAspect: "2160 / 1015",
      variants: [
        // BRIGHT & RADIANCE — 4 products (wide cluster → sits centred, text peeks at edges)
        { bg: "/brand/128/showcase/1-5.png", product: "/brand/128/showcase/cluster-1.png", bgAspect: "2160 / 1015", productAspect: "3307 / 2090", productHeight: "88%" },
        // INTENSIVE BARRIER CARE — 3 products
        { bg: "/brand/128/showcase/2-4.png", product: "/brand/128/showcase/cluster-2.png", bgAspect: "2160 / 1015", productAspect: "2661 / 2090", productHeight: "94%" },
        // PRO ACNE DEFENSE — 2 products, nudged left of the wording
        { bg: "/brand/128/showcase/3-3.png", product: "/brand/128/showcase/cluster-3.png", bgAspect: "2160 / 1015", productAspect: "1802 / 2090", productHeight: "102%", productShiftX: "-24%" },
        // ADVANCED AGE REPAIR — 1 product, slightly left of centre
        { bg: "/brand/128/showcase/4-2.png", product: "/brand/128/showcase/cluster-4.png", bgAspect: "2160 / 1015", productAspect: "1494 / 2090", productHeight: "102%", productShiftX: "-6%" },
      ],
    },
  },

  // 2 — Makarizo Professional
  {
    slug: "makarizo-professional",
    name: "Makarizo Professional",
    division: "beauty",
    flagship: "salon-daily",
    tagline: "43 tahun besar bersama salon Indonesia.",
    description:
      "Brand salon profesional terdepan di Indonesia. Edukasi, komunitas, dan produk untuk para ahli rambut.",
    accentClass: "bg-brand-makpro",
    accentHex: "#2C2C2C",
    heroImage: "/home/hero-carousel/makarizo-professional.jpg",
    hero: true,
    products: [
      { name: "Concept Ultimax SF3", variant: "Coloring System", size: "Professional Use" },
      { name: "Rebonding System", variant: "Texturing", size: "Professional Use" },
      { name: "Hydroprisma", variant: "Texturing", size: "Professional Use" },
      { name: "Texture Experience", variant: "Treatment", size: "Salon Treatment" },
      { name: "Honey Dew Nutriv Serum", variant: "Treatment", size: "Salon Care" },
      { name: "Salon Daily", variant: "Hair Mask", size: "Home Care" },
      { name: "Salon Daily", variant: "Styling", size: "Home Care" },
      { name: "Salon Daily", variant: "Hair Care", size: "Home Care" },
    ],
    reasons: [
      { icon: "🏆", title: "43 tahun keahlian", body: "Brand salon profesional paling lama di Indonesia — dipercaya lintas generasi." },
      { icon: "🎓", title: "Didukung FAME Academy", body: "Edukasi berkelanjutan untuk hairdresser memastikan hasil selalu premium." },
      { icon: "🎨", title: "Sistem pewarnaan presisi", body: "Concept Ultimax SF3 — warna akurat, konsisten, dan tahan lama." },
      { icon: "🤝", title: "Komunitas Makarizo Circle", body: "360° salon business support: produk, edukasi, dan jaringan profesional." },
    ],
    features: [
      {
        title: "Coloring yang presisi",
        body: "Concept Ultimax SF3 — sistem pewarnaan rambut yang diandalkan profesional.",
        image:
          "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Texture Experience",
        body: "Treatment yang mengubah tekstur rambut dengan kelembutan dan kilau salon.",
        image:
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "FAME Academy",
        body: "Edukasi berkelanjutan untuk hairdresser — karena ilmu adalah produk terbaik.",
        image:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  // 2a — Salon Daily
  {
    slug: "salon-daily",
    name: "Salon Daily",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Rasa salon, setiap hari.",
    description:
      "Rangkaian home care Makarizo Professional untuk menjaga hasil perawatan salon tetap terasa setiap hari.",
    accentClass: "bg-brand-salondaily",
    accentHex: "#4A6FA5",
    heroImage:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2b — Honey Dew
  {
    slug: "honey-dew",
    name: "Honey Dew",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Nutrisi madu untuk rambut.",
    description:
      "Honey Dew Nutriv Serum dari Makarizo Professional menutrisi rambut dengan kelembapan dan kilau alami.",
    accentClass: "bg-brand-honeydew",
    accentHex: "#C9A227",
    heroImage:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2c — Concept Ultimax
  {
    slug: "concept-ultimax",
    name: "Concept Ultimax",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Sistem pewarnaan presisi.",
    description:
      "Concept Ultimax SF3 — sistem pewarnaan rambut profesional dengan warna akurat, konsisten, dan tahan lama.",
    accentClass: "bg-brand-ultimax",
    accentHex: "#5B3A8E",
    heroImage:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2d — Rebonding System
  {
    slug: "rebonding-system",
    name: "Rebonding System",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Rambut lurus sempurna.",
    description:
      "Rebonding System Makarizo Professional meluruskan rambut dengan hasil halus, rapi, dan tahan lama.",
    accentClass: "bg-brand-rebonding",
    accentHex: "#2C6E7F",
    heroImage:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2e — Texture Experience
  {
    slug: "texture-experience",
    name: "Texture Experience",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Tekstur rambut yang hidup.",
    description:
      "Texture Experience mengubah tekstur rambut dengan kelembutan dan kilau khas salon profesional.",
    accentClass: "bg-brand-texture",
    accentHex: "#B5651D",
    heroImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2f — MK3
  {
    slug: "mk3",
    name: "MK3",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Performa salon profesional.",
    description:
      "MK3 dari Makarizo Professional menghadirkan rangkaian perawatan dengan performa tingkat salon.",
    accentClass: "bg-brand-mk3",
    accentHex: "#3D405B",
    heroImage:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },

  // 3 — Inoskin
  {
    slug: "inoskin",
    name: "Inoskin",
    division: "beauty",
    tagline: "Science-led skincare.",
    description:
      "Perawatan kulit berbasis sains dari Akasha — formula efektif untuk kulit yang sehat, cerah, dan terhidrasi.",
    accentClass: "bg-brand-inoskin",
    accentHex: "#2BB8A3",
    heroImage:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    reasons: [
      { icon: "🔬", title: "Formula berbasis sains", body: "Dikembangkan dengan bahan aktif yang teruji untuk hasil nyata." },
      { icon: "💧", title: "Hidrasi mendalam", body: "Menjaga kelembapan kulit sepanjang hari tanpa terasa berat." },
      { icon: "🌿", title: "Lembut untuk kulit sensitif", body: "Diformulasikan agar aman dipakai setiap hari." },
    ],
  },
  // 4 — LOU
  {
    slug: "lou",
    name: "LOU",
    division: "beauty",
    tagline: "Beauty, your way.",
    description:
      "Rangkaian personal care LOU yang memadukan perawatan dan ekspresi diri dalam sentuhan modern.",
    accentClass: "bg-brand-lou",
    accentHex: "#B5838D",
    heroImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    reasons: [
      { icon: "✨", title: "Tampil sesuai dirimu", body: "Produk yang dirancang untuk mendukung ekspresi diri setiap hari." },
      { icon: "🪞", title: "Perawatan yang menyenangkan", body: "Rutinitas perawatan yang terasa seperti me-time." },
      { icon: "🌸", title: "Formula lembut", body: "Dipilih dengan bahan yang ramah di kulit." },
    ],
  },
  // 5 — Make It
  {
    slug: "make-it",
    name: "Make It",
    division: "beauty",
    tagline: "Your scent. Your story.",
    description:
      "Parfum untuk individu proaktif yang berani mewujudkan mimpi. Empat karakter, empat aroma.",
    accentClass: "bg-brand-makeit",
    accentHex: "#1C1C1C",
    heroImage:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Keep In Touch", variant: "Warm & Connecting", size: "Eau de Parfum" },
      { name: "Weekday Hustle", variant: "Focused & Resilient", size: "Eau de Parfum" },
      { name: "Dream Chaser", variant: "Ambitious & Confident", size: "Eau de Parfum" },
      { name: "Social Butterfly", variant: "Charismatic & Magnetic", size: "Eau de Parfum" },
    ],
    reasons: [
      { icon: "🎯", title: "Dibuat untuk karakter", body: "Empat archetype — pilih yang paling menggambarkan kamu hari ini." },
      { icon: "🌃", title: "Long-lasting performance", body: "Top, heart, dan base notes yang berkembang sepanjang hari." },
      { icon: "🪞", title: "Signature scent ready", body: "Formula clean yang mudah dipadupadankan dengan wardrobe-mu." },
    ],
    features: [
      {
        title: "Dream Chaser",
        body: "Semangat ambisi dan tekad — menyalakan motivasi dan memancarkan rasa percaya diri.",
        image:
          "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Weekday Hustle",
        body: "Produktivitas, ketahanan, dan fokus dalam satu semprotan.",
        image:
          "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Social Butterfly",
        body: "Karisma sosial dan daya tarik magnetik yang memantik percakapan.",
        image:
          "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  // 6 — Finest
  {
    slug: "finest",
    name: "Finest",
    division: "beauty",
    tagline: "Crafted to the finest detail.",
    description:
      "Rangkaian personal care premium Finest — perawatan dengan kualitas terbaik di setiap detailnya.",
    accentClass: "bg-brand-finest",
    accentHex: "#8E7CC3",
    heroImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    reasons: [
      { icon: "💎", title: "Kualitas premium", body: "Dibuat dengan bahan pilihan untuk hasil terbaik." },
      { icon: "🤍", title: "Detail yang diperhatikan", body: "Setiap produk dirancang dengan ketelitian tinggi." },
      { icon: "🌟", title: "Pengalaman mewah", body: "Perawatan yang terasa istimewa setiap kali digunakan." },
    ],
  },

  /* ───────────────── Men's Care ───────────────── */
  {
    slug: "barber-daily",
    name: "Barber Daily",
    division: "mens",
    tagline: "Barbershop-quality grooming, every day.",
    description:
      "Grooming essentials untuk pria modern — pomade, beard care, dan rutinitas pasca-cukur ala barbershop di rumah.",
    accentClass: "bg-brand-bd",
    accentHex: "#5B6B7F",
    heroImage: "/home/hero-carousel/barber-daily.jpg",
    hero: false,
  },

  /* ───────────────── Food and Beverage ───────────────── */
  {
    slug: "wonhae",
    name: "Wonhae",
    division: "food",
    tagline: "It's All You Want.",
    // Becomes the BrandIntro headline (it appends its own period, so none here).
    description:
      "Cita rasa autentik Korea Selatan, dikurasi khusus untuk Anda",
    accentClass: "bg-brand-wonhae",
    accentHex: "#E63946", // Wonhae red — Learn more / Buy / CTA
    heroImage:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1800&auto=format&fit=crop",
    // Hero — yellow banner (bannerBg) with the WONHAE lockup on the left and the
    // product cluster on the right. Same pattern as the Hair Energy hero.
    heroLayers: [
      { src: "/brand/wonhae/hero/1.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        width: "min(46vw, 620px)", aspectRatio: "1949 / 1828", right: "3%", top: "14%",
        mobile: { width: "min(90vw, 410px)", left: "5%", top: "33%" } },
    ],
    // The wordmark image already includes the "IT'S ALL YOU WANT" heading + subtitle
    // (per the updated asset / reference), so no separate HTML tagline is drawn — just
    // the lockup. Dark text theme keeps the navbar legible on the yellow banner.
    heroContent: {
      logo: "/brand/wonhae/hero/wordmark.png",
      logoAspect: "1000 / 579",
      logoWidth: "26vw",
      left: "9%",
      theme: "dark",
      delay: 0.5,
      mobile: { logoWidth: "62vw" },
    },
    bannerBg: "#FFDD58", // Wonhae yellow
    hero: true,
    products: [
      // Ready to eat — topokki & ramyun
      { name: "Spicy Rapokki", size: "155 g", image: "/brand/wonhae/product-lineup/spicy-rapokki-155g.png" },
      { name: "Topokki", variant: "Carbonara", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-carbonara-80g.png" },
      { name: "Topokki Kids", variant: "Carbonara", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-kids-carbo-new-80g.png" },
      { name: "Topokki Kids", variant: "Baby Shark", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-kids-baby-shark-80g.png" },
      { name: "Black Fried Ramyun", size: "125 g", image: "/brand/wonhae/product-lineup/black-fried-ramyun-125g-front.png" },
      { name: "Cheese Ramyun", size: "120 g", image: "/brand/wonhae/product-lineup/cheese-ramyun-120gr.png" },
      { name: "Cheese Ramyun", size: "90 g", image: "/brand/wonhae/product-lineup/cheese-ramyun-90g.png" },
      { name: "Fried Rose Ramyun", size: "120 g", image: "/brand/wonhae/product-lineup/fried-rose-ramyun-120gr.png" },
      { name: "Fried Rose Ramyun", size: "97 g", image: "/brand/wonhae/product-lineup/fried-rose-ramyun-97g.png" },
      { name: "Fried Corn Cheese Ramyun", size: "120 g", image: "/brand/wonhae/product-lineup/fried-corn-cheese-ramyun-120gr.png" },
      // Snacks
      { name: "Topokki Snack", variant: "Creamy Rose", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-rose-80-gr.png" },
      { name: "Topokki Snack", variant: "Sweet & Spicy", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-ss-80-gr.png" },
      { name: "Topokki Snack", variant: "Cheese Buldak", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-cheese-buldak-80g.png" },
      { name: "Topokki Snack", variant: "Cheese Truffle Mayo", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-cheese-truffle-mayo-80gr.png" },
      { name: "Topokki Snack", variant: "Creamy Rose", size: "16 g", image: "/brand/wonhae/product-lineup/topokki-snack-creamy-rose-16gr.png" },
      { name: "Topokki Snack", variant: "Sweet & Spicy", size: "16 g", image: "/brand/wonhae/product-lineup/topokki-snack-spicy-sweet-16gr.png" },
      { name: "Potato Snack", variant: "Spicy Korean", size: "60 g", image: "/brand/wonhae/product-lineup/potatosnack-spicy-korean-60gr.png" },
      { name: "Nori Crispy", image: "/brand/wonhae/product-lineup/nori-crispy.png" },
      { name: "Beef Seaweed", size: "120 g", image: "/brand/wonhae/product-lineup/beef-seaweed-120gr.png" },
      { name: "Churros Snack", variant: "Original", size: "60 g", image: "/brand/wonhae/product-lineup/churros-original.png" },
      { name: "Churros Snack", variant: "Peanut Butter", size: "60 g", image: "/brand/wonhae/product-lineup/churros-peanut-butter.png" },
      // Confectionery
      { name: "Banana Bites", variant: "Original", size: "60 g", image: "/brand/wonhae/product-lineup/banana-bites-ori-60gr.png" },
      { name: "Banana Bites", variant: "Choco", size: "60 g", image: "/brand/wonhae/product-lineup/banana-bites-choco-60gr.png" },
      { name: "Banana Bites", size: "12 g", image: "/brand/wonhae/product-lineup/banana-bites-12gr.png" },
      { name: "Matcha Berry Bites", image: "/brand/wonhae/product-lineup/matcha-berry-bites-mockup.png" },
      { name: "Pistachio Choco Bites", size: "30 g", image: "/brand/wonhae/product-lineup/pistachio-choco-bites-30g.png" },
      { name: "Strawberry Cheesecake Bites", size: "30 g", image: "/brand/wonhae/product-lineup/strawberry-cheesecake-30g.png" },
      { name: "Choco Gummy", size: "35 g", image: "/brand/wonhae/product-lineup/choco-gummy-35-gr.png" },
      { name: "Yogurt Gummy", size: "48 g", image: "/brand/wonhae/product-lineup/yogurt-gummy-48gr.png" },
      // Ready to drink
      { name: "Banana Milk", variant: "Original", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-ori.png" },
      { name: "Banana Milk", variant: "Choco", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-choco.png" },
      { name: "Banana Milk", variant: "Creamy", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-creamy.png" },
      { name: "Banana Milk", variant: "Strawberry", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-strawberry.png" },
      { name: "Watermelon Milk", size: "180 mL", image: "/brand/wonhae/product-lineup/watermelon-milk-180ml.png" },
      { name: "Melon Milk", size: "180 mL", image: "/brand/wonhae/product-lineup/melon-milk-180ml-alfamart.png" },
      { name: "Cheesecake Milk", size: "250 mL", image: "/brand/wonhae/product-lineup/cheesecake-milk-250ml.png" },
      { name: "DIY Cafe", variant: "Blue Lemonade", size: "180 mL", image: "/brand/wonhae/product-lineup/diy-cafe-front-blue-lemonade-180ml.png" },
      { name: "DIY Cafe", variant: "Peach Lemonade", size: "180 mL", image: "/brand/wonhae/product-lineup/diy-cafe-front-peach-lemonade-180ml.png" },
      { name: "DIY Cafe", variant: "Pineapple Lemonade", size: "180 mL", image: "/brand/wonhae/product-lineup/diy-cafe-front-pineapple-lemonade-180ml.png" },
    ],
    about: [
      { title: "Cita Rasa Korea yang Autentik", image: "/brand/wonhae/about/1.png" },
      { title: "Beragam Pilihan Produk", image: "/brand/wonhae/about/2.png" },
      { title: "Bahan Baku Berkualitas Tinggi", image: "/brand/wonhae/about/3.png" },
    ],
    // Showcase — title poster then four category banners. Each bg ({n}-2) carries the
    // baked wording, and the product cluster ({n}-1) sits OVER it, so productAlign is
    // "center" (Hair Energy pattern). Banners 3 & 4 place the cluster to one side, so
    // they get a productShiftX; banners 1 & 2 stay centred.
    showcase: {
      hero: "/brand/wonhae/showcase/title.png",
      heroAspect: "2340 / 1443",
      heroMaxWidth: "min(92vw, 52rem)",
      productAlign: "center",
      variants: [
        // READY TO EAT — cluster centred
        { bg: "/brand/wonhae/showcase/1-2.png", product: "/brand/wonhae/showcase/1-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "112%" },
        // READY TO DRINK — cluster centred
        { bg: "/brand/wonhae/showcase/2-2.png", product: "/brand/wonhae/showcase/2-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "104%" },
        // CONFECTIONERY — wording left, cluster right
        { bg: "/brand/wonhae/showcase/3-2.png", product: "/brand/wonhae/showcase/3-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "110%", productShiftX: "26%" },
        // SNACKS — cluster left, wording right
        { bg: "/brand/wonhae/showcase/4-2.png", product: "/brand/wonhae/showcase/4-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "112%", productShiftX: "-25%" },
      ],
    },
    reasons: [
      { icon: "🇰🇷", title: "Rasa otentik Korea", body: "Dikembangkan dengan referensi langsung ke street food Korea — bukan sekadar terinspirasi." },
      { icon: "⏱️", title: "Siap dalam 3 menit", body: "Semua produk Mujigae praktis diolah — cocok untuk lapar tengah malam." },
      { icon: "🌶️", title: "Variasi level pedas", body: "Dari mild carbonara sampai spicy rose — ada untuk setiap lidah." },
      { icon: "🛒", title: "Tersedia di mini-market", body: "Hadir di Alfamart, Indomaret, dan e-commerce favoritmu." },
    ],
    features: [
      {
        title: "Topokki di rumah, rasa seperti di Myeongdong",
        body: "Kunyahan empuk dengan saus pedas-manis yang otentik — siap dalam menit.",
        image:
          "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ramyun dengan twist",
        body: "Butter Corn, Cheese, Fried Rose — sentuhan modern untuk mie Korea favoritmu.",
        image:
          "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Snack time, upgraded",
        body: "Banana Milk Bites, Nori Crispy, Potato Spicy — teman ngumpul & scroll.",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "omoide",
    name: "Omoide",
    division: "food",
    tagline: "A bowl of Japanese memories.",
    description:
      "Udon instan yang membawa rasa kenangan Jepang dengan penyajian praktis dan harga terjangkau.",
    accentClass: "bg-brand-omoide",
    accentHex: "#C17817",
    heroImage:
      "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Carbonara Udon", variant: "Creamy Cheese", size: "260g · 150 cal" },
      { name: "Kake Udon", variant: "Classic Broth", size: "215g · 50 cal" },
    ],
    reasons: [
      { icon: "🍜", title: "Tekstur udon asli", body: "Lembut, kenyal, tebal — dibuat dengan standar udon Jepang." },
      { icon: "🧀", title: "Parmesan asli di Carbonara", body: "Bukan perasa — saus dibuat dengan keju Parmesan sungguhan." },
      { icon: "🐟", title: "Kaldu katsuo tradisional", body: "Kake Udon memakai kaldu ikan yang melalui proses smoking ala Jepang." },
    ],
    features: [
      {
        title: "Carbonara Udon",
        body: "Udon lembut dengan saus carbonara kaya dari Parmesan asli. Milky, cheesy, thick.",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Kake Udon",
        body: "Kaldu umami yang halus dari ikan katsuo — sederhana tapi penuh jiwa.",
        image:
          "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "floaty",
    name: "Floaty",
    division: "food",
    tagline: "Literally light. Seriously fun.",
    description:
      "Snack bantal berbahan oat dengan packaging yang sengaja mirip makanan kucing — untuk dipamerkan dan diprank.",
    accentClass: "bg-brand-floaty",
    accentHex: "#00B4D8",
    heroImage:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Floaty", variant: "Original", size: "60g" },
      { name: "Floaty", variant: "Original Mini", size: "16g" },
      { name: "Floaty", variant: "Terserah", size: "60g · Mystery Flavor" },
    ],
    reasons: [
      { icon: "😹", title: "Packaging pemancing tawa", body: "Didesain seperti makanan kucing — jadi konten, jadi bahan prank." },
      { icon: "🌾", title: "Tinggi kandungan oat", body: "Berbahan dasar oat, renyah dan ringan di perut." },
      { icon: "🎁", title: "Varian Terserah", body: "Rasa misteri yang bikin penasaran — cocok buat seru-seruan." },
    ],
    features: [
      {
        title: "Ini MAKANAN KUCING",
        body: "…bohong. Ini snack buat kamu. Packaging jenaka yang jadi bahan obrolan.",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ringan beneran",
        body: "Oat-based pillow snack. Renyah, ringan, dan tinggi kandungan oat.",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "fitmeup",
    name: "Fitmeup",
    division: "food",
    tagline: "Botanical inspiration.",
    description:
      "Platform wellness tentang antioksidan, ilmu botani, dan gaya hidup sehat — karena alam menyajikan semuanya untukmu.",
    accentClass: "bg-brand-fitmeup",
    accentHex: "#588157",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Botanipedia", variant: "Antioxidant Guide", size: "Digital Content" },
      { name: "Home Farming", variant: "Starter Guide", size: "Digital Content" },
      { name: "Botanical Lifestyle", variant: "Weekly Journal", size: "Digital Content" },
      { name: "Plant-Based Recipes", variant: "Recipe Series", size: "Digital Content" },
    ],
    reasons: [
      { icon: "🌱", title: "Edukasi antioksidan", body: "Memahami cara melindungi sel dari radikal bebas lewat tanaman sehari-hari." },
      { icon: "🪴", title: "Home farming guide", body: "Mulai kebun kecilmu sendiri — panduan praktis dari pot ke panen." },
      { icon: "🧘", title: "Gaya hidup botani", body: "Konten lifestyle yang menghubungkan wellness dengan alam." },
    ],
    features: [
      {
        title: "Botanipedia",
        body: "Kenali manfaat tersembunyi dari tanaman di sekitarmu.",
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Home Farming",
        body: "Panduan menanam di rumah — kebun kecil untuk hidup lebih sehat.",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
];

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
