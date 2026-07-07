import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import type { Metadata } from "next";
import {
  IllustrationCreation,
  IllustrationEcommerce,
  IllustrationSeo,
  IllustrationHosting,
  IllustrationMaintenance,
} from "@/components/Illustrations";

export const metadata: Metadata = {
  title: "Création de site internet dans le Haut-Rhin | Webmaster Haut-Rhin",
  description:
    "Webmaster dans le Haut-Rhin : création de sites internet sur mesure, sites e-commerce, référencement SEO, hébergement et maintenance pour les entreprises locales.",
  keywords: [
    "création site internet Haut-Rhin",
    "webmaster Haut-Rhin",
    "création site vitrine",
    "site e-commerce Alsace",
    "référencement naturel Haut-Rhin",
    "SEO local",
  ],
  alternates: {
    canonical: "https://webmasterhautrhin.fr/",
  },
  openGraph: {
    title: "Création de site internet dans le Haut-Rhin",
    description:
      "Des sites internet rapides, modernes et optimisés pour Google pour les entreprises du Haut-Rhin.",
    url: "https://webmasterhautrhin.fr/",
    siteName: "Webmaster Haut-Rhin",
    locale: "fr_FR",
    type: "website",
  },
};
export default function Home() {
  return (
    <>
      <Hero />

      <section className="step-gradient border-t border-white/10 border-b border-line bg-paperdim/40 py-6">
        <p className="text-center font-mono text-lg uppercase text-gray-300">
          Le parcours d&apos;un projet web, du premier trait à la maintenance
        </p>
      </section>

      <div className="relative">
        <span className="river-line hidden lg:block" />

        <ServiceSection
          id="creation"
          index="01"
          eyebrow="Étape 1 — Conception"
          title="Création de site internet"
          description="Création de site internet professionnel dans le Haut-Rhin pour artisans,
commerçants et entreprises locales. Nous réalisons des sites rapides,
modernes et optimisés pour le référencement Google.."
          bullets={[
            "Design personnalisé, sans thème générique",
            "Textes rédigés avec vous, optimisés pour vos clients",
            "Livraison en 3 à 5 semaines selon le projet",
          ]}
          
          illustration={<Image
                      src="/images/creationsiteinternet.png"
                      alt="création de site internet dans le haut rhin"
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />}
          imageSide="left"
          href="/creation-site-internet"
          
        />

        <ServiceSection
          id="ecommerce"
          index="02"
          eyebrow="Étape 2 — Vente en ligne"
          title="Site e-commerce"
          description="Une boutique en ligne fiable pour vendre vos produits 7j/7 : catalogue, paiement sécurisé et gestion des commandes pensés pour les petites structures."
          bullets={[
            "Paiement en ligne sécurisé (carte, virement)",
            "Gestion autonome du catalogue et des stocks",
            "Adapté à la livraison comme au retrait en boutique",
          ]}
          illustration={<Image
                      src="/images/creationsiteecommerce.png"
                      alt="Création de boutique en ligne e-commerce dans le Haut-Rhin"
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />}
          imageSide="right"
          href="/creation-site#ecommerce"
          tint
        />

        <ServiceSection
          id="referencement"
          index="03"
          eyebrow="Étape 3 — Visibilité"
          title="Référencement (SEO)"
          description="Être trouvé par les bonnes personnes, au bon moment : optimisation technique, contenus ciblés et référencement local pour apparaître sur les recherches qui comptent."
          bullets={[
            "Référencement naturel Google et fiche établissement",
            "Suivi de position sur vos mots-clés locaux",
            "Rapports simples, sans jargon technique",
          ]}
          illustration={<Image
                      src="/images/referencementsiteinternet.png"
                      alt="Optimisation SEO et référencement naturel Google pour entreprise locale"
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />}
          imageSide="left"
          href="/referencement"
        />

        <ServiceSection
          id="hebergement"
          index="04"
          eyebrow="Étape 4 — Fiabilité"
          title="Hébergement"
          description="Un hébergement avec certificat SSL et sauvegardes régulières, pour que votre site reste disponible en toutes circonstances."
          bullets={[
            "Certificat SSL inclus",
            "Sauvegardes automatiques quotidiennes",
            "Surveillance de la disponibilité 24h/24",
          ]}
          illustration={<Image
                      src="/images/hebergementsiteinternet.png"
                      alt="Hébergement sécurisé de site internet avec certificat SSL"
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />}
          imageSide="right"
          tint
        />

        <ServiceSection
          id="maintenance"
          index="05"
          eyebrow="Étape 5 — Sérénité"
          title="Maintenance"
          description="Votre site évolue avec votre activité : mises à jour de sécurité et de fonctionnalités. Petites modifications de contenu et assistance rapide en cas de besoin."
          bullets={[
            "Mises à jour techniques et sécurité incluses",
            "Modifications de contenu sur simple demande",
            "Assistance par téléphone et email",
          ]}
          illustration={<Image
                      src="/images/maintenancesiteinternet.png"
                      alt="Maintenance et sécurité de site internet professionnel"
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />}
          imageSide="left"
        />
      </div>
<div className="mx-auto grid max-w-content gap-12 px-6 py-16">
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[2.5rem] text-center">
Mes services de création de site internet dans le Haut-Rhin
</h2>

<p className="text-center">
J'accompagne les indépendants du haut-Rhin et de l'Alsace dans l'amélioration de leur visibilité par la mise en place d'actions adaptées à leur métier.
  L'objectif étant d'élargir le champ d'action en captant une clientèle par l'intermédiaire d'internet.
</p> </div> 
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <p className="eyebrow text-gold">Prêt à démarrer ?</p>
          <h2 className="section-heading mt-3 text-2xl text-paper sm:text-3xl">
            Discutons de votre projet.
          </h2>
          <a
            href="/devis"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accentdeep"
          >
            Demander un devis gratuit
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
