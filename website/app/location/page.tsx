import Navbar from '@/components/Navbar';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function LocationPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Map />
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Lokalizacja</h2>
          <p className="text-slate-600">ul. Parkitka 42, 42-200 Częstochowa — dzielnica Parkitka.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
