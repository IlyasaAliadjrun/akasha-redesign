import type { Localized } from "@/lib/locale/paths";

export const GOVERNANCE_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string> };
  documents: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    downloadLabel: Localized<string>;
    viewLabel: Localized<string>;
  };
  gms: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    documentsLabel: Localized<string>;
  };
  disclosure: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
  };
  announcement: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
  };
  csr: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    reportsLabel: Localized<string>;
    reportRef: Localized<string>;
    cta: Localized<string>;
  };
  investorCta: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    linkText: Localized<string>;
  };
} = {
  meta: {
    title: {
      en: "Good corporate governance — Akasha Wira International",
      id: "Tata kelola perusahaan — Akasha Wira International",
    },
    description: {
      en: "Governance at PT Akasha Wira International Tbk — Articles of Association, board charters, CSR, GMS documents and information disclosure.",
      id: "Tata kelola perusahaan PT Akasha Wira International Tbk — Anggaran Dasar, Charter Direksi & Komisaris, CSR, dokumen RUPS, dan keterbukaan informasi.",
    },
  },
  hero: {
    title: {
      en: "Good corporate governance.",
      id: "Tata kelola perusahaan.",
    },
  },
  documents: {
    eyebrow: {
      en: "Documents & Policies",
      id: "Dokumen & Kebijakan",
    },
    heading: {
      en: "Governance documents.",
      id: "Dokumen tata kelola.",
    },
    downloadLabel: {
      en: "Download PDF",
      id: "Unduh PDF",
    },
    viewLabel: {
      en: "View section",
      id: "Lihat bagian",
    },
  },
  gms: {
    eyebrow: {
      en: "General Meeting of Shareholders",
      id: "Rapat Umum Pemegang Saham",
    },
    heading: {
      en: "GMS documents, 2015–2026.",
      id: "Dokumen RUPS, 2015–2026.",
    },
    paragraph: {
      en: "Notices, invitations, agenda material, meeting rules, powers of attorney and summaries of the minutes of the General Meeting of Shareholders, 2015–2026.",
      id: "Pemberitahuan, panggilan, materi mata acara, tata tertib, surat kuasa, dan ringkasan risalah Rapat Umum Pemegang Saham, 2015–2026.",
    },
    documentsLabel: {
      en: "documents",
      id: "dokumen",
    },
  },
  disclosure: {
    eyebrow: {
      en: "Disclosure information",
      id: "Keterbukaan informasi",
    },
    heading: {
      en: "Disclosure documents.",
      id: "Dokumen keterbukaan informasi.",
    },
    paragraph: {
      en: "Information disclosures published by the company — corporate actions, changes to the boards, public expose, and feasibility studies.",
      id: "Keterbukaan informasi yang dipublikasikan perusahaan — aksi korporasi, perubahan susunan pengurus, paparan publik, dan studi kelayakan.",
    },
  },
  announcement: {
    eyebrow: {
      en: "Announcement",
      id: "Pengumuman",
    },
    heading: {
      en: "Announcements.",
      id: "Pengumuman.",
    },
    paragraph: {
      en: "Announcements published by the company.",
      id: "Pengumuman yang diterbitkan perusahaan.",
    },
  },
  csr: {
    eyebrow: {
      en: "Corporate Social Responsibility",
      id: "Tanggung Jawab Sosial Perusahaan",
    },
    heading: {
      en: "CSR programmes.",
      id: "Program CSR.",
    },
    paragraph: {
      en: "Sustainable contributions to the environment, health, education, and community empowerment around our areas of operation. The 2016–2021 programmes can be read in each year's Annual Report.",
      id: "Kontribusi berkelanjutan kepada lingkungan, kesehatan, pendidikan, dan pemberdayaan masyarakat di sekitar area operasi kami. Program 2016–2021 dapat dibaca di Laporan Tahunan masing-masing tahun.",
    },
    reportsLabel: {
      en: "Where to read it",
      id: "Tempat membacanya",
    },
    // Dirangkai di komponen: "Annual Report 2021 · page 79".
    reportRef: {
      en: "page",
      id: "halaman",
    },
    cta: {
      en: "Latest sustainability report",
      id: "Laporan keberlanjutan terbaru",
    },
  },
  investorCta: {
    eyebrow: {
      en: "Investor Centre",
      id: "Investor Centre",
    },
    heading: {
      en: "View Akasha Wira International financial performance.",
      id: "Lihat performa keuangan Akasha Wira International.",
    },
    linkText: {
      en: "Go to Investor Centre",
      id: "Ke Investor Centre",
    },
  },
};
