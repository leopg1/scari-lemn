"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  // Start armed=false so SSR / no-JS renders content fully visible.
  // We only arm the hidden state once JS confirms an observer is running,
  // so content can never get stuck invisible.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    // If already in (or near) the viewport on mount, reveal without arming hide.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    // Safety net: if the observer never fires within 1.2s of being on screen
    // for any reason, reveal anyway.
    const safety = window.setTimeout(() => setShown(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  // Cast to a loosely-typed component so the dynamic tag union does not blow
  // up the ref type. The `as` prop is still constrained by Props above.
  const Tag = as as React.ElementType<{
    ref?: React.Ref<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
  }>;
  const cls = [
    "reveal",
    armed ? "armed" : "",
    shown ? "in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag
      ref={ref}
      className={cls}
      style={delay && armed && !shown ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
