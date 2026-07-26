import type { SubBrand } from "@/lib/subBrands";

  // ── Hair Energy → Vitaglitz ───────────────────────────────────────────────
const entry: SubBrand = {
    slug: "vitaglitz",
    parent: "hair-energy",
    name: "Vitaglitz",
    tagline: `Hair Serum Vitamin 3in1.\nHeat protection, nourish & repair.`,
    ctaText: "Learn more",
    accentHex: "#F36C21",
    bannerBg: "#F36C21",
    heroWordmark: "/brand/hair-energy/vitaglitz/hero/wordmark.png",
    heroWordmarkAspect: "767 / 529",
    // 1.png = sachet depan (masuk dari kiri), 2.png = sachet belakang (masuk dari kanan).
    heroLayers: [
      { src: "/brand/hair-energy/vitaglitz/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "260px", aspectRatio: "2139 / 2345", left: "60%", top: "13%",
        mobile: { right: "12%", top: "2%", width: "50%" } },
      { src: "/brand/hair-energy/vitaglitz/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "250px", aspectRatio: "2054 / 2786", left: "52%", top: "27%",
        mobile: { left: "14%", bottom: "14%", width: "50%" } },
    ],
    // showcase/1.png = title, showcase/2.png = featured lebar, 3–4 = kartu.
    showcaseTitle: "/brand/hair-energy/vitaglitz/showcase/1.png",
    showcaseTitleAspect: "4871 / 3832",
    featured: { image: "/brand/hair-energy/vitaglitz/showcase/2.png", label: "Vitaglitz — varian unggulan" },
    featuredAspect: "4868 / 2326",
    cardAspect: "2397 / 3110",
    cards: [
      { image: "/brand/hair-energy/vitaglitz/showcase/3.png", label: "Vitaglitz varian 1" },
      { image: "/brand/hair-energy/vitaglitz/showcase/4.png", label: "Vitaglitz varian 2" },
    ],
  };

export default entry;
