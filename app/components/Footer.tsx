import { PHONE_DISPLAY, PHONE_TEL } from "../data";
import { PhoneIcon, PinIcon } from "./icons";
import s from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={`wrap ${s.top}`}>
        <div className={s.brandCol}>
          <span className={s.brand}>
            <span className={s.mark}>JMC</span> Scări{" "}
            <span className={s.thin}>Lemn</span>
          </span>
          <p className={s.tagline}>
            Scări interioare din lemn masiv, proiectate, executate și montate de
            meșteri. La comandă, pentru casa ta.
          </p>
        </div>

        <nav className={s.col} aria-label="Secțiuni">
          <h4 className={s.colTitle}>Site</h4>
          <a href="#stiluri">Stiluri</a>
          <a href="#galerie">Galerie</a>
          <a href="#proces">Proces</a>
          <a href="#materiale">Materiale</a>
          <a href="#oferta">Cere ofertă</a>
        </nav>

        <div className={s.col}>
          <h4 className={s.colTitle}>Contact</h4>
          <a href={`tel:${PHONE_TEL}`} className={s.contact}>
            <PhoneIcon className={s.cIcon} /> {PHONE_DISPLAY}
          </a>
          {/* TODO: înlocuiește cu zona reală acoperită */}
          <span className={s.contact}>
            <PinIcon className={s.cIcon} /> Lucrăm în toată țara
          </span>
        </div>
      </div>

      <div className={`wrap ${s.bottom}`}>
        <span>© {year} JMC Scări Lemn. Toate drepturile rezervate.</span>
        <span className={s.note}>Lemn masiv. Execuție proprie.</span>
      </div>
    </footer>
  );
}
