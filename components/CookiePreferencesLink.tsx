"use client";

import { openCookiePreferences } from "@/lib/cookieConsent";

export default function CookiePreferencesLink({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Gérer les cookies
    </button>
  );
}
