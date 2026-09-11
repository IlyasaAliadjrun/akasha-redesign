import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "acne-pro",
  parent: "128",
  name: "Acne Pro",
  tagline: {
    en: "Helps fight acne-causing bacteria while soothing inflammation",
    id: "Membantu melawan bakteri penyebab jerawat sekaligus menenangkan peradangan",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#AABD7A",
  bannerBg: "#AABD7A",
  theme: "light",
  heroWordmark: "/brand/128/acne-pro/hero/wordmark.png",
  heroWordmarkAspect: "2160 / 1415",
  heroWordmarkWidth: "13vw",
  heroWordmarkMobileWidth: "23vw",
  heroLayers: [
    {
      src: "/brand/128/acne-pro/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 36,
      width: "min(25vw, 68vh)",
      aspectRatio: "2377 / 3502",
      left: "62%",
      top: "16%",
      mobile: { left: "18%", top: "-2%", width: "68%" },
    },
  ],
  showcaseTitle: "/brand/128/acne-pro/showcase/title.png",
  showcaseTitleAspect: "4865 / 3703",
  showcaseTitleMobileOffsetY: "-5px",
  showcaseWidth: "default",
  showcaseVariants: [
    { bg: "/brand/128/acne-pro/showcase/1.png", bgAspect: "4687 / 2233" },
    { bg: "/brand/128/acne-pro/showcase/2.png", bgAspect: "4687 / 2234" },
  ],
  showcaseBannerAspect: "4687 / 2234",
  showcaseParallax: false,
  cards: [],
};

export default entry;
