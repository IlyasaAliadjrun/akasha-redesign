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
  };
  csr: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
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
      en: "Corporate governance of PT Akasha Wira International Tbk — Articles of Association, Board of Directors & Commissioners Charter, CSR, and information disclosure.",
      id: "Tata kelola perusahaan PT Akasha Wira International Tbk — Anggaran Dasar, Charter Direksi & Komisaris, CSR, dan keterbukaan informasi.",
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
      en: "Sustainable contributions to the environment, health, education, and community empowerment around our areas of operation.",
      id: "Kontribusi berkelanjutan kepada lingkungan, kesehatan, pendidikan, dan pemberdayaan masyarakat di sekitar area operasi kami.",
    },
    cta: {
      en: "Latest CSR Report",
      id: "Laporan CSR Terbaru",
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
