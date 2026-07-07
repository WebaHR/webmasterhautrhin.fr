"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_PREFERENCES_EVENT,
  getStoredConsent,
  storeConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [audience, setAudience] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setAudience(stored.audience);
    }

    function handleReopen() {
      const current = getStoredConsent();
      setAudience(current?.audience ?? false);
      setExpanded(true);
      setVisible(true);
    }

    window.addEventListener(COOKIE_PREFERENCES_EVENT, handleReopen);
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, handleReopen);
  }, []);

  function acceptAll() {
    storeConsent(true);
    setVisible(false);
  }

  function refuseAll() {
    storeConsent(false);
    setVisible(false);
  }

  function savePreferences() {
    storeConsent(audience);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-ink/[0.97] px-4 py-4 text-paper shadow-[0_-8px_24px_rgba(0,0,0,0.25)] backdrop-blur sm:px-6"
    >
      <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-paper/75 sm:text-sm">
          Nous utilisons des cookies nécessaires au bon fonctionnement du site
          et à sa sécurité (protection anti-spam du formulaire de contact).
          Aucun cookie de mesure d&apos;audience ou publicitaire n&apos;est
          déposé sans votre accord.{" "}
          <Link href="/politique-cookies" className="underline hover:text-paper">
            En savoir plus
          </Link>
        </p>

        <div className="flex flex-none flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-xs font-medium text-paper/70 underline underline-offset-2 hover:text-paper"
          >
            Personnaliser
          </button>
          <button
            type="button"
            onClick={refuseAll}
            className="rounded-full border border-white/25 px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-white/10"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-accentdeep"
          >
            Tout accepter
          </button>
        </div>
      </div>

      {expanded && (
        <div className="mx-auto mt-4 max-w-content rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-paper">Cookies nécessaires</p>
              <p className="mt-1 text-xs text-paper/60">
                Indispensables au fonctionnement et à la sécurité du site (ex.
                protection anti-spam du formulaire de contact). Toujours actifs.
              </p>
            </div>
            <span className="mt-0.5 flex-none rounded-full bg-white/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-paper/60">
              Toujours actif
            </span>
          </div>

          <div className="mt-4 flex items-start justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-sm font-medium text-paper">Mesure d&apos;audience</p>
              <p className="mt-1 text-xs text-paper/60">
                Permettrait de mieux comprendre la fréquentation du site.
                Non utilisé actuellement sur ce site.
              </p>
            </div>
            <label className="relative mt-0.5 inline-flex flex-none cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={audience}
                onChange={(e) => setAudience(e.target.checked)}
                aria-label="Autoriser les cookies de mesure d'audience"
              />
              <span className="toggle-track" />
            </label>
          </div>

          <button
            type="button"
            onClick={savePreferences}
            className="mt-4 rounded-full bg-accent px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-accentdeep"
          >
            Enregistrer mes choix
          </button>

          <style jsx>{`
            .toggle-track {
              display: inline-block;
              width: 36px;
              height: 20px;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.2);
              position: relative;
              transition: background-color 0.15s ease;
            }
            .toggle-track::after {
              content: "";
              position: absolute;
              top: 2px;
              left: 2px;
              width: 16px;
              height: 16px;
              border-radius: 999px;
              background: white;
              transition: transform 0.15s ease;
            }
            input:checked + .toggle-track {
              background: #8a2b0e;
            }
            input:checked + .toggle-track::after {
              transform: translateX(16px);
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
