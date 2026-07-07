import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | Webmaster Hautrhin",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) du site webmasterhautrhin.fr.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <h1 className="section-heading mt-3 text-3xl text-ink sm:text-4xl">
        Politique de confidentialité
      </h1>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          1. Introduction
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          La présente politique de confidentialité a pour objectif de vous
          informer sur la manière dont webmasterhautrhin.fr
          collecte, utilise et protège vos données personnelles lorsque vous
          utilisez le site webmasterhautrhin.fr, conformément au Règlement
          Général sur la Protection des Données (RGPD) et à la loi
          Informatique et Libertés du 6 janvier 1978 modifiée.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          2. Responsable du traitement
        </h2>
        <div className="space-y-1 text-sm leading-relaxed text-ink">
          <p>Nom : Sébastien MURATET</p>
          <p>Adresse : Ballersdorf</p>
          <p>Email : contact@webmasterhautrhin.fr</p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          3. Données collectées
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Selon votre utilisation du site, nous pouvons être amenés à
          collecter les données suivantes :
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink">
          <li>
            Données d'identification : nom, prénom, adresse email, numéro de
            téléphone (via le formulaire de contact / devis)
          </li>
          <li>
            Données de connexion et de navigation : adresse IP, type de
            navigateur, pages consultées, durée de visite (via les cookies
            et outils de mesure d'audience, le cas échéant)
          </li>
          <li>Toute autre information que vous nous transmettez volontairement</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          4. Finalités du traitement
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Vos données personnelles sont collectées et traitées pour les
          finalités suivantes :
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink">
          <li>Répondre à vos demandes de contact ou de devis</li>
          <li>Assurer la gestion de la relation commerciale</li>
          <li>Améliorer la qualité et l'ergonomie du site</li>
          <li>
            Établir des statistiques de fréquentation anonymisées (le cas
            échéant)
          </li>
          <li>Respecter nos obligations légales et réglementaires</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          5. Base légale du traitement
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Le traitement de vos données repose selon les cas sur : votre
          consentement (formulaires, cookies non essentiels), l'exécution de
          mesures précontractuelles ou contractuelles (demande de devis,
          prestation), ou notre intérêt légitime (amélioration du site,
          sécurité).
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          6. Durée de conservation
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Vos données personnelles sont conservées pendant une durée
          n'excédant pas celle nécessaire aux finalités pour lesquelles elles
          sont traitées, soit 3 ans à compter du dernier
          contact pour les prospects, durée de la relation contractuelle
          + délais légaux pour les clients.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          7. Destinataires des données
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Vos données sont destinées exclusivement à webmasterhautrhin.fr et, le cas échéant, à ses sous-traitants techniques
          (hébergeur, outil d'emailing, outil de statistiques). Ces
          prestataires n'utilisent vos données que dans le cadre de
          l'exécution des prestations qui leur sont confiées.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          8. Cookies
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Le site peut utiliser des cookies strictement nécessaires à son
          fonctionnement ainsi que, sous réserve de votre consentement, des
          cookies de mesure d'audience ou de personnalisation. Vous pouvez à
          tout moment configurer votre navigateur pour refuser les cookies ou
          être averti de leur dépôt. 
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          9. Vos droits
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Conformément au RGPD, vous disposez des droits suivants concernant
          vos données personnelles :
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement (« droit à l'oubli »)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d'opposition</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit de définir des directives relatives à vos données après votre décès</li>
        </ul>
        <p className="text-sm leading-relaxed text-ink">
          Vous pouvez exercer ces droits en nous contactant à l'adresse :{" "}
          contact@webmasterhautrhin.fr. Une réponse vous
          sera apportée dans un délai maximum d'un mois.
        </p>
        <p className="text-sm leading-relaxed text-ink">
          Si vous estimez, après nous avoir contactés, que vos droits ne sont
          pas respectés, vous pouvez adresser une réclamation à la CNIL
          (Commission Nationale de l'Informatique et des Libertés) :{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accentpale underline"
          >
            www.cnil.fr
          </a>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          10. Sécurité des données
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Nous mettons en œuvre les mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre toute
          perte, accès non autorisé, divulgation ou destruction.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          11. Modification de la politique de confidentialité
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Nous nous réservons le droit de modifier la présente politique de
          confidentialité à tout moment. Les modifications entrent en
          vigueur dès leur publication sur le site.
        </p>
      </section>

      <p className="mt-12 text-sm">
        <Link href="/mentions-legales" className="text-accent underline">
          Consulter nos mentions légales
        </Link>
      </p>
    </main>
  );
}
