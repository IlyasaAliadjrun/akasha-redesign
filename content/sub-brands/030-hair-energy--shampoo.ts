import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Fibertherapy Shampoo ────────────────────────────────────
const entry: SubBrand = {
    slug: "shampoo",
    parent: "hair-energy",
    name: "Fibertherapy Shampoo",
    tagline: `Conditioning Shampoo dengan Keratin.\nRambut lebih halus, kuat & berkilau.`,
    ctaText: "Learn more",
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/brand/hair-energy/shampoo/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = botol depan (masuk dari kiri), 2.png = botol belakang (masuk dari kanan).
    heroLayers: [
      { src: "/brand/hair-energy/shampoo/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "180px", aspectRatio: "1313 / 2345", left: "65%", top: "13%",
        mobile: { right: "14%", top: "1%", width: "38%" } },
      { src: "/brand/hair-energy/shampoo/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "240px", aspectRatio: "1646 / 2786", left: "52%", top: "16%",
        mobile: { left: "13%", bottom: "12%", width: "50%" } },
    ],
    // showcase/1.png = gambar title (produk + manfaat); tidak ada featured lebar.
    showcaseTitle: "/brand/hair-energy/shampoo/showcase/1.png",
    showcaseTitleAspect: "4448 / 3832",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/shampoo/showcase/2.png", label: "Fibertherapy Shampoo varian 1" },
      { image: "/brand/hair-energy/shampoo/showcase/3.png", label: "Fibertherapy Shampoo varian 2" },
      { image: "/brand/hair-energy/shampoo/showcase/4.png", label: "Fibertherapy Shampoo varian 3" },
      { image: "/brand/hair-energy/shampoo/showcase/5.png", label: "Fibertherapy Shampoo varian 4" },
      { image: "/brand/hair-energy/shampoo/showcase/6.png", label: "Fibertherapy Shampoo varian 5" },
      { image: "/brand/hair-energy/shampoo/showcase/7.png", label: "Fibertherapy Shampoo varian 6" },
    ],
  };

export default entry;
