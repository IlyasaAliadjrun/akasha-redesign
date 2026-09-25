import type { Localized } from "@/lib/locale/paths";

export const CONTACT_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string> };
  customerCare: { label: Localized<string>; note: Localized<string> };
  email: { label: Localized<string> };
  headOffice: {
    label: Localized<string>;
    company: string; // proper noun, not localized
    street: string; // alamat resmi, sama di kedua bahasa
    district: Localized<string>;
    city: string;
  };
  onlineShop: { label: Localized<string>; note: Localized<string> };
  investorRelations: {
    label: Localized<string>;
    body: Localized<string>;
    investorLink: Localized<string>;
    governanceLink: Localized<string>;
  };
} = {
  meta: {
    title: {
      en: "Contact us — Akasha Wira International",
      id: "Hubungi kami — Akasha Wira International",
    },
    description: {
      en: "Contact PT Akasha Wira International Tbk — WhatsApp (text only), email, our head office address in Jakarta Selatan, and the official online shop.",
      id: "Hubungi PT Akasha Wira International Tbk — WhatsApp (hanya pesan teks), email, alamat kantor pusat di Jakarta Selatan, dan toko online resmi kami.",
    },
  },
  hero: {
    title: {
      en: "Contact us.",
      id: "Hubungi kami.",
    },
  },
  customerCare: {
    label: {
      en: "WhatsApp",
      id: "WhatsApp",
    },
    // The official contact page: "WhatsApp Number … (text only)".
    note: {
      en: "Text messages only",
      id: "Hanya pesan teks",
    },
  },
  email: {
    label: {
      en: "Email",
      id: "Email",
    },
  },
  headOffice: {
    label: {
      en: "Head Office",
      id: "Kantor Pusat",
    },
    company: "PT Akasha Wira International Tbk",
    street: "Jl. TB. Simatupang Kav. 89, RT 01 RW 02",
    district: {
      en: "Tanjung Barat, Jagakarsa",
      id: "Kel. Tanjung Barat, Kec. Jagakarsa",
    },
    city: "Jakarta Selatan 12530",
  },
  onlineShop: {
    label: {
      en: "Online Shop",
      id: "Online Shop",
    },
    note: {
      en: "Official online shop",
      id: "Toko online resmi",
    },
  },
  investorRelations: {
    label: {
      en: "Investor Centre",
      id: "Investor Centre",
    },
    body: {
      en: "Financial statements, annual and sustainability reports, GMS documents, and information disclosure are on the Investor Centre and Governance pages.",
      id: "Laporan keuangan, laporan tahunan dan keberlanjutan, dokumen RUPS, serta keterbukaan informasi ada di halaman Investor Centre dan Governance.",
    },
    investorLink: {
      en: "Investor Centre",
      id: "Investor Centre",
    },
    governanceLink: {
      en: "Governance",
      id: "Governance",
    },
  },
};
