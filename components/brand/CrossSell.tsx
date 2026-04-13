import Image from "next/image";
import Link from "next/link";
import { BRANDS, type Brand } from "@/lib/brands";

export default function CrossSell({ current }: { current: Brand }) {
  const others = BRANDS.filter((b) => b.slug !== current.slug).slice(0, 3);
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-3">
          More from Akasha
        </div>
        <h2 className="text-headline font-extrabold tracking-tightish mb-12">
          Lanjutkan perjalananmu.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {others.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="group relative h-[420px] rounded-3xl overflow-hidden"
            >
              <Image
                src={b.heroImage}
                alt={b.name}
                fill
                sizes="(min-width:768px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="text-2xl font-extrabold tracking-tightish">{b.name}</div>
                <div className="text-sm text-white/80 mt-1">{b.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
