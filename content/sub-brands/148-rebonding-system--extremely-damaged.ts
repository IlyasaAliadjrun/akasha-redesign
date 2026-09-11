import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "extremely-damaged",
  parent: "rebonding-system",
  name: "Extremely Damaged",
  tagline: {
    en: "Smooths damaged and fragile wavy hair.",
    id: "Meluruskan rambut gelombang rusak dan sensitif.",
  },
  ctaText: {
    en: "Learn more",
    id: "Pelajari lebih lanjut",
  },
  accentHex: "#54565A",
  bannerBg: "#F2EFE9",
  theme: "dark",
  heroWordmark:
    "/brand/rebonding-system/extremely-damaged/hero/wordmark.png",
  heroWordmarkAspect: "1123 / 283",
  heroWordmarkWidth: "min(21vw, 520px)",
  heroWordmarkMobileWidth: "48vw",
  heroLayers: [
    {
      src: "/brand/rebonding-system/extremely-damaged/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(30vw, 52vh, 960px)",
      aspectRatio: "1921 / 1839",
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
    "/brand/rebonding-system/extremely-damaged/showcase/title.png",
  showcaseTitleAspect: "5177 / 3039",
  showcaseTitleSize: "wide",
  showcaseWidth: "wide",
  cards: [],
};

export default entry;
