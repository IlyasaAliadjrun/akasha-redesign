import type { Brand } from "@/lib/brands";

  // 2e — Texture Experience
const entry: Brand = {
    slug: "texture-experience",
    name: "Texture Experience",
    division: "beauty",
    parent: "makarizo-professional",
    // Shown under the CTA headline ("Rasakan Texture Experience sekarang.").
    tagline: "Perawatan rambut multisensori.",
    // BrandIntro headline. One block (no ". " inside) so it renders as a single
    // extrabold paragraph, exactly like the reference.
    description:
      "Indulge in a multi-sensory experience with a soothing, naturally inspired fragrance",
    accentClass: "bg-brand-texture",
    // Warm taupe sampled from the "texture experience" wordmark art (#686058).
    // Drives the About eyebrow, the lineup wash + Learn more/Buy buttons and the CTA
    // block. The reference paints those blocks in the light beige below, but BrandCTA
    // renders white-on-accent text, so the accent takes the wordmark's own colour.
    accentHex: "#686058",
    // No standalone 3:4 brand card art — CrossSell reads this; the hero renders from
    // `heroLayers`. The About hair photo is already a 3:4 portrait (1534×2046).
    heroImage: "/brand/texture-experience/about/2.png",
    // Hero — flat beige banner (bannerBg; the folder ships no background plate) with
    // the wordmark + wording on the left and the strawberry trio staggered on the
    // right. Hair Energy pattern. Widths use min(vw, vh) so the cluster scales with the
    // shorter axis (the vh term binds from ~16:9 up, the vw term on narrow tablets, so
    // the cluster never outgrows a short window nor collapses on a 768 px one); every
    // layer carries a `mobile`
    // override (§4).
    // NOTE: every PNG has heavy transparent padding (hero/1 fills only ~38% of its
    // canvas width), so the layer boxes below are much wider than the products look.
    heroLayers: [
      // Strawberry Yoghurt Creambath — left of the cluster and highest, enters from
      // the LEFT (1st).
      { src: "/brand/texture-experience/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0,
        width: "min(46vw, 61vh)", aspectRatio: "2745 / 3233", left: "36%", top: "1.4%",
        mobile: { left: "-12%", top: "28%", width: "min(71vw, 33vh)" } },
      // Smooth-Bright Body Essence — right of the cluster and a step lower, enters from
      // the RIGHT (3rd).
      { src: "/brand/texture-experience/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4,
        width: "min(39vw, 52vh)", aspectRatio: "2522 / 3302", left: "59%", top: "12.2%",
        mobile: { left: "41%", top: "31%", width: "min(61vw, 28vh)" } },
      // Berry Smoothie Hair Perfume — front/centre, sits lowest, drops in from the
      // TOP (2nd).
      { src: "/brand/texture-experience/hero/2.png", depth: 72, enterFrom: "top", enterDelay: 0.2,
        width: "min(33vw, 45vh)", aspectRatio: "1958 / 2604", left: "49.9%", top: "14.7%",
        mobile: { left: "18.5%", top: "35%", width: "min(53vw, 24.5vh)" } },
    ],
    heroContent: {
      logo: "/brand/texture-experience/hero/wordmark.png",
      logoAspect: "502 / 214",
      // The wordmark art is only 502 px wide, so the width is capped at its natural
      // size: it never renders upscaled at DPR 1 on any viewport (see the asset note
      // handed to the brand owner about DPR 2).
      logoWidth: "min(28vw, 500px)",
      maxWidth: "min(30vw, 520px)",
      // Reference wording — two lines, no full stop.
      tagline: "Professional Multisensory Indulgence Experience",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "7%",
      offsetY: "6vh",
      // Light banner → dark text (and the navbar paints its dark treatment).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "58vw" },
    },
    bannerBg: "#EAE3DA",
    hero: false,
    // Full Texture Experience range (33 SKU) grouped by scent variant, and within each
    // variant in the reference's own order: shampoo → conditioner → creambath jar →
    // creambath tube → creambath sachet → hair perfume → body essence. Every packshot
    // is a 4500×4500 render, far above the 380 px lineup card (even with the hover
    // zoom), so none of them needs an `imageScale` correction.
    products: [
      // Strawberry Yoghurt — softening & shine-boosting
      { name: "Shampoo", variant: "Strawberry Yoghurt", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_1.png" },
      { name: "Conditioner", variant: "Strawberry Yoghurt", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_6.png" },
      { name: "Creambath", variant: "Strawberry Yoghurt", size: "500 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_21.png" },
      { name: "Creambath", variant: "Strawberry Yoghurt", size: "200 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_16.png" },
      { name: "Creambath", variant: "Strawberry Yoghurt", size: "60 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_11.png" },
      { name: "Hair Perfume Berry Smoothie", variant: "Strawberry Yoghurt", size: "100 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_26.png" },
      { name: "Smooth-Bright Body Essence", variant: "Strawberry Yoghurt", size: "150 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_31.png" },
      // Green Tea Butter — intensive repair
      { name: "Shampoo", variant: "Green Tea Butter", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_5.png" },
      { name: "Conditioner", variant: "Green Tea Butter", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_10.png" },
      { name: "Creambath", variant: "Green Tea Butter", size: "500 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_25.png" },
      { name: "Creambath", variant: "Green Tea Butter", size: "200 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_20.png" },
      { name: "Creambath", variant: "Green Tea Butter", size: "60 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_15.png" },
      { name: "Hair Perfume Tea Blossom", variant: "Green Tea Butter", size: "100 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_30.png" },
      // Black Chocolate — deeply moisturizing
      { name: "Shampoo", variant: "Black Chocolate", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_2.png" },
      { name: "Conditioner", variant: "Black Chocolate", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_7.png" },
      { name: "Creambath", variant: "Black Chocolate", size: "500 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_22.png" },
      { name: "Creambath", variant: "Black Chocolate", size: "200 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_17.png" },
      { name: "Creambath", variant: "Black Chocolate", size: "60 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_12.png" },
      { name: "Hair Perfume Choco Hazelnut", variant: "Black Chocolate", size: "100 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_27.png" },
      { name: "Smooth-Bright Body Essence", variant: "Black Chocolate", size: "150 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_32.png" },
      // Vanilla Milk — intensely nourishing
      { name: "Shampoo", variant: "Vanilla Milk", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_3.png" },
      { name: "Conditioner", variant: "Vanilla Milk", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_8.png" },
      { name: "Creambath", variant: "Vanilla Milk", size: "500 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_23.png" },
      { name: "Creambath", variant: "Vanilla Milk", size: "200 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_18.png" },
      { name: "Creambath", variant: "Vanilla Milk", size: "60 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_13.png" },
      { name: "Hair Perfume Vanilla Souffle", variant: "Vanilla Milk", size: "100 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_28.png" },
      { name: "Smooth-Bright Body Essence", variant: "Vanilla Milk", size: "150 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_33.png" },
      // Mint Sorbet — purifying & refreshing
      { name: "Shampoo", variant: "Mint Sorbet", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_4.png" },
      { name: "Conditioner", variant: "Mint Sorbet", size: "250 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_9.png" },
      { name: "Creambath", variant: "Mint Sorbet", size: "500 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_24.png" },
      { name: "Creambath", variant: "Mint Sorbet", size: "200 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_19.png" },
      { name: "Creambath", variant: "Mint Sorbet", size: "60 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_14.png" },
      { name: "Hair Perfume Mint Mocktail", variant: "Mint Sorbet", size: "100 mL", image: "/brand/texture-experience/product-lineup/Packshot TE_29.png" },
    ],
    about: [
      { title: "Natural Ingredients", image: "/brand/texture-experience/about/1.png" },
      { title: "Wangi 3–4 hari", image: "/brand/texture-experience/about/2.png" },
      { title: "Panthenol & Hydrolized Keratin", image: "/brand/texture-experience/about/3.png" },
    ],
    // Showcase — the "Perawatan Multi-Sensori" poster, then the five scent banners.
    // Each bg ({n}-2) is a designed 4810×2260 card with the variant name split around a
    // gap in the middle and the caption baked in, so `bannerAspect` keeps it uncropped
    // (the MK3 / 128 pattern) and the product pair sits CENTRED in that gap, overflowing
    // the banner top & bottom exactly as the reference shows.
    // The numbers are derived per file, not eyeballed: each pair PNG has a different
    // amount of transparent padding (the products fill 53–68% of the canvas width and
    // 65–77% of its height) and is not centred inside its own canvas, so
    //   productHeight  = 102% (target visible height) ÷ the PNG's own vertical fill,
    //   productShiftX/Y = the offset of the artwork's centre from the canvas centre.
    // Everything is a percentage, so the composition holds identically at every width —
    // no mobile override needed.
    showcase: {
      hero: "/brand/texture-experience/showcase/title.png",
      heroAspect: "4749 / 3163",
      productAlign: "center",
      bannerAspect: "4810 / 2260",
      variants: [
        // STRAWBERRY YOGHURT — creambath tube + Berry Smoothie hair perfume
        { bg: "/brand/texture-experience/showcase/1-2.png", product: "/brand/texture-experience/showcase/1-1.png",
          bgAspect: "4810 / 2260", productAspect: "2289 / 2711", productHeight: "133%",
          productShiftX: "5.6%", productShiftY: "3.1%",
          href: "/brands/texture-experience/strawberry-yoghurt" },
        // GREEN TEA BUTTER — creambath tube + Tea Blossom hair perfume
        { bg: "/brand/texture-experience/showcase/2-2.png", product: "/brand/texture-experience/showcase/2-1.png",
          bgAspect: "4810 / 2260", productAspect: "2636 / 2794", productHeight: "132%",
          productShiftX: "-2.6%", productShiftY: "-3.8%",
          href: "/brands/texture-experience/green-tea-butter" },
        // BLACK CHOCOLATE — creambath tube + Choco Hazelnut hair perfume
        { bg: "/brand/texture-experience/showcase/3-2.png", product: "/brand/texture-experience/showcase/3-1.png",
          bgAspect: "4810 / 2260", productAspect: "2242 / 2664", productHeight: "133%",
          productShiftX: "-6.7%", productShiftY: "-6.7%",
          href: "/brands/texture-experience/black-chocolate" },
        // VANILLA MILK — creambath tube + Vanilla Souffle hair perfume
        { bg: "/brand/texture-experience/showcase/4-2.png", product: "/brand/texture-experience/showcase/4-1.png",
          bgAspect: "4810 / 2260", productAspect: "2860 / 3084", productHeight: "157%",
          productShiftX: "8.1%", productShiftY: "2.3%",
          href: "/brands/texture-experience/vanilla-milk" },
        // MINT SORBET — creambath tube + Mint Mocktail hair perfume
        { bg: "/brand/texture-experience/showcase/5-2.png", product: "/brand/texture-experience/showcase/5-1.png",
          bgAspect: "4810 / 2260", productAspect: "2526 / 2359", productHeight: "132%",
          productShiftX: "-10.5%", productShiftY: "0.3%",
          href: "/brands/texture-experience/mint-sorbet" },
      ],
    },
  };

export default entry;
