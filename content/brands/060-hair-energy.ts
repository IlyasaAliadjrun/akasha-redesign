import type { Brand } from "@/lib/brands";

  // 1c — Hair Energy
const entry: Brand = {
    slug: "hair-energy",
    name: "Hair Energy",
    division: "beauty",
    parent: "makarizo",
    tagline: { en: "Salon-quality care, at home.", id: "Perawatan kualitas salon, di rumah." },
    description: {
      en: "Complete hair care from Makarizo Hair Energy — for hair loss, dryness, and oiliness.",
      id: "Perawatan rambut lengkap dari Makarizo Hair Energy — untuk rambut rontok, kering, hingga berminyak.",
    },
    accentClass: "bg-brand-he",
    // Hair Energy's visual identity is orange (matches its banner / bannerBg),
    // not the pink it used to inherit from Makarizo.
    accentHex: "#F36C21",
    // No standalone 3:4 brand card art yet — reuse the 16:9 home banner. Only
    // CrossSell reads this; the hero itself renders from `heroLayers`.
    heroImage: "/home/hero-carousel/hair-energy.jpg",
    // Per-brand layered parallax banner. Order in this array = stacking (last =
    // front); entrance timing is controlled by `enterDelay`, entrance direction by
    // `enterFrom`. Positions/sizes are vw/% so the whole composition scales as one.
    heroLayers: [
      // All three products share one (natural) size. produk-1 & produk-3 sit level;
      // produk-2 (front) sits slightly lower, with only a small overlap between them.
      // Creambath — left, enters from the LEFT (1st).
      { src: "/brand/hair-energy/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(25vw, 53vh)", maxWidth: "1344px", aspectRatio: "2687 / 3660", left: "54%", top: "10%",
        mobile: { left: "2%", top: "25%", width: "min(57vw, 42vh)" } },
      // Scentsations — right, level with creambath, enters from the RIGHT (3rd).
      { src: "/brand/hair-energy/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(25vw, 53vh)", maxWidth: "1344px", aspectRatio: "2687 / 3660", left: "72%", top: "7%",
        mobile: { left: "42%", top: "23%", width: "min(57vw, 42vh)" } },
      // Shampoo — front/centre, slightly lower, enters from the TOP (2nd).
      { src: "/brand/hair-energy/hero/2.png", depth: 72, enterFrom: "top", enterDelay: 0.2, width: "min(25vw, 53vh)", maxWidth: "1344px", aspectRatio: "2687 / 3660", left: "63%", top: "22%",
        mobile: { left: "22%", top: "33%", width: "min(57vw, 42vh)" } },
    ],
    heroContent: {
      logo: "/brand/hair-energy/hero/wordmark.png",
      logoAspect: "1576 / 1086",
      logoWidth: "16.5vw",
      maxWidth: "24.5vw",
      tagline: { en: "Soft, Fragrant Hair Every Day.", id: "Rambut Lembut & Wangi Setiap Hari." },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "10%",
      offsetY: "5vh",
      theme: "light",
      delay: 0.6,
      mobile: { logoWidth: "26vw" },
    },
    bannerBg: "#F36C21",
    hero: true,
    products: [
      { name: "Fibertherapy Shampoo", variant: { en: "Active Menthol", id: "Active Menthol" }, size: { en: "170 mL", id: "170 mL" }, image: "/brand/hair-energy/product-lineup/shampoo-active-menthol-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: { en: "Aloe Melon", id: "Aloe Melon" }, size: { en: "170 mL", id: "170 mL" }, image: "/brand/hair-energy/product-lineup/shampoo-aloe-melon-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: { en: "Citrus Tea", id: "Citrus Tea" }, size: { en: "170 mL", id: "170 mL" }, image: "/brand/hair-energy/product-lineup/shampoo-citrus-tea-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: { en: "Kiwi", id: "Kiwi" }, size: { en: "170 mL", id: "170 mL" }, image: "/brand/hair-energy/product-lineup/shampoo-kiwi-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: { en: "Olive", id: "Olive" }, size: { en: "170 mL", id: "170 mL" }, image: "/brand/hair-energy/product-lineup/shampoo-olive-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: { en: "Royal Jelly", id: "Royal Jelly" }, size: { en: "170 mL", id: "170 mL" }, image: "/brand/hair-energy/product-lineup/shampoo-royal-jelly-170ml.png" },
      { name: "Fibertherapy Creambath", variant: { en: "Aloe Melon", id: "Aloe Melon" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hair-energy/product-lineup/creambath-aloe-melon-500ml.png" },
      { name: "Fibertherapy Creambath", variant: { en: "Ginseng", id: "Ginseng" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hair-energy/product-lineup/creambath-ginseng-500ml.png" },
      { name: "Fibertherapy Creambath", variant: { en: "Kiwi", id: "Kiwi" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hair-energy/product-lineup/creambath-kiwi-500ml.png" },
      { name: "Fibertherapy Creambath", variant: { en: "Olive", id: "Olive" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hair-energy/product-lineup/creambath-olive-500ml.png" },
      { name: "Fibertherapy Creambath", variant: { en: "Royal Jelly", id: "Royal Jelly" }, size: { en: "500 mL", id: "500 mL" }, image: "/brand/hair-energy/product-lineup/creambath-royal-jelly-500ml.png" },
      { name: "Scentsations", variant: { en: "Amber Wood", id: "Amber Wood" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-amber-wood-100ml.png" },
      { name: "Scentsations", variant: { en: "Blue Coast", id: "Blue Coast" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-blue-coast-100ml.png" },
      { name: "Scentsations", variant: { en: "Cherry Blossoms", id: "Cherry Blossoms" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-cherry-blossoms-100ml.png" },
      { name: "Scentsations", variant: { en: "Emerald Crush", id: "Emerald Crush" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-emerald-crush-100ml.png" },
      { name: "Scentsations", variant: { en: "Fresh Bouquet", id: "Fresh Bouquet" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-fresh-bouquet-100ml.png" },
      { name: "Scentsations", variant: { en: "Morning Dew", id: "Morning Dew" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-morning-dew-100ml.png" },
      { name: "Scentsations", variant: { en: "Ocean Breeze", id: "Ocean Breeze" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-ocean-breeze-100ml.png" },
      { name: "Scentsations", variant: { en: "White Musk", id: "White Musk" }, size: { en: "100 mL", id: "100 mL" }, image: "/brand/hair-energy/product-lineup/scentsations-white-musk-100ml.png" },
      { name: "Vitaglitz", variant: { en: "Aloe Melon", id: "Aloe Melon" }, size: { en: "6×1 mL", id: "6×1 mL" }, image: "/brand/hair-energy/product-lineup/vitaglitz-aloe-melon-6x1ml.png" },
      { name: "Vitaglitz", variant: { en: "Kiwi", id: "Kiwi" }, size: { en: "6×1 mL", id: "6×1 mL" }, image: "/brand/hair-energy/product-lineup/vitaglitz-kiwi-6x1ml.png" },
      { name: "Vitaglitz", variant: { en: "Royal Jelly", id: "Royal Jelly" }, size: { en: "6×1 mL", id: "6×1 mL" }, image: "/brand/hair-energy/product-lineup/vitaglitz-royal-jelly-6x1ml.png" },
    ],
    reasons: [
      { icon: "🌸", title: { en: "All-day lasting fragrance", id: "Wangi tahan seharian" }, body: { en: "A fragrance formula that lingers gently on hair and body.", id: "Formula fragrance yang menempel lembut di rambut dan tubuh." } },
      { icon: "🧴", title: { en: "Salon nutrition at home", id: "Nutrisi salon di rumah" }, body: { en: "Creambath with Royal Jelly, Kiwi, and Olive — as nourishing as professional treatments.", id: "Creambath dengan Royal Jelly, Kiwi, dan Olive — senutrisi perawatan profesional." } },
      { icon: "💆", title: { en: "For every hair condition", id: "Untuk setiap kondisi rambut" }, body: { en: "Hair loss, dryness, oiliness, or damage — there's the right variant for you.", id: "Rontok, kering, berminyak, atau rusak — ada varian yang tepat untukmu." } },
      { icon: "💖", title: { en: "Loved by Indonesian Gen-Z", id: "Dicintai Gen-Z Indonesia" }, body: { en: "The #EasyToKnow routine that's a self-care favorite on TikTok.", id: "Rutinitas #EasyToKnow yang jadi favorit self-care di TikTok." } },
    ],
    about: [
      { title: { en: "Hair Care with Keratin", id: "Perawatan Rambut dengan Keratin" }, image: "/brand/hair-energy/about/1.png" },
      { title: { en: "pH Balanced Formula", id: "Formula pH Balance" }, image: "/brand/hair-energy/about/2.png" },
      { title: { en: "Natural Extract", id: "Ekstrak Alami" }, image: "/brand/hair-energy/about/3.png" },
    ],
    showcase: {
      hero: "/brand/hair-energy/showcase/title.png",
      heroAspect: "5219 / 3799",
      // Each variant banner links to its sub-brand (product-line) page.
      variants: [
        { bg: "/brand/hair-energy/showcase/1-2.png", product: "/brand/hair-energy/showcase/1-1.png", href: "/brands/hair-energy/shampoo" },
        { bg: "/brand/hair-energy/showcase/2-2.png", product: "/brand/hair-energy/showcase/2-1.png", href: "/brands/hair-energy/creambath" },
        { bg: "/brand/hair-energy/showcase/3-2.png", product: "/brand/hair-energy/showcase/3-1.png", href: "/brands/hair-energy/scentsations" },
        { bg: "/brand/hair-energy/showcase/4-2.png", product: "/brand/hair-energy/showcase/4-1.png", productAspect: "1470 / 2073", productHeight: "75%", href: "/brands/hair-energy/vitaglitz" },
      ],
    },
    features: [
      {
        title: { en: "Salon-quality creambath", id: "Creambath berkualitas salon" },
        body: { en: "Fibertherapy with Royal Jelly, Kiwi, and Olive for deep nourishment from root to tip.", id: "Fibertherapy dengan Royal Jelly, Kiwi, dan Olive untuk nutrisi mendalam dari akar ke ujung." },
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "All-day lasting fragrance", id: "Wangi tahan seharian" },
        body: { en: "Scentsations hair & body fragrance — three scent variants to accompany you all day long.", id: "Scentsations hair & body fragrance — tiga varian wangi yang menemani sepanjang hari." },
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "For every hair condition", id: "Untuk setiap kondisi rambut" },
        body: { en: "Hair loss, dryness, oiliness, or split ends — there's a solution for every hair story.", id: "Rambut rontok, kering, berminyak, atau bercabang — ada solusi untuk setiap cerita rambutmu." },
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
