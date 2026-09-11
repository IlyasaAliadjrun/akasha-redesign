import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "anti-resistant",
  parent: "rebonding-system",
  name: "Anti Resistant",
  tagline: {
    en: "Smooths color-treated curly and wavy hair.",
    id: "Menghaluskan rambut keriting dan bergelombang yang diwarnai.",
  },
  ctaText: {
    en: "Learn more",
    id: "Pelajari lebih lanjut",
  },
  accentHex: "#54565A",
  bannerBg: "#F2EFE9",
  theme: "dark",
  heroWordmark:
    "/brand/rebonding-system/anti-resistant/hero/wordmark.png",
  heroWordmarkAspect: "1123 / 283",
  heroWordmarkWidth: "min(21vw, 520px)",
  heroWordmarkMobileWidth: "48vw",
  heroLayers: [
    {
      src: "/brand/rebonding-system/anti-resistant/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(42vw, 64vh, 1000px)",
      aspectRatio: "2659 / 2632",
      left: "58%",
      top: "22%",
      mobile: {
        left: "7%",
        top: "-2%",
        width: "85%",
      },
    },
  ],
  showcaseTitle:
    "/brand/rebonding-system/anti-resistant/showcase/title.png",
  showcaseTitleAspect: "5159 / 3029",
  showcaseTitleSize: "wide",
  showcaseWidth: "wide",
  cards: [],
};

export default entry;
