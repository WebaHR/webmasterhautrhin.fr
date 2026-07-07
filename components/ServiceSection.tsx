import Link from "next/link";
import type { ReactNode } from "react";

export default function ServiceSection({
  id,
  index,
  eyebrow,
  title,
  description,
  bullets,
  illustration,
  imageSide = "left",
  href,
  ctaLabel = "En savoir plus",
  tint = false,
}: {
  id?: string;
  index?: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  illustration: ReactNode;
  imageSide?: "left" | "right";
  href?: string;
  ctaLabel?: string;
  tint?: boolean;
}) {
  const textBlock = (
    <div className="relative z-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading mt-3 text-2xl text-ink sm:text-3xl">{title}</h2>
      <p className="mt-4 max-w-md leading-relaxed text-slate">{description}</p>

      {bullets && bullets.length > 0 && (
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-ink">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative flex items-center justify-center">
      <div className="w-full max-w-md">{illustration}</div>
    </div>
  );

  return (
    <section
      id={id}
      className={`relative border-b border-line py-16 sm:py-20 ${tint ? "bg-paperdim/60" : ""}`}
    >
      {index && (
        <span className="river-node top-0 hidden h-9 w-9 items-center justify-center border-2 font-mono text-xs text-accent lg:flex" style={{ width: 36, height: 36 }}>
          {index}
        </span>
      )}
      <div className="mx-auto grid max-w-content items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            <div className="lg:order-2">{imageBlock}</div>
            <div className="lg:order-1">{textBlock}</div>
          </>
        )}
      </div>
    </section>
  );
}
