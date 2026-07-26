import type { Brand } from "@/lib/brands";

  /* ───────────────── Beauty & Personal Care ───────────────── */

  // 1 — Makarizo (umbrella brand)
const entry: Brand = {
    slug: "makarizo",
    name: "Makarizo",
    division: "beauty",
    flagship: "hair-energy",
    tagline: "Ahli rambut Indonesia.",
    description:
      "Rumah bagi rangkaian perawatan rambut & tubuh Makarizo — dari Asters dan Advisor hingga Hair Energy, t1, dan 128.",
    accentClass: "bg-brand-makarizo",
    accentHex: "#D4447C",
    heroImage: "/home/hero-carousel/hair-energy.jpg",
    hero: false,
    reasons: [
      { icon: "💇", title: "Lebih dari 40 tahun keahlian rambut", body: "Inovasi perawatan rambut yang tumbuh bersama wanita Indonesia." },
      { icon: "🧴", title: "Satu rumah, banyak rangkaian", body: "Dari daily care hingga fragrance — semua kebutuhan rambut dalam satu brand." },
      { icon: "❤️", title: "Dipercaya lintas generasi", body: "Dari salon profesional hingga rutinitas di rumah." },
    ],
  };

export default entry;
