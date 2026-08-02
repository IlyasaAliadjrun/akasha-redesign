import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "vica",
    name: "VICA",
    division: "beverage",
    tagline: { en: "Yellow Cap, Crystal Clear.", id: "Tutup Kuning, Paling Bening." },
    // Becomes the BrandIntro headline (BrandIntro appends its own period, so no
    // trailing "." here; no ". " inside so it stays one line).
    description: {
      en: "Purity from the foothills of Mount Salak, perfected by 0.2-micron filtration",
      id: "Kemurnian dari kaki Gunung Salak, disempurnakan filtrasi 0.2 micron",
    },
    accentClass: "bg-brand-vica",
    accentHex: "#0044A1", // Vica splat blue (buttons, eyebrow, CTA)
    heroImage:
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1800&auto=format&fit=crop",
    // Hero — yellow banner (bannerBg) with the "ViCA" splat wordmark on the left and
    // the 3-bottle cluster (hero/1.png) on the right. Mirrors the Hair Energy hero
    // pattern; matches the provided VICA landing-page reference.
    heroLayers: [
      // hero/1.png is now a TIGHT portrait cluster of the 3 bottles (transparent,
      // 2785×3778) — one asset for both viewports, rendered as a sized layer.
      // DESKTOP: anchored right, vertically centred. MOBILE: centred between the
      // wordmark (top) and the tagline block (bottom). No parallax (depth 0).
      { src: "/brand/vica/hero/1.png", depth: 0, enterFrom: "right", enterDelay: 0.3,
        width: "min(32vw, 460px)", aspectRatio: "2785 / 3778", right: "9%", top: "17%",
        mobile: { width: "min(58vw, 34vh)", left: "21%", top: "42%" } },
    ],
    // Wordmark image already includes the "Tutup Kuning, Paling Bening" tagline, so no
    // separate HTML tagline/CTA (the reference hero has none either).
    heroContent: {
      logo: "/brand/vica/hero/wordmark.png",
      logoAspect: "550 / 595",
      logoWidth: "22vw",
      left: "10%",
      theme: "dark",
      delay: 0.5,
      mobile: { logoWidth: "46vw" },
    },
    bannerBg: "#ECE700", // Vica yellow
    hero: false,
    products: [
      { name: "VICA", variant: { en: "220 mL", id: "220 mL" }, image: "/brand/vica/product-lineup/vica-220ml.png", imageScale: 0.7 },
      { name: "VICA", variant: { en: "330 mL", id: "330 mL" }, image: "/brand/vica/product-lineup/vica-330ml.png", imageScale: 0.8},
      { name: "VICA", variant: { en: "600 mL", id: "600 mL" }, image: "/brand/vica/product-lineup/vica-600ml.png", imageScale: 0.9 },
      { name: "VICA", variant: { en: "1010 mL", id: "1010 mL" }, image: "/brand/vica/product-lineup/vica-1010ml.png", imageScale: 0.9 },
      { name: "VICA", variant: { en: "1500 mL", id: "1500 mL" }, image: "/brand/vica/product-lineup/vica-1500ml.png" },
    ],
    about: [
      { title: { en: "From a spring whose purity has been preserved for over 100 years", id: "Dari mata air yang kemurniannya terjaga lebih dari 100 tahun" }, image: "/brand/vica/about/1.png" },
      { title: { en: "Through 0.2-micron filtration technology", id: "Melalui teknologi filtrasi 0,2 micron" }, image: "/brand/vica/about/2.png" },
      { title: { en: "Processed with fully automated Krones machinery", id: "Diproses mesin Krones dengan full automation" }, image: "/brand/vica/about/3.png" },
    ],
    reasons: [
      { icon: "⛰️", title: { en: "Sourced from nature", id: "Bersumber dari alam" }, body: { en: "Natural mineral water straight from Ciburial Spring, at the foot of Mount Salak.", id: "Air mineral alami langsung dari Mata Air Ciburial, kaki Gunung Salak." } },
      { icon: "✨", title: { en: "Balanced minerals", id: "Mineral seimbang" }, body: { en: "Natural mineral content to keep your body refreshed all day long.", id: "Kandungan mineral alami untuk menjaga kesegaran tubuh sepanjang hari." } },
      { icon: "🏠", title: { en: "A household favorite", id: "Pilihan rumah tangga" }, body: { en: "Produced since 2011, trusted by thousands of families.", id: "Diproduksi sejak 2011, sudah dipercaya ribuan keluarga." } },
    ],
    // Poster-style showcase (same engine as Hair Energy / NPL). title.png = the
    // "Murni dari sumbernya" banner; then 5 SKU banners. Each bg ({n}-2) is a yellow
    // card with the giant name baked in, leaving one side clear for the bottle, so
    // productAlign "sides" — but the sides ALTERNATE the opposite way to the default
    // (banner 1's bottle sits RIGHT), hence the explicit `side` per variant.
    showcase: {
      hero: "/brand/vica/showcase/title.png",
      heroAspect: "1250 / 764",
      heroMaxWidth: "min(92vw, 52rem)",
      productAlign: "sides",
      parallax: false,
      variants: [
        // Sizing/position knobs per banner (all % → resolution-independent; each also
        // takes an optional `mobile: { productHeight?, productShiftX?, productShiftY? }`
        // to tune phones separately):
        //   productHeight — size (% of banner height)
        //   productShiftX / productShiftY — nudge left-right / up-down (% of product box)
        //   groundBottom — sit the bottle base on the banner's bottom edge
        // NOTE: the product PNGs are 1220×1220 SQUARE canvases with the bottle drawn
        // inside, so `productAspect` is 1/1 and the bottle only fills ~84–92% of the
        // box height — hence productHeight runs higher than the bottle's visual size.
        // productShiftX pushes the box back toward its side to cancel the canvas's
        // transparent side padding (~18–30%).
        // MOBILE: the banner is much narrower, so the bottle needs to be bigger
        // relative to it and sit OVER the wording (no side shift) — matching the
        // mobile reference. Hence `mobile: { productHeight, productShiftX: "0%" }`.
        // 220 mL — MINI BOOSTER (bottle right, centred)
        { bg: "/brand/vica/showcase/1-2.png", product: "/brand/vica/showcase/1-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "93%", side: "right", productShiftX: "-15%",
          mobile: { productHeight: "112%", productShiftX: "-5%" } },
        // 330 mL — POCKET FRESH (bottle left, centred)
        { bg: "/brand/vica/showcase/2-2.png", product: "/brand/vica/showcase/2-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "90%", side: "left", productShiftX: "25%",
          mobile: { productHeight: "106%", productShiftX: "20%" } },
        // 600 mL — DAILY BUDDY (bottle right, grounded)
        { bg: "/brand/vica/showcase/3-2.png", product: "/brand/vica/showcase/3-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "88%", side: "right", productShiftX: "-20%", groundBottom: true,
          mobile: { productHeight: "106%", productShiftX: "-10%" } },
        // 1010 mL — LONGER HYDRATION (bottle left, grounded)
        { bg: "/brand/vica/showcase/4-2.png", product: "/brand/vica/showcase/4-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "92%", side: "left", productShiftX: "18%", groundBottom: true,
          mobile: { productHeight: "106%", productShiftX: "15%" } },
        // 1500 mL — ALL-DAY HYDRATION (bottle right, grounded)
        { bg: "/brand/vica/showcase/5-2.png", product: "/brand/vica/showcase/5-1.png", bgAspect: "1080 / 465", productAspect: "1 / 1", productHeight: "93%", side: "right", productShiftX: "-16%", groundBottom: true,
          mobile: { productHeight: "106%", productShiftX: "-5%" } },
      ],
    },
  };

export default entry;
