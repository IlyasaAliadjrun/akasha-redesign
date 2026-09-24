// Data resmi dari akashainternational.com (PT Akasha Wira International Tbk, IDX: ADES)
import type { Localized } from "@/lib/locale/paths";

export const FINANCIAL_YEARS = [2025, 2024, 2023, 2022, 2021] as const;

// Angka dalam Rp juta, kecuali EPS (Rp)
export const FINANCIALS = {
  netSales:         [2_726_974, 1_956_431, 1_525_445, 1_290_992,   935_075],
  grossProfit:      [1_430_497, 1_006_211,   810_936,   670_752,   499_568],
  operatingIncome:  [  885_670,   629_638,   484_693,   452_537,   328_221],
  netIncome:        [  741_580,   527_368,   395_798,   364_972,   265_758],
  eps:              [    1_257,       894,       671,       619,       451], // Rp
  totalAssets:      [3_568_781, 2_696_874, 2_085_182, 1_645_582, 1_304_108],
  totalLiabilities: [  568_078,   438_373,   355_374,   310_746,   334_291],
  totalEquity:      [3_000_703, 2_258_501, 1_729_808, 1_334_836,   969_817],
  currentRatio:     [     4.04,      4.04,      4.12,      3.20,      2.51],
};

export const RATIOS = {
  roa:             [21, 20, 19, 22, 20], // Net Income / Total Assets (%)
  roe:             [25, 23, 23, 27, 27], // Net Income / Total Equity (%)
  grossMargin:     [52, 51, 53, 52, 53],
  operatingMargin: [32, 32, 32, 35, 35],
  netMargin:       [27, 27, 26, 28, 28],
};

export const SHARE_ACTIONS: {
  date: Localized<string>;
  action: Localized<string>;
  shares: string;
  par: string;
}[] = [
  {
    date: { en: "31 Mar 1994", id: "31 Mar 1994" },
    action: { en: "Initial Public Offering (IPO)", id: "Penawaran Umum Perdana (IPO)" },
    shares: "15.000.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "31 Mar 1994", id: "31 Mar 1994" },
    action: { en: "Listing of Founders Shares", id: "Pencatatan Saham Pendiri" },
    shares: "23.000.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "4 Aug 1997", id: "4 Agu 1997" },
    action: { en: "Bonus Share Issuance (100 : 294)", id: "Penerbitan Saham Bonus (100 : 294)" },
    shares: "38.000.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "16 Jul 2004", id: "16 Jul 2004" },
    action: { en: "Rights Issue I (100 : 97)", id: "Penawaran Umum Terbatas I (100 : 97)" },
    shares: "73.720.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "5 Dec 2007", id: "5 Des 2007" },
    action: { en: "Rights Issue II", id: "Penawaran Umum Terbatas II" },
    shares: "440.176.800",
    par: "Rp 1.000",
  },
];

export const OUTSTANDING_SHARES = "589.896.800";
export const AUTHORIZED_SHARES = "2.359.587.200";
export const SHARE_REGISTRAR = "PT Raya Saham Registra";

// Tanggal berlakunya angka permodalan & pemegang saham di bawah ini.
export const SHAREHOLDING_AS_OF: Localized<string> = {
  en: "as of 31 December 2025",
  id: "per 31 Desember 2025",
};

export const SHAREHOLDERS: {
  name: Localized<string>;
  shares: string;
  percent: string;
  ratio: number; // lebar bar, 0–1
}[] = [
  {
    name: { en: "Waters Partners Bottling S.A.", id: "Waters Partners Bottling S.A." },
    shares: "538.896.713",
    percent: "91,35%",
    ratio: 0.9135,
  },
  {
    name: { en: "Public", id: "Publik" },
    shares: "51.000.087",
    percent: "8,65%",
    ratio: 0.0865,
  },
];

export const OUTSTANDING_SHARES_COUNT = 589_896_800;

// Harga penutupan harian, disalin dari grafik ApexCharts di halaman Stock
// Information. Sumbernya menuliskan deret ini inline di HTML dan memperbaruinya
// secara manual — jadi ini POTRET, bukan umpan langsung. Perbarui bersama
// SHARE_PRICE_DAILY_AS_OF setiap kali arsip ditarik ulang.
export const SHARE_PRICE_DAILY_AS_OF = { year: 2026, month: 9, day: 18 };

export const SHARE_PRICE_DAILY: { month: number; day: number; close: number }[] = [
  { month: 7, day: 23, close: 35_400 },
  { month: 7, day: 24, close: 36_275 },
  { month: 7, day: 27, close: 38_850 },
  { month: 7, day: 28, close: 38_425 },
  { month: 7, day: 29, close: 37_800 },
  { month: 7, day: 30, close: 37_250 },
  { month: 7, day: 31, close: 34_000 },
  { month: 8, day: 3, close: 31_000 },
  { month: 8, day: 4, close: 30_375 },
  { month: 8, day: 5, close: 33_400 },
  { month: 8, day: 6, close: 35_000 },
  { month: 8, day: 7, close: 35_000 },
  { month: 8, day: 10, close: 33_000 },
  { month: 8, day: 11, close: 32_850 },
  { month: 8, day: 12, close: 32_900 },
  { month: 8, day: 13, close: 32_850 },
  { month: 8, day: 14, close: 32_900 },
  { month: 8, day: 18, close: 32_850 },
  { month: 8, day: 19, close: 32_825 },
  { month: 8, day: 20, close: 33_000 },
  { month: 8, day: 21, close: 32_750 },
  { month: 8, day: 24, close: 32_750 },
  { month: 8, day: 26, close: 32_600 },
  { month: 8, day: 27, close: 32_375 },
  { month: 8, day: 28, close: 32_325 },
  { month: 8, day: 31, close: 32_300 },
  { month: 9, day: 1, close: 32_125 },
  { month: 9, day: 2, close: 31_950 },
  { month: 9, day: 3, close: 31_850 },
  { month: 9, day: 4, close: 31_800 },
  { month: 9, day: 7, close: 31_550 },
  { month: 9, day: 8, close: 31_500 },
  { month: 9, day: 9, close: 31_325 },
  { month: 9, day: 10, close: 31_275 },
  { month: 9, day: 11, close: 32_000 },
  { month: 9, day: 14, close: 32_000 },
  { month: 9, day: 15, close: 32_000 },
  { month: 9, day: 16, close: 31_975 },
  { month: 9, day: 17, close: 32_500 },
  { month: 9, day: 18, close: 32_175 },
];

export function dailySharePriceSummary() {
  const first = SHARE_PRICE_DAILY[0];
  const last = SHARE_PRICE_DAILY[SHARE_PRICE_DAILY.length - 1];
  const closes = SHARE_PRICE_DAILY.map((d) => d.close);
  return {
    last: last.close,
    first: first.close,
    changePercent: ((last.close - first.close) / first.close) * 100,
    high: Math.max(...closes),
    low: Math.min(...closes),
    marketCap: last.close * OUTSTANDING_SHARES_COUNT,
  };
}

export const DIVIDEND_HISTORY: {
  year: string;
  total: string;
  shares: string;
  perShare: string;
}[] = [
  {
    year: "1995",
    total: "Rp 760.000.000",
    shares: "38.000.000",
    perShare: "Rp 20",
  },
];

// ---------------------------------------------------------------------------
// Arsip dokumen
//
// Setiap `file` menunjuk ke public/documents/, `cover` ke public/media/reports/.
// Penamaan baku (lihat docs/PANDUAN-ASET.md §2):
//   annual-report/{tahun}.pdf · sustainability-report/{tahun}.pdf
//   financial-report/{tahun}/{q1|q2|q3|fy}[-ojk-letter].pdf
//   gms/{tahun}/{slug}.{pdf|doc} · disclosure/{yyyy-mm[-dd]}-{slug}.pdf
// Nama berkas asli dari akashainternational.com tercatat di
// docs/asset-migration-map.json.
// ---------------------------------------------------------------------------

// `cover` = thumbnail sampul laporan, ~16:15, di-crop `object-cover`.
const AR = "/documents/annual-report";

export const ANNUAL_REPORTS: { year: string; file: string; cover: string }[] = [
  {
    year: "2025",
    file: `${AR}/2025.pdf`,
    cover: "/media/reports/annual-report/2025.png",
  },
  {
    year: "2024",
    file: `${AR}/2024.pdf`,
    cover: "/media/reports/annual-report/2024.png",
  },
  {
    year: "2023",
    file: `${AR}/2023.pdf`,
    cover: "/media/reports/annual-report/2023.png",
  },
  {
    year: "2022",
    file: `${AR}/2022.pdf`,
    cover: "/media/reports/annual-report/2022.png",
  },
  {
    year: "2021",
    file: `${AR}/2021.pdf`,
    cover: "/media/reports/annual-report/2021.jpg",
  },
  {
    year: "2020",
    file: `${AR}/2020.pdf`,
    cover: "/media/reports/annual-report/2020.jpg",
  },
  {
    year: "2019",
    file: `${AR}/2019.pdf`,
    cover: "/media/reports/annual-report/2019.jpg",
  },
  {
    year: "2018",
    // Nama berkas sumber tertulis "2108"; isinya laporan tahunan 2018.
    file: `${AR}/2018.pdf`,
    cover: "/media/reports/annual-report/2018.jpg",
  },
  {
    year: "2017",
    file: `${AR}/2017.pdf`,
    cover: "/media/reports/annual-report/2017.png",
  },
  {
    year: "2016",
    file: `${AR}/2016.pdf`,
    cover: "/media/reports/annual-report/2016.png",
  },
  {
    year: "2015",
    file: `${AR}/2015.pdf`,
    cover: "/media/reports/annual-report/2015.png",
  },
  {
    year: "2014",
    file: `${AR}/2014.pdf`,
    cover: "/media/reports/annual-report/2014.png",
  },
  {
    year: "2013",
    file: `${AR}/2013.pdf`,
    cover: "/media/reports/annual-report/2013.png",
  },
  {
    year: "2012",
    file: `${AR}/2012.pdf`,
    cover: "/media/reports/annual-report/2012.png",
  },
];

// Sampul 2023 dan 2024 identik — sumber resmi memang memakai gambar yang sama
// untuk kedua tahun.
export const SUSTAINABILITY_REPORTS: { year: string; file: string; cover: string }[] = [
  {
    year: "2025",
    file: "/documents/sustainability-report/2025.pdf",
    cover: "/media/reports/sustainability-report/2025.png",
  },
  {
    year: "2024",
    file: "/documents/sustainability-report/2024.pdf",
    cover: "/media/reports/sustainability-report/2024.png",
  },
  {
    year: "2023",
    file: "/documents/sustainability-report/2023.pdf",
    cover: "/media/reports/sustainability-report/2023.png",
  },
  {
    year: "2022",
    file: "/documents/sustainability-report/2022.pdf",
    cover: "/media/reports/sustainability-report/2022.png",
  },
  {
    year: "2021",
    file: "/documents/sustainability-report/2021.pdf",
    cover: "/media/reports/sustainability-report/2021.jpg",
  },
];

// `letter` = surat penjelasan OJK atas perubahan jumlah aset lebih dari 20%,
// diterbitkan mendampingi sebagian laporan.
export type FinancialPeriod = {
  label: Localized<string>;
  file: string;
  letter?: string;
};

const FR = "/documents/financial-report";

export const FINANCIAL_REPORT_ARCHIVE: {
  year: string;
  periods: FinancialPeriod[];
}[] = [
  {
    year: "2025",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2025/fy.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2025/q1.pdf`,
      },
    ],
  },
  {
    year: "2024",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2024/fy.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2024/q3.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2024/q2.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2024/q1.pdf`,
      },
    ],
  },
  {
    year: "2023",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2023/fy.pdf`,
        letter: `${FR}/2023/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2023/q3.pdf`,
        letter: `${FR}/2023/q3-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2023/q2.pdf`,
        letter: `${FR}/2023/q2-ojk-letter.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2023/q1.pdf`,
        letter: `${FR}/2023/q1-ojk-letter.pdf`,
      },
    ],
  },
  {
    year: "2022",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2022/fy.pdf`,
        letter: `${FR}/2022/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2022/q3.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2022/q2.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2022/q1.pdf`,
        letter: `${FR}/2022/q1-ojk-letter.pdf`,
      },
    ],
  },
  {
    year: "2021",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2021/fy.pdf`,
        letter: `${FR}/2021/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2021/q3.pdf`,
        letter: `${FR}/2021/q3-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2021/q2.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2021/q1.pdf`,
        letter: `${FR}/2021/q1-ojk-letter.pdf`,
      },
    ],
  },
  {
    year: "2020",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2020/fy.pdf`,
        letter: `${FR}/2020/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2020/q3.pdf`,
        letter: `${FR}/2020/q3-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2020/q2.pdf`,
        letter: `${FR}/2020/q2-ojk-letter.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2020/q1.pdf`,
        letter: `${FR}/2020/q1-ojk-letter.pdf`,
      },
    ],
  },
  {
    year: "2019",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2019/fy.pdf`,
        letter: `${FR}/2019/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2019/q3.pdf`,
        letter: `${FR}/2019/q3-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2019/q2.pdf`,
        letter: `${FR}/2019/q2-ojk-letter.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2019/q1.pdf`,
      },
    ],
  },
  {
    year: "2018",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2018/fy.pdf`,
        letter: `${FR}/2018/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2018/q3.pdf`,
        letter: `${FR}/2018/q3-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2018/q2.pdf`,
        letter: `${FR}/2018/q2-ojk-letter.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2018/q1.pdf`,
        letter: `${FR}/2018/q1-ojk-letter.pdf`,
      },
    ],
  },
  {
    year: "2017",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2017/fy.pdf`,
        letter: `${FR}/2017/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2017/q2.pdf`,
        letter: `${FR}/2017/q2-ojk-letter.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2017/q1.pdf`,
        letter: `${FR}/2017/q1-ojk-letter.pdf`,
      },
    ],
  },
  {
    year: "2016",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2016/fy.pdf`,
        letter: `${FR}/2016/fy-ojk-letter.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2016/q3.pdf`,
        letter: `${FR}/2016/q3-ojk-letter.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2016/q2.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2016/q1.pdf`,
      },
    ],
  },
  {
    year: "2015",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2015/fy.pdf`,
        letter: `${FR}/2015/fy-ojk-letter.pdf`,
      },
      {
        label: {
          en: "Newspaper publication of the 2015 statements",
          id: "Bukti iklan koran laporan keuangan 2015",
        },
        file: `${FR}/2015/fy-newspaper-publication.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2015/q3.pdf`,
      },
      {
        label: { en: "June", id: "Juni" },
        file: `${FR}/2015/q2.pdf`,
      },
      {
        label: { en: "March", id: "Maret" },
        file: `${FR}/2015/q1.pdf`,
      },
    ],
  },
  {
    year: "2014",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2014/fy.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2014/q3.pdf`,
      },
      { label: { en: "June", id: "Juni" }, file: `${FR}/2014/q2.pdf` },
      { label: { en: "March", id: "Maret" }, file: `${FR}/2014/q1.pdf` },
    ],
  },
  {
    year: "2013",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2013/fy.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2013/q3.pdf`,
      },
      { label: { en: "June", id: "Juni" }, file: `${FR}/2013/q2.pdf` },
      { label: { en: "March", id: "Maret" }, file: `${FR}/2013/q1.pdf` },
    ],
  },
  {
    year: "2012",
    periods: [
      {
        label: { en: "December (audited)", id: "Desember (audited)" },
        file: `${FR}/2012/fy.pdf`,
      },
      {
        label: { en: "September", id: "September" },
        file: `${FR}/2012/q3.pdf`,
      },
      { label: { en: "June", id: "Juni" }, file: `${FR}/2012/q2.pdf` },
      { label: { en: "March", id: "Maret" }, file: `${FR}/2012/q1.pdf` },
    ],
  },
];

const GMS = "/documents/gms";

export const GMS_ARCHIVE: {
  year: string;
  date: Localized<string>;
  documents: { label: Localized<string>; file: string }[];
}[] = [
  {
    year: "2026",
    date: { en: "17 June 2026", id: "17 Juni 2026" },
    documents: [
      {
        label: { en: "Announcement of General Meeting", id: "Pengumuman RUPS" },
        file: `${GMS}/2026/announcement-of-general-meeting.pdf`,
      },
      {
        label: { en: "Invitation to the shareholders", id: "Panggilan kepada pemegang saham" },
        file: `${GMS}/2026/invitation-to-the-shareholders.pdf`,
      },
      {
        label: { en: "Meeting agenda material", id: "Materi mata acara rapat" },
        file: `${GMS}/2026/meeting-agenda-material.pdf`,
      },
      {
        label: { en: "Meeting rules for AGMS", id: "Tata tertib RUPST" },
        file: `${GMS}/2026/meeting-rules-for-agms.pdf`,
      },
      {
        label: { en: "Power of attorney for individual", id: "Surat kuasa perorangan" },
        file: `${GMS}/2026/power-of-attorney-for-individual.doc`,
      },
      {
        label: { en: "Curriculum vitae — Mr. Hagi Yufantra", id: "Curriculum vitae — Bapak Hagi Yufantra" },
        file: `${GMS}/2026/curriculum-vitae-mr-hagi-yufantra.pdf`,
      },
      {
        label: { en: "Curriculum vitae — Mr. Rudy Hidayat", id: "Curriculum vitae — Bapak Rudy Hidayat" },
        file: `${GMS}/2026/curriculum-vitae-mr-rudy-hidayat.pdf`,
      },
      {
        label: { en: "Summary of the General Meeting", id: "Risalah RUPS" },
        file: `${GMS}/2026/summary-of-the-general-meeting.pdf`,
      },
    ],
  },
  {
    year: "2025",
    date: { en: "18 June 2025", id: "18 Juni 2025" },
    documents: [
      {
        label: { en: "Announcement of General Meeting", id: "Pengumuman RUPS" },
        file: `${GMS}/2025/announcement-of-general-meeting.pdf`,
      },
      {
        label: { en: "Invitation to the shareholders", id: "Panggilan kepada pemegang saham" },
        file: `${GMS}/2025/invitation-to-the-shareholders.pdf`,
      },
      {
        label: { en: "Meeting agenda material", id: "Materi mata acara rapat" },
        file: `${GMS}/2025/meeting-agenda-material.pdf`,
      },
      {
        label: { en: "Meeting rules for AGMS", id: "Tata tertib RUPST" },
        file: `${GMS}/2025/meeting-rules-for-agms.pdf`,
      },
      {
        label: { en: "Power of attorney for individual", id: "Surat kuasa perorangan" },
        file: `${GMS}/2025/power-of-attorney-for-individual.doc`,
      },
      {
        label: { en: "Summary of the General Meeting", id: "Risalah RUPS" },
        file: `${GMS}/2025/summary-of-the-general-meeting.pdf`,
      },
    ],
  },
  {
    year: "2024",
    date: { en: "12–13 June 2024", id: "12–13 Juni 2024" },
    documents: [
      {
        label: { en: "Announcement of General Meeting", id: "Pengumuman RUPS" },
        file: `${GMS}/2024/announcement-of-general-meeting.pdf`,
      },
      {
        label: { en: "Invitation to the shareholders", id: "Panggilan kepada pemegang saham" },
        file: `${GMS}/2024/invitation-to-the-shareholders.pdf`,
      },
      {
        label: { en: "Meeting agenda material", id: "Materi mata acara rapat" },
        file: `${GMS}/2024/meeting-agenda-material.pdf`,
      },
      {
        label: { en: "Meeting rules for AGMS and EGMS", id: "Tata tertib RUPST dan RUPSLB" },
        file: `${GMS}/2024/meeting-rules-for-agms-and-egms.pdf`,
      },
      {
        label: { en: "Power of attorney for corporate", id: "Surat kuasa badan hukum" },
        file: `${GMS}/2024/power-of-attorney-for-corporate.doc`,
      },
      {
        label: { en: "Summary of the General Meeting", id: "Risalah RUPS" },
        file: `${GMS}/2024/summary-of-the-general-meeting.pdf`,
      },
    ],
  },
  {
    year: "2023",
    date: { en: "21 June 2023", id: "21 Juni 2023" },
    documents: [
      {
        label: { en: "Announcement of General Meeting", id: "Pengumuman RUPS" },
        file: `${GMS}/2023/announcement-of-general-meeting.pdf`,
      },
      {
        label: { en: "Invitation to the shareholders", id: "Panggilan kepada pemegang saham" },
        file: `${GMS}/2023/invitation-to-the-shareholders.pdf`,
      },
      {
        label: { en: "Meeting agenda material", id: "Materi mata acara rapat" },
        file: `${GMS}/2023/meeting-agenda-material.pdf`,
      },
      {
        label: { en: "Meeting rules for AGMS and EGMS", id: "Tata tertib RUPST dan RUPSLB" },
        file: `${GMS}/2023/meeting-rules-for-agms-and-egms.pdf`,
      },
      {
        label: { en: "Power of attorney for corporate", id: "Surat kuasa badan hukum" },
        file: `${GMS}/2023/power-of-attorney-for-corporate.doc`,
      },
      {
        label: { en: "Power of attorney for individual", id: "Surat kuasa perorangan" },
        file: `${GMS}/2023/power-of-attorney-for-individual.doc`,
      },
      {
        label: { en: "Curriculum vitae — Mr. Julianto", id: "Curriculum vitae — Bapak Julianto" },
        file: `${GMS}/2023/curriculum-vitae-mr-julianto.pdf`,
      },
      {
        label: { en: "Summary of the General Meeting", id: "Risalah RUPS" },
        file: `${GMS}/2023/summary-of-the-general-meeting.pdf`,
      },
      {
        label: { en: "Abridged minutes of the meeting", id: "Ringkasan risalah RUPST dan RUPSLB" },
        file: `${GMS}/2023/abridged-minutes-of-the-meeting.pdf`,
      },
    ],
  },
  {
    year: "2022",
    date: { en: "6 July 2022", id: "6 Juli 2022" },
    documents: [
      {
        label: { en: "Announcement of General Meeting", id: "Pengumuman RUPS" },
        file: `${GMS}/2022/announcement-of-general-meeting.pdf`,
      },
      {
        label: { en: "Invitation to the shareholders", id: "Panggilan kepada pemegang saham" },
        file: `${GMS}/2022/invitation-to-the-shareholders.pdf`,
      },
      {
        label: { en: "Meeting agenda material", id: "Materi mata acara rapat" },
        file: `${GMS}/2022/meeting-agenda-material.pdf`,
      },
      {
        label: { en: "Meeting rules for AGMS and EGMS", id: "Tata tertib RUPS dan RUPSLB" },
        file: `${GMS}/2022/meeting-rules-for-agms-and-egms.pdf`,
      },
      {
        label: { en: "Power of attorney for individual", id: "Surat kuasa perorangan" },
        file: `${GMS}/2022/power-of-attorney-for-individual.doc`,
      },
      {
        label: { en: "Power of attorney for corporate", id: "Surat kuasa badan hukum" },
        file: `${GMS}/2022/power-of-attorney-for-corporate.doc`,
      },
      {
        label: {
          en: "Curriculum vitae — Mr. Raimond Bing Lesnussa",
          id: "Curriculum vitae — Bapak Raimond Bing Lesnussa",
        },
        file: `${GMS}/2022/curriculum-vitae-mr-raimond-bing-lesnussa.pdf`,
      },
      {
        label: { en: "Summary of the meeting", id: "Risalah rapat" },
        file: `${GMS}/2022/summary-of-the-meeting.pdf`,
      },
    ],
  },
  {
    year: "2021",
    date: { en: "26–27 August 2021", id: "26–27 Agustus 2021" },
    documents: [
      {
        label: { en: "Announcement of General Meeting", id: "Pengumuman RUPS" },
        file: `${GMS}/2021/announcement-of-general-meeting.pdf`,
      },
      {
        label: { en: "Invitation of the meeting", id: "Panggilan rapat" },
        file: `${GMS}/2021/invitation-of-the-meeting.pdf`,
      },
      {
        label: { en: "Material of the meeting", id: "Materi rapat" },
        file: `${GMS}/2021/material-of-the-meeting.pdf`,
      },
      {
        label: { en: "Power of attorney for corporate (BAE)", id: "Surat kuasa badan hukum (BAE)" },
        file: `${GMS}/2021/power-of-attorney-for-corporate-bae.pdf`,
      },
      {
        label: { en: "Power of attorney for individual (BAE)", id: "Surat kuasa perorangan (BAE)" },
        file: `${GMS}/2021/power-of-attorney-for-individual-bae.pdf`,
      },
      {
        label: { en: "Announcement of minutes summary", id: "Pengumuman ringkasan risalah" },
        file: `${GMS}/2021/announcement-of-minutes-summary.pdf`,
      },
    ],
  },
  {
    year: "2020",
    date: { en: "5 August 2020", id: "5 Agustus 2020" },
    documents: [
      {
        label: {
          en: "Announcement to the shareholders (21 July 2020)",
          id: "Pengumuman kepada pemegang saham (21 Juli 2020)",
        },
        file: `${GMS}/2020/announcement-to-the-shareholders-21-july-2020.pdf`,
      },
      {
        label: { en: "Invitation to the shareholders", id: "Panggilan kepada pemegang saham" },
        file: `${GMS}/2020/invitation-to-the-shareholders.pdf`,
      },
      {
        label: { en: "Power of attorney for corporate to BAE", id: "Surat kuasa badan hukum ke BAE" },
        file: `${GMS}/2020/power-of-attorney-for-corporate-to-bae.doc`,
      },
      {
        label: { en: "Power of attorney for corporate", id: "Surat kuasa badan hukum" },
        file: `${GMS}/2020/power-of-attorney-for-corporate.doc`,
      },
      {
        label: { en: "Power of attorney for individual to BAE", id: "Surat kuasa perorangan ke BAE" },
        file: `${GMS}/2020/power-of-attorney-for-individual-to-bae.doc`,
      },
      {
        label: { en: "Power of attorney for individual", id: "Surat kuasa perorangan" },
        file: `${GMS}/2020/power-of-attorney-for-individual.doc`,
      },
      {
        label: {
          en: "Announcement of abridged minutes (27 August 2020)",
          id: "Pengumuman ringkasan risalah (27 Agustus 2020)",
        },
        file: `${GMS}/2020/announcement-of-abridged-minutes-27-august-2020.pdf`,
      },
    ],
  },
  {
    year: "2019",
    date: { en: "7 & 29 May 2019", id: "7 & 29 Mei 2019" },
    documents: [
      {
        label: { en: "Announcement of AGM and EGM", id: "Pengumuman RUPST dan RUPSLB" },
        file: `${GMS}/2019/announcement-of-agm-and-egm.pdf`,
      },
      {
        label: { en: "Invitation of the meeting (7 May 2019)", id: "Panggilan rapat (7 Mei 2019)" },
        file: `${GMS}/2019/invitation-of-the-meeting-7-may-2019.pdf`,
      },
      {
        label: {
          en: "Abridged minutes of the meeting (29 May 2019)",
          id: "Ringkasan risalah rapat (29 Mei 2019)",
        },
        file: `${GMS}/2019/abridged-minutes-of-the-meeting-29-may-2019.pdf`,
      },
    ],
  },
  {
    year: "2018",
    date: { en: "7 June 2018", id: "7 Juni 2018" },
    documents: [
      {
        label: { en: "Notice of the meeting (30 April 2018)", id: "Pemberitahuan rapat (30 April 2018)" },
        file: `${GMS}/2018/notice-of-the-meeting-30-april-2018.pdf`,
      },
      {
        label: { en: "Invitation of the meeting (16 May 2018)", id: "Panggilan rapat (16 Mei 2018)" },
        file: `${GMS}/2018/invitation-of-the-meeting-16-may-2018.pdf`,
      },
      {
        label: { en: "Invitation to the public expose", id: "Undangan paparan publik" },
        file: `${GMS}/2018/invitation-to-the-public-expose.pdf`,
      },
      {
        label: { en: "Abridged minutes of the meeting", id: "Ringkasan risalah rapat" },
        file: `${GMS}/2018/abridged-minutes-of-the-meeting.pdf`,
      },
    ],
  },
  {
    year: "2017",
    date: { en: "20 June 2017", id: "20 Juni 2017" },
    documents: [
      {
        label: { en: "Notice of the meeting (12 May 2017)", id: "Pemberitahuan rapat (12 Mei 2017)" },
        file: `${GMS}/2017/notice-of-the-meeting-12-may-2017.pdf`,
      },
      {
        label: { en: "Invitation of the meeting (29 May 2017)", id: "Panggilan rapat (29 Mei 2017)" },
        file: `${GMS}/2017/invitation-of-the-meeting-29-may-2017.pdf`,
      },
      {
        label: { en: "Abridged minutes of the meeting", id: "Ringkasan risalah rapat" },
        file: `${GMS}/2017/abridged-minutes-of-the-meeting.pdf`,
      },
    ],
  },
  {
    year: "2016",
    date: { en: "16 June & 20 October 2016", id: "16 Juni & 20 Oktober 2016" },
    documents: [
      {
        label: { en: "Notice of the meeting (10 May 2016)", id: "Pemberitahuan rapat (10 Mei 2016)" },
        file: `${GMS}/2016/notice-of-the-meeting-10-may-2016.pdf`,
      },
      {
        label: { en: "Invitation of the meeting (25 May 2016)", id: "Panggilan rapat (25 Mei 2016)" },
        file: `${GMS}/2016/invitation-of-the-meeting-25-may-2016.pdf`,
      },
      {
        label: {
          en: "Abridged minutes of the meeting (16 June 2016)",
          id: "Ringkasan risalah rapat (16 Juni 2016)",
        },
        file: `${GMS}/2016/abridged-minutes-of-the-meeting-16-june-2016.pdf`,
      },
      {
        label: {
          en: "Notice of the meeting (13 September 2016)",
          id: "Pemberitahuan rapat (13 September 2016)",
        },
        file: `${GMS}/2016/notice-of-the-meeting-13-september-2016.pdf`,
      },
      {
        label: {
          en: "Invitation of the meeting (28 September 2016)",
          id: "Panggilan rapat (28 September 2016)",
        },
        file: `${GMS}/2016/invitation-of-the-meeting-28-september-2016.pdf`,
      },
      {
        label: {
          en: "Abridged minutes of the meeting (20 October 2016)",
          id: "Ringkasan risalah rapat (20 Oktober 2016)",
        },
        file: `${GMS}/2016/abridged-minutes-of-the-meeting-20-october-2016.pdf`,
      },
    ],
  },
  {
    year: "2015",
    date: { en: "1 April & 18 June 2015", id: "1 April & 18 Juni 2015" },
    documents: [
      {
        label: { en: "Notice of the meeting", id: "Pemberitahuan rapat" },
        file: `${GMS}/2015/notice-of-the-meeting.pdf`,
      },
      {
        label: { en: "Invitation of the meeting (10 March 2015)", id: "Panggilan rapat (10 Maret 2015)" },
        file: `${GMS}/2015/invitation-of-the-meeting-10-march-2015.pdf`,
      },
      {
        label: {
          en: "Abridged minutes of the EGMS (1 April 2015)",
          id: "Ringkasan risalah RUPSLB (1 April 2015)",
        },
        file: `${GMS}/2015/abridged-minutes-of-the-egms-1-april-2015.pdf`,
      },
      {
        label: { en: "Notice of the meeting (12 May 2015)", id: "Pemberitahuan rapat (12 Mei 2015)" },
        file: `${GMS}/2015/notice-of-the-meeting-12-may-2015.pdf`,
      },
      {
        label: { en: "Invitation of the meeting (27 May 2015)", id: "Panggilan rapat (27 Mei 2015)" },
        file: `${GMS}/2015/invitation-of-the-meeting-27-may-2015.pdf`,
      },
      {
        label: {
          en: "Abridged minutes of the meeting (18 June 2015)",
          id: "Ringkasan risalah rapat (18 Juni 2015)",
        },
        file: `${GMS}/2015/abridged-minutes-of-the-meeting-18-june-2015.pdf`,
      },
    ],
  },
];

const DISC = "/documents/disclosure";

export const DISCLOSURES: {
  date: Localized<string>;
  title: Localized<string>;
  file: string;
}[] = [
  {
    date: { en: "12 June 2026", id: "12 Juni 2026" },
    title: {
      en: "Disclosure of information on the addition of business activities",
      id: "Keterbukaan informasi atas penambahan kegiatan usaha",
    },
    file: `${DISC}/2026-06-12-addition-of-business-activities.pdf`,
  },
  {
    date: { en: "12 June 2026", id: "12 Juni 2026" },
    title: {
      en: "Full report — feasibility study of PT Akasha Wira International Tbk",
      id: "Laporan lengkap — studi kelayakan PT Akasha Wira International Tbk",
    },
    file: `${DISC}/2026-06-12-full-report-feasibility-study.pdf`,
  },
  {
    date: { en: "8 June 2026", id: "8 Juni 2026" },
    title: {
      en: "Disclosure of information on the addition of business activities",
      id: "Keterbukaan informasi atas penambahan kegiatan usaha",
    },
    file: `${DISC}/2026-06-08-addition-of-business-activities.pdf`,
  },
  {
    date: { en: "8 June 2026", id: "8 Juni 2026" },
    title: {
      en: "Full report — feasibility study of PT Akasha Wira International Tbk",
      id: "Laporan lengkap — studi kelayakan PT Akasha Wira International Tbk",
    },
    file: `${DISC}/2026-06-08-full-report-feasibility-study.pdf`,
  },
  {
    date: { en: "May 2026", id: "Mei 2026" },
    title: {
      en: "Disclosure of information on the addition of business activities",
      id: "Keterbukaan informasi atas penambahan kegiatan usaha",
    },
    file: `${DISC}/2026-05-addition-of-business-activities.pdf`,
  },
  {
    date: { en: "May 2026", id: "Mei 2026" },
    title: {
      en: "Disclosure of information — resignation of President Director Wihardjo Hadiseputro and Commissioner Nana Puspa Dewi",
      id: "Keterbukaan informasi — pengunduran diri Presiden Direktur Wihardjo Hadiseputro dan Komisaris Nana Puspa Dewi",
    },
    file: `${DISC}/2026-05-resignation-of-president-director-wihardjo-hadiseputro-and-commissioner-nana-puspa-dewi.pdf`,
  },
  {
    date: { en: "19 June 2025", id: "19 Juni 2025" },
    title: {
      en: "Public expose notification",
      id: "Pemberitahuan paparan publik",
    },
    file: `${DISC}/2025-06-19-public-expose-notification.pdf`,
  },
  {
    date: { en: "March 2025", id: "Maret 2025" },
    title: {
      en: "Disclosure of information — resignation of Director Raimond Bing Lesnussa",
      id: "Keterbukaan informasi — pengunduran diri Direktur Raimond Bing Lesnussa",
    },
    file: `${DISC}/2025-03-resignation-of-director-raimond-bing-lesnussa.pdf`,
  },
  {
    date: { en: "13 June 2024", id: "13 Juni 2024" },
    title: {
      en: "Public expose notification",
      id: "Pemberitahuan paparan publik",
    },
    file: `${DISC}/2024-06-13-public-expose-notification.pdf`,
  },
  {
    date: { en: "13 June 2023", id: "13 Juni 2023" },
    title: {
      en: "Disclosure of information to shareholders",
      id: "Keterbukaan informasi kepada pemegang saham",
    },
    file: `${DISC}/2023-06-13-information-to-shareholders.pdf`,
  },
  {
    date: { en: "22 June 2023", id: "22 Juni 2023" },
    title: {
      en: "Public expose notification",
      id: "Pemberitahuan paparan publik",
    },
    file: `${DISC}/2023-06-22-public-expose-notification.pdf`,
  },
  {
    date: { en: "15 May 2023", id: "15 Mei 2023" },
    title: {
      en: "Disclosure of information to shareholders",
      id: "Keterbukaan informasi kepada pemegang saham",
    },
    file: `${DISC}/2023-05-15-information-to-shareholders.pdf`,
  },
  {
    date: { en: "May 2023", id: "Mei 2023" },
    title: {
      en: "Disclosure of information — resignation of Independent Commissioner Ms. Miscellia Dotulong",
      id: "Keterbukaan informasi — pengunduran diri Komisaris Independen Ibu Miscellia Dotulong",
    },
    file: `${DISC}/2023-05-resignation-of-independent-commissioner-ms-miscellia-dotulong.pdf`,
  },
  {
    date: { en: "May 2022", id: "Mei 2022" },
    title: {
      en: "Disclosure of information — resignation of Commissioner Mr. Danny Yuwono",
      id: "Keterbukaan informasi — pengunduran diri Komisaris Bapak Danny Yuwono",
    },
    file: `${DISC}/2022-05-resignation-of-commissioner-mr-danny-yuwono.pdf`,
  },
  {
    date: { en: "2021", id: "2021" },
    title: {
      en: "Public expose notification",
      id: "Pemberitahuan paparan publik",
    },
    file: `${DISC}/2021-public-expose-notification.pdf`,
  },
  {
    date: { en: "21 July 2020", id: "21 Juli 2020" },
    title: {
      en: "Circular to shareholders",
      id: "Surat edaran kepada pemegang saham",
    },
    file: `${DISC}/2020-07-21-circular-to-shareholders.pdf`,
  },
  {
    date: { en: "20 April 2018", id: "20 April 2018" },
    title: {
      en: "Disclosure on the resignation of Mr. Ari Wisnubroto as Director",
      id: "Keterbukaan informasi atas pengunduran diri Bapak Ari Wisnubroto sebagai Direktur",
    },
    file: `${DISC}/2018-04-20-resignation-of-mr-ari-wisnubroto-as-director.pdf`,
  },
  {
    date: { en: "6 June 2016", id: "6 Juni 2016" },
    title: {
      en: "Disclosure on share price volatility",
      id: "Keterbukaan informasi atas volatilitas harga saham",
    },
    file: `${DISC}/2016-06-06-share-price-volatility.pdf`,
  },
];

export const ANNOUNCEMENTS: { title: Localized<string>; file: string }[] = [
  {
    title: {
      en: "Announcement on the change of Corporate Secretary of PT Akasha Wira International Tbk",
      id: "Pengumuman perubahan Sekretaris Perusahaan PT Akasha Wira International Tbk",
    },
    file: "/documents/announcement/change-of-corporate-secretary.pdf",
  },
  {
    title: {
      en: "Announcement on the change of the Audit Committee of PT Akasha Wira International Tbk",
      id: "Pengumuman perubahan Komite Audit PT Akasha Wira International Tbk",
    },
    file: "/documents/announcement/change-of-audit-committee.pdf",
  },
];

// CSR tidak punya dokumen sendiri — tiap tahun dilaporkan sebagai bab di dalam
// Laporan Tahunan, jadi `file` menunjuk ke laporan tahunan yang bersangkutan
// dan `page` ke halaman rujukannya.
export const CSR_REPORTS: { year: string; page: string; file: string }[] = [
  {
    year: "2021",
    page: "79",
    file: "/documents/annual-report/2021.pdf",
  },
  {
    year: "2020",
    page: "81",
    file: "/documents/annual-report/2020.pdf",
  },
  {
    year: "2019",
    page: "78",
    file: "/documents/annual-report/2019.pdf",
  },
  {
    year: "2018",
    page: "60",
    file: "/documents/annual-report/2018.pdf",
  },
  { year: "2017", page: "64", file: "/documents/annual-report/2017.pdf" },
  { year: "2016", page: "60", file: "/documents/annual-report/2016.pdf" },
];

export const INVESTOR_SECTIONS: {
  id: string;
  href: string;
  title: Localized<string>;
  desc: Localized<string>;
}[] = [
  {
    id: "financial-highlights",
    href: "#financial-highlights",
    title: { en: "Financial Highlights", id: "Ikhtisar Keuangan" },
    desc: {
      en: "Summary of financial performance over the last five years.",
      id: "Ringkasan performa keuangan lima tahun terakhir.",
    },
  },
  {
    id: "financial-report",
    href: "#financial-report",
    title: { en: "Financial Report", id: "Laporan Keuangan" },
    desc: {
      en: "Audited and quarterly interim financial statements, 2012–2025.",
      id: "Laporan keuangan audited dan interim per kuartal, 2012–2025.",
    },
  },
  {
    id: "annual-report",
    href: "#annual-report",
    title: { en: "Annual Report", id: "Laporan Tahunan" },
    desc: {
      en: "Full annual report with strategic review, 2012–2025.",
      id: "Laporan tahunan lengkap dengan tinjauan strategis, 2012–2025.",
    },
  },
  {
    id: "sustainability-report",
    href: "#sustainability-report",
    title: { en: "Sustainability Report", id: "Laporan Keberlanjutan" },
    desc: {
      en: "Annual sustainability reporting since 2021.",
      id: "Pelaporan keberlanjutan tahunan sejak 2021.",
    },
  },
  {
    id: "chronological-share",
    href: "#chronological-share",
    title: { en: "Chronological Share", id: "Kronologi Saham" },
    desc: {
      en: "History of corporate actions since the 1994 IPO.",
      id: "Riwayat aksi korporasi sejak IPO 1994.",
    },
  },
  {
    id: "stock-information",
    href: "#stock-information",
    title: { en: "Stock Information", id: "Informasi Saham" },
    desc: {
      en: "Daily share price, shareholder structure, and capitalization.",
      id: "Harga saham harian, struktur pemegang saham, dan permodalan.",
    },
  },
  {
    id: "dividends",
    href: "#dividends",
    title: { en: "Dividends", id: "Dividen" },
    desc: {
      en: "Recorded history of dividend distribution.",
      id: "Riwayat pembagian dividen yang tercatat.",
    },
  },
  {
    id: "gms",
    href: "/governance#gms",
    title: { en: "General Meeting", id: "Rapat Umum" },
    desc: {
      en: "Notices, materials, and results of the GMS, 2015–2026.",
      id: "Panggilan, materi, dan hasil RUPS, 2015–2026.",
    },
  },
  {
    id: "disclosure",
    href: "/governance#disclosure",
    title: { en: "Disclosure", id: "Keterbukaan Informasi" },
    desc: {
      en: "Information disclosure in accordance with POJK regulations.",
      id: "Keterbukaan informasi sesuai POJK.",
    },
  },
];

export const GOVERNANCE_PILLARS: {
  id: string;
  href: string;
  title: Localized<string>;
  desc: Localized<string>;
  note?: Localized<string>;
  icon: string;
}[] = [
  {
    id: "article-of-association",
    href: "/documents/governance/articles-of-association.pdf",
    title: { en: "Article of Association", id: "Anggaran Dasar" },
    desc: {
      en: "Article of Association — the foundational legal document governing the company's structure, rights, and obligations.",
      id: "Anggaran Dasar — dokumen legal fondasi yang mengatur struktur, hak, dan kewajiban perusahaan.",
    },
    note: {
      en: "Deed No. 19 · AHU-AH-01-03-0953311 & 0953310 · 7 August 2015",
      id: "Akta No. 19 · AHU-AH-01-03-0953311 & 0953310 · 7 Agustus 2015",
    },
    icon: "📜",
  },
  {
    id: "bod-boc-charter",
    href: "/documents/governance/communication-policy.pdf",
    title: { en: "BOD & BOC Charter", id: "Direksi & Komisaris Charter" },
    desc: {
      en: "Governance guidelines for the Board of Directors and Board of Commissioners in carrying out their oversight functions.",
      id: "Pedoman tata kelola untuk Dewan Direksi dan Dewan Komisaris dalam menjalankan fungsi pengawasan.",
    },
    note: {
      en: "Shareholders, Investors and Stakeholders Communication Policy",
      id: "Kebijakan Komunikasi dengan Pemegang Saham, Investor, dan Pemangku Kepentingan",
    },
    icon: "⚖️",
  },
  {
    id: "csr",
    href: "#csr",
    title: { en: "Corporate Social Responsibility", id: "Tanggung Jawab Sosial Perusahaan" },
    desc: {
      en: "Social responsibility programs and sustained contribution to community and environment.",
      id: "Program tanggung jawab sosial dan kontribusi berkelanjutan terhadap komunitas serta lingkungan.",
    },
    note: {
      en: "Reported as a chapter within each year's Annual Report",
      id: "Dilaporkan sebagai bab di dalam Laporan Tahunan tiap tahun",
    },
    icon: "🌱",
  },
  {
    id: "announcement",
    href: "#announcement",
    title: { en: "Announcement", id: "Pengumuman" },
    desc: {
      en: "Official company announcements to the public and shareholders.",
      id: "Pengumuman resmi perusahaan kepada publik dan pemegang saham.",
    },
    icon: "📢",
  },
  {
    id: "disclosure",
    href: "#disclosure",
    title: { en: "Disclosure Information", id: "Keterbukaan Informasi" },
    desc: {
      en: "Material information disclosure per OJK and Indonesia Stock Exchange regulations.",
      id: "Keterbukaan informasi material sesuai ketentuan OJK dan Bursa Efek Indonesia.",
    },
    icon: "🔍",
  },
  {
    id: "gms",
    href: "#gms",
    title: { en: "General Meeting of Shareholders", id: "Rapat Umum Pemegang Saham" },
    desc: {
      en: "Procedures and documentation for the annual and extraordinary General Meeting of Shareholders (GMS).",
      id: "Prosedur dan dokumentasi Rapat Umum Pemegang Saham (RUPS) tahunan dan luar biasa.",
    },
    icon: "🤝",
  },
];

export const GCG_PRINCIPLES: {
  letter: string;
  title: Localized<string>;
  body: Localized<string>;
}[] = [
  {
    letter: "T",
    title: { en: "Transparency", id: "Transparansi" },
    body: {
      en: "Disclosure of material and relevant information in a timely and accurate manner.",
      id: "Pengungkapan informasi yang material dan relevan secara tepat waktu dan akurat.",
    },
  },
  {
    letter: "A",
    title: { en: "Accountability", id: "Akuntabilitas" },
    body: {
      en: "Clarity of function and accountability across every organ of the company.",
      id: "Kejelasan fungsi dan pertanggungjawaban seluruh organ perusahaan.",
    },
  },
  {
    letter: "R",
    title: { en: "Responsibility", id: "Responsibilitas" },
    body: {
      en: "Compliance with regulations and social responsibility toward stakeholders.",
      id: "Kepatuhan terhadap peraturan dan tanggung jawab sosial terhadap stakeholder.",
    },
  },
  {
    letter: "I",
    title: { en: "Independency", id: "Independensi" },
    body: {
      en: "Professional management free of conflicts of interest.",
      id: "Pengelolaan secara profesional tanpa benturan kepentingan.",
    },
  },
  {
    letter: "F",
    title: { en: "Fairness", id: "Fairness" },
    body: {
      en: "Fair and equal treatment for all shareholders.",
      id: "Perlakuan yang adil dan setara bagi seluruh pemegang saham.",
    },
  },
];
