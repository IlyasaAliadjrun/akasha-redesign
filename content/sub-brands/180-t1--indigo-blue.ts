import type { SubBrand } from "@/lib/subBrands";

  // ── T1 → Indigo Blue ──────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "indigo-blue",
    parent: "t1",
    name: "Indigo Blue",
    tagline: { en: "Evens out skin tone.", id: "Meratakan warna kulit." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#6786B8", // Indigo Blue, sampled from the line's banner art
    bannerBg: "#6786B8",
    heroWordmark: "/brand/t1/indigo-blue/hero/wordmark.png",
    heroWordmarkAspect: "1424 / 556",
    // One composed cluster (body wash + body mask + body lotion). It is the widest of
    // the four — the trio fills 80% × 61% of the canvas — so the layer is wider and the
    // vertical offset smaller than its siblings'.
    heroLayers: [
      { src: "/brand/t1/indigo-blue/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(38vw, 58vh)", aspectRatio: "3342 / 4716", left: "50%", top: "3%",
        mobile: { left: "0%", top: "-23%", width: "96%" } },
    ],
    showcaseTitle: "/brand/t1/indigo-blue/showcase/title.png",
    showcaseTitleAspect: "4698 / 4224",
    cardAspect: "2302 / 2987",
    cards: [
      { image: "/brand/t1/indigo-blue/showcase/1.png", label: { en: "Indigo Blue Bright Body Wash", id: "Indigo Blue Bright Body Wash" } },
      { image: "/brand/t1/indigo-blue/showcase/2.png", label: { en: "Indigo Blue Bright Body Mask", id: "Indigo Blue Bright Body Mask" } },
      { image: "/brand/t1/indigo-blue/showcase/3.png", label: { en: "Indigo Blue Bright Body Lotion", id: "Indigo Blue Bright Body Lotion" } },
    ],
  };

export default entry;
