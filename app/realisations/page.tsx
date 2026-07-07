import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Nos réalisations — Webmaster Haut-Rhin",
  description:
    "Exemples de sites internet et boutiques en ligne créés pour des artisans, commerçants et indépendants du Haut-Rhin.",
};

type Layout = "vitrine" | "ecommerce" | "services" | "none";

type Project = {
  name: string;
  category: string;
  location: string;
  layout: Layout;
  result: ReactNode;
  description: ReactNode;
  relatedHref: string;
  relatedLabel: string;
};

const projects: Project[] = [
  {
    name: "Médecine Ayurvedique",
    category: "Site vitrine",
    location: "Ribeauvillé",
    layout: "none",
    result: (
      <a
        href="https://surya-ayurveda-yoga.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accentdeep hover:underline"
      >
        Voir le site
      </a>
    ),
    description: (
      <>
        Création personnalisée du site vitrine. Réalisation basée sur les envies du client.
        <p className="eyebrow mt-6 text-center">Wordpress · Optimisation SEO · Hébergement · Maintenance </p>
      </>
    ),
    relatedHref: "/creation-site-internet",
    relatedLabel: "Voir la prestation création de site",
  },
  {
    name: "Vente de produits personnalisables",
    category: "Site e-commerce",
    location: "Arengosse",
    layout: "none",
    result: (
      <a
        href="https://cpersonnalisable.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accentdeep hover:underline"
      >
        Voir le site
      </a>
    ),
    description: (
      <>
        Création du site ecommerce sur Woocommerce sur la base d'un thème Wordpress. Produits personnalisables.
        <p className="eyebrow mt-6 text-center">Woocommerce · Optimisation SEO · Hébergement · Maintenance </p>
      </>
    ),
    relatedHref: "/creation-site-internet#ecommerce",
    relatedLabel: "Voir la prestation e-commerce",
  },
  {
    name: "Expert en bâtiment",
    category: "Site vitrine",
    location: "Linxe",
    layout: "none",
    result: (
      <a
        href="https://gf-expertise.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accentdeep hover:underline"
      >
        Voir le site
      </a>
    ),
    description: (
      <>
        Création personnalisée du site vitrine dans le domaine de l'expertise en bâtiment.
        <p className="eyebrow mt-6 text-center">Wordpress · Optimisation SEO · SEA · Hébergement · Maintenance </p>
      </>
    ),
    relatedHref: "/creation-site-internet",
    relatedLabel: "Voir la prestation création de site",
  },
  {
    name: "Location de logements insolites",
    category: "Site ecommerce",
    location: "St-Martin-de-Hinx",
    layout: "none",
    result: (
      <a
        href="https://landifornia-lodge.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accentdeep hover:underline"
      >
        Voir le site
      </a>
    ),
    description: (
      <>
        Création du site Ecommerce sous Woocommerce. Gestion des réservations et paiements en ligne.
        <p className="eyebrow mt-6 text-center">Woocommerce · Optimisation SEO · SEA · Hébergement · Maintenance </p>
      </>
    ),
    relatedHref: "/creation-site-internet#ecommerce",
    relatedLabel: "Voir la prestation e-commerce",
  },
  {
    name: "Vente de produits de décoration et artisanat local",
    category: "Site e-commerce",
    location: "Mont-de-Marsan",
    layout: "none",
    result: (
      <a
        href="https://landifornia-lodge.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accentdeep hover:underline"
      >
        Voir le site
      </a>
    ),
    description: (
      <>
        Création du site Ecommerce sous Prestashop. Catalogue de plus de 500 références.
        <p className="eyebrow mt-6 text-center">Prestashop · Hébergement · Maintenance </p>
      </>
    ),
    relatedHref: "/creation-site-internet#ecommerce",
    relatedLabel: "Voir la prestation e-commerce",
  },
  {
    name: "Vente de produits artisanaux",
    category: "Site e-commerce",
    location: "Mugron",
    layout: "none",
    result: (
      <a
        href="https://www.rouge-garance.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accentdeep hover:underline"
      >
        Voir le site
      </a>
    ),
    description: (
      <>
        Pas de création ni de refonte. Uniquement un upgrade d'un site Ecommerce Prestashop de la version 7.4 à la version 8.2.
        <p className="eyebrow mt-6 text-center">Prestashop · Upgrade · BDD · Fichiers sources </p>
      </>
    ),
    relatedHref: "/creation-site-internet#ecommerce",
    relatedLabel: "Voir la prestation e-commerce",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <p className="eyebrow">Quelques unes de mes réalisations</p>
          <h1 className="section-heading mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            Des projets pensés pour chaque activité du Haut-Rhin et ailleurs.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            Chaque site est construit autour de votre activité et des clients réels de
            de votre entreprise. Voici quelques exemples représentatifs des
            projets que j'ai réalisés.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white card-shadow"
            >
              <Mockup layout={project.layout} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[0.65rem] uppercase tracking-wide text-accent">
                    {project.category}
                  </p>
                  <p className="text-xs text-slate">{project.location}</p>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold text-ink">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {project.description}
                </p>
                <p className="mt-4 border-t border-line pt-3 text-sm font-medium">
                  {project.result}
                </p>
                <Link
                  href={project.relatedHref}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accentdeep hover:underline"
                >
                  {project.relatedLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center sm:text-2xl">
          Il y en a beaucoup d'autres mais je ne peux pas tous les mettre.
          <br />
          Pour voir plus de réalisations, contactez-moi !
        </p>
      </section>

      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <p className="eyebrow on-dark">Votre projet pourrait être le prochain</p>
          <h2 className="section-heading mt-3 text-2xl text-paper sm:text-3xl">
            Parlons de votre activité et de vos objectifs.
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

function Mockup({ layout }: { layout: Layout }) {
  return (
    <div className="border-b border-line bg-paperdim/50 p-4">
      <div className="overflow-hidden rounded-lg border border-line bg-white">
        <div className="flex items-center gap-1.5 border-b border-line bg-paperdim/70 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-accent/70" />
          <span className="h-2 w-2 rounded-full bg-slate/30" />
          <span className="h-2 w-2 rounded-full bg-slate/30" />
        </div>

        {layout === "vitrine" && (
          <div className="space-y-2 p-4">
            <div className="h-16 rounded-md bg-accentlight" />
            <div className="h-2 w-2/3 rounded bg-slate/25" />
            <div className="h-2 w-1/2 rounded bg-slate/15" />
            <div className="mt-2 h-6 w-20 rounded-full bg-ink/85" />
          </div>
        )}

        {layout === "ecommerce" && (
          <div className="grid grid-cols-2 gap-2 p-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="space-y-1.5 rounded-md border border-line p-2">
                <div className="h-10 rounded bg-accentlight" />
                <div className="h-1.5 w-3/4 rounded bg-slate/25" />
                <div className="h-1.5 w-1/2 rounded bg-accent/60" />
              </div>
            ))}
          </div>
        )}

        {layout === "services" && (
          <div className="grid grid-cols-3 gap-2 p-4">
            <div className="col-span-1 space-y-2">
              <div className="h-6 w-6 rounded-full bg-accentlight" />
              <div className="h-1.5 w-full rounded bg-slate/20" />
              <div className="h-1.5 w-full rounded bg-slate/20" />
              <div className="h-1.5 w-2/3 rounded bg-slate/20" />
            </div>
            <div className="col-span-2 space-y-2">
              <div className="h-3 w-2/3 rounded bg-slate/25" />
              <div className="h-14 rounded-md bg-accentlight" />
              <div className="h-6 w-24 rounded-full bg-ink/85" />
            </div>
          </div>
        )}

        {layout === "none" && (
          <div className="space-y-2 p-4">
            <div className="h-16 rounded-md bg-paperdim" />
            <div className="h-2 w-2/3 rounded bg-slate/15" />
            <div className="h-2 w-1/2 rounded bg-slate/10" />
          </div>
        )}
      </div>
    </div>
  );
}
