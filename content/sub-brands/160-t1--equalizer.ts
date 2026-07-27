import type { SubBrand } from "@/lib/subBrands";

  // ── T1 → Equalizer ────────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "equalizer",
    parent: "t1",
    name: "Equalizer",
    tagline: `Menenangkan kulit kepala sensitif\ndan rambut kering.`,
    ctaText: "Learn more",
    accentHex: "#B15F45", // Equalizer terracotta, sampled from the line's banner art
    bannerBg: "#B15F45",
    heroWordmark: "/brand/t1/equalizer/hero/wordmark.png",
    heroWordmarkAspect: "1424 / 556",
    // One composed cluster (shampoo + conditioner). The bottles fill 54% × 71% of the
    // canvas starting 20% down, so the layer box is much larger than the cluster looks.
    heroLayers: [
      { src: "/brand/t1/equalizer/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(36vw, 58vh)", aspectRatio: "3526 / 4774", left: "50%", top: "6%",
        mobile: { left: "11%", top: "-7%", width: "82%" } },
    ],
    showcaseTitle: "/brand/t1/equalizer/showcase/title.png",
    showcaseTitleAspect: "4343 / 4027",
    // Both card PNGs carry ~12% transparent padding above the card artwork, so the slot
    // ratio is the CANVAS ratio (not the 2302×2987 card itself) — that keeps the two
    // cards the same size and aligned instead of letterboxing them.
    cardAspect: "2302 / 3379",
    cards: [
      { image: "/brand/t1/equalizer/showcase/1.png", label: "Equalizer Shampoo — kulit kepala sensitif & kering" },
      { image: "/brand/t1/equalizer/showcase/2.png", label: "Equalizer Conditioner — rambut sensitif & kering" },
    ],
  };

export default entry;
