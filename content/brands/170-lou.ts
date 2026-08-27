import type { Brand } from "@/lib/brands";

  // 4 — LOU (Little One Universe)
const entry: Brand = {
    slug: "lou",
    name: "LOU",
    division: "beauty",
    tagline: { en: "Accompanying Your Little One's First Steps of Care.", id: "Menemani Langkah Awal Perawatan Buah Hati." },
    // Becomes the BrandIntro headline (the component appends its own period, and a
    // ". " inside would split it into a second, lighter line — so keep one sentence).
    description:
      { en: "Trusted 0+ care to accompany your little one's First Steps of Care", id: "Perawatan 0+ terpercaya untuk menemani Langkah Awal Perawatan si Kecil" },
    accentClass: "bg-brand-lou",
    // LOU aqua — the wordmark's planet + the showcase headline are #93D2DA; this is a
    // half-step deeper so white text on the BrandCTA band still separates from it.
    accentHex: "#8CD1D8",
    // No standalone 3:4 brand-card art yet — reuse the about photo, which already
    // matches the CrossSell tile ratio. The hero itself renders from `heroLayers`.
    heroImage: "/brand/lou/about/3.png",
    // Hero — pale aqua banner (bannerBg) with the LOU lockup on the left and the
    // three-product cluster on the right. Same pattern as the Hair Energy hero.
    // Every product is a *sized* layer. On desktop each is anchored to the banner's
    // RIGHT/BOTTOM edges rather than left/top: the widths are min(vw, vh), so on a
    // narrow-but-tall viewport (768×900) the vw term wins and on a wide one the vh
    // term does — anchoring from the far corner keeps the trio a tight group at every
    // aspect ratio instead of drifting apart. Sizes account for each asset's OPAQUE
    // box (the canvases carry very different transparent margins: 1.png 61%×72%,
    // 2.png 73%×76%, 3.png 54%×84% of canvas), so the tube, the spray and the pump
    // bottle read at a consistent scale on screen.
    // Mobile resets right/bottom to "auto" so the left/top overrides govern alone —
    // both edges plus an aspect-ratio height would over-constrain the box.
    heroLayers: [
      // Rest Easy tube — back of the cluster, highest and smallest (50 mL).
      { src: "/brand/lou/hero/2.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(26vw, 32vh)", aspectRatio: "2160 / 3840", right: "20%", bottom: "27%",
        mobile: { left: "38%", top: "31%", right: "auto", bottom: "auto", width: "min(30vw, 30vh)" } },
      // Grow More spray — right edge, level with the tube (100 mL).
      { src: "/brand/lou/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(34vw, 42vh)", aspectRatio: "2160 / 3109", right: "9.5%", bottom: "16%",
        mobile: { left: "47%", top: "30%", right: "auto", bottom: "auto", width: "min(47vw, 43vh)" } },
      // Don't Cry pump — front/centre, sits lower and largest (250 mL). On mobile the
      // trio drops into the band between the top-centre wordmark and the bottom-left
      // tagline block, so nothing collides with the HTML overlay.
      { src: "/brand/lou/hero/1.png", depth: 72, enterFrom: "top", enterDelay: 0.2, width: "min(38vw, 46vh)", aspectRatio: "2160 / 3311", right: "25%", bottom: "8%",
        mobile: { left: "4%", top: "27.5%", right: "auto", bottom: "auto", width: "min(60vw, 50vh)" } },
    ],
    heroContent: {
      logo: "/brand/lou/hero/wordmark.png",
      logoAspect: "2160 / 1411",
      logoWidth: "21.4vw",
      // Caps the block so the tagline breaks after "Awal", matching the reference's
      // two-line heading instead of running under the product cluster.
      maxWidth: "24.4vw",
      tagline: { en: "Accompanying Your Little One's First Steps of Care", id: "Menemani Langkah Awal Perawatan Buah Hati" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "8%",
      offsetY: "8vh",
      // Dark text on the pale aqua banner — this also tells the navbar to paint itself
      // dark instead of white.
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "42vw" },
    },
    bannerBg: "#E2F6F7", // pale aqua wash, the light centre of the LOU banner art
    hero: false,
    products: [
      { name: "Rest Easy", variant: { en: "Gentle Calming Cream", id: "Krim Penenang Lembut" }, size: { en: "50 mL", id: "50 mL" }, image: "/brand/lou/product-lineup/rest-easy-gentle-calming-cream-50ml.png" },
      { name: "Grow More", variant: { en: "Nourishing Hair Lotion", id: "Losion Rambut Penutrisi" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/lou/product-lineup/grow-more-nourishing-hair-lotion-100ml.png" },
      { name: "Don't Cry", variant: { en: "Moisturizing Hair and Body Wash", id: "Sabun Rambut dan Tubuh Pelembap" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/lou/product-lineup/dont-cry-moisturizing-hair-and-body-wash-250ml.png" },
    ],
    about: [
      { title: { en: "Microbiome Balance Technology", id: "Teknologi Keseimbangan Mikrobioma" }, image: "/brand/lou/about/1.png" },
      { title: { en: "Gentle Formulation", id: "Formula Lembut" }, image: "/brand/lou/about/2.png" },
      { title: { en: "Safe for Babies 0+", id: "Aman untuk Bayi 0+" }, image: "/brand/lou/about/3.png" },
    ],
    // Showcase — title poster then the three product banners. Each bg ({n}-2) is a
    // designed card with its wording and rounded corners baked in, so `bannerAspect`
    // matches the art's own ratio (2160×1015) and nothing gets cover-cropped; the
    // bottle then sits centred OVER it, Hair Energy style.
    showcase: {
      hero: "/brand/lou/showcase/title.png",
      heroAspect: "2160 / 1345",
      productAlign: "center",
      bannerAspect: "2160 / 1015",
      variants: [
        // REST EASY — the tube's opaque box sits high-left inside its canvas (22%/12%
        // side margins, 4%/22% top/bottom), so shiftX/shiftY re-centre it on the banner.
        { bg: "/brand/lou/showcase/1-2.png", product: "/brand/lou/showcase/1-1.png",
          bgAspect: "2160 / 1015", productAspect: "2160 / 3450", productHeight: "120%",
          productShiftX: "-5%", productShiftY: "9%", mobile: { productHeight: "114%" } },
        // GROW MORE — spray bottle is near-centred in its canvas; only a small nudge.
        { bg: "/brand/lou/showcase/2-2.png", product: "/brand/lou/showcase/2-1.png",
          bgAspect: "2160 / 1015", productAspect: "2160 / 3414", productHeight: "112%",
          productShiftX: "2%", mobile: { productHeight: "106%" } },
        // DON'T CRY — pump bottle, centred as-is.
        { bg: "/brand/lou/showcase/3-2.png", product: "/brand/lou/showcase/3-1.png",
          bgAspect: "2160 / 1015", productAspect: "2160 / 3430", productHeight: "126%",
          productShiftY: "1%", mobile: { productHeight: "120%" } },
      ],
    },
    reasons: [
      { icon: "🪐", title: { en: "Microbiome Balance Technology", id: "Teknologi Keseimbangan Mikrobioma" }, body: { en: "Soymilk Biome™ keeps your little one's skin microbiome balanced from day one.", id: "Soymilk Biome™ menjaga keseimbangan mikrobioma kulit si Kecil sejak hari pertama." } },
      { icon: "🌙", title: { en: "Gentle formula for babies 0+", id: "Formula lembut untuk bayi 0+" }, body: { en: "Oat 5x Ceramide and Ecocert-certified ingredients — dermatologically tested.", id: "Oat 5x Ceramide dan bahan bersertifikat Ecocert — dermatologically tested." } },
      { icon: "🫧", title: { en: "No more stinging eyes", id: "Tanpa perih di mata" }, body: { en: "Don't Cry's gentle foam cleanses hair and body without making your little one fussy.", id: "Busa lembut Don't Cry membersihkan rambut dan tubuh tanpa membuat si Kecil rewel." } },
      { icon: "🌱", title: { en: "Double Care prebiotic & postbiotic", id: "Double Care Prebiotik & Postbiotik" }, body: { en: "Cares for skin and scalp at once, from bath time to bedtime.", id: "Merawat kulit dan kulit kepala sekaligus, dari mandi sampai waktu tidur." } },
    ],
  };

export default entry;
