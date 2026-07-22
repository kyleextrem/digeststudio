'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

/** AP1 regional embed script - matches HubSpot portal region */
const SCRIPT_SRC = 'https://js-ap1.hsforms.net/forms/embed/v2.js';
const PORTAL_ID = '442301086';
const FORM_ID = '291f8dc9-af73-4446-b370-0c20568b7af2';
const REGION = 'ap1';
const TARGET_ID = 'hubspot-contact-form';

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
  if (window.hbspt?.forms) return Promise.resolve();

  const existing = document.querySelector(
    `script[src="${SCRIPT_SRC}"]`,
  ) as HTMLScriptElement | null;

  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.hbspt?.forms) {
        resolve();
        return;
      }

      const onReady = () => {
        if (window.hbspt?.forms) resolve();
      };

      existing.addEventListener('load', onReady, { once: true });

      const check = window.setInterval(() => {
        if (window.hbspt?.forms) {
          window.clearInterval(check);
          resolve();
        }
      }, 50);

      window.setTimeout(() => {
        window.clearInterval(check);
        if (window.hbspt?.forms) resolve();
        else reject(new Error('HubSpot forms script timed out'));
      }, 10000);
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      if (window.hbspt?.forms) resolve();
      else reject(new Error('HubSpot forms script loaded without hbspt'));
    };
    script.onerror = () => reject(new Error('Failed to load HubSpot forms script'));
    document.body.appendChild(script);
  });
}

export default function ContactForm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    const mount = async () => {
      try {
        await loadHubSpotScript();
      } catch {
        if (!cancelled) setFailed(true);
        return;
      }

      if (cancelled) return;

      const el = rootRef.current;
      if (!el) return;

      // Remount after Strict Mode: previous create may have targeted a detached node.
      // Always create when the live container is empty.
      if (containerHasForm(el)) {
        dedupeFormChildren(el);
        return;
      }

      el.innerHTML = '';

      window.hbspt?.forms.create({
        region: REGION,
        portalId: PORTAL_ID,
        formId: FORM_ID,
        target: `#${TARGET_ID}`,
        onFormReady: () => {
          if (rootRef.current) dedupeFormChildren(rootRef.current);
        },
      });

      window.setTimeout(() => {
        if (!cancelled && rootRef.current) {
          dedupeFormChildren(rootRef.current);
          if (!containerHasForm(rootRef.current)) setFailed(true);
        }
      }, 2500);
    };

    void mount();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={rootRef} id={TARGET_ID} className="min-h-[120px]" />
      {failed && (
        <p className="mt-3 text-[14px] leading-relaxed text-accent/55">
          Form couldn&apos;t load.{' '}
          <a
            href="mailto:info@digeststudio.com.au"
            className="font-medium text-accent underline decoration-accent/20 underline-offset-4 hover:text-primary"
          >
            Email info@digeststudio.com.au
          </a>{' '}
          instead.
        </p>
      )}
    </div>
  );
}
