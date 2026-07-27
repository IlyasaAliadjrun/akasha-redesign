import type { Brand } from "@/lib/brands";

  // 1d — t1 (Techno Nature)
const entry: Brand = {
    slug: "t1",
    name: "T1",
    division: "beauty",
    parent: "makarizo",
    // Also the CTA sub-line and the CrossSell card caption.
    tagline: "Lahir dari Alam, Disempurnakan dengan Teknologi.",
    // BrandIntro renders the first sentence as the bold headline (it appends its own
    // period) and everything after the first ". " as the lighter supporting line.
    description:
      "Solusi premium dengan harga terjangkau untuk kulit kepala sensitif. Melalui #SensitiveScalpSolution, perpaduan teknologi ekstraksi terbaik dan bahan alami T1 siap merawat, menyembuhkan, dan melindungi kulit kepala setiap hari.",
    accentClass: "bg-brand-t1",
    // T1 green — sampled from the brand's own showcase title art. Drives the intro
    // eyebrow, the lineup buttons/wash and the closing CTA band.
    accentHex: "#94A85E",
    // No standalone 3:4 brand card art — reuse the 3:4 about photo, which already
    // matches the CrossSell tile ratio. The hero itself renders from `heroLayers`.
    heroImage: "/brand/t1/about/3.png",
    // Layered parallax banner: the three hero SKUs staggered to the right of the
    // wording, mirroring the reference. Positions/sizes are vw/vh so the whole
    // composition scales as one; each layer carries its own `mobile` block because the
    // banner turns portrait below 768px.
    // NOTE on sizing: every PNG has generous transparent padding, so the layer box is
    // much bigger than the bottle looks (1.png fills 53%×82% of its canvas, 2.png
    // 39%×60%, 3.png 60%×78%). The widths below are picked from those fill ratios so
    // the three bottles read at their real relative sizes (the 40 mL oil ≈ 58% of the
    // pump bottles).
    heroLayers: [
      // Scalp & Hair Oil 40 mL — small, sits highest and furthest back.
      // The mobile widths are capped by BOTH vw and vh: the mobile hero stacks
      // wordmark (top) → products → tagline + CTA (bottom), so a purely vw-based cap
      // grows the cluster into the tagline on a wide-but-short phone/tablet (640×800).
      { src: "/brand/t1/hero/2.png", depth: 30, enterFrom: "top", enterDelay: 0.2, width: "min(26vw, 42vh)", aspectRatio: "1887 / 3032", left: "53%", top: "0%",
        mobile: { left: "24%", top: "16%", width: "min(40vw, 28vh)" } },
      // Micellar Conditioner — green, left of the cluster, enters from the LEFT.
      { src: "/brand/t1/hero/1.png", depth: 45, enterFrom: "left", enterDelay: 0, width: "min(34vw, 54vh)", aspectRatio: "1939 / 3058", left: "33%", top: "2%",
        mobile: { left: "-8%", top: "18%", width: "min(50vw, 34vh)" } },
      // Equalizer Shampoo — terracotta, front/right and sitting lower.
      { src: "/brand/t1/hero/3.png", depth: 60, enterFrom: "right", enterDelay: 0.4, width: "min(34vw, 54vh)", aspectRatio: "1780 / 2978", left: "63%", top: "11%",
        mobile: { left: "45%", top: "23%", width: "min(50vw, 34vh)" } },
    ],
    heroContent: {
      logo: "/brand/t1/hero/wordmark.png",
      logoAspect: "1424 / 556",
      logoWidth: "23vw",
      maxWidth: "32vw",
      tagline: "Lahir dari Alam, Disempurnakan dengan Teknologi.",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "8%",
      offsetY: "8vh",
      // The banner is a light pistachio, so the wording — and the navbar that reads
      // this flag — take their DARK treatment. It also keeps the CTA pill in the same
      // brown family as the wordmark art, like the reference.
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "46vw" },
    },
    // T1 pistachio — the same green the brand's own product cards are printed on.
    bannerBg: "#C4CB89",
    hero: false,
    products: [
      // ⚠️ Sizes are only set where the pack itself prints one; the Micellar and
      // Equalizer bottles don't, so those SKUs carry the scalp/hair claim as `variant`.
      // "with Rosemary Oil" belongs to `name`, not `variant`, on the two oils: their
      // ProductLineup React key is `name-variant`, so two SKUs that differ only by size
      // would collide. With `variant` unset the key falls back to the array index.
      { name: "Scalp & Hair Oil with Rosemary Oil", size: "40 mL", image: "/brand/t1/product-lineup/scalp-hair-oil-rosemary-40ml.png" },
      { name: "Scalp & Hair Oil with Rosemary Oil", size: "100 mL", image: "/brand/t1/product-lineup/scalp-hair-oil-rosemary-100ml.png" },
      { name: "Micellar Shampoo", variant: "Sensitive–Oily Scalp", image: "/brand/t1/product-lineup/micellar-shampoo.png" },
      { name: "Micellar Conditioner", variant: "Sensitive–Oily Hair", image: "/brand/t1/product-lineup/micellar-conditioner.png" },
      { name: "Equalizer Shampoo", variant: "Sensitive to Dry Scalp", image: "/brand/t1/product-lineup/equalizer-shampoo.png" },
      { name: "Equalizer Conditioner", variant: "Sensitive to Dry Hair", image: "/brand/t1/product-lineup/equalizer-conditioner.png" },
      { name: "Protein Cream", variant: "with Rosemary Oil", size: "50 mL", image: "/brand/t1/product-lineup/protein-cream-rosemary-oil-50ml.png" },
      { name: "Indigo Blue Bright Body Wash", image: "/brand/t1/product-lineup/indigo-blue-bright-body-wash.png" },
      { name: "Indigo Blue Bright Body Lotion", image: "/brand/t1/product-lineup/indigo-blue-bright-body-lotion.png" },
      { name: "Indigo Blue Bright Body Mask", image: "/brand/t1/product-lineup/indigo-blue-bright-body-mask.png" },
    ],
    reasons: [
      { icon: "🌿", title: "Untuk kulit kepala sensitif", body: "Formula lembut yang merawat, menyembuhkan, dan melindungi kulit kepala setiap hari." },
      { icon: "🧪", title: "Teknologi ekstraksi terbaik", body: "Bahan alami yang disempurnakan dengan proses ekstraksi presisi." },
      { icon: "💧", title: "Satu rangkaian, semua kebutuhan", body: "Micellar, Equalizer, Rosemary Oil, hingga Indigo Blue untuk rambut dan tubuh." },
      { icon: "💸", title: "Premium, harga terjangkau", body: "Perawatan kelas salon yang bisa dipakai setiap hari." },
    ],
    about: [
      { title: "Perawatan Rambut Rosemary", image: "/brand/t1/about/1.png" },
      { title: "Formula Teknologi & Alami", image: "/brand/t1/about/2.png" },
      { title: "Untuk Semua Tipe Rambut", image: "/brand/t1/about/3.png" },
    ],
    // Poster showcase: the "#Sensitive Scalp Expert" title art, then the four line
    // banners. Each bg is a designed card with its wording and rounded corners baked
    // in, so `bannerAspect` matches the art's own ratio (nothing is cover-cropped) and
    // the products sit centred over it, Hair Energy style.
    showcase: {
      hero: "/brand/t1/showcase/title.png",
      heroAspect: "4591 / 3142",
      productAlign: "center",
      bannerAspect: "4810 / 2261",
      // `productHeight` is large because each product PNG is mostly transparent padding
      // (the cluster fills only 43–66% of its canvas height). `productShiftY` cancels
      // the *uneven* padding — it is half the difference between the top and bottom
      // margins — so the visible cluster ends up centred on the banner and overflows
      // its top and bottom edges by the same amount.
      variants: [
        // Micellar — shampoo + conditioner (canvas padding: 23% top / 11% bottom).
        { bg: "/brand/t1/showcase/1-2.png", product: "/brand/t1/showcase/1-1.png",
          bgAspect: "4810 / 2261", productAspect: "3144 / 3214", productHeight: "184%", productShiftY: "-6%",
          href: "/brands/t1/micellar" },
        // Equalizer — shampoo + conditioner (23% / 11%).
        { bg: "/brand/t1/showcase/2-2.png", product: "/brand/t1/showcase/2-1.png",
          bgAspect: "4810 / 2261", productAspect: "3057 / 3178", productHeight: "185%", productShiftY: "-6%",
          href: "/brands/t1/equalizer" },
        // Rosemary Oil — protein cream + scalp & hair oil (45% / 13%: the pair sits in
        // the lower half of its canvas, hence the much bigger box and shift).
        { bg: "/brand/t1/showcase/3-2.png", product: "/brand/t1/showcase/3-1.png",
          bgAspect: "4810 / 2260", productAspect: "4174 / 4068", productHeight: "265%", productShiftY: "-16%",
          href: "/brands/t1/rosemary-oil" },
        // Indigo Blue — body wash + mask + lotion (22% / 17%).
        { bg: "/brand/t1/showcase/4-2.png", product: "/brand/t1/showcase/4-1.png",
          bgAspect: "4810 / 2260", productAspect: "3759 / 3072", productHeight: "188%", productShiftY: "-3%",
          href: "/brands/t1/indigo-blue" },
      ],
    },
  };

export default entry;
