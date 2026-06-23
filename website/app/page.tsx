import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Wybierz usługę lub poznaj nas bliżej</h2>
          <p className="text-slate-600 mb-8">Szybkie linki do najważniejszych stron — galeria, cennik i kontakt.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about" className="px-6 py-3 border border-slate-200 rounded-lg hover:shadow-md">O nas</Link>
            <Link href="/gallery" className="px-6 py-3 border border-slate-200 rounded-lg hover:shadow-md">Galeria</Link>
            <Link href="/pricing" className="px-6 py-3 bg-[color:var(--accent)] text-white rounded-lg">Cennik</Link>
            <Link href="/contact" className="px-6 py-3 border border-slate-200 rounded-lg hover:shadow-md">Kontakt</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
