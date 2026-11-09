const STORAGE_KEY = "deshscape-saved-destinations";
export const SAVED_DESTINATIONS_EVENT = "deshscape:saved-destinations-changed";

/**
 * Read saved destination slugs safely in the browser.
 * Invalid or unavailable localStorage data falls back to an empty collection.
 */
export function readSavedDestinations(): string[] {
  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(stored)) return [];
    return [...new Set(stored.filter((item): item is string => typeof item === "string"))];
  } catch {
    return [];
  }
}

/**
 * Persist saved destination slugs and notify same-tab listeners.
 * The browser's native storage event synchronizes other open tabs.
 */
export function writeSavedDestinations(slugs: string[]): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(slugs)]));
    window.dispatchEvent(new Event(SAVED_DESTINATIONS_EVENT));
    return true;
  } catch {
    return false;
  }
}
