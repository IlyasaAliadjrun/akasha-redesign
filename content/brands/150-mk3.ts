import type { Brand } from "@/lib/brands";

  // 2f — MK3
const entry: Brand = {
    slug: "mk3",
    name: "MK3",
    division: "beauty",
    parent: "makarizo-professional",
    // Shown under the CTA headline ("Rasakan MK3 sekarang.").
    tagline: { en: "Professional salon performance.", id: "Performa salon profesional." },
    // BrandIntro headline. One block (no ". " inside) so it renders as a single
    // extrabold paragraph, matching the reference.
    description:
      { en: "Intensive hair care for every hair need, formulated with quality ingredients and the latest technology", id: "Perawatan rambut intensif untuk setiap kebutuhan rambut, diformulasikan dengan bahan berkualitas dan teknologi terkini" },
    accentClass: "bg-brand-mk3",
    // MK3 brown — sampled from the wordmark art (#3E2120). Drives the About eyebrow,
    // the lineup wash + Learn more/Buy buttons and the CTA block.
    accentHex: "#3E2120",
    // No standalone 3:4 brand card art — CrossSell reads this; the hero renders from
    // `heroLayers`. The About molecule photo is abstract enough to crop to 3:4.
    heroImage: "/brand/mk3/about/2.png",
    // Hero — flat warm-grey banner (bannerBg; the folder ships no background plate)
    // with the wordmark + wording on the left and the scalp-care trio staggered on the
    // right. Hair Energy pattern. Widths use min(vw, vh) so the cluster scales with the
    // shorter axis; every layer carries a `mobile` override (§4).
    // NOTE: each PNG has transparent padding (hero/1 fills ~58% of its canvas width),
    // so the layer boxes below are wider than the bottles look.
    heroLayers: [
      // Scalp Exfoliator — back, left of the cluster and highest, enters from the LEFT.
      { src: "/brand/mk3/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0,
        width: "min(17vw, 31vh)", maxWidth: "439px", aspectRatio: "878 / 1719", left: "54.8%", top: "12.8%",
        mobile: { left: "13%", top: "30%", width: "min(30vw, 18vh)" } },
      // Scalp Serum pair — right, enters from the RIGHT (3rd).
      { src: "/brand/mk3/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4,
        width: "min(22vw, 40vh)", maxWidth: "594px", aspectRatio: "1187 / 2063", left: "73.1%", top: "16.8%",
        mobile: { left: "52%", top: "31.2%", width: "min(35vw, 19vh)" } },
      // Shampoo — front/centre, the tallest piece, drops in from the TOP (2nd).
      { src: "/brand/mk3/hero/2.png", depth: 72, enterFrom: "top", enterDelay: 0.2,
        width: "min(20.5vw, 37vh)", maxWidth: "504px", aspectRatio: "1008 / 1885", left: "63.2%", top: "15.6%",
        mobile: { left: "30%", top: "28.5%", width: "min(37vw, 22vh)" } },
    ],
    heroContent: {
      logo: "/brand/mk3/hero/wordmark.png",
      logoAspect: "1519 / 631",
      logoWidth: "21vw",
      maxWidth: "32vw",
      // Reference wording — two lines, no full stop.
      tagline: { en: "The Luxury of Professional Hair Care from Indonesia", id: "Kemewahan Perawatan Rambut Profesional dari Indonesia" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "7%",
      offsetY: "5vh",
      // Light banner → dark text (and the navbar paints its dark treatment).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "40vw" },
    },
    bannerBg: "#E7E3E0",
    hero: false,
    // Full MK3 range (11 SKU) grouped scalp → colour → repair. `imageScale` evens out
    // the very different amounts of transparent padding per render (the hair-mask jar
    // fills only 34% of its 2160×3840 canvas, the leave-in pump fills 100% of its own),
    // so every product lands at roughly the same visual height. Every scaled render
    // stays far below the source resolution.
    products: [
      { name: "Scalp Exfoliator", variant: { en: "Dandruff & Hair Fall", id: "Dandruff & Hair Fall" }, size: { en: "50 mL", id: "50 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SCALP EXFO IJO BIRU 1.png", imageScale: 1.03 },
      { name: "Shampoo", variant: { en: "Color Revive", id: "Color Revive" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SHAMPOO COLOR REVIVE 1.png", imageScale: 1.15 },
      { name: "Shampoo", variant: { en: "Damage Repair", id: "Damage Repair" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SHAMPOO DAMAGE REPAIR 1.png", imageScale: 1.15 },
      { name: "Shampoo", variant: { en: "Purple Treatment", id: "Purple Treatment" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SHAMPOO PURPLE 1.png", imageScale: 1.15 },
      { name: "Shampoo", variant: { en: "Dandruff & Hair Fall", id: "Dandruff & Hair Fall" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SHAMPOO BIRU IJO 1.png", imageScale: 0.91 },
      { name: "Conditioner", variant: { en: "Repair & Revive", id: "Repair & Revive" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/mk3/product-lineup/MK3 3D CONDI REPAIR REVIVE 1.png", imageScale: 1.15 },
      { name: "Hair Mask", variant: { en: "Repair & Revive", id: "Repair & Revive" }, image: "/brand/mk3/product-lineup/MK3 3D HAIR MASK 1.png", imageScale: 1.57 },
      { name: "Restructuring Serum", variant: { en: "Repair & Revive", id: "Repair & Revive" }, size: { en: "50 mL", id: "50 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SERUM 2.png", imageScale: 1.33 },
      { name: "Leave-In Hair Mask", variant: { en: "Bond Repair", id: "Bond Repair" }, size: { en: "50 mL", id: "50 mL" }, image: "/brand/mk3/product-lineup/MK3 Leave in Hair Mask.png", imageScale: 0.67 },
      { name: "Scalp Serum", variant: { en: "Hair Fall Treatment", id: "Hair Fall Treatment" }, size: { en: "20 mL", id: "20 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SCALP SERUM IJO 1.png", imageScale: 1.04 },
      { name: "Scalp Serum", variant: { en: "Dandruff Treatment", id: "Dandruff Treatment" }, size: { en: "20 mL", id: "20 mL" }, image: "/brand/mk3/product-lineup/MK3 3D SCALP SERUM BIRU 1.png", imageScale: 1.04 },
    ],
    about: [
      { title: { en: "Pure Formula", id: "Formula Murni" }, image: "/brand/mk3/about/1.png" },
      { title: { en: "Vegan-Based Keratin Technology", id: "Teknologi Keratin Berbasis Vegan" }, image: "/brand/mk3/about/2.png" },
    ],
    // Showcase — the "Perawatan Mewah untuk Rambutmu" poster, then the three range
    // banners. Each bg ({n}-2) is a designed 4810×2260 warm-grey card with the wording
    // and the caption baked in, so `bannerAspect` keeps it uncropped (the 128 /
    // Barber Daily pattern); the product cluster is overlaid on top and links to its
    // sub-brand page. The >100% `productHeight` values compensate for the transparent
    // padding in each cluster PNG — the visible bottles still land inside the banner.
    showcase: {
      hero: "/brand/mk3/showcase/title.png",
      heroAspect: "4464 / 3202",
      productAlign: "center",
      bannerAspect: "4810 / 2260",
      variants: [
        // DAMAGE REPAIR — shampoo, conditioner, hair mask, restructuring serum
        { bg: "/brand/mk3/showcase/1-2.png", product: "/brand/mk3/showcase/1-1.png",
          bgAspect: "4810 / 2260", productAspect: "5257 / 3029", productHeight: "127%",
          productShiftY: "3%", href: "/brands/mk3/damage-repair",
          mobile: { productHeight: "127%", productShiftY: "2%" } },
        // COLOR REVIVE — purple treatment shampoo + conditioner, centred over the gap
        { bg: "/brand/mk3/showcase/2-2.png", product: "/brand/mk3/showcase/2-1.png",
          bgAspect: "4810 / 2260", productAspect: "2322 / 2819", productHeight: "120%",
          href: "/brands/mk3/color-revive",
          mobile: { productHeight: "112%" } },
        // SCALP CARE — exfoliator, shampoo, both scalp serums. This cluster is drawn at
        // the banner's own ratio, so 100% overlays it 1:1 as the artwork intends.
        { bg: "/brand/mk3/showcase/3-2.png", product: "/brand/mk3/showcase/3-1.png",
          bgAspect: "4810 / 2260", productAspect: "4445 / 2084", productHeight: "100%",
          href: "/brands/mk3/scalp-care",
          mobile: { productHeight: "96%" } },
      ],
    },
  };

export default entry;
