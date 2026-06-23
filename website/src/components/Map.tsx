export default function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Znaleźliśmy nas?</h2>
        
        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-slate-100">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center">
              <p className="text-slate-600 text-lg mb-4">
                📍 ul. Parkitka 42, Częstochowa
              </p>
              <p className="text-slate-500">
                Mapa interaktywna Google Maps - wkrótce
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Tymczasowo: skopiuj adres i wklej w Google Maps
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-slate-50 rounded-lg">
          <p className="text-slate-600">
            <strong>Wskazówka dojazdu:</strong> Jeśli jedziesz z centrum Częstochowy, skieruj się w kierunku ul. Parkitki. 
            Warsztat znajduje się w samym sercu dzielnicy Parkitka, niedaleko sklepów i przystanków autobusowych.
          </p>
        </div>
      </div>
    </section>
  );
}
