import type { Brand } from "@/lib/brands";

  // 6 — Finest (n-Hydroxyapatite toothpaste)
const entry: Brand = {
    slug: "finest",
    name: "Finest",
    division: "beauty",
    // Reads as the CTA sub-line ("Rasakan Finest sekarang." + this) and on the
    // CrossSell card — the reference's closing coral panel wording.
    tagline: "Naturally Whitening & Oral Microbiome-Friendly",
    // BrandIntro splits on ". ": sentence 1 becomes the bold headline, the rest the
    // lighter continuation. Copy taken from the reference's "About Finest" block.
    description:
      "Perlindungan Ekstra Lembut, bebas fluoride dan SLS. Aman digunakan oleh semua usia, termasuk ibu hamil. Diperkaya Nano Hydroxyapatite serta bersertifikasi BPOM dan Halal, bekerja maksimal memperkuat gigi sensitif tanpa iritasi.",
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
        width: "min(50vw, 73vh)", aspectRatio: "3176 / 4735", left: "51%", top: "-9%",
        mobile: { width: "min(56vw, 37vh)", left: "27%", top: "20%" } },
      // Light Lemon — front, slightly lower and overlapping the Soft Mint tube.
      { src: "/brand/finest/hero/1.png", depth: 56, enterFrom: "bottom", enterDelay: 0.15,
        width: "min(46vw, 68vh)", aspectRatio: "3026 / 4424", left: "48%", top: "1%",
        mobile: { width: "min(52vw, 34vh)", left: "12%", top: "26%" } },
    ],
    heroContent: {
      logo: "/brand/finest/hero/wordmark.png",
      logoAspect: "1394 / 325",
      logoWidth: "25vw",
      maxWidth: "27vw",
      tagline: "Remineralisasi, Pemutih Alami & Ramah Mikrobioma Oral",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "9%",
      offsetY: "6vh",
      // Light banner → ink copy (and the navbar takes its dark treatment).
      theme: "dark",
      delay: 0.55,
      mobile: { logoWidth: "54vw" },
    },
    bannerBg: "#FCF6F5", // blush off-white, matching the reference hero
    hero: false,
    products: [
      { name: "Toothpaste", variant: "Soft Mint", size: "90 g", image: "/brand/finest/product-lineup/toothpaste-soft-mint-90g.png" },
      { name: "Toothpaste", variant: "Light Lemon", size: "90 g", image: "/brand/finest/product-lineup/toothpaste-light-lemon-90g.png" },
    ],
    reasons: [
      { icon: "🦷", title: "10% Nano Hydroxyapatite", body: "Meremineralisasi email gigi dan memutihkan secara alami tanpa abrasi." },
      { icon: "🌿", title: "Bebas fluoride & SLS", body: "Aman tertelan, ramah untuk semua usia — termasuk ibu hamil." },
      { icon: "❄️", title: "Sensasi dingin lembut", body: "Formula mint lembut yang menyegarkan tanpa membuat gusi perih." },
      { icon: "✅", title: "BPOM & Halal", body: "Tersertifikasi, diformulasikan untuk gigi sensitif tanpa iritasi." },
    ],
    about: [
      { title: "Mengandung Nano Hydroxyapetite", image: "/brand/finest/about/1.png" },
      { title: "Sensasi Dingin Menyegarkan", image: "/brand/finest/about/2.png" },
      { title: "Segar Tahan Lama", image: "/brand/finest/about/3.png" },
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
          bgAspect: "4810 / 2261", productAspect: "3660 / 3648", productHeight: "180%",
          productShiftX: "-24%", productShiftY: "-4%",
          mobile: { productHeight: "168%", productShiftX: "-24%", productShiftY: "-4%" } },
      ],
    },
  };

export default entry;
