import type { SubBrand } from "@/lib/subBrands";

  // ── T1 → Micellar ─────────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "micellar",
    parent: "t1",
    name: "Micellar",
    tagline: { en: `Cares for sensitive scalp\nand oily hair.`, id: `Merawat kulit kepala sensitif\ndan rambut berminyak.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // SubBrandHero renders its wording in white only, so the banner takes the DEEP
    // olive off the Micellar bottle label rather than the pale pistachio of the card
    // art (white on that pale green is unreadable). Same treatment as MK3 / Honey Dew.
    accentHex: "#5C3427",
    bannerBg: "#B0B783",
    theme: "accent-light",
    heroWordmark: "/brand/t1/micellar/hero/wordmark.png",
    heroWordmarkAspect: "1424 / 556",
    // The folder ships ONE composed cluster (shampoo + conditioner), so the hero is a
    // single layer. The PNG is mostly transparent padding — the bottles fill 54% × 71%
    // of the canvas, offset 20% from the top — so the layer box is much larger than
    // the cluster looks, and `top` compensates for that offset.
    // `mobile` values are % of the SubBrandHero mobile cluster box.
    heroLayers: [
      { src: "/brand/t1/micellar/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(58vw, 70vh)", aspectRatio: "3493 / 4751", left: "57%", top: "0%",
        mobile: { left: "-5%", top: "-43%", width: "110%" } },
    ],
    showcaseTitle: "/brand/t1/micellar/showcase/title.png",
    showcaseTitleAspect: "3992 / 3243",
    cardAspect: "2302 / 2987",
    showcaseTitleOffsetY: "32px",
    cards: [
      { image: "/brand/t1/micellar/showcase/1.png", label: { en: "Micellar Shampoo — for sensitive & oily scalp", id: "Micellar Shampoo — kulit kepala sensitif & berminyak" } },
      { image: "/brand/t1/micellar/showcase/2.png", label: { en: "Micellar Conditioner — for sensitive & oily hair", id: "Micellar Conditioner — rambut sensitif & berminyak" } },
    ],
  };

export default entry;
