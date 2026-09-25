"use client";
import Image from "next/image";
import Link from "next/link";
import { DIVISIONS, getBrand, pageBrands, type Brand } from "@/lib/brands";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { BRAND } from "@/dictionaries/brand";

const COUNT = 6;

// Brands from the same division first — starting after the current one so
// neighbouring pages don't all suggest the same few — then the other divisions.
// pageBrands() drops umbrella brands: they have no page, so a link would 404.
function related(slug: string): Brand[] {
  const all = pageBrands();
  const division = getBrand(slug)?.division;
  const at = all.findIndex((b) => b.slug === slug);
  const rotated = at < 0 ? all : [...all.slice(at + 1), ...all.slice(0, at)];
  const others = rotated.filter((b) => b.slug !== slug);
  return [
    ...others.filter((b) => b.division === division),
    ...others.filter((b) => b.division !== division),
  ].slice(0, COUNT);
}

export default function CrossSell({ current }: { current: { slug: string } }) {
  const { href, t } = useLocale();
  const brands = related(current.slug);

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-3">
          {t(BRAND.crossSell.eyebrow)}
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tightish mb-8 lg:mb-10">
          {t(BRAND.crossSell.heading)}
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 border-t border-ink/10">
          {brands.map((b) => {
            const division = DIVISIONS.find((d) => d.id === b.division);
            return (
              <li key={b.slug} className="border-b border-ink/10">
                <Link href={href(`/brands/${b.slug}`)} className="group flex items-center gap-4 py-4">
                  {/* The generated share card (npm run og:generate) doubles as a logo
                      thumbnail: it already puts each wordmark on a background it reads on.
                      The inner box is 125% tall so the frame crops off the card's bottom
                      fifth, where the small Akasha logo sits. */}
                  <span className="relative h-12 w-[88px] sm:h-14 sm:w-[106px] shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-ink/5">
                    <span className="absolute inset-x-0 top-0 h-[125%] transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={`/media/brands/${b.slug}/hero/og.jpg`}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 106px, 88px"
                        className="object-cover"
                      />
                    </span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-lg font-extrabold tracking-tightish">{b.name}</span>
                    {division && (
                      <span className="block truncate text-sm text-ink/50">{t(division.name)}</span>
                    )}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink/5 transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
