import type { SubBrand } from "@/lib/subBrands";

  // ── MK3 → Damage Repair ───────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "damage-repair",
    parent: "mk3",
    name: "Damage Repair",
    tagline: { en: `Intensive Repair for\nDry, Brittle, and Over-Processed Hair`, id: `Perbaikan Intensif untuk Rambut\nKering, Rapuh, dan Over-Processed` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#3E2120",
    // Light MK3 banner: dark hero copy, controls, and navbar keep sufficient contrast.
    theme: "dark",
    bannerBg: "#E7E3E0",
    heroWordmark: "/brand/mk3/damage-repair/hero/wordmark.png",
    heroWordmarkAspect: "1519 / 631",
    // The folder ships ONE composed cluster (shampoo + conditioner + hair mask +
    // restructuring serum), so the hero is a single layer. Width is min(vw, vh) so the
    // cluster scales with the shorter axis and never outgrows a short window; the
    // `mobile` values are % of the SubBrandHero mobile cluster box.
    // The PNG carries transparent padding (the products fill ~75% × 83% of the canvas),
    // so the layer box is larger than the cluster looks.
    heroLayers: [
      { src: "/brand/mk3/damage-repair/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(57vw, 91vh)", aspectRatio: "3380 / 3034", left: "52.5%", top: "14.8%",
        mobile: { left: "-6%", top: "-7%", width: "110%" } },
    ],
    showcaseTitle: "/brand/mk3/damage-repair/showcase/title.png",
    showcaseTitleAspect: "4153 / 3401",
    // The leave-in mask ships as a landscape card, so it takes the full-width slot.
    featured: { image: "/brand/mk3/damage-repair/showcase/5.png", label: { en: "Leave-In Hair Mask — a no-rinse hair mask", id: "Leave-In Hair Mask — masker rambut tanpa bilas" } },
    featuredAspect: "4811 / 2261",
    cardAspect: "1151 / 1493",
    cards: [
      { image: "/brand/mk3/damage-repair/showcase/1.png", label: { en: "Shampoo Damage Repair", id: "Shampoo Damage Repair" } },
      { image: "/brand/mk3/damage-repair/showcase/2.png", label: { en: "Conditioner Repair & Revive", id: "Conditioner Repair & Revive" } },
      { image: "/brand/mk3/damage-repair/showcase/3.png", label: { en: "Hair Mask Repair & Revive", id: "Hair Mask Repair & Revive" } },
      { image: "/brand/mk3/damage-repair/showcase/4.png", label: { en: "Restructuring Serum Repair & Revive", id: "Restructuring Serum Repair & Revive" } },
    ],
  };

export default entry;
