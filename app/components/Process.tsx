import Reveal from "./Reveal";
import s from "./Process.module.css";

const STEPS = [
  {
    n: "01",
    title: "Consultație",
    text: "Discutăm stilul dorit, bugetul și particularitățile casei. Vă propunem soluții și esențe de lemn potrivite.",
  },
  {
    n: "02",
    title: "Măsurătoare",
    text: "Venim la fața locului și măsurăm exact golul scării. Fiecare proiect pornește de la dimensiuni reale, nu estimări.",
  },
  {
    n: "03",
    title: "Execuție în atelier",
    text: "Realizăm trepte, balustri și mâini curente din lemn masiv, finisate manual. Calitatea se vede în detalii.",
  },
  {
    n: "04",
    title: "Montaj",
    text: "Montăm scara curat și la timp, lăsând spațiul gata de folosit. Garanție pentru execuție și finisaj.",
  },
];

export default function Process() {
  return (
    <section className={s.section} id="proces">
      <div className="wrap">
        <Reveal className={s.head}>
          <p className="eyebrow">Cum lucrăm</p>
          <h2 className={s.title}>
            De la prima discuție <span className={s.thin}>la prima urcare.</span>
          </h2>
        </Reveal>

        <ol className={s.steps}>
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className={s.step}>
              <span className={s.num}>{step.n}</span>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepText}>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
