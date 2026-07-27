import type { Brand } from "@/lib/brands";

  // 3 — Inoskin
const entry: Brand = {
    slug: "inoskin",
    name: "Inoskin",
    division: "beauty",
    tagline: "#GlassSkinEssentials",
    // BrandIntro appends its own period, so none here; no ". " inside so it stays
    // one headline block.
    description:
      "Inoskin menggabungkan efektivitas yang terbukti secara klinis dengan perawatan kulit harian untuk menghadirkan kulit yang sehat dan bercahaya secara alami",
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
      { src: "/brand/inoskin/hero/2.png", depth: 30, enterFrom: "top", enterDelay: 0.35, width: "min(34.3vw, 43.1vh)", maxWidth: "1219px", aspectRatio: "2438 / 2701", left: "57.1%", top: "-6%",
        mobile: { left: "32.2%", top: "18.1%", width: "min(44vw, 22vh)" } },
      // Triple Power Cleanser — right of the cluster, enters from the RIGHT (2nd).
      { src: "/brand/inoskin/hero/3.png", depth: 48, enterFrom: "right", enterDelay: 0.2, width: "min(36.6vw, 45.9vh)", maxWidth: "873px", aspectRatio: "1746 / 3103", left: "61.7%", top: "16.5%",
        mobile: { left: "38.2%", top: "29.7%", width: "min(47vw, 24vh)" } },
      // Young and Bright Toner — front/left of the cluster, enters from the LEFT (1st).
      { src: "/brand/inoskin/hero/1.png", depth: 66, enterFrom: "left", enterDelay: 0, width: "min(39.6vw, 49.8vh)", maxWidth: "872px", aspectRatio: "1745 / 3103", left: "43.2%", top: "7.3%",
        mobile: { left: "14.3%", top: "25%", width: "min(51vw, 26vh)" } },
    ],
    heroContent: {
      logo: "/brand/inoskin/hero/wordmark.png",
      logoAspect: "1553 / 549",
      // Capped at 760px = half the wordmark's natural 1553px, so it stays sharp at DPR 2
      // on screens wider than ~2300px.
      logoWidth: "min(33vw, 760px)",
      maxWidth: "40vw",
      tagline: "Perawatan Kulit dengan 3rd GEN BIOKOMPATIBEL COLLAGEN",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "8%",
      offsetY: "8vh",
      // Off-white banner → dark text, and the navbar paints itself dark over it.
      theme: "dark",
      delay: 0.55,
      mobile: { logoWidth: "62vw" },
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
      { icon: "🧬", title: "Kolagen generasi ke-3", body: "Biokompatibel 100% dengan kulit manusia, jadi lebih mudah diterima." },
      { icon: "⚡", title: "15× lebih cepat diserap", body: "Molekul 19.9 KDa — jauh lebih kecil dari kolagen biasa (300 KDa)." },
      { icon: "🇰🇷", title: "Korean formulation", body: "Diformulasikan dengan teknologi perawatan kulit Korea." },
      { icon: "🌿", title: "Aman untuk kulit sensitif", body: "Dermatologically tested, 0% alkohol, 0% pewangi." },
    ],
    about: [
      { title: "Teknologi Formula Korea", image: "/brand/inoskin/about/1.png" },
      { title: "Perawatan Kulit Tampak Lebih Muda", image: "/brand/inoskin/about/2.png" },
      { title: "Kolagen Murni, Pancaran Alami", image: "/brand/inoskin/about/3.png" },
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
