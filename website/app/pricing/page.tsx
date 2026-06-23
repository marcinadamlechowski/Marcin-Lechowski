import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function PricingPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Cennik</h1>
          <p className="text-slate-600 mb-8">Przykładowe ceny usług. Dokładna wycena po oględzinach.</p>
        </div>
      </section>
      <Services />
      <Footer />
    </main>
  );
}
