import type { Brand } from "@/lib/brands";

  // 6 — Finest
const entry: Brand = {
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
  };

export default entry;
