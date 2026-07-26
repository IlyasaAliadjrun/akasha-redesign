import type { Brand } from "@/lib/brands";

  // 2 — Makarizo Professional
const entry: Brand = {
    slug: "makarizo-professional",
    name: "Makarizo Professional",
    division: "beauty",
    flagship: "salon-daily",
    tagline: "43 tahun besar bersama salon Indonesia.",
    description:
      "Brand salon profesional terdepan di Indonesia. Edukasi, komunitas, dan produk untuk para ahli rambut.",
    accentClass: "bg-brand-makpro",
    accentHex: "#2C2C2C",
    heroImage: "/home/hero-carousel/makarizo-professional.jpg",
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
  };

export default entry;
