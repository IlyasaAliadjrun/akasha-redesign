export type DivisionId =
  | "beverage"
  | "beauty"
  | "professional"
  | "food";

export type Brand = {
  slug: string;
  name: string;
  division: DivisionId;
  tagline: string;
  description: string;
  accentClass: string; // tailwind bg class
  accentHex: string;
  heroImage: string;
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
    brandCount: 2,
    accentHex: "#C9956B",
    image: "/one_company_many_moments/BU Banner MKZ HE.png",
  },
  {
    id: "professional",
    name: "Professional Salon",
    tagline: "43 years of hair mastery",
    brandCount: 1,
    accentHex: "#1A1A1A",
    image: "/one_company_many_moments/BU Banner MKZ PROF.png",
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
      { name: "Pure Life", variant: "330 mL", size: "24 pack / dus" },
      { name: "Pure Life", variant: "600 mL", size: "24 pack / dus" },
      { name: "Pure Life", variant: "1500 mL", size: "12 pack / dus" },
      { name: "Pure Life", variant: "Galon", size: "15 L" },
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
  {
    slug: "hair-energy",
    name: "Hair Energy",
    division: "beauty",
    tagline: "Salon-quality care, at home.",
    description:
      "Perawatan rambut lengkap dari Makarizo Hair Energy — untuk rambut rontok, kering, hingga berminyak.",
    accentClass: "bg-brand-he",
    accentHex: "#D4447C",
    heroImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1800&auto=format&fit=crop",
    hero: true,
    products: [
      { name: "Scentsations", variant: "Cherry Blossom", size: "Hair & Body Fragrance · 100 mL" },
      { name: "Scentsations", variant: "White Musk", size: "Hair & Body Fragrance · 100 mL" },
      { name: "Scentsations", variant: "Fresh Bouquet", size: "Hair & Body Fragrance · 100 mL" },
      { name: "Fibertherapy", variant: "Royal Jelly", size: "Creambath · 500 mL" },
      { name: "Fibertherapy", variant: "Kiwi", size: "Creambath · 500 mL" },
      { name: "Fibertherapy", variant: "Olive", size: "Creambath · 500 mL" },
      { name: "#EasyStraight", variant: "Strong", size: "Hair Straightening · 120 mL" },
      { name: "Vitaglitz", variant: "Hair Serum", size: "Revitalizing Care · 8 mL" },
    ],
    reasons: [
      { icon: "🌸", title: "Wangi tahan seharian", body: "Formula fragrance yang menempel lembut di rambut dan tubuh." },
      { icon: "🧴", title: "Nutrisi salon di rumah", body: "Creambath dengan Royal Jelly, Kiwi, dan Olive — senutrisi perawatan profesional." },
      { icon: "💆", title: "Untuk setiap kondisi rambut", body: "Rontok, kering, berminyak, atau rusak — ada varian yang tepat untukmu." },
      { icon: "💖", title: "Dicintai Gen-Z Indonesia", body: "Rutinitas #EasyToKnow yang jadi favorit self-care di TikTok." },
    ],
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
  {
    slug: "barber-daily",
    name: "Barber Daily",
    division: "beauty",
    tagline: "Barbershop-quality grooming, every day.",
    description:
      "Grooming essentials untuk pria modern — pomade, beard care, dan rutinitas pasca-cukur ala barbershop di rumah.",
    accentClass: "bg-brand-bd",
    accentHex: "#5B6B7F",
    heroImage: "/main_banner/main banner BD.jpg",
    hero: false,
  },
  {
    slug: "makarizo-professional",
    name: "Makarizo Professional",
    division: "professional",
    tagline: "43 tahun besar bersama salon Indonesia.",
    description:
      "Brand salon profesional terdepan di Indonesia. Edukasi, komunitas, dan produk untuk para ahli rambut.",
    accentClass: "bg-brand-makpro",
    accentHex: "#2C2C2C",
    heroImage:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1800&auto=format&fit=crop",
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
export const brandsByDivision = (id: DivisionId) =>
  BRANDS.filter((b) => b.division === id);
