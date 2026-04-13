"use client";
import Link from "next/link";
import { DIVISIONS, brandsByDivision } from "@/lib/brands";

export default function MegaMenu({
  onClose,
  mobile = false,
}: {
  onClose: () => void;
  mobile?: boolean;
}) {
  return (
    <div
      className={`${
        mobile ? "" : "border-t border-black/5 bg-white"
      } animate-[fadeIn_0.2s_ease-out]`}
    >
      <div
        className={`max-w-[1400px] mx-auto ${
          mobile ? "" : "px-10 py-10"
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10`}
      >
        {DIVISIONS.map((d) => (
          <div key={d.id}>
            <div
              className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3"
              style={{ color: d.accentHex }}
            >
              {d.name}
            </div>
            <ul className="space-y-2">
              {brandsByDivision(d.id).map((b) => (
                <li key={b.slug}>
                  <Link
                    onClick={onClose}
                    href={`/brands/${b.slug}`}
                    className="text-base font-medium hover:opacity-60 transition"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
