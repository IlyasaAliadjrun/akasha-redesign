import type { SubBrand } from "@/lib/subBrands";

  // ── T1 → Equalizer ────────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "equalizer",
    parent: "t1",
    name: "Equalizer",
    tagline: { en: "Soothes sensitive scalp\nand dry hair.", id: "Menenangkan kulit kepala sensitif\ndan rambut kering." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#B15F45", // Equalizer terracotta, sampled from the line's banner art
    bannerBg: "#B15F45",
    heroWordmark: "/brand/t1/equalizer/hero/wordmark.png",
    heroWordmarkAspect: "1424 / 556",
    // One composed cluster (shampoo + conditioner). The bottles fill 54% × 71% of the
    // canvas starting 20% down, so the layer box is much larger than the cluster looks.
    heroLayers: [
      { src: "/brand/t1/equalizer/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(58vw, 70vh, 1763px)", aspectRatio: "3526 / 4774", left: "57%", top: "0%",
        mobile: { left: "-65%", top: "-115%", width: "230%" } },
    ],
    showcaseTitle: "/brand/t1/equalizer/showcase/title.png",
    showcaseTitleAspect: "4343 / 4027",
    // Both card PNGs carry ~12% transparent padding above the card artwork, so the slot
    // ratio is the CANVAS ratio (not the 2302×2987 card itself) — that keeps the two
    // cards the same size and aligned instead of letterboxing them.
    cardAspect: "2302 / 3379",
    cards: [
      { image: "/brand/t1/equalizer/showcase/1.png", label: { en: "Equalizer Shampoo — for sensitive & dry scalp", id: "Equalizer Shampoo — kulit kepala sensitif & kering" } },
      { image: "/brand/t1/equalizer/showcase/2.png", label: { en: "Equalizer Conditioner — for sensitive & dry hair", id: "Equalizer Conditioner — rambut sensitif & kering" } },
    ],
  };

export default entry;
