INSTRUKCJE OBSŁUGI — Strona Serwisu Rowerowego

Plik zawiera niezbędne instrukcje do dalszej obsługi, podmiany zdjęć, uruchamiania i wdrożenia.

1) Uruchamianie projektu lokalnie
- Przejdź do katalogu projektu:

  cd /workspaces/Marcin-Lechowski/website

- Zainstaluj zależności (pierwsze uruchomienie):

  npm install

- Tryb developerski (hot-reload):

  npm run dev

- Budowa produkcyjna i uruchomienie:

  npm run build
  npm run start

2) Podmiana zdjęć w galerii (ręcznie)
- Lokalizacja plików galerii: `public/images`
- Nazwy wymagane przez galerię: `photo1.jpg`, `photo2.jpg`, …, `photo6.jpg`.
- Zamień pliki na własne (możesz użyć PNG lub JPG). Po podmianie HMR zwykle odświeża widok, jeżeli nie: zrestartuj `npm run dev`.

3) Pobranie przykładowych zdjęć (szybko)
- Jeśli chcesz pobrać przykładowe obrazy jednorazowo, uruchom w katalogu `website` polecenia z README (curl):

  mkdir -p public/images
  curl -L "https://source.unsplash.com/1200x800/?bicycle,workshop" -o public/images/photo1.jpg
  ... powtórz dla photo2..photo6 ...

- Alternatywnie uruchom gotowy skrypt który pobiera i optymalizuje zdjęcia:

- Uruchom z NPM (pobierze sample i zoptymalizuje):

  npm run fetch-images

  (skrypt pobiera przykładowe zdjęcia z picsum i zapisuje JPG/WEBP/thumbnail w `public/images`)

4) Optymalizacja lokalnych zdjęć (generowanie JPG/WEBP/miniatur)
- Wgrywasz oryginały do `public/images/originals/` (dowolne nazwy plików .jpg/.png)
- Stwórz plik skryptu `scripts/convert-local-images.js` (jeśli chcesz użyć) — przykład w dokumentacji projektu.
- Upewnij się, że masz zainstalowany `sharp`:

  npm install sharp

- Uruchom skrypt:

- Uruchom lokalny konwerter z NPM (konwertuje pliki z `public/images/originals`):

  npm run convert-images

  (skrypt wygeneruje `photo1.jpg`, `photo1.webp`, `photo1-thumb.jpg` itd.)

Skrypt wygeneruje: `photo1.jpg`, `photo1.webp`, `photo1-thumb.jpg` itd.

5) Konfiguracja formularza kontaktowego i webhooka
- Formularz wysyła dane do lokalnego endpointu API: `app/api/contact/route.ts`.
- Skonfiguruj plik środowiskowy w `website/.env.local` na podstawie `website/.env.example`:

  CONTACT_WEBHOOK_URL="https://example.com/webhook"
  CONTACT_RECIPIENT_EMAIL="kontakt@serwisrowerowy.pl"

- `CONTACT_WEBHOOK_URL` powinien wskazywać na Twój webhook Discord/Slack lub inny serwis przyjmujący JSON POST.
- `CONTACT_RECIPIENT_EMAIL` jest opcjonalny i może być użyty w przyszłej integracji e-mail.

- Numer telefonu, email, godziny i adres znajdują się w:
  - `src/components/Contact.tsx`
  - `src/components/Footer.tsx`
- Zmień tekst tam i zapisz plik. HMR powinien zaktualizować stronę.

6) Zmiana kolorystyki i typografii
- Zmienne kolorów w: `app/globals.css` (np. `--accent`, `--accent-2`, `--muted`).
- Typografia w: `app/layout.tsx` (fonty z next/font).

7) Strony / dodawanie podstron
- App Router pages znajdują się w `app/` (np. `app/about/page.tsx`, `app/gallery/page.tsx`).
- Aby dodać nową stronę np. "usługi/dodatkowe": utwórz `app/uslugi/dodatkowe/page.tsx` i eksportuj komponent.

8) SEO / sitemap
- Meta i domyślne tagi: `app/layout.tsx`
- Sitemap: `app/sitemap.ts` (generowana automatycznie podczas builda)
- robots.txt: `public/robots.txt`

9) Wdrożenie na Vercel (najprostsze)
- Zaloguj się do Vercel i połącz repozytorium.
- W przypadku gdy projekt jest w podfolderze wybierz katalog `website` jako root projektu.
- Ustaw komendy build/deploy: `npm run build` (Vercel wykrywa Next.js automatycznie).
- (Opcjonalnie) ustaw `NEXT_PUBLIC_GOOGLE_MAPS_KEY` w środowisku Vercel, jeśli używasz embedu Map Google.

10) Przydatne polecenia i troubleshooting
- Sprawdź błędy builda:

  npm run build

  - Jeśli są błędy z importami sprawdź `tsconfig.json` → paths (alias `@/*` powinien wskazywać na `./src/*`).
- Uruchom lint/typecheck (jeśli potrzebujesz): dodaj skrypty zgodnie z preferencjami (nie dodałem ESLint w projekcie domyślnie).

11) Backups i wersjonowanie
- Przechowuj oryginalne zdjęcia w `public/images/originals/` i commituj tylko zoptymalizowane pliki, jeżeli nie chcesz przechowywać dużych plików w repo — rozważ użycie zewnętrznego CDN (Cloudinary, S3) i przechowywanie tylko linków.

12) Kontakt / wsparcie
- Jeśli chcesz, mogę:
- Jeśli chcesz, mogę:
  - dodać dodatkowe skrypty lub zmienić konfigurację optymalizacji,
  - pomóc skonfigurować automatyczny pipeline obrazu w CI/CD.
  - pomóc skonfigurować Vercel i domenę.

---
Plik zapisany jako `INSTRUKCJE_OBSLUGI.md` w katalogu `website`.
Jeśli chcesz, wprowadzę skrypt `convert-local-images.js` i zaktualizuję `package.json` (jedno polecenie).