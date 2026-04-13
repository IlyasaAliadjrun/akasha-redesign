"use client";
import { motion } from "framer-motion";

export default function RevenueChart({
  years,
  netSales,
  netIncome,
}: {
  years: number[];
  netSales: number[];
  netIncome: number[];
}) {
  const max = Math.max(...netSales);
  const fmtM = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} T`;
    return `${(n / 1_000).toFixed(0)} M`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-10">
      <div className="flex items-end gap-4 md:gap-8 lg:gap-12 h-[340px] md:h-[420px]">
        {years.map((y, i) => {
          const salesHeight = (netSales[i] / max) * 100;
          const incomeHeight = (netIncome[i] / max) * 100;
          return (
            <div
              key={y}
              className="flex-1 h-full flex flex-col items-center justify-end gap-2 group"
            >
              <div className="w-full h-full flex items-end justify-center gap-1.5 md:gap-2 relative">
                {/* Net Sales bar */}
                <div className="flex-1 flex flex-col items-center justify-end relative h-full">
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-semibold tabular-nums text-accent-beverage whitespace-nowrap">
                    Rp {fmtM(netSales[i])}
                  </div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${salesHeight}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 1,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full bg-accent-beverage rounded-t-md"
                  />
                </div>
                {/* Net Income bar */}
                <div className="flex-1 flex flex-col items-center justify-end relative h-full">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${incomeHeight}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 1,
                      delay: i * 0.08 + 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full bg-ink rounded-t-md"
                  />
                </div>
              </div>
              <div className="text-xs font-semibold text-ink/50 tabular-nums">
                {y}
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden mt-6 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-accent-beverage" />
          <span className="text-ink/60">Net Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-ink" />
          <span className="text-ink/60">Net Income</span>
        </div>
      </div>
    </div>
  );
}
