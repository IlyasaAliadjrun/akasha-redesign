import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Fibertherapy Shampoo ────────────────────────────────────
const entry: SubBrand = {
    slug: "shampoo",
    parent: "hair-energy",
    name: "Fibertherapy Shampoo",
    tagline: { en: "Conditioning Shampoo with Keratin.\nSmoother, stronger & shinier hair.", id: "Conditioning Shampoo dengan Keratin.\nRambut lebih halus, kuat & berkilau." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/brand/hair-energy/shampoo/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = botol depan (masuk dari kiri), 2.png = botol belakang (masuk dari kanan).
    heroLayers: [
      { src: "/brand/hair-energy/shampoo/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "210px", aspectRatio: "1313 / 2345", left: "73%", top: "17%",
        mobile: { right: "-16%", top: "-62%", width: "102%" } },
      { src: "/brand/hair-energy/shampoo/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "270px", aspectRatio: "1646 / 2786", left: "62%", top: "23%",
        mobile: { left: "-18%", bottom: "-53%", width: "117%" } },
    ],
    // showcase/1.png = gambar title (produk + manfaat); tidak ada featured lebar.
    showcaseTitle: "/brand/hair-energy/shampoo/showcase/1.png",
    showcaseTitleAspect: "4448 / 3832",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/shampoo/showcase/2.png", label: { en: "Fibertherapy Shampoo variant 1", id: "Fibertherapy Shampoo varian 1" } },
      { image: "/brand/hair-energy/shampoo/showcase/3.png", label: { en: "Fibertherapy Shampoo variant 2", id: "Fibertherapy Shampoo varian 2" } },
      { image: "/brand/hair-energy/shampoo/showcase/4.png", label: { en: "Fibertherapy Shampoo variant 3", id: "Fibertherapy Shampoo varian 3" } },
      { image: "/brand/hair-energy/shampoo/showcase/5.png", label: { en: "Fibertherapy Shampoo variant 4", id: "Fibertherapy Shampoo varian 4" } },
      { image: "/brand/hair-energy/shampoo/showcase/6.png", label: { en: "Fibertherapy Shampoo variant 5", id: "Fibertherapy Shampoo varian 5" } },
      { image: "/brand/hair-energy/shampoo/showcase/7.png", label: { en: "Fibertherapy Shampoo variant 6", id: "Fibertherapy Shampoo varian 6" } },
    ],
  };

export default entry;
