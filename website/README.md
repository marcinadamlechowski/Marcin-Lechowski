# Serwis Rowerowy — Strona (Next.js + TailwindCSS)

Kompletny, gotowy do uruchomienia szablon strony dla małego lokalnego serwisu rowerowego (Częstochowa, Parkitka).

## Co jest w repo
- Next.js (App Router) + TypeScript
- TailwindCSS + niestandardowe zmienne kolorów w `app/globals.css`
- Strony: `/`, `/about`, `/gallery`, `/pricing`, `/contact`, `/location`
- Komponenty w `src/components` (Hero, Navbar, Services, Reviews, Contact, Map, Footer, ScrollReveal)
- SEO: `app/layout.tsx` meta tags, `app/sitemap.ts`, `public/robots.txt`

## Uruchomienie lokalne
W katalogu `website`:

```bash
npm install
npm run dev
```

Strona będzie dostępna pod: http://localhost:3000

## Budowa produkcyjna
```bash
npm run build
npm run start
```

## Wdrożenie (Vercel)
1. Zaloguj się do Vercel i połącz repozytorium GitHub/GitLab.
2. Wybierz katalog `website` jeśli projekt znajduje się w podfolderze.
3. Domyślne polecenia build: `npm run build` i `npm run start` (Vercel użyje `next start` lub `vercel` automatycznie).

Opcjonalnie: ustaw zmienną środowiskową `NEXT_PUBLIC_GOOGLE_MAPS_KEY` jeśli chcesz wstawić działający embed Google Maps.

## Co warto uzupełnić przed produkcją
- Podmienić placeholdery w `app/gallery` na rzeczywiste zdjęcia (do `public/images` lub wykorzystać Unsplash API).
- Uzupełnić prawdziwy numer telefonu, email i adres w `src/components/Contact.tsx` oraz `Footer.tsx`.
- Dodać prawdziwe favicony i obrazy OpenGraph w `public/`.
- Jeśli chcesz akceptować formularze: podpiąć backend lub usługę (Formspree, Netlify Forms, custom API).

### Szybkie dodanie przykładowych zdjęć do galerii
W katalogu `website` uruchom poniższe polecenia (wymagany `curl`):

```bash
mkdir -p public/images
curl -L "https://source.unsplash.com/1200x800/?bicycle,workshop" -o public/images/photo1.jpg
curl -L "https://source.unsplash.com/1200x800/?bicycle,repair" -o public/images/photo2.jpg
curl -L "https://source.unsplash.com/1200x800/?bike,mechanic" -o public/images/photo3.jpg
curl -L "https://source.unsplash.com/1200x800/?bicycle,maintenance" -o public/images/photo4.jpg
curl -L "https://source.unsplash.com/1200x800/?cycling" -o public/images/photo5.jpg
curl -L "https://source.unsplash.com/1200x800/?bicycle,shop" -o public/images/photo6.jpg

# następnie uruchom dev server ponownie
npm run dev
```

Po pobraniu plików galeria automatycznie pokaże zdjęcia.

## Dalsze opcje (mogę zrobić dalej)
- Podmiana zdjęć przykładowych na zoptymalizowane obrazy (dodam skrypt do optymalizacji).
- Integracja prostego backendu do przechowywania zgłoszeń (Node/Express lub serverless functions).
- Przygotowanie deploy na Vercel i ustawienie domeny.

---

Jeśli chcesz, wdrożę finalne obrazy i skonfiguruję Vercel (potrzebuję dostępu do konta/gita) lub przygotuję pliki PSD/figma z layoutem.
