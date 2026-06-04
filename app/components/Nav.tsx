"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "../data";
import { PhoneIcon } from "./icons";
import s from "./Nav.module.css";

const LINKS = [
  { href: "#stiluri", label: "Stiluri" },
  { href: "#galerie", label: "Galerie" },
  { href: "#proces", label: "Proces" },
  { href: "#materiale", label: "Materiale" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={`wrap ${s.bar}`}>
        <a href="#top" className={s.brand} aria-label="JMC Scări Lemn, acasă">
          <span className={s.mark} aria-hidden>
            JMC
          </span>
          <span className={s.brandText}>
            Scări <span className={s.brandThin}>Lemn</span>
          </span>
        </a>

        <nav className={s.links} aria-label="Navigație principală">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={s.actions}>
          <a href={`tel:${PHONE_TEL}`} className={s.phone}>
            <PhoneIcon className={s.phoneIcon} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href="#oferta" className="btn btn-primary">
            Cere ofertă
          </a>
        </div>

        <button
          className={s.burger}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${s.burgerLine} ${open ? s.b1 : ""}`} />
          <span className={`${s.burgerLine} ${open ? s.b2 : ""}`} />
          <span className={`${s.burgerLine} ${open ? s.b3 : ""}`} />
        </button>
      </div>

      <div
        className={`${s.sheet} ${open ? s.sheetOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={s.sheetInner}>
          <nav className={s.sheetNav} aria-label="Meniu mobil">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#oferta"
              className={`btn btn-primary ${s.sheetCta}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Cere ofertă
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className={s.sheetPhone}
              tabIndex={open ? 0 : -1}
            >
              <PhoneIcon className={s.phoneIcon} /> {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
