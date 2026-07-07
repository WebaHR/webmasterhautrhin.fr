import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Demande de devis — Webmaster Haut-Rhin",
  description:
    "Demandez votre devis gratuit pour la création de votre site internet, boutique en ligne, référencement ou maintenance. Réponse sous 24h.",
};

const process = [
  {
    n: "01",
    title: "Vous envoyez votre demande",
    text: "Quelques informations sur votre activité et votre projet suffisent pour démarrer.",
  },
  {
    n: "02",
    title: "Je vous rappelle",
    text: "Un échange court, par téléphone ou sur place, pour affiner vos besoins.",
  },
  {
    n: "03",
    title: "Vous recevez votre devis",
    text: "Un devis détaillé et sans surprise, sous 48h après notre échange.",
  },
];

export default function DevisPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h1 className="section-heading mt-3 text-3xl text-ink sm:text-4xl">
              Discutons de votre projet Web.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-slate">
              Que vous partiez d&apos;une page blanche ou souhaitiez faire
              évoluer un site existant, faîtes-moi part de votre projet : je vous 
              contacterai rapidement avec des recommandations concrètes.
            </p>

            <div className="mt-10 space-y-8 border-t border-line pt-8">
              {process.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-mono text-sm text-accent">{step.n}</span>
                  <div>
                    <p className="font-display font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-paperdim/60 p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-slate">Me contacter directement</p>
              <p className="mt-2 text-sm text-ink">
                <a href="tel:+33663608012" className="font-medium hover:text-accent">
                  06 63 60 80 12
                </a>
              </p>
              <p className="mt-1 text-sm text-ink">
                <a href="mailto:contact@webmasterhautrhin.fr" className="font-medium hover:text-accent">
                  contact@webmasterhautrhin.fr
                </a>
              </p>
              <p className="mt-1 text-sm text-slate">Du lundi au vendredi, 9h–18h</p>
            </div>
          </div>

          <ContactForm title="Décrivez votre projet" />
        </div>
      </div>
    </section>
  );
}
