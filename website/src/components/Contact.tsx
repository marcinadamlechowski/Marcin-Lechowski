'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: '',
    preferredDate: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok || result?.error) {
        setError(result?.error || 'Wystąpił błąd podczas wysyłania formularza.');
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', phone: '', problem: '', preferredDate: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Form submit error:', err);
      setError('Nie udało się wysłać formularza. Spróbuj ponownie później.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Umów wizytę teraz. Odpowiadamy szybko i bez biurokracji.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Twoje imię *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-slate-900 mb-2">
                  Opis problemu
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                  placeholder="Np. hamulce nie działają prawidłowo, rower jedzie do boku..."
                />
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-900 mb-2">
                  Preferowany termin
                </label>
                <select
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                >
                  <option value="">Wybierz termin</option>
                  <option value="today">Dzisiaj (jeśli możliwe)</option>
                  <option value="tomorrow">Jutro</option>
                  <option value="week">W ciągu tygodnia</option>
                  <option value="flexible">Elastycznie</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
              </button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">✓ Dziękujemy! Otrzymaliśmy Twoją wiadomość. Oddzwonimy wkrótce!</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Telefon</h3>
                <a href="tel:+48123456789" className="text-green-600 hover:text-green-700 text-lg font-medium">
                  +48 123 456 789
                </a>
                <p className="text-slate-600 text-sm mt-1">Dostępni pn-pt 9:00-18:00, sobota 10:00-16:00</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                <a href="mailto:kontakt@serwisrowerowy.pl" className="text-green-600 hover:text-green-700 text-lg font-medium">
                  kontakt@serwisrowerowy.pl
                </a>
                <p className="text-slate-600 text-sm mt-1">Odpowiadamy w ciągu 24h</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Adres</h3>
                <p className="text-slate-900 font-medium">ul. Parkitka 42</p>
                <p className="text-slate-600">42-200 Częstochowa</p>
                <p className="text-slate-600 text-sm mt-1">Dzielnica Parkitka</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Godziny otwarcia</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-900">Poniedziałek - Piątek: 9:00 - 18:00</p>
                  <p className="text-slate-900">Sobota: 10:00 - 16:00</p>
                  <p className="text-slate-600">Niedziela: Zamknięte</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Śledź nas</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-pink-500 hover:text-white transition-all duration-300"
                  title="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
