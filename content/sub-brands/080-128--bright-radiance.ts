import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "bright-radiance",
  parent: "128",
  name: "Bright & Radiance",
  tagline: {
    en: "Helps brighten and even out skin tone for a healthy glow",
    id: "Membantu mencerahkan kulit secara merata dan glowing",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#FBA084",
  bannerBg: "#FBA084",
  theme: "light",
  heroWordmark: "/brand/128/bright-radiance/hero/wordmark.png",
  heroWordmarkAspect: "2160 / 1415",
  heroWordmarkWidth: "13vw",
  heroWordmarkMobileWidth: "23vw",
  heroLayers: [
    {
      src: "/brand/128/bright-radiance/hero/cluster.png",
      enterFrom: "right",
      enterDelay: 0.3,
      depth: 30,
      width: "min(100vw, 121vh)",
      aspectRatio: "3493 / 2130",
      left: "47%",
      top: "15%",
      mobile: { left: "-24%", top: "-3%", width: "147%" },
    },
  ],
  showcaseTitle: "/brand/128/bright-radiance/showcase/title.png",
  showcaseTitleAspect: "4742 / 3703",
  showcaseTitleOffsetY: "51px",
  showcaseTitleOffsetX: "-8px",
  showcaseTitleMobileOffsetY: "21px",
  showcaseTitleMobileOffsetX: "-16px",
  // showcaseSpacing: "tight",
  cardAspect: "2302 / 2986",
  cards: [
    {
      image: "/brand/128/bright-radiance/showcase/1.png",
      label: { en: "Facial Wash Bright & Radiance", id: "Facial Wash Bright & Radiance" },
    },
    {
      image: "/brand/128/bright-radiance/showcase/2.png",
      label: { en: "Toner Bright & Radiance", id: "Toner Bright & Radiance" },
    },
    {
      image: "/brand/128/bright-radiance/showcase/3.png",
      label: { en: "Serum Bright & Radiance", id: "Serum Bright & Radiance" },
    },
    {
      image: "/brand/128/bright-radiance/showcase/4.png",
      label: { en: "Moisturizer Bright & Radiance", id: "Moisturizer Bright & Radiance" },
    },
  ],
};

export default entry;
