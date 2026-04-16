"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CompanyStatement() {
  return (
    <section className="bg-white py-20 sm:py-24 md:py-32 lg:py-48">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center px-4 sm:px-6"
      >
        <p className="text-headline font-extrabold tracking-tightish leading-[1.1]">
          We don&apos;t just make products.
          <br />
          <span className="text-ink/50 font-light">
            We craft moments — of freshness, confidence, flavor, and joy.
          </span>
        </p>
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-ink/60">
          Akasha Wira International · Since 1985
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/about"
            className="text-sm font-semibold px-6 py-3 rounded-full border border-ink hover:bg-ink hover:text-white transition text-center"
          >
            Our Story
          </Link>
          <Link
            href="/investor"
            className="text-sm font-semibold px-6 py-3 rounded-full border border-ink/20 hover:border-ink hover:text-ink transition text-ink/70 text-center"
          >
            Investor Relations
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
