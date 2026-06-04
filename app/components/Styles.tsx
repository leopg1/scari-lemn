import Reveal from "./Reveal";
import { STYLE_FEATURE, STYLES } from "../data";
import { ArrowIcon } from "./icons";
import s from "./Styles.module.css";

export default function Styles() {
  return (
    <section className={s.section} id="stiluri">
      <div className="wrap">
        <Reveal className={s.head}>
          <p className="eyebrow">Patru direcții, un singur standard</p>
          <h2 className={s.title}>
            Orice stil de casă. <span className={s.thin}>Scara potrivită.</span>
          </h2>
          <p className={s.intro}>
            De la balustri torsionați la oțel negru și panouri tăiate cu laser,
            executăm scara care se potrivește arhitecturii și felului
            dumneavoastră de a locui.
          </p>
        </Reveal>

        <div className={s.list}>
          {STYLES.map((style, i) => {
            const f = STYLE_FEATURE[style.key];
            return (
              <Reveal
                as="article"
                key={style.key}
                className={`${s.block} ${i % 2 === 1 ? s.flip : ""}`}
              >
                <figure className={s.figure}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.src} alt={f.alt} loading="lazy" decoding="async" />
                  <span className={s.index}>0{i + 1}</span>
                </figure>
                <div className={s.body}>
                  <h3 className={s.blockTitle}>{style.label}</h3>
                  <p className={s.blurb}>{f.blurb}</p>
                  <a href="#galerie" className={s.link}>
                    Vezi exemple <ArrowIcon className={s.arrow} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
