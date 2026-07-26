import type { Brand } from "@/lib/brands";

  // 4 — LOU
const entry: Brand = {
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
  };

export default entry;
