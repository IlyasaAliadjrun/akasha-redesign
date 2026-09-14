import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "intensive-barrier-care",
  parent: "128",
  name: "Intensive Barrier Care",
  tagline: {
    en: "Helps Soothes and repairs damaged skin barriers",
    id: "Membantu merawat kulit dengan skin barrier yang sedang terganggu",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#CFA985",
  bannerBg: "#CFA985",
  theme: "light",
  heroWordmark: "/brand/128/intensive-barrier-care/hero/wordmark.png",
  heroWordmarkAspect: "2160 / 1415",
  heroWordmarkWidth: "13vw",
  heroWordmarkMobileWidth: "23vw",
  heroLayers: [
    {
      src: "/brand/128/intensive-barrier-care/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 38,
      width: "min(26.5vw, 60.5vh)",
      aspectRatio: "2784 / 4313",
      left: "61%",
      top: "8%",
      mobile: { left: "15%", top: "-16%", width: "74%" },
    },
  ],
  showcaseTitle: "/brand/128/intensive-barrier-care/showcase/title.png",
  showcaseTitleAspect: "4649 / 3703",
  showcaseTitleOffsetY: "52px",
  showcaseTitleMobileOffsetY: "22px",
  // showcaseSpacing: "compact",
  featured: {
    image: "/brand/128/intensive-barrier-care/showcase/1.png",
    label: { en: "Facial Wash Intensive Barrier Care", id: "Facial Wash Intensive Barrier Care" },
  },
  featuredAspect: "4687 / 2233",
  featuredPosition: "top",
  cardAspect: "2302 / 2987",
  cards: [
    {
      image: "/brand/128/intensive-barrier-care/showcase/2.png",
      label: { en: "Primer Intensive Barrier Care", id: "Primer Intensive Barrier Care" },
    },
    {
      image: "/brand/128/intensive-barrier-care/showcase/3.png",
      label: { en: "Boost Intensive Barrier Care", id: "Boost Intensive Barrier Care" },
    },
  ],
};

export default entry;
