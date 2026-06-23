import Link from 'next/link';
import { Bike } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bike className="w-8 h-8 text-[color:var(--accent)]" />
              <span className="text-xl font-bold text-slate-900">Serwis Rowerowy</span>
            </div>
            <p className="text-slate-600 text-sm">
              Profesjonalny serwis rowerowy w Częstochowie od 2012 roku.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[color:var(--accent)] transition-colors text-slate-600" title="Facebook">
                f
              </a>
              <a href="#" className="hover:text-[color:var(--accent)] transition-colors text-slate-600" title="Instagram">
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                  <Link href="/about" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                    O nas
                  </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/#reviews" scroll={false} className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                  Opinie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li>
                  <Link href="/pricing" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                    Przegląd roweru
                  </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                  Naprawy
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                  Konserwacja
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors text-sm font-medium">
                  Serwis amortyzatorów
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div>
                <p className="text-slate-600 text-sm font-medium">Telefon</p>
                <a href="tel:+48123456789" className="text-[color:var(--accent)] hover:text-[color:var(--accent)]/80 transition-colors font-semibold">
                  +48 123 456 789
                </a>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium">Email</p>
                <a href="mailto:kontakt@serwisrowerowy.pl" className="text-[color:var(--accent)] hover:text-[color:var(--accent)]/80 transition-colors font-semibold break-all">
                  kontakt@serwisrowerowy.pl
                </a>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium">Adres</p>
                <p className="text-slate-700">ul. Parkitka 42</p>
                <p className="text-slate-700">Częstochowa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>
              © {currentYear} Serwis Rowerowy. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-[color:var(--accent)] transition-colors font-medium">
                Polityka prywatności
              </Link>
              <Link href="/terms" className="hover:text-[color:var(--accent)] transition-colors font-medium">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
