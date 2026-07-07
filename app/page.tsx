import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon site",
  description: "Description de mon site",
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
          description="Création de site internet professionnel dans le Haut-Rhin pour artisans, commerçants et entreprises locales. Nous réalisons des sites rapides, modernes et optimisés pour le référencement Google."
          bullets={[
            "Design personnalisé, sans thème générique",
            "Textes rédigés avec vous, optimisés pour vos clients",
            "Livraison en 3 à 5 semaines selon le projet",
          ]}
          illustration={
            <Image
              src="/images/creationsiteinternet.png"
              alt="Création de site internet dans le Haut-Rhin"
              width={800}
              height={600}
              className="rounded-lg"
            />
          }
          imageSide="left"
          href="/creation-site-internet"
        />

        <ServiceSection
          id="ecommerce"
          index="02"
          eyebrow="Étape 2 — Vente en ligne"
          title="Site e-commerce"
          description="Une boutique en ligne fiable pour vendre vos produits 7j/7 : catalogue, paiement sécurisé et gestion des commandes."
          bullets={[
            "Paiement sécurisé",
            "Gestion autonome du catalogue",
            "Livraison ou retrait en boutique",
          ]}
          illustration={
            <Image
              src="/images/creationsiteecommerce.png"
              alt="Création de boutique e-commerce"
              width={800}
              height={600}
              className="rounded-lg"
            />
          }
          imageSide="right"
          href="/creation-site#ecommerce"
          tint
        />

        <ServiceSection
          id="referencement"
          index="03"
          eyebrow="Étape 3 — Visibilité"
          title="Référencement (SEO)"
          description="Optimisation technique, contenus ciblés et référencement local."
          bullets={[
            "SEO Google",
            "Suivi des positions",
            "Rapports simples",
          ]}
          illustration={
            <Image
              src="/images/referencementsiteinternet.png"
              alt="Référencement SEO"
              width={800}
              height={600}
              className="rounded-lg"
            />
          }
          imageSide="left"
          href="/referencement"
        />

        <ServiceSection
          id="hebergement"
          index="04"
          eyebrow="Étape 4 — Fiabilité"
          title="Hébergement"
          description="Hébergement sécurisé avec SSL et sauvegardes."
          bullets={[
            "SSL inclus",
            "Sauvegardes quotidiennes",
            "Surveillance 24h/24",
          ]}
          illustration={
            <Image
              src="/images/hebergementsiteinternet.png"
              alt="Hébergement sécurisé"
              width={800}
              height={600}
              className="rounded-lg"
            />
          }
          imageSide="right"
          tint
        />

        <ServiceSection
          id="maintenance"
          index="05"
          eyebrow="Étape 5 — Sérénité"
          title="Maintenance"
          description="Mises à jour, sécurité et assistance."
          bullets={[
            "Mises à jour",
            "Modifications de contenu",
            "Support rapide",
          ]}
          illustration={
            <Image
              src="/images/maintenancesiteinternet.png"
              alt="Maintenance de site"
              width={800}
              height={600}
              className="rounded-lg"
            />
          }
          imageSide="left"
        />
      </div>

      <div className="mx-auto grid max-w-content gap-12 px-6 py-16">
        <h2 className="mt-4 text-center font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Votre webmaster local dans le Haut-Rhin
        </h2>

        <p className="text-center">
          Basé en Alsace, Webmaster Haut-Rhin accompagne les entreprises de
          Mulhouse, Colmar, Saint-Louis et de tout le département.
        </p>
      </div>

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
