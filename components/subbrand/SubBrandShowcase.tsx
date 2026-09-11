"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { SubBrandCard } from "@/lib/subBrands";
import type { Resolved, ResolvedSubBrand } from "@/lib/locale/resolve";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { BRAND } from "@/dictionaries/brand";
import { ShowcaseVariant } from "@/components/brand/BrandShowcase";

// A single image slot. The real card artwork already includes its own background &
// border, so nothing is drawn around it — the image is just placed. Until an asset
// exists, a plain (borderless) placeholder fills the same box so the page reads as
// a wireframe.
function Slot({
  card,
  aspect,
  sizes,
}: {
  card: Resolved<SubBrandCard>;
  aspect: string;
  sizes: string;
}) {
  const { t } = useLocale();
  const inner = card.image ? (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
      <Image
        src={card.image}
        alt={card.label ?? ""}
        fill
        sizes={sizes}
        className={card.imageFit === "cover" ? "object-cover" : "object-contain"}
        style={card.imagePosition ? { objectPosition: card.imagePosition } : undefined}
      />
    </div>
  ) : (
    <div
      className="relative w-full rounded-2xl bg-ink/[0.04] flex flex-col items-center justify-center gap-2 text-ink/30"
      style={{ aspectRatio: aspect }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{card.label ?? t(BRAND.subBrandShowcase.image)}</span>
    </div>
  );
  return card.href ? (
    <Link href={card.href} className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]">
      {inner}
    </Link>
  ) : (
    inner
  );
}

// Sub-brand showcase = a title image on top, then a grid of complete card images.
// No parallax (each image is whole) and no card chrome (each image carries its own
// background + border). Optional full-width `featured` card above the grid.
export default function SubBrandShowcase({ sub }: { sub: ResolvedSubBrand }) {
  const { t } = useLocale();
  const titleAspect = sub.showcaseTitleAspect ?? "3 / 2";
  const featuredAspect = sub.featuredAspect ?? "12 / 5";
  const cardAspect = sub.cardAspect ?? "4 / 5";
  const variants = sub.showcaseVariants ?? [];
  const wideTitle = sub.showcaseTitleSize === "wide";
  const wideShowcase = wideTitle || (variants.length > 0 && sub.showcaseWidth !== "default");
  const compactSpacing = sub.showcaseSpacing === "compact" || sub.showcaseSpacing === "tight" || sub.showcaseSpacing === "flush";
  const tightCardSpacing = sub.showcaseSpacing === "tight";
  const flushCardSpacing = sub.showcaseSpacing === "flush";

  return (
    <section
      id="showcase"
      className={`scroll-mt-24 bg-white ${
        compactSpacing
          ? "pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8"
          : "pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 md:pb-28"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        {/* Master width for the WHOLE showcase. Shrink/enlarge every asset (title,
            featured, grid) in one place: lower `max-w-*` to shrink on tablet/desktop,
            lower the `w-[..]` to shrink on mobile. */}
        <div className={`mx-auto w-full ${wideShowcase ? "max-w-content" : "max-w-2xl"}`}>
          {/* Title image — capped smaller than the master so it never dominates. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative mx-auto left-[var(--showcase-title-mobile-x)] top-[var(--showcase-title-mobile-y)] md:left-[var(--showcase-title-desktop-x)] md:top-[var(--showcase-title-desktop-y)] ${wideShowcase ? "w-full max-w-content" : "w-3/4 sm:w-full max-w-xl"}`}
            style={{
              "--showcase-title-mobile-x": sub.showcaseTitleMobileOffsetX ?? sub.showcaseTitleOffsetX ?? "0px",
              "--showcase-title-mobile-y": sub.showcaseTitleMobileOffsetY ?? sub.showcaseTitleOffsetY ?? "0px",
              "--showcase-title-desktop-x": sub.showcaseTitleOffsetX ?? "0px",
              "--showcase-title-desktop-y": sub.showcaseTitleOffsetY ?? "0px",
            } as CSSProperties}
          >
            {sub.showcaseTitle ? (
              <div className="relative w-full" style={{ aspectRatio: titleAspect }}>
                <Image
                  src={sub.showcaseTitle}
                  alt={`${sub.name} showcase`}
                  fill
                  sizes={wideShowcase ? "(min-width:1024px) 900px, 100vw" : "(min-width:768px) 576px, 66vw"}
                  className="object-contain object-center"
                />
              </div>
            ) : (
              <div className="relative w-full rounded-2xl bg-ink/[0.04] flex flex-col items-center justify-center gap-2 text-ink/30" style={{ aspectRatio: titleAspect }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{t(BRAND.subBrandShowcase.titleImage)}</span>
              </div>
            )}
          </motion.div>

          {variants.length > 0 ? (
            <div className="relative z-10 -mt-6 space-y-6 sm:-mt-10 sm:space-y-9 lg:-mt-12 lg:space-y-11">
              {variants.map((variant, i) => (
                <div
                  key={variant.bg}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01]"
                >
                  <ShowcaseVariant
                    variant={variant}
                    index={i}
                    brandName={sub.name}
                    align={sub.showcaseProductAlign ?? "center"}
                    parallax={sub.showcaseParallax ?? true}
                    frameAspect={sub.showcaseBannerAspect}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Cards */
            <div className={compactSpacing ? "space-y-2 sm:space-y-3" : "space-y-5 sm:space-y-6"}>
              {sub.featured && sub.featuredPosition !== "middle" && sub.featuredPosition !== "bottom" && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Slot card={sub.featured} aspect={featuredAspect} sizes="(min-width:768px) 672px, 88vw" />
              </motion.div>
            )}

            <div
              className={`grid grid-cols-2 ${
                flushCardSpacing
                  ? "gap-x-3 gap-y-0 sm:gap-x-3 sm:gap-y-0"
                  : tightCardSpacing
                  ? "gap-3"
                  : compactSpacing
                  ? "gap-x-3 gap-y-2 sm:gap-x-6 sm:gap-y-3"
                  : "gap-3 sm:gap-6"
              }`}
            >
              {sub.cards.map((card, i) => (
                <div key={card.label ?? i} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: (i % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Slot card={card} aspect={cardAspect} sizes="(min-width:768px) 330px, 44vw" />
                  </motion.div>

                  {i === 1 && sub.featured && sub.featuredPosition === "middle" && (
                    <motion.div
                      className="col-span-2"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Slot card={sub.featured} aspect={featuredAspect} sizes="(min-width:768px) 672px, 88vw" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {sub.featured && sub.featuredPosition === "bottom" && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Slot card={sub.featured} aspect={featuredAspect} sizes="(min-width:768px) 672px, 88vw" />
              </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
