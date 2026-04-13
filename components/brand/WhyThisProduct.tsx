"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

export default function WhyThisProduct({ brand }: { brand: Brand }) {
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

  if (!brand.reasons?.length) return null;

  return (
    <section className="bg-[#f5f5f7] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10 lg:mb-14 flex items-end justify-between gap-6">
        <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05] max-w-3xl">
          Kenapa {brand.name} tempat terbaik untuk kebutuhanmu.
        </h2>
        <Link
          href="#"
          className="hidden md:inline-block text-sm font-semibold transition-opacity duration-300 hover:opacity-60 whitespace-nowrap"
          style={{ color: brand.accentHex }}
        >
          Shop {brand.name} ›
        </Link>
      </div>

      <div ref={railRef} className="overflow-x-auto no-scrollbar select-none">
        <div className="flex gap-4 lg:gap-5 px-6 lg:px-10 snap-x snap-mandatory pb-2">
          {brand.reasons.map((r, i) => (
            <motion.article
              key={r.title}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(i * 0.05, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="snap-start shrink-0 w-[78vw] sm:w-[46vw] md:w-[32vw] lg:w-[23vw] bg-white rounded-3xl p-7 lg:p-8 min-h-[460px] lg:min-h-[500px] flex flex-col relative transition-all duration-500 hover:-translate-y-1"
            >
              {/* Small label */}
              <div
                className="text-xs font-semibold mb-4"
                style={{ color: brand.accentHex }}
              >
                {r.title.split(" ").slice(0, 2).join(" ")}
              </div>

              {/* Big headline */}
              <h3 className="text-[22px] lg:text-[26px] font-extrabold tracking-tightish leading-[1.15] mb-4">
                {r.title}.
              </h3>

              {/* Description */}
              <p className="text-ink/65 text-[15px] leading-relaxed">
                {r.body}
              </p>

              {/* Spacer pushes visual to bottom */}
              <div className="flex-1" />

              {/* Visual block at bottom */}
              <div
                className="mt-6 h-[130px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${brand.accentHex}18, ${brand.accentHex}05)`,
                }}
              >
                <div
                  className="absolute w-24 h-24 rounded-full blur-2xl opacity-60"
                  style={{
                    background: `radial-gradient(circle, ${brand.accentHex}80, transparent 65%)`,
                  }}
                />
                <div className="relative text-5xl">{r.icon}</div>
              </div>

              {/* + button bottom-right */}
              <button
                aria-label="Learn more"
                className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center transition-all duration-500 hover:bg-ink hover:text-white hover:scale-110"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </motion.article>
          ))}
          <div className="shrink-0 w-4" />
        </div>
      </div>

      {/* Bottom nav arrows */}
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
