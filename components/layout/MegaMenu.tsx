"use client";
import Link from "next/link";
import { useState } from "react";
import { DIVISIONS, brandsByDivision, childrenOf, type Brand } from "@/lib/brands";

function BrandItem({
  brand,
  onClose,
}: {
  brand: Brand;
  onClose: () => void;
}) {
  const children = childrenOf(brand.slug);
  const [open, setOpen] = useState(false);

  if (!children.length) {
    return (
      <li>
        <Link
          onClick={onClose}
          href={`/brands/${brand.slug}`}
          className="text-base font-medium hover:opacity-60 transition"
        >
          {brand.name}
        </Link>
      </li>
    );
  }

  // Umbrella brand: it has no page of its own, so the name is not a link — it only
  // toggles the sub-brand list, which sits directly beneath it and is revealed on
  // hover (desktop) or by tapping (mobile).
  return (
    <li className="group">
      <button
        type="button"
        aria-label={`Toggle ${brand.name} sub-brands`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-left hover:opacity-60 transition"
      >
        <span className="text-base font-medium">{brand.name}</span>
        <span className="p-1 -m-1 text-ink/40">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            } md:group-hover:rotate-180`}
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <ul
        className={`ml-1 pl-3 border-l border-black/10 space-y-1.5 overflow-hidden transition-all duration-200 ${
          open
            ? "mt-2 max-h-80 opacity-100"
            : "max-h-0 opacity-0 md:group-hover:mt-2 md:group-hover:max-h-80 md:group-hover:opacity-100"
        }`}
      >
        {children.map((c) => (
          <li key={c.slug}>
            <Link
              onClick={onClose}
              href={`/brands/${c.slug}`}
              className="block text-sm text-ink/60 hover:text-ink transition"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function MegaMenu({
  onClose,
  mobile = false,
}: {
  onClose: () => void;
  mobile?: boolean;
}) {
  return (
    <div
      className={`${
        mobile ? "" : "border-t border-black/5 bg-white"
      } animate-[fadeIn_0.2s_ease-out]`}
    >
      <div
        className={`max-w-[1400px] mx-auto ${
          mobile ? "" : "px-10 py-10"
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10`}
      >
        {DIVISIONS.map((d) => (
          <div key={d.id}>
            <div
              className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3"
              style={{ color: d.accentHex }}
            >
              {d.name}
            </div>
            <ul className="space-y-2">
              {brandsByDivision(d.id).map((b) => (
                <BrandItem key={b.slug} brand={b} onClose={onClose} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
