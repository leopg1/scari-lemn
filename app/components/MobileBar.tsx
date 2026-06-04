"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL } from "../data";
import { PhoneIcon, ArrowIcon } from "./icons";
import s from "./MobileBar.module.css";

export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${s.bar} ${show ? s.show : ""}`}>
      <a href={`tel:${PHONE_TEL}`} className={s.call}>
        <PhoneIcon className={s.icon} />
        Sună
      </a>
      <a href="#oferta" className={s.offer}>
        Cere ofertă <ArrowIcon className={s.icon} />
      </a>
    </div>
  );
}
