import type { Brand } from "@/lib/brands";

  // 1c — Hair Energy
const entry: Brand = {
    slug: "hair-energy",
    name: "Hair Energy",
    division: "beauty",
    parent: "makarizo",
    tagline: "Salon-quality care, at home.",
    description:
      "Perawatan rambut lengkap dari Makarizo Hair Energy — untuk rambut rontok, kering, hingga berminyak.",
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
      { src: "/brand/hair-energy/hero/1.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(28vw, 56vh)", aspectRatio: "2687 / 3660", left: "44%", top: "7%",
        mobile: { left: "5%", top: "25%", width: "min(54vw, 42vh)" } },
      // Scentsations — right, level with creambath, enters from the RIGHT (3rd).
      { src: "/brand/hair-energy/hero/3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(28vw, 56vh)", aspectRatio: "2687 / 3660", left: "64%", top: "4%",
        mobile: { left: "45%", top: "23%", width: "min(54vw, 42vh)" } },
      // Shampoo — front/centre, slightly lower, enters from the TOP (2nd).
      { src: "/brand/hair-energy/hero/2.png", depth: 72, enterFrom: "top", enterDelay: 0.2, width: "min(28vw, 56vh)", aspectRatio: "2687 / 3660", left: "54%", top: "19%",
        mobile: { left: "25%", top: "33%", width: "min(54vw, 42vh)" } },
    ],
    heroContent: {
      logo: "/brand/hair-energy/hero/wordmark.png",
      logoAspect: "1576 / 1086",
      logoWidth: "18vw",
      maxWidth: "26vw",
      tagline: "Rambut Lembut & Wangi Setiap Hari.",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "21%",
      offsetY: "8vh",
      theme: "light",
      delay: 0.6,
      mobile: { logoWidth: "26vw" },
    },
    bannerBg: "#F36C21",
    hero: true,
    products: [
      { name: "Fibertherapy Shampoo", variant: "Active Menthol", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-active-menthol-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Aloe Melon", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-aloe-melon-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Citrus Tea", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-citrus-tea-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Kiwi", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-kiwi-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Olive", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-olive-170ml.png" },
      { name: "Fibertherapy Shampoo", variant: "Royal Jelly", size: "170 mL", image: "/brand/hair-energy/product-lineup/shampoo-royal-jelly-170ml.png" },
      { name: "Fibertherapy Creambath", variant: "Aloe Melon", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-aloe-melon-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Ginseng", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-ginseng-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Kiwi", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-kiwi-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Olive", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-olive-500ml.png" },
      { name: "Fibertherapy Creambath", variant: "Royal Jelly", size: "500 mL", image: "/brand/hair-energy/product-lineup/creambath-royal-jelly-500ml.png" },
      { name: "Scentsations", variant: "Amber Wood", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-amber-wood-100ml.png" },
      { name: "Scentsations", variant: "Blue Coast", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-blue-coast-100ml.png" },
      { name: "Scentsations", variant: "Cherry Blossoms", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-cherry-blossoms-100ml.png" },
      { name: "Scentsations", variant: "Emerald Crush", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-emerald-crush-100ml.png" },
      { name: "Scentsations", variant: "Fresh Bouquet", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-fresh-bouquet-100ml.png" },
      { name: "Scentsations", variant: "Morning Dew", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-morning-dew-100ml.png" },
      { name: "Scentsations", variant: "Ocean Breeze", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-ocean-breeze-100ml.png" },
      { name: "Scentsations", variant: "White Musk", size: "100 mL", image: "/brand/hair-energy/product-lineup/scentsations-white-musk-100ml.png" },
      { name: "Vitaglitz", variant: "Aloe Melon", size: "6×1 mL", image: "/brand/hair-energy/product-lineup/vitaglitz-aloe-melon-6x1ml.png" },
      { name: "Vitaglitz", variant: "Kiwi", size: "6×1 mL", image: "/brand/hair-energy/product-lineup/vitaglitz-kiwi-6x1ml.png" },
      { name: "Vitaglitz", variant: "Royal Jelly", size: "6×1 mL", image: "/brand/hair-energy/product-lineup/vitaglitz-royal-jelly-6x1ml.png" },
    ],
    reasons: [
      { icon: "🌸", title: "Wangi tahan seharian", body: "Formula fragrance yang menempel lembut di rambut dan tubuh." },
      { icon: "🧴", title: "Nutrisi salon di rumah", body: "Creambath dengan Royal Jelly, Kiwi, dan Olive — senutrisi perawatan profesional." },
      { icon: "💆", title: "Untuk setiap kondisi rambut", body: "Rontok, kering, berminyak, atau rusak — ada varian yang tepat untukmu." },
      { icon: "💖", title: "Dicintai Gen-Z Indonesia", body: "Rutinitas #EasyToKnow yang jadi favorit self-care di TikTok." },
    ],
    about: [
      { title: "Perawatan Rambut dengan Keratin", image: "/brand/hair-energy/about/1.png" },
      { title: "Formula pH Balance", image: "/brand/hair-energy/about/2.png" },
      { title: "Natural Extract", image: "/brand/hair-energy/about/3.png" },
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
        title: "Creambath berkualitas salon",
        body: "Fibertherapy dengan Royal Jelly, Kiwi, dan Olive untuk nutrisi mendalam dari akar ke ujung.",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Wangi tahan seharian",
        body: "Scentsations hair & body fragrance — tiga varian wangi yang menemani sepanjang hari.",
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Untuk setiap kondisi rambut",
        body: "Rambut rontok, kering, berminyak, atau bercabang — ada solusi untuk setiap cerita rambutmu.",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
