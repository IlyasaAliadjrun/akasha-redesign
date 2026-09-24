import type { SubBrand } from "@/lib/subBrands";

  // ── Asters → Hair Accessories ─────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-accessories",
    parent: "asters",
    name: "Hair Accessories",
    tagline: { en: `Elegant hair styling tools, to hold\nand perfect your hairstyle.`, id: `Penata rambut elegan, untuk menjaga\ndan menyempurnakan bentuk rambut.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#000000",
    bannerBg: "#FFFFFF",
    theme: "accent-light",
    heroWordmark: "/media/brands/asters/hero/wordmark.png",
    heroWordmarkAspect: "1513 / 740",
    heroLayers: [
      { src: "/media/brands/asters/lines/hair-accessories/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 44, width: "25.5vw", aspectRatio: "1844 / 2746", left: "63%", top: "14%",
        mobile: { left: "13.5%", top: "-11%", width: "75%" } },
    ],
    showcaseTitle: { en: "/media/brands/asters/lines/hair-accessories/showcase/title.en.png", id: "/media/brands/asters/lines/hair-accessories/showcase/title.id.png" },
    showcaseTitleAspect: "3556 / 2960",
    showcaseTitleOffsetY: "52px",
    showcaseTitleMobileOffsetY: "22px",
    showcaseTitleMobileOffsetX: "-9px",
    // Card 1 is authored a touch taller than the other two; `object-contain` keeps
    // every card at its own ratio inside this box rather than stretching them.
    cardAspect: "2302 / 2986",
    cards: [
      { image: { en: "/media/brands/asters/lines/hair-accessories/showcase/1.en.png", id: "/media/brands/asters/lines/hair-accessories/showcase/1.id.png" }, label: { en: "Asters Paddle Detangler Brush", id: "Asters Paddle Detangler Brush" } },
      { image: { en: "/media/brands/asters/lines/hair-accessories/showcase/2.en.png", id: "/media/brands/asters/lines/hair-accessories/showcase/2.id.png" }, label: { en: "Asters Volumizing Bangs Clip", id: "Asters Volumizing Bangs Clip" } },
      { image: { en: "/media/brands/asters/lines/hair-accessories/showcase/3.en.png", id: "/media/brands/asters/lines/hair-accessories/showcase/3.id.png" }, label: { en: "Asters Scalp Therapy Massager", id: "Asters Scalp Therapy Massager" } },
      { image: { en: "/media/brands/asters/lines/hair-accessories/showcase/4.en.png", id: "/media/brands/asters/lines/hair-accessories/showcase/4.id.png" }, label: { en: "Asters Skinwave Cleansing & Lift Device", id: "Asters Skinwave Cleansing & Lift Device" } },
      { image: { en: "/media/brands/asters/lines/hair-accessories/showcase/5.en.png", id: "/media/brands/asters/lines/hair-accessories/showcase/5.id.png" }, label: { en: "Asters Flexi Claw", id: "Asters Flexi Claw" } },

    ],
  };

export default entry;
