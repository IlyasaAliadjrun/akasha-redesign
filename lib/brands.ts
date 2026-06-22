export type DivisionId =
  | "beverage"
  | "beauty"
  | "mens"
  | "food";

// One image layer of a parallax (layered) hero banner. Layers render back-to-front
// in array order; `depth` is how many px the layer drifts up as the hero scrolls
// away — bigger = faster, so a foreground decoration (high depth) appears to float
// over a slower product backdrop (low depth).
export type HeroLayer = {
  src: string;
  depth?: number; // px of parallax travel (default 40)
  fit?: "cover" | "contain"; // object-fit (default cover)
  position?: string; // CSS object-position, e.g. "left top"
  enterFrom?: "left" | "right" | "top" | "bottom"; // entrance slide direction (default: fade only)
  enterDelay?: number; // entrance delay in seconds (default: staggered by layer order)
  // When `width` is set, the layer renders as a *sized* element (not full-bleed)
  // — e.g. a logo/wordmark anchored in a corner. These map to inline CSS (not
  // Tailwind classes, because lib/ isn't scanned by Tailwind).
  width?: string; // CSS width, e.g. "44vw"
  maxWidth?: string; // e.g. "600px"
  aspectRatio?: string; // e.g. "1576 / 1086" (intrinsic ratio of the asset)
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  // Overrides applied on small screens (<768px) — reposition/resize a layer for
  // mobile without touching the desktop values.
  mobile?: {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    width?: string;
    enterFrom?: "left" | "right" | "top" | "bottom";
  };
};

// One variant banner in the showcase, built from two layered assets that animate
// independently (parallax on scroll + entrance), reusable across brands:
//   bg      — landscape banner art with text/sparkle (the "{n}-2" file)
//   product — portrait product that sits centred and overflows the banner top &
//             bottom, sliding in from the left (odd banner) or right (even banner).
export type ShowcaseVariant = {
  bg: string;
  product: string;
  bgAspect?: string; // default "5010 / 2354"
  productAspect?: string; // default "2687 / 3660"
  productHeight?: string; // product height relative to the banner; default "128%"
};

// Optional HTML overlay on a (parallax) brand hero — a left-aligned column with a
// logo/wordmark image, a tagline, and a CTA button. Positioned & coloured via CSS
// so it's reusable per brand.
export type HeroContent = {
  logo?: string;
  logoAspect?: string; // intrinsic ratio of the logo, e.g. "1576 / 1086"
  logoWidth?: string; // CSS width, e.g. "32vw"
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  left?: string; // block left offset (default "5%")
  maxWidth?: string; // block max width (omit to let the tagline run wider than the logo)
  offsetY?: string; // vertical nudge from centre, e.g. "10vh" moves the block down
  theme?: "light" | "dark"; // text colour (default "light" = white)
  delay?: number; // entrance delay in seconds
  // On mobile (<768px) the layout switches to: wordmark top-centre, tagline + CTA
  // bottom-left. Only the logo size differs per brand, set here.
  mobile?: { logoWidth?: string };
};

export type Brand = {
  slug: string;
  name: string;
  division: DivisionId;
  parent?: string; // slug of the parent brand, for sub-brands
  tagline: string;
  description: string;
  accentClass: string; // tailwind bg class
  accentHex: string;
  heroImage: string;
  // Optional layered/parallax hero. When set, it overrides `heroImage` and the
  // layers animate at different scroll speeds (see BrandHero). Assets must be
  // separated into layers (background/product opaque + decoration PNG transparan).
  heroLayers?: HeroLayer[];
  heroContent?: HeroContent; // optional HTML overlay (wordmark + tagline + CTA)
  bannerBg?: string; // background behind a contained brand banner (hero)
  hero: boolean;
  products?: {
    name: string;
    variant?: string;
    size?: string;
    price?: string;
    image?: string;
  }[];
  features?: { title: string; body: string; image: string }[];
  reasons?: { icon: string; title: string; body: string }[];
  about?: { image: string; title: string }[];
  // Poster-style showcase: a hero graphic (foto_judul_3d/{brand}) with layered
  // parallax variant banners (foto_varian_3d/{brand}) overlapping its bottom edge.
  // `heroAspect` = hero's intrinsic ratio (CSS aspect-ratio; defaults to square).
  showcase?: { hero: string; heroAspect?: string; variants?: ShowcaseVariant[] };
};

export const DIVISIONS: {
  id: DivisionId;
  name: string;
  tagline: string;
  brandCount: number;
  accentHex: string;
  image: string;
}[] = [
  {
    id: "beverage",
    name: "Mineral Water",
    tagline: "Purity you can taste",
    brandCount: 2,
    accentHex: "#0066CC",
    image: "/one_company_many_moments/BU Banner NPL.jpg",
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    tagline: "Confidence, bottled",
    brandCount: 6,
    accentHex: "#C9956B",
    image: "/one_company_many_moments/BU Banner MKZ HE.png",
  },
  {
    id: "mens",
    name: "Men's Care",
    tagline: "Groomed, every day",
    brandCount: 1,
    accentHex: "#5B6B7F",
    image: "/main_banner/BARBER-DAILY.jpg",
  },
  {
    id: "food",
    name: "Food and Beverage",
    tagline: "Flavors that bring people together",
    brandCount: 4,
    accentHex: "#E85D2C",
    image:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1600&auto=format&fit=crop",
  },
];

export const BRANDS: Brand[] = [
  {
    slug: "nestle-pure-life",
    name: "Nestlé Pure Life",
    division: "beverage",
    tagline: "Gak dingin tetep seger.",
    description:
      "Air minum murni premium. Rasa bersih yang tetap menyegarkan, dingin maupun suhu ruang.",
    accentClass: "bg-brand-npl",
    accentHex: "#0077B6",
    heroImage:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=1800&auto=format&fit=crop",
    hero: true,
    products: [
      { name: "Pure Life", variant: "330 mL", size: "24 pack / dus", image: "/foto_sku/NPL/330 NPL.jpg" },
      { name: "Pure Life", variant: "600 mL", size: "24 pack / dus", image: "/foto_sku/NPL/600 NPL.jpg" },
      { name: "Pure Life", variant: "1500 mL", size: "12 pack / dus", image: "/foto_sku/NPL/1500 NPL.jpg" },
      { name: "Pure Life", variant: "Galon", size: "15 L", image: "/foto_sku/NPL/15L NPL.jpg" },
    ],
    reasons: [
      { icon: "💧", title: "Dimurnikan 12 tahap", body: "Setiap botol melewati proses penyaringan berlapis sebelum sampai ke tanganmu." },
      { icon: "🌿", title: "Bebas mineral berlebih", body: "Rasanya bersih, ringan, dan tidak meninggalkan aftertaste." },
      { icon: "☕", title: "Disukai para barista", body: "Menjaga karakter asli kopi spesialti yang kamu seduh." },
      { icon: "👨‍👩‍👧", title: "Aman untuk keluarga", body: "Direkomendasikan untuk ibu hamil dan si kecil yang sedang tumbuh." },
    ],
    features: [
      {
        title: "Kemurnian di setiap tetes",
        body: "Dimurnikan melalui proses berlapis sehingga setiap teguk terasa bersih dan jernih.",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Segar tanpa harus dingin",
        body: "Rasa yang stabil di suhu ruang — cocok untuk kopi pagi hingga olahraga sore.",
        image:
          "https://images.unsplash.com/photo-1550505095-81378a674395?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Pilihan keluarga Indonesia",
        body: "Dari ibu hamil hingga barista kopi, dipercaya di rumah dan kafe di seluruh nusantara.",
        image:
          "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "vica",
    name: "VICA",
    division: "beverage",
    tagline: "Mineral alami dari sumbernya.",
    description:
      "Air mineral alami yang diproduksi sejak Oktober 2011. Tersedia dalam 330 mL, 600 mL, 1500 mL, dan galon 19 L.",
    accentClass: "bg-brand-vica",
    accentHex: "#2E8B57",
    heroImage:
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "VICA", variant: "330 mL" },
      { name: "VICA", variant: "600 mL" },
      { name: "VICA", variant: "1500 mL" },
      { name: "VICA", variant: "Galon", size: "19 L" },
    ],
    reasons: [
      { icon: "⛰️", title: "Bersumber dari alam", body: "Air mineral alami langsung dari sumber pegunungan Indonesia." },
      { icon: "✨", title: "Mineral seimbang", body: "Kandungan mineral alami untuk menjaga kesegaran tubuh sepanjang hari." },
      { icon: "🏠", title: "Pilihan rumah tangga", body: "Diproduksi sejak 2011, sudah dipercaya ribuan keluarga." },
    ],
  },

  /* ───────────────── Beauty & Personal Care ───────────────── */

  // 1 — Makarizo (umbrella brand)
  {
    slug: "makarizo",
    name: "Makarizo",
    division: "beauty",
    tagline: "Ahli rambut Indonesia.",
    description:
      "Rumah bagi rangkaian perawatan rambut & tubuh Makarizo — dari Asters dan Advisor hingga Hair Energy, t1, dan 128.",
    accentClass: "bg-brand-makarizo",
    accentHex: "#D4447C",
    heroImage: "/main_banner/HAIR-ENERGY.jpg",
    hero: false,
    reasons: [
      { icon: "💇", title: "Lebih dari 40 tahun keahlian rambut", body: "Inovasi perawatan rambut yang tumbuh bersama wanita Indonesia." },
      { icon: "🧴", title: "Satu rumah, banyak rangkaian", body: "Dari daily care hingga fragrance — semua kebutuhan rambut dalam satu brand." },
      { icon: "❤️", title: "Dipercaya lintas generasi", body: "Dari salon profesional hingga rutinitas di rumah." },
    ],
  },
  // 1a — Asters
  {
    slug: "asters",
    name: "Asters",
    division: "beauty",
    parent: "makarizo",
    tagline: "Perawatan rambut harian yang lembut.",
    description:
      "Rangkaian perawatan rambut harian dari Makarizo untuk rambut sehat, lembut, dan mudah diatur setiap hari.",
    accentClass: "bg-brand-asters",
    accentHex: "#7C5CBF",
    heroImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 1b — Advisor
  {
    slug: "advisor",
    name: "Advisor",
    division: "beauty",
    parent: "makarizo",
    tagline: "Solusi rambut sehat dan kuat.",
    description:
      "Rangkaian Advisor dari Makarizo membantu merawat rambut agar tetap kuat, ternutrisi, dan bebas masalah.",
    accentClass: "bg-brand-advisor",
    accentHex: "#3A7BD5",
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 1c — Hair Energy
  {
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
    heroImage: "/brand_banner/banner_hair_energy.png",
    // Per-brand layered parallax banner. Order in this array = stacking (last =
    // front); entrance timing is controlled by `enterDelay`, entrance direction by
    // `enterFrom`. Positions/sizes are vw/% so the whole composition scales as one.
    heroLayers: [
      // All three products share one (natural) size. produk-1 & produk-3 sit level;
      // produk-2 (front) sits slightly lower, with only a small overlap between them.
      // Creambath — left, enters from the LEFT (1st).
      { src: "/brand_banner/Hair Energy/produk-1.png", depth: 36, enterFrom: "left", enterDelay: 0, width: "min(30vw, 60vh)", aspectRatio: "2687 / 3660", left: "40%", top: "3%",
        mobile: { left: "5%", top: "28%", width: "min(56vw, 45vh)" } },
      // Scentsations — right, level with creambath, enters from the RIGHT (3rd).
      { src: "/brand_banner/Hair Energy/produk-3.png", depth: 54, enterFrom: "right", enterDelay: 0.4, width: "min(30vw, 60vh)", aspectRatio: "2687 / 3660", left: "60%", top: "0%",
        mobile: { left: "45%", top: "26%", width: "min(56vw, 45vh)" } },
      // Shampoo — front/centre, slightly lower, enters from the TOP (2nd).
      { src: "/brand_banner/Hair Energy/produk-2.png", depth: 72, enterFrom: "top", enterDelay: 0.2, width: "min(30vw, 60vh)", aspectRatio: "2687 / 3660", left: "50%", top: "15%",
        mobile: { left: "25%", top: "36%", width: "min(56vw, 45vh)" } },
    ],
    heroContent: {
      logo: "/brand_banner/Hair Energy/wordmark-1.png",
      logoAspect: "1576 / 1086",
      logoWidth: "18vw",
      maxWidth: "26vw",
      tagline: "Rambut Lembut & Wangi Setiap Hari.",
      ctaText: "Learn more",
      ctaHref: "#about",
      left: "24%",
      offsetY: "10vh",
      theme: "light",
      delay: 0.6,
      mobile: { logoWidth: "55vw" },
    },
    bannerBg: "#F36C21",
    hero: true,
    products: [
      { name: "Fibertherapy Shampoo", variant: "Active Menthol", size: "170 mL", image: "/foto_sku/HE/HE Shampoo Active Menthol 170mL.png" },
      { name: "Fibertherapy Shampoo", variant: "Aloe Melon", size: "170 mL", image: "/foto_sku/HE/HE Shampoo Aloe Melon 170mL.png" },
      { name: "Fibertherapy Shampoo", variant: "Citrus Tea", size: "170 mL", image: "/foto_sku/HE/HE Shampoo Citrus Tea 170mL.png" },
      { name: "Fibertherapy Shampoo", variant: "Kiwi", size: "170 mL", image: "/foto_sku/HE/HE Shampoo Kiwi 170mL.png" },
      { name: "Fibertherapy Shampoo", variant: "Olive", size: "170 mL", image: "/foto_sku/HE/HE Shampoo Olive 170mL.png" },
      { name: "Fibertherapy Shampoo", variant: "Royal Jelly", size: "170 mL", image: "/foto_sku/HE/HE Shampoo Royal Jelly 170mL.png" },
      { name: "Fibertherapy Creambath", variant: "Aloe Melon", size: "500 mL", image: "/foto_sku/HE/HE Creambath Aloe Melon 500mL.png" },
      { name: "Fibertherapy Creambath", variant: "Ginseng", size: "500 mL", image: "/foto_sku/HE/HE Creambath Ginseng 500mL.png" },
      { name: "Fibertherapy Creambath", variant: "Kiwi", size: "500 mL", image: "/foto_sku/HE/HE Creambath Kiwi 500mL.png" },
      { name: "Fibertherapy Creambath", variant: "Olive", size: "500 mL", image: "/foto_sku/HE/HE Creambath Olive 500mL.png" },
      { name: "Fibertherapy Creambath", variant: "Royal Jelly", size: "500 mL", image: "/foto_sku/HE/HE Creambath Royal Jelly 500mL.png" },
      { name: "Scentsations", variant: "Amber Wood", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Amber Wood 100mL.png" },
      { name: "Scentsations", variant: "Blue Coast", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Blue Coast 100mL.png" },
      { name: "Scentsations", variant: "Cherry Blossoms", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Cherry Blossoms 100mL.png" },
      { name: "Scentsations", variant: "Emerald Crush", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Emerald Crush 100mL.png" },
      { name: "Scentsations", variant: "Fresh Bouquet", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Fresh Bouquet 100mL.png" },
      { name: "Scentsations", variant: "Morning Dew", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Morning Dew 100mL.png" },
      { name: "Scentsations", variant: "Ocean Breeze", size: "100 mL", image: "/foto_sku/HE/HE Scentsations Ocean Breeze 100mL.png" },
      { name: "Scentsations", variant: "White Musk", size: "100 mL", image: "/foto_sku/HE/HE Scentsations White Musk 100mL.png" },
      { name: "Vitaglitz", variant: "Aloe Melon", size: "6×1 mL", image: "/foto_sku/HE/HE Vitaglitz Aloe Melon 6x1mL.png" },
      { name: "Vitaglitz", variant: "Kiwi", size: "6×1 mL", image: "/foto_sku/HE/HE Vitaglitz Kiwi 6x1mL.png" },
      { name: "Vitaglitz", variant: "Royal Jelly", size: "6×1 mL", image: "/foto_sku/HE/HE Vitaglitz Royal Jelly 6x1mL.png" },
    ],
    reasons: [
      { icon: "🌸", title: "Wangi tahan seharian", body: "Formula fragrance yang menempel lembut di rambut dan tubuh." },
      { icon: "🧴", title: "Nutrisi salon di rumah", body: "Creambath dengan Royal Jelly, Kiwi, dan Olive — senutrisi perawatan profesional." },
      { icon: "💆", title: "Untuk setiap kondisi rambut", body: "Rontok, kering, berminyak, atau rusak — ada varian yang tepat untukmu." },
      { icon: "💖", title: "Dicintai Gen-Z Indonesia", body: "Rutinitas #EasyToKnow yang jadi favorit self-care di TikTok." },
    ],
    about: [
      { title: "Perawatan Rambut dengan Keratin", image: "/foto_about/Hair Energy/Asset HE-05.png" },
      { title: "Formula pH Balance", image: "/foto_about/Hair Energy/Asset HE-06.png" },
      { title: "Natural Extract", image: "/foto_about/Hair Energy/Asset HE-07.png" },
    ],
    showcase: {
      hero: "/foto_judul_3d/Hair Energy/1.png",
      heroAspect: "5219 / 3799",
      variants: [
        { bg: "/foto_varian_3d/Hair Energy/1-2.png", product: "/foto_varian_3d/Hair Energy/1-1.png" },
        { bg: "/foto_varian_3d/Hair Energy/2-2.png", product: "/foto_varian_3d/Hair Energy/2-1.png" },
        { bg: "/foto_varian_3d/Hair Energy/3-2.png", product: "/foto_varian_3d/Hair Energy/3-1.png" },
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
  },
  // 1d — t1
  {
    slug: "t1",
    name: "t1",
    division: "beauty",
    parent: "makarizo",
    tagline: "Styling tanpa batas.",
    description:
      "Rangkaian styling t1 dari Makarizo untuk tampilan rambut yang ekspresif, tahan lama, dan mudah dibentuk.",
    accentClass: "bg-brand-t1",
    accentHex: "#E07A5F",
    heroImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 1e — 128
  {
    slug: "128",
    name: "128",
    division: "beauty",
    parent: "makarizo",
    tagline: "Perawatan rambut esensial.",
    description:
      "Rangkaian 128 dari Makarizo menghadirkan perawatan rambut esensial dengan formula yang ringan dan terjangkau.",
    accentClass: "bg-brand-128",
    accentHex: "#2A9D8F",
    heroImage:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },

  // 2 — Makarizo Professional
  {
    slug: "makarizo-professional",
    name: "Makarizo Professional",
    division: "beauty",
    tagline: "43 tahun besar bersama salon Indonesia.",
    description:
      "Brand salon profesional terdepan di Indonesia. Edukasi, komunitas, dan produk untuk para ahli rambut.",
    accentClass: "bg-brand-makpro",
    accentHex: "#2C2C2C",
    heroImage: "/main_banner/MAKARIZO-PROFESSIONAL.jpg",
    hero: true,
    products: [
      { name: "Concept Ultimax SF3", variant: "Coloring System", size: "Professional Use" },
      { name: "Rebonding System", variant: "Texturing", size: "Professional Use" },
      { name: "Hydroprisma", variant: "Texturing", size: "Professional Use" },
      { name: "Texture Experience", variant: "Treatment", size: "Salon Treatment" },
      { name: "Honey Dew Nutriv Serum", variant: "Treatment", size: "Salon Care" },
      { name: "Salon Daily", variant: "Hair Mask", size: "Home Care" },
      { name: "Salon Daily", variant: "Styling", size: "Home Care" },
      { name: "Salon Daily", variant: "Hair Care", size: "Home Care" },
    ],
    reasons: [
      { icon: "🏆", title: "43 tahun keahlian", body: "Brand salon profesional paling lama di Indonesia — dipercaya lintas generasi." },
      { icon: "🎓", title: "Didukung FAME Academy", body: "Edukasi berkelanjutan untuk hairdresser memastikan hasil selalu premium." },
      { icon: "🎨", title: "Sistem pewarnaan presisi", body: "Concept Ultimax SF3 — warna akurat, konsisten, dan tahan lama." },
      { icon: "🤝", title: "Komunitas Makarizo Circle", body: "360° salon business support: produk, edukasi, dan jaringan profesional." },
    ],
    features: [
      {
        title: "Coloring yang presisi",
        body: "Concept Ultimax SF3 — sistem pewarnaan rambut yang diandalkan profesional.",
        image:
          "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Texture Experience",
        body: "Treatment yang mengubah tekstur rambut dengan kelembutan dan kilau salon.",
        image:
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "FAME Academy",
        body: "Edukasi berkelanjutan untuk hairdresser — karena ilmu adalah produk terbaik.",
        image:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  // 2a — Salon Daily
  {
    slug: "salon-daily",
    name: "Salon Daily",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Rasa salon, setiap hari.",
    description:
      "Rangkaian home care Makarizo Professional untuk menjaga hasil perawatan salon tetap terasa setiap hari.",
    accentClass: "bg-brand-salondaily",
    accentHex: "#4A6FA5",
    heroImage:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2b — Honey Dew
  {
    slug: "honey-dew",
    name: "Honey Dew",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Nutrisi madu untuk rambut.",
    description:
      "Honey Dew Nutriv Serum dari Makarizo Professional menutrisi rambut dengan kelembapan dan kilau alami.",
    accentClass: "bg-brand-honeydew",
    accentHex: "#C9A227",
    heroImage:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2c — Concept Ultimax
  {
    slug: "concept-ultimax",
    name: "Concept Ultimax",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Sistem pewarnaan presisi.",
    description:
      "Concept Ultimax SF3 — sistem pewarnaan rambut profesional dengan warna akurat, konsisten, dan tahan lama.",
    accentClass: "bg-brand-ultimax",
    accentHex: "#5B3A8E",
    heroImage:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2d — Rebonding System
  {
    slug: "rebonding-system",
    name: "Rebonding System",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Rambut lurus sempurna.",
    description:
      "Rebonding System Makarizo Professional meluruskan rambut dengan hasil halus, rapi, dan tahan lama.",
    accentClass: "bg-brand-rebonding",
    accentHex: "#2C6E7F",
    heroImage:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2e — Texture Experience
  {
    slug: "texture-experience",
    name: "Texture Experience",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Tekstur rambut yang hidup.",
    description:
      "Texture Experience mengubah tekstur rambut dengan kelembutan dan kilau khas salon profesional.",
    accentClass: "bg-brand-texture",
    accentHex: "#B5651D",
    heroImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },
  // 2f — MK3
  {
    slug: "mk3",
    name: "MK3",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Performa salon profesional.",
    description:
      "MK3 dari Makarizo Professional menghadirkan rangkaian perawatan dengan performa tingkat salon.",
    accentClass: "bg-brand-mk3",
    accentHex: "#3D405B",
    heroImage:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1800&auto=format&fit=crop",
    hero: false,
  },

  // 3 — Inoskin
  {
    slug: "inoskin",
    name: "Inoskin",
    division: "beauty",
    tagline: "Science-led skincare.",
    description:
      "Perawatan kulit berbasis sains dari Akasha — formula efektif untuk kulit yang sehat, cerah, dan terhidrasi.",
    accentClass: "bg-brand-inoskin",
    accentHex: "#2BB8A3",
    heroImage:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    reasons: [
      { icon: "🔬", title: "Formula berbasis sains", body: "Dikembangkan dengan bahan aktif yang teruji untuk hasil nyata." },
      { icon: "💧", title: "Hidrasi mendalam", body: "Menjaga kelembapan kulit sepanjang hari tanpa terasa berat." },
      { icon: "🌿", title: "Lembut untuk kulit sensitif", body: "Diformulasikan agar aman dipakai setiap hari." },
    ],
  },
  // 4 — LOU
  {
    slug: "lou",
    name: "LOU",
    division: "beauty",
    tagline: "Beauty, your way.",
    description:
      "Rangkaian personal care LOU yang memadukan perawatan dan ekspresi diri dalam sentuhan modern.",
    accentClass: "bg-brand-lou",
    accentHex: "#B5838D",
    heroImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    reasons: [
      { icon: "✨", title: "Tampil sesuai dirimu", body: "Produk yang dirancang untuk mendukung ekspresi diri setiap hari." },
      { icon: "🪞", title: "Perawatan yang menyenangkan", body: "Rutinitas perawatan yang terasa seperti me-time." },
      { icon: "🌸", title: "Formula lembut", body: "Dipilih dengan bahan yang ramah di kulit." },
    ],
  },
  // 5 — Make It
  {
    slug: "make-it",
    name: "Make It",
    division: "beauty",
    tagline: "Your scent. Your story.",
    description:
      "Parfum untuk individu proaktif yang berani mewujudkan mimpi. Empat karakter, empat aroma.",
    accentClass: "bg-brand-makeit",
    accentHex: "#1C1C1C",
    heroImage:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Keep In Touch", variant: "Warm & Connecting", size: "Eau de Parfum" },
      { name: "Weekday Hustle", variant: "Focused & Resilient", size: "Eau de Parfum" },
      { name: "Dream Chaser", variant: "Ambitious & Confident", size: "Eau de Parfum" },
      { name: "Social Butterfly", variant: "Charismatic & Magnetic", size: "Eau de Parfum" },
    ],
    reasons: [
      { icon: "🎯", title: "Dibuat untuk karakter", body: "Empat archetype — pilih yang paling menggambarkan kamu hari ini." },
      { icon: "🌃", title: "Long-lasting performance", body: "Top, heart, dan base notes yang berkembang sepanjang hari." },
      { icon: "🪞", title: "Signature scent ready", body: "Formula clean yang mudah dipadupadankan dengan wardrobe-mu." },
    ],
    features: [
      {
        title: "Dream Chaser",
        body: "Semangat ambisi dan tekad — menyalakan motivasi dan memancarkan rasa percaya diri.",
        image:
          "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Weekday Hustle",
        body: "Produktivitas, ketahanan, dan fokus dalam satu semprotan.",
        image:
          "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Social Butterfly",
        body: "Karisma sosial dan daya tarik magnetik yang memantik percakapan.",
        image:
          "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  // 6 — Finest
  {
    slug: "finest",
    name: "Finest",
    division: "beauty",
    tagline: "Crafted to the finest detail.",
    description:
      "Rangkaian personal care premium Finest — perawatan dengan kualitas terbaik di setiap detailnya.",
    accentClass: "bg-brand-finest",
    accentHex: "#8E7CC3",
    heroImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    reasons: [
      { icon: "💎", title: "Kualitas premium", body: "Dibuat dengan bahan pilihan untuk hasil terbaik." },
      { icon: "🤍", title: "Detail yang diperhatikan", body: "Setiap produk dirancang dengan ketelitian tinggi." },
      { icon: "🌟", title: "Pengalaman mewah", body: "Perawatan yang terasa istimewa setiap kali digunakan." },
    ],
  },

  /* ───────────────── Men's Care ───────────────── */
  {
    slug: "barber-daily",
    name: "Barber Daily",
    division: "mens",
    tagline: "Barbershop-quality grooming, every day.",
    description:
      "Grooming essentials untuk pria modern — pomade, beard care, dan rutinitas pasca-cukur ala barbershop di rumah.",
    accentClass: "bg-brand-bd",
    accentHex: "#5B6B7F",
    heroImage: "/main_banner/BARBER-DAILY.jpg",
    hero: false,
  },

  /* ───────────────── Food and Beverage ───────────────── */
  {
    slug: "wonhae",
    name: "Wonhae",
    division: "food",
    tagline: "Korean flavors, Indonesian hearts.",
    description:
      "Makanan & snack inspirasi Korea. Dua sub-brand: Wonhae (snack & minuman) dan Mujigae by Wonhae (hidangan Korea).",
    accentClass: "bg-brand-wonhae",
    accentHex: "#E63946",
    heroImage:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1800&auto=format&fit=crop",
    hero: true,
    products: [
      { name: "Mujigae Topokki", variant: "Original", size: "170g" },
      { name: "Mujigae Topokki", variant: "Spicy", size: "195g" },
      { name: "Mujigae Topokki", variant: "with Fish Cake", size: "180g" },
      { name: "Mujigae Jajangmyeon", variant: "Korean Black Bean", size: "265g" },
      { name: "Mujigae Rapokki", variant: "Spicy", size: "260g" },
      { name: "Mujigae Ramyun", variant: "Butter Corn", size: "120g" },
      { name: "Mujigae Ramyun", variant: "Cheese", size: "120g" },
      { name: "Mujigae Ramyun", variant: "Fried Rose", size: "120g" },
      { name: "Mujigae Oden", variant: "Fish Cake Broth", size: "65g" },
      { name: "Wonhae Banana Milk Bites", variant: "Original", size: "60g" },
      { name: "Wonhae Banana Milk Bites", variant: "Chocolate", size: "60g" },
      { name: "Wonhae Banana Milk", variant: "Watermelon", size: "250mL" },
      { name: "Wonhae Nori", variant: "Crispy Snack", size: "Seaweed" },
      { name: "Wonhae Potato", variant: "Spicy Korean", size: "Snack" },
    ],
    reasons: [
      { icon: "🇰🇷", title: "Rasa otentik Korea", body: "Dikembangkan dengan referensi langsung ke street food Korea — bukan sekadar terinspirasi." },
      { icon: "⏱️", title: "Siap dalam 3 menit", body: "Semua produk Mujigae praktis diolah — cocok untuk lapar tengah malam." },
      { icon: "🌶️", title: "Variasi level pedas", body: "Dari mild carbonara sampai spicy rose — ada untuk setiap lidah." },
      { icon: "🛒", title: "Tersedia di mini-market", body: "Hadir di Alfamart, Indomaret, dan e-commerce favoritmu." },
    ],
    features: [
      {
        title: "Topokki di rumah, rasa seperti di Myeongdong",
        body: "Kunyahan empuk dengan saus pedas-manis yang otentik — siap dalam menit.",
        image:
          "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ramyun dengan twist",
        body: "Butter Corn, Cheese, Fried Rose — sentuhan modern untuk mie Korea favoritmu.",
        image:
          "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Snack time, upgraded",
        body: "Banana Milk Bites, Nori Crispy, Potato Spicy — teman ngumpul & scroll.",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "omoide",
    name: "Omoide",
    division: "food",
    tagline: "A bowl of Japanese memories.",
    description:
      "Udon instan yang membawa rasa kenangan Jepang dengan penyajian praktis dan harga terjangkau.",
    accentClass: "bg-brand-omoide",
    accentHex: "#C17817",
    heroImage:
      "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Carbonara Udon", variant: "Creamy Cheese", size: "260g · 150 cal" },
      { name: "Kake Udon", variant: "Classic Broth", size: "215g · 50 cal" },
    ],
    reasons: [
      { icon: "🍜", title: "Tekstur udon asli", body: "Lembut, kenyal, tebal — dibuat dengan standar udon Jepang." },
      { icon: "🧀", title: "Parmesan asli di Carbonara", body: "Bukan perasa — saus dibuat dengan keju Parmesan sungguhan." },
      { icon: "🐟", title: "Kaldu katsuo tradisional", body: "Kake Udon memakai kaldu ikan yang melalui proses smoking ala Jepang." },
    ],
    features: [
      {
        title: "Carbonara Udon",
        body: "Udon lembut dengan saus carbonara kaya dari Parmesan asli. Milky, cheesy, thick.",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Kake Udon",
        body: "Kaldu umami yang halus dari ikan katsuo — sederhana tapi penuh jiwa.",
        image:
          "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "floaty",
    name: "Floaty",
    division: "food",
    tagline: "Literally light. Seriously fun.",
    description:
      "Snack bantal berbahan oat dengan packaging yang sengaja mirip makanan kucing — untuk dipamerkan dan diprank.",
    accentClass: "bg-brand-floaty",
    accentHex: "#00B4D8",
    heroImage:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Floaty", variant: "Original", size: "60g" },
      { name: "Floaty", variant: "Original Mini", size: "16g" },
      { name: "Floaty", variant: "Terserah", size: "60g · Mystery Flavor" },
    ],
    reasons: [
      { icon: "😹", title: "Packaging pemancing tawa", body: "Didesain seperti makanan kucing — jadi konten, jadi bahan prank." },
      { icon: "🌾", title: "Tinggi kandungan oat", body: "Berbahan dasar oat, renyah dan ringan di perut." },
      { icon: "🎁", title: "Varian Terserah", body: "Rasa misteri yang bikin penasaran — cocok buat seru-seruan." },
    ],
    features: [
      {
        title: "Ini MAKANAN KUCING",
        body: "…bohong. Ini snack buat kamu. Packaging jenaka yang jadi bahan obrolan.",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ringan beneran",
        body: "Oat-based pillow snack. Renyah, ringan, dan tinggi kandungan oat.",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "fitmeup",
    name: "Fitmeup",
    division: "food",
    tagline: "Botanical inspiration.",
    description:
      "Platform wellness tentang antioksidan, ilmu botani, dan gaya hidup sehat — karena alam menyajikan semuanya untukmu.",
    accentClass: "bg-brand-fitmeup",
    accentHex: "#588157",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Botanipedia", variant: "Antioxidant Guide", size: "Digital Content" },
      { name: "Home Farming", variant: "Starter Guide", size: "Digital Content" },
      { name: "Botanical Lifestyle", variant: "Weekly Journal", size: "Digital Content" },
      { name: "Plant-Based Recipes", variant: "Recipe Series", size: "Digital Content" },
    ],
    reasons: [
      { icon: "🌱", title: "Edukasi antioksidan", body: "Memahami cara melindungi sel dari radikal bebas lewat tanaman sehari-hari." },
      { icon: "🪴", title: "Home farming guide", body: "Mulai kebun kecilmu sendiri — panduan praktis dari pot ke panen." },
      { icon: "🧘", title: "Gaya hidup botani", body: "Konten lifestyle yang menghubungkan wellness dengan alam." },
    ],
    features: [
      {
        title: "Botanipedia",
        body: "Kenali manfaat tersembunyi dari tanaman di sekitarmu.",
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Home Farming",
        body: "Panduan menanam di rumah — kebun kecil untuk hidup lebih sehat.",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
];

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
export const heroBrands = () => BRANDS.filter((b) => b.hero);
// Top-level brands of a division (sub-brands are excluded — reach them via childrenOf).
export const brandsByDivision = (id: DivisionId) =>
  BRANDS.filter((b) => b.division === id && !b.parent);
// Sub-brands that belong to a given parent brand.
export const childrenOf = (slug: string) =>
  BRANDS.filter((b) => b.parent === slug);
