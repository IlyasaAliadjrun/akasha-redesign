"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DIVISIONS, brandHref, brandsByDivision } from "@/lib/brands";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { home } from "@/dictionaries/home";

export default function DivisionCards() {
  const { asset, href, t } = useLocale();
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
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
            {t(home.divisions.eyebrow)}
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish max-w-5xl">
            <span className="block whitespace-nowrap">{t(home.divisions.heading1)}</span>
            <span className="block whitespace-nowrap">{t(home.divisions.heading2)}</span>
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            aria-label={t(home.common.previous)}
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center transition hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            aria-label={t(home.common.next)}
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
        className="overflow-x-auto overflow-y-hidden no-scrollbar select-none"
        style={{ touchAction: "pan-x pan-y" }}
      >
        <div className="flex gap-4 sm:gap-5 lg:gap-6 lineup-inset snap-x snap-mandatory pb-2">
          {DIVISIONS.map((d) => {
            const brands = brandsByDivision(d.id);
            const first = brands[0];
            return (
              <article
                key={d.id}
                data-card
                className="snap-start shrink-0 w-[54vw] sm:w-[58vw] md:w-[42vw] lg:w-[clamp(240px,19vw,280px)] aspect-[3/4] relative rounded-2xl sm:rounded-3xl overflow-hidden group"
              >
                <Link
                  href={first ? href(brandHref(first.slug)) : "#"}
                  aria-label={t(d.name)}
                  draggable={false}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={asset(d.image)}
                    alt={t(d.name)}
                    fill
                    draggable={false}
                    sizes="(min-width:1024px) 280px, (min-width:768px) 42vw, (min-width:640px) 58vw, 54vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 pointer-events-none"
                  />
                </Link>
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, ${d.accentHex}22 0%, rgba(0,0,0,0.55) 100%)`,
                  }}
                />
                <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/65 group-focus-within:bg-black/25 pointer-events-none" />
                <div className="absolute inset-x-5 sm:inset-x-6 md:inset-x-7 lg:inset-x-8 top-5 sm:top-6 md:top-7 lg:top-8 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                  <ul className="divide-y divide-white/40">
                    {brands.map((brand) => (
                      <li key={brand.slug}>
                        <Link
                          href={href(brandHref(brand.slug))}
                          draggable={false}
                          className="pointer-events-auto flex items-center justify-between gap-3 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white transition-colors hover:text-white/70"
                        >
                          <span>{brand.name}</span>
                          {/* <span aria-hidden>→</span> */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 z-20 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-end text-white group-hover:text-white/5 group-focus-within:text-white/50 pointer-events-none">
                  <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold tracking-tightish leading-tight">
                    {t(d.name)}
                  </div>
                  <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/80 group-hover:text-white/5 group-focus-within:text-white/70">{t(d.tagline)}</div>
                  <div className="mt-3 sm:mt-4 md:mt-5 text-xs font-medium opacity-80 group-hover:opacity-100 transition">
                    {t(home.common.explore)} →
                  </div>
                </div>
              </article>
            );
          })}
          <div className="shrink-0 w-4" />
        </div>
      </div>

      <div className="md:hidden max-w-content mx-auto px-4 sm:px-6 mt-6 flex items-center gap-3 justify-end">
        <button
          aria-label={t(home.common.previous)}
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          aria-label={t(home.common.next)}
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
