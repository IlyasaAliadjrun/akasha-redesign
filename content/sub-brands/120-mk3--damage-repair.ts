import type { SubBrand } from "@/lib/subBrands";

  // ── MK3 → Damage Repair ───────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "damage-repair",
    parent: "mk3",
    name: "Damage Repair",
    tagline: `Perbaikan Intensif untuk Rambut\nKering, Rapuh, dan Over-Processed`,
    ctaText: "Learn more",
    accentHex: "#3E2120",
    // SubBrandHero renders its wording in white only, so the banner keeps the MK3
    // brown rather than the reference's light beige (see the note handed to the
    // brand owner). Same treatment as Barber Daily / Honey Dew.
    bannerBg: "#3E2120",
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
        width: "min(44vw, 78vh)", aspectRatio: "3380 / 3034", left: "51.5%", top: "17.6%",
        mobile: { left: "2%", top: "2%", width: "96%" } },
    ],
    showcaseTitle: "/brand/mk3/damage-repair/showcase/title.png",
    showcaseTitleAspect: "4153 / 3401",
    // The leave-in mask ships as a landscape card, so it takes the full-width slot.
    featured: { image: "/brand/mk3/damage-repair/showcase/5.png", label: "Leave-In Hair Mask — masker rambut tanpa bilas" },
    featuredAspect: "4811 / 2261",
    cardAspect: "1151 / 1493",
    cards: [
      { image: "/brand/mk3/damage-repair/showcase/1.png", label: "Shampoo Damage Repair" },
      { image: "/brand/mk3/damage-repair/showcase/2.png", label: "Conditioner Repair & Revive" },
      { image: "/brand/mk3/damage-repair/showcase/3.png", label: "Hair Mask Repair & Revive" },
      { image: "/brand/mk3/damage-repair/showcase/4.png", label: "Restructuring Serum Repair & Revive" },
    ],
  };

export default entry;
