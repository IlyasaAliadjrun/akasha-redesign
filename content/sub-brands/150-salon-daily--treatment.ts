import type { SubBrand } from "@/lib/subBrands";

  // ── Salon Daily → Treatment ───────────────────────────────────────────────
const entry: SubBrand = {
    slug: "treatment",
    parent: "salon-daily",
    name: "Treatment",
    tagline: { en: `Instant hair treatment with professional salon quality`, id: `Perawatan Rambut instan dengan kualitas salon profesional` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#3C3836",
    // SubBrandHero renders its heading, tagline and CTA in white (no theme switch),
    // so the reference's cream banner would leave them unreadable. This is the same
    // warm neutral one step darker — white wording and the charcoal wordmark both
    // stay legible on it. See the note in the handover.
    bannerBg: "#9A7F6A",
    heroWordmark: "/brand/salon-daily/treatment/hero/wordmark.png",
    heroWordmarkAspect: "1386 / 294",
    // One finished 3-product cluster (shampoo, conditioner, hair tonic). Sized with
    // min(vw, vh) so it never outgrows a short window; centred in the right half.
    heroLayers: [
      { src: "/brand/salon-daily/treatment/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 50, width: "min(50vw, 70vh)", aspectRatio: "3709 / 4550", left: "57%", top: "12%",
        mobile: { left: "-10%", top: "-32%", width: "120%" } },
    ],
    showcaseTitle: "/brand/salon-daily/treatment/showcase/title.png",
    showcaseTitleAspect: "4870 / 3607",
    featured: { image: "/brand/salon-daily/treatment/showcase/5.png", label: { en: "Salon Daily Professional Hair Tonic — treats hair loss & promotes baby hair growth", id: "Salon Daily Professional Hair Tonic — mengatasi rontok & menumbuhkan baby hair" } },
    featuredAspect: "4658 / 2401",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/salon-daily/treatment/showcase/1.png", label: { en: "Salon Daily Professional Shampoo — cleanses hair & scalp", id: "Salon Daily Profesional Shampoo — membersihkan rambut & kulit kepala" } },
      { image: "/brand/salon-daily/treatment/showcase/2.png", label: { en: "Salon Daily Professional Hair Mask — nourishes & cares for hair", id: "Salon Daily Profesional Hair Mask — menutrisi & merawat rambut" } },
      { image: "/brand/salon-daily/treatment/showcase/3.png", label: { en: "Salon Daily Professional Creambath — nourishes & cares for the scalp and hair shaft", id: "Salon Daily Profesional Creambath — menutrisi & merawat kulit kepala dan batang rambut" } },
      { image: "/brand/salon-daily/treatment/showcase/4.png", label: { en: "Salon Daily Professional Conditioner — locks in moisture after washing", id: "Salon Daily Profesional Conditioner — mengunci kelembapan setelah keramas" } },
    ],
  };

export default entry;
