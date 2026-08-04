import type { Brand } from "@/lib/brands";

  // 2a — Salon Daily
const entry: Brand = {
    slug: "salon-daily",
    name: "Salon Daily",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: { en: "Your hair care routine with a salon-quality formula.", id: "Rutinitas perawatan rambutmu dengan formula kualitas salon." },
    description: {
      en: "Professional salon-quality hair care every day at home. Keeps hair healthy and easy to style all day long.",
      id: "Perawatan rambut berkualitas salon profesional setiap hari di rumah. Membuat rambut sehat dan mudah ditata sepanjang hari.",
    },
    accentClass: "bg-brand-salondaily",
    // Salon Daily reads as a warm neutral: cream banner (#F3E9DD, sampled from the
    // showcase banners) with the charcoal of the wordmark as the accent. The accent
    // drives the CTA band, the lineup buttons and the "About" eyebrow — all of which
    // are charcoal-on-cream/white in the reference.
    accentHex: "#3C3836",
    // No standalone 3:4 brand card art — CrossSell is the only reader, and it crops
    // to 3:4 with object-cover, so the about photo (subject centred) is the safe pick.
    heroImage: "/brand/salon-daily/about/1.png",
    // Layered parallax banner: shampoo stands at the back, the conditioner tube sits
    // in front on the left of the cluster, the hair tonic closes it on the right.
    // Sizes are min(vw, vh) so the whole cluster scales as one and never outgrows a
    // short window; every layer carries a `mobile` override (guide §4.1).
    heroLayers: [
      // Professional Shampoo — back, upright, enters from the TOP.
      { src: "/brand/salon-daily/hero/2.png", depth: 36, enterFrom: "top", enterDelay: 0.1, width: "min(21vw, 42vh)", maxWidth: "1069px", aspectRatio: "2138 / 2708", left: "63%", top: "8%",
        mobile: { left: "48%", top: "20%", width: "min(40vw, 26vh)" } },
      // Professional Conditioner — front left of the cluster, enters from the LEFT.
      { src: "/brand/salon-daily/hero/1.png", depth: 60, enterFrom: "left", enterDelay: 0.3, width: "min(28vw, 54vh)", maxWidth: "1356px", aspectRatio: "2712 / 3246", left: "44%", top: "20%",
        mobile: { left: "4%", top: "26%", width: "min(56vw, 34vh)" } },
      // Professional Hair Tonic — front right, sits lower, enters from the RIGHT.
      { src: "/brand/salon-daily/hero/3.png", depth: 78, enterFrom: "right", enterDelay: 0.5, width: "min(24vw, 46vh)", maxWidth: "1439px", aspectRatio: "2877 / 3118", left: "70%", top: "30%",
        mobile: { left: "52%", top: "40%", width: "min(42vw, 28vh)" } },
    ],
    heroContent: {
      logo: "/brand/salon-daily/hero/wordmark.png",
      logoAspect: "1386 / 294",
      logoWidth: "24vw",
      maxWidth: "34vw",
      tagline: { en: "Professional Salon-Style Care at Home, Every Day.", id: "Perawatan ala Salon Profesional di Rumah Setiap Hari." },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "7%",
      offsetY: "2vh",
      // Cream banner → dark text (and the navbar paints itself dark over it).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "56vw" },
    },
    bannerBg: "#F3E9DD",
    hero: false,
    products: [
      { name: "Professional Shampoo", size: { en: "200 mL", id: "200 mL" }, image: "/brand/salon-daily/product-lineup/shampoo.png" },
      { name: "Professional Hair Mask", size: { en: "500 g", id: "500 g" }, image: "/brand/salon-daily/product-lineup/hair-mask-500.png" },
      { name: "Professional Hair Mask", size: { en: "200 g", id: "200 g" }, image: "/brand/salon-daily/product-lineup/hair-mask-200.png" },
      { name: "Professional Creambath", size: { en: "500 g", id: "500 g" }, image: "/brand/salon-daily/product-lineup/creambath-500.png" },
      { name: "Professional Creambath", size: { en: "200 g", id: "200 g" }, image: "/brand/salon-daily/product-lineup/creambath-200.png" },
      { name: "Professional Conditioner", size: { en: "200 mL", id: "200 mL" }, image: "/brand/salon-daily/product-lineup/conditioner.png" },
      { name: "Professional Hair Tonic", size: { en: "200 mL", id: "200 mL" }, image: "/brand/salon-daily/product-lineup/hair-tonic.png" },
      { name: "Professional Keratin Hair Spray", variant: { en: "Non Aerosol", id: "Non Aerosol" }, size: { en: "200 mL", id: "200 mL" }, image: "/brand/salon-daily/product-lineup/keratin-hair-spray-non-aerosol.png" },
      { name: "Styling Gel", variant: { en: "Wet Look", id: "Wet Look" }, image: "/brand/salon-daily/product-lineup/styling-gel.png" },
      { name: "Hair Spray", variant: { en: "Strong Hold", id: "Daya Tahan Kuat" }, image: "/brand/salon-daily/product-lineup/hair-spray-strong-hold.png" },
      { name: "Hair Spray", variant: { en: "Extra Strong Hold", id: "Daya Tahan Ekstra Kuat" }, image: "/brand/salon-daily/product-lineup/hair-spray-extra-strong-hold.png" },
      { name: "Hair Spray", variant: { en: "Rock Solid Hold", id: "Daya Tahan Sekokoh Batu" }, image: "/brand/salon-daily/product-lineup/hair-spray-rock-solid-hold.png" },
      { name: "Texturizing Mousse", variant: { en: "Volumizing Strong Hold", id: "Volume & Daya Tahan Kuat" }, image: "/brand/salon-daily/product-lineup/texturizing-mousse.png" },
    ],
    about: [
      { title: { en: "For All Hair Types", id: "Untuk Semua Jenis Rambut" }, image: "/brand/salon-daily/about/1.png" },
      { title: { en: "Keratin Collagen Pro-Vit B5", id: "Keratin Collagen Pro-Vit B5" }, image: "/brand/salon-daily/about/2.png" },
      { title: { en: "Professional Hair Care", id: "Perawatan Rambut Profesional" }, image: "/brand/salon-daily/about/3.png" },
    ],
    showcase: {
      hero: "/brand/salon-daily/showcase/title.png",
      heroAspect: "4793 / 4140",
      // The two variant banners are finished cards (flat cream/tan with baked-in
      // rounded corners and typography), so the frame takes the art's own ratio
      // instead of the 5:2 default — a cover crop would eat the corners and text.
      bannerAspect: "4811 / 2261",
      variants: [
        {
          bg: "/brand/salon-daily/showcase/1-2.png",
          bgAspect: "4811 / 2261",
          product: "/brand/salon-daily/showcase/1-1.png",
          // Wide 3-product cluster with ~15% transparent margin top & bottom: at 130%
          // of the banner height the bottles themselves land just inside the frame,
          // overlapping the word "TREATMENT" exactly like the reference.
          productAspect: "4235 / 2436",
          productHeight: "130%",
          href: "/brands/salon-daily/treatment",
        },
        {
          bg: "/brand/salon-daily/showcase/2-2.png",
          bgAspect: "4811 / 2260",
          product: "/brand/salon-daily/showcase/2-1.png",
          productAspect: "4645 / 3112",
          productHeight: "130%",
          href: "/brands/salon-daily/styling",
        },
      ],
    },
  };

export default entry;
