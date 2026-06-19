"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Brand, HeroLayer } from "@/lib/brands";

// One parallax layer. Lives in its own component so each can own a `useTransform`
// hook (hooks can't be called inside the layers.map() loop in the parent).
function ParallaxLayer({
  layer,
  progress,
  index,
}: {
  layer: HeroLayer;
  progress: MotionValue<number>;
  index: number;
}) {
  const depth = layer.depth ?? 40;
  // Travel up as the hero scrolls out of view. The wrapper is oversized
  // (-inset-y) so this movement never reveals an edge.
  const y = useTransform(progress, [0, 1], [0, -depth]);
  const enterX =
    layer.enterFrom === "left" ? -72 : layer.enterFrom === "right" ? 72 : 0;
  // Three wrapper modes:
  // - sized:    a positioned element (logo/wordmark) sized via inline CSS.
  // - contain:  full-bleed, inset-0 — drift just reveals seamless background.
  // - cover:    full-bleed, oversized (-inset-y) so drift never reveals an edge.
  const sized = Boolean(layer.width);
  const sizedStyle = sized
    ? {
        position: "absolute" as const,
        left: layer.left,
        top: layer.top,
        right: layer.right,
        bottom: layer.bottom,
        width: layer.width,
        maxWidth: layer.maxWidth,
        aspectRatio: layer.aspectRatio,
      }
    : undefined;
  const wrapper = sized
    ? ""
    : layer.fit === "contain"
    ? "absolute inset-0"
    : "absolute inset-x-0 -inset-y-[22%]";
  return (
    <motion.div
      style={{ y, ...sizedStyle }}
      initial={{ opacity: 0, x: enterX, scale: 1.06 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.4, delay: layer.enterDelay ?? index * 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={wrapper}
    >
      <Image
        src={layer.src}
        alt=""
        fill
        priority={index === 0}
        sizes="100vw"
        className={sized || layer.fit === "contain" ? "object-contain" : "object-cover"}
        style={layer.position ? { objectPosition: layer.position } : undefined}
      />
    </motion.div>
  );
}

export default function BrandHero({ brand }: { brand: Brand }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const layers = brand.heroLayers;

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative w-full overflow-hidden h-[100svh] min-h-[480px] md:min-h-[560px]"
      style={{ backgroundColor: brand.bannerBg ?? brand.accentHex }}
    >
      {layers?.length ? (
        layers.map((l, i) => (
          <ParallaxLayer key={l.src} layer={l} progress={scrollYProgress} index={i} />
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={brand.heroImage}
            alt={brand.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Scroll indicator — chevron on mobile, mouse on desktop */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
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
          {/* Mobile: double chevron */}
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
