"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Locale } from "@/lib/locale/paths";
import { cagr, formatPercent, formatRupiahCompact } from "@/lib/format";

export type RevenueChartLabels = {
  netSales: string;
  netIncome: string;
  netMargin: string;
  salesGrowth: string; // headline tile: average yearly net-sales growth
  incomeGrowth: string; // headline tile: average yearly net-income growth
  cagrNote: string; // "CAGR {from}–{to}"
  marginNote: string; // "in {year}" — prefix for the earliest-year comparison
  yoy: string; // "vs previous year"
  axis: string; // "Rp, consolidated"
};

// Rounds the axis top up to a clean step so gridlines land on round figures.
function niceTicks(max: number, count = 4): number[] {
  const raw = max / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? raw;
  const top = Math.ceil(max / step) * step;
  return Array.from({ length: Math.round(top / step) + 1 }, (_, i) => i * step);
}

export default function RevenueChart({
  years,
  netSales,
  netIncome,
  locale,
  labels,
}: {
  years: readonly number[]; // ascending
  netSales: number[]; // Rp million, same order as years
  netIncome: number[];
  locale: Locale;
  labels: RevenueChartLabels;
}) {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const last = years.length - 1;
  const ticks = niceTicks(Math.max(...netSales));
  const top = ticks[ticks.length - 1];
  const pct = (v: number) => (v / top) * 100;
  const rp = (v: number) => formatRupiahCompact(v, locale);
  const short = (v: number) => rp(v).replace(/^Rp\s?/, "");
  const growth = (s: number[], i: number) => (i === 0 ? null : ((s[i] - s[i - 1]) / s[i - 1]) * 100);
  const margin = (i: number) => (netIncome[i] / netSales[i]) * 100;
  const axisLabel = (v: number) =>
    v === 0
      ? "0"
      : `${(v / 1_000_000).toLocaleString(locale === "id" ? "id-ID" : "en-US", { maximumFractionDigits: 1 })}${locale === "id" ? " T" : "T"}`;

  const span = `${years[0]}–${years[last]}`;
  const tiles = [
    { label: labels.salesGrowth, value: formatPercent(cagr(netSales[0], netSales[last], last), locale), note: labels.cagrNote.replace("{span}", span) },
    { label: labels.incomeGrowth, value: formatPercent(cagr(netIncome[0], netIncome[last], last), locale), note: labels.cagrNote.replace("{span}", span) },
    {
      label: `${labels.netMargin} ${years[last]}`,
      value: formatPercent(margin(last), locale),
      note: `${labels.marginNote} ${years[0]}: ${formatPercent(margin(0), locale)}`,
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-5 sm:p-8 lg:p-10">
      {/* Headline figures — the story the bars illustrate */}
      <div className="grid grid-cols-1 gap-6 border-b border-ink/5 pb-8 sm:grid-cols-3">
        {tiles.map((tile) => (
          <div key={tile.label}>
            <div className="text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">{tile.label}</div>
            <div className="mt-2 text-4xl font-extrabold tracking-tightish lg:text-5xl">{tile.value}</div>
            <div className="mt-1 text-xs text-ink/45">{tile.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-5 text-xs">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[3px] bg-accent-beverage" />
            <span className="text-ink/60">{labels.netSales}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[3px] bg-ink" />
            <span className="text-ink/60">{labels.netIncome}</span>
          </span>
        </div>
        <div className="text-[11px] text-ink/40">{labels.axis}</div>
      </div>

      {/* Plot */}
      <div className="relative mt-6 h-[280px] pl-9 sm:h-[340px] sm:pl-11 lg:h-[380px]">
        {ticks.map((tick) => (
          <div
            key={tick}
            className="pointer-events-none absolute left-9 right-0 border-t border-ink/[0.07] sm:left-11"
            style={{ bottom: `${pct(tick)}%` }}
          >
            <span className="absolute -left-9 -translate-y-1/2 text-[10px] tabular-nums text-ink/40 sm:-left-11 sm:text-[11px]">
              {axisLabel(tick)}
            </span>
          </div>
        ))}

        <div className="absolute inset-y-0 left-9 right-0 flex items-end sm:left-11">
          {years.map((year, i) => {
            const dim = active !== null && active !== i;
            const salesG = growth(netSales, i);
            const incomeG = growth(netIncome, i);
            return (
              <button
                key={year}
                type="button"
                className="group relative flex h-full flex-1 items-end justify-center gap-1 outline-none sm:gap-1.5"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                // Tap = focus + click on touch screens; toggling here would close the
                // tooltip the focus just opened. Tapping elsewhere blurs and closes it.
                onClick={() => setActive(i)}
                aria-label={`${year}: ${labels.netSales} ${rp(netSales[i])}, ${labels.netIncome} ${rp(netIncome[i])}, ${labels.netMargin} ${formatPercent(margin(i), locale)}`}
              >
                {/* net sales */}
                <div className="relative flex h-full w-full max-w-[40px] flex-col justify-end">
                  <motion.div
                    initial={reduceMotion ? false : { height: 0 }}
                    whileInView={{ height: `${pct(netSales[i])}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={reduceMotion ? { height: `${pct(netSales[i])}%` } : undefined}
                    className={`relative rounded-t-[4px] bg-accent-beverage transition-opacity duration-300 ${dim ? "opacity-30" : ""}`}
                  >
                    <span
                      className={`absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold tabular-nums text-ink/80 transition-opacity duration-300 sm:text-xs ${dim ? "opacity-30" : ""}`}
                    >
                      {short(netSales[i])}
                    </span>
                  </motion.div>
                </div>
                {/* net income */}
                <div className="relative flex h-full w-full max-w-[40px] flex-col justify-end">
                  <motion.div
                    initial={reduceMotion ? false : { height: 0 }}
                    whileInView={{ height: `${pct(netIncome[i])}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={reduceMotion ? { height: `${pct(netIncome[i])}%` } : undefined}
                    className={`rounded-t-[4px] bg-ink transition-opacity duration-300 ${dim ? "opacity-30" : ""}`}
                  />
                </div>

                {active === i && (
                  <div
                    className={`pointer-events-none absolute z-20 w-[210px] rounded-2xl bg-ink/95 p-4 text-left text-white shadow-xl ${
                      i === 0 ? "left-0" : i === last ? "right-0" : "left-1/2 -translate-x-1/2"
                    }`}
                    style={{ bottom: `calc(${pct(netSales[i])}% + 28px)` }}
                  >
                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/55">{year}</div>
                    {[
                      { k: labels.netSales, v: rp(netSales[i]), g: salesG, key: "bg-accent-beverage" },
                      { k: labels.netIncome, v: rp(netIncome[i]), g: incomeG, key: "bg-white" },
                    ].map((row) => (
                      <div key={row.k} className="mb-1.5 text-xs">
                        <div className="flex items-center gap-1.5 text-white/55">
                          <span className={`h-[3px] w-3 rounded-full ${row.key}`} />
                          {row.k}
                        </div>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-bold tabular-nums">{row.v}</span>
                          {row.g !== null && (
                            <span className="tabular-nums text-white/70">{formatPercent(row.g, locale, 1, true)}</span>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 flex justify-between border-t border-white/10 pt-2 text-xs">
                      <span className="text-white/55">{labels.netMargin}</span>
                      <span className="font-bold tabular-nums">{formatPercent(margin(i), locale)}</span>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Years + year-on-year sales growth */}
      <div className="mt-3 flex pl-9 sm:pl-11">
        {years.map((year, i) => {
          const g = growth(netSales, i);
          return (
            <div key={year} className={`flex-1 text-center transition-opacity duration-300 ${active !== null && active !== i ? "opacity-40" : ""}`}>
              <div className="text-xs font-semibold tabular-nums text-ink/70 sm:text-sm">{year}</div>
              <div className="mt-0.5 text-[10px] tabular-nums text-ink/45 sm:text-[11px]">
                {g === null ? " " : `${g < 0 ? "▼" : "▲"} ${formatPercent(Math.abs(g), locale, 0)}`}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 pl-9 text-[10px] text-ink/35 sm:pl-11">{labels.yoy}</div>
    </div>
  );
}
