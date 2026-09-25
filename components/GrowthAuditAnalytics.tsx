'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/track-event';

const MARKS = [25, 50, 75, 100] as const;

export default function GrowthAuditAnalytics() {
  useEffect(() => {
    trackEvent('growth_audit_page_view', { page: '/growth-audit' });

    const seen = new Set<number>();

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = (window.scrollY / scrollable) * 100;
      for (const mark of MARKS) {
        const threshold = mark === 100 ? 95 : mark;
        if (percent >= threshold && !seen.has(mark)) {
          seen.add(mark);
          trackEvent('growth_audit_scroll_depth', { percent: mark });
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
