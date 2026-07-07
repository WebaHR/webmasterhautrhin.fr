import Link from "next/link";

export const metadata = {
  title: "Mentions légales | Webmaster Hautrhin",
  description:
    "Mentions légales du site webmasterhautrhin.fr : éditeur, hébergeur et informations légales.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <h1 className="section-heading mt-3 text-3xl text-ink sm:text-4xl">
        Mentions légales
      </h1>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          1. Éditeur du site
        </h2>
        <div className="space-y-1 text-sm leading-relaxed text-ink/75">
          <p>Nom / Raison sociale : Sebastien MURATET EI</p>
          <p>
            Statut juridique : Auto-entrepreneur
          </p>
          <p>SIRET : 499212710</p>
          <p>Adresse du siège social : Ballersdorf</p>
          <p>Téléphone : 06.63.60.80.12</p>
          <p>Email : contact@webmasterhautrhin.fr</p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          2. Directeur de la publication
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Sébastien MURATET
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          3. Hébergement du site
        </h2>
        <div className="space-y-1 text-sm leading-relaxed text-ink">
          <p>Nom de l'hébergeur : Vercel Inc.</p>
          <p>Adresse : 440 N Barranca Ave #4133 - Covina, CA 91723 - États-Unis</p>
          <p>Téléphone / Contact : 01.42.68.42.68</p>
          <p>Site web : https://vercel.com</p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          4. Propriété intellectuelle
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          L'ensemble des contenus présents sur le site webmasterhautrhin.fr
          (textes, images, graphismes, logo, icônes, structure, etc.) est,
          sauf mention contraire, la propriété exclusive de l'éditeur du
          site. Toute reproduction, distribution, modification, adaptation,
          retransmission ou publication, même partielle, de ces différents
          éléments est strictement interdite sans l'accord exprès par écrit
          de l'éditeur.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          5. Limitation de responsabilité
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          L'éditeur s'efforce d'assurer au mieux de ses possibilités
          l'exactitude et la mise à jour des informations diffusées sur ce
          site. Toutefois, il ne peut garantir l'exactitude, la précision ou
          l'exhaustivité des informations mises à disposition et ne saurait
          être tenu responsable des erreurs, d'une absence de disponibilité
          des informations et/ou de la présence de virus sur son site.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          6. Liens hypertextes
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Le site peut contenir des liens hypertextes vers d'autres sites
          internet. L'éditeur n'exerce aucun contrôle sur ces sites et
          décline toute responsabilité quant à leur contenu.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          7. Droit applicable
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Les présentes mentions légales sont soumises au droit français. En
          cas de litige, les tribunaux français seront seuls compétents.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          8. Contact
        </h2>
        <p className="text-sm leading-relaxed text-ink">
          Pour toute question relative à ces mentions légales, vous pouvez
          nous contacter à l'adresse suivante :{" "}
          contact@webmasterhautrhin.fr.
        </p>
      </section>

      <p className="mt-12 text-sm">
        <Link href="/politique-confidentialite" className="text-accent underline">
          Consulter notre politique de confidentialité
        </Link>
      </p>
    </main>
  );
}
