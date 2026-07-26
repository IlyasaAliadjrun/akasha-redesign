import type { Brand } from "@/lib/brands";

  // 3 — Inoskin
const entry: Brand = {
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
  };

export default entry;
