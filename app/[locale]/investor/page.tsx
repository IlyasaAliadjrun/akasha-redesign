import Link from "next/link";
import type { Metadata } from "next";
import {
  FINANCIAL_YEARS,
  FINANCIALS,
  RATIOS,
  SHARE_ACTIONS,
  OUTSTANDING_SHARES,
  INVESTOR_SECTIONS,
} from "@/lib/investor";
import { INVESTOR_PAGE } from "@/content/pages/investor";
import RevenueChart from "@/components/investor/RevenueChart";
import PageHero from "@/components/page/PageHero";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return {
    title: INVESTOR_PAGE.meta.title[locale],
    description: INVESTOR_PAGE.meta.description[locale],
  };
}

export default function InvestorPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const href = (p: string) => localizeHref(locale, p);
  const t = <T,>(v: Localized<T>) => v[locale];
  const fmt = (n: number) =>
    n.toLocaleString(locale === "id" ? "id-ID" : "en-US", {
      maximumFractionDigits: 0,
    });
  const netSalesLatest = FINANCIALS.netSales[0];
  const netSalesPrev = FINANCIALS.netSales[1];
  const netIncomeLatest = FINANCIALS.netIncome[0];
  const netIncomePrev = FINANCIALS.netIncome[1];
  const revGrowth = ((netSalesLatest - netSalesPrev) / netSalesPrev) * 100;
  const niGrowth = ((netIncomeLatest - netIncomePrev) / netIncomePrev) * 100;

  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/investor/hero/desktop.jpg"
        mobile="/investor/hero/mobile.jpg"
        title={t(INVESTOR_PAGE.hero.title)}
        subtitle={t(INVESTOR_PAGE.hero.subtitle)}
        tone="dark"
        bg="#0F4930"
      />

      {/* KEY METRICS */}
      <section className="py-12 bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            {
              label: t(INVESTOR_PAGE.metrics.netSales.label),
              value: `Rp ${fmt(netSalesLatest / 1000)} M`,
              sub: `${revGrowth >= 0 ? "+" : ""}${revGrowth.toFixed(1)}% YoY`,
              positive: revGrowth >= 0,
            },
            {
              label: t(INVESTOR_PAGE.metrics.netIncome.label),
              value: `Rp ${fmt(netIncomeLatest / 1000)} M`,
              sub: `${niGrowth >= 0 ? "+" : ""}${niGrowth.toFixed(1)}% YoY`,
              positive: niGrowth >= 0,
            },
            {
              label: t(INVESTOR_PAGE.metrics.eps.label),
              value: `Rp ${fmt(FINANCIALS.eps[0])}`,
              sub: t(INVESTOR_PAGE.metrics.eps.sub),
            },
            {
              label: t(INVESTOR_PAGE.metrics.outstandingShares.label),
              value: OUTSTANDING_SHARES,
              sub: t(INVESTOR_PAGE.metrics.outstandingShares.sub),
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
                {t(INVESTOR_PAGE.chart.eyebrow)}
              </div>
              <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
                {t(INVESTOR_PAGE.chart.heading)}
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-accent-beverage" />
                <span className="text-ink/60">{t(INVESTOR_PAGE.chart.legendNetSales)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-ink" />
                <span className="text-ink/60">{t(INVESTOR_PAGE.chart.legendNetIncome)}</span>
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
              {t(INVESTOR_PAGE.table.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.table.heading)}
            </h2>
            <p className="mt-3 text-sm text-ink/50">
              {t(INVESTOR_PAGE.table.paragraph)}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-left text-[11px] uppercase tracking-[0.2em] font-bold text-ink/50">
                  <th className="py-4 pr-6">{t(INVESTOR_PAGE.table.metricHeader)}</th>
                  {FINANCIAL_YEARS.map((y) => (
                    <th key={y} className="py-4 px-4 text-right tabular-nums">
                      {y}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {[
                  { label: t(INVESTOR_PAGE.table.rows.netSales), values: FINANCIALS.netSales },
                  { label: t(INVESTOR_PAGE.table.rows.grossProfit), values: FINANCIALS.grossProfit },
                  { label: t(INVESTOR_PAGE.table.rows.operatingIncome), values: FINANCIALS.operatingIncome },
                  { label: t(INVESTOR_PAGE.table.rows.netIncome), values: FINANCIALS.netIncome },
                  { label: t(INVESTOR_PAGE.table.rows.eps), values: FINANCIALS.eps },
                  { label: t(INVESTOR_PAGE.table.rows.totalAssets), values: FINANCIALS.totalAssets },
                  { label: t(INVESTOR_PAGE.table.rows.totalEquity), values: FINANCIALS.totalEquity },
                  { label: t(INVESTOR_PAGE.table.rows.currentRatio), values: FINANCIALS.currentRatio },
                ].map(({ label, values }) => (
                  <tr
                    key={label}
                    className="border-b border-ink/5 hover:bg-ink/[0.02] transition-colors"
                  >
                    <td className="py-4 pr-6 font-semibold">{label}</td>
                    {values.map((v, i) => (
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
              { label: t(INVESTOR_PAGE.table.ratios.roa), values: RATIOS.roa },
              { label: t(INVESTOR_PAGE.table.ratios.roe), values: RATIOS.roe },
              { label: t(INVESTOR_PAGE.table.ratios.grossMargin), values: RATIOS.grossMargin },
              { label: t(INVESTOR_PAGE.table.ratios.operatingMargin), values: RATIOS.operatingMargin },
              { label: t(INVESTOR_PAGE.table.ratios.netMargin), values: RATIOS.netMargin },
            ].map((r) => (
              <div key={r.label} className="bg-[#FAFAFA] rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-2">
                  {r.label}
                </div>
                <div className="text-3xl font-extrabold tracking-tightish">
                  {r.values[0]}%
                </div>
                <div className="mt-1 text-xs text-ink/40">
                  {t(INVESTOR_PAGE.table.avgLabel)}{" "}
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
              {t(INVESTOR_PAGE.chronological.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.chronological.heading)}
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              {t(INVESTOR_PAGE.chronological.paragraph)}
            </p>
          </div>

          <ol className="relative border-l border-white/15 ml-2">
            {SHARE_ACTIONS.map((s, i) => (
              <li key={i} className="pl-8 pb-10 relative">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white" />
                <div className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold mb-1">
                  {t(s.date)}
                </div>
                <div className="text-2xl font-extrabold tracking-tightish">
                  {t(s.action)}
                </div>
                <div className="mt-2 text-sm text-white/60">
                  {s.shares} {t(INVESTOR_PAGE.chronological.unit)} ·{" "}
                  {t(INVESTOR_PAGE.chronological.parLabel)} {s.par}
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
              {t(INVESTOR_PAGE.stockInfo.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.stockInfo.heading)}
            </h2>
            <p className="mt-6 text-ink/65 max-w-lg">
              {t(INVESTOR_PAGE.stockInfo.paragraph)}
            </p>
          </div>

          <div className="space-y-5">
            {[
              { k: t(INVESTOR_PAGE.stockInfo.rows.ticker.k), v: t(INVESTOR_PAGE.stockInfo.rows.ticker.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.exchange.k), v: t(INVESTOR_PAGE.stockInfo.rows.exchange.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.ipoDate.k), v: t(INVESTOR_PAGE.stockInfo.rows.ipoDate.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.sector.k), v: t(INVESTOR_PAGE.stockInfo.rows.sector.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.parValue.k), v: t(INVESTOR_PAGE.stockInfo.rows.parValue.v) },
              {
                k: t(INVESTOR_PAGE.stockInfo.rows.outstandingShares.k),
                v: `${OUTSTANDING_SHARES} ${t(INVESTOR_PAGE.stockInfo.rows.outstandingShares.unit)}`,
              },
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
              {t(INVESTOR_PAGE.resources.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.resources.heading)}
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
                  {t(s.title)}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{t(s.desc)}</p>
                <div className="mt-5 text-sm font-semibold text-accent-beverage transition-opacity duration-300 group-hover:opacity-70">
                  {t(INVESTOR_PAGE.resources.viewLink)}
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
            {t(INVESTOR_PAGE.governanceCta.eyebrow)}
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            {t(INVESTOR_PAGE.governanceCta.heading)}
          </h2>
          <p className="mt-6 text-ink/60">
            {t(INVESTOR_PAGE.governanceCta.paragraph)}
          </p>
          <Link
            href={href("/governance")}
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
          >
            {t(INVESTOR_PAGE.governanceCta.link)}
          </Link>
        </div>
      </section>
    </>
  );
}
