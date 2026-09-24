import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "mild",
  parent: "hydroprisma",
  name: "Mild Permanent Styling",
  tagline: {
    en: "For Chemically Processed & Damaged Hair.",
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
  heroWordmark: "/media/brands/hydroprisma/lines/mild/hero/wordmark.png",
  heroWordmarkAspect: "1548 / 321",
  heroWordmarkWidth: "30vw",
  heroWordmarkMobileWidth: "58vw",
  heroLayers: [
    {
      src: "/media/brands/hydroprisma/lines/mild/hero/1.png",
      enterFrom: "right",
      enterDelay: 0.25,
      depth: 44,
      width: "min(36vw, 58vh)",
      aspectRatio: "2863 / 3538",
      left: "61%",
      top: "15.5%",
      mobile: { left: "14%", top: "-6%", width: "75%" },
    },
  ],
  showcaseTitle: { en: "/media/brands/hydroprisma/lines/mild/showcase/title.en.png", id: "/media/brands/hydroprisma/lines/mild/showcase/title.id.png" },
  showcaseTitleAspect: "4192 / 3008",
  featured: {
    image: "/media/brands/hydroprisma/lines/mild/showcase/3.png",
    label: { en: "Milky Neutralizer", id: "Milky Neutralizer" },
  },
  featuredAspect: "4687 / 3494",
  featuredPosition: "bottom",
  cardAspect: "2302 / 2986",
  cards: [
    {
      image: "/media/brands/hydroprisma/lines/mild/showcase/1.png",
      label: { en: "Straightening Cream Pouch", id: "Straightening Cream Pouch" },
    },
    {
      image: "/media/brands/hydroprisma/lines/mild/showcase/2.png",
      label: { en: "Straightening Cream Pot", id: "Straightening Cream Pot" },
    },
  ],
};

export default entry;
