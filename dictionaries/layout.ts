// Bilingual UI copy for shared layout components (Navbar, Footer, MegaMenu,
// BackToTop). Plain object literals — leaf values are { en, id } pairs
// resolved via the `t()` helper (lib/locale/LocaleProvider or a local
// equivalent in Server Components).

export const NAV = {
  about: { en: "About", id: "Tentang" },
  investor: { en: "Investor", id: "Investor" },
  governance: { en: "Governance", id: "Tata Kelola" },
  careers: { en: "Careers", id: "Karier" },
  contact: { en: "Contact", id: "Kontak" },
  brands: { en: "Brands", id: "Brand" },
  onlineShop: { en: "Online Shop", id: "Belanja Online" },
  menu: { en: "Menu", id: "Menu" },
};

export const MEGA_MENU = {
  // Interpolated around brand.name: `${toggle} ${brand.name} ${subBrands}`
  toggle: { en: "Toggle", id: "Tampilkan" },
  subBrands: { en: "sub-brands", id: "sub-brand" },
};

export const BACK_TO_TOP = {
  backToTop: { en: "Back to top", id: "Kembali ke atas" },
};

export const FOOTER = {
  brandsHeading: { en: "Brands", id: "Brand" },
  companyHeading: { en: "Company", id: "Perusahaan" },
  investorHeading: { en: "Investor Centre", id: "Pusat Investor" },
  financialHighlights: { en: "Financial Highlights", id: "Ikhtisar Keuangan" },
  chronologicalShare: { en: "Chronological Share", id: "Kronologis Saham" },
  stockInfo: { en: "Stock Info (IDX: ADES)", id: "Info Saham (IDX: ADES)" },
  governanceGcg: { en: "Governance (GCG)", id: "Tata Kelola (GCG)" },
  csr: { en: "CSR", id: "CSR" },
  connectHeading: { en: "Connect", id: "Terhubung" },
  customerCare: { en: "Customer Care", id: "Layanan Pelanggan" },
  copyright: {
    en: "© 2026 PT Akasha Wira International Tbk · IDX: ADES · Since 1985",
    id: "© 2026 PT Akasha Wira International Tbk · IDX: ADES · Sejak 1985",
  },
};
