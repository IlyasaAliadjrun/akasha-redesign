import type { Localized } from "@/lib/locale/paths";

export const INVESTOR_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string>; subtitle: Localized<string> };
  metrics: {
    netSales: { label: Localized<string> };
    netIncome: { label: Localized<string> };
    eps: { label: Localized<string>; sub: Localized<string> };
    outstandingShares: { label: Localized<string>; sub: Localized<string> };
  };
  chart: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    legendNetSales: Localized<string>;
    legendNetIncome: Localized<string>;
  };
  table: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    metricHeader: Localized<string>;
    rows: {
      netSales: Localized<string>;
      grossProfit: Localized<string>;
      operatingIncome: Localized<string>;
      netIncome: Localized<string>;
      eps: Localized<string>;
      totalAssets: Localized<string>;
      totalEquity: Localized<string>;
      currentRatio: Localized<string>;
    };
    ratios: {
      roa: Localized<string>;
      roe: Localized<string>;
      grossMargin: Localized<string>;
      operatingMargin: Localized<string>;
      netMargin: Localized<string>;
    };
    avgLabel: Localized<string>;
  };
  chronological: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    unit: Localized<string>;
    parLabel: Localized<string>;
  };
  stockInfo: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    rows: {
      ticker: { k: Localized<string>; v: Localized<string> };
      exchange: { k: Localized<string>; v: Localized<string> };
      ipoDate: { k: Localized<string>; v: Localized<string> };
      sector: { k: Localized<string>; v: Localized<string> };
      parValue: { k: Localized<string>; v: Localized<string> };
      outstandingShares: { k: Localized<string>; unit: Localized<string> };
    };
  };
  resources: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    viewLink: Localized<string>;
  };
  governanceCta: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    link: Localized<string>;
  };
} = {
  meta: {
    title: {
      en: "Investor Centre — Akasha Wira International",
      id: "Investor Centre — Akasha Wira International",
    },
    description: {
      en: "Share information, financial statements, capital structure, and governance of PT Akasha Wira International Tbk (IDX: ADES).",
      id: "Informasi saham, laporan keuangan, struktur permodalan, dan tata kelola PT Akasha Wira International Tbk (IDX: ADES).",
    },
  },
  hero: {
    title: {
      en: "Investor centre.",
      id: "Investor centre.",
    },
    subtitle: {
      en: "Financial performance, share structure, and information disclosure for shareholders and the public.",
      id: "Performa keuangan, struktur saham, dan keterbukaan informasi untuk pemegang saham dan publik.",
    },
  },
  metrics: {
    netSales: {
      label: { en: "Net Sales 2024", id: "Penjualan Bersih 2024" },
    },
    netIncome: {
      label: { en: "Net Income 2024", id: "Laba Bersih 2024" },
    },
    eps: {
      label: { en: "EPS 2024", id: "EPS 2024" },
      sub: { en: "per share", id: "per lembar saham" },
    },
    outstandingShares: {
      label: { en: "Outstanding Shares", id: "Saham Beredar" },
      sub: {
        en: "shares · par value Rp 1,000",
        id: "lembar · par Rp 1.000",
      },
    },
  },
  chart: {
    eyebrow: { en: "Financial Highlights", id: "Ikhtisar Keuangan" },
    heading: { en: "Five-year growth.", id: "Pertumbuhan lima tahun." },
    legendNetSales: { en: "Net Sales", id: "Penjualan Bersih" },
    legendNetIncome: { en: "Net Income", id: "Laba Bersih" },
  },
  table: {
    eyebrow: { en: "Consolidated figures", id: "Angka konsolidasian" },
    heading: {
      en: "Financial statements, 2020–2024.",
      id: "Laporan keuangan, 2020–2024.",
    },
    paragraph: {
      en: "Figures in Rp million except EPS (Rp) and ratios (%).",
      id: "Angka dalam Rp juta kecuali EPS (Rp) dan rasio (%).",
    },
    metricHeader: { en: "Metric", id: "Metrik" },
    rows: {
      netSales: { en: "Net Sales", id: "Penjualan Bersih" },
      grossProfit: { en: "Gross Profit", id: "Laba Kotor" },
      operatingIncome: { en: "Operating Income", id: "Laba Operasional" },
      netIncome: { en: "Net Income", id: "Laba Bersih" },
      eps: { en: "EPS (Rp)", id: "EPS (Rp)" },
      totalAssets: { en: "Total Assets", id: "Total Aset" },
      totalEquity: { en: "Total Equity", id: "Total Ekuitas" },
      currentRatio: { en: "Current Ratio", id: "Rasio Lancar" },
    },
    ratios: {
      roa: { en: "ROA", id: "ROA" },
      roe: { en: "ROE", id: "ROE" },
      grossMargin: { en: "Gross Margin", id: "Margin Kotor" },
      operatingMargin: { en: "Operating Margin", id: "Margin Operasional" },
      netMargin: { en: "Net Margin", id: "Margin Bersih" },
    },
    avgLabel: { en: "5Y avg:", id: "Rata-rata 5T:" },
  },
  chronological: {
    eyebrow: { en: "Chronological share", id: "Kronologi saham" },
    heading: {
      en: "From 15 million to 589 million shares.",
      id: "Dari 15 juta jadi 589 juta lembar.",
    },
    paragraph: {
      en: "The journey of ADES's capitalization on the Indonesia Stock Exchange since its 1994 IPO.",
      id: "Perjalanan permodalan ADES di Bursa Efek Indonesia sejak IPO 1994.",
    },
    unit: { en: "shares", id: "lembar" },
    parLabel: { en: "par value", id: "par value" },
  },
  stockInfo: {
    eyebrow: { en: "Stock information", id: "Informasi saham" },
    heading: { en: "Capitalization & shares.", id: "Permodalan & saham." },
    paragraph: {
      en: "ADES has been listed on the Indonesia Stock Exchange since 31 March 1994, with a par value of Rp 1,000 per share.",
      id: "ADES tercatat di Bursa Efek Indonesia sejak 31 Maret 1994 dengan nilai nominal Rp 1.000 per lembar saham.",
    },
    rows: {
      ticker: {
        k: { en: "Ticker", id: "Ticker" },
        v: { en: "ADES", id: "ADES" },
      },
      exchange: {
        k: { en: "Exchange", id: "Bursa" },
        v: {
          en: "Indonesia Stock Exchange (IDX)",
          id: "Indonesia Stock Exchange (IDX)",
        },
      },
      ipoDate: {
        k: { en: "IPO Date", id: "IPO Date" },
        v: { en: "31 March 1994", id: "31 Maret 1994" },
      },
      sector: {
        k: { en: "Sector", id: "Sektor" },
        v: { en: "Consumer Non-Cyclicals", id: "Consumer Non-Cyclicals" },
      },
      parValue: {
        k: { en: "Par Value", id: "Nilai Nominal" },
        v: { en: "Rp 1,000 per share", id: "Rp 1.000 per lembar" },
      },
      outstandingShares: {
        k: { en: "Outstanding Shares", id: "Outstanding Shares" },
        unit: { en: "shares", id: "lembar" },
      },
    },
  },
  resources: {
    eyebrow: { en: "Resources", id: "Sumber daya" },
    heading: {
      en: "All investor documents.",
      id: "Semua dokumen investor.",
    },
    viewLink: { en: "View ›", id: "Lihat ›" },
  },
  governanceCta: {
    eyebrow: {
      en: "Good corporate governance",
      id: "Tata kelola perusahaan yang baik",
    },
    heading: {
      en: "Governance principles that underpin every decision.",
      id: "Prinsip tata kelola yang menopang setiap keputusan.",
    },
    paragraph: {
      en: "TARIF — Transparency, Accountability, Responsibility, Independency, Fairness.",
      id: "TARIF — Transparansi, Akuntabilitas, Responsibilitas, Independensi, Fairness.",
    },
    link: { en: "View the governance page", id: "Lihat halaman governance" },
  },
};
