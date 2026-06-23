export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Poznaj nasz serwis
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              Od 2012 roku zajmujemy się profesjonalnym serwisem rowerów w Częstochowie. Nasze warsztaty znajdują się w samym sercu dzielnicy Parkitka, gdzie codziennie naprawiamy, przeglądam i regulujemy rowery dla mieszkańców miasta.
            </p>

            <p className="text-lg text-slate-600 mb-6">
              Nasza pasja to rowery. Każdy rower, który wchodzi do naszego warsztatu, traktujemy z ogromną dbałością. Znamy każdy model, każdą markę - od budżetowych hulajnóg po profesjonalne rowery górskie.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[color:var(--accent)]/10">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Doświadczenie</h3>
                  <p className="text-slate-600">12+ lat w branży, setki naprawionych rowerów</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[color:var(--accent)]/10">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Lokalność</h3>
                  <p className="text-slate-600">Nie sieciówka - warsztат rodzinny, osobiście znamy naszych klientów</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[color:var(--accent)]/10">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Transparentność</h3>
                  <p className="text-slate-600">Uczciwe ceny, bez ukrytych opłat, szczegółowe wyjaśnienia każdej naprawy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder with gradient */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-2)] to-blue-500 opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚴‍♂️</div>
                <p className="text-slate-600 font-semibold">Warsztat w Częstochowie</p>
                <p className="text-slate-500 text-sm mt-2">Fotoreal - wkrótce!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
