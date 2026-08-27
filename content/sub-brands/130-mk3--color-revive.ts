import type { SubBrand } from "@/lib/subBrands";

  // ── MK3 → Color Revive ────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "color-revive",
    parent: "mk3",
    name: "Color Revive",
    tagline: { en: `Restores color and\nhair health`, id: `Mengembalikan warna dan\nkesehatan rambut` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#3E2120",
    // Light MK3 banner: dark hero copy, controls, and navbar keep sufficient contrast.
    theme: "dark",
    bannerBg: "#E7E3E0",
    heroWordmark: "/brand/mk3/color-revive/hero/wordmark.png",
    heroWordmarkAspect: "1519 / 631",
    // One composed cluster (purple-treatment shampoo + conditioner) → a single layer.
    // The PNG has heavy transparent padding (the bottles fill ~63% × 68% of the
    // canvas), so the layer box is much larger than the pair looks.
    heroLayers: [
      { src: "/brand/mk3/color-revive/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(45vw, 75vh)", aspectRatio: "3259 / 3957", left: "57%", top: "6.7%",
        mobile: { left: "-8%", top: "-26%", width: "110%" } },
    ],
    showcaseTitle: "/brand/mk3/color-revive/showcase/title.png",
    showcaseTitleAspect: "4249 / 3333",
    cardAspect: "1151 / 1493",
    // Grid order follows the reference, not the filenames: the Color Revive shampoo
    // (2.png) leads, the Purple Treatment shampoo (1.png) follows.
    cards: [
      { image: "/brand/mk3/color-revive/showcase/2.png", label: { en: "Shampoo Color Revive", id: "Shampoo Color Revive" } },
      { image: "/brand/mk3/color-revive/showcase/1.png", label: { en: "Shampoo Purple Treatment", id: "Shampoo Purple Treatment" } },
      { image: "/brand/mk3/color-revive/showcase/3.png", label: { en: "Conditioner Repair & Revive", id: "Conditioner Repair & Revive" } },
      { image: "/brand/mk3/color-revive/showcase/4.png", label: { en: "Hair Mask Repair & Revive", id: "Hair Mask Repair & Revive" } },
      { image: "/brand/mk3/color-revive/showcase/5.png", label: { en: "Restructuring Serum Repair & Revive", id: "Restructuring Serum Repair & Revive" } },
      { image: "/brand/mk3/color-revive/showcase/6.png", label: { en: "Leave-In Hair Mask Bond Repair", id: "Leave-In Hair Mask Bond Repair" } },
    ],
  };

export default entry;
