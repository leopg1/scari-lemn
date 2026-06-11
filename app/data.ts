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
  w: number;
  h: number;
};

/* intrinsic dimensions of each optimized WebP, used to reserve space and
   prevent layout shift (CLS) while lazy images load */
const DIMS: Record<string, [number, number]> = {
  "/gallery/bespoke-01.webp": [1400, 1400],
  "/gallery/bespoke-02.webp": [1050, 1400],
  "/gallery/clasic-01.webp": [750, 959],
  "/gallery/clasic-02.webp": [750, 750],
  "/gallery/clasic-03.webp": [1050, 1400],
  "/gallery/clasic-04.webp": [1050, 1400],
  "/gallery/clasic-05.webp": [960, 720],
  "/gallery/clasic-06.webp": [960, 1280],
  "/gallery/clasic-07.webp": [1050, 1400],
  "/gallery/clasic-08.webp": [1050, 1400],
  "/gallery/metal-01.webp": [1400, 1400],
  "/gallery/metal-02.webp": [899, 899],
  "/gallery/modern-01.webp": [1500, 2000],
  "/gallery/modern-02.webp": [1050, 1400],
  "/gallery/modern-03.webp": [1050, 1400],
  "/gallery/modern-04.webp": [1080, 1080],
  "/gallery/modern-05.webp": [1500, 2000],
  "/gallery/modern-06.webp": [1050, 1400],
  "/gallery/modern-07.webp": [1400, 1400],
  "/gallery/modern-08.webp": [1000, 1000],
};

/* Real JMC project photos. Alt text describes the actual work. */
const PHOTO_SRC: Omit<Photo, "w" | "h">[] = [
  {
    src: "/gallery/clasic-04.webp",
    style: "clasic",
    alt: "Scară clasică curbată cu balustri albi torsionați și mână curentă din nuc, casă cu hol înalt",
  },
  {
    src: "/gallery/modern-01.webp",
    style: "modern",
    alt: "Scară modernă cu trepte din beton și iluminare LED ascunsă, balustradă din oțel negru",
  },
  {
    src: "/gallery/clasic-01.webp",
    style: "clasic",
    alt: "Scară clasică în spirală văzută de sus, trepte din nuc și balustradă albă",
  },
  {
    src: "/gallery/modern-02.webp",
    style: "modern",
    alt: "Scară modernă din stejar cu trepte suspendate și iluminare LED pe fiecare treaptă",
  },
  {
    src: "/gallery/metal-01.webp",
    style: "metal",
    alt: "Balustradă contemporană din oțel negru cu mână curentă din stejar, perete alb",
  },
  {
    src: "/gallery/bespoke-01.webp",
    style: "bespoke",
    alt: "Panouri decorative tăiate cu laser cu model circular, structură alb cu negru",
  },
  {
    src: "/gallery/clasic-02.webp",
    style: "clasic",
    alt: "Scară clasică curbată cu balustri albi și trepte vopsite în culoare închisă",
  },
  {
    src: "/gallery/modern-03.webp",
    style: "modern",
    alt: "Scară din stejar cu trepte de tip winder, văzută de sus, iluminare ambientală",
  },
  {
    src: "/gallery/bespoke-02.webp",
    style: "bespoke",
    alt: "Balustradă bespoke din nuc cu model geometric vertical, hol luminos",
  },
  {
    src: "/gallery/clasic-07.webp",
    style: "clasic",
    alt: "Scară cu balustri albi și trepte din stejar, podest intermediar",
  },
  {
    src: "/gallery/modern-06.webp",
    style: "modern",
    alt: "Scară modernă din stejar deschis cu balustradă din șipci verticale",
  },
  {
    src: "/gallery/metal-02.webp",
    style: "metal",
    alt: "Scară cu trepte din stejar și balustradă din bare metalice negre, mână curentă din lemn",
  },
  {
    src: "/gallery/clasic-03.webp",
    style: "clasic",
    alt: "Scară clasică în spirală fotografiată de sus, trepte din nuc și balustradă albă",
  },
  {
    src: "/gallery/modern-04.webp",
    style: "modern",
    alt: "Scară din stejar cu trepte de tip winder sub luminator, finisaj natural",
  },
  {
    src: "/gallery/clasic-05.webp",
    style: "clasic",
    alt: "Balustradă curbată de balcon interior cu balustri torsionați din lemn",
  },
  {
    src: "/gallery/modern-05.webp",
    style: "modern",
    alt: "Scară din stejar cald cu trepte de tip winder, design minimalist",
  },
  {
    src: "/gallery/clasic-06.webp",
    style: "clasic",
    alt: "Stâlp de pornire și balustradă albă cu mână curentă din nuc pe podest",
  },
  {
    src: "/gallery/modern-07.webp",
    style: "modern",
    alt: "Scară din stejar văzută de sus, decorată cu instalație de lumini calde",
  },
  {
    src: "/gallery/clasic-08.webp",
    style: "clasic",
    alt: "Scară cu balustri albi și trepte din stejar pe mai multe niveluri",
  },
  {
    src: "/gallery/modern-08.webp",
    style: "modern",
    alt: "Scară din stejar de tip winder cu mână curentă din lemn și balustradă albă",
  },
];

/* merge intrinsic dimensions in so every photo carries w/h for CLS-safe rendering */
export const PHOTOS: Photo[] = PHOTO_SRC.map((p) => {
  const [w, h] = DIMS[p.src] ?? [1050, 1400];
  return { ...p, w, h };
});

/* One curated featured photo per style for the Stiluri section. */
export const STYLE_FEATURE: Record<
  StyleKey,
  { src: string; alt: string; blurb: string }
> = {
  clasic: {
    src: "/gallery/clasic-04.webp",
    alt: "Scară clasică curbată cu balustri albi torsionați și mână curentă din nuc",
    blurb:
      "Balustri torsionați, mâini curente din nuc, curbe ample. Eleganța care nu se demodează.",
  },
  modern: {
    src: "/gallery/modern-02.webp",
    alt: "Scară modernă din stejar cu trepte suspendate și iluminare LED",
    blurb:
      "Trepte din stejar masiv, linii curate, iluminare LED integrată în fiecare treaptă.",
  },
  metal: {
    src: "/gallery/metal-01.webp",
    alt: "Balustradă din oțel negru cu mână curentă din stejar",
    blurb:
      "Oțel negru și lemn cald. Robustețe industrială cu finisaj fin, pentru spații contemporane.",
  },
  bespoke: {
    src: "/gallery/bespoke-01.webp",
    alt: "Panouri decorative tăiate cu laser cu model circular",
    blurb:
      "Panouri tăiate cu laser, modele geometrice unicat. Scara devine piesa centrală a casei.",
  },
};

export const PHONE_DISPLAY = "0770 178 063";
export const PHONE_TEL = "+40770178063";
export const WHATSAPP = "40770178063";
export const EMAIL = "sg.design.office1@gmail.com";
