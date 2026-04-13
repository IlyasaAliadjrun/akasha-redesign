"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }

    const scrollEl = document.scrollingElement || document.documentElement;
    const start = scrollEl.scrollTop || window.scrollY;
    if (start <= 0) return;

    const duration = Math.min(1400, 500 + start * 0.3);
    const startTime = performance.now();

    // Temporarily neutralize CSS smooth-scroll so our rAF is the only driver.
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = easeOutQuart(t);
      const y = start * (1 - eased);
      window.scrollTo(0, y);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        html.style.scrollBehavior = prevBehavior;
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-10 h-10 rounded-full bg-ink/85 text-white backdrop-blur-md flex items-center justify-center shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] border border-white/10 transition-colors duration-500 hover:bg-white hover:text-ink hover:border-ink/10"
        >
          <span className="relative w-3.5 h-3.5 overflow-hidden">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
