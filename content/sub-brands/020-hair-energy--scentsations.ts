import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Scentsations ────────────────────────────────────────────
const entry: SubBrand = {
    slug: "scentsations",
    parent: "hair-energy",
    name: "Scentsations",
    tagline: `Hair & Body Fragrance.\nWangi tahan hingga 8 jam.`,
    ctaText: "Learn more",
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/brand/hair-energy/scentsations/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = spray depan (masuk dari kiri), 2.png = spray belakang (masuk dari kanan).
    heroLayers: [
      { src: "/brand/hair-energy/scentsations/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "260px", aspectRatio: "2139 / 2753", left: "57%", top: "14%",
        mobile: { right: "16%", top: "3%", width: "52%" } },
      { src: "/brand/hair-energy/scentsations/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "250px", aspectRatio: "2054 / 3538", left: "50%", top: "12%",
        mobile: { left: "16%", bottom: "15%", width: "49%" } },
    ],
    // showcase/1.png = gambar title (produk + manfaat); tidak ada featured lebar.
    showcaseTitle: "/brand/hair-energy/scentsations/showcase/1.png",
    showcaseTitleAspect: "4871 / 3832",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/scentsations/showcase/2.png", label: "Scentsations varian 1" },
      { image: "/brand/hair-energy/scentsations/showcase/3.png", label: "Scentsations varian 2" },
      { image: "/brand/hair-energy/scentsations/showcase/4.png", label: "Scentsations varian 3" },
      { image: "/brand/hair-energy/scentsations/showcase/5.png", label: "Scentsations varian 4" },
      { image: "/brand/hair-energy/scentsations/showcase/6.png", label: "Scentsations varian 5" },
      { image: "/brand/hair-energy/scentsations/showcase/7.png", label: "Scentsations varian 6" },
      { image: "/brand/hair-energy/scentsations/showcase/8.png", label: "Scentsations varian 7" },
      { image: "/brand/hair-energy/scentsations/showcase/9.png", label: "Scentsations varian 8" },
    ],
  };

export default entry;
