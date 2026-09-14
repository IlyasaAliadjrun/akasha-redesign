import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "strong",
  parent: "hydroprisma",
  name: "Strong Permanent Styling",
  tagline: {
    en: "For color-treated, chemically processed and damaged hair.",
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
  heroWordmark: "/brand/hydroprisma/strong/hero/wordmark.png",
  heroWordmarkAspect: "1548 / 321",
  heroWordmarkWidth: "30vw",
  heroWordmarkMobileWidth: "58vw",
  heroLayers: [
    {
      src: "/brand/hydroprisma/strong/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(45vw, 67vh)",
      aspectRatio: "3297 / 3994",
      left: "55%",
      top: "16.5%",
      mobile: { left: "-3%", top: "-10%", width: "91%" },
    },
  ],
  showcaseTitle: "/brand/hydroprisma/strong/showcase/title.png",
  showcaseTitleAspect: "4171 / 3474",
  featured: {
    image: "/brand/hydroprisma/strong/showcase/3.png",
    label: { en: "Milky Neutralizer", id: "Milky Neutralizer" },
  },
  featuredAspect: "4687 / 3494",
  featuredPosition: "bottom",
  cardAspect: "2302 / 2986",
  cards: [
    {
      image: "/brand/hydroprisma/strong/showcase/1.png",
      label: { en: "Straightening Cream Pouch", id: "Straightening Cream Pouch" },
    },
    {
      image: "/brand/hydroprisma/strong/showcase/2.png",
      label: { en: "Straightening Cream Pot", id: "Straightening Cream Pot" },
    },
  ],
};

export default entry;
