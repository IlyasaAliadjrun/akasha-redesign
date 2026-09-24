import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Scentsations ────────────────────────────────────────────
const entry: SubBrand = {
    slug: "scentsations",
    parent: "hair-energy",
    name: "Scentsations",
    tagline: { en: "Hair & Body Fragrance.\nFragrance that lasts up to 8 hours.", id: "Hair & Body Fragrance.\nWangi tahan hingga 8 jam." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/media/brands/hair-energy/lines/scentsations/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = spray depan (masuk dari kiri), 2.png = spray belakang (masuk dari kanan).
    // Widths are min(vw, vh, px): scale with viewport (zoom-independent), capped at
    // their designed px size once the window is above the mobile breakpoint.
    heroLayers: [
      { src: "/media/brands/hair-energy/lines/scentsations/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "min(27.8vw, 37.1vh)", aspectRatio: "2139 / 2753", left: "68%", top: "19%",
        mobile: { right: "8.5%", top: "-6%", width: "62%" } },
      { src: "/media/brands/hair-energy/lines/scentsations/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "min(28.3vw, 37.8vh)", aspectRatio: "2054 / 3538", left: "62%", top: "18%",
        mobile: { left: "15%", bottom: "8%", width: "55%" } },
    ],
    // showcase/1.png = gambar title (produk + manfaat); tidak ada featured lebar.
    showcaseTitle: { en: "/media/brands/hair-energy/lines/scentsations/showcase/1.en.png", id: "/media/brands/hair-energy/lines/scentsations/showcase/1.id.png" },
    showcaseTitleAspect: "4871 / 3832",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/2.png", label: { en: "Scentsations variant 1", id: "Scentsations varian 1" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/3.png", label: { en: "Scentsations variant 2", id: "Scentsations varian 2" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/4.png", label: { en: "Scentsations variant 3", id: "Scentsations varian 3" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/5.png", label: { en: "Scentsations variant 4", id: "Scentsations varian 4" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/6.png", label: { en: "Scentsations variant 5", id: "Scentsations varian 5" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/7.png", label: { en: "Scentsations variant 6", id: "Scentsations varian 6" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/8.png", label: { en: "Scentsations variant 7", id: "Scentsations varian 7" } },
      { image: "/media/brands/hair-energy/lines/scentsations/showcase/9.png", label: { en: "Scentsations variant 8", id: "Scentsations varian 8" } },
    ],
  };

export default entry;
