"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#0066CC";

export type SharePricePoint = {
  key: string;
  label: string; // sudah dilokalkan di server
  groupLabel: string; // nama bulan; garis pemisah ditarik saat berganti
  close: number;
};

export type SharePriceChartLabels = {
  close: string;
  axis: string;
  summary: string;
};

export default function SharePriceChart({
  data,
  domain,
  ticks,
  labels,
  locale,
  tickEvery = { compact: 6, wide: 3 },
}: {
  data: SharePricePoint[];
  domain: { min: number; max: number };
  ticks: number[];
  labels: SharePriceChartLabels;
  locale: "en" | "id";
  tickEvery?: { compact: number; wide: number };
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const nf = useMemo(
    () => new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US"),
    [locale],
  );

  const compact = width > 0 && width < 640;
  const height = compact ? 300 : 400;
  const pad = {
    top: 28,
    right: compact ? 14 : 24,
    bottom: 44,
    left: compact ? 52 : 64,
  };
  const plotW = Math.max(width - pad.left - pad.right, 0);
  const plotH = height - pad.top - pad.bottom;
  const lastIndex = data.length - 1;

  const x = useCallback(
    (i: number) => pad.left + (lastIndex === 0 ? 0 : (i * plotW) / lastIndex),
    [lastIndex, pad.left, plotW],
  );
  const y = useCallback(
    (v: number) =>
      pad.top + (1 - (v - domain.min) / (domain.max - domain.min)) * plotH,
    [domain.max, domain.min, pad.top, plotH],
  );

  const { linePath, peak } = useMemo(
    () => ({
      linePath: data
        .map((d, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(d.close)}`)
        .join(""),
      peak: data.reduce((a, b, i) => (b.close > data[a].close ? i : a), 0),
    }),
    [data, x, y],
  );

  const peakValue = data[peak]?.close;

  // Batas kelompok: garis tipis saat tahun (atau bulan) berganti.
  const groupBreaks = data
    .map((d, i) => (i > 0 && d.groupLabel !== data[i - 1].groupLabel ? i : -1))
    .filter((i) => i > 0);

  const step = compact ? tickEvery.compact : tickEvery.wide;

  const pointerToIndex = (clientX: number) => {
    const el = wrapRef.current;
    if (!el || plotW <= 0) return null;
    const rect = el.getBoundingClientRect();
    const ratio = (clientX - rect.left - pad.left) / plotW;
    return Math.max(0, Math.min(lastIndex, Math.round(ratio * lastIndex)));
  };

  const activePoint = active === null ? null : data[active];

  return (
    <div className="rounded-3xl bg-white p-4 sm:p-6 lg:p-8">
      {/* Satu garis tunggal tidak butuh kotak legenda — judul seksinya sudah
          menyebutkan apa yang diplot. */}
      <div
        ref={wrapRef}
        className="relative w-full"
        style={{ height }}
        onPointerMove={(e) => setActive(pointerToIndex(e.clientX))}
        onPointerLeave={() => setActive(null)}
      >
        {width > 0 && (
          <>
            <svg
              width={width}
              height={height}
              role="img"
              aria-label={labels.summary}
              className="overflow-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-beverage/40"
              tabIndex={0}
              onFocus={() => setActive((a) => a ?? lastIndex)}
              onBlur={() => setActive(null)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
                e.preventDefault();
                setActive((a) => {
                  const base = a ?? lastIndex;
                  return Math.max(
                    0,
                    Math.min(lastIndex, base + (e.key === "ArrowRight" ? 1 : -1)),
                  );
                });
              }}
            >
              {ticks.map((tv) => (
                <g key={tv}>
                  <line
                    x1={pad.left}
                    x2={pad.left + plotW}
                    y1={y(tv)}
                    y2={y(tv)}
                    stroke="#0A0A0A"
                    strokeOpacity={0.08}
                    strokeWidth={1}
                  />
                  <text
                    x={pad.left - 10}
                    y={y(tv) + 4}
                    textAnchor="end"
                    className="fill-ink/45 tabular-nums"
                    fontSize={11}
                  >
                    {nf.format(tv)}
                  </text>
                </g>
              ))}

              {groupBreaks.map((i) => (
                <line
                  key={i}
                  x1={x(i) - (plotW / lastIndex) * 0.5}
                  x2={x(i) - (plotW / lastIndex) * 0.5}
                  y1={pad.top}
                  y2={pad.top + plotH}
                  stroke="#0A0A0A"
                  strokeOpacity={0.12}
                  strokeWidth={1}
                />
              ))}

              <motion.path
                d={linePath}
                fill="none"
                stroke={ACCENT}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduceMotion ? false : { pathLength: 0 }}
                whileInView={reduceMotion ? undefined : { pathLength: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />

              {peakValue !== undefined && peak !== lastIndex && (
                <g>
                  <circle
                    cx={x(peak)}
                    cy={y(peakValue)}
                    r={4}
                    fill={ACCENT}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <text
                    x={x(peak)}
                    y={y(peakValue) - 12}
                    textAnchor="middle"
                    className="fill-ink/70 tabular-nums"
                    fontSize={11}
                    fontWeight={700}
                  >
                    {nf.format(peakValue)}
                  </text>
                </g>
              )}

              <g>
                <circle
                  cx={x(lastIndex)}
                  cy={y(data[lastIndex].close)}
                  r={4.5}
                  fill={ACCENT}
                  stroke="#fff"
                  strokeWidth={2}
                />
                <text
                  x={x(lastIndex)}
                  y={y(data[lastIndex].close) + 20}
                  textAnchor="end"
                  className="fill-ink/70 tabular-nums"
                  fontSize={11}
                  fontWeight={700}
                >
                  {nf.format(data[lastIndex].close)}
                </text>
              </g>

              {active !== null && (
                <g>
                  <line
                    x1={x(active)}
                    x2={x(active)}
                    y1={pad.top}
                    y2={pad.top + plotH}
                    stroke="#0A0A0A"
                    strokeOpacity={0.25}
                    strokeWidth={1}
                  />
                  <circle
                    cx={x(active)}
                    cy={y(data[active].close)}
                    r={4.5}
                    fill={ACCENT}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </g>
              )}

              {data.map((d, i) =>
                i % step === 0 ? (
                  <text
                    key={d.key}
                    x={x(i)}
                    y={pad.top + plotH + 18}
                    textAnchor="middle"
                    className="fill-ink/45"
                    fontSize={10}
                  >
                    {d.label}
                  </text>
                ) : null,
              )}
              {[0, ...groupBreaks].map((i) => (
                <text
                  key={`g-${data[i].groupLabel}`}
                  x={x(i)}
                  y={pad.top + plotH + 36}
                  textAnchor="start"
                  className="fill-ink/60 tabular-nums"
                  fontSize={11}
                  fontWeight={700}
                >
                  {data[i].groupLabel}
                </text>
              ))}
            </svg>

            {activePoint && (
              <div
                className="pointer-events-none absolute top-0 z-10 w-[140px] rounded-2xl bg-ink/95 px-4 py-3 text-white shadow-lg"
                style={{
                  left: Math.min(
                    Math.max(x(active!) - 70, 0),
                    Math.max(width - 140, 0),
                  ),
                }}
              >
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  {activePoint.label} {activePoint.groupLabel}
                </div>
                <div className="text-sm font-bold tabular-nums">
                  Rp {nf.format(activePoint.close)}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-2 text-[11px] text-ink/40">{labels.axis}</div>
    </div>
  );
}
