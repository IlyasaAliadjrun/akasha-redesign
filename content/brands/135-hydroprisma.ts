import type { Brand } from "@/lib/brands";

  // 2e — HydroPrisma
const entry: Brand = {
    slug: "hydroprisma",
    name: "HydroPrisma",
    division: "beauty",
    // HydroPrisma is the Makarizo Professional rebonding technology line — same
    // family as Rebonding System / Concept Ultimax, so it hangs off the same umbrella.
    parent: "makarizo-professional",
    tagline: { en: "Unlimited creations, unstoppable shine.", id: "Kreasi tak terbatas, kilau kuat tanpa batas." },
    // Single sentence on purpose: BrandIntro renders the first sentence as the big
    // statement and everything after ". " as the light grey second line. The
    // reference carries only this one statement.
    description:
      { en: "Specially formulated to deliver healthy, smooth hair straightening and texturizing, free from strong odor", id: "Diformulasikan khusus untuk menghasilkan pelurusan dan pembentukan tekstur rambut yang sehat, lembut, serta bebas aroma menyengat" },
    accentClass: "bg-brand-hydroprisma",
    // HydroPrisma purple — sampled from the wordmark art and the showcase headings
    // (rgb(95,33,104) on hero/wordmark.png, rgb(98,31,102) on the MILD banner).
    accentHex: "#5F2168",
    // No dedicated 3:4 brand-card art was delivered, so CrossSell reuses the hero's
    // Step 2 bottle: a tall portrait cut-out that survives the card's 3:4 cover crop
    // intact (visible art sits at 32–69 % of the square canvas).
    heroImage: "/brand/hydroprisma/hero/2.png",
    // Layered parallax banner. Order = stacking (last = front): the Step 2 bottle sits
    // furthest back, the pouch overlaps it from the right, the Step 1 jar sits in front
    // and lower — the arrangement in the reference. Every canvas is square and carries
    // a different transparent margin, so the widths below are tuned so the VISIBLE
    // artwork (not the canvas) lands at the reference's relative heights:
    //   bottle 84.5 % of its canvas · pouch 81.3 % · jar 50.7 %.
    // Sizes are min(vw, vh) so the cluster scales with the banner but never outgrows a
    // short window; positions are % so the composition holds at any width.
    heroLayers: [
      // Step 1 Straightening Cream pouch — right, slightly lower, enters from the RIGHT (3rd).
      { src: "/brand/hydroprisma/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(53vw, 64vh)", maxWidth: "1037px", aspectRatio: "2073 / 2074", left: "68%", top: "17.7%",
        mobile: { left: "39%", top: "33%", width: "min(52vw, 40vh)" } },
      // Step 2 Milky Neutralizer — back, centre, enters from the TOP (1st).
      { src: "/brand/hydroprisma/hero/2.png", depth: 36, enterFrom: "top", enterDelay: 0, width: "min(54vw, 65vh)", maxWidth: "1302px", aspectRatio: "1 / 1", left: "57.5%", top: "16.5%",
        mobile: { left: "22%", top: "32%", width: "min(54vw, 42vh)" } },
      // Step 1 Straightening Cream jar — front, lowest, enters from the LEFT (2nd).
      { src: "/brand/hydroprisma/hero/1.png", depth: 72, enterFrom: "left", enterDelay: 0.2, width: "min(54vw, 63vh)", maxWidth: "1192px", aspectRatio: "1 / 1", left: "48%", top: "34%",
        mobile: { left: "7%", top: "40%", width: "min(50vw, 40vh)" } },
    ],
    heroContent: {
      logo: "/brand/hydroprisma/hero/wordmark.png",
      logoAspect: "1548 / 321",
      // Very wide lockup (4.82:1) — like Concept Ultimax the logo <div> carries its own
      // width and deliberately overflows the capped text column below it.
      logoWidth: "30vw",
      // So `maxWidth` governs the TAGLINE only, and 24vw breaks it where the reference
      // breaks it: "1 Produk untuk Kreasi" / "Tak Terbatas".
      maxWidth: "24vw",
      tagline: { en: "1 Product for Unlimited Creations", id: "1 Produk untuk Kreasi Tak Terbatas" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "8%",
      // The reference sets the whole text column well below centre, under the product
      // cluster's baseline.
      offsetY: "5vh",
      // Pale banner → dark type (and the navbar paints itself for a light backdrop).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "58vw" },
    },
    // Pale lavender the whole HydroPrisma system is set on — the base tone of the
    // hexagon banner art (sampled rgb(232,229,236) on showcase/1-2.png).
    bannerBg: "#EAE6EF",
    hero: false,
    products: [
      // `variant` carries the strength AND the pack format: the same three strengths
      // ship as a jar and as a pouch, and name+variant is the card's React key, so it
      // has to stay unique per SKU.
      { name: "Straightening Cream", variant: { en: "Mild · Jar", id: "Mild · Jar" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Step 1 500mL Jar Image 15102019 Mild.png" },
      { name: "Straightening Cream", variant: { en: "Medium · Jar", id: "Medium · Jar" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Step 1 500mL Jar Image 15102019 Medium.png" },
      { name: "Straightening Cream", variant: { en: "Strong · Jar", id: "Strong · Jar" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Step 1 500mL Jar Image 15102019 Strong.png" },
      { name: "Liquid Neutralizer", variant: { en: "Step 2", id: "Step 2" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Step 2 Bottle Image 15102019 Liquid.png" },
      // The pouch artwork sits on a wide 4961×3508 canvas, so `object-contain` fits it
      // by WIDTH inside the square card. The pouch still lands at 219 px tall against
      // the jar's 243 px — close enough that no `imageScale` correction is needed, and
      // scaling it up would make the refill read taller than the jar it refills.
      { name: "Straightening Cream", variant: { en: "Mild · Pouch", id: "Mild · Pouch" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Straightening Cream 500ml Pouch Imagery 23042019 MILD.png" },
      { name: "Straightening Cream", variant: { en: "Medium · Pouch", id: "Medium · Pouch" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Straightening Cream 500ml Pouch Imagery 23042019 MEDIUM.png" },
      { name: "Straightening Cream", variant: { en: "Strong · Pouch", id: "Strong · Pouch" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hydroprisma/product-lineup/RBS HydroPrisma Straightening Cream 500ml Pouch Imagery 23042019 STRONG.png" },
    ],
    // NOTE — BrandAbout is intentionally left out for now: public/brand/hydroprisma/about/
    // was delivered EMPTY, so there is no artwork for the two cards the reference shows
    // ("Hydrolyzed Kolagen" and "Hydrolized Keratin"). Reported to the design team; drop
    // two 900×1200 (3:4) images into that folder and the section comes back with:
    //   about: [
    //     { title: "Hydrolyzed Kolagen", image: "/brand/hydroprisma/about/1.png" },
    //     { title: "Hydrolized Keratin", image: "/brand/hydroprisma/about/2.png" },
    //   ],
    showcase: {
      hero: "/brand/hydroprisma/showcase/title.png",
      heroAspect: "4864 / 3860",
      // These banners are FINISHED cards: the strength word and the bottom caption are
      // baked into the background. So the frame takes the art's own ratio instead of the
      // 5:2 default — at 5:2 an object-cover crop eats ~7 % off the top and bottom and
      // slices the caption.
      bannerAspect: "4810 / 2260",
      // No sub-brand pages exist for HydroPrisma (public/brand/hydroprisma/ carries only
      // the four default folders), so the banners carry no `href`.
      //
      // `productHeight` / `productShiftX` are measured off the art, not guessed. Each
      // banner's strength word occupies a fixed band, leaving one clear half for the jar:
      //   1-2  MILD    x 27.1–53.4  → clear right
      //   2-2  MEDIUM  x 41.4–85.9  → clear left
      //   3-2  STRONG  x 13.9–60.9  → clear right
      // Each jar PNG also fills a different share of its own canvas (visible art =
      // 67.6 % / 86.7 % / 44.8 % of canvas width and 67.7 % / 88.3 % / 50.8 % of canvas
      // height), so the box height is what converts to a given VISIBLE height, and the
      // shift re-centres the visible art — not the canvas — on the clear half. All three
      // land above the caption band (y 91–95 %).
      variants: [
        { bg: "/brand/hydroprisma/showcase/1-2.png", bgAspect: "4810 / 2260", product: "/brand/hydroprisma/showcase/1-1.png", productAspect: "2462 / 2461", productHeight: "92%", productShiftX: "36%" },
        { bg: "/brand/hydroprisma/showcase/2-2.png", bgAspect: "4810 / 2260", product: "/brand/hydroprisma/showcase/2-1.png", productAspect: "1697 / 1929", productHeight: "72%", productShiftX: "-84%" },
        { bg: "/brand/hydroprisma/showcase/3-2.png", bgAspect: "4810 / 2261", product: "/brand/hydroprisma/showcase/3-1.png", productAspect: "3241 / 3240", productHeight: "122%", productShiftX: "32%" },
      ],
    },
  };

export default entry;
