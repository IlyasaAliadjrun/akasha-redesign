import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "advanced-age-repair",
  parent: "128",
  name: "Advanced Age Repair",
  tagline: {
    en: "Keeps skin hydrated, plump, smooths skin texture",
    id: "Membantu menjaga kulit tetap lembap, kenyal, dan tampak lebih halus",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#826D99",
  bannerBg: "#826D99",
  theme: "light",
  heroWordmark: "/brand/128/advanced-age-repair/hero/wordmark.png",
  heroWordmarkAspect: "2160 / 1415",
  heroWordmarkWidth: "13vw",
  heroWordmarkMobileWidth: "23vw",
  heroLayers: [
    {
      src: "/brand/128/advanced-age-repair/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 36,
      width: "min(25vw, 63vh)",
      aspectRatio: "2317 / 3552",
      left: "62%",
      top: "12%",
      mobile: { left: "14%", top: "-10%", width: "68%" },
    },
  ],
  showcaseTitle: "/brand/128/advanced-age-repair/showcase/title.png",
  showcaseTitleAspect: "4648 / 3703",
  showcaseTitleSize: "wide",
  // showcaseSpacing: "compact",
  cards: [],
};

export default entry;
