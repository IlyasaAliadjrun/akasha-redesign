import type { SubBrand } from "@/lib/subBrands";

  // ── Barber Daily → Hair Care ──────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-care",
    parent: "barber-daily",
    name: "Hair Care",
    tagline: { en: `Improves the health\nof hair & scalp.`, id: `Meningkatkan kesehatan\nrambut & kulit kepala.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#6B3F1D",
    bannerBg: "#6B3F1D",
    heroWordmark: "/brand/barber-daily/hair-care/hero/wordmark.png",
    heroWordmarkAspect: "773 / 527",
    // Shampoo (1) sits centre-left of the cluster and enters from the left; the 2in1
    // hair tonic (2) stands to its right and enters from the right. Both PNGs have
    // wide transparent margins, so the layer boxes are far wider than the bottles.
    heroLayers: [
      { src: "/brand/barber-daily/hair-care/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 40,
        width: "min(36vw, 58vh)", aspectRatio: "3891 / 5524", left: "45.4%", top: "19.1%",
        mobile: { left: "0%", top: "16%", width: "56%" } },
      { src: "/brand/barber-daily/hair-care/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 58,
        width: "min(25.5vw, 41vh)", aspectRatio: "2554 / 3615", left: "69.1%", top: "17%",
        mobile: { right: "2%", top: "6%", width: "44%" } },
    ],
    showcaseTitle: "/brand/barber-daily/hair-care/showcase/title.png",
    showcaseTitleAspect: "5138 / 3538",
    // Pomade is the one landscape card in the set, so it takes the full-width
    // `featured` slot; the four portrait cards fill the 2-column grid.
    featured: { image: "/brand/barber-daily/hair-care/showcase/5.png", label: { en: "Pomade", id: "Pomade" } },
    featuredAspect: "4687 / 2222",
    cardAspect: "2302 / 2987",
    cards: [
      { image: "/brand/barber-daily/hair-care/showcase/1.png", label: { en: "Shampoo", id: "Shampoo" } },
      { image: "/brand/barber-daily/hair-care/showcase/2.png", label: { en: "4 in 1", id: "4 in 1" } },
      { image: "/brand/barber-daily/hair-care/showcase/3.png", label: { en: "Hair Tonic", id: "Hair Tonic" } },
      { image: "/brand/barber-daily/hair-care/showcase/4.png", label: { en: "Styling Gel", id: "Styling Gel" } },
    ],
  };

export default entry;
