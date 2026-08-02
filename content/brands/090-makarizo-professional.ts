import type { Brand } from "@/lib/brands";

  // 2 — Makarizo Professional
const entry: Brand = {
    slug: "makarizo-professional",
    name: "Makarizo Professional",
    division: "beauty",
    flagship: "salon-daily",
    tagline: { en: "43 years growing together with Indonesian salons.", id: "43 tahun besar bersama salon Indonesia." },
    description: {
      en: "Indonesia's leading professional salon brand. Education, community, and products for hair professionals.",
      id: "Brand salon profesional terdepan di Indonesia. Edukasi, komunitas, dan produk untuk para ahli rambut.",
    },
    accentClass: "bg-brand-makpro",
    accentHex: "#2C2C2C",
    heroImage: "/home/hero-carousel/makarizo-professional.jpg",
    hero: true,
    products: [
      { name: "Concept Ultimax SF3", variant: { en: "Coloring System", id: "Sistem Pewarnaan" }, size: { en: "Professional Use", id: "Untuk Penggunaan Profesional" } },
      { name: "Rebonding System", variant: { en: "Texturing", id: "Texturing" }, size: { en: "Professional Use", id: "Untuk Penggunaan Profesional" } },
      { name: "Hydroprisma", variant: { en: "Texturing", id: "Texturing" }, size: { en: "Professional Use", id: "Untuk Penggunaan Profesional" } },
      { name: "Texture Experience", variant: { en: "Treatment", id: "Perawatan" }, size: { en: "Salon Treatment", id: "Perawatan Salon" } },
      { name: "Honey Dew Nutriv Serum", variant: { en: "Treatment", id: "Perawatan" }, size: { en: "Salon Care", id: "Perawatan di Salon" } },
      { name: "Salon Daily", variant: { en: "Hair Mask", id: "Masker Rambut" }, size: { en: "Home Care", id: "Perawatan di Rumah" } },
      { name: "Salon Daily", variant: { en: "Styling", id: "Penataan" }, size: { en: "Home Care", id: "Perawatan di Rumah" } },
      { name: "Salon Daily", variant: { en: "Hair Care", id: "Perawatan Rambut" }, size: { en: "Home Care", id: "Perawatan di Rumah" } },
    ],
    reasons: [
      { icon: "🏆", title: { en: "43 years of expertise", id: "43 tahun keahlian" }, body: { en: "Indonesia's longest-running professional salon brand — trusted across generations.", id: "Brand salon profesional paling lama di Indonesia — dipercaya lintas generasi." } },
      { icon: "🎓", title: { en: "Backed by FAME Academy", id: "Didukung FAME Academy" }, body: { en: "Continuous education for hairdressers ensures consistently premium results.", id: "Edukasi berkelanjutan untuk hairdresser memastikan hasil selalu premium." } },
      { icon: "🎨", title: { en: "Precision coloring system", id: "Sistem pewarnaan presisi" }, body: { en: "Concept Ultimax SF3 — accurate, consistent, and long-lasting color.", id: "Concept Ultimax SF3 — warna akurat, konsisten, dan tahan lama." } },
      { icon: "🤝", title: { en: "Makarizo Circle community", id: "Komunitas Makarizo Circle" }, body: { en: "360° salon business support: products, education, and a professional network.", id: "360° salon business support: produk, edukasi, dan jaringan profesional." } },
    ],
    features: [
      {
        title: { en: "Precision coloring", id: "Coloring yang presisi" },
        body: { en: "Concept Ultimax SF3 — the hair coloring system professionals rely on.", id: "Concept Ultimax SF3 — sistem pewarnaan rambut yang diandalkan profesional." },
        image:
          "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "Texture Experience", id: "Texture Experience" },
        body: { en: "A treatment that transforms hair texture with salon softness and shine.", id: "Treatment yang mengubah tekstur rambut dengan kelembutan dan kilau salon." },
        image:
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "FAME Academy", id: "FAME Academy" },
        body: { en: "Continuous education for hairdressers — because knowledge is the best product.", id: "Edukasi berkelanjutan untuk hairdresser — karena ilmu adalah produk terbaik." },
        image:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
