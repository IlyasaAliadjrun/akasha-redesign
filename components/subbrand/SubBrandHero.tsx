"use client";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import type { SubBrand } from "@/lib/subBrands";
import type { HeroLayer } from "@/lib/brands";

// One parallax layer of the (optional) real banner — same drift model as BrandHero:
// entrance slide/fade on the outer element, continuous scroll parallax on the inner.
function Layer({
  layer,
  progress,
  index,
}: {
  layer: HeroLayer;
  progress: MotionValue<number>;
  index: number;
}) {
  const reduce = useReducedMotion();
  const depth = layer.depth ?? 40;
  const y = useTransform(progress, [0, 1], [0, -depth]);
  const enterX = layer.enterFrom === "left" ? -80 : layer.enterFrom === "right" ? 80 : 0;
  const enterY = layer.enterFrom === "top" ? -80 : layer.enterFrom === "bottom" ? 80 : 0;
  const sized = Boolean(layer.width);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: enterX, y: enterY, scale: sized ? 1 : 1.06 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: layer.enterDelay ?? index * 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={sized ? "" : layer.fit === "contain" ? "absolute inset-0" : "absolute inset-x-0 -inset-y-[22%]"}
      style={
        sized
          ? { position: "absolute", left: layer.left, top: layer.top, right: layer.right, bottom: layer.bottom, width: layer.width, maxWidth: layer.maxWidth, aspectRatio: layer.aspectRatio }
          : undefined
      }
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={layer.src} alt="" fill priority={index === 0} sizes="(min-width:768px) 50vw, 100vw" className={sized || layer.fit === "contain" ? "object-contain" : "object-cover"} style={layer.position ? { objectPosition: layer.position } : undefined} />
      </motion.div>
    </motion.div>
  );
}

// Sub-brand banner. Mirrors the brand hero (full-screen, parallax product, text
// overlay) but the title is HTML text (not a wordmark image), matching the mockups.
// When `sub.heroLayers` is empty it renders a skeleton: the coloured banner + a
// placeholder product that still drifts on scroll, so the parallax reads even
// before real assets exist.
export default function SubBrandHero({ sub }: { sub: SubBrand }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Skeleton placeholder drift (used when there are no real layers yet).
  const phY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const layers = sub.heroLayers;

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative w-full overflow-hidden h-[100svh] min-h-[480px] md:min-h-[560px]"
      style={{ backgroundColor: sub.bannerBg ?? sub.accentHex }}
    >
      {/* Product layer(s) — right half on desktop. Real layers if provided, else a
          parallax placeholder box. */}
      {layers?.length ? (
        layers.map((l, i) => <Layer key={l.src} layer={l} progress={scrollYProgress} index={i} />)
      ) : sub.heroImage ? (
        <Image src={sub.heroImage} alt={sub.name} fill priority sizes="100vw" className="object-cover" />
      ) : (
        <motion.div
          style={{ y: reduce ? undefined : phY }}
          className="absolute inset-y-0 right-0 w-full md:w-1/2 flex items-center justify-center p-8"
        >
          <div className="w-[62%] max-w-[380px] aspect-[3/4] rounded-3xl border-2 border-dashed border-white/45 bg-white/10 flex flex-col items-center justify-center gap-3 text-white/80">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">Banner produk</span>
          </div>
        </motion.div>
      )}

      {/* Text overlay — bottom-left on desktop, top on mobile. */}
      <div className="absolute inset-0 z-20 flex items-end md:items-center pt-[13vh] md:pt-0 pb-[12vh] md:pb-0 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg md:max-w-xl"
          >
            <h1 className="text-white font-extrabold tracking-tightish leading-[1.05] text-[clamp(30px,5vw,64px)]">
              {sub.name}
            </h1>
            {sub.tagline && (
              <p className="mt-4 text-white/85 text-[15px] lg:text-lg leading-relaxed max-w-md">
                {sub.tagline}
              </p>
            )}
            {sub.ctaText && (
              <a
                href={sub.ctaHref ?? "#spec"}
                className="pointer-events-auto mt-7 inline-block rounded-full border border-white/70 px-7 py-2.5 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-white hover:text-ink active:scale-[0.97]"
              >
                {sub.ctaText}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
