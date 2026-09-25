import type { Locale } from "@/lib/locale/paths";

// Financial figures are stored in Rp million. Compact labels differ per language:
// Indonesian says "M" for miliar (10^9) and "T" for triliun (10^12), while in
// English "M" reads as million — so English uses B / T instead.
const UNITS: Record<Locale, { t: string; b: string; m: string; sep: string }> = {
  id: { t: "T", b: "M", m: "jt", sep: " " },
  en: { t: "T", b: "B", m: "M", sep: "" },
};

export function formatRupiahCompact(millions: number, locale: Locale): string {
  const u = UNITS[locale];
  const tag = locale === "id" ? "id-ID" : "en-US";
  const abs = Math.abs(millions);
  const sign = millions < 0 ? "−" : "";
  const num = (v: number, digits: number) =>
    v.toLocaleString(tag, { minimumFractionDigits: digits, maximumFractionDigits: digits });
  if (abs >= 1_000_000) return `${sign}Rp ${num(abs / 1_000_000, 2)}${u.sep}${u.t}`;
  if (abs >= 1_000) return `${sign}Rp ${num(abs / 1_000, 1)}${u.sep}${u.b}`;
  return `${sign}Rp ${num(abs, 0)}${u.sep}${u.m}`;
}

export function formatPercent(value: number, locale: Locale, digits = 1, signed = false): string {
  const tag = locale === "id" ? "id-ID" : "en-US";
  const s = Math.abs(value).toLocaleString(tag, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  const sign = value < 0 ? "−" : signed ? "+" : "";
  return `${sign}${s}%`;
}

// Compound annual growth rate between the first and last value of a series.
export function cagr(first: number, last: number, years: number): number {
  return (Math.pow(last / first, 1 / years) - 1) * 100;
}
