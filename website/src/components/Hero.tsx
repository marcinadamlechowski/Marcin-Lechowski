'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleReservation = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[color:var(--accent)] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 rounded-full text-[color:var(--accent-2)] text-sm font-medium">
            🚴 Serwis rowerowy w Częstochowie
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Profesjonalny serwis{' '}
          <span className="bg-gradient-to-r from-[color:var(--accent-2)] to-cyan-400 bg-clip-text text-transparent">
            dla Twojego roweru
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Szybkie naprawy, uczciwe ceny i indywidualne podejście. Twój rower w dobrych rękach w dzielnicy Parkitka.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleReservation}
            className="group px-8 py-4 bg-[color:var(--accent)] hover:bg-[color:var(--accent-2)] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[color:var(--accent)]/50 transform hover:-translate-y-1"
          >
            Umów wizytę
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:+48123456789"
            className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
          >
            📞 Zadzwoń teraz
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-700">
          <p className="text-slate-400 text-sm mb-4">Zaufało nam już ponad 500+ klientów</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">12+</p>
              <p className="text-slate-400 text-sm">Lat doświadczenia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-slate-400 text-sm">Zadowolonych klientów</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">⭐ 4.9</p>
              <p className="text-slate-400 text-sm">Średnia ocen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-400 text-xs font-medium">Scrolluj poniżej</span>
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
