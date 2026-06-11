import Reveal from "./Reveal";
import { CheckIcon } from "./icons";
import s from "./Materials.module.css";

const WOODS = [
  { name: "Stejar", note: "Dur, stabil, fibră caldă. Cea mai cerută esență." },
  { name: "Frasin", note: "Deschis și elastic, perfect pentru linii moderne." },
  { name: "Nuc", note: "Închis și nobil, pentru scări de efect." },
];

const POINTS = [
  "Lemn masiv, uscat controlat, fără pericol de deformare",
  "Finisaje cu ulei sau lac, mate sau satinate",
  "Trepte antiderapante la cerere",
  "Iluminare LED integrată în trepte sau balustradă",
];

export default function Materials() {
  return (
    <section className={s.section} id="materiale">
      <div className={`wrap ${s.grid}`}>
        <Reveal className={s.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/modern-05.webp"
            alt="Detaliu de trepte din stejar masiv cu finisaj natural cald"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className={s.body} delay={120}>
          <p className="eyebrow">Materiale & garanție</p>
          <h2 className={s.title}>
            Lemn masiv. <span className={s.thin}>Fără compromis.</span>
          </h2>
          <p className={s.intro}>
            Lucrăm doar cu lemn masiv, uscat și selectat. Esența o alegeți
            dumneavoastră; noi garantăm că scara va arăta bine și peste douăzeci
            de ani.
          </p>

          <div className={s.woods}>
            {WOODS.map((w) => (
              <div key={w.name} className={s.wood}>
                <span className={s.woodName}>{w.name}</span>
                <span className={s.woodNote}>{w.note}</span>
              </div>
            ))}
          </div>

          <ul className={s.points}>
            {POINTS.map((p) => (
              <li key={p}>
                <CheckIcon className={s.check} />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
