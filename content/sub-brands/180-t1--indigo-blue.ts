import type { SubBrand } from "@/lib/subBrands";

  // ── T1 → Indigo Blue ──────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "indigo-blue",
    parent: "t1",
    name: "Indigo Blue",
    tagline: { en: "Color correcting skin tone.", id: "Meratakan warna kulit." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#5C3427", // Indigo Blue, sampled from the line's banner art
    bannerBg: "#B0B783",
    theme: "accent-light",
    heroWordmark: "/media/brands/t1/lines/indigo-blue/hero/wordmark.png",
    heroWordmarkAspect: "1424 / 556",
    // One composed cluster (body wash + body mask + body lotion). It is the widest of
    // the four — the trio fills 80% × 61% of the canvas — so the layer is wider and the
    // vertical offset smaller than its siblings'.
    heroLayers: [
      { src: "/media/brands/t1/lines/indigo-blue/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(59vw, 79vh)", aspectRatio: "3342 / 4716", left: "55%", top: "-12%",
        mobile: { left: "-6%", top: "-48.5%", width: "110%" } },
    ],
    showcaseTitle: { en: "/media/brands/t1/lines/indigo-blue/showcase/title.en.png", id: "/media/brands/t1/lines/indigo-blue/showcase/title.id.png" },
    showcaseTitleAspect: "4698 / 4224",
    showcaseTitleOffsetY: "68px",
    showcaseTitleOffsetX: "-30px",
    showcaseTitleMobileOffsetY: "39px",
    showcaseTitleMobileOffsetX: "-22px",
    cardAspect: "2302 / 2987",
    cards: [
      { image: { en: "/media/brands/t1/lines/indigo-blue/showcase/1.en.png", id: "/media/brands/t1/lines/indigo-blue/showcase/1.id.png" }, label: { en: "Indigo Blue Bright Body Wash", id: "Indigo Blue Bright Body Wash" } },
      { image: { en: "/media/brands/t1/lines/indigo-blue/showcase/2.en.png", id: "/media/brands/t1/lines/indigo-blue/showcase/2.id.png" }, label: { en: "Indigo Blue Bright Body Mask", id: "Indigo Blue Bright Body Mask" } },
      { image: { en: "/media/brands/t1/lines/indigo-blue/showcase/3.en.png", id: "/media/brands/t1/lines/indigo-blue/showcase/3.id.png" }, label: { en: "Indigo Blue Bright Body Lotion", id: "Indigo Blue Bright Body Lotion" } },
    ],
  };

export default entry;
