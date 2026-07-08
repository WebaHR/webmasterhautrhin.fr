import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/seo/JsonLd";

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
  metadataBase: new URL("https://webmasterhautrhin.fr"),

  title: {
    default: "Webmaster Haut-Rhin | Création de site internet & Référencement SEO",
    template: "%s | Webmaster Haut-Rhin",
  },

  description:
    "Webmaster indépendant dans le Haut-Rhin. Création de sites internet, référencement naturel SEO, maintenance WordPress et développement Next.js à Mulhouse, Colmar, Saint-Louis et partout en Alsace.",

  keywords: [
    "webmaster haut-rhin",
    "webmaster mulhouse",
    "création site internet haut-rhin",
    "création site internet mulhouse",
    "référencement haut-rhin",
    "référencement mulhouse",
    "développeur next.js alsace",
    "maintenance wordpress",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Webmaster Haut-Rhin",
    description:
      "Création de sites internet, référencement naturel SEO et développement Next.js dans le Haut-Rhin.",
    url: "https://webmasterhautrhin.fr",
    siteName: "Webmaster Haut-Rhin",
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Webmaster Haut-Rhin",
    description:
      "Création de sites internet et référencement SEO dans le Haut-Rhin.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body text-ink">
  <JsonLd />

  <Header />

  <main>{children}</main>

  <Footer />

  <CookieConsent />
  
  <Analytics />
</body>
    </html>
  );
}
