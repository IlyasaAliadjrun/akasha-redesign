import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "nestle-pure-life",
    name: "Nestlé Pure Life",
    division: "beverage",
    tagline: { en: "Not Cold Still Fresh", id: "Gak Dingin Tetep Seger" },
    description: {
      en: "Neutral-pH mineral water processed through Nestlé's strict 12-stage purity standard",
      id: "Air mineral pH netral yang diproses ketat dengan 12 tahap kemurnian kualitas Nestlé",
    },
    accentClass: "bg-brand-npl",
    accentHex: "#0077B6",
    heroImage: "/brand/nestle-pure-life/hero/background.jpg",
    // Layered parallax banner — same scheme as Hair Energy. Order = stacking
    // (last = front).
    heroLayers: [
      // background.jpg — full-bleed gradient backdrop (image, not a flat colour).
      // `cover` so it always fills the hero; it's a smooth gradient, so any crop is
      // invisible. Slowest parallax drift, settles in first.
      { src: "/brand/nestle-pure-life/hero/background.jpg", depth: 20, enterDelay: 0 },
      // 1.png — the bottles, a tight ~1:1 crop (1588×1599). Sized & positioned
      // (Hair-Energy style) rather than full-bleed, so it can be scaled down and
      // anchored toward the right edge instead of filling the whole hero height.
      // No separate mobile crop — same asset renders on phones too.
      { src: "/brand/nestle-pure-life/hero/1.png", depth: 70, enterFrom: "right", enterDelay: 0.4,
        width: "min(40vw, 100vh)", aspectRatio: "1588 / 1599", right: "7%", top: "10%",
        mobile: { width: "min(100vw, 150vh)", left: "0%", top: "20%" } },
    ],
    // Wordmark is an HTML overlay (same pattern as Hair Energy): the enlarged
    // wordmark logo with a tagline + CTA button beneath it. `wordmark-lockup.png` is
    // the tight content crop of the `wordmark-1.png` asset (the "NESTLÉ PURE LIFE"
    // lockup + its drop shadow); the tagline + button below are our own HTML.
    heroContent: {
      logo: "/brand/nestle-pure-life/hero/wordmark.png",
      logoAspect: "1430 / 297",
      logoWidth: "34vw",
      tagline: { en: "Not Cold Still Fresh", id: "Gak Dingin Tetep Seger" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      bodyIndent: "0.85vw", // aligns tagline/CTA with the wordmark's visible letters
      theme: "light",
      delay: 0.5,
      mobile: { logoWidth: "60vw" },
    },
    bannerBg: "#E6097E",
    hero: true,
    about: [
      { title: { en: "From cold-temperature springs (down to 18°C)", id: "Dari Sumber Mata Air Bersuhu Dingin (hingga 18°C)" }, image: "/brand/nestle-pure-life/about/1.png" },
      { title: { en: "International standard technology", id: "Teknologi Standar Internasional" }, image: "/brand/nestle-pure-life/about/2.png" },
      { title: { en: "Delivered by a closed fleet", id: "Dikirim dengan Armada Tertutup" }, image: "/brand/nestle-pure-life/about/3.png" },
    ],
    products: [
      { name: "Pure Life", variant: { en: "330 mL", id: "330 mL" }, size: { en: "24-pack / box", id: "24 pack / dus" }, image: "/brand/nestle-pure-life/product-lineup/330ml.jpg" },
      { name: "Pure Life", variant: { en: "600 mL", id: "600 mL" }, size: { en: "24-pack / box", id: "24 pack / dus" }, image: "/brand/nestle-pure-life/product-lineup/600ml.jpg" },
      { name: "Pure Life", variant: { en: "1500 mL", id: "1500 mL" }, size: { en: "12-pack / box", id: "12 pack / dus" }, image: "/brand/nestle-pure-life/product-lineup/1500ml.jpg" },
      { name: "Pure Life", variant: { en: "Gallon", id: "Galon" }, size: { en: "15 L", id: "15 L" }, image: "/brand/nestle-pure-life/product-lineup/galon-15l.jpg" },
    ],
    reasons: [
      { icon: "💧", title: { en: "12-stage purification", id: "Dimurnikan 12 tahap" }, body: { en: "Every bottle passes through layered filtration before it reaches you.", id: "Setiap botol melewati proses penyaringan berlapis sebelum sampai ke tanganmu." } },
      { icon: "🌿", title: { en: "No excess minerals", id: "Bebas mineral berlebih" }, body: { en: "Clean, light taste with no aftertaste.", id: "Rasanya bersih, ringan, dan tidak meninggalkan aftertaste." } },
      { icon: "☕", title: { en: "Loved by baristas", id: "Disukai para barista" }, body: { en: "Keeps the true character of the specialty coffee you brew.", id: "Menjaga karakter asli kopi spesialti yang kamu seduh." } },
      { icon: "👨‍👩‍👧", title: { en: "Safe for the family", id: "Aman untuk keluarga" }, body: { en: "Recommended for pregnant mothers and growing children.", id: "Direkomendasikan untuk ibu hamil dan si kecil yang sedang tumbuh." } },
    ],
    features: [
      {
        title: { en: "Purity in every drop", id: "Kemurnian di setiap tetes" },
        body: { en: "Purified through a layered process so every sip feels clean and clear.", id: "Dimurnikan melalui proses berlapis sehingga setiap teguk terasa bersih dan jernih." },
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "Refreshing without needing to be cold", id: "Segar tanpa harus dingin" },
        body: { en: "A taste that stays stable at room temperature — perfect from your morning coffee to an evening workout.", id: "Rasa yang stabil di suhu ruang — cocok untuk kopi pagi hingga olahraga sore." },
        image:
          "https://images.unsplash.com/photo-1550505095-81378a674395?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "The choice of Indonesian families", id: "Pilihan keluarga Indonesia" },
        body: { en: "From expecting mothers to coffee baristas, trusted at home and in cafés across the archipelago.", id: "Dari ibu hamil hingga barista kopi, dipercaya di rumah dan kafe di seluruh nusantara." },
        image:
          "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1400&auto=format&fit=crop",
      },
    ],
    // Same poster-style showcase system as Hair Energy, four variant banners (one
    // per SKU: 330 mL, 600 mL, 1500 mL, 15 L). NPL's assets differ from HE's:
    //   - title is a PORTRAIT person cutout (2048×3179), not a landscape poster —
    //     hence heroMaxWidth caps it so it isn't far taller than HE's title;
    //   - each variant bg (`{n}-2`) is a plain blue gradient with NO baked-in text
    //     (the design has no wording), so productAlign "sides" rests the bottle on
    //     alternating left/right (per the reference) with the other half left clear;
    //   - products (`{n}-1`) share one 1809×2015 canvas with each SKU drawn at its
    //     true relative size, so the 330 mL reads small and the 15 L gallon large.
    showcase: {
      hero: "/brand/nestle-pure-life/showcase/title.png",
      heroAspect: "1250 / 763",
      // Landscape title poster — sized close to the variant banners below it. min()
      // caps it at ~52rem on desktop and holds it at 92vw on a phone.
      heroMaxWidth: "min(92vw, 52rem)",
      productAlign: "sides",
      // Whole NPL showcase is static — no scroll parallax on product or background.
      parallax: false,
      variants: [
        // productHeight is tuned per SKU so every bottle sits FULLY INSIDE its banner
        // (no overflow/clipping). Each bottle fills a different share of the shared
        // 1809×2015 canvas (330 mL only 61%, gallon 93%), so the smaller SKUs take a
        // larger value to land at a comparable on-screen size; the gallon still reads
        // largest because it's much wider.
        // 330 mL & 600 mL: vertically centred. productShiftX nudges the bottle off
        // the wording baked into the banner background (left banner → left, etc.).
        { bg: "/brand/nestle-pure-life/showcase/1-2.png", product: "/brand/nestle-pure-life/showcase/1-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "125%", productShiftX: "-14%" },
        { bg: "/brand/nestle-pure-life/showcase/2-2.png", product: "/brand/nestle-pure-life/showcase/2-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "100%", productShiftX: "14%" },
        // 1500 mL & 15 L: grounded on the banner bottom.
        // Their PNGs have ~0 transparent margin below the bottle, so no bottom offset.
        { bg: "/brand/nestle-pure-life/showcase/3-2.png", product: "/brand/nestle-pure-life/showcase/3-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "96%", groundBottom: true },
        { bg: "/brand/nestle-pure-life/showcase/4-2.png", product: "/brand/nestle-pure-life/showcase/4-1.png", bgAspect: "4591 / 2032", productAspect: "1809 / 2015", productHeight: "92%", groundBottom: true },
      ],
    },
  };

export default entry;
