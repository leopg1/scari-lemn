"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { PHOTOS, STYLES, type StyleKey } from "../data";
import { CloseIcon, ChevronLeft, ChevronRight } from "./icons";
import s from "./Gallery.module.css";

type Filter = "toate" | StyleKey;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("toate");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "toate"
        ? PHOTOS
        : PHOTOS.filter((p) => p.style === filter),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i + 1) % visible.length
      ),
    [visible.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const active = lightbox === null ? null : visible[lightbox];

  return (
    <section className={s.section} id="galerie">
      <div className="wrap">
        <div className={s.head}>
          <div>
            <p className="eyebrow">Galerie</p>
            <h2 className={s.title}>
              Lucrări reale, <span className={s.thin}>nu randări.</span>
            </h2>
          </div>
          <p className={s.sub}>
            Fiecare fotografie este o scară proiectată, executată și montată de
            echipa noastră, în case reale.
          </p>
        </div>

        <div className={s.filters} role="tablist" aria-label="Filtrează după stil">
          <button
            role="tab"
            aria-selected={filter === "toate"}
            className={`${s.chip} ${filter === "toate" ? s.chipOn : ""}`}
            onClick={() => setFilter("toate")}
          >
            Toate
            <span className={s.count}>{PHOTOS.length}</span>
          </button>
          {STYLES.map((st) => {
            const n = PHOTOS.filter((p) => p.style === st.key).length;
            return (
              <button
                key={st.key}
                role="tab"
                aria-selected={filter === st.key}
                className={`${s.chip} ${filter === st.key ? s.chipOn : ""}`}
                onClick={() => setFilter(st.key)}
              >
                {st.label}
                <span className={s.count}>{n}</span>
              </button>
            );
          })}
        </div>

        <div className={s.grid}>
          {visible.map((photo, i) => (
            <button
              key={photo.src}
              className={s.cell}
              onClick={() => setLightbox(i)}
              aria-label={`Mărește: ${photo.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <span className={s.cellGlow} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className={s.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vizualizare fotografie"
          onClick={close}
        >
          <button className={s.lbClose} onClick={close} aria-label="Închide">
            <CloseIcon />
          </button>
          <button
            className={`${s.lbNav} ${s.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Fotografia anterioară"
          >
            <ChevronLeft />
          </button>

          <figure className={s.lbFigure} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <figcaption className={s.lbCaption}>
              <span>{active.alt}</span>
              <span className={s.lbCounter}>
                {(lightbox ?? 0) + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>

          <button
            className={`${s.lbNav} ${s.lbNext}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Fotografia următoare"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
