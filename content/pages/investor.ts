import type { Localized } from "@/lib/locale/paths";

type DocArchiveCopy = {
  eyebrow: Localized<string>;
  heading: Localized<string>;
  paragraph: Localized<string>;
};

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
    // Rentang tahun ditempelkan di komponen dari FINANCIAL_YEARS, bukan
    // ditulis ulang di sini, supaya tidak ikut basi saat data diperbarui.
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
      totalLiabilities: Localized<string>;
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
  // Nama bulan ditulis manual, bukan lewat Intl, supaya render server dan
  // klien tidak bisa berbeda kalau ICU di runtime berbeda.
  monthsShort: Localized<string[]>;
  trillionUnit: Localized<string>;
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
      authorizedShares: { k: Localized<string>; unit: Localized<string> };
      outstandingShares: { k: Localized<string>; unit: Localized<string> };
      registrar: { k: Localized<string> };
    };
    shareholders: {
      heading: Localized<string>;
      sharesUnit: Localized<string>;
    };
    daily: {
      label: Localized<string>;
      lastClose: Localized<string>;
      periodChange: Localized<string>;
      marketCap: Localized<string>;
      asOf: Localized<string>;
      chart: {
        close: Localized<string>;
        axis: Localized<string>;
        summary: Localized<string>;
      };
      dailyTable: Localized<string>;
      note: Localized<string>;
    };
  };
  dividends: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    paragraph: Localized<string>;
    columns: {
      year: Localized<string>;
      total: Localized<string>;
      shares: Localized<string>;
      perShare: Localized<string>;
    };
  };
  annualReports: DocArchiveCopy;
  financialReports: DocArchiveCopy & { letterLabel: Localized<string> };
  sustainabilityReports: DocArchiveCopy;
  archiveDownloadLabel: Localized<string>;
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
      label: { en: "Net Sales", id: "Penjualan Bersih" },
    },
    netIncome: {
      label: { en: "Net Income", id: "Laba Bersih" },
    },
    eps: {
      label: { en: "EPS", id: "EPS" },
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
      en: "Financial statements,",
      id: "Laporan keuangan,",
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
      totalLiabilities: { en: "Total Liabilities", id: "Total Liabilitas" },
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
  monthsShort: {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    id: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
  },
  trillionUnit: { en: "trillion", id: "triliun" },
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
      authorizedShares: {
        k: { en: "Authorized Capital", id: "Modal Dasar" },
        unit: { en: "shares", id: "lembar" },
      },
      outstandingShares: {
        k: { en: "Issued & Fully Paid", id: "Modal Ditempatkan & Disetor" },
        unit: { en: "shares", id: "lembar" },
      },
      registrar: {
        k: { en: "Share Registrar", id: "Biro Administrasi Efek" },
      },
    },
    shareholders: {
      heading: { en: "Shareholding structure", id: "Struktur pemegang saham" },
      sharesUnit: { en: "shares", id: "lembar" },
    },
    daily: {
      label: { en: "ADES on the exchange", id: "ADES di lantai bursa" },
      lastClose: { en: "Last close", id: "Penutupan terakhir" },
      periodChange: { en: "Over the period", id: "Sepanjang periode" },
      marketCap: { en: "Market capitalisation", id: "Kapitalisasi pasar" },
      asOf: {
        en: "Daily closing prices through",
        id: "Harga penutupan harian hingga",
      },
      chart: {
        close: { en: "Closing price", id: "Harga penutupan" },
        axis: { en: "Rp per share", id: "Rp per lembar saham" },
        summary: {
          en: "Daily ADES closing price from 23 July to 18 September 2026, ranging from Rp 30,375 to Rp 38,850 and ending at Rp 32,175. Full figures in the table below.",
          id: "Harga penutupan harian ADES dari 23 Juli sampai 18 September 2026, bergerak antara Rp 30.375 dan Rp 38.850 dan ditutup di Rp 32.175. Angka lengkapnya ada di tabel di bawah.",
        },
      },
      dailyTable: { en: "Daily figures", id: "Angka harian" },
      note: {
        en: "The official source publishes this series as a fixed list on the page rather than a live feed, so it is a snapshot that has to be refreshed by hand.",
        id: "Sumber resmi menerbitkan deret ini sebagai daftar tetap di halamannya, bukan umpan langsung — jadi ini potret yang harus diperbarui manual.",
      },
    },
  },
  dividends: {
    eyebrow: { en: "Dividends", id: "Dividen" },
    heading: { en: "Dividend history.", id: "Riwayat dividen." },
    paragraph: {
      en: "Distribution recorded on the company's dividend page. Subsequent years are covered in the annual reports.",
      id: "Pembagian yang tercatat pada halaman dividen perusahaan. Tahun-tahun berikutnya diuraikan di laporan tahunan.",
    },
    columns: {
      year: { en: "Year", id: "Tahun" },
      total: { en: "Total dividend", id: "Total dividen" },
      shares: { en: "Shares", id: "Jumlah saham" },
      perShare: { en: "Per share", id: "Per lembar" },
    },
  },
  annualReports: {
    eyebrow: { en: "Annual report", id: "Laporan tahunan" },
    heading: { en: "Annual reports.", id: "Laporan tahunan." },
    paragraph: {
      en: "Management review, financial performance, governance, and social responsibility — one volume per financial year.",
      id: "Tinjauan manajemen, kinerja keuangan, tata kelola, dan tanggung jawab sosial — satu jilid per tahun buku.",
    },
  },
  financialReports: {
    eyebrow: { en: "Financial report", id: "Laporan keuangan" },
    heading: { en: "Financial statements.", id: "Laporan keuangan." },
    paragraph: {
      en: "Audited year-end statements and interim statements for each quarter, back to the 2012 financial year.",
      id: "Laporan audited akhir tahun dan laporan interim tiap kuartal, hingga tahun buku 2012.",
    },
    // Surat penjelasan OJK atas perubahan jumlah aset lebih dari 20%.
    letterLabel: {
      en: "Letter on change of assets",
      id: "Surat penjelasan OJK",
    },
  },
  sustainabilityReports: {
    eyebrow: { en: "Sustainability report", id: "Laporan keberlanjutan" },
    heading: { en: "Sustainability reports.", id: "Laporan keberlanjutan." },
    paragraph: {
      en: "Annual reporting on environmental, social, and governance performance, published since the 2021 financial year.",
      id: "Pelaporan tahunan atas kinerja lingkungan, sosial, dan tata kelola, terbit sejak tahun buku 2021.",
    },
  },
  archiveDownloadLabel: { en: "Download PDF", id: "Unduh PDF" },
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
