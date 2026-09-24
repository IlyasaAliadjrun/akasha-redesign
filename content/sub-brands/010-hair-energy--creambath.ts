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
    heroWordmark: "/media/brands/hair-energy/lines/creambath/hero/wordmark.png",
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
      { src: "/media/brands/hair-energy/lines/creambath/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "min(36.1vw, 48.2vh)", aspectRatio: "2139 / 2345", left: "67%", top: "18%",
        mobile: { right: "5%", top: "-1%", width: "65%" } },
      { src: "/media/brands/hair-energy/lines/creambath/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "min(28.8vw, 38.4vh)", aspectRatio: "1646 / 2786", left: "58%", top: "20%",
        mobile: { right: "38%", top: "-8%", width: "60%" } },
    ],
    showcaseTitle: { en: "/media/brands/hair-energy/lines/creambath/showcase/title.en.png", id: "/media/brands/hair-energy/lines/creambath/showcase/title.id.png" },
    showcaseTitleAspect: "4871 / 3832",
    featured: { image: { en: "/media/brands/hair-energy/lines/creambath/showcase/1.en.png", id: "/media/brands/hair-energy/lines/creambath/showcase/1.id.png" }, label: { en: "Fibertherapy Creambath — signature variant", id: "Fibertherapy Creambath — varian unggulan" } },
    featuredAspect: "4868 / 2326",
    cardAspect: "2397 / 3110",
    cards: [
      { image: { en: "/media/brands/hair-energy/lines/creambath/showcase/2.en.png", id: "/media/brands/hair-energy/lines/creambath/showcase/2.id.png" }, label: { en: "Fibertherapy Creambath variant 1", id: "Fibertherapy Creambath varian 1" } },
      { image: { en: "/media/brands/hair-energy/lines/creambath/showcase/3.en.png", id: "/media/brands/hair-energy/lines/creambath/showcase/3.id.png" }, label: { en: "Fibertherapy Creambath variant 2", id: "Fibertherapy Creambath varian 2" } },
      { image: { en: "/media/brands/hair-energy/lines/creambath/showcase/4.en.png", id: "/media/brands/hair-energy/lines/creambath/showcase/4.id.png" }, label: { en: "Fibertherapy Creambath variant 3", id: "Fibertherapy Creambath varian 3" } },
      { image: { en: "/media/brands/hair-energy/lines/creambath/showcase/5.en.png", id: "/media/brands/hair-energy/lines/creambath/showcase/5.id.png" }, label: { en: "Fibertherapy Creambath variant 4", id: "Fibertherapy Creambath varian 4" } },
    ],
  };

export default entry;
