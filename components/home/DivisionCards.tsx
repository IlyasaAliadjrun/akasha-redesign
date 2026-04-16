"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DIVISIONS, brandsByDivision } from "@/lib/brands";

export default function DivisionCards() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateButtons();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Drag-to-scroll for desktop
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

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
            Five divisions
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish max-w-3xl">
            One company. Many moments of your day.
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center transition hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center transition hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="overflow-x-auto no-scrollbar select-none"
      >
        <div className="flex gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-10 snap-x snap-mandatory">
          {DIVISIONS.map((d) => {
            const first = brandsByDivision(d.id)[0];
            return (
              <Link
                key={d.id}
                data-card
                href={first ? `/brands/${first.slug}` : "#"}
                draggable={false}
                className="snap-start shrink-0 w-[84vw] sm:w-[58vw] md:w-[42vw] lg:w-[30vw] xl:w-[26vw] max-w-[440px] aspect-[3/4] h-auto max-h-[720px] min-h-[440px] relative rounded-2xl sm:rounded-3xl overflow-hidden group"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  draggable={false}
                  sizes="(min-width:1280px) 26vw, (min-width:1024px) 30vw, (min-width:768px) 42vw, (min-width:640px) 58vw, 84vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 pointer-events-none"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, ${d.accentHex}22 0%, rgba(0,0,0,0.55) 100%)`,
                  }}
                />
                <div className="absolute inset-0 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold">
                      {d.brandCount} {d.brandCount === 1 ? "brand" : "brands"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tightish leading-tight">
                      {d.name}
                    </div>
                    <div className="mt-1.5 sm:mt-2 text-sm sm:text-base text-white/80">{d.tagline}</div>
                    <div className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm font-medium opacity-80 group-hover:opacity-100 transition">
                      Explore →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="shrink-0 w-4" />
        </div>
      </div>

      <div className="md:hidden max-w-[1400px] mx-auto px-4 sm:px-6 mt-6 flex items-center gap-3 justify-end">
        <button
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
    </section>
  );
}
