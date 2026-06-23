import Link from 'next/link';
import { Bike } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bike className="w-8 h-8 text-[color:var(--accent-2)]" />
              <span className="text-xl font-bold text-white">Serwis Rowerowy</span>
            </div>
            <p className="text-slate-400 text-sm">
              Profesjonalny serwis rowerowy w Częstochowie od 2012 roku.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[color:var(--accent-2)] transition-colors" title="Facebook">
                f
              </a>
              <a href="#" className="hover:text-[color:var(--accent-2)] transition-colors" title="Instagram">
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                  <Link href="/about" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                    O nas
                  </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/" scroll={false} className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                  Opinie
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li>
                  <Link href="/pricing" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                    Przegląd roweru
                  </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                  Naprawy
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                  Konserwacja
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-[color:var(--accent-2)] transition-colors text-sm">
                  Serwis amortyzatorów
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm">Telefon</p>
                <a href="tel:+48123456789" className="text-[color:var(--accent-2)] hover:text-[color:var(--accent-2)] transition-colors font-medium">
                  +48 123 456 789
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a href="mailto:kontakt@serwisrowerowy.pl" className="text-[color:var(--accent-2)] hover:text-[color:var(--accent-2)] transition-colors font-medium">
                  kontakt@serwisrowerowy.pl
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Adres</p>
                <p className="text-slate-300">ul. Parkitka 42</p>
                <p className="text-slate-300">Częstochowa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>
              © {currentYear} Serwis Rowerowy. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-[color:var(--accent-2)] transition-colors">
                Polityka prywatności
              </Link>
              <Link href="/terms" className="hover:text-[color:var(--accent-2)] transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
