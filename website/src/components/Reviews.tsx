const reviews = [
  {
    name: 'Anna Nowak',
    rating: 5,
    date: '2 tygodnie temu',
    text: 'Rewelacyjny serwis! Szybko, profesjonalnie, a ceny rozsądne. Polecam każdemu w Częstochowie.'
  },
  {
    name: 'Marcin Kowalski',
    rating: 5,
    date: '1 miesiąc temu',
    text: 'Przywiozłem rower w opłakanym stanie. Nie wierzyłem, że da się go uratować. A tu proszę - jeździ jak nowy! Dziękuję!'
  },
  {
    name: 'Karolina Lewandowska',
    rating: 5,
    date: '3 tygodnie temu',
    text: 'Świetna obsługa i wiedza. Pan dokładnie wyjaśnił co naprawia i dlaczego. Bardzo doceniam transparentność.'
  },
  {
    name: 'Piotr Szymański',
    rating: 5,
    date: '1 miesiąc temu',
    text: 'Szybka naprawa, profesjonalne podejście. Najbliżej pracy - mega wygodnie. Już drugi raz tutaj.'
  },
  {
    name: 'Justyna Michalska',
    rating: 5,
    date: '2 miesiące temu',
    text: 'Nie znałam tego serwisu wcześniej, a teraz nie wyobrażam sobie jechać gdzie indziej. Polecę już wszystkim!'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Co mówią nasi klienci
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl font-bold text-slate-900">4.9</span>
            <span className="text-slate-600">(500+ opinii)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-[color:var(--accent)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.date}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
              </div>

              <p className="text-slate-700 leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-[color:var(--accent)] mb-2">500+</p>
            <p className="text-slate-600">Zadowolonych klientów</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[color:var(--accent)] mb-2">4.9★</p>
            <p className="text-slate-600">Średnia ocen</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[color:var(--accent)] mb-2">12+</p>
            <p className="text-slate-600">Lat doświadczenia</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Zostań częścią naszej wspólnoty zadowolonych klientów
          </p>
          <button className="px-8 py-3 bg-[color:var(--accent)] hover:bg-[color:var(--accent)]/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Umów swoją wizytę
          </button>
        </div>
      </div>
    </section>
  );
}
