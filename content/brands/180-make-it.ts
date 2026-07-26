import type { Brand } from "@/lib/brands";

  // 5 — Make It
const entry: Brand = {
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
  };

export default entry;
