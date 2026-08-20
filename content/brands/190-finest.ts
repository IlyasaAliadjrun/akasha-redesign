import type { Brand } from "@/lib/brands";

  // 6 — Finest (n-Hydroxyapatite toothpaste)
const entry: Brand = {
    slug: "finest",
    name: "Finest",
    division: "beauty",
    // Reads as the CTA sub-line ("Rasakan Finest sekarang." + this) and on the
    // CrossSell card — the reference's closing coral panel wording.
    tagline: { en: "Naturally Whitening & Oral Microbiome-Friendly", id: "Memutihkan Alami & Ramah Mikrobioma Oral" },
    // BrandIntro splits on ". ": sentence 1 becomes the bold headline, the rest the
    // lighter continuation. Copy taken from the reference's "About Finest" block.
    description:
      { en: "Extra Gentle Protection, free from fluoride and SLS. Safe for all ages, including pregnant women. Enriched with Nano Hydroxyapatite and certified by BPOM and Halal, working at its best to strengthen sensitive teeth without irritation.", id: "Perlindungan Ekstra Lembut, bebas fluoride dan SLS. Aman digunakan oleh semua usia, termasuk ibu hamil. Diperkaya Nano Hydroxyapatite serta bersertifikasi BPOM dan Halal, bekerja maksimal memperkuat gigi sensitif tanpa iritasi." },
    accentClass: "bg-brand-finest",
    accentHex: "#F5595C", // Finest coral — sampled from the wordmark / showcase art
    // No standalone 3:4 brand-card art in the folder; the About tooth visual is
    // already 3:4 and on-brand, so CrossSell reuses it (only CrossSell reads this —
    // the hero itself renders from `heroLayers`).
    heroImage: "/brand/finest/about/1.png",
    // Hero — near-white blush banner with the coral "Finest" wordmark + tagline + CTA
    // on the left and the two 90 g tubes fanned on the right. Hair Energy pattern.
    // Both PNGs carry a lot of transparent canvas (content fills ~35%×64% of 1.png and
    // ~31%×58% of 2.png), so `width` is sized to the CANVAS: the visible tube ends up
    // ≈0.94×/0.87× that width in height. left/top are likewise canvas-anchored.
    heroLayers: [
      // The vh term is what binds on a normal landscape desktop (73vh < 50vw from
      // ~16:9 down); the roomier vw term only takes over on a narrow-but-tall window
      // (768×1024), where a tighter vw would shrink the tubes into the top third.
      // Soft Mint — behind, higher and further right.
      { src: "/brand/finest/hero/2.png", depth: 34, enterFrom: "right", enterDelay: 0.3,
        width: "min(50vw, 73vh)", aspectRatio: "3176 / 4735", left: "55%", top: "-7%",
        mobile: { width: "min(82vw, 40vh)", left: "12%", top: "11.5%" } },
      // Light Lemon — front, slightly lower and overlapping the Soft Mint tube.
      { src: "/brand/finest/hero/1.png", depth: 56, enterFrom: "bottom", enterDelay: 0.15,
        width: "min(46vw, 68vh)", aspectRatio: "3026 / 4424", left: "52%", top: "4.5%",
        mobile: { width: "min(78vw, 37vh)", left: "3%", top: "17.5%" } },
    ],
    heroContent: {
      logo: "/brand/finest/hero/wordmark.png",
      logoAspect: "1394 / 325",
      logoWidth: "23vw",
      maxWidth: "26vw",
      tagline: { en: "Remineralizing, Naturally Whitening & Oral Microbiome-Friendly", id: "Remineralisasi, Pemutih Alami & Ramah Mikrobioma Oral" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      offsetY: "5vh",
      // Light banner → ink copy (and the navbar takes its dark treatment).
      theme: "dark",
      delay: 0.55,
      mobile: { logoWidth: "48vw" },
    },
    bannerBg: "#FCF6F5", // blush off-white, matching the reference hero
    hero: false,
    products: [
      { name: "Toothpaste", variant: { en: "Soft Mint", id: "Soft Mint" }, size: { en: "90 g", id: "90 g" }, image: "/brand/finest/product-lineup/toothpaste-soft-mint-90g.png" },
      { name: "Toothpaste", variant: { en: "Light Lemon", id: "Light Lemon" }, size: { en: "90 g", id: "90 g" }, image: "/brand/finest/product-lineup/toothpaste-light-lemon-90g.png" },
    ],
    reasons: [
      { icon: "🦷", title: { en: "10% Nano Hydroxyapatite", id: "10% Nano Hydroxyapatite" }, body: { en: "Remineralizes tooth enamel and whitens naturally without abrasion.", id: "Meremineralisasi email gigi dan memutihkan secara alami tanpa abrasi." } },
      { icon: "🌿", title: { en: "Free from fluoride & SLS", id: "Bebas fluoride & SLS" }, body: { en: "Safe if swallowed, gentle for all ages — including pregnant women.", id: "Aman tertelan, ramah untuk semua usia — termasuk ibu hamil." } },
      { icon: "❄️", title: { en: "Gentle cooling sensation", id: "Sensasi dingin lembut" }, body: { en: "A gentle mint formula that refreshes without stinging the gums.", id: "Formula mint lembut yang menyegarkan tanpa membuat gusi perih." } },
      { icon: "✅", title: { en: "BPOM & Halal", id: "BPOM & Halal" }, body: { en: "Certified, formulated for sensitive teeth without irritation.", id: "Tersertifikasi, diformulasikan untuk gigi sensitif tanpa iritasi." } },
    ],
    about: [
      { title: { en: "Contains Nano Hydroxyapatite", id: "Mengandung Nano Hydroxyapetite" }, image: "/brand/finest/about/1.png" },
      { title: { en: "Refreshing Cool Sensation", id: "Sensasi Dingin Menyegarkan" }, image: "/brand/finest/about/2.png" },
      { title: { en: "Long-Lasting Freshness", id: "Segar Tahan Lama" }, image: "/brand/finest/about/3.png" },
    ],
    // Showcase — the "Pasta Gigi Lembut Premium" poster, then the single TOOTHPASTE
    // banner. The bg is a designed card whose caption sits on its bottom edge, so
    // `bannerAspect` matches the art (no cover crop) and `parallax: false` keeps the
    // frame perfectly filled (a drift would expose a sliver above/below the art).
    // The product PNG is a square canvas: the two-tube cluster fills only ~58%×51%
    // of it, hence productHeight runs far above 100%. productShiftX pulls the cluster
    // onto the left half of the banner, over "TOOTH…", as in the reference.
    showcase: {
      hero: "/brand/finest/showcase/title.png",
      heroAspect: "4570 / 3141",
      productAlign: "center",
      parallax: false,
      bannerAspect: "4810 / 2261",
      variants: [
        { bg: "/brand/finest/showcase/1-2.png", product: "/brand/finest/showcase/1-1.png",
          bgAspect: "4810 / 2261", productAspect: "3660 / 3648", productHeight: "155%",
          productShiftX: "0%", productShiftY: "-6%",
          mobile: { productHeight: "160%", productShiftX: "1%", productShiftY: "-6%" } },
      ],
    },
  };

export default entry;
