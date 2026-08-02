"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/lib/locale/paths";

const COPY: Record<Locale, { body: string; cta: string }> = {
  en: { body: "The page you're looking for doesn't exist.", cta: "Back to home" },
  id: { body: "Halaman yang kamu cari tidak ditemukan.", cta: "Kembali ke beranda" },
};

// Next.js doesn't reliably pass route `params` to not-found.tsx when it's reached
// via a programmatic notFound() call (as opposed to an unmatched segment), so the
// locale is read from the actual URL instead of trusting a params prop.
export default function LocaleNotFound() {
  const pathname = usePathname() || "/";
  const segment = pathname.split("/")[1];
  const locale = locales.includes(segment as Locale) ? (segment as Locale) : defaultLocale;
  const t = COPY[locale];

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-hero font-extrabold tracking-tightish">404</div>
        <p className="mt-4 text-ink/60">{t.body}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
