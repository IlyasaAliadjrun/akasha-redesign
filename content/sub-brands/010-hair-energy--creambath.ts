import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Fibertherapy Creambath ──────────────────────────────────
const entry: SubBrand = {
    slug: "creambath",
    parent: "hair-energy",
    name: "Fibertherapy Creambath",
    tagline: `Creambath 5X Conditioner.\n5X lebih melembutkan dan menutrisi.`,
    ctaText: "Learn more",
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/brand/hair-energy/creambath/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // Products render back-to-front. Jar (2.png) sits behind, upper-right, enters
    // from the right; tube (1.png) sits in front, centre, enters from the left and
    // fades in first (per the filename order).
    // Widths are a FIXED px (no vw term): the products keep exactly this size on
    // every desktop width — they never shrink or grow when the window is resized.
    // (The section is `overflow-hidden`, so on very narrow desktop widths the jar is
    // simply clipped rather than triggering a horizontal scrollbar.)
    heroLayers: [
      { src: "/brand/hair-energy/creambath/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "350px", aspectRatio: "2139 / 2345", left: "60%", top: "25%" },
      { src: "/brand/hair-energy/creambath/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "275px", aspectRatio: "1646 / 2786", left: "48%", top: "10%" },
    ],
    showcaseTitle: "/brand/hair-energy/creambath/showcase/title.png",
    showcaseTitleAspect: "4871 / 3832",
    featured: { image: "/brand/hair-energy/creambath/showcase/1.png", label: "Fibertherapy Creambath — varian unggulan" },
    featuredAspect: "4868 / 2326",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/creambath/showcase/2.png", label: "Fibertherapy Creambath varian 1" },
      { image: "/brand/hair-energy/creambath/showcase/3.png", label: "Fibertherapy Creambath varian 2" },
      { image: "/brand/hair-energy/creambath/showcase/4.png", label: "Fibertherapy Creambath varian 3" },
      { image: "/brand/hair-energy/creambath/showcase/5.png", label: "Fibertherapy Creambath varian 4" },
    ],
  };

export default entry;
