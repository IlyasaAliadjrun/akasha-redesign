import type { Brand } from "@/lib/brands";

const entry: Brand = {
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
  };

export default entry;
