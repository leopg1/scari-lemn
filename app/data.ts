export type StyleKey = "clasic" | "modern" | "metal" | "bespoke";

export const STYLES: { key: StyleKey; label: string }[] = [
  { key: "clasic", label: "Clasic" },
  { key: "modern", label: "Modern" },
  { key: "metal", label: "Metal & lemn" },
  { key: "bespoke", label: "Bespoke" },
];

export type Photo = {
  src: string;
  style: StyleKey;
  alt: string;
};

/* Real JMC project photos. Alt text describes the actual work. */
export const PHOTOS: Photo[] = [
  {
    src: "/gallery/clasic-04.jpg",
    style: "clasic",
    alt: "Scară clasică curbată cu balustri albi torsionați și mână curentă din nuc, casă cu hol înalt",
  },
  {
    src: "/gallery/modern-01.jpg",
    style: "modern",
    alt: "Scară modernă cu trepte din beton și iluminare LED ascunsă, balustradă din oțel negru",
  },
  {
    src: "/gallery/clasic-01.jpg",
    style: "clasic",
    alt: "Scară clasică în spirală văzută de sus, trepte din nuc și balustradă albă",
  },
  {
    src: "/gallery/modern-02.jpg",
    style: "modern",
    alt: "Scară modernă din stejar cu trepte suspendate și iluminare LED pe fiecare treaptă",
  },
  {
    src: "/gallery/metal-01.jpg",
    style: "metal",
    alt: "Balustradă contemporană din oțel negru cu mână curentă din stejar, perete alb",
  },
  {
    src: "/gallery/bespoke-01.jpg",
    style: "bespoke",
    alt: "Panouri decorative tăiate cu laser cu model circular, structură alb cu negru",
  },
  {
    src: "/gallery/clasic-02.jpg",
    style: "clasic",
    alt: "Scară clasică curbată cu balustri albi și trepte vopsite în culoare închisă",
  },
  {
    src: "/gallery/modern-03.jpg",
    style: "modern",
    alt: "Scară din stejar cu trepte de tip winder, văzută de sus, iluminare ambientală",
  },
  {
    src: "/gallery/bespoke-02.jpg",
    style: "bespoke",
    alt: "Balustradă bespoke din nuc cu model geometric vertical, hol luminos",
  },
  {
    src: "/gallery/clasic-07.jpg",
    style: "clasic",
    alt: "Scară cu balustri albi și trepte din stejar, podest intermediar",
  },
  {
    src: "/gallery/modern-06.jpg",
    style: "modern",
    alt: "Scară modernă din stejar deschis cu balustradă din șipci verticale",
  },
  {
    src: "/gallery/metal-02.jpg",
    style: "metal",
    alt: "Scară cu trepte din stejar și balustradă din bare metalice negre, mână curentă din lemn",
  },
  {
    src: "/gallery/clasic-03.jpg",
    style: "clasic",
    alt: "Scară clasică în spirală fotografiată de sus, trepte din nuc și balustradă albă",
  },
  {
    src: "/gallery/modern-04.jpg",
    style: "modern",
    alt: "Scară din stejar cu trepte de tip winder sub luminator, finisaj natural",
  },
  {
    src: "/gallery/clasic-05.jpg",
    style: "clasic",
    alt: "Balustradă curbată de balcon interior cu balustri torsionați din lemn",
  },
  {
    src: "/gallery/modern-05.jpg",
    style: "modern",
    alt: "Scară din stejar cald cu trepte de tip winder, design minimalist",
  },
  {
    src: "/gallery/clasic-06.jpg",
    style: "clasic",
    alt: "Stâlp de pornire și balustradă albă cu mână curentă din nuc pe podest",
  },
  {
    src: "/gallery/modern-07.jpg",
    style: "modern",
    alt: "Scară din stejar văzută de sus, decorată cu instalație de lumini calde",
  },
  {
    src: "/gallery/clasic-08.jpg",
    style: "clasic",
    alt: "Scară cu balustri albi și trepte din stejar pe mai multe niveluri",
  },
  {
    src: "/gallery/modern-08.jpg",
    style: "modern",
    alt: "Scară din stejar de tip winder cu mână curentă din lemn și balustradă albă",
  },
];

/* One curated featured photo per style for the Stiluri section. */
export const STYLE_FEATURE: Record<
  StyleKey,
  { src: string; alt: string; blurb: string }
> = {
  clasic: {
    src: "/gallery/clasic-04.jpg",
    alt: "Scară clasică curbată cu balustri albi torsionați și mână curentă din nuc",
    blurb:
      "Balustri torsionați, mâini curente din nuc, curbe ample. Eleganța care nu se demodează.",
  },
  modern: {
    src: "/gallery/modern-02.jpg",
    alt: "Scară modernă din stejar cu trepte suspendate și iluminare LED",
    blurb:
      "Trepte din stejar masiv, linii curate, iluminare LED integrată în fiecare treaptă.",
  },
  metal: {
    src: "/gallery/metal-01.jpg",
    alt: "Balustradă din oțel negru cu mână curentă din stejar",
    blurb:
      "Oțel negru și lemn cald. Robustețe industrială cu finisaj fin, pentru spații contemporane.",
  },
  bespoke: {
    src: "/gallery/bespoke-01.jpg",
    alt: "Panouri decorative tăiate cu laser cu model circular",
    blurb:
      "Panouri tăiate cu laser, modele geometrice unicat. Scara devine piesa centrală a casei.",
  },
};

export const PHONE_DISPLAY = "0770 178 063";
export const PHONE_TEL = "+40770178063";
export const WHATSAPP = "40770178063";
export const EMAIL = "sg.design.office1@gmail.com";
