import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "super-gold",
  parent: "rebonding-system",
  name: "Super Gold",
  tagline: {
    en: "Smooths thick, coarse,\nand hard-to-manage hair.",
    id: "Menghaluskan rambut kribo yang \ntebal dan sulit diatur.",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#54565A",
  bannerBg: "#F2EFE9",
  theme: "dark",
  heroWordmark: "/brand/rebonding-system/super-gold/hero/wordmark.png",
  heroWordmarkAspect: "1123 / 283",
  heroWordmarkWidth: "min(21vw, 520px)",
  heroWordmarkMobileWidth: "48vw",
  heroLayers: [
    {
      src: "/brand/rebonding-system/super-gold/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(42vw, 64vh, 1200px)",
      aspectRatio: "2482 / 2446",
      left: "58%",
      top: "22%",
      mobile: { left: "7%", top: "-2%", width: "85%" },
    },
  ],
  showcaseTitle: "/brand/rebonding-system/super-gold/showcase/title.png",
  showcaseTitleAspect: "5093 / 3013",
  showcaseTitleSize: "wide",
  showcaseWidth: "wide",
  cards: [],
};

export default entry;
