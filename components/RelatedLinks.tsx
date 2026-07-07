import Link from "next/link";

export default function RelatedLinks({
  title = "À consulter aussi",
  links,
}: {
  title?: string;
  links: { href: string; label: string; text: string }[];
}) {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow">{title}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-accent"
            >
              <span className="font-display text-lg font-semibold text-ink group-hover:text-accent">
                {link.label}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-slate">{link.text}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent">
                En savoir plus
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

