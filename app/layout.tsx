import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JMC Scări Lemn — Scări interioare din lemn masiv, la comandă",
  description:
    "Atelier de scări interioare din lemn masiv: clasice, moderne cu iluminare LED, balustrade metalice și panouri bespoke. Proiectare, execuție și montaj. Cere ofertă.",
  metadataBase: new URL("https://jmcscarilemn.ro"),
  openGraph: {
    title: "JMC Scări Lemn — Scări din lemn masiv, la comandă",
    description:
      "Scări interioare din lemn masiv proiectate, executate și montate de meșteri. Vezi lucrările și cere o ofertă.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${spectral.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
