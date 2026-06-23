import { Wrench, RotateCw, Zap, Wind, Droplet, Cog } from 'lucide-react';

const services = [
  {
    icon: RotateCw,
    title: 'Przegląd roweru',
    description: 'Kompleksowy przegląd mechaniczny - sprawdzenie stanu wszystkich komponentów',
    price: 'od 89 zł',
    color: 'from-[color:var(--accent-2)] to-blue-400'
  },
  {
    icon: Wrench,
    title: 'Regulacja hamulców',
    description: 'Naprawa i regulacja wszystkich typów hamulców - tarczowe, V-brake, koła zębate',
    price: 'od 49 zł',
    color: 'from-[color:var(--accent)] to-indigo-500'
  },
  {
    icon: Cog,
    title: 'Regulacja przerzutek',
    description: 'Precyzyjna regulacja przodu i tyłu dla płynnego przełączania biegów',
    price: 'od 59 zł',
    color: 'from-violet-500 to-[color:var(--accent)]'
  },
  {
    icon: Wind,
    title: 'Wymiana dętek i opon',
    description: 'Szybka wymiana uszkodzonych dętek i opon we wszystkich rozmiarach',
    price: 'od 40 zł',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Droplet,
    title: 'Czyszczenie i konserwacja',
    description: 'Profesjonalne czyszczenie, smarowanie łańcucha i pielęgnacja roweru',
    price: 'od 79 zł',
    color: 'from-[color:var(--accent-2)] to-cyan-500'
  },
  {
    icon: Cog,
    title: 'Serwis amortyzatorów',
    description: 'Naprawa i regulacja amortyzatorów przednich i tylnych',
    price: 'od 120 zł',
    color: 'from-slate-600 to-slate-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white border-t border-b border-slate-200">
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
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 hover:border-[color:var(--accent)] transform hover:-translate-y-1"
              >
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
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
          <button className="px-8 py-3 bg-[color:var(--accent)] hover:bg-[color:var(--accent)]/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Zapytaj o wycenę
          </button>
        </div>
      </div>
    </section>
  );
}
