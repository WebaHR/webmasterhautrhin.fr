import Link from "next/link";
import CookiePreferencesLink from "@/components/CookiePreferencesLink";

export default function Footer() {
  return (
    <footer className="footer-gradient border-t border-white/10 text-paper">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold">Webmaster Haut-Rhin</p>
            <p className="mt-3 max-w-xs text-sm text-paper/60">
              Création de sites internet, référencement et maintenance pour les
              artisans, commerçants, lesindépendants et les PME du Haut-Rhin.
            </p>
          </div>

          <div>
            <p className="eyebrow text-paper/50">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
             <li><Link href="/" className="hover:text-paper">Accueil</Link></li>
              <li><Link href="/creation-site-internet" className="hover:text-paper">Création de site internet</Link></li>
              <li><Link href="/creation-site#ecommerce" className="hover:text-paper">Site e-commerce</Link></li>
              <li><Link href="/referencement" className="hover:text-paper">Référencement (SEO)</Link></li>
              <li><Link href="/#hebergement" className="hover:text-paper">Hébergement</Link></li>
              <li><Link href="/#maintenance" className="hover:text-paper">Maintenance</Link></li>
              <li><Link href="/realisations" className="hover:text-paper">Réalisations</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/50">Le site</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
             
              
              <li><Link href="/devis" className="hover:text-paper">Me contacter</Link></li>
              <li><Link href="/politique-cookies" className="hover:text-paper">Politique cookies</Link></li>
              <li>
                <CookiePreferencesLink className="hover:text-paper" />
              </li>
              <li><Link href="/mentions-legales" className="hover:text-paper">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-paper">Politique de confidentialité</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li>Mulhouse &amp; Colmar, Haut-Rhin</li>
              <li>
                <a href="tel:+33663608012" className="hover:text-paper">06 63 60 80 12</a>
              </li>
              <li>
                <a href="mailto:contact@webmasterhautrhin.fr" className="hover:text-paper">
                  contact@webmasterhautrhin.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Webmaster Haut-Rhin. Tous droits réservés.</p>
          <p>Site conçu et hébergé dans le Haut-Rhin.</p>
        </div>
      </div>
    </footer>
  );
}
