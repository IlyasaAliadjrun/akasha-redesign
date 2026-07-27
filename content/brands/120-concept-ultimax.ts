import type { Brand } from "@/lib/brands";

  // 2c — Concept Ultimax
const entry: Brand = {
    slug: "concept-ultimax",
    name: "Concept Ultimax",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Pewarna rambut permanen Vegan Vibrant.",
    // Single sentence on purpose: BrandIntro renders the first sentence as the big
    // statement and everything after ". " as the light grey second line. The
    // reference has only the one statement, so there is nothing after it.
    description:
      "Pewarna rambut permanen Vegan Vibrant dengan efek warna yang lebih intens, lebih berkilau dan tahan lama berkat SUPER FOODS BIOMOLEKULER",
    accentClass: "bg-brand-ultimax",
    // Concept Ultimax pink — the magenta the reference uses for headings, the
    // check icons and the wordmark (sampled rgb(227,70,134) across the showcase art).
    accentHex: "#E34686",
    // No dedicated 3:4 brand-card art was delivered, so CrossSell reuses the brand's
    // own 3:4 About photo (1534×2046) instead of a generic stock image.
    heroImage: "/brand/concept-ultimax/about/1.png",
    // Two-product banner: the pink Color Tube in front/left, the Activator tube
    // behind/right. Both are sized with `min(vw, vh)` so the pair scales with the
    // viewport but never outgrows a short window. Widths are tuned so the two
    // products' VISIBLE artwork (each PNG carries a different transparent margin)
    // lands at the same optical height, with the Activator reading slightly taller —
    // exactly as in the reference.
    heroLayers: [
      // Activator — behind, right, enters from the right.
      { src: "/brand/concept-ultimax/hero/2.png", depth: 40, enterFrom: "right", enterDelay: 0.35, width: "min(34vw, 59vh)", aspectRatio: "1054 / 1492", left: "51%", top: "16%",
        mobile: { left: "40%", top: "26%", width: "min(58vw, 38vh)" } },
      // Color Tube — in front, left of the Activator, enters from the left.
      { src: "/brand/concept-ultimax/hero/1.png", depth: 58, enterFrom: "left", enterDelay: 0.15, width: "min(32vw, 56vh)", aspectRatio: "1692 / 2538", left: "44%", top: "9%",
        mobile: { left: "2%", top: "30%", width: "min(56vw, 36vh)" } },
    ],
    heroContent: {
      logo: "/brand/concept-ultimax/hero/wordmark.png",
      logoAspect: "2339 / 473",
      // The wordmark is a very wide lockup (4.95:1), so it is deliberately wider than
      // `maxWidth`: the logo <div> carries its own explicit width and overflows the
      // capped text column. `maxWidth` therefore only governs the tagline, keeping it
      // on the reference's two lines ("Pewarna Rambut Permanen" / "Vegan Vibrant").
      logoWidth: "44vw",
      maxWidth: "32vw",
      tagline: "Pewarna Rambut Permanen Vegan Vibrant",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "5%",
      offsetY: "10vh",
      // Pale banner → dark type (and the navbar paints itself for a light backdrop).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "78vw" },
    },
    // Pale sage the whole Concept Ultimax system is set on (sampled rgb(230,234,228)).
    bannerBg: "#E6EAE4",
    hero: false,
    products: [
      // `variant` carries the full spec because the range repeats every developer
      // strength in two pack sizes — name+variant is the card's React key, so it has
      // to stay unique per SKU.
      { name: "Color Tube", variant: "90 gr", image: "/brand/concept-ultimax/product-lineup/color-tube-90gr.png" },
      { name: "Bleaching Powder", variant: "250 gr", image: "/brand/concept-ultimax/product-lineup/bleaching-powder-250gr.png" },
      { name: "Bleaching Powder", variant: "500 gr", image: "/brand/concept-ultimax/product-lineup/bleaching-powder-500gr.png" },
      { name: "Activator", variant: "135 mL", image: "/brand/concept-ultimax/product-lineup/activator-135ml.png" },
      { name: "Cream Developer", variant: "10 Vol · 135 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-135ml-10-vol.png" },
      { name: "Cream Developer", variant: "20 Vol · 135 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-135ml-20-vol.png" },
      { name: "Cream Developer", variant: "30 Vol · 135 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-135ml-30-vol.png" },
      { name: "Cream Developer", variant: "40 Vol · 135 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-135ml-40-vol.png" },
      { name: "Activator", variant: "1000 mL", image: "/brand/concept-ultimax/product-lineup/activator-1000ml.png" },
      { name: "Cream Developer", variant: "10 Vol · 1000 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-1000ml-10-vol.png" },
      { name: "Cream Developer", variant: "20 Vol · 1000 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-1000ml-20-vol.png" },
      { name: "Cream Developer", variant: "30 Vol · 1000 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-1000ml-30-vol.png" },
      { name: "Cream Developer", variant: "40 Vol · 1000 mL", image: "/brand/concept-ultimax/product-lineup/cream-developer-1000ml-40-vol.png" },
    ],
    // Super Foods Biomolekuler — the three actives, in the reference's order.
    about: [
      { title: "Argan Oil", image: "/brand/concept-ultimax/about/3.png" },
      { title: "Ekstrak Pomegranate", image: "/brand/concept-ultimax/about/2.png" },
      { title: "Vegetal Keratin Complex", image: "/brand/concept-ultimax/about/1.png" },
    ],
    showcase: {
      hero: "/brand/concept-ultimax/showcase/title.png",
      heroAspect: "4987 / 2917",
      // These banners are FINISHED cards: the heading, the botanical line art and a
      // two-line caption are all baked into the background. So the frame takes the
      // art's own ratio instead of the 5:2 default — at 5:2 an object-cover crop eats
      // ~7 % off the top and bottom and cuts the caption's second line off.
      bannerAspect: "4810 / 2260",
      // Each variant banner links to its product-line page.
      //
      // `productHeight` / `productShiftX` are per banner and are NOT free choices —
      // each banner's two heading words are staggered diagonally (word 1 upper-left,
      // word 2 lower-right) leaving a narrow vertical corridor between them, and the
      // product has to land in that corridor. Measured off the art itself (as a % of
      // the banner):
      //   1-2  COLOR      x 15.3–43.3   TUBE       x 60.3–79.5  → corridor 43.3–60.3
      //   2-2  CREAM      x 10.6–37.7   DEVELOPER  x 45.3–90.4  → corridor 37.7–45.3
      //   3-2  BLEACHING  x  7.2–51.5   POWDER     x 56.2–90.2  → corridor 51.5–56.2
      // Each product PNG also fills a different share of its own canvas (visible art
      // = 79 % / 40 % / 69 % of canvas width and 69 % / 72 % / 59 % of canvas height),
      // so the box height is what converts to a given VISIBLE width, and the shift
      // re-centres the visible art — not the canvas — on the corridor.
      variants: [
        { bg: "/brand/concept-ultimax/showcase/1-2.png", bgAspect: "4810 / 2260", product: "/brand/concept-ultimax/showcase/1-1.png", productAspect: "1982 / 2657", productHeight: "100%", productShiftX: "-5%", href: "/brands/concept-ultimax/color-tube" },
        { bg: "/brand/concept-ultimax/showcase/2-2.png", bgAspect: "4810 / 2260", product: "/brand/concept-ultimax/showcase/2-1.png", productAspect: "1848 / 2550", productHeight: "114%", productShiftX: "-23%", href: "/brands/concept-ultimax/cream-developer" },
        { bg: "/brand/concept-ultimax/showcase/3-2.png", bgAspect: "4810 / 2260", product: "/brand/concept-ultimax/showcase/3-1.png", productAspect: "1634 / 2043", productHeight: "80%", productShiftX: "13%", href: "/brands/concept-ultimax/bleaching-powder" },
      ],
    },
  };

export default entry;
