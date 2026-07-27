import type { Brand } from "@/lib/brands";

  // 1b — Advisor
const entry: Brand = {
    slug: "advisor",
    name: "Advisor",
    division: "beauty",
    parent: "makarizo",
    tagline: "Solusi Teruji Klinis untuk Semua Masalah Kulit Kepala dan Rambut",
    description:
      "Advisor menghadirkan solusi berstandar klinis untuk rambut. Setiap formula dikembangkan oleh apoteker dengan dosis yang berkhasiat.",
    accentClass: "bg-brand-advisor",
    // Advisor orange — sampled from the wordmark's check mark and the showcase title
    // graphic (both rgb(252,80,0)). Drives the eyebrow, product wash, CTA buttons.
    accentHex: "#FC5000",
    // No dedicated 3:4 brand-card art; the CrossSell card is the only consumer, so it
    // reuses the About hair-texture photo (already 3:4). The hero itself renders from
    // `heroLayers`, never from this.
    heroImage: "/brand/advisor/about/3.png",
    // Per-brand layered parallax banner, same pattern as Hair Energy: three products
    // clustered on the right of a flat banner, wordmark + copy on the left. Order in
    // this array = stacking (last = front). Every canvas has a different amount of
    // transparent padding, so the widths below are tuned per asset to make the three
    // bottles read at a comparable *visual* size (they are NOT the same number).
    heroLayers: [
      // Hair Recovery Vitamax — back row, left of the cluster, enters from the LEFT (1st).
      { src: "/brand/advisor/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(18vw, 31vh)", aspectRatio: "1560 / 2402", left: "48.5%", top: "30%",
        mobile: { left: "4%", top: "37%", width: "min(40vw, 26vh)" } },
      // Hair Mask Repair — back row, right of the cluster, enters from the RIGHT (3rd).
      { src: "/brand/advisor/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(21vw, 37vh)", aspectRatio: "1814 / 2527", left: "72%", top: "33%",
        mobile: { left: "48%", top: "33%", width: "min(50vw, 30vh)" } },
      // Dual Defense Shampoo — front/centre, sits slightly lower, enters from the TOP (2nd).
      { src: "/brand/advisor/hero/2.png", depth: 72, enterFrom: "top", enterDelay: 0.2, width: "min(31vw, 55vh)", aspectRatio: "2812 / 3502", left: "54%", top: "21%",
        mobile: { left: "10%", top: "27.5%", width: "min(78vw, 38vh)" } },
    ],
    // The wordmark carries no tagline of its own (unlike VICA/Wonhae), so the hero
    // keeps the full Hair Energy overlay: wordmark + tagline + subtitle + CTA. Copy is
    // taken from the brand's own showcase title art ("TEKNOLOGI PERAWATAN RAMBUT",
    // "#ScalpAndHairExpert", "Diformulasikan oleh Apoteker").
    heroContent: {
      logo: "/brand/advisor/hero/wordmark.png",
      logoAspect: "1825 / 623",
      logoWidth: "24vw",
      maxWidth: "34vw",
      tagline: "Teknologi Perawatan Rambut.",
      subtitle: "#ScalpAndHairExpert — diformulasikan oleh apoteker.",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "9%",
      offsetY: "4vh",
      // Light clinical banner → dark text, and the navbar paints its dark treatment.
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "62vw" },
    },
    // Clinical off-white — the exact card grey used across Advisor's own showcase art.
    bannerBg: "#F4F4F4",
    // No /home/hero-carousel/advisor.jpg exists yet, so Advisor stays off the homepage
    // carousel (guide §B.3 default) until that asset is delivered.
    hero: false,
    products: [
      { name: "Dual Defense Shampoo", variant: "Anti Dandruff & Hair Fall", size: "200 mL", image: "/brand/advisor/product-lineup/advisor-02.png" },
      { name: "Hair & Scalp Tonic", variant: "Anti Dandruff & Hair Fall", size: "140 mL", image: "/brand/advisor/product-lineup/advisor-13.png" },
      { name: "Hair & Scalp Tonic", variant: "Anti Dandruff & Hair Fall", size: "60 mL", image: "/brand/advisor/product-lineup/advisor-12.png" },
      { name: "Hair Mask Repair", variant: "Dry & Damaged Hair", size: "100 mL", image: "/brand/advisor/product-lineup/advisor-01.png" },
      { name: "Hair Mask Repair", variant: "Dry & Damaged Hair", size: "30 mL", image: "/brand/advisor/product-lineup/advisor-14.png" },
      { name: "Hair Protection Keratin Spray", variant: "Dry & Damaged Hair", size: "60 mL", image: "/brand/advisor/product-lineup/advisor-11.png" },
      { name: "Hair Recovery Vitamax", variant: "Dry & Damaged Hair", size: "8 mL × 3", image: "/brand/advisor/product-lineup/advisor-05.png" },
    ],
    about: [
      { title: "Diformulasikan oleh Apoteker", image: "/brand/advisor/about/1.png" },
      { title: "Bahan Aktif Berdosis Klinis", image: "/brand/advisor/about/2.png" },
      { title: "Solusi untuk Kulit Kepala & Rambut", image: "/brand/advisor/about/3.png" },
    ],
    // Poster-style showcase (same engine as Hair Energy): title graphic, then one
    // banner per product line with the giant line name baked into the card and the
    // product resting centred on top.
    showcase: {
      hero: "/brand/advisor/showcase/title.png",
      heroAspect: "4606 / 3409",
      productAlign: "center",
      // The banners are finished cards: rounded corners, card grey, and a sub-copy that
      // runs down to 93% of the art's height. The default 5/2 frame would cover-crop
      // ~7.5% off the top and bottom and clip that sub-copy, so the frame is set to the
      // art's own ratio — which in turn means the background exactly fills the frame,
      // so the scroll drift is switched off (it would otherwise expose a bare edge).
      bannerAspect: "4810 / 2260",
      parallax: false,
      variants: [
        // Each product PNG has a different amount of transparent margin (the bottle
        // fills 59–75% of its canvas height), so `productHeight` is tuned per banner to
        // land every product at roughly the same visible height, ~105–112% of the
        // banner — the Hair Energy proportion. All values are %, so the composition
        // scales identically on mobile; no per-viewport override is needed.
        // CLINICAL SHAMPOO — Dual Defense Shampoo
        { bg: "/brand/advisor/showcase/1-2.png", product: "/brand/advisor/showcase/1-1.png", bgAspect: "4810 / 2260", productAspect: "1 / 1", productHeight: "150%" },
        // HAIR MASK — Hair Mask Repair
        { bg: "/brand/advisor/showcase/2-2.png", product: "/brand/advisor/showcase/2-1.png", bgAspect: "4810 / 2261", productAspect: "1 / 1", productHeight: "177%" },
        // HAIR TONIC — Hair & Scalp Tonic
        { bg: "/brand/advisor/showcase/3-2.png", product: "/brand/advisor/showcase/3-1.png", bgAspect: "4810 / 2260", productAspect: "2652 / 3400", productHeight: "180%" },
        // VITAMAX — Hair Recovery Vitamax
        { bg: "/brand/advisor/showcase/4-2.png", product: "/brand/advisor/showcase/4-1.png", bgAspect: "4810 / 2260", productAspect: "1 / 1", productHeight: "158%" },
        // KERATIN SPRAY — Hair Protection Keratin Spray
        { bg: "/brand/advisor/showcase/5-2.png", product: "/brand/advisor/showcase/5-1.png", bgAspect: "4810 / 2260", productAspect: "1 / 1", productHeight: "152%" },
      ],
    },
  };

export default entry;
