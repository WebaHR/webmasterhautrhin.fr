export type CookieConsentValue = {
  essential: true;
  audience: boolean;
  timestamp: string;
};

const STORAGE_KEY = "webmasterhautrhin-cookie-consent";
export const COOKIE_PREFERENCES_EVENT = "open-cookie-preferences";

export function getStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsentValue) : null;
  } catch {
    return null;
  }
}

export function storeConsent(audience: boolean): CookieConsentValue {
  const value: CookieConsentValue = {
    essential: true,
    audience,
    timestamp: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  return value;
}

/**
 * À utiliser plus tard si un outil de mesure d'audience (Google Analytics,
 * Matomo...) est ajouté au site : n'initialisez ce script que si cette
 * fonction renvoie `true`.
 */
export function hasAudienceConsent(): boolean {
  return getStoredConsent()?.audience === true;
}

/** Rouvre le bandeau de préférences cookies (utilisé par le lien du footer). */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
}
