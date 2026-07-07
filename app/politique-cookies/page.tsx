import type { Metadata } from "next";
import CookiePreferencesLink from "@/components/CookiePreferencesLink";

export const metadata: Metadata = {
  title: "Politique cookies — Webmaster Haut-Rhin",
  description:
    "Détail des cookies utilisés sur webmasterhautrhin.fr et gestion de vos préférences.",
};

export default function PolitiqueCookiesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow">Vie privée</p>
        <h1 className="section-heading mt-3 text-3xl text-ink sm:text-4xl">
          Politique cookies
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-slate">
          Cette page explique quels cookies sont utilisés sur
          webmasterhautrhin.fr, pour quelle raison, et comment vous pouvez à
          tout moment modifier votre choix.
        </p>

        <div className="mt-10 max-w-2xl space-y-8">
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-ink">
                Cookies strictement nécessaires
              </h2>
              <span className="flex-none rounded-full bg-paperdim px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-slate">
                Toujours actifs
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Indispensables au fonctionnement du site : mémorisation de votre
              choix concernant les cookies, et protection anti-spam du
              formulaire de contact via{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent"
              >
                Google reCAPTCHA
              </a>
              . Ces cookies ne nécessitent pas votre consentement car ils sont
              requis pour vous fournir le service que vous demandez
              explicitement (envoyer un message via le formulaire).
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-ink">
                Cookies de mesure d&apos;audience
              </h2>
              <span className="flex-none rounded-full bg-accentlight px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-accentdeep">
                Non utilisés
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Ce site n&apos;utilise actuellement aucun outil de mesure
              d&apos;audience (type Google Analytics) ni de cookie
              publicitaire. Si cela venait à changer, votre accord vous serait
              demandé au préalable via le bandeau de gestion des cookies.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-2xl rounded-2xl border border-line bg-paperdim/60 p-6">
          <h2 className="font-display text-lg font-semibold text-ink">
            Modifier votre choix à tout moment
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Vous pouvez rouvrir le bandeau de gestion des cookies et modifier
            vos préférences à tout moment en cliquant sur le lien ci-dessous,
            ou depuis le pied de page de n&apos;importe quelle page du site.
          </p>
          <CookiePreferencesLink className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accentdeep" />
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-slate/70">
          Pour toute question relative à cette politique ou à vos données
          personnelles, vous pouvez nous contacter à{" "}
          <a href="mailto:contact@webmasterhautrhin.fr" className="underline hover:text-accent">
            contact@webmasterhautrhin.fr
          </a>
          .
        </p>
      </div>
    </section>
  );
}
