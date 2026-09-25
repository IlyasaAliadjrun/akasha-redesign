import type { Localized } from "@/lib/locale/paths";

export const CONTACT_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string>; subtitle: Localized<string> };
  customerCare: { label: Localized<string>; hours: Localized<string> };
  email: { label: Localized<string>; note: Localized<string> };
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
      en: "Get in touch with PT Akasha Wira International Tbk — customer care, our Jakarta head office, media and investor relations, and the official online shop.",
      id: "Hubungi PT Akasha Wira International Tbk — layanan pelanggan, kantor pusat di Jakarta, media dan hubungan investor, serta toko online resmi kami.",
    },
  },
  hero: {
    title: {
      en: "Say hello.",
      id: "Say hello.",
    },
    subtitle: {
      en: "Get in touch with us today. Don't hesitate to ask us anything!",
      id: "Hubungi kami sekarang juga. Jangan ragu untuk bertanya apa pun!",
    },
  },
  customerCare: {
    label: {
      en: "Customer Care",
      id: "Customer Care",
    },
    hours: {
      en: "Monday–Friday, 09:00–18:00 WIB",
      id: "Senin–Jumat, 09.00–18.00 WIB",
    },
  },
  email: {
    label: {
      en: "Email",
      id: "Email",
    },
    note: {
      en: "For general enquiries, media, and partnerships.",
      id: "Untuk pertanyaan umum, media, dan kerja sama.",
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
      en: "Shop our brands directly.",
      id: "Belanja brand kami secara langsung.",
    },
  },
  investorRelations: {
    label: {
      en: "Investor Relations",
      id: "Investor Relations",
    },
    body: {
      en: "Financial statements, annual and sustainability reports, GMS documents, and information disclosure are published in full on the Investor Centre and Governance pages.",
      id: "Laporan keuangan, laporan tahunan dan keberlanjutan, dokumen RUPS, serta keterbukaan informasi tersedia lengkap di halaman Investor Centre dan Governance.",
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
