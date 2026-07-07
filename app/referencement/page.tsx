import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IllustrationSeo } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: "Référencement (SEO) local — Webmaster Haut-Rhin",
  description:
    "Améliorez votre visibilité sur Google dans le Haut-Rhin : référencement naturel, fiche établissement et suivi de position. Devis gratuit.",
};

const pillars = [
  {
    title: "Référencement technique",
    text: "Vitesse de chargement, structure des pages, adaptation mobile : les bases indispensables pour que Google comprenne et valorise votre site.",
  },
  {
    title: "Contenus & mots-clés",
    text: "Des pages rédigées autour des recherches réelles de vos futurs clients : votre métier, votre ville, vos prestations.",
  },
  {
    title: "Référencement local",
    text: "Optimisation de votre fiche d'établissement Google et cohérence de vos coordonnées sur les annuaires locaux du Haut-Rhin.",
  },
  {
    title: "Suivi & ajustements",
    text: "Suivi mensuel de vos positions et de votre trafic, avec des rapports clairs et des actions concrètes à chaque étape.",
  },
];

const faqs = [
  {
    q: "En combien de temps voit-on des résultats ?",
    a: "Les premiers effets apparaissent généralement entre 6 et 12 semaines, le référencement naturel étant un travail de fond qui s'inscrit dans la durée.",
  },
  {
    q: "Le référencement est-il inclus dans la création de site ?",
    a: "Chaque site livré respecte les bases techniques du référencement. Le suivi et l'optimisation continue font l'objet d'une prestation dédiée.",
  },
  {
    q: "Travaillez-vous avec des entreprises hors du Haut-Rhin ?",
    a: "Je suis spécialisé dans le référencement local pour le Haut-Rhin et l'Alsace, mais j'accompagne aussi des activités présentes sur une zone plus large.",
  },
];

export default function ReferencementPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Référencement (SEO)</p>
            <h1 className="section-heading mt-3 text-3xl text-ink sm:text-4xl">
              Être visible auprès de vos clients au bon moment.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-slate">
              Un site bien construit ne suffit pas s&apos;il reste introuvable.
              Un travail supplémentaire sur le référencement naturel de votre site pour est nécessaire
              qu&apos;il apparaisse dans les recherches de vos clients du, sans dépendre uniquement de la publicité payante.
            </p>
            <Link
              href="/devis"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accentdeep"
            >
              Demander un audit gratuit
              <span aria-hidden>→</span>
            </Link>
          </div>
           <Image
                                          src="/images/referencementsiteinternet.png"
                                          alt="Description de l'image"
                                          width={800}
                                          height={600}
                                          className="rounded-lg"
                                        />
        </div>
      </section>

      <section className="border-b border-line bg-paperdim/50 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <p className="eyebrow">Notre approche</p>
          <h2 className="section-heading mt-3 text-2xl text-ink sm:text-3xl">
            Quatre piliers pour progresser durablement
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-line bg-white p-6">
                <p className="font-display text-lg font-semibold text-ink">{pillar.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="section-heading mt-3 text-2xl text-ink sm:text-3xl">
            Ce que l&apos;on nous demande le plus
          </h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <p className="font-display text-base font-semibold text-ink">{faq.q}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <p className="eyebrow text-gold">Prêt à progresser sur Google ?</p>
          <h2 className="section-heading mt-3 text-2xl text-paper sm:text-3xl">
            Recevez un audit de votre visibilité actuelle.
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
