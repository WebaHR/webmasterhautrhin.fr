import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-line bg-paperdim/30">
      <ol className="mx-auto flex max-w-content flex-wrap items-center gap-1.5 px-6 py-3 text-xs text-slate">
        <li>
          <Link href="/" className="hover:text-accent hover:underline">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden className="text-slate/40">
              /
            </span>
            {item.href ? (
              <Link href={item.href} className="hover:text-accent hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

