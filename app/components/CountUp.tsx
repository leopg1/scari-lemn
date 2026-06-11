"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the numeric part of a stat up from zero when it scrolls into view.
 * Keeps any non-numeric prefix/suffix intact ("300+", "5 ani", "100%").
 * Respects prefers-reduced-motion and never leaves the value stuck at zero.
 */
export default function CountUp({
  value,
  duration = 1400,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const isNumeric = !!match;
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : value;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(isNumeric ? 0 : null);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setDisplay(target);
      return;
    }

    let raf = 0;
    let started = false;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // ease-out-expo, matches the site's motion language
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setDisplay(Math.round(eased * target));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // if already on screen at mount, start immediately
    if (el.getBoundingClientRect().top < window.innerHeight) {
      started = true;
      run();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // safety: never stay at 0 if the observer somehow never fires
    const safety = window.setTimeout(() => {
      if (!started) {
        started = true;
        setDisplay(target);
      }
    }, 2500);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
    // primitives only — `match` is a fresh array each render and would
    // restart the animation on every frame if included here
  }, [isNumeric, target, duration]);

  if (!isNumeric) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
