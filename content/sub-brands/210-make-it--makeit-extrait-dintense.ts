import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "makeit-extrait-dintense",
  parent: "make-it",
  name: "Extrait d’Intense Parfum",
  tagline: {
    en: "Perfume with a 50% fragrance concentration.",
    id: "Parfum dengan konsentrasi fragrance oil 50%.",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#7D2628",
  bannerBg: "#7D2628",
  theme: "light",
  heroWordmark: "/media/brands/make-it/lines/makeit-extrait-dintense/hero/wordmark.png",
  heroWordmarkAspect: "1121 / 334",
  heroWordmarkMobileWidth: "35vw",
  heroLayers: [
    {
      src: "/media/brands/make-it/lines/makeit-extrait-dintense/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 52,
      width: "min(45vw, 75vh)",
      aspectRatio: "3779 / 5181",
      left: "55%",
      top: "-5%",
      mobile: { left: "-8.5%", top: "-42%", width: "110%" },
    },
  ],
  showcaseTitle: { en: "/media/brands/make-it/lines/makeit-extrait-dintense/showcase/title.en.png", id: "/media/brands/make-it/lines/makeit-extrait-dintense/showcase/title.id.png" },
  showcaseTitleAspect: "4803 / 5026",
  showcaseTitleSize: "wide",
  showcaseTitleMobileOffsetX: "-25px",
  cards: [],
};

export default entry;
