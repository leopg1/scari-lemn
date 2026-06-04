"use client";

import { useEffect, useRef } from "react";
import { ArrowIcon } from "./icons";
import s from "./Hero.module.css";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        el.style.transform = `scale(1.08) translate3d(0, ${y * 0.12}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={s.hero} id="top">
      <div className={s.media} aria-hidden>
        <div className={s.mediaInner} ref={imgRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/modern-01.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className={s.scrim} />
      </div>

      <div className={`wrap ${s.inner}`}>
        <p className={`eyebrow ${s.eyebrow}`}>Atelier de scări din lemn masiv</p>

        <h1 className={s.title}>
          Scara nu este doar trecere
          <br />
          între etaje.{" "}
          <em className={s.em}>Este piesa centrală a casei.</em>
        </h1>

        <p className={s.lede}>
          Proiectăm, executăm și montăm scări interioare din lemn masiv, la
          comandă. Clasice, moderne sau bespoke, fiecare scară este măsurată și
          potrivită exact spațiului dumneavoastră.
        </p>

        <div className={s.cta}>
          <a href="#oferta" className="btn btn-primary">
            Cere ofertă <ArrowIcon className={s.arrow} />
          </a>
          <a href="#galerie" className={s.textLink}>
            Vezi lucrările noastre
          </a>
        </div>
      </div>

      <a href="#stiluri" className={s.scroll} aria-label="Derulează în jos">
        <span className={s.scrollLine} />
      </a>
    </section>
  );
}
