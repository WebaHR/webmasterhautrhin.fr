"use client";

import { useState } from "react";
import Script from "next/script";

const projectTypes = [
  "Création de site vitrine",
  "Site e-commerce",
  "Référencement (SEO)",
  "Hébergement",
  "Maintenance",
  "Autre demande",
];

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!RECAPTCHA_SITE_KEY) {
      reject(new Error("Clé reCAPTCHA non configurée."));
      return;
    }
    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA n'a pas pu se charger. Vérifiez votre connexion et réessayez."));
      return;
    }
    window.grecaptcha.ready(() => {
      window
        .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(() => reject(new Error("La vérification anti-spam a échoué. Merci de réessayer.")));
    });
  });
}

export default function ContactForm({
  title = "Parlons de votre projet",
  compact = false,
}: {
  title?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const recaptchaToken = await getRecaptchaToken("contact_form");

      const payload = {
        firstName: String(formData.get("firstName") || ""),
        lastName: String(formData.get("lastName") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        projects: formData.getAll("project").map(String),
        message: String(formData.get("message") || ""),
        rgpd: formData.get("rgpd") === "on",
        recaptchaToken,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Une erreur est survenue.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi. Merci de réessayer."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center card-shadow">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accentlight text-accent">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">Demande envoyée</h3>
        <p className="mt-2 max-w-xs text-sm text-slate">
          Merci ! Je vous recontact sous 24h (hors week end)
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-line bg-white p-6 card-shadow sm:p-8 ${compact ? "" : ""}`}
    >
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      <p className="eyebrow">Devis gratuit</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-slate">
        Réponse sous 24h ouvrées, sans engagement.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Prénom" htmlFor="firstName">
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Marie"
              className="input"
            />
          </Field>
          <Field label="Nom" htmlFor="lastName">
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Dupont"
              className="input"
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="marie@monentreprise.fr"
              className="input"
            />
          </Field>
          <Field label="Téléphone" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              className="input"
            />
          </Field>
        </div>

        <fieldset className="checkgroup">
          <legend className="mb-2 block font-mono text-[0.7rem] uppercase tracking-wide text-slate">
            Type de projet <span className="normal-case text-slate/70">(plusieurs choix possibles)</span>
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {projectTypes.map((type, i) => (
              <label key={type} htmlFor={`project-${i}`} className="checkbox-option">
                <input
                  id={`project-${i}`}
                  name="project"
                  type="checkbox"
                  value={type}
                  className="checkbox-input"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Votre message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            placeholder="Décrivez votre activité et votre besoin en quelques lignes..."
            className="input resize-none"
          />
        </Field>
      </div>

      <label htmlFor="rgpd" className="mt-4 flex items-start gap-2.5 text-xs leading-relaxed text-slate">
        <input
          id="rgpd"
          name="rgpd"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 flex-none rgpd-input"
        />
        <span>
          J&apos;accepte que mes informations soient utilisées pour être
          recontacté(e) dans le cadre de ma demande, conformément à la
          politique de confidentialité. Elles ne sont jamais transmises à des
          tiers.
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-accent/30 bg-accentlight px-3 py-2.5 text-sm text-accentdeep">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accentdeep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-slate/70">
        Ce site est protégé par reCAPTCHA. La{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          politique de confidentialité
        </a>{" "}
        et les{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          conditions d&apos;utilisation
        </a>{" "}
        de Google s&apos;appliquent.
      </p>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #dad5d0;
          border-radius: 0.6rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: #000000;
          background: #fdfdfb;
        }
        .input::placeholder {
          color: #8a8a8a;
        }
        .checkgroup {
          border: none;
          margin: 0;
          padding: 0;
        }
        .checkbox-option {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          border: 1px solid #dad5d0;
          border-radius: 0.6rem;
          padding: 0.6rem 0.75rem;
          font-size: 0.88rem;
          color: #000000;
          background: #fdfdfb;
          cursor: pointer;
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }
        .checkbox-option:has(.checkbox-input:checked) {
          border-color: #8a2b0e;
          background: #f0dace;
        }
        .checkbox-input {
          width: 16px;
          height: 16px;
          flex: none;
          accent-color: #8a2b0e;
        }
        .rgpd-input {
          accent-color: #8a2b0e;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wide text-slate">
        {label}
      </label>
      {children}
    </div>
  );
}
