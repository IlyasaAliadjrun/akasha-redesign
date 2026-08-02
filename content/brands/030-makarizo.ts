import type { Brand } from "@/lib/brands";

  /* ───────────────── Beauty & Personal Care ───────────────── */

  // 1 — Makarizo (umbrella brand)
const entry: Brand = {
    slug: "makarizo",
    name: "Makarizo",
    division: "beauty",
    flagship: "hair-energy",
    tagline: { en: "Indonesia's hair experts.", id: "Ahli rambut Indonesia." },
    description: {
      en: "Home to Makarizo's hair and body care lineup — from Asters and Advisor to Hair Energy, t1, and 128.",
      id: "Rumah bagi rangkaian perawatan rambut & tubuh Makarizo — dari Asters dan Advisor hingga Hair Energy, t1, dan 128.",
    },
    accentClass: "bg-brand-makarizo",
    accentHex: "#D4447C",
    heroImage: "/home/hero-carousel/hair-energy.jpg",
    hero: false,
    reasons: [
      { icon: "💇", title: { en: "Over 40 years of hair expertise", id: "Lebih dari 40 tahun keahlian rambut" }, body: { en: "Hair care innovation that has grown alongside Indonesian women.", id: "Inovasi perawatan rambut yang tumbuh bersama wanita Indonesia." } },
      { icon: "🧴", title: { en: "One home, many lines", id: "Satu rumah, banyak rangkaian" }, body: { en: "From daily care to fragrance — every hair need under one brand.", id: "Dari daily care hingga fragrance — semua kebutuhan rambut dalam satu brand." } },
      { icon: "❤️", title: { en: "Trusted across generations", id: "Dipercaya lintas generasi" }, body: { en: "From professional salons to at-home routines.", id: "Dari salon profesional hingga rutinitas di rumah." } },
    ],
  };

export default entry;
