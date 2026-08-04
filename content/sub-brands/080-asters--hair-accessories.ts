import type { SubBrand } from "@/lib/subBrands";

  // ── Asters → Hair Accessories ─────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-accessories",
    parent: "asters",
    name: "Hair Accessories",
    tagline: { en: `Elegant hair styling tools, to hold\nand perfect your hairstyle.`, id: `Penata rambut elegan, untuk menjaga\ndan menyempurnakan bentuk rambut.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#A67E6C",
    bannerBg: "#6E4E40",
    heroWordmark: "/brand/asters/hero/wordmark.png",
    heroWordmarkAspect: "1513 / 740",
    heroLayers: [
      { src: "/brand/asters/hair-accessories/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 44, width: "min(30vw, 32vh, 350px)", aspectRatio: "1844 / 2746", left: "58%", top: "12%",
        mobile: { left: "16%", top: "2%", width: "68%" } },
    ],
    showcaseTitle: "/brand/asters/hair-accessories/showcase/title.png",
    showcaseTitleAspect: "3556 / 2960",
    // Card 1 is authored a touch taller than the other two; `object-contain` keeps
    // every card at its own ratio inside this box rather than stretching them.
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/asters/hair-accessories/showcase/1.png", label: { en: "Asters Paddle Detangler Brush", id: "Asters Paddle Detangler Brush" } },
      { image: "/brand/asters/hair-accessories/showcase/2.png", label: { en: "Asters Volumizing Bangs Clip", id: "Asters Volumizing Bangs Clip" } },
      { image: "/brand/asters/hair-accessories/showcase/3.png", label: { en: "Asters Scalp Therapy Massager", id: "Asters Scalp Therapy Massager" } },
    ],
  };

export default entry;
