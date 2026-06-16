"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

export default function ProductLineup({ brand }: { brand: Brand }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const items = brand.products ?? [];

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

  // Drag-to-scroll (desktop)
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    const down = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const move = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = startScroll - (e.pageX - startX);
    };
    const up = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    el.style.cursor = "grab";
    el.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      el.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  if (!items.length) return null;

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 lg:mb-14 flex items-end justify-center md:justify-between gap-6">
        <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05] text-center md:text-left">
          Explore the lineup.
        </h2>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-ink/5 text-ink flex items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-ink/5 disabled:hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-ink/5 text-ink flex items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-ink/5 disabled:hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div className="relative">
      <div
        ref={railRef}
        className="overflow-x-auto overflow-y-hidden no-scrollbar select-none"
        style={{ touchAction: "pan-x" }}
      >
        <div className="flex gap-3 sm:gap-4 lg:gap-5 lineup-inset snap-x snap-mandatory pb-2">
          {items.map((p, i) => {
            // Full single-line product name, e.g.
            // "Hair Energy Fibertherapy Shampoo Active Menthol 170 mL".
            const parts = [brand.name];
            if (p.name && !brand.name.toLowerCase().includes(p.name.toLowerCase()))
              parts.push(p.name);
            if (p.variant) parts.push(p.variant);
            if (p.size) parts.push(p.size);
            const title = parts.join(" ");
            return (
            <article
              key={`${p.name}-${p.variant ?? i}`}
              data-card
              className="snap-center sm:snap-start shrink-0 w-[80vw] sm:w-[46vw] md:w-[34vw] lg:w-[27vw] max-w-[380px] flex flex-col"
            >
              {/* Product stage — frameless, with a subtle accent wash behind the product */}
              <div
                className="relative aspect-square overflow-hidden flex items-center justify-center group"
              >
                {/* Soft accent wash behind the product */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  aria-hidden
                >
                  <div
                    className="w-[75%] aspect-square rounded-full blur-3xl opacity-50 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    style={{
                      background: `radial-gradient(circle, ${brand.accentHex}55, transparent 65%)`,
                    }}
                  />
                </div>
                {/* Product image if provided; otherwise show a placeholder. */}
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={title}
                    fill
                    sizes="(min-width:1024px) 27vw, (min-width:640px) 46vw, 80vw"
                    className="object-contain p-1 sm:p-2 md:p-3 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                ) : (
                  <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-3 text-ink/35 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="opacity-70"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold">
                      Product image
                    </span>
                  </div>
                )}
              </div>

              {/* Meta — full product name on one line */}
              <div className="pt-5 sm:pt-6 md:pt-7 text-center px-2">
                <h3 className="text-[15px] sm:text-base lg:text-lg font-bold tracking-tightish leading-snug break-words">
                  {title}
                </h3>
              </div>

              {/* CTAs */}
              <div className="pt-4 sm:pt-5 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <Link
                  href="#story"
                  draggable={false}
                  className="text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.97]"
                  style={{
                    borderColor: brand.accentHex,
                    color: brand.accentHex,
                  }}
                >
                  Learn more
                </Link>
                <a
                  href="https://shop.akasha.co.id"
                  target="_blank"
                  rel="noreferrer"
                  draggable={false}
                  className="text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.97]"
                  style={{ backgroundColor: brand.accentHex }}
                >
                  Buy
                </a>
              </div>
            </article>
            );
          })}
        </div>
      </div>
      </div>

      {/* Mobile nav arrows — bottom, since the top-right pair is desktop-only */}
      <div className="flex md:hidden items-center justify-center gap-3 mt-6 px-4">
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

    </section>
  );
}
