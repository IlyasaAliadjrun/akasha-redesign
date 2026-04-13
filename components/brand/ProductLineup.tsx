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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10 lg:mb-14 flex items-end justify-between gap-6">
        <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
          Explore the lineup.
        </h2>
        <Link
          href="#story"
          className="hidden md:inline-block text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
          style={{ color: brand.accentHex }}
        >
          Compare all variants ›
        </Link>
      </div>

      <div ref={railRef} className="overflow-x-auto no-scrollbar select-none">
        <div className="flex gap-4 lg:gap-5 px-6 lg:px-10 snap-x snap-mandatory pb-2">
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
              className="snap-start shrink-0 w-[78vw] sm:w-[46vw] md:w-[34vw] lg:w-[25vw] flex flex-col"
            >
              {/* Product stage — big gradient rectangle, Apple-style */}
              <div
                className="relative aspect-[4/5] rounded-3xl overflow-hidden flex items-center justify-center group"
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
                  className="relative text-center px-6 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                  style={{ color: brand.accentHex }}
                >
                  <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-60 mb-2">
                    {brand.name}
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold tracking-tightish leading-[1.05]">
                    {p.variant ?? p.name}
                  </div>
                </div>

                {/* Dots (mimic Apple's color swatches) */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
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
              <div className="pt-8 text-center">
                <h3 className="text-[22px] lg:text-[26px] font-extrabold tracking-tightish leading-tight">
                  {p.name}
                  {p.variant && (
                    <span className="block text-ink/55 font-light text-[17px] mt-1">
                      {p.variant}
                    </span>
                  )}
                </h3>
                {p.size && (
                  <div className="mt-3 text-sm text-ink/55">{p.size}</div>
                )}
              </div>

              {/* CTAs */}
              <div className="pt-6 flex items-center justify-center gap-3">
                <Link
                  href="#story"
                  draggable={false}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.97]"
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
                  className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.97]"
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

      {/* Bottom nav arrows, Apple-style */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-10 flex items-center justify-end gap-3">
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
