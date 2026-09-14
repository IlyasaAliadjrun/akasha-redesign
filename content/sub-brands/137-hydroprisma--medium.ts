import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "medium",
  parent: "hydroprisma",
  name: "Medium Permanent Styling",
  tagline: {
    en: "For Natural Waves & Normal Curls.",
    id: "Untuk Rambut Berwarna, Diproses Kimia dan Rusak.",
  },
  ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
  accentHex: "#5F2168",
  bannerBg: "#EAE6EF",
  theme: "accent-light",
  heroContent: {
      ctaBorderColor: "#5F2168",
      ctaTextColor: "#5F2168",
      ctaHoverBorderColor: "#5F2168",
      ctaHoverBackgroundColor: "#5F2168",
      ctaHoverTextColor: "#FFFFFF",
  },
  heroWordmark: "/brand/hydroprisma/medium/hero/wordmark.png",
  heroWordmarkAspect: "1548 / 321",
  heroWordmarkWidth: "30vw",
  heroWordmarkMobileWidth: "58vw",
  heroLayers: [
    {
      src: "/brand/hydroprisma/medium/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(50vw, 72vh)",
      aspectRatio: "3541 / 4225",
      left: "52%",
      top: "12%",
      mobile: { left: "-1%", top: "-15%", width: "95%" },
    },
  ],
  showcaseTitle: "/brand/hydroprisma/medium/showcase/title.png",
  showcaseTitleAspect: "4335 / 3749",
  featured: {
    image: "/brand/hydroprisma/medium/showcase/3.png",
    label: { en: "Milky Neutralizer", id: "Milky Neutralizer" },
  },
  featuredAspect: "4687 / 3494",
  featuredPosition: "bottom",
  cardAspect: "2302 / 2986",
  cards: [
    {
      image: "/brand/hydroprisma/medium/showcase/1.png",
      label: { en: "Straightening Cream Pouch", id: "Straightening Cream Pouch" },
    },
    {
      image: "/brand/hydroprisma/medium/showcase/2.png",
      label: { en: "Straightening Cream Pot", id: "Straightening Cream Pot" },
    },
  ],
};

export default entry;
