import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const IMAGES = Array.from({ length: 6 }).map((_, i) => `/images/photo${i + 1}.jpg`);

export default function GalleryPage() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Galeria</h2>
          <p className="text-slate-600 mb-8">Zdjęcia z warsztatu, napraw i zadowolonych klientów.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-slate-100 h-56 relative">
                <Image
                  src={src}
                  alt={`Zdjęcie ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={i < 3}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-slate-500">
            <p>Instrukcja: umieść swoje zdjęcia jako <code>/public/images/photo1.jpg</code> ... <code>photo6.jpg</code>. Jeśli nie chcesz używać własnych, możesz pobrać przykładowe zdjęcia poleceniem w README.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
