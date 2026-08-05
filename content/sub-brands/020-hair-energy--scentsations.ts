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
    heroWordmark: "/brand/hair-energy/scentsations/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = spray depan (masuk dari kiri), 2.png = spray belakang (masuk dari kanan).
    heroLayers: [
      { src: "/brand/hair-energy/scentsations/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "285px", aspectRatio: "2139 / 2753", left: "68%", top: "19%",
        mobile: { right: "-33%", top: "-55%", width: "143%" } },
      { src: "/brand/hair-energy/scentsations/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "290px", aspectRatio: "2054 / 3538", left: "62%", top: "18%",
        mobile: { left: "-26%", bottom: "-65%", width: "140%" } },
    ],
    // showcase/1.png = gambar title (produk + manfaat); tidak ada featured lebar.
    showcaseTitle: "/brand/hair-energy/scentsations/showcase/1.png",
    showcaseTitleAspect: "4871 / 3832",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/scentsations/showcase/2.png", label: { en: "Scentsations variant 1", id: "Scentsations varian 1" } },
      { image: "/brand/hair-energy/scentsations/showcase/3.png", label: { en: "Scentsations variant 2", id: "Scentsations varian 2" } },
      { image: "/brand/hair-energy/scentsations/showcase/4.png", label: { en: "Scentsations variant 3", id: "Scentsations varian 3" } },
      { image: "/brand/hair-energy/scentsations/showcase/5.png", label: { en: "Scentsations variant 4", id: "Scentsations varian 4" } },
      { image: "/brand/hair-energy/scentsations/showcase/6.png", label: { en: "Scentsations variant 5", id: "Scentsations varian 5" } },
      { image: "/brand/hair-energy/scentsations/showcase/7.png", label: { en: "Scentsations variant 6", id: "Scentsations varian 6" } },
      { image: "/brand/hair-energy/scentsations/showcase/8.png", label: { en: "Scentsations variant 7", id: "Scentsations varian 7" } },
      { image: "/brand/hair-energy/scentsations/showcase/9.png", label: { en: "Scentsations variant 8", id: "Scentsations varian 8" } },
    ],
  };

export default entry;
