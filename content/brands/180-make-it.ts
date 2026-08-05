import type { Brand } from "@/lib/brands";

  // 5 — Make It
const entry: Brand = {
    slug: "make-it",
    name: "Make It",
    division: "beauty",
    tagline: { en: "Lets Make It Happen.", id: "Ayo, Make It Terjadi." },
    // BrandIntro renders the first sentence bold and anything after ". " in a light
    // grey block. The reference shows one uninterrupted bold statement, so the two
    // clauses are joined with an em dash (the component appends the full stop).
    description:
      { en: "Make It is here for those who dare to break boundaries and stand out — bold enough to make Make It real", id: "Make It hadir untuk kamu yang berani mendobrak batas dan tampil beda — berani jadikan Make It nyata" },
    accentClass: "bg-brand-makeit",
    // Make It's identity is the deep maroon of its banners (sampled from
    // showcase/1-2.png). Drives the intro eyebrow, lineup buttons and the closing CTA.
    accentHex: "#7D2628",
    // No standalone 3:4 brand card art — reuse the 16:9 home banner. Only CrossSell
    // reads this; the hero itself renders from `heroLayers`.
    heroImage: "/home/hero-carousel/make-it.jpg",
    // Layered parallax banner on the flat maroon `bannerBg`: three bottles clustered
    // on the right half, the (upright) Mango Glacé sitting highest and furthest back,
    // with the two tilted bottles overlapping it from either side.
    // Each width is min(vw, vh) with the **vh term deliberately the smaller one** at
    // every realistic desktop ratio, so the box height tracks the hero height and the
    // composition is identical from 1024×600 to 3840×2160; the vw term is only the
    // guard rail for viewports narrower than ~1.1:1 (tablet portrait). Layers are
    // anchored on `bottom`, not `top`: when the vw guard rail does kick in the boxes
    // shrink, and a bottom anchor slides the cluster *down* into the banner instead of
    // off the top edge. Every offset already subtracts the transparent margin baked
    // into its PNG (measured from the alpha channel).
    heroLayers: [
      // Essence Sanctuary — front-left, tilted, enters from the LEFT (1st).
      { src: "/brand/makeit/hero/1.png", depth: 56, enterFrom: "left", enterDelay: 0, width: "min(40vw, 49vh)", aspectRatio: "2547 / 3799", left: "56.5%", bottom: "1%",
        mobile: { left: "6.2%", bottom: "27.2%", width: "min(72vw, 27vh)" } },
      // Mango Glacé — back, centre of the cluster, enters from the TOP (2nd).
      { src: "/brand/makeit/hero/2.png", depth: 34, enterFrom: "top", enterDelay: 0.2, width: "min(37vw, 42vh)", aspectRatio: "1977 / 3514", left: "64%", bottom: "27%",
        mobile: { left: "25%", bottom: "42%", width: "min(63vw, 23vh)" } },
      // Keep in Touch — front-right, tilted, enters from the RIGHT (3rd).
      { src: "/brand/makeit/hero/3.png", depth: 72, enterFrom: "right", enterDelay: 0.4, width: "min(37vw, 47vh)", aspectRatio: "2359 / 3713", left: "68.9%", bottom: "8%",
        mobile: { left: "37.7%", bottom: "31.7%", width: "min(69vw, 25.5vh)" } },
    ],
    heroContent: {
      logo: "/brand/makeit/hero/wordmark.png",
      // The wordmark PNG is cropped tight to the glyphs, so no bodyIndent is needed.
      logoAspect: "1499 / 446",
      logoWidth: "25vw",
      maxWidth: "28vw",
      tagline: { en: "For Those Who Are Proactive and Bold, Together With Make It", id: "Untuk Mereka yang Proaktif dan Berani Bertindak Bersama Make It" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      offsetY: "6vh",
      theme: "light",
      delay: 0.6,
      mobile: { logoWidth: "53vw" },
    },
    bannerBg: "#7D2628",
    hero: false,
    products: [
      { name: "Essence Sanctuary", variant: { en: "Fragrance Enhancing Primer", id: "Primer Peningkat Aroma" }, image: "/brand/makeit/product-lineup/essence-sanctuary.png" },
      { name: "Mango Glacé", variant: { en: "Extrait d'Intense Parfum", id: "Extrait d'Intense Parfum" }, image: "/brand/makeit/product-lineup/mango-glace.png" },
      { name: "Bold Venture", variant: { en: "Parfum", id: "Parfum" }, image: "/brand/makeit/product-lineup/bold-venture.png" },
      { name: "Keep in Touch", variant: { en: "Parfum", id: "Parfum" }, image: "/brand/makeit/product-lineup/keep-in-touch.png" },
      { name: "Dream Chaser", variant: { en: "Parfum", id: "Parfum" }, image: "/brand/makeit/product-lineup/dream-chaser.png" },
      { name: "Weekday Hustle", variant: { en: "Parfum", id: "Parfum" }, image: "/brand/makeit/product-lineup/weekday-hustle.png" },
      { name: "Social Butterfly", variant: { en: "Parfum", id: "Parfum" }, image: "/brand/makeit/product-lineup/social-butterfly.png" },
    ],
    about: [
      { title: { en: "30%–50% Perfume Concentrate", id: "30%–50% Konsentrat Parfum" }, image: "/brand/makeit/about/1.png" },
      { title: { en: "Lasts Up to 12 Hours", id: "Tahan Hingga 12 Jam" }, image: "/brand/makeit/about/2.png" },
      { title: { en: "A Unique Scent", id: "Aroma Yang Unik" }, image: "/brand/makeit/about/3.png" },
    ],
    // Showcase — the "#1 Primer Parfum" poster, then the three range banners.
    // The banner art is a designed card (4810×2261, rounded corners baked in), so
    // `bannerAspect` keeps it uncropped; each `bgAspect` is a touch taller than the
    // frame so the scroll parallax drifts inside the overflow instead of exposing an
    // empty strip. There are no sub-brand pages, so the banners carry no `href`.
    showcase: {
      hero: "/brand/makeit/showcase/title.png",
      heroAspect: "4325 / 4280",
      productAlign: "center",
      bannerAspect: "4810 / 2261",
      variants: [
        // Fragrance Enhancing Primer — Essence Sanctuary
        { bg: "/brand/makeit/showcase/1-2.png", bgAspect: "4810 / 2440", product: "/brand/makeit/showcase/1-1.png", productAspect: "2547 / 3799", productHeight: "180%", productShiftX: "-11%", productShiftY: "-1.5%",
          mobile: { productHeight: "168%", productShiftX: "-9%" } },
        // Extrait d'Intense Parfum — Mango Glacé
        { bg: "/brand/makeit/showcase/2-2.png", bgAspect: "4810 / 2440", product: "/brand/makeit/showcase/2-1.png", productAspect: "1977 / 3514", productHeight: "172%", productShiftX: "-6%", productShiftY: "-4%",
          mobile: { productHeight: "160%", productShiftX: "-5%" } },
        // Extrait de Parfum — Keep in Touch
        { bg: "/brand/makeit/showcase/3-2.png", bgAspect: "4810 / 2440", product: "/brand/makeit/showcase/3-1.png", productAspect: "2359 / 3713", productHeight: "176%", productShiftX: "-8%",
          mobile: { productHeight: "164%", productShiftX: "-7%" } },
      ],
    },
  };

export default entry;
