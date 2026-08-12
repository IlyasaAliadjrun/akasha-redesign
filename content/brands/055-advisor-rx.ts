import type { Brand } from "@/lib/brands";

  // 1b² — Advisor RX (the clinical Rx line that sits beside Advisor, hence the
  // 055- prefix: it lists directly after 050-advisor.ts and before Hair Energy).
const entry: Brand = {
    slug: "advisor-rx",
    name: "Advisor RX",
    division: "beauty",
    parent: "makarizo",
    tagline: { en: "A new era of clinical hair solutions, dermatologically tested.", id: "Era baru solusi rambut klinis, teruji secara dermatologi." },
    // BrandIntro renders the first sentence as the big headline and the rest as a
    // lighter sub-line, so the split at ". " is deliberate.
    description: {
      en: "Advisor RX brings clinical-grade hair care. Regenaxil™ for hair loss, Melanolix™ for gray hair.",
      id: "Advisor RX menghadirkan perawatan rambut berstandar klinis. Regenaxil™ untuk rambut rontok, Melanolix™ untuk uban.",
    },
    accentClass: "bg-brand-advisor-rx",
    // Advisor orange — sampled from the wordmark's check mark and the showcase title
    // art (both rgb(252,80,0)), identical to the sibling Advisor line. Drives the
    // eyebrow, the product wash, the lineup buttons and the closing CTA band.
    accentHex: "#FC5000",
    // No dedicated 3:4 brand-card art was delivered; CrossSell is the only consumer
    // of `heroImage` and the About hair photo is already 3:4, so it stands in. The
    // hero itself always renders from `heroLayers`, never from this.
    heroImage: "/brand/advisor-rx/about/3.png",
    // Layered parallax banner, same pattern as Hair Energy: the product cluster sits
    // on the right of a flat clinical banner, wordmark + copy on the left. Array
    // order = stacking (last = front). Every canvas carries a DIFFERENT amount of
    // transparent margin (the product fills a different fraction of each canvas
    // height), so the widths below are tuned per asset — they are deliberately not
    // the same number — to land all four products at their true relative sizes
    // (250 mL shampoo > 100 mL mask/tonic > 40 mL serum) and on a shared baseline.
    heroLayers: [
      // Strong Hair Boosting Mask (100 mL) — middle, enters from the TOP (1st).
      { src: "/brand/advisor-rx/hero/2.png", depth: 54, enterFrom: "top", enterDelay: 0.2, width: "min(40vw, 63vh)", maxWidth: "1493px", aspectRatio: "1 / 1", left: "59%", top: "8%",
        mobile: { left: "29.5%", top: "35%", width: "min(60vw, 30vh)" } },
      // Strong Hair Shampoo (250 mL) — largest, left of the cluster, enters from the LEFT (2nd).
      { src: "/brand/advisor-rx/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(51vw, 82vh)", maxWidth: "1944px", aspectRatio: "1 / 1", left: "46.4%", top: "11.7%",
        mobile: { left: "-8.5%", top: "25%", width: "min(84vw, 42vh)" } },
      // Strong Hair Scalp Serum (40 mL) — smallest, front/right, enters from the RIGHT (4th).
      { src: "/brand/advisor-rx/hero/4.png", depth: 84, enterFrom: "right", enterDelay: 0.6, width: "min(20vw, 30vh)", maxWidth: "746px", aspectRatio: "1491 / 2058", left: "67.8%", top: "49.5%",
        mobile: { left: "68%", top: "43.5%", width: "min(26vw, 13vh)" } },
      // Strong Hair Tonic (100 mL) — between the mask and serum, enters from the RIGHT (3rd).
      { src: "/brand/advisor-rx/hero/3.png", depth: 72, enterFrom: "right", enterDelay: 0.4, width: "min(40vw, 74vh)", maxWidth: "1711px", aspectRatio: "1 / 1", left: "62%", top: "17%",
        mobile: { left: "35%", top: "33%", width: "min(72vw, 34vh)" } },
    ],
    // The wordmark is a plain lockup with no tagline baked in (unlike VICA/Wonhae),
    // so this hero keeps the full Hair Energy overlay: wordmark + tagline + subtitle
    // + CTA. Copy is lifted from the brand's own showcase title art ("ERA BARU SOLUSI
    // RAMBUT KLINIS", "#ScalpAndHairExpert", "Teruji Secara Dermatologi").
    heroContent: {
      logo: "/brand/advisor-rx/hero/wordmark.png",
      logoAspect: "1887 / 486",
      logoWidth: "24vw",
      maxWidth: "34vw",
      tagline: { en: "A New Era of Clinical Hair Solutions.", id: "Era Baru Solusi Rambut Klinis." },
      subtitle: { en: "#ScalpAndHairExpert — dermatologically tested.", id: "#ScalpAndHairExpert — teruji secara dermatologi." },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      offsetY: "4vh",
      // Light clinical banner → dark text, and the navbar paints its dark treatment.
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "68vw" },
    },
    // Clinical off-white — the same card grey the Advisor family uses across its art,
    // so the white Strong Hair bottles keep their edge instead of disappearing.
    bannerBg: "#F4F4F4",
    // No /home/hero-carousel/advisor-rx.jpg exists yet, so Advisor RX stays off the
    // homepage carousel (guide §B.3 default) until that asset is delivered.
    hero: false,
    products: [
      { name: "Strong Hair Shampoo", variant: { en: "Regenaxil™", id: "Regenaxil™" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-07.png" },
      { name: "Strong Hair Boosting Mask", variant: { en: "Regenaxil™", id: "Regenaxil™" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-06.png" },
      { name: "Strong Hair Hair Tonic", variant: { en: "Regenaxil™", id: "Regenaxil™" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-04.png" },
      { name: "Strong Hair Scalp Serum", variant: { en: "Regenaxil™", id: "Regenaxil™" }, size: { en: "40 mL", id: "40 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-03.png" },
      { name: "Strong Hair 4 Steps Regimen", variant: { en: "Complete Package", id: "Paket Lengkap" }, image: "/brand/advisor-rx/product-lineup/advisor-16.png" },
      { name: "Grey Hair Shampoo", variant: { en: "Melanolix™", id: "Melanolix™" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-08.png" },
      { name: "Grey Hair Boosting Mask", variant: { en: "Melanolix™", id: "Melanolix™" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-09.png" },
      { name: "Grey Hair Scalp Serum", variant: { en: "Melanolix™", id: "Melanolix™" }, size: { en: "40 mL", id: "40 mL" }, image: "/brand/advisor-rx/product-lineup/advisor-10.png" },
      { name: "Grey Hair 3 Steps Regimen", variant: { en: "Complete Package", id: "Paket Lengkap" }, image: "/brand/advisor-rx/product-lineup/advisor-15.png" },
    ],
    about: [
      { title: { en: "Dermatologically Tested", id: "Teruji Secara Dermatologi" }, image: "/brand/advisor-rx/about/1.png" },
      { title: { en: "Clinically Dosed Active Ingredients", id: "Bahan Aktif Berdosis Klinis" }, image: "/brand/advisor-rx/about/2.png" },
      { title: { en: "Strong Hair, Natural Color Preserved", id: "Rambut Kuat & Warna Alaminya Terjaga" }, image: "/brand/advisor-rx/about/3.png" },
    ],
    // Poster-style showcase (same engine as Hair Energy): the title graphic, then one
    // banner per line — each linking through to its sub-brand page.
    showcase: {
      hero: "/brand/advisor-rx/showcase/title.png",
      heroAspect: "4630 / 3361",
      productAlign: "center",
      // The banners are finished cards: rounded corners, flat brand colour, and a
      // sub-copy that runs to the bottom edge. The default 5/2 frame would cover-crop
      // ~15 % off the top and bottom and clip that sub-copy, so the frame is set to the
      // art's own ratio — which in turn means the background exactly fills the frame,
      // so the scroll drift is switched off (it would otherwise expose a bare edge).
      bannerAspect: "4810 / 2261",
      parallax: false,
      variants: [
        // Both product PNGs are WIDE multi-bottle clusters drawn to span the banner
        // edge-to-edge, so `productHeight` is set to whatever makes the cluster exactly
        // as wide as the banner (frameRatio ÷ clusterRatio). All values are %, so the
        // composition scales identically on mobile; no per-viewport override needed.
        // STRONG HAIR — 4-step regimen (cluster 5423×3139 → 2.127 / 1.728 ≈ 123 %)
        { bg: "/brand/advisor-rx/showcase/1-2.png", product: "/brand/advisor-rx/showcase/1-1.png", bgAspect: "4810 / 2261", 
          productAspect: "5423 / 3139", productHeight: "123%", productShiftY: "10%", href: "/brands/advisor-rx/strong-hair" },
        // GREY HAIR — 3-step regimen (cluster 5592×2330 → 2.128 / 2.400 ≈ 89 %)
        { bg: "/brand/advisor-rx/showcase/2-2.png", product: "/brand/advisor-rx/showcase/2-1.png", bgAspect: "4810 / 2260", 
          productAspect: "5592 / 2330", productHeight: "89%", productShiftY: "2%", href: "/brands/advisor-rx/grey-hair" },
      ],
    },
  };

export default entry;
