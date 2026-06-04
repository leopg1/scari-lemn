# JMC Scări Lemn

Site de prezentare pentru un atelier de scări interioare din lemn masiv, la comandă.
Galerie de lucrări reale, prezentarea stilurilor (clasic, modern, metal & lemn,
bespoke), proces, materiale și formular de cerere de ofertă. Obiectivul principal:
generarea de cereri de ofertă.

Construit cu **Next.js (App Router) + React + TypeScript**.

## Dezvoltare

```bash
npm install
npm run dev      # http://localhost:3000
```

## Producție

```bash
npm run build
npm run start
```

## Structură

- `app/` — paginile și componentele
  - `app/page.tsx` — pagina principală (asamblează secțiunile)
  - `app/components/` — Nav, Hero, Trust, Styles, Gallery, Process, Materials,
    Quote, Footer, MobileBar
  - `app/api/oferta/route.ts` — endpoint pentru cererile de ofertă (validează și
    înregistrează; de conectat la email/CRM)
  - `app/data.ts` — datele galeriei și datele de contact
  - `app/globals.css` — tokenii de design (paletă OKLCH, tipografie, motion)
- `public/gallery/` — fotografiile lucrărilor

## De configurat

- Datele de contact se află în `app/data.ts` (telefon).
- Formularul de ofertă (`app/api/oferta/route.ts`) doar validează și scrie în
  consolă; conectează-l la o adresă de email sau un CRM pentru a primi lead-urile.
- Statisticile din secțiunea de încredere (`app/components/Trust.tsx`) sunt
  deocamdată valori provizorii.
