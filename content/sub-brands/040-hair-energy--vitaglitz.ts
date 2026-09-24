import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Vitaglitz ───────────────────────────────────────────────
const entry: SubBrand = {
    slug: "vitaglitz",
    parent: "hair-energy",
    name: "Vitaglitz",
    tagline: { en: "Hair Serum Vitamin 3in1.\nHeat protection, nourish & repair.", id: "Hair Serum Vitamin 3in1.\nMelindungi dari panas, menutrisi & memperbaiki rambut." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/media/brands/hair-energy/lines/vitaglitz/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = sachet depan (masuk dari kiri), 2.png = sachet belakang (masuk dari kanan).
    // Widths are min(vw, vh, px): scale with viewport (zoom-independent), capped at
    // their designed px size once the window is above the mobile breakpoint.
    heroLayers: [
      { src: "/media/brands/hair-energy/lines/vitaglitz/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "min(29.8vw, 39.7vh)", aspectRatio: "2139 / 2345", left: "68%", top: "16%",
        mobile: { right: "8.5%", top: "-8%", width: "60%" } },
      { src: "/media/brands/hair-energy/lines/vitaglitz/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "min(28.8vw, 38.4vh)", aspectRatio: "2054 / 2786", left: "60%", top: "30%",
        mobile: { left: "8.5%", bottom: "9%", width: "60%" } },
    ],
    // showcase/1.png = title, showcase/2.png = featured lebar, 3–4 = kartu.
    showcaseTitle: { en: "/media/brands/hair-energy/lines/vitaglitz/showcase/1.en.png", id: "/media/brands/hair-energy/lines/vitaglitz/showcase/1.id.png" },
    showcaseTitleAspect: "4871 / 3832",
    featured: { image: { en: "/media/brands/hair-energy/lines/vitaglitz/showcase/2.en.png", id: "/media/brands/hair-energy/lines/vitaglitz/showcase/2.id.png" }, label: { en: "Vitaglitz — signature variant", id: "Vitaglitz — varian unggulan" } },
    featuredAspect: "4868 / 2326",
    cardAspect: "2397 / 3110",
    cards: [
      { image: { en: "/media/brands/hair-energy/lines/vitaglitz/showcase/3.en.png", id: "/media/brands/hair-energy/lines/vitaglitz/showcase/3.id.png" }, label: { en: "Vitaglitz variant 1", id: "Vitaglitz varian 1" } },
      { image: { en: "/media/brands/hair-energy/lines/vitaglitz/showcase/4.en.png", id: "/media/brands/hair-energy/lines/vitaglitz/showcase/4.id.png" }, label: { en: "Vitaglitz variant 2", id: "Vitaglitz varian 2" } },
    ],
  };

export default entry;
