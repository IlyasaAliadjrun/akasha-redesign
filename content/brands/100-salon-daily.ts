import type { Brand } from "@/lib/brands";

  // 2a — Salon Daily
const entry: Brand = {
    slug: "salon-daily",
    name: "Salon Daily",
    division: "beauty",
    parent: "makarizo-professional",
    tagline: "Rutinitas perawatan rambutmu dengan formula kualitas salon.",
    description:
      "Perawatan rambut berkualitas salon profesional setiap hari di rumah. Membuat rambut sehat dan mudah ditata sepanjang hari.",
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
      { src: "/brand/salon-daily/hero/2.png", depth: 36, enterFrom: "top", enterDelay: 0.1, width: "min(21vw, 42vh)", aspectRatio: "2138 / 2708", left: "63%", top: "8%",
        mobile: { left: "48%", top: "20%", width: "min(40vw, 26vh)" } },
      // Professional Conditioner — front left of the cluster, enters from the LEFT.
      { src: "/brand/salon-daily/hero/1.png", depth: 60, enterFrom: "left", enterDelay: 0.3, width: "min(28vw, 54vh)", aspectRatio: "2712 / 3246", left: "44%", top: "20%",
        mobile: { left: "4%", top: "26%", width: "min(56vw, 34vh)" } },
      // Professional Hair Tonic — front right, sits lower, enters from the RIGHT.
      { src: "/brand/salon-daily/hero/3.png", depth: 78, enterFrom: "right", enterDelay: 0.5, width: "min(24vw, 46vh)", aspectRatio: "2877 / 3118", left: "70%", top: "30%",
        mobile: { left: "52%", top: "40%", width: "min(42vw, 28vh)" } },
    ],
    heroContent: {
      logo: "/brand/salon-daily/hero/wordmark.png",
      logoAspect: "1386 / 294",
      logoWidth: "24vw",
      maxWidth: "34vw",
      tagline: "Perawatan ala Salon Profesional di Rumah Setiap Hari.",
      ctaText: "Learn more",
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
      { name: "Professional Shampoo", size: "200 mL", image: "/brand/salon-daily/product-lineup/shampoo.png" },
      { name: "Professional Hair Mask", size: "500 g", image: "/brand/salon-daily/product-lineup/hair-mask-500.png" },
      { name: "Professional Hair Mask", size: "200 g", image: "/brand/salon-daily/product-lineup/hair-mask-200.png" },
      { name: "Professional Creambath", size: "500 g", image: "/brand/salon-daily/product-lineup/creambath-500.png" },
      { name: "Professional Creambath", size: "200 g", image: "/brand/salon-daily/product-lineup/creambath-200.png" },
      { name: "Professional Conditioner", size: "200 mL", image: "/brand/salon-daily/product-lineup/conditioner.png" },
      { name: "Professional Hair Tonic", size: "200 mL", image: "/brand/salon-daily/product-lineup/hair-tonic.png" },
      { name: "Professional Keratin Hair Spray", variant: "Non Aerosol", size: "200 mL", image: "/brand/salon-daily/product-lineup/keratin-hair-spray-non-aerosol.png" },
      { name: "Styling Gel", variant: "Wet Look", image: "/brand/salon-daily/product-lineup/styling-gel.png" },
      { name: "Hair Spray", variant: "Strong Hold", image: "/brand/salon-daily/product-lineup/hair-spray-strong-hold.png" },
      { name: "Hair Spray", variant: "Extra Strong Hold", image: "/brand/salon-daily/product-lineup/hair-spray-extra-strong-hold.png" },
      { name: "Hair Spray", variant: "Rock Solid Hold", image: "/brand/salon-daily/product-lineup/hair-spray-rock-solid-hold.png" },
      { name: "Texturizing Mousse", variant: "Volumizing Strong Hold", image: "/brand/salon-daily/product-lineup/texturizing-mousse.png" },
    ],
    about: [
      { title: "Untuk Semua Jenis Rambut", image: "/brand/salon-daily/about/1.png" },
      { title: "Keratin Collagen Pro-Vit B5", image: "/brand/salon-daily/about/2.png" },
      { title: "Perawatan Rambut Profesional", image: "/brand/salon-daily/about/3.png" },
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
