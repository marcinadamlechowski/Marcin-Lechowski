import { Zap, Handshake, Award, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Szybkie terminy',
    description: 'Większość napraw gotowa tego samego dnia. Bez czekania i niepewności.'
  },
  {
    icon: Award,
    title: 'Uczciwa wycena',
    description: 'Transparentne ceny bez ukrytych opłat. Znasz koszt zanim się zaczyna naprawa.'
  },
  {
    icon: Handshake,
    title: 'Doświadczenie',
    description: '12+ lat na rynku. Znamy każdy model i każdy problem. Naprawa na pewno będzie solidna.'
  },
  {
    icon: MapPin,
    title: 'Indywidualne podejście',
    description: 'Dla nas nie ma standardowych klientów. Każdy otrzymuje dokładne wyjaśnienie każdej naprawy.'
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dlaczego akurat my?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            W Częstochowie jest wiele serwisów. Ale tylko jeden ma takie podejście do klienta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group flex gap-6 p-8 rounded-xl border border-slate-200 hover:border-[color:var(--accent)] transition-all duration-300 hover:shadow-lg hover:bg-[color:var(--accent)]/10/30"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[color:var(--accent)]/10 group-hover:bg-[color:var(--accent)]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[color:var(--accent)]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial highlight */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[color:var(--accent)]/5 to-[color:var(--accent-2)]/5 rounded-2xl border border-[color:var(--accent)]/30">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💬</span>
            <div>
              <p className="text-lg text-slate-700 italic mb-4">
                "Byłem u kilku innych serwisów w mieście, ale tutaj czuję się jak u przyjaciół. Pan wie o rowerach wszystko, a ceny są uczciwe. Teraz to mój ulubiony serwis w Częstochowie!"
              </p>
              <p className="font-semibold text-slate-900">Tomasz K.</p>
              <p className="text-sm text-slate-600">Klient od 3 lat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
