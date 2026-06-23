import { Wrench, RotateCw, Zap, Wind, Droplet, Box } from 'lucide-react';

const services = [
  {
    icon: RotateCw,
    title: 'Przegląd roweru',
    description: 'Kompleksowy przegląd mechaniczny - sprawdzenie stanu wszystkich komponentów',
    price: 'od 89 zł',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: Wrench,
    title: 'Regulacja hamulców',
    description: 'Naprawa i regulacja wszystkich typów hamulców - tarczowe, V-brake, koła zębate',
    price: 'od 49 zł',
    color: 'from-[color:var(--accent-2)] to-emerald-400'
  },
  {
    icon: Zap,
    title: 'Regulacja przerzutek',
    description: 'Precyzyjna regulacja przodu i tyłu dla płynnego przełączania biegów',
    price: 'od 59 zł',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: Wind,
    title: 'Wymiana dętek i opon',
    description: 'Szybka wymiana uszkodzonych dętek i opon we wszystkich rozmiarach',
    price: 'od 40 zł',
    color: 'from-orange-400 to-red-400'
  },
  {
    icon: Droplet,
    title: 'Czyszczenie i konserwacja',
    description: 'Profesjonalne czyszczenie, smarowanie łańcucha i pielęgnacja roweru',
    price: 'od 79 zł',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    icon: Box,
    title: 'Serwis amortyzatorów',
    description: 'Naprawa i regulacja amortyzatorów przednich i tylnych',
    price: 'od 120 zł',
    color: 'from-yellow-400 to-orange-400'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nasze usługi
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Kompleksowa oferta serwisowa dla każdego roweru. Od prostych napraw do zaawansowanego serwisu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-[color:var(--accent)] transform hover:-translate-y-2 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-lg font-bold text-[color:var(--accent)]">
                      {service.price}
                    </span>
                    <button className="text-slate-400 hover:text-[color:var(--accent)] transition-colors group-hover:translate-x-1 transition-transform">
                      →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Nie widzisz swojej usługi? Skontaktuj się z nami - doradzimy indywidualną cenę!
          </p>
          <button className="px-8 py-3 bg-[color:var(--accent)] hover:bg-[color:var(--accent-2)] text-white font-semibold rounded-lg transition-all duration-300">
            Zapytaj o wycenę
          </button>
        </div>
      </div>
    </section>
  );
}
