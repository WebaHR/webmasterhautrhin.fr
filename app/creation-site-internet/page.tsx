import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = "https://webmasterhautrhin.fr/creation-site-internet";
const SITE_NAME = "Webmaster Haut-Rhin";
const OG_IMAGE = "https://webmasterhautrhin.fr/images/creationsiteinternet.png";

export const metadata: Metadata = {
  title: "Création de site internet dans le Haut-Rhin | Webmaster Haut-Rhin",
  description:
    "Création de site internet dans le Haut-Rhin : sites vitrines et e-commerce sur mesure pour artisans, commerçants et indépendants à Mulhouse, Colmar et alentours. Devis gratuit sous 24h.",
  keywords: [
    "création de site internet Haut-Rhin",
    "création site internet Mulhouse",
    "création site internet Colmar",
    "création site vitrine Alsace",
    "agence web Haut-Rhin",
    "webmaster Haut-Rhin",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Création de site internet dans le Haut-Rhin | Webmaster Haut-Rhin",
    description:
      "Sites vitrines et e-commerce sur mesure pour les artisans, commerçants et indépendants du Haut-Rhin. Design sobre, rapide, pensé pour être trouvé sur Google. Devis gratuit sous 24h.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Création de site internet dans le Haut-Rhin — Webmaster Haut-Rhin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de site internet dans le Haut-Rhin | Webmaster Haut-Rhin",
    description:
      "Sites vitrines et e-commerce sur mesure pour les artisans, commerçants et indépendants du Haut-Rhin. Devis gratuit sous 24h.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// Données structurées (JSON-LD) : un schéma Service ciblant le Haut-Rhin,
// et un fil d'Ariane, pour renforcer la pertinence locale aux yeux de Google.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Création de site internet dans le Haut-Rhin",
      description:
        "Création de sites internet vitrines et e-commerce sur mesure pour les artisans, commerçants et indépendants du Haut-Rhin.",
      url: PAGE_URL,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haut-Rhin",
      },
      provider: {
        "@type": "ProfessionalService",
        name: SITE_NAME,
        url: "https://webmasterhautrhin.fr",
        areaServed: "Haut-Rhin",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://webmasterhautrhin.fr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Création de site internet",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const steps = [
  {
    n: "01",
    title: "Échange & cadrage",
    text: "Un rendez-vous (téléphone ou sur place) pour comprendre votre activité, vos clients et vos objectifs.",
  },
  {
    n: "02",
    title: "Maquette & contenus",
    text: "Proposition de structure et de design, conseil pour la rédaction de contenu, insertion des textes et images.",
  },
  {
    n: "03",
    title: "Développement",
    text: "Intégration du site, tests sur mobile et ordinateur, optimisation technique pour le SEO.",
  },
  {
    n: "04",
    title: "Mise en ligne",
    text: "Connexion de votre nom de domaine, activation du certificat SSL, formation à la prise en main.",
  },
];

const vitrineIncludes = [
  "Conception des pages du site (accueil, prestations, à propos, contact...)",
  "Design responsive, adapté à tous les écrans",
  "Formulaire de contact et plan d'accès",
];

const ecommerceIncludes = [
  "Catalogue produits",
  "Paiement en ligne sécurisé (carte bancaire, virement)",
  "Gestion des stocks",
  "Livraison, retrait en boutique ou zones de livraison",
];

export default function CreationSitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Création de site internet" }]} />
      
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <p className="eyebrow">Mes prestations</p>
          <h1 className="section-heading mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            Un site internet ou une boutique en ligne construite pour durer.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            Chaque projet est développé sur mesure : avec ou sans thème et
            fonctionnalités adaptées. Uniquement ce dont votre activité
            a besoin pour être trouvée, comprise et contactée. Une fois votre
            site en ligne, pensez aussi au{" "}
            <Link href="/referencement" className="text-ink underline hover:text-accent">
              référencement de site internet
            </Link>{" "}
            pour qu&apos;il soit trouvé sur Google par vos futurs clients du
            Haut-Rhin.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/creationsiteinternet.png"
            alt="Création de site internet professionnel dans le Haut-Rhin"
            width={800}
            height={600}
            className="rounded-lg"
          />
          <div>
            <p className="eyebrow">Site vitrine</p>
            <h2 className="section-heading mt-3 text-2xl text-ink sm:text-3xl">
              Présenter votre activité de façon claire et professionnelle
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Idéal pour les artisans, professions libérales et commerces qui
              veulent un site clair, rapide et visible.
            </p>
            <ul className="mt-6 space-y-3">
              {vitrineIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="ecommerce" className="border-b border-line bg-paperdim/50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <Image
              src="/images/creationsiteecommerce.png"
              alt="Création de boutique e-commerce dans le Haut-Rhin"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">Site e-commerce</p>
            <h2 className="section-heading mt-3 text-2xl text-ink sm:text-3xl">
              Vendre en ligne, sans complexité
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Une boutique gérable au quotidien : ajout de
              produits, suivi des commandes et des stocks, gestion des expéditions et de livraisons,...
            </p>
            <ul className="mt-6 space-y-3">
              {ecommerceIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <p className="eyebrow">Méthode</p>
          <h2 className="section-heading mt-3 text-2xl text-ink sm:text-3xl">
            Comment se déroule un projet
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="border-t-2 border-accent pt-4">
                <p className="font-mono text-xs text-accent">{step.n}</p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/referencement",
            label: "Référencement de site internet",
            text: "Faites en sorte que votre nouveau site soit trouvé sur Google par vos clients du Haut-Rhin grâce au référencement naturel et local.",
          },
          {
            href: "/realisations",
            label: "Mes réalisations",
            text: "Découvrez des exemples de sites vitrines et e-commerce créés pour des artisans et commerçants du Haut-Rhin.",
          },
        ]}
      />
      
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <p className="eyebrow on-dark">Étape suivante</p>
          <h2 className="section-heading mt-3 text-2xl text-paper sm:text-3xl">
            Décrivez-nous votre projet en 2 minutes.
          </h2>
          <Link
            href="/devis"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accentdeep"
          >
            Demander un devis gratuit
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
