import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "gold-edition",
  parent: "rebonding-system",
  name: "Gold Edition",
  tagline: {
    en: "Smooths curly and wavy hair.",
    id: "Meluruskan rambut ikal/keriting.",
  },
  ctaText: {
    en: "Learn more",
    id: "Pelajari lebih lanjut",
  },
  accentHex: "#54565A",
  bannerBg: "#F2EFE9",
  theme: "dark",
  heroWordmark:
    "/media/brands/rebonding-system/lines/gold-edition/hero/wordmark.png",
  heroWordmarkAspect: "1123 / 283",
  heroWordmarkWidth: "min(21vw, 520px)",
  heroWordmarkMobileWidth: "48vw",
  heroLayers: [
    {
      src: "/media/brands/rebonding-system/lines/gold-edition/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(30vw, 52vh, 960px)",
      aspectRatio: "1921 / 1840",
      left: "59%",
      top: "27%",
      mobile: {
        left: "16%",
        top: "4%",
        width: "68%",
      },
    },
  ],
  showcaseTitle:
    { en: "/media/brands/rebonding-system/lines/gold-edition/showcase/title.en.png", id: "/media/brands/rebonding-system/lines/gold-edition/showcase/title.id.png" },
  showcaseTitleAspect: "5101 / 3029",
  showcaseTitleSize: "wide",
  showcaseWidth: "wide",
  cards: [],
};

export default entry;
