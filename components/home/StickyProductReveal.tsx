"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Kemurnian di setiap tetes",
    body: "Dimurnikan dengan proses berlapis agar setiap teguk terasa bersih dan jernih.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Segar tanpa harus dingin",
    body: "Rasa stabil di suhu ruang — teman kopi pagi, sahabat olahraga sore.",
    image:
      "https://images.unsplash.com/photo-1550505095-81378a674395?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Pilihan keluarga Indonesia",
    body: "Dipercaya oleh rumah tangga, kafe, dan barista di seluruh nusantara.",
    image:
      "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Tersedia dalam empat ukuran",
    body: "Dari 330 mL hingga galon 15 L — mulai dari Rp 45.800.",
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function StickyProductReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-[#f2f7fb]" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="relative aspect-square w-full max-w-[clamp(280px,80vw,560px)] lg:max-w-[560px] mx-auto">
            {steps.map((s, i) => {
              const start = i / steps.length;
              const end = (i + 1) / steps.length;
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
                [0, 1, 1, 0]
              );
              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [1, 1.08]
              );
              return (
                <motion.div
                  key={i}
                  style={{ opacity, scale }}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 560px, (min-width:640px) 80vw, 90vw"
                    className="object-cover rounded-2xl sm:rounded-3xl"
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="relative min-h-[280px]">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-npl mb-4">
              Nestlé Pure Life
            </div>
            {steps.map((s, i) => {
              const start = i / steps.length;
              const end = (i + 1) / steps.length;
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.03, start + 0.05, end - 0.05, end + 0.03],
                [0, 1, 1, 0]
              );
              const y = useTransform(
                scrollYProgress,
                [start, end],
                [20, -20]
              );
              return (
                <motion.div
                  key={i}
                  style={{ opacity, y }}
                  className="absolute inset-0"
                >
                  <h3 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
                    {s.title}
                  </h3>
                  <p className="mt-4 sm:mt-5 text-base sm:text-lg text-ink/70 max-w-md">{s.body}</p>
                  {i === steps.length - 1 && (
                    <Link
                      href="/brands/nestle-pure-life"
                      className="mt-8 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition"
                    >
                      Beli sekarang
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
