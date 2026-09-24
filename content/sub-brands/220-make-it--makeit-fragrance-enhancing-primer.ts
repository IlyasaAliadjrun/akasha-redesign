import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "makeit-fragrance-enhancing-primer",
  parent: "make-it",
  name: "Fragrance Enhancing Primer",
  tagline: {
    en: "#1 primer fragrance in Indonesia. Lock and last longer in your scent.",
    id: "Membantu parfum bertahan lebih lama",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#7D2628",
  bannerBg: "#7D2628",
  theme: "light",
  heroWordmark: "/media/brands/make-it/lines/makeit-fragrance-enhancing-primer/hero/wordmark.png",
  heroWordmarkAspect: "1121 / 334",
  heroWordmarkMobileWidth: "35vw",
  heroLayers: [
    {
      src: "/media/brands/make-it/lines/makeit-fragrance-enhancing-primer/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 52,
      width: "min(60vw, 88vh)",
      aspectRatio: "4396 / 5360",
      left: "55%",
      top: "-1%",
      mobile: { left: "-8.5%", top: "-35%", width: "125%" },
    },
  ],
  showcaseTitle: { en: "/media/brands/make-it/lines/makeit-fragrance-enhancing-primer/showcase/title.en.png", id: "/media/brands/make-it/lines/makeit-fragrance-enhancing-primer/showcase/title.id.png" },
  showcaseTitleAspect: "4744 / 5026",
  showcaseTitleSize: "wide",
  showcaseTitleMobileOffsetX: "-25px",
  cards: [],
};

export default entry;
