"use client";

import { useState, type FormEvent } from "react";
import { PHONE_DISPLAY, PHONE_TEL, STYLES } from "../data";
import { PhoneIcon, CheckIcon, ArrowIcon } from "./icons";
import s from "./Quote.module.css";

type Errors = Partial<Record<"nume" | "telefon" | "oras", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const ROMANIAN_PHONE = /^(\+?4?0)\s?7\d{2}([\s.-]?\d{3}){2}$/;

export default function Quote() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    const nume = String(data.get("nume") ?? "").trim();
    const telefon = String(data.get("telefon") ?? "").trim();
    const oras = String(data.get("oras") ?? "").trim();

    if (nume.length < 2) next.nume = "Spuneți-ne cum vă numiți.";
    if (!telefon) next.telefon = "Avem nevoie de un număr de telefon.";
    else if (!ROMANIAN_PHONE.test(telefon))
      next.telefon = "Numărul nu pare valid. Ex: 07xx xxx xxx.";
    if (oras.length < 2) next.oras = "În ce localitate este lucrarea?";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(
        `[name="${Object.keys(found)[0]}"]`
      )?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/oferta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  function clearError(field: keyof Errors) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  return (
    <section className={s.section} id="oferta">
      <div className={`wrap ${s.grid}`}>
        <div className={s.aside}>
          <p className="eyebrow">Cere ofertă</p>
          <h2 className={s.title}>
            Hai să vorbim despre <em className={s.em}>scara ta.</em>
          </h2>
          <p className={s.lede}>
            Trimite-ne câteva detalii. Te sunăm în maximum 24 de ore cu o
            estimare și pașii următori. Fără obligații.
          </p>

          <div className={s.direct}>
            <a href={`tel:${PHONE_TEL}`} className={s.directRow}>
              <span className={s.directIcon}>
                <PhoneIcon />
              </span>
              <span>
                <span className={s.directLabel}>Sună direct</span>
                <span className={s.directValue}>{PHONE_DISPLAY}</span>
              </span>
            </a>
          </div>
        </div>

        <div className={s.formWrap}>
          {status === "success" ? (
            <div className={s.success} role="status">
              <span className={s.successIcon}>
                <CheckIcon />
              </span>
              <h3 className={s.successTitle}>Cererea a fost trimisă</h3>
              <p className={s.successText}>
                Mulțumim. Te contactăm în maximum 24 de ore. Dacă e urgent,
                sună-ne la {PHONE_DISPLAY}.
              </p>
              <button
                className={s.successAgain}
                onClick={() => setStatus("idle")}
              >
                Trimite altă cerere
              </button>
            </div>
          ) : (
            <form className={s.form} onSubmit={onSubmit} noValidate>
              <div className={s.field}>
                <label htmlFor="nume">Nume</label>
                <input
                  id="nume"
                  name="nume"
                  type="text"
                  autoComplete="name"
                  placeholder="Ion Popescu"
                  aria-invalid={!!errors.nume}
                  aria-describedby={errors.nume ? "err-nume" : undefined}
                  className={errors.nume ? s.invalid : ""}
                  onInput={() => clearError("nume")}
                />
                {errors.nume && (
                  <span id="err-nume" className={s.error}>
                    {errors.nume}
                  </span>
                )}
              </div>

              <div className={s.two}>
                <div className={s.field}>
                  <label htmlFor="telefon">Telefon</label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="07xx xxx xxx"
                    aria-invalid={!!errors.telefon}
                    aria-describedby={errors.telefon ? "err-telefon" : undefined}
                    className={errors.telefon ? s.invalid : ""}
                    onInput={() => clearError("telefon")}
                  />
                  {errors.telefon && (
                    <span id="err-telefon" className={s.error}>
                      {errors.telefon}
                    </span>
                  )}
                </div>

                <div className={s.field}>
                  <label htmlFor="oras">Localitate</label>
                  <input
                    id="oras"
                    name="oras"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="București"
                    aria-invalid={!!errors.oras}
                    aria-describedby={errors.oras ? "err-oras" : undefined}
                    className={errors.oras ? s.invalid : ""}
                    onInput={() => clearError("oras")}
                  />
                  {errors.oras && (
                    <span id="err-oras" className={s.error}>
                      {errors.oras}
                    </span>
                  )}
                </div>
              </div>

              <div className={s.field}>
                <label htmlFor="stil">Stil dorit (opțional)</label>
                <select id="stil" name="stil" defaultValue="">
                  <option value="">Nu sunt sigur încă</option>
                  {STYLES.map((st) => (
                    <option key={st.key} value={st.key}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={s.field}>
                <label htmlFor="mesaj">Detalii (opțional)</label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  rows={3}
                  placeholder="Număr de trepte, formă, esență preferată, termen dorit…"
                />
              </div>

              {status === "error" && (
                <p className={s.formError} role="alert">
                  Nu am putut trimite cererea. Încearcă din nou sau sună-ne la{" "}
                  {PHONE_DISPLAY}.
                </p>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${s.submit}`}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <span className={s.spinner} aria-hidden /> Se trimite…
                  </>
                ) : (
                  <>
                    Trimite cererea <ArrowIcon className={s.arrow} />
                  </>
                )}
              </button>
              <p className={s.fineprint}>
                Datele tale sunt folosite doar pentru a-ți răspunde la cerere.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
