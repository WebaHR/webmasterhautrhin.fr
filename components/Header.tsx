"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/creation-site-internet", label: "Création de site" },
  { href: "/referencement", label: "Référencement" },
  { href: "/realisations", label: "Réalisations" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-gradient sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/webmasterhautrhin-2.png"
            alt="Logo Webmaster Hautrhin"
            width={32}
            height={32}
          />
          <p className="font-display text-lg font-semibold tracking-tight text-paper">
            Webmaster
          <span className="font-display text-lg  text-accentpale">
            hautrhin
          </span><span className="font-display text-lg  text-gray-400">
            .fr
          </span></p>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/65 transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/devis"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accentdeep"
          >
            Me contacter
          </Link>
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-4 bg-paper transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-[1.5px] w-4 bg-paper transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open && (
        <nav className="header-gradient flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-paper/65 hover:bg-white/10 hover:text-paper"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/devis"
            className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  );
}
