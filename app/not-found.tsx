import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-hero font-extrabold tracking-tightish">404</div>
        <p className="mt-4 text-ink/60">Halaman yang kamu cari tidak ditemukan.</p>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white">
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
