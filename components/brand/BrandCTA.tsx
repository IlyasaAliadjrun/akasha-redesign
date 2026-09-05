"use client";
import type { ResolvedBrand } from "@/lib/locale/resolve";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { BRAND } from "@/dictionaries/brand";

export default function BrandCTA({ brand }: { brand: ResolvedBrand }) {
  const { t } = useLocale();
  return (
    <section
      data-theme="dark"
      className="py-32 text-center text-white"
      style={{ backgroundColor: brand.accentHex }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]"
            style={{ color: brand.ctaHeadlineColor }}
>
            {brand.ctaHeadline ??
              `${t(BRAND.cta.before)}${brand.name}${t(BRAND.cta.after)}`}
        </h2>
        {!brand.hideCtaTagline && brand.tagline && (
          <p className="mt-4 text-white/80 text-lg">
            {brand.tagline}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://shop.akasha.co.id"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-7 py-3 rounded-full bg-white text-ink hover:bg-ink hover:text-white transition"
          >
            {t(BRAND.cta.buyNow)}
          </a>
          <a
            href="#"
            className="text-sm font-semibold px-7 py-3 rounded-full border border-white/70 hover:bg-white/10 transition"
          >
            {t(BRAND.cta.findStore)}
          </a>
        </div>
      </div>
    </section>
  );
}
