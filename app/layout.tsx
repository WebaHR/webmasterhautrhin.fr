import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "ProfessionalService",
"name": "Webmaster Haut-Rhin",
"url": "https://webmasterhautrhin.fr",
"description":
"Création de sites internet, référencement SEO et maintenance dans le Haut-Rhin.",
"areaServed": {
"@type": "AdministrativeArea",
"name": "Haut-Rhin"
},
"serviceType": [
"Création de site internet",
"SEO",
"Hébergement web",
"Maintenance"
]
})
}}
/>

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webmaster Haut-Rhin — Création de sites internet & référencement",
  description:
    "Agence web indépendante dans le Haut-Rhin : création de sites internet, e-commerce, référencement local, hébergement et maintenance. Devis gratuit sous 24h.",
  keywords: [
    "webmaster Haut-Rhin",
    "création site internet Mulhouse",
    "référencement Colmar",
    "agence web Alsace",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="text-ink font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
