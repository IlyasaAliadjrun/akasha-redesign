import type { SubBrand } from "@/lib/subBrands";

  // ── T1 → Rosemary Oil ─────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "rosemary-oil",
    parent: "t1",
    name: "Rosemary Oil",
    tagline: { en: "Anti hair-fall, thickens, and smooths\nhair instantly.", id: "Anti-rontok, lebatkan, dan haluskan\nrambut secara instan." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#683B27", // Rosemary Oil brown, sampled from the line's banner art
    bannerBg: "#683B27",
    heroWordmark: "/brand/t1/rosemary-oil/hero/wordmark.png",
    heroWordmarkAspect: "1424 / 556",
    // One composed cluster (protein cream + scalp & hair oil). This canvas is by far
    // the emptiest of the four — the pair fills 55% × 52% and sits 41% down — so the
    // layer box is roughly twice the visible cluster and `top` goes negative to pull
    // that dead space back off the top of the banner.
    heroLayers: [
      { src: "/brand/t1/rosemary-oil/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(34vw, 54vh)", aspectRatio: "3118 / 5494", left: "50%", top: "-13%",
        mobile: { left: "15%", top: "-37%", width: "78%" } },
    ],
    showcaseTitle: "/brand/t1/rosemary-oil/showcase/title.png",
    showcaseTitleAspect: "4428 / 4061",
    cardAspect: "2302 / 2987",
    cards: [
      { image: "/brand/t1/rosemary-oil/showcase/1.png", label: { en: "Scalp & Hair Oil with Rosemary Oil", id: "Scalp & Hair Oil dengan Rosemary Oil" } },
      { image: "/brand/t1/rosemary-oil/showcase/2.png", label: { en: "Protein Cream with Rosemary Oil", id: "Protein Cream dengan Rosemary Oil" } },
    ],
  };

export default entry;
