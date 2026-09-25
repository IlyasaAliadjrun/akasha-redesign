import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale/paths";
import { BRAND } from "@/dictionaries/brand";

// Year archives: the newest years stay open, older ones sit behind a native
// <details>. The folded cards are still in the HTML, so search engines index
// them, Ctrl+F finds them, and the toggle works without JavaScript.
export default function FoldedArchive<T>({
  items,
  keep = 3,
  yearOf,
  render,
  locale,
  gridClassName,
}: {
  items: readonly T[]; // newest first
  keep?: number;
  yearOf: (item: T) => number | string;
  render: (item: T) => ReactNode;
  locale: Locale;
  gridClassName: string;
}) {
  const recent = items.slice(0, keep);
  const older = items.slice(keep);
  const range = older.length
    ? `${yearOf(older[older.length - 1])}–${yearOf(older[0])}`
    : "";

  return (
    <>
      <div className={gridClassName}>{recent.map(render)}</div>
      {older.length > 0 && (
        <details className="group/archive mt-8">
          <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white [&::-webkit-details-marker]:hidden">
            <span className="group-open/archive:hidden">
              {BRAND.common.archiveShow[locale].replace("{range}", range)}
            </span>
            <span className="hidden group-open/archive:inline">{BRAND.common.archiveHide[locale]}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-open/archive:rotate-180"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className={`mt-8 ${gridClassName}`}>{older.map(render)}</div>
        </details>
      )}
    </>
  );
}
