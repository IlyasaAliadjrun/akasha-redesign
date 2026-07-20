"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SubBrandCard } from "@/lib/subBrands";
import type { SubBrand } from "@/lib/subBrands";

// A single image slot. The real card artwork already includes its own background &
// border, so nothing is drawn around it — the image is just placed. Until an asset
// exists, a plain (borderless) placeholder fills the same box so the page reads as
// a wireframe.
function Slot({
  card,
  aspect,
  sizes,
}: {
  card: SubBrandCard;
  aspect: string;
  sizes: string;
}) {
  const inner = card.image ? (
    <div className="relative w-full" style={{ aspectRatio: aspect }}>
      <Image src={card.image} alt={card.label ?? ""} fill sizes={sizes} className="object-contain" />
    </div>
  ) : (
    <div
      className="relative w-full rounded-2xl bg-ink/[0.04] flex flex-col items-center justify-center gap-2 text-ink/30"
      style={{ aspectRatio: aspect }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{card.label ?? "Gambar"}</span>
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
export default function SubBrandShowcase({ sub }: { sub: SubBrand }) {
  const titleAspect = sub.showcaseTitleAspect ?? "3 / 2";
  const featuredAspect = sub.featuredAspect ?? "12 / 5";
  const cardAspect = sub.cardAspect ?? "4 / 5";

  return (
    <section id="showcase" className="scroll-mt-24 bg-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 md:pb-28">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        {/* Title image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          {sub.showcaseTitle ? (
            <div className="relative w-full" style={{ aspectRatio: titleAspect }}>
              <Image src={sub.showcaseTitle} alt={`${sub.name} showcase`} fill sizes="(min-width:768px) 672px, 100vw" className="object-contain" />
            </div>
          ) : (
            <div className="relative w-full rounded-2xl bg-ink/[0.04] flex flex-col items-center justify-center gap-2 text-ink/30" style={{ aspectRatio: titleAspect }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Gambar title showcase</span>
            </div>
          )}
        </motion.div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 lg:mt-14 space-y-5 sm:space-y-6">
          {sub.featured && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Slot card={sub.featured} aspect={featuredAspect} sizes="(min-width:1024px) 980px, 100vw" />
            </motion.div>
          )}

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {sub.cards.map((card, i) => (
              <motion.div
                key={card.label ?? i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Slot card={card} aspect={cardAspect} sizes="(min-width:640px) 46vw, 90vw" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
