import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "68", label: "sites lancés dans le Haut-Rhin" },
  { value: "24h", label: "délai de réponse à votre devis" },
  { value: "4.9/5", label: "satisfaction clients" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <h1 className="mt-8 text-center font-display text-3xl font-semibold text-ink sm:text-5xl md:text-6xl lg:text-3xl lg:text-[2.8rem]">
  Création de site internet
        dans le
  <span className="text-accent"> haut-rhin</span>
</h1>
          <h2 className="eyebrow text-center">Webmaster indépendant — Mulhouse · Colmar · Haut-Rhin</h2>
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] ">
        <div className="fade-up">
          <p className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[2.5rem]">
            Un site internet qui travaille  pour vous et pas l'inverse.
          </p>
          <p className="mt-6 max-w-xl text-base text-justify leading-relaxed text-slate sm:text-lg">
            Création de sites vitrines et e-commerce, référencement local et
            maintenance : un interlocuteur unique dans le Haut-Rhin, du premier
            croquis à la mise en ligne.<br />
            Vous souhaitez aller plus loin ? 
            <br />

            Je vous accompagne dans le développement de votre activité en ligne,
            avec des solutions sur-mesure et adaptées à vos besoins pour atteindre vos objectifs.
          </p>
        
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/realisations"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Nos réalisations
            <span aria-hidden>→</span>
          </Link>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center mt-8">
           <a
        href="tel:0663608012"
        className="flex items-center gap-2 hover:text-blue-600"
      >
           <Phone size={24} />
           <span>06 63 60 80 12</span>
         </a>
         <a
        href="mailto:contact@webmasterhautrhin.fr"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <Mail size={24} />
         <span>contact@webmasterhautrhin.fr</span>
         </a>
         </div>
      </div>

        <div className="fade-up" style={{ animationDelay: "0.1s" }}>
          <Image
            src="/images/webmasterhautrhin.png"
            alt="création de site internet dans le haut rhin"
            width={800}
            height={600}
            className="rounded-lg"
          />
          <p className="eyebrow text-center mt-6">Wordpress · Woocommerce · Prestashop · Next.js</p>
          <p className="eyebrow text-center">SEO · SEA · Hébergement · Maintenance</p>
        </div>
        
      </div>
    </section>
  );
}
