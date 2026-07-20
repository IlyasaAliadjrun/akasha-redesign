"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Brand, ShowcaseVariant as TVariant } from "@/lib/brands";

// Small-screen flag so the parallax drift can scale down on mobile (the banner is
// much shorter there, so a desktop-sized drift looks like the product is floating).
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

// One layered, parallax variant banner (reusable across brands):
// - background art (text + sparkle) fades in with a subtle scroll parallax,
// - the product sits centred, overflows the banner top/bottom, slides in from the
//   left on odd banners (index 0,2,…) or the right on even banners, and drifts
//   faster than the background on scroll.
function ShowcaseVariant({
  variant,
  index,
  brandName,
  align,
  parallax,
}: {
  variant: TVariant;
  index: number;
  brandName: string;
  // "center" (default): product rests centred over the banner art — used when the
  // bg carries full-bleed text/art behind it (Hair Energy).
  // "sides": product rests on the side it enters from, alternating per banner
  // (odd→left, even→right), leaving the opposite half of the banner clear — used
  // when the bg is plain and the layout mirrors a side-by-side reference (NPL).
  align: "center" | "sides";
  // Whether the background + product drift on scroll. Off for showcases that want a
  // completely static composition (NPL).
  parallax: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle depth parallax (same feel as Hair Energy): the background drifts a little,
  // the product a bit more, so on scroll the product gently floats in front of the
  // banner. Gated by `parallax` — when off, both layers stay static.
  const bgYRaw = useTransform(scrollYProgress, [0, 1], isMobile ? [4, -4] : [8, -8]);
  const productYRaw = useTransform(scrollYProgress, [0, 1], isMobile ? [5, -5] : [12, -12]);
  const bgY = parallax ? bgYRaw : undefined;
  const productY = parallax ? productYRaw : undefined;
  // Product height relative to the banner (default 110%). NPL keeps its bottles
  // ≤ banner height so they sit fully inside instead of overflowing.
  const productHeight = variant.productHeight ?? "110%";
  const fromLeft = index % 2 === 0; // banner 1,3,… enter from the left
  const sides = align === "sides";
  // Horizontal rest: centred, or anchored to the entering side with a small inset.
  const justify = sides ? (fromLeft ? "justify-start" : "justify-end") : "justify-center";
  const sidePad = sides ? "px-[2%] sm:px-[4%]" : "";
  // Vertical rest is PER VARIANT: `groundBottom` sits the product on the banner's
  // bottom edge; otherwise it stays vertically centred.
  const alignItems = variant.groundBottom ? "items-end" : "items-center";
  // Each product PNG has some transparent margin below the bottle; this drop shifts
  // the (grounded) box down by that margin so the bottle's *base* — not the canvas
  // edge — sits on the banner bottom. Only meaningful together with groundBottom.
  const bottomDrop = variant.groundBottom ? variant.productBottomOffset : undefined;
  // Optional horizontal nudge + the (grounded) vertical drop, composed into one
  // transform on the product box.
  const shiftX = variant.productShiftX;
  const boxTransform =
    shiftX || bottomDrop
      ? `translateX(${shiftX ?? "0"}) translateY(${bottomDrop ?? "0"})`
      : undefined;

  return (
    <div ref={ref} className="relative" style={{ aspectRatio: "5 / 2" }}>
      {/* Background banner — clipped & rounded. The inner layer is full WIDTH
          (so the edge-to-edge text is never side-cropped) and taller than the
          frame (its natural ratio), so the vertical parallax drift only ever
          moves within the top/bottom overflow. */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 rounded-2xl lg:rounded-3xl overflow-hidden flex items-center"
      >
        <motion.div
          style={{ y: bgY, aspectRatio: variant.bgAspect ?? "5010 / 2354" }}
          className="relative w-full"
        >
          <Image
            src={variant.bg}
            alt={`${brandName} variant ${index + 1}`}
            fill
            sizes="(min-width:1024px) 900px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Product — clipped to the frame, so it stays inside even while the parallax
          drifts it on scroll. Anchored per `align` horizontally (centred / entering
          side) and vertically (centred / grounded on the bottom). The outer box sizes
          & drops the product; the inner motion layer carries the entrance + parallax. */}
      <div className={`absolute inset-0 flex ${alignItems} ${justify} ${sidePad} overflow-hidden rounded-2xl lg:rounded-3xl pointer-events-none`}>
        <div
          className="relative"
          style={{
            height: productHeight,
            aspectRatio: variant.productAspect ?? "2687 / 3660",
            transform: boxTransform,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: fromLeft ? -90 : 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: productY }}
            className="absolute inset-0"
          >
            <Image
              src={variant.product}
              alt=""
              fill
              sizes="(min-width:1024px) 360px, 45vw"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Poster section: a hero graphic with layered parallax variant banners overlapping
// its bottom edge. Renders nothing unless the brand provides `showcase`; variant
// banners are skipped when none are defined.
export default function BrandShowcase({ brand }: { brand: Brand }) {
  const showcase = brand.showcase;
  if (!showcase) return null;

  const variants = showcase.variants ?? [];
  const align = showcase.productAlign ?? "center";
  const parallax = showcase.parallax ?? true;

  return (
    <section className="bg-white pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28">
      {/* Part 1 — hero (person/poster); aspect follows the asset (default square).
          `heroMaxWidth` caps the width: a landscape title (Hair Energy) fills the
          768px column, but a portrait title (NPL) needs a much smaller cap or it
          renders far too tall. */}
      <div className="px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            aspectRatio: showcase.heroAspect ?? "1 / 1",
            maxWidth: showcase.heroMaxWidth,
          }}
          className="relative w-full max-w-3xl mx-auto"
        >
          <Image
            src={showcase.hero}
            alt={`${brand.name} highlight`}
            fill
            sizes="(min-width:768px) 768px, 100vw"
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Part 2 — layered parallax variant banners. Same max-w-content + px-6
          lg:px-10 container as every other section so the edges line up. Extra
          vertical spacing makes room for the products that overflow each banner. */}
      {variants.length > 0 && (
        <div className="max-w-content mx-auto px-6 lg:px-10 relative z-10 -mt-6 sm:-mt-10 lg:-mt-12 space-y-6 sm:space-y-9 lg:space-y-11">
          {variants.map((variant, i) => {
            const banner = (
              <ShowcaseVariant
                variant={variant}
                index={i}
                brandName={brand.name}
                align={align}
                parallax={parallax}
              />
            );
            // A variant with `href` links to its sub-brand page; a subtle hover
            // lift signals it's clickable.
            return variant.href ? (
              <Link
                key={variant.bg}
                href={variant.href}
                aria-label={`${brand.name} — buka halaman varian`}
                className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01]"
              >
                {banner}
              </Link>
            ) : (
              <div key={variant.bg}>{banner}</div>
            );
          })}
        </div>
      )}
    </section>
  );
}
