"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

// Image cards shown directly beneath BrandIntro. Renders nothing unless
// the brand provides `about` entries (assets live in /public/brand/{slug}/about).
// Mobile: horizontal swipe slider with nav arrows (like Explore the lineup).
// sm+: grid whose column count follows how many cards the brand actually has
// (3 assets → 3 columns, 2 → 2, 1 → a single card kept at 3-column size), so a
// brand that only received two photos never leaves a hole in the row.
// (arrows/rail behaviour are inert at sm+ because there's no overflow).

// Static class strings — Tailwind only ships classes it can see literally.
const COLS: Record<number, string> = {
  1: "sm:grid-cols-1 sm:max-w-[320px] lg:max-w-[360px]",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};
// Matches the column width each layout gives a card inside `max-w-content`.
const SIZES: Record<number, string> = {
  1: "(min-width:640px) 360px, 64vw",
  2: "(min-width:640px) 50vw, 64vw",
  3: "(min-width:640px) 33vw, 64vw",
};

export default function BrandAbout({ brand }: { brand: Brand }) {
  const cards = brand.about ?? [];
  // 4+ cards keep wrapping in 3 columns, the densest layout the section supports.
  const cols = Math.min(Math.max(cards.length, 1), 3);
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 12 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!cards.length) return null;

  return (
    <section className="bg-white pb-16 sm:pb-20 md:pb-24 -mt-10 sm:-mt-14 lg:-mt-20">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div
          ref={railRef}
          className={`flex sm:grid ${COLS[cols]} sm:mx-auto gap-3 sm:gap-4 lg:gap-5 overflow-x-auto overflow-y-hidden sm:overflow-x-visible sm:overflow-y-visible no-scrollbar snap-x snap-mandatory`}
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(i * 0.08, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="snap-start shrink-0 sm:shrink w-[64vw] xs:w-[58vw] sm:w-auto relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden group"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes={SIZES[cols]}
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              {/* Soft gradient so the label stays readable over any artwork. */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
                aria-hidden
              />
              <h3 className="absolute left-4 sm:left-5 right-4 bottom-4 sm:bottom-5 text-white text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tightish leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                {c.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Nav arrows — mobile only (sm+ is a static grid, no overflow). */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="w-11 h-11 rounded-full bg-ink/5 text-ink flex items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-ink/5 disabled:hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="w-11 h-11 rounded-full bg-ink/5 text-ink flex items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-ink/5 disabled:hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
