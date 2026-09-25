import { track } from '@vercel/analytics';

type EventValue = string | number | boolean;
type EventParams = Record<string, EventValue>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a custom event to the existing GA4 tag and Vercel Analytics. */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', name, params);

  try {
    track(name, params);
  } catch {
    // Analytics must not block the application.
  }
}
