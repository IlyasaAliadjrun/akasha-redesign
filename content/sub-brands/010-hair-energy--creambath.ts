import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Fibertherapy Creambath ──────────────────────────────────
const entry: SubBrand = {
    slug: "creambath",
    parent: "hair-energy",
    name: "Fibertherapy Creambath",
    tagline: { en: "5X Conditioner.\n5X softer and more nourishing.", id: "Creambath 5X Conditioner.\n5X lebih melembutkan dan menutrisi." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/brand/hair-energy/creambath/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // Products render back-to-front. Jar (2.png) sits behind, upper-right, enters
    // from the right; tube (1.png) sits in front, centre, enters from the left and
    // fades in first (per the filename order).
    // Widths are min(vw, vh, px): they scale with the viewport (so browser zoom
    // can't change their rendered size) but stay capped at their designed px size
    // once the window is comfortably above the mobile breakpoint.
    // (The section is `overflow-hidden`, so on very narrow desktop widths the jar is
    // simply clipped rather than triggering a horizontal scrollbar.)
    heroLayers: [
      { src: "/brand/hair-energy/creambath/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "min(36.1vw, 48.2vh)", aspectRatio: "2139 / 2345", left: "67%", top: "18%",
        mobile: { right: "-14%", top: "-24%", width: "100%" } },
      { src: "/brand/hair-energy/creambath/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "min(28.8vw, 38.4vh)", aspectRatio: "1646 / 2786", left: "58%", top: "20%",
        mobile: { right: "18%", top: "-30%", width: "90%" } },
    ],
    showcaseTitle: "/brand/hair-energy/creambath/showcase/title.png",
    showcaseTitleAspect: "4871 / 3832",
    featured: { image: "/brand/hair-energy/creambath/showcase/1.png", label: { en: "Fibertherapy Creambath — signature variant", id: "Fibertherapy Creambath — varian unggulan" } },
    featuredAspect: "4868 / 2326",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/creambath/showcase/2.png", label: { en: "Fibertherapy Creambath variant 1", id: "Fibertherapy Creambath varian 1" } },
      { image: "/brand/hair-energy/creambath/showcase/3.png", label: { en: "Fibertherapy Creambath variant 2", id: "Fibertherapy Creambath varian 2" } },
      { image: "/brand/hair-energy/creambath/showcase/4.png", label: { en: "Fibertherapy Creambath variant 3", id: "Fibertherapy Creambath varian 3" } },
      { image: "/brand/hair-energy/creambath/showcase/5.png", label: { en: "Fibertherapy Creambath variant 4", id: "Fibertherapy Creambath varian 4" } },
    ],
  };

export default entry;
