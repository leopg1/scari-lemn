import { NextResponse } from "next/server";

/**
 * Quote request endpoint.
 *
 * TODO (client wiring): forward the lead to a real destination, e.g.
 *   - send an email (Resend / Nodemailer)
 *   - push to a CRM or Google Sheet
 *   - notify on WhatsApp Business API
 * For now it validates and logs server-side, returning success so the
 * front-end flow is fully exercisable.
 */

const ROMANIAN_PHONE = /^(\+?4?0)\s?7\d{2}([\s.-]?\d{3}){2}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalid" }, { status: 400 });
  }

  const nume = String(body.nume ?? "").trim();
  const telefon = String(body.telefon ?? "").trim();
  const oras = String(body.oras ?? "").trim();

  if (nume.length < 2 || oras.length < 2 || !ROMANIAN_PHONE.test(telefon)) {
    return NextResponse.json(
      { error: "Date lipsă sau invalide" },
      { status: 422 }
    );
  }

  const lead = {
    nume,
    telefon,
    oras,
    stil: String(body.stil ?? ""),
    mesaj: String(body.mesaj ?? "").slice(0, 2000),
    primitLa: new Date().toISOString(),
  };

  // Replace with real delivery. Logged for now.
  console.log("[ofertă nouă]", lead);

  return NextResponse.json({ ok: true });
}
