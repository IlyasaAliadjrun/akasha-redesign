import type { Brand } from "@/lib/brands";

  // 3 — Inoskin
const entry: Brand = {
    slug: "inoskin",
    name: "Inoskin",
    division: "beauty",
    tagline: { en: "#GlassSkinEssentials", id: "#GlassSkinEssentials" },
    // BrandIntro appends its own period, so none here; no ". " inside so it stays
    // one headline block.
    description:
      { en: "Inoskin combines clinically proven effectiveness with daily skincare to reveal naturally healthy, radiant skin", id: "Inoskin menggabungkan efektivitas yang terbukti secara klinis dengan perawatan kulit harian untuk menghadirkan kulit yang sehat dan bercahaya secara alami" },
    accentClass: "bg-brand-inoskin",
    // The INOSKIN wordmark gold, sampled from hero/wordmark.png — also the colour of
    // every heading baked into the showcase art.
    accentHex: "#897321",
    // No standalone 3:4 brand card art yet. Only CrossSell reads this; about/2.png is
    // a real brand asset that is already exactly 3:4 (1534×2046).
    heroImage: "/brand/inoskin/about/2.png",
    // Hero — flat off-white banner (bannerBg) with the wordmark + wording on the left
    // and the three-product cluster on the right, same pattern as Hair Energy. Widths
    // are `min(vw, vh)` so the cluster scales with the shorter axis and keeps its
    // composition from a 4:3 laptop to a 16:9 desktop; `maxWidth` caps each layer at
    // half its natural pixel width so nothing renders above its own resolution at DPR 2.
    heroLayers: [
      // Collagen Firming Mask — tilted, top of the cluster, enters from the TOP (3rd).
      { src: "/brand/inoskin/hero/2.png", depth: 30, enterFrom: "top", enterDelay: 0.2, width: "min(29.3vw, 60vh)", maxWidth: "1300px", aspectRatio: "2438 / 2701", left: "61.5%", top: "5%",
        mobile: { left: "25%", top: "15%", width: "min(52vw, 100vh)" } },
      // Triple Power Cleanser — right of the cluster, enters from the RIGHT (2nd).
      { src: "/brand/inoskin/hero/3.png", depth: 20, enterFrom: "right", enterDelay: 0.35, width: "min(31.6vw, 40vh)", maxWidth: "873px", aspectRatio: "1746 / 3103", left: "71.5%", top: "25%",
        mobile: { left: "40%", top: "28%", width: "min(48vw, 22vh)" } },
      // Young and Bright Toner — front/left of the cluster, enters from the LEFT (1st).
      { src: "/brand/inoskin/hero/1.png", depth: 66, enterFrom: "left", enterDelay: 0, width: "min(34.6vw, 40vh)", maxWidth: "872px", aspectRatio: "1745 / 3103", left: "56.5%", top: "20%",
        mobile: { left: "22%", top: "31%", width: "min(52vw, 22vh)" } },
    ],
    heroContent: {
      logo: "/brand/inoskin/hero/wordmark.png",
      logoAspect: "1553 / 549",
      // Capped at 760px = half the wordmark's natural 1553px, so it stays sharp at DPR 2
      // on screens wider than ~2300px.
      logoWidth: "min(20vw, 760px)",
      maxWidth: "40vw",
      tagline: { en: "Skincare with 3rd GEN BIOCOMPATIBLE COLLAGEN", id: "Perawatan Kulit dengan 3rd GEN BIOKOMPATIBEL COLLAGEN" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      offsetY: "5vh",
      // Off-white banner → dark text, and the navbar paints itself dark over it.
      theme: "accent-light",
      delay: 0.55,
      mobile: { logoWidth: "40vw" },
    },
    bannerBg: "#F2F1EF",
    hero: false,
    products: [
      { name: "Triple Power Cleanser", image: "/brand/inoskin/product-lineup/triple-power-cleanser.png" },
      { name: "Young and Bright Toner", image: "/brand/inoskin/product-lineup/young-and-bright-toner.png" },
      { name: "Collagen Firming Mask", image: "/brand/inoskin/product-lineup/collagen-firming-mask.png" },
      { name: "Young and Bright Serum", image: "/brand/inoskin/product-lineup/young-and-bright-serum.png" },
      { name: "Young and Bright Moisturizer", image: "/brand/inoskin/product-lineup/young-and-bright-moisturizer.png" },
    ],
    reasons: [
      { icon: "🧬", title: { en: "3rd generation collagen", id: "Kolagen generasi ke-3" }, body: { en: "100% biocompatible with human skin, making it easier to absorb.", id: "Biokompatibel 100% dengan kulit manusia, jadi lebih mudah diterima." } },
      { icon: "⚡", title: { en: "15× faster absorption", id: "15× lebih cepat diserap" }, body: { en: "19.9 KDa molecule — far smaller than ordinary collagen (300 KDa).", id: "Molekul 19.9 KDa — jauh lebih kecil dari kolagen biasa (300 KDa)." } },
      { icon: "🇰🇷", title: { en: "Korean formulation", id: "Formulasi Korea" }, body: { en: "Formulated with Korean skincare technology.", id: "Diformulasikan dengan teknologi perawatan kulit Korea." } },
      { icon: "🌿", title: { en: "Safe for sensitive skin", id: "Aman untuk kulit sensitif" }, body: { en: "Dermatologically tested, 0% alcohol, 0% fragrance.", id: "Dermatologically tested, 0% alkohol, 0% pewangi." } },
    ],
    about: [
      { title: { en: "Korean Formula Technology", id: "Teknologi Formula Korea" }, image: "/brand/inoskin/about/1.png" },
      { title: { en: "Skincare for a Younger-Looking Complexion", id: "Perawatan Kulit Tampak Lebih Muda" }, image: "/brand/inoskin/about/2.png" },
      { title: { en: "Pure Collagen, Natural Radiance", id: "Kolagen Murni, Pancaran Alami" }, image: "/brand/inoskin/about/3.png" },
    ],
    // Showcase — the #GlassSkinEssentials poster, then the single YOUNG & BRIGHT
    // banner that links to the sub-brand page. `bannerAspect` = the bg art's own ratio
    // so the designed card renders in full instead of being cover-cropped, and the
    // product layer shares that exact ratio at 100% height, so it overlays the banner
    // 1:1 at every breakpoint — no `mobile` override needed.
    showcase: {
      hero: "/brand/inoskin/showcase/title.png",
      heroAspect: "4830 / 4669",
      productAlign: "center",
      bannerAspect: "4811 / 2261",
      variants: [
        { bg: "/brand/inoskin/showcase/1-4.png", bgAspect: "4811 / 2261", product: "/brand/inoskin/showcase/1-cluster.png", productAspect: "4811 / 2261", productHeight: "100%", href: "/brands/inoskin/young-and-bright" },
      ],
    },
  };

export default entry;
