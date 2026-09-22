import type { Localized } from "@/lib/locale/paths";

export const GOVERNANCE_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string>; subtitle: Localized<string> };
  principles: { eyebrow: Localized<string>; heading: Localized<string> };
  structure: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    cards: {
      title: Localized<string>;
      subtitle: Localized<string>;
      description: Localized<string>;
    }[];
  };
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
      en: "Good Corporate Governance — Akasha Wira International",
      id: "Tata Kelola Perusahaan yang Baik — Akasha Wira International",
    },
    description: {
      en: "Corporate governance of PT Akasha Wira International Tbk — Articles of Association, Board of Directors & Commissioners Charter, CSR, GMS documents, and information disclosure.",
      id: "Tata kelola perusahaan PT Akasha Wira International Tbk — Anggaran Dasar, Charter Direksi & Komisaris, CSR, dokumen RUPS, dan keterbukaan informasi.",
    },
  },
  hero: {
    title: {
      en: "Governance that builds trust.",
      id: "Tata kelola yang membangun kepercayaan.",
    },
    subtitle: {
      en: "A commitment to five principles — transparency, accountability, responsibility, independency, and fairness — in every corporate decision.",
      id: "Komitmen pada lima prinsip — transparansi, akuntabilitas, responsibilitas, independensi, dan fairness — dalam setiap keputusan perusahaan.",
    },
  },
  principles: {
    eyebrow: {
      en: "Five principles",
      id: "Lima prinsip",
    },
    heading: {
      en: "TARIF — five GCG principles.",
      id: "TARIF — lima prinsip GCG.",
    },
  },
  structure: {
    eyebrow: {
      en: "Governance structure",
      id: "Struktur tata kelola",
    },
    heading: {
      en: "Corporate organs.",
      id: "Organ perusahaan.",
    },
    paragraph: {
      en: "A two-tier structure under Indonesia's Limited Liability Company Law — separating the management function from the oversight function.",
      id: "Struktur dua-tingkat sesuai UU Perseroan Terbatas Indonesia — memisahkan fungsi pengelolaan dan pengawasan.",
    },
    cards: [
      {
        title: {
          en: "General Meeting of Shareholders",
          id: "General Meeting of Shareholders",
        },
        subtitle: {
          en: "Highest authority",
          id: "Otoritas tertinggi",
        },
        description: {
          en: "Strategic decisions such as approving annual reports, dividend distribution, and the appointment of the Board of Directors and Board of Commissioners.",
          id: "Keputusan strategis seperti persetujuan laporan tahunan, pembagian dividen, dan pengangkatan Direksi serta Komisaris.",
        },
      },
      {
        title: {
          en: "Board of Commissioners",
          id: "Board of Commissioners",
        },
        subtitle: {
          en: "Oversight",
          id: "Pengawasan",
        },
        description: {
          en: "Oversees the management carried out by the Board of Directors and provides advice to the Board of Directors.",
          id: "Mengawasi jalannya kepengurusan oleh Direksi dan memberi nasihat kepada Direksi.",
        },
      },
      {
        title: {
          en: "Board of Directors",
          id: "Board of Directors",
        },
        subtitle: {
          en: "Management",
          id: "Pengelolaan",
        },
        description: {
          en: "Runs the management of the company for the benefit and purposes of the company.",
          id: "Menjalankan pengurusan perusahaan untuk kepentingan dan tujuan perseroan.",
        },
      },
    ],
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
      en: "Every meeting, on the record.",
      id: "Setiap rapat, tercatat.",
    },
    paragraph: {
      en: "Notice, invitation, agenda material, meeting rules, power of attorney, and summary of the minutes — published for every annual and extraordinary meeting since 2015.",
      id: "Pemberitahuan, panggilan, materi mata acara, tata tertib, surat kuasa, dan ringkasan risalah — dipublikasikan untuk setiap RUPS tahunan dan luar biasa sejak 2015.",
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
      en: "Material information, disclosed.",
      id: "Informasi material, dibuka.",
    },
    paragraph: {
      en: "Disclosures submitted to the Financial Services Authority and the Indonesia Stock Exchange — corporate actions, changes to the boards, public expose, and feasibility studies.",
      id: "Keterbukaan yang disampaikan kepada Otoritas Jasa Keuangan dan Bursa Efek Indonesia — aksi korporasi, perubahan susunan pengurus, paparan publik, dan studi kelayakan.",
    },
  },
  announcement: {
    eyebrow: {
      en: "Announcement",
      id: "Pengumuman",
    },
    heading: {
      en: "Official announcements.",
      id: "Pengumuman resmi.",
    },
    paragraph: {
      en: "Announcements published by the company to shareholders and the public.",
      id: "Pengumuman yang diterbitkan perusahaan kepada pemegang saham dan publik.",
    },
  },
  csr: {
    eyebrow: {
      en: "Corporate Social Responsibility",
      id: "Tanggung Jawab Sosial Perusahaan",
    },
    heading: {
      en: "Growing together with the community.",
      id: "Tumbuh bersama komunitas.",
    },
    paragraph: {
      en: "Sustainable contributions to the environment, health, education, and community empowerment around our areas of operation. Each year's programme is reported as a chapter of the Annual Report.",
      id: "Kontribusi berkelanjutan kepada lingkungan, kesehatan, pendidikan, dan pemberdayaan masyarakat di sekitar area operasi kami. Program tiap tahun dilaporkan sebagai bab dalam Laporan Tahunan.",
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
      en: "View ADES's financial performance.",
      id: "Lihat performa keuangan ADES.",
    },
    linkText: {
      en: "Go to Investor Centre",
      id: "Ke Investor Centre",
    },
  },
};
