'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

const SCRIPT_SRC = 'https://js.hsforms.net/forms/v2.js';
const PORTAL_ID = '442301086';
const FORM_ID = '291f8dc9-af73-4446-b370-0c20568b7af2';
const REGION = 'ap1';
const TARGET_ID = 'hubspot-contact-form';

/** Page-lifetime lock - survives React Strict Mode remounts */
let formCreateStarted = false;

function containerHasForm(el: HTMLElement): boolean {
  return Boolean(
    el.querySelector('form, .hs-form, iframe[src*="hsforms"], iframe[id*="hsForm"]'),
  );
}

function dedupeFormChildren(el: HTMLElement) {
  const kids = Array.from(el.children);
  if (kids.length <= 1) return;
  kids.slice(1).forEach((child) => child.remove());
}

function loadHubSpotScript(): Promise<void> {
  if (window.hbspt) return Promise.resolve();

  const existing = document.querySelector(
    `script[src="${SCRIPT_SRC}"]`,
  ) as HTMLScriptElement | null;

  if (existing) {
    return new Promise((resolve) => {
      if (window.hbspt) {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      // Fallback if load already fired
      const check = window.setInterval(() => {
        if (window.hbspt) {
          window.clearInterval(check);
          resolve();
        }
      }, 50);
      window.setTimeout(() => window.clearInterval(check), 8000);
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load HubSpot forms script'));
    document.body.appendChild(script);
  });
}

export default function ContactForm() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    const mount = async () => {
      try {
        await loadHubSpotScript();
      } catch {
        return;
      }

      if (cancelled || !rootRef.current) return;

      // Already have a live form in the DOM - keep it, strip extras
      if (containerHasForm(root)) {
        dedupeFormChildren(root);
        return;
      }

      // Another mount already kicked off create()
      if (formCreateStarted) {
        // Wait briefly for the other create to populate, then dedupe
        window.setTimeout(() => {
          if (rootRef.current) dedupeFormChildren(rootRef.current);
        }, 300);
        return;
      }

      formCreateStarted = true;
      root.innerHTML = '';

      window.hbspt?.forms.create({
        region: REGION,
        portalId: PORTAL_ID,
        formId: FORM_ID,
        target: `#${TARGET_ID}`,
        onFormReady: () => {
          if (rootRef.current) dedupeFormChildren(rootRef.current);
        },
      });

      // Safety: HubSpot sometimes injects twice under Strict Mode races
      window.setTimeout(() => {
        if (rootRef.current) dedupeFormChildren(rootRef.current);
      }, 100);
      window.setTimeout(() => {
        if (rootRef.current) dedupeFormChildren(rootRef.current);
      }, 500);
    };

    void mount();

    return () => {
      cancelled = true;
      // Do NOT reset formCreateStarted - prevents second Strict Mode create
      // Do NOT clear the container on cleanup - remount will reuse existing form
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={rootRef} id={TARGET_ID} className="min-h-0" />
    </div>
  );
}
