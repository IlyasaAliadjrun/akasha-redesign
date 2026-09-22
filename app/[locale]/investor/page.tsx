import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FINANCIAL_YEARS,
  FINANCIALS,
  RATIOS,
  SHARE_ACTIONS,
  SHARE_PRICE_DAILY,
  SHARE_PRICE_DAILY_AS_OF,
  dailySharePriceSummary,
  DIVIDEND_HISTORY,
  ANNUAL_REPORTS,
  SUSTAINABILITY_REPORTS,
  FINANCIAL_REPORT_ARCHIVE,
  SHAREHOLDERS,
  SHAREHOLDING_AS_OF,
  OUTSTANDING_SHARES,
  AUTHORIZED_SHARES,
  SHARE_REGISTRAR,
  INVESTOR_SECTIONS,
} from "@/lib/investor";
import { INVESTOR_PAGE } from "@/content/pages/investor";
import RevenueChart from "@/components/investor/RevenueChart";
import SharePriceChart from "@/components/investor/SharePriceChart";
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
  const numberLocale = locale === "id" ? "id-ID" : "en-US";
  const fmt = (n: number) =>
    n.toLocaleString(numberLocale, { maximumFractionDigits: 0 });
  const months = INVESTOR_PAGE.monthsShort[locale];
  const daily = dailySharePriceSummary();
  const asOfLabel = `${SHARE_PRICE_DAILY_AS_OF.day} ${
    months[SHARE_PRICE_DAILY_AS_OF.month - 1]
  } ${SHARE_PRICE_DAILY_AS_OF.year}`;
  const latestYear = FINANCIAL_YEARS[0];
  const earliestYear = FINANCIAL_YEARS[FINANCIAL_YEARS.length - 1];
  const netSalesLatest = FINANCIALS.netSales[0];
  const netSalesPrev = FINANCIALS.netSales[1];
  const netIncomeLatest = FINANCIALS.netIncome[0];
  const netIncomePrev = FINANCIALS.netIncome[1];
  const revGrowth = ((netSalesLatest - netSalesPrev) / netSalesPrev) * 100;
  const niGrowth = ((netIncomeLatest - netIncomePrev) / netIncomePrev) * 100;

  const archives = [
    {
      id: "annual-report",
      copy: INVESTOR_PAGE.annualReports,
      items: ANNUAL_REPORTS,
    },
    {
      id: "sustainability-report",
      copy: INVESTOR_PAGE.sustainabilityReports,
      items: SUSTAINABILITY_REPORTS,
    },
  ];

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
              label: `${t(INVESTOR_PAGE.metrics.netSales.label)} ${latestYear}`,
              value: `Rp ${fmt(netSalesLatest / 1000)} M`,
              sub: `${revGrowth >= 0 ? "+" : ""}${revGrowth.toFixed(1)}% YoY`,
              positive: revGrowth >= 0,
            },
            {
              label: `${t(INVESTOR_PAGE.metrics.netIncome.label)} ${latestYear}`,
              value: `Rp ${fmt(netIncomeLatest / 1000)} M`,
              sub: `${niGrowth >= 0 ? "+" : ""}${niGrowth.toFixed(1)}% YoY`,
              positive: niGrowth >= 0,
            },
            {
              label: `${t(INVESTOR_PAGE.metrics.eps.label)} ${latestYear}`,
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
      <section id="financial-highlights" className="scroll-mt-24 py-24 bg-[#FAFAFA]">
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
              {t(INVESTOR_PAGE.table.heading)} {earliestYear}–{latestYear}.
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
                  { label: t(INVESTOR_PAGE.table.rows.totalLiabilities), values: FINANCIALS.totalLiabilities },
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
      <section id="chronological-share" className="scroll-mt-24 py-24 bg-ink text-white">
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
      <section id="stock-information" className="scroll-mt-24 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(INVESTOR_PAGE.stockInfo.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.stockInfo.heading)}
            </h2>
            <p className="mt-6 text-ink/65">
              {t(INVESTOR_PAGE.stockInfo.paragraph)}
            </p>
          </div>

          {/* HARGA SAHAM TERKINI */}
          <div className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-2">
                  {t(INVESTOR_PAGE.stockInfo.daily.label)}
                </div>
                <div className="text-sm text-ink/50">
                  {t(INVESTOR_PAGE.stockInfo.daily.asOf)} {asOfLabel}
                </div>
              </div>
              <div className="flex flex-wrap gap-8 sm:gap-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-2">
                    {t(INVESTOR_PAGE.stockInfo.daily.lastClose)}
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold tracking-tightish">
                    Rp {fmt(daily.last)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-2">
                    {t(INVESTOR_PAGE.stockInfo.daily.periodChange)}
                  </div>
                  <div
                    className={`text-3xl lg:text-4xl font-extrabold tracking-tightish ${
                      daily.changePercent >= 0
                        ? "text-accent-wellness"
                        : "text-accent-food"
                    }`}
                  >
                    {daily.changePercent >= 0 ? "+" : ""}
                    {daily.changePercent.toFixed(1)}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-2">
                    {t(INVESTOR_PAGE.stockInfo.daily.marketCap)}
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold tracking-tightish">
                    Rp{" "}
                    {(daily.marketCap / 1e12).toLocaleString(numberLocale, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {t(INVESTOR_PAGE.trillionUnit)}
                  </div>
                </div>
              </div>
            </div>

            <SharePriceChart
              data={SHARE_PRICE_DAILY.map((d) => ({
                key: `${d.month}-${d.day}`,
                label: String(d.day),
                groupLabel: months[d.month - 1],
                close: d.close,
              }))}
              domain={{ min: 30_000, max: 40_000 }}
              ticks={[30_000, 32_500, 35_000, 37_500, 40_000]}
              labels={{
                close: t(INVESTOR_PAGE.stockInfo.daily.chart.close),
                axis: t(INVESTOR_PAGE.stockInfo.daily.chart.axis),
                summary: t(INVESTOR_PAGE.stockInfo.daily.chart.summary),
              }}
              locale={locale}
              tickEvery={{ compact: 8, wide: 4 }}
            />

            <details className="mt-6 group">
              <summary className="cursor-pointer list-none text-sm font-semibold text-accent-beverage transition-opacity hover:opacity-70">
                {t(INVESTOR_PAGE.stockInfo.daily.dailyTable)}
                <span className="ml-2 inline-block transition-transform group-open:rotate-90">
                  ›
                </span>
              </summary>
              <div className="mt-5 grid grid-cols-2 gap-x-10 sm:grid-cols-3 lg:grid-cols-4">
                {SHARE_PRICE_DAILY.map((d) => (
                  <div
                    key={`${d.month}-${d.day}`}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/5 py-2 text-sm tabular-nums"
                  >
                    <span className="text-ink/55">
                      {d.day} {months[d.month - 1]}
                    </span>
                    <span className="font-semibold">{fmt(d.close)}</span>
                  </div>
                ))}
              </div>
            </details>

            <p className="mt-6 text-sm text-ink/50">
              {t(INVESTOR_PAGE.stockInfo.daily.note)}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-6">
                {t(INVESTOR_PAGE.stockInfo.shareholders.heading)} ·{" "}
                {t(SHAREHOLDING_AS_OF)}
              </div>
              <div className="space-y-5">
                {SHAREHOLDERS.map((s, i) => (
                  <div key={t(s.name)} className="bg-[#FAFAFA] rounded-3xl p-6 lg:p-8">
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <div className="text-sm font-semibold">{t(s.name)}</div>
                      <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish tabular-nums">
                        {s.percent}
                      </div>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className={`h-full ${i === 0 ? "bg-accent-beverage" : "bg-ink"}`}
                        style={{ width: `${s.ratio * 100}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-ink/50 tabular-nums">
                      {s.shares} {t(INVESTOR_PAGE.stockInfo.shareholders.sharesUnit)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
            {[
              { k: t(INVESTOR_PAGE.stockInfo.rows.ticker.k), v: t(INVESTOR_PAGE.stockInfo.rows.ticker.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.exchange.k), v: t(INVESTOR_PAGE.stockInfo.rows.exchange.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.ipoDate.k), v: t(INVESTOR_PAGE.stockInfo.rows.ipoDate.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.sector.k), v: t(INVESTOR_PAGE.stockInfo.rows.sector.v) },
              { k: t(INVESTOR_PAGE.stockInfo.rows.parValue.k), v: t(INVESTOR_PAGE.stockInfo.rows.parValue.v) },
              {
                k: t(INVESTOR_PAGE.stockInfo.rows.authorizedShares.k),
                v: `${AUTHORIZED_SHARES} ${t(INVESTOR_PAGE.stockInfo.rows.authorizedShares.unit)}`,
              },
              {
                k: t(INVESTOR_PAGE.stockInfo.rows.outstandingShares.k),
                v: `${OUTSTANDING_SHARES} ${t(INVESTOR_PAGE.stockInfo.rows.outstandingShares.unit)}`,
              },
              { k: t(INVESTOR_PAGE.stockInfo.rows.registrar.k), v: SHARE_REGISTRAR },
            ].map((r) => (
              <div
                key={r.k}
                className="flex items-center justify-between gap-6 border-b border-ink/10 pb-5"
              >
                <div className="text-sm text-ink/50">{r.k}</div>
                <div className="font-semibold text-right">{r.v}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDENDS */}
      <section id="dividends" className="scroll-mt-24 py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(INVESTOR_PAGE.dividends.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.dividends.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(INVESTOR_PAGE.dividends.paragraph)}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-left text-[11px] uppercase tracking-[0.2em] font-bold text-ink/50">
                  <th className="py-4 pr-6">{t(INVESTOR_PAGE.dividends.columns.year)}</th>
                  <th className="py-4 px-4 text-right">{t(INVESTOR_PAGE.dividends.columns.total)}</th>
                  <th className="py-4 px-4 text-right">{t(INVESTOR_PAGE.dividends.columns.shares)}</th>
                  <th className="py-4 pl-4 text-right">{t(INVESTOR_PAGE.dividends.columns.perShare)}</th>
                </tr>
              </thead>
              <tbody>
                {DIVIDEND_HISTORY.map((d) => (
                  <tr key={d.year} className="border-b border-ink/5">
                    <td className="py-4 pr-6 font-extrabold tracking-tightish text-lg tabular-nums">
                      {d.year}
                    </td>
                    <td className="py-4 px-4 text-right tabular-nums">{d.total}</td>
                    <td className="py-4 px-4 text-right tabular-nums">{d.shares}</td>
                    <td className="py-4 pl-4 text-right tabular-nums font-semibold">
                      {d.perShare}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINANCIAL REPORT ARCHIVE */}
      <section id="financial-report" className="scroll-mt-24 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(INVESTOR_PAGE.financialReports.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(INVESTOR_PAGE.financialReports.heading)}
            </h2>
            <p className="mt-4 text-ink/60">
              {t(INVESTOR_PAGE.financialReports.paragraph)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FINANCIAL_REPORT_ARCHIVE.map((year) => (
              <div key={year.year} className="bg-[#FAFAFA] rounded-3xl p-7">
                <div className="text-3xl font-extrabold tracking-tightish tabular-nums mb-5">
                  {year.year}
                </div>
                <div className="space-y-3">
                  {year.periods.map((p) => (
                    <div
                      key={p.file}
                      className="border-b border-ink/5 pb-3 last:border-0 last:pb-0"
                    >
                      <a
                        href={p.file}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4"
                      >
                        <span className="text-sm text-ink/70 transition-colors group-hover:text-ink">
                          {t(p.label)}
                        </span>
                        <span className="text-xs font-semibold text-accent-beverage shrink-0 transition-opacity duration-300 group-hover:opacity-70">
                          {t(INVESTOR_PAGE.archiveDownloadLabel)}
                        </span>
                      </a>
                      {p.letter && (
                        <a
                          href={p.letter}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1.5 inline-block text-xs text-ink/40 underline decoration-ink/20 underline-offset-2 transition-colors hover:text-ink/70"
                        >
                          {t(INVESTOR_PAGE.financialReports.letterLabel)}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANNUAL & SUSTAINABILITY REPORT ARCHIVE */}
      {archives.map((archive, index) => (
        <section
          key={archive.id}
          id={archive.id}
          className={`scroll-mt-24 py-24 ${index % 2 === 0 ? "bg-[#FAFAFA]" : "bg-white"}`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
                {t(archive.copy.eyebrow)}
              </div>
              <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
                {t(archive.copy.heading)}
              </h2>
              <p className="mt-4 text-ink/60">{t(archive.copy.paragraph)}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {archive.items.map((item) => (
                <a
                  key={item.year}
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className={`group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] ${
                    index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA] hover:bg-white"
                  }`}
                >
                  <div className="relative aspect-[16/15] overflow-hidden bg-ink/5">
                    <Image
                      src={item.cover}
                      alt={`${t(archive.copy.eyebrow)} ${item.year}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-2xl font-extrabold tracking-tightish tabular-nums">
                      {item.year}
                    </div>
                    <div className="mt-2 text-xs font-semibold text-accent-beverage transition-opacity duration-300 group-hover:opacity-70">
                      {t(INVESTOR_PAGE.archiveDownloadLabel)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

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
                href={s.href.startsWith("#") ? s.href : href(s.href)}
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
