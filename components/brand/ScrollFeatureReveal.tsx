"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

type Feature = { title: string; body: string; image: string };

function FeatureImage({
  feature,
  index,
  total,
  progress,
}: {
  feature: Feature;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.04, start + 0.05, end - 0.05, end + 0.04],
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, end], [1.05, 1]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        sizes="100vw"
        className="object-cover"
        priority={index === 0}
      />
    </motion.div>
  );
}

function FeatureText({
  feature,
  index,
  total,
  progress,
}: {
  feature: Feature;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.03, start + 0.06, end - 0.05, end + 0.03],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [30, -30]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <div className="h-px w-16 bg-white/30 mb-8" />
      <h3 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-extrabold tracking-tightish leading-[1.05] text-white">
        {feature.title}
      </h3>
      <p className="mt-4 md:mt-6 text-base sm:text-lg lg:text-xl text-white/75 max-w-xl leading-relaxed">
        {feature.body}
      </p>
    </motion.div>
  );
}

export default function ScrollFeatureReveal({
  features,
  brandName,
  accent,
}: {
  features: Feature[];
  brandName: string;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });

  const total = features.length;

  // Progress indicator fill
  const indicatorScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative bg-ink"
      style={{ height: `${total * 100}vh`, position: "relative" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-bleed crossfading image */}
        <div className="absolute inset-0">
          {features.map((f, i) => (
            <FeatureImage
              key={i}
              feature={f}
              index={i}
              total={total}
              progress={smooth}
            />
          ))}
          {/* Gradient wash for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)",
            }}
          />
          {/* Brand accent vignette */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-50"
            style={{
              background: `radial-gradient(circle at 85% 50%, ${accent}, transparent 55%)`,
            }}
          />
        </div>

        {/* Brand tag top-left */}
        {/* <div className="absolute top-20 md:top-14 left-6 lg:left-10 z-10">
          <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
            {brandName} · The Story
          </div>
        </div> */}

        {/* Right-side thin progress line */}
        <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <div className="relative h-44 w-px bg-white/15 overflow-hidden">
            <motion.div
              style={{ scaleY: indicatorScale, transformOrigin: "top" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[320px] md:min-h-[380px]">
              {features.map((f, i) => (
                <FeatureText
                  key={i}
                  feature={f}
                  index={i}
                  total={total}
                  progress={smooth}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.3em] text-white/60 uppercase">
          Scroll to continue
        </div>
      </div>
    </section>
  );
}
