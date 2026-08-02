import type { Brand } from "@/lib/brands";

  // 2d — Rebonding System
const entry: Brand = {
    slug: "rebonding-system",
    name: "Rebonding System",
    division: "beauty",
    parent: "makarizo-professional",
    // Shown under the CTA headline ("Rasakan Rebonding System sekarang.") — the
    // reference's closing line.
    tagline:
      { en: "Achieve your dream straight hair with maximum protection and moisture.", id: "Wujudkan rambut lurus impian dengan perlindungan dan kelembapan maksimal." },
    // BrandIntro headline. One block (no ". " inside) so it renders as a single
    // extrabold paragraph, matching the reference.
    description:
      { en: "A combination of Hydrolyzed Collagen and Hydrolyzed Milk Protein helps straighten, strengthen, and maintain hair moisture so it stays healthy and smooth", id: "Kombinasi Hydrolyzed Collagen dan Hydrolyzed Milk Protein membantu meluruskan, menguatkan, dan menjaga kelembapan rambut agar tetap sehat dan halus" },
    accentClass: "bg-brand-rebonding",
    // Rebonding System slate — sampled from the wordmark art (rgb 84,86,90). Drives
    // the About eyebrow, the lineup wash + Learn more/Buy buttons and the CTA block.
    accentHex: "#54565A",
    // No standalone 3:4 brand card art — CrossSell reads this; the hero renders from
    // `heroLayers`. The About straight-hair shot is square with the subject centred,
    // so it crops cleanly to 3:4.
    heroImage: "/brand/rebonding-system/about/3.png",
    // Hero — flat warm off-white banner (bannerBg; the folder ships no background
    // plate) with the wordmark + wording on the left and the Step 1/Step 2 trio
    // staggered on the right. Hair Energy pattern. Widths use min(vw, vh) with the
    // same vw:vh ratio on every layer, so the whole cluster scales as one with the
    // shorter axis; each layer carries a `mobile` override (§4).
    // NOTE: every PNG has generous transparent padding — the AR/SG jars fill ~78% of
    // their canvas, the tilted MN bottle only ~54% of its width — so the layer boxes
    // below are markedly wider than the products look.
    heroLayers: [
      // Anti Resistant+ jar — back, highest and left of the pair, enters from the LEFT.
      { src: "/brand/rebonding-system/hero/2.png", depth: 36, enterFrom: "left", enterDelay: 0,
        width: "min(26.5vw, 33.5vh)", aspectRatio: "2004 / 1965", left: "50.3%", top: "9.6%",
        mobile: { left: "1%", top: "24%", width: "min(40vw, 26vh)" } },
      // Super Gold+ jar — right of the pair and slightly lower, enters from the RIGHT (3rd).
      { src: "/brand/rebonding-system/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4,
        width: "min(28vw, 35.5vh)", aspectRatio: "2132 / 2100", left: "62%", top: "21.4%",
        mobile: { left: "47%", top: "30%", width: "min(42vw, 27vh)" } },
      // Milky Neutralizer+ bottle — front, tilted across the pair, drops in from the TOP (2nd).
      { src: "/brand/rebonding-system/hero/1.png", depth: 72, enterFrom: "top", enterDelay: 0.2,
        width: "min(41vw, 52vh)", aspectRatio: "2724 / 3019", left: "42.5%", top: "31%",
        mobile: { left: "19%", top: "37%", width: "min(58vw, 38vh)" } },
    ],
    heroContent: {
      logo: "/brand/rebonding-system/hero/wordmark.png",
      logoAspect: "1796 / 451",
      logoWidth: "38vw",
      maxWidth: "40vw",
      // Reference wording — set uppercase, as drawn.
      tagline: { en: "PIONEER OF HAIR STRAIGHTENING IN INDONESIA", id: "PIONIR PELURUSAN RAMBUT DI INDONESIA" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "7%",
      offsetY: "15vh",
      // Light banner → dark text (and the navbar paints its dark treatment).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "68vw" },
    },
    bannerBg: "#F2EFE9",
    hero: false,
    // The full Step 1 range (SG+/GE+/AR+/ED+) followed by the Step 2 neutralizer,
    // in the same order as the showcase banners below. Every jar render shares one
    // canvas and one amount of padding, and the Step 2 bottle is genuinely taller
    // and slimmer than the jars, so no `imageScale` correction is needed.
    products: [
      { name: "Hair Straightening", variant: { en: "Super Gold+", id: "Super Gold+" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/rebonding-system/product-lineup/RBS New Step 1 500mL Jar Imagery 20241111 SG.png" },
      { name: "Hair Straightening", variant: { en: "Gold Edition+", id: "Gold Edition+" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/rebonding-system/product-lineup/RBS New Step 1 500mL Jar Imagery 20241111 GE.png" },
      { name: "Hair Straightening", variant: { en: "Anti Resistant+", id: "Anti Resistant+" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/rebonding-system/product-lineup/RBS New Step 1 500mL Jar Imagery 20241111 AR.png" },
      { name: "Hair Straightening", variant: { en: "Extremely Damaged+", id: "Extremely Damaged+" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/rebonding-system/product-lineup/RBS New Step 1 500mL Jar Imagery 20241111 ED.png" },
      { name: "Milky Neutralizer+", variant: { en: "For All Hair Types", id: "Untuk Semua Jenis Rambut" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/rebonding-system/product-lineup/RBS New Step 2 500mL Bottle Imagery 20241111 (3).png" },
    ],
    about: [
      { title: { en: "Hydrolyzed Keratin", id: "Hydrolyzed Keratin" }, image: "/brand/rebonding-system/about/1.png" },
      { title: { en: "Hydrolyzed Milk Protein", id: "Hydrolyzed Milk Protein" }, image: "/brand/rebonding-system/about/2.png" },
      { title: { en: "Natural Straight", id: "Lurus Alami" }, image: "/brand/rebonding-system/about/3.png" },
    ],
    // Showcase — the "Rambut Lurus Yang Sehat, Kuat, Lembut & Berkilau" poster, then
    // the four variant banners. Each bg ({n}-2) is a designed 4810×2260 off-white card
    // with the variant name and its caption baked in, so `bannerAspect` keeps it
    // uncropped (the MK3 / 128 pattern); the jar is overlaid centred, in the gap the
    // artwork leaves between the two words. No sub-brand pages exist for this brand,
    // so the banners carry no `href`.
    // `productHeight` differs per banner purely to cancel out the padding difference
    // between the two render batches (78% fill vs 63% fill) — every jar ends up the
    // same visible size (~45% of the banner height, as drawn in the reference), and
    // every value stays far below the source resolution. `productShiftY` lifts each
    // jar off the baked-in caption into the upper-middle band the artwork leaves free.
    showcase: {
      hero: "/brand/rebonding-system/showcase/title.png",
      heroAspect: "4594 / 3387",
      productAlign: "center",
      bannerAspect: "4810 / 2260",
      variants: [
        // SUPER GOLD — SG+ jar (tight render, 78% fill)
        { bg: "/brand/rebonding-system/showcase/1-2.png", product: "/brand/rebonding-system/showcase/1-1.png",
          bgAspect: "4810 / 2261", productAspect: "2132 / 2100", productHeight: "57%", productShiftY: "-20%" },
        // GOLD EDITION — GE+ jar (padded render, 63% fill → taller box for the same jar)
        { bg: "/brand/rebonding-system/showcase/2-2.png", product: "/brand/rebonding-system/showcase/2-1.png",
          bgAspect: "4810 / 2260", productAspect: "1922 / 2045", productHeight: "75%", productShiftY: "-20%" },
        // ANTI RESISTANT — AR+ jar (tight render)
        { bg: "/brand/rebonding-system/showcase/3-2.png", product: "/brand/rebonding-system/showcase/3-1.png",
          bgAspect: "4810 / 2260", productAspect: "2004 / 1965", productHeight: "57%", productShiftY: "-20%" },
        // EXTREMELY DAMAGED — ED+ jar (padded render)
        { bg: "/brand/rebonding-system/showcase/4-2.png", product: "/brand/rebonding-system/showcase/4-1.png",
          bgAspect: "4810 / 2261", productAspect: "1922 / 2045", productHeight: "75%", productShiftY: "-20%" },
      ],
    },
  };

export default entry;
