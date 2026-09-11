import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "makeit-extrait-de-parfum",
  parent: "make-it",
  name: "Extrait de Parfum",
  tagline: {
    en: "Perfume with a 30% fragrance concentration.",
    id: "Parfum dengan konsentrasi fragrance 30%.",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#7D2628",
  bannerBg: "#7D2628",
  theme: "light",
  heroWordmark: "/brand/makeit/makeit-extrait-de-parfum/hero/wordmark.png",
  heroWordmarkAspect: "1121 / 334",
  heroWordmarkMobileWidth: "35vw",
  heroLayers: [
    {
      src: "/brand/makeit/makeit-extrait-de-parfum/hero/1.png",
      enterFrom: "left",
      enterDelay: 0.15,
      depth: 42,
      width: "min(38vw, 65vh)",
      aspectRatio: "3013 / 4330",
      left: "52%",
      top: "-4%",
      mobile: { left: "-12%", top: "-42%", width: "90%" },
    },
    {
      src: "/brand/makeit/makeit-extrait-de-parfum/hero/2.png",
      enterFrom: "right",
      enterDelay: 0.3,
      depth: 58,
      width: "min(44vw, 68vh)",
      aspectRatio: "3242 / 4411",
      left: "63%",
      top: "10%",
      mobile: { right: "-9%", top: "-10%", width: "90%" },
    },
  ],
  showcaseTitle: "/brand/makeit/makeit-extrait-de-parfum/showcase/title.png",
  showcaseTitleAspect: "4867 / 4912",
  showcaseTitleMobileOffsetX: "-15px",
  // showcaseSpacing: "flush",
  featured: {
    image: "/brand/makeit/makeit-extrait-de-parfum/showcase/3.png",
    label: { en: "Bold Venture", id: "Bold Venture" },
  },
  featuredAspect: "4687 / 2956",
  featuredPosition: "middle",
  cardAspect: "2302 / 2986",
  cards: [
    {
      image: "/brand/makeit/makeit-extrait-de-parfum/showcase/1.png",
      label: { en: "Dream Chaser", id: "Dream Chaser" },
    },
    {
      image: "/brand/makeit/makeit-extrait-de-parfum/showcase/2.png",
      label: { en: "Social Butterfly", id: "Social Butterfly" },
    },
    {
      image: "/brand/makeit/makeit-extrait-de-parfum/showcase/4.png",
      label: { en: "Keep in Touch", id: "Keep in Touch" },
    },
    {
      image: "/brand/makeit/makeit-extrait-de-parfum/showcase/5.png",
      label: { en: "Weekday Hustle", id: "Weekday Hustle" },
    },
  ],
};

export default entry;
