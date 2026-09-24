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
    heroWordmark: "/media/brands/hair-energy/lines/shampoo/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = botol depan (masuk dari kiri), 2.png = botol belakang (masuk dari kanan).
    // Widths are min(vw, vh, px): scale with viewport (zoom-independent), capped at
    // their designed px size once the window is above the mobile breakpoint.
    heroLayers: [
      { src: "/media/brands/hair-energy/lines/shampoo/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "min(20.5vw, 27.3vh)", aspectRatio: "1313 / 2345", left: "73%", top: "17%",
        mobile: { right: "13%", top: "-12%", width: "42%" } },
      { src: "/media/brands/hair-energy/lines/shampoo/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "min(26.4vw, 35.2vh)", aspectRatio: "1646 / 2786", left: "62%", top: "23%",
        mobile: { left: "13%", bottom: "5%", width: "52%" } },
    ],
    // showcase/1.png = gambar title (produk + manfaat); tidak ada featured lebar.
    showcaseTitle: { en: "/media/brands/hair-energy/lines/shampoo/showcase/1.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/1.id.png" },
    showcaseTitleAspect: "4448 / 3832",
    cardAspect: "2397 / 3110",
    cards: [
      { image: { en: "/media/brands/hair-energy/lines/shampoo/showcase/2.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/2.id.png" }, label: { en: "Fibertherapy Shampoo variant 1", id: "Fibertherapy Shampoo varian 1" } },
      { image: { en: "/media/brands/hair-energy/lines/shampoo/showcase/3.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/3.id.png" }, label: { en: "Fibertherapy Shampoo variant 2", id: "Fibertherapy Shampoo varian 2" } },
      { image: { en: "/media/brands/hair-energy/lines/shampoo/showcase/4.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/4.id.png" }, label: { en: "Fibertherapy Shampoo variant 3", id: "Fibertherapy Shampoo varian 3" } },
      { image: { en: "/media/brands/hair-energy/lines/shampoo/showcase/5.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/5.id.png" }, label: { en: "Fibertherapy Shampoo variant 4", id: "Fibertherapy Shampoo varian 4" } },
      { image: { en: "/media/brands/hair-energy/lines/shampoo/showcase/6.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/6.id.png" }, label: { en: "Fibertherapy Shampoo variant 5", id: "Fibertherapy Shampoo varian 5" } },
      { image: { en: "/media/brands/hair-energy/lines/shampoo/showcase/7.en.png", id: "/media/brands/hair-energy/lines/shampoo/showcase/7.id.png" }, label: { en: "Fibertherapy Shampoo variant 6", id: "Fibertherapy Shampoo varian 6" } },
    ],
  };

export default entry;
