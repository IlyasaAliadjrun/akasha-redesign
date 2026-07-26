"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Brand, HeroLayer } from "@/lib/brands";

// Tracks the small-screen breakpoint (<768px) so layers/content can swap to their
// mobile placement. Starts false (desktop) on the server; corrects on mount.
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

// One parallax layer. Entrance (slide + fade) lives on the outer element; the
// continuous scroll parallax lives on an inner element, so an entrance that slides
// vertically never fights the parallax y. On mobile, `layer.mobile` overrides the
// position/size/entrance.
function ParallaxLayer({
  layer,
  progress,
  index,
  isMobile,
}: {
  layer: HeroLayer;
  progress: MotionValue<number>;
  index: number;
  isMobile: boolean;
}) {
  const o = (isMobile && layer.mobile) || {};
  const src = o.src ?? layer.src;
  const left = o.left ?? layer.left;
  const top = o.top ?? layer.top;
  const right = o.right ?? layer.right;
  const bottom = o.bottom ?? layer.bottom;
  const width = o.width ?? layer.width;
  const enterFrom = o.enterFrom ?? layer.enterFrom;

  const depth = layer.depth ?? 40;
  const parallaxY = useTransform(progress, [0, 1], [0, -depth]);
  const enterX = enterFrom === "left" ? -80 : enterFrom === "right" ? 80 : 0;
  const enterY = enterFrom === "top" ? -80 : enterFrom === "bottom" ? 80 : 0;

  const sized = Boolean(width);
  const positionStyle = sized
    ? {
        position: "absolute" as const,
        left,
        top,
        right,
        bottom,
        width,
        maxWidth: layer.maxWidth,
        aspectRatio: layer.aspectRatio,
      }
    : undefined;
  const wrapperClass = sized
    ? ""
    : layer.fit === "contain"
    ? "absolute inset-0"
    : "absolute inset-x-0 -inset-y-[22%]";
  const fitClass =
    sized || layer.fit === "contain" ? "object-contain" : "object-cover";

  return (
    <motion.div
      initial={{ opacity: 0, x: enterX, y: enterY, scale: sized ? 1 : 1.06 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        duration: 1.1,
        delay: layer.enterDelay ?? index * 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={wrapperClass}
      style={positionStyle}
    >
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <Image
          src={src}
          alt=""
          fill
          priority={index === 0}
          // Full-bleed background layers span the whole viewport, so they need the
          // full-width candidate; only *sized* layers (a product/wordmark capped at
          // ~50vw) can take the smaller hint. A blanket 50vw served the background at
          // half-res on desktop.
          sizes={sized ? "(min-width:768px) 50vw, 100vw" : "100vw"}
          className={fitClass}
          style={layer.position ? { objectPosition: layer.position } : undefined}
        />
      </motion.div>
    </motion.div>
  );
}

export default function BrandHero({ brand }: { brand: Brand }) {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const layers = brand.heroLayers;
  const content = brand.heroContent;
  const darkText = content?.theme === "dark";

  const taglineColor = darkText ? "text-ink" : "text-white";
  const subtitleColor = darkText ? "text-ink/70" : "text-white/80";
  const ctaClass = darkText
    ? "border-ink/40 text-ink hover:bg-ink hover:text-white"
    : "border-white/70 text-white hover:bg-white hover:text-ink";

  return (
    <section
      ref={ref}
      // Tell the navbar how to paint itself over this hero. `heroContent.theme:"dark"`
      // means DARK TEXT — i.e. a LIGHT banner (Vica/Wonhae yellow) — so the navbar
      // needs its dark treatment; otherwise the banner is dark and the navbar goes white.
      data-theme={darkText ? "light" : "dark"}
      className="relative w-full overflow-hidden h-[100svh] min-h-[480px] md:min-h-[560px]"
      style={{ backgroundColor: brand.bannerBg ?? brand.accentHex }}
    >
      {layers?.length ? (
        layers.map((l, i) => (
          <ParallaxLayer
            key={l.src}
            layer={l}
            progress={scrollYProgress}
            index={i}
            isMobile={isMobile}
          />
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

      {/* HTML overlay — DESKTOP: wordmark + tagline + CTA stacked, left column. */}
      {content && (
        <div
          className="hidden md:flex absolute inset-y-0 z-20 flex-col justify-center pointer-events-none"
          style={{
            left: content.left ?? "5%",
            maxWidth: content.maxWidth,
            transform: content.offsetY ? `translateY(${content.offsetY})` : undefined,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: content.delay ?? 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {content.logo && (
              <div
                className="relative"
                style={{ width: content.logoWidth ?? "32vw", aspectRatio: content.logoAspect }}
              >
                <Image src={content.logo} alt={`${brand.name} logo`} fill sizes="40vw" className="object-contain object-left" />
              </div>
            )}
            {(content.tagline || content.subtitle || content.ctaText) && (
              <div className="flex flex-col" style={{ paddingLeft: content.bodyIndent }}>
                {content.tagline && (
                  <p className={`font-display mt-3 sm:mt-5 font-semibold leading-tight text-[clamp(15px,2vw,30px)] ${taglineColor}`}>
                    {content.tagline}
                  </p>
                )}
                {content.subtitle && (
                  <p className={`font-display mt-2 sm:mt-3 font-normal leading-snug whitespace-pre-line text-[clamp(13px,1.25vw,19px)] ${subtitleColor}`}>
                    {content.subtitle}
                  </p>
                )}
                {content.ctaText && (
                  <a
                    href={content.ctaHref ?? "#"}
                    className={`font-display pointer-events-auto mt-5 sm:mt-7 inline-block w-fit rounded-full border px-6 sm:px-7 py-2 sm:py-2.5 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.97] ${ctaClass}`}
                  >
                    {content.ctaText}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* HTML overlay — MOBILE: wordmark top-centre, tagline + CTA bottom-left. */}
      {content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: content.delay ?? 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden absolute inset-0 z-20 flex flex-col justify-between pointer-events-none px-7 pt-[10vh] pb-[9vh]"
        >
          {content.logo ? (
            <div
              className="self-center relative"
              style={{ width: content.mobile?.logoWidth ?? "60vw", aspectRatio: content.logoAspect }}
            >
              <Image src={content.logo} alt={`${brand.name} logo`} fill sizes="70vw" className="object-contain" />
            </div>
          ) : (
            <span />
          )}
          <div className="self-start flex flex-col">
            {content.tagline && (
              <p className={`font-display font-semibold leading-tight text-[clamp(18px,5.5vw,26px)] ${taglineColor}`}>
                {content.tagline}
              </p>
            )}
            {content.subtitle && (
              <p className={`font-display mt-2 font-normal leading-snug whitespace-pre-line text-[clamp(12px,3.6vw,16px)] ${subtitleColor}`}>
                {content.subtitle}
              </p>
            )}
            {content.ctaText && (
              <a
                href={content.ctaHref ?? "#"}
                className={`font-display pointer-events-auto mt-4 inline-block w-fit rounded-full border px-6 py-2 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] ${ctaClass}`}
              >
                {content.ctaText}
              </a>
            )}
          </div>
        </motion.div>
      )}

      {/* Scroll indicator — chevron on mobile, mouse on desktop */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
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
          <span className="sm:hidden flex flex-col items-center -space-y-1.5">
            <svg width="18" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M4 4l8 7 8-7" /></svg>
            <svg width="18" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l8 7 8-7" /></svg>
          </span>
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
