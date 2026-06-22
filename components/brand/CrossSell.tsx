"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BRANDS, type Brand } from "@/lib/brands";

export default function CrossSell({ current }: { current: Brand }) {
  const others = BRANDS.filter((b) => b.slug !== current.slug).slice(0, 3);
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
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-3">
          More from Akasha
        </div>
        <h2 className="text-headline font-extrabold tracking-tightish mb-12">
          Lanjutkan perjalananmu.
        </h2>
        {/* Mobile: horizontal swipe slider (like Explore the lineup). md+: 3-col grid. */}
        <div
          ref={railRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 overflow-x-auto overflow-y-hidden md:overflow-x-visible md:overflow-y-visible no-scrollbar snap-x snap-mandatory"
        >
          {others.map((b) => (
            <Link
              key={b.slug}
              data-card
              href={`/brands/${b.slug}`}
              className="group relative snap-start shrink-0 md:shrink w-[64vw] xs:w-[58vw] sm:w-[46vw] md:w-auto aspect-[3/4] md:aspect-auto md:h-[420px] rounded-3xl overflow-hidden"
            >
              <Image
                src={b.heroImage}
                alt={b.name}
                fill
                sizes="(min-width:768px) 33vw, 80vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="text-2xl font-extrabold tracking-tightish">{b.name}</div>
                <div className="text-sm text-white/80 mt-1">{b.tagline}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Nav arrows — mobile only (md+ is a static grid, no overflow). */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
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
