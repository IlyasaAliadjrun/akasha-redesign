"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Brand, ShowcaseVariant as TVariant } from "@/lib/brands";

// One layered, parallax variant banner (reusable across brands):
// - background art (text + sparkle) fades in with a subtle scroll parallax,
// - the product sits centred, overflows the banner top/bottom, slides in from the
//   left on odd banners (index 0,2,…) or the right on even banners, and drifts
//   faster than the background on scroll.
function ShowcaseVariant({
  variant,
  index,
  brandName,
}: {
  variant: TVariant;
  index: number;
  brandName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const productY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const fromLeft = index % 2 === 0; // banner 1,3,… enter from the left

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

      {/* Product — centred, overflows the banner, slides in from a side. */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: fromLeft ? -90 : 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            y: productY,
            height: variant.productHeight ?? "128%",
            aspectRatio: variant.productAspect ?? "2687 / 3660",
          }}
          className="relative"
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
  );
}

// Poster section: a hero graphic with layered parallax variant banners overlapping
// its bottom edge. Renders nothing unless the brand provides `showcase`; variant
// banners are skipped when none are defined.
export default function BrandShowcase({ brand }: { brand: Brand }) {
  const showcase = brand.showcase;
  if (!showcase) return null;

  const variants = showcase.variants ?? [];

  return (
    <section className="bg-white pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28">
      {/* Part 1 — hero (person/poster); aspect follows the asset (default square) */}
      <div className="px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ aspectRatio: showcase.heroAspect ?? "1 / 1" }}
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
        <div className="max-w-content mx-auto px-6 lg:px-10 relative z-10 -mt-6 sm:-mt-10 lg:-mt-12 space-y-10 sm:space-y-14 lg:space-y-16">
          {variants.map((variant, i) => (
            <ShowcaseVariant
              key={variant.bg}
              variant={variant}
              index={i}
              brandName={brand.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}
