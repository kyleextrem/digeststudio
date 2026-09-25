'use client';

import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/track-event';

type AuditCtaProps = {
  location: 'hero' | 'scarcity' | 'final';
  children: string;
  variant?: 'light' | 'dark';
};

export default function AuditCta({ location, children, variant = 'light' }: AuditCtaProps) {
  const className =
    variant === 'dark'
      ? 'inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-accent sm:w-auto'
      : 'ds-btn-primary w-full sm:w-auto';

  return (
    <a
      href="#apply"
      className={className}
      onClick={() => trackEvent('growth_audit_cta_click', { location })}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
