import Link from "next/link";
import {
  FINANCIAL_YEARS,
  FINANCIALS,
  RATIOS,
  SHARE_ACTIONS,
  OUTSTANDING_SHARES,
  INVESTOR_SECTIONS,
} from "@/lib/investor";
import RevenueChart from "@/components/investor/RevenueChart";

export const metadata = {
  title: "Investor Centre — Akasha Wira International",
  description:
    "Informasi saham, laporan keuangan, struktur permodalan, dan tata kelola PT Akasha Wira International Tbk (IDX: ADES).",
};

const fmt = (n: number) =>
  n.toLocaleString("id-ID", { maximumFractionDigits: 0 });

export default function InvestorPage() {
  const netSalesLatest = FINANCIALS.netSales[0];
  const netSalesPrev = FINANCIALS.netSales[1];
  const netIncomeLatest = FINANCIALS.netIncome[0];
  const netIncomePrev = FINANCIALS.netIncome[1];
  const revGrowth = ((netSalesLatest - netSalesPrev) / netSalesPrev) * 100;
  const niGrowth = ((netIncomeLatest - netIncomePrev) / netIncomePrev) * 100;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[760px] bg-white flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-accent-beverage">
              IDX: ADES
            </span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/60">
              Since 1994
            </span>
          </div>
          <h1 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            Investor Centre.
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink/60 max-w-2xl">
            Performa keuangan, struktur saham, dan keterbukaan informasi untuk
            pemegang saham dan publik.
          </p>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="py-12 bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            {
              label: "Net Sales 2024",
              value: `Rp ${fmt(netSalesLatest / 1000)} M`,
              sub: `${revGrowth >= 0 ? "+" : ""}${revGrowth.toFixed(1)}% YoY`,
              positive: revGrowth >= 0,
            },
            {
              label: "Net Income 2024",
              value: `Rp ${fmt(netIncomeLatest / 1000)} M`,
              sub: `${niGrowth >= 0 ? "+" : ""}${niGrowth.toFixed(1)}% YoY`,
              positive: niGrowth >= 0,
            },
            {
              label: "EPS 2024",
              value: `Rp ${fmt(FINANCIALS.eps[0])}`,
              sub: "per lembar saham",
            },
            {
              label: "Outstanding Shares",
              value: OUTSTANDING_SHARES,
              sub: "lembar · par Rp 1.000",
            },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-3">
                {m.label}
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold tracking-tightish">
                {m.value}
              </div>
              {m.sub && (
                <div
                  className={`mt-1 text-sm ${
                    m.positive === undefined
                      ? "text-ink/50"
                      : m.positive
                      ? "text-accent-wellness"
                      : "text-accent-food"
                  }`}
                >
                  {m.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* REVENUE CHART */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
                Financial Highlights
              </div>
              <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
                Pertumbuhan lima tahun.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-accent-beverage" />
                <span className="text-ink/60">Net Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-ink" />
                <span className="text-ink/60">Net Income</span>
              </div>
            </div>
          </div>

          <RevenueChart
            years={[...FINANCIAL_YEARS].reverse()}
            netSales={[...FINANCIALS.netSales].reverse()}
            netIncome={[...FINANCIALS.netIncome].reverse()}
          />
        </div>
      </section>

      {/* FINANCIAL TABLE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Consolidated figures
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Laporan keuangan, 2020–2024.
            </h2>
            <p className="mt-3 text-sm text-ink/50">
              Angka dalam Rp juta kecuali EPS (Rp) dan rasio (%).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-left text-[11px] uppercase tracking-[0.2em] font-bold text-ink/50">
                  <th className="py-4 pr-6">Metric</th>
                  {FINANCIAL_YEARS.map((y) => (
                    <th key={y} className="py-4 px-4 text-right tabular-nums">
                      {y}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {[
                  ["Net Sales", FINANCIALS.netSales],
                  ["Gross Profit", FINANCIALS.grossProfit],
                  ["Operating Income", FINANCIALS.operatingIncome],
                  ["Net Income", FINANCIALS.netIncome],
                  ["EPS (Rp)", FINANCIALS.eps],
                  ["Total Assets", FINANCIALS.totalAssets],
                  ["Total Equity", FINANCIALS.totalEquity],
                  ["Current Ratio", FINANCIALS.currentRatio],
                ].map(([label, values]) => (
                  <tr
                    key={label as string}
                    className="border-b border-ink/5 hover:bg-ink/[0.02] transition-colors"
                  >
                    <td className="py-4 pr-6 font-semibold">{label as string}</td>
                    {(values as number[]).map((v, i) => (
                      <td key={i} className="py-4 px-4 text-right">
                        {typeof v === "number" && v % 1 !== 0
                          ? v.toFixed(2)
                          : fmt(v as number)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { label: "ROA", values: RATIOS.roa },
              { label: "ROE", values: RATIOS.roe },
              { label: "Gross Margin", values: RATIOS.grossMargin },
              { label: "Operating Margin", values: RATIOS.operatingMargin },
              { label: "Net Margin", values: RATIOS.netMargin },
            ].map((r) => (
              <div key={r.label} className="bg-[#FAFAFA] rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-2">
                  {r.label}
                </div>
                <div className="text-3xl font-extrabold tracking-tightish">
                  {r.values[0]}%
                </div>
                <div className="mt-1 text-xs text-ink/40">
                  5Y avg:{" "}
                  {(r.values.reduce((a, b) => a + b, 0) / r.values.length).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRONOLOGICAL SHARE */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Chronological share
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Dari 15 juta jadi 589 juta lembar.
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              Perjalanan permodalan ADES di Bursa Efek Indonesia sejak IPO 1994.
            </p>
          </div>

          <ol className="relative border-l border-white/15 ml-2">
            {SHARE_ACTIONS.map((s, i) => (
              <li key={i} className="pl-8 pb-10 relative">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white" />
                <div className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold mb-1">
                  {s.date}
                </div>
                <div className="text-2xl font-extrabold tracking-tightish">
                  {s.action}
                </div>
                <div className="mt-2 text-sm text-white/60">
                  {s.shares} lembar · par value {s.par}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STOCK INFO */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Stock information
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Permodalan & saham.
            </h2>
            <p className="mt-6 text-ink/65 max-w-lg">
              ADES tercatat di Bursa Efek Indonesia sejak 31 Maret 1994 dengan nilai
              nominal Rp 1.000 per lembar saham.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { k: "Ticker", v: "ADES" },
              { k: "Bursa", v: "Indonesia Stock Exchange (IDX)" },
              { k: "IPO Date", v: "31 Maret 1994" },
              { k: "Sektor", v: "Consumer Non-Cyclicals" },
              { k: "Nilai Nominal", v: "Rp 1.000 per lembar" },
              { k: "Outstanding Shares", v: `${OUTSTANDING_SHARES} lembar` },
            ].map((r) => (
              <div
                key={r.k}
                className="flex items-center justify-between border-b border-ink/10 pb-5"
              >
                <div className="text-sm text-ink/50">{r.k}</div>
                <div className="font-semibold">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Resources
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Semua dokumen investor.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INVESTOR_SECTIONS.map((s) => (
              <a
                key={s.id}
                href="#"
                className="group bg-white rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.12)]"
              >
                <div className="text-xl font-extrabold tracking-tightish mb-2">
                  {s.title}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-sm font-semibold text-accent-beverage transition-opacity duration-300 group-hover:opacity-70">
                  View ›
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-4">
            Good corporate governance
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            Prinsip tata kelola yang menopang setiap keputusan.
          </h2>
          <p className="mt-6 text-ink/60">
            TARIF — Transparansi, Akuntabilitas, Responsibilitas, Independensi, Fairness.
          </p>
          <Link
            href="/governance"
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
          >
            Lihat halaman governance
          </Link>
        </div>
      </section>
    </>
  );
}
