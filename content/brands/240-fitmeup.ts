import type { Brand } from "@/lib/brands";

const entry: Brand = {
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
  };

export default entry;
