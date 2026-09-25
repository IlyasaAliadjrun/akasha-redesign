// Bilingual UI copy for brand / sub-brand page components (PageHero, BrandHero,
// BrandIntro, BrandCTA, ProductLineup, BrandAbout, BrandShowcase, CrossSell,
// SubBrandHero, SubBrandShowcase, RevenueChart). Leaf values are { en, id }
// pairs consumed via useLocale()'s t() helper. Shared bits (scroll indicator,
// carousel arrows, "Learn more"/"Buy") live under `common` so every component
// that needs them imports the same entry instead of re-declaring it.

export const BRAND = {
  common: {
    scrollDown: { en: "Scroll down", id: "Gulir ke bawah" },
    previous: { en: "Previous", id: "Sebelumnya" },
    next: { en: "Next", id: "Berikutnya" },
    learnMore: { en: "Learn more", id: "Pelajari lebih lanjut" },
    buy: { en: "Buy", id: "Beli" },
    // "{range}" → "2012–2023"
    archiveShow: { en: "Show archive {range}", id: "Lihat arsip {range}" },
    archiveHide: { en: "Hide archive", id: "Sembunyikan arsip" },
  },
  seo: {
    // Tops up a brand's meta description when its own copy is very short.
    brandDescription: {
      en: "{brand} by PT Akasha Wira International Tbk.",
      id: "{brand} oleh PT Akasha Wira International Tbk.",
    },
    // Appended to a product line's tagline so its meta description says what the
    // page is. "{brand}" is the parent brand's name. Kept short so it still fits
    // within 160 characters after a long tagline.
    lineDescription: {
      en: "A {brand} line by PT Akasha Wira International Tbk.",
      id: "Lini {brand} dari PT Akasha Wira International Tbk.",
    },
  },
  intro: {
    // "About " + brand.name -> "About Nestlé" / "Tentang Nestlé"
    about: { en: "About", id: "Tentang" },
  },
  cta: {
    // Sentence with an interpolated brand name: `${before}${brand.name}${after}`
    // -> "Try Nestlé now." / "Rasakan Nestlé sekarang."
    before: { en: "Try ", id: "Rasakan " },
    after: { en: " now.", id: " sekarang." },
    buyNow: { en: "Buy now", id: "Beli sekarang" },
    findStore: { en: "Find a store near you", id: "Temukan di toko terdekat" },
  },
  lineup: {
    defaultTitle: { en: "Explore the lineup.", id: "Jelajahi rangkaian produk." },
    productImage: { en: "Product image", id: "Gambar produk" },
  },
  showcase: {
    // `${brand.name} — ${openVariant}` -> "Nestlé — open variant page"
    openVariant: { en: "open variant page", id: "buka halaman varian" },
  },
  crossSell: {
    eyebrow: { en: "More from Akasha", id: "Lainnya dari Akasha" },
    heading: { en: "Continue your journey.", id: "Lanjutkan perjalananmu." },
  },
  subBrandHero: {
    wordmark: { en: "Wordmark", id: "Wordmark" },
    product: { en: "Product", id: "Produk" },
  },
  subBrandShowcase: {
    titleImage: { en: "Showcase title image", id: "Gambar title showcase" },
    image: { en: "Image", id: "Gambar" },
  },
};
