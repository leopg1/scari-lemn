import Reveal from "./Reveal";
import CountUp from "./CountUp";
import s from "./Trust.module.css";

/* NOTE: stats marked as placeholders — confirm real numbers with client. */
const STATS = [
  { value: "15+", label: "ani de experiență", note: "placeholder" },
  { value: "300+", label: "scări montate", note: "placeholder" },
  { value: "100%", label: "lemn masiv" },
  { value: "5 ani", label: "garanție execuție", note: "placeholder" },
];

export default function Trust() {
  return (
    <section className={s.trust} aria-label="De ce JMC">
      <div className={`wrap ${s.row}`}>
        {STATS.map((stat, i) => (
          <Reveal as="div" key={stat.label} delay={i * 80} className={s.item}>
            <CountUp value={stat.value} className={s.value} />
            <span className={s.label}>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
