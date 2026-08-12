import type { Brand } from "@/lib/brands";

  // 2b — Honey Dew
const entry: Brand = {
    slug: "honey-dew",
    name: "Honey Dew",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: { en: "Professional Care with Natural Honey Nutrition.", id: "Perawatan Professional dengan Nutrisi Madu Alami." },
    // Rendered by BrandIntro, which appends the full stop itself — so this string
    // deliberately ends without one.
    description: {
      en: "Honey Dew is a premium professional hair care brand that brings you the goodness of Honey Nutrition",
      id: "Honey Dew adalah merek perawatan rambut profesional kelas atas yang menghadirkan kebaikan Nutrisi Madu untukmu",
    },
    accentClass: "bg-brand-honey-dew",
    // Honey Dew gold — sampled from the wordmark art and the showcase banners
    // (both are exactly rgb(224,176,88)).
    accentHex: "#E0B058",
    // No /home/hero-carousel/honey-dew.jpg exists, and CrossSell is the only reader
    // of `heroImage`; the About hair photo is already portrait, so it stands in
    // (same convention as Advisor / Fitmeup).
    heroImage: "/brand/honey-dew/about/3.png",
    // Layered parallax banner on the reference's light grey stage: the pump bottle
    // sits back and highest, the Repair Mask tube overlaps it in front and hangs
    // lower, and the small Nutriv Serum tube tucks in front on the left, below both.
    // Every canvas carries a different amount of transparent margin — measured
    // from the alpha channel, the product fills only 82 % / 44 % / 49 % of its canvas
    // WIDTH (hero/2, hero/3, hero/1) — so each layer's `width` is the canvas width
    // needed to land the visible product at the reference's size, not the product's
    // own size. Both terms of every `min()` are tuned so the cluster keeps the
    // reference's proportions on tall and short desktop viewports alike.
    heroLayers: [
      // Deep Moist & Shine Shampoo — back, highest, enters from the TOP (1st).
      // Visible bottle ≈ 15.5 vw wide, spanning 14 %–43 % of the banner height.
      { src: "/brand/honey-dew/hero/2.png", depth: 36, enterFrom: "top", enterDelay: 0, width: "min(40vw, 42vh)", maxWidth: "836px", aspectRatio: "1672 / 2451", left: "63.5%", top: "10.5%",
        mobile: { left: "26%", top: "25%", width: "min(42vw, 24vh)" } },
      // Repair Mask — in front of the bottle and a touch larger than it (the
      // reference sizes the tube at ~1.15× the bottle); visible tube ≈ 17.5 vw,
      // spanning 24 %–58 % of the banner height.
      { src: "/brand/honey-dew/hero/3.png", depth: 66, enterFrom: "right", enterDelay: 0.3, width: "min(56.7vw, 63vh)", maxWidth: "1529px", aspectRatio: "3058 / 3865", left: "66.2%", top: "24.2%",
        mobile: { left: "26%", top: "30%", width: "min(75vw, 41vh)" } },
      // Nutriv Serum — front left, smallest, enters from the LEFT (2nd).
      { src: "/brand/honey-dew/hero/1.png", depth: 54, enterFrom: "left", enterDelay: 0.15, width: "min(46.5vw, 50vh)", maxWidth: "1139px", aspectRatio: "2278 / 2569", left: "55%", top: "39.6%",
        mobile: { left: "3%", top: "35%", width: "min(60vw, 34vh)" } },
    ],
    // The wordmark is a plain "HONEY DEW" lockup with no tagline baked in, so the
    // hero keeps the full Hair Energy overlay: wordmark + tagline + CTA.
    heroContent: {
      logo: "/brand/honey-dew/hero/wordmark.png",
      logoAspect: "1789 / 284",
      logoWidth: "31vw",
      maxWidth: "33vw",
      tagline: { en: "Professional Care with Natural Honey Nutrition.", id: "Perawatan Professional dengan Nutrisi Madu Alami." },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "8.5%",
      // The reference sits the whole wordmark/tagline/CTA column in the LOWER left of
      // the banner (its CTA bottom lands at ~82 % of the banner height), not on the
      // vertical centre the component defaults to.
      offsetY: "5vh",
      // Light grey banner → dark text, and the navbar paints its dark treatment.
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "53vw" },
    },
    // The reference stages the hero on a neutral light grey, not on the brand gold.
    bannerBg: "#EFEFEF",
    hero: false,
    products: [
      { name: "Deep Moist & Shine Shampoo", variant: { en: "For Dry and Dull Hair", id: "Untuk Rambut Kering dan Kusam" }, image: "/brand/honey-dew/product-lineup/PRODUCTS-01.png" },
      { name: "Repair Mask", image: "/brand/honey-dew/product-lineup/PRODUCTS-02.png" },
      { name: "Nutriv Serum", image: "/brand/honey-dew/product-lineup/PRODUCTS-03.png" },
      { name: "Restructuring Serum", image: "/brand/honey-dew/product-lineup/PRODUCTS-04.png" },
    ],
    about: [
      { title: { en: "Natural Nutrition", id: "Nutrisi Alami" }, image: "/brand/honey-dew/about/1.png" },
      { title: { en: "Lightweight, fast-absorbing texture", id: "Tekstur ringan dan cepat meresap" }, image: "/brand/honey-dew/about/2.png" },
      { title: { en: "Protection from styling heat", id: "Perlindungan dari panas alat styling" }, image: "/brand/honey-dew/about/3.png" },
    ],
    // Poster-style showcase (same engine as Hair Energy): title graphic, then one
    // banner per product line. The banner art is a finished rounded card with its
    // caption baked in, so `bannerAspect` is pinned to the art's own ratio — the
    // default 5/2 frame would crop the rounded corners and clip the caption.
    // NOTE: only two banner pairs were delivered (1-* = SHAMPOO, 2-* = HAIR SERUM).
    // The reference also shows a HAIR MASK banner; its 3-1/3-2 pair is missing, so
    // the Repair Mask line has no entry point here yet.
    showcase: {
      hero: "/brand/honey-dew/showcase/title.png",
      heroAspect: "5044 / 3648",
      bannerAspect: "4810 / 2261",
      variants: [
        // Product heights are tuned so each bottle stays fully inside the banner:
        // the frame clips its product, so the overflow per side must stay under the
        // PNG's own transparent top/bottom margin (7.2 % / 4.0 % here).
        { bg: "/brand/honey-dew/showcase/1-2.png", bgAspect: "4810 / 2261", product: "/brand/honey-dew/showcase/1-1.png", productAspect: "1672 / 2451", productHeight: "106%", productShiftX: "12%", mobile: { productHeight: "102%" }, href: "/brands/honey-dew/shampoo" },
        // Two-tube cluster: 20.6 % top / 17.5 % bottom margin → 134 % is the ceiling.
        { bg: "/brand/honey-dew/showcase/2-2.png", bgAspect: "4810 / 2260", product: "/brand/honey-dew/showcase/2-1.png", productAspect: "2399 / 2689", productHeight: "134%", productShiftY: "-2.5%", mobile: { productHeight: "128%" }, href: "/brands/honey-dew/hair-serum" },
      ],
    },
  };

export default entry;
