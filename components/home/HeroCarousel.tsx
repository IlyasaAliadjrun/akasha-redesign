"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Hero carousel — one slide per asset in /public/main_banner.
// max-w on the h1 is sized to fit "Nestlé Pure Life" on one line; anything
// longer (e.g. "Makarizo Hair Energy") wraps naturally to a second line.
const slides = [
  {
    slug: "nestle-pure-life",
    name: "Nestlé Pure Life",
    tag: "Gak dingin tetep seger",
    href: "/brands/nestle-pure-life",
    bg: "#c2185b",
    image: "/main_banner/main banner NPL.jpg",
  },
  {
    slug: "hair-energy",
    name: "Makarizo Hair Energy",
    tag: "Wangi sepanjang hari",
    href: "/brands/hair-energy",
    bg: "#d2691e",
    image: "/main_banner/main banner HE.jpg",
  },
  {
    slug: "make-it",
    name: "Make It",
    tag: "Your scent. Your story",
    href: "/brands/make-it",
    bg: "#1c1c1c",
    image: "/main_banner/Main banner make it.jpg",
  },
  {
    slug: "barber-daily",
    name: "Barber Daily",
    tag: "Barbershop-quality grooming, every day",
    href: "/brands/barber-daily",
    bg: "#2a323d",
    image: "/main_banner/main banner BD.jpg",
  },
  {
    slug: "wonhae",
    name: "Wonhae",
    tag: "Korean flavors, Indonesian hearts",
    href: "/brands/wonhae",
    bg: "#a8201a",
    image: "/main_banner/main banner WONHAE.jpg",
  },
];

const AUTO_MS = 3000;

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  // Image fade duration. Auto-advance crossfades 0.5s; user-driven changes
  // (arrows, dots) snap instantly with 0s.
  const [fadeMs, setFadeMs] = useState(0.5);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFadeMs(0.5);
      setI((v) => (v + 1) % slides.length);
    }, AUTO_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const s = slides[i];
  const goTo = (idx: number) => {
    setFadeMs(0);
    setI(idx);
    startTimer();
  };
  const prev = () => goTo((i - 1 + slides.length) % slides.length);
  const next = () => goTo((i + 1) % slides.length);

  return (
    <section
      data-theme="dark"
      className="relative h-[75svh] sm:h-[100svh] min-h-[400px] sm:min-h-[clamp(480px,70vh,720px)] max-h-[1100px] w-full overflow-hidden transition-colors duration-[1500ms]"
      style={{ backgroundColor: s.bg }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: fadeMs, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={s.image}
            alt={s.name}
            fill
            priority
            className="object-contain sm:object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-start justify-end sm:justify-center text-left text-white pl-6 sm:pl-20 md:pl-28 lg:pl-36 pr-6 sm:pr-10 md:pr-16 lg:pr-24 pb-28 sm:pb-0">
        <div className="max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-[clamp(22px,3.6vw,52px)] font-extrabold tracking-tightish leading-[1.05] max-w-[14ch]">
            {s.name}
          </h1>
          <p className="mt-3 sm:mt-4 text-[clamp(12px,1.2vw,17px)] font-light text-white/85">{s.tag}</p>
          <Link
            href={s.href}
            className="mt-6 sm:mt-8 md:mt-10 inline-block text-[13px] sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/80 hover:bg-white hover:text-ink transition-all duration-500 hover:scale-[1.03]"
          >
            Discover
          </Link>
        </div>
      </div>

      {/* Prev / Next arrows — responsive, vertically centered, animated */}
      <div className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20">
        <motion.button
          onClick={prev}
          aria-label="Previous slide"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="block p-2 sm:p-3 md:p-4 text-white hover:text-white/50 focus:text-white/50 focus:outline-none transition-colors duration-300"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ x: [0, -4, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-10 sm:w-10 sm:h-16 md:w-12 md:h-20 lg:w-14 lg:h-24"
          >
            <polyline points="15 5 8 12 15 19" />
          </motion.svg>
        </motion.button>
      </div>
      <div className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20">
        <motion.button
          onClick={next}
          aria-label="Next slide"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="block p-2 sm:p-3 md:p-4 text-white hover:text-white/50 focus:text-white/50 focus:outline-none transition-colors duration-300"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ x: [0, 4, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-10 sm:w-10 sm:h-16 md:w-12 md:h-20 lg:w-14 lg:h-24"
          >
            <polyline points="9 5 16 12 9 19" />
          </motion.svg>
        </motion.button>
      </div>

      {/* Slide indicators — single row, smaller on mobile */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-nowrap items-center gap-1 sm:gap-3 md:gap-4 z-10 px-3 max-w-[96vw] justify-center">
        {slides.map((sl, idx) => (
          <button
            key={sl.slug}
            onClick={() => goTo(idx)}
            aria-label={`Go to ${sl.name}`}
            className="group relative h-5 sm:h-8 shrink-0 flex items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                idx === i
                  ? "w-4 h-[3px] sm:w-10 sm:h-[6px] bg-white"
                  : "w-[4px] h-[3px] sm:w-[10px] sm:h-[6px] bg-white/35 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator — chevron on mobile, mouse on desktop */}
      <div className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.a
          href="#next"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 sm:gap-2 text-white/70 hover:text-white transition-colors duration-500"
        >
          {/* Mobile: double chevron "scroll" */}
          <span className="sm:hidden flex flex-col items-center -space-y-1.5">
            <svg
              width="18"
              height="10"
              viewBox="0 0 24 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-50"
            >
              <path d="M4 4l8 7 8-7" />
            </svg>
            <svg
              width="18"
              height="10"
              viewBox="0 0 24 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l8 7 8-7" />
            </svg>
          </span>

          {/* Desktop: mouse icon */}
          <span className="hidden sm:flex relative w-[20px] h-[32px] rounded-full border-[1.5px] border-current items-start justify-center pt-[6px]">
            <motion.span
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block w-[2px] h-[5px] rounded-full bg-current"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
