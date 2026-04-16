"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 lg:mb-14">
        <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
          Explore the lineup.
        </h2>
      </div>

      <div className="relative">
        <button
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          className="hidden md:flex absolute left-4 lg:left-6 top-[35%] -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white disabled:opacity-0 disabled:pointer-events-none"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          className="hidden md:flex absolute right-4 lg:right-6 top-[35%] -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white disabled:opacity-0 disabled:pointer-events-none"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
        </button>

      <div ref={railRef} className="overflow-x-auto no-scrollbar select-none">
        <div className="flex gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-6 lg:px-10 snap-x snap-mandatory pb-2">
          {items.map((p, i) => (
            <motion.article
              key={`${p.name}-${p.variant ?? i}`}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(i * 0.04, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="snap-start shrink-0 w-[72vw] xs:w-[62vw] sm:w-[44vw] md:w-[32vw] lg:w-[24vw] max-w-[320px] flex flex-col"
            >
              {/* Product stage — gradient square, Apple-style */}
              <div
                className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden flex items-center justify-center group"
                style={{
                  background: `linear-gradient(180deg, ${brand.accentHex}1f 0%, ${brand.accentHex}08 55%, #f5f5f7 100%)`,
                }}
              >
                {/* Soft glow */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  <div
                    className="w-[70%] aspect-square rounded-full blur-3xl opacity-70 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    style={{
                      background: `radial-gradient(circle, ${brand.accentHex}80, transparent 65%)`,
                    }}
                  />
                </div>
                {/* Word mark watermark as stand-in product "image" */}
                <div
                  className="relative text-center px-4 sm:px-5 w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                  style={{ color: brand.accentHex }}
                >
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 mb-1.5 sm:mb-2 truncate">
                    {brand.name}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold tracking-tightish leading-[1.05] break-words hyphens-auto">
                    {p.variant ?? p.name}
                  </div>
                </div>

                {/* Dots (mimic Apple's color swatches) */}
                <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {[0, 1, 2, 3].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          d === 0 ? brand.accentHex : `${brand.accentHex}40`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="pt-5 sm:pt-6 md:pt-7 text-center px-2">
                <h3 className="text-[17px] sm:text-[19px] lg:text-[22px] font-extrabold tracking-tightish leading-tight break-words">
                  {p.name}
                  {p.variant && (
                    <span className="block text-ink/55 font-light text-[14px] sm:text-[15px] lg:text-[16px] mt-0.5 sm:mt-1">
                      {p.variant}
                    </span>
                  )}
                </h3>
                {p.size && (
                  <div className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-ink/55">{p.size}</div>
                )}
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
            </motion.article>
          ))}
          <div className="shrink-0 w-4" />
        </div>
      </div>
      </div>

    </section>
  );
}
