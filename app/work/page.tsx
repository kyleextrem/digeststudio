'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

type WorkItem = {
  name: string;
  tagline: string;
  href: string;
  cta: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
  metrics?: readonly { value: string; label: string }[];
  visitUrl?: string;
  visitLabel?: string;
};

const workItems: WorkItem[] = [
  {
    name: 'Tiny Moves',
    tagline: 'Web Design & Development',
    href: '/work/tiny-moves',
    cta: 'Read the case study',
    summary:
      "A bespoke custom website for a Newcastle children's music and movement program. Three venues, self-managed content, built from scratch.",
    image: '/work/tiny-moves/homepage.png',
    imageAlt: 'Tiny Moves custom website homepage',
    metrics: [
      { value: '90+', label: 'Lighthouse' },
      { value: '3 venues', label: 'Newcastle' },
      { value: 'Custom', label: 'From scratch' },
    ],
    visitUrl: 'https://tinymoves.com.au',
    visitLabel: 'Visit Tiny Moves',
  },
  {
    name: 'Newcastle Digest',
    tagline: "Newcastle's weekly local newsletter",
    href: '/brands/newcastle-digest',
    cta: 'Explore Newcastle Digest',
    image: '/newcastle-digest.png',
    imageAlt: 'Newcastle Digest website',
    summary:
      'Built from scratch into one of Australia\'s highest-engagement local newsletters - brand, site, content and community, all in-house.',
    metrics: [
      { value: '7,300+', label: 'Subscribers' },
      { value: '60%', label: 'Open rate' },
      { value: '50+', label: 'Editions' },
    ],
  },
  {
    name: 'Testimo',
    tagline: 'Customer growth platform · Built in-house',
    href: '/brands/testimo',
    cta: 'Explore Testimo',
    image: '/Testimo.png',
    imageAlt: 'Testimo',
    summary:
      'Turn every completed job into marketing assets - reviews, testimonials, photos, referrals and list growth through one customer flow.',
    metrics: [
      { value: 'One flow', label: 'Per job' },
      { value: '6+', label: 'Asset types' },
      { value: 'Included', label: 'With Growth Partner' },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <section className="ds-section !pb-12 md:!pb-16">
        <div className="ds-container">
          <Reveal>
            <span className="ds-eyebrow">Work</span>
            <h1 className="ds-h2 mb-5 max-w-3xl !text-[2.5rem] sm:!text-5xl md:!text-[3.5rem]">
              Client work and brands we&apos;ve built.
            </h1>
            <p className="ds-lede max-w-lg">
              Case studies from client builds, plus the brands we run ourselves.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 pb-20 pt-4 md:pb-28 md:pt-8">
        <div className="ds-container space-y-16 md:space-y-24">
          {workItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="group">
                <Link
                  href={item.href}
                  className="block overflow-hidden rounded-2xl border border-[#ececec] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.28)]"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.name}
                      className="aspect-[16/9] w-full object-cover object-top md:aspect-[2.2/1]"
                    />
                  ) : (
                    <div className="flex aspect-[16/9] w-full items-center justify-center bg-[#f4f4f5] px-6 text-center md:aspect-[2.2/1]">
                      <p className="max-w-md text-[13px] leading-relaxed text-accent/40">
                        {item.imagePlaceholder}
                      </p>
                    </div>
                  )}
                </Link>

                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-xl">
                    <p className="mb-2 text-[13px] text-accent/40">
                      {item.tagline}
                    </p>
                    <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight text-accent md:text-4xl">
                      {item.name}
                    </h2>
                    <p className="mb-6 text-[15px] leading-relaxed text-accent/55">
                      {item.summary}
                    </p>
                    {item.metrics && (
                      <div className="mb-6 flex flex-wrap gap-6">
                        {item.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="font-heading text-xl font-bold tabular-nums text-accent">
                              {m.value}
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link
                        href={item.href}
                        className="group/link inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-primary"
                      >
                        {item.cta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                      {item.visitUrl && (
                        <a
                          href={item.visitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent/45 transition-colors hover:text-primary"
                        >
                          {item.visitLabel ?? 'Visit site'}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 pb-20 pt-24 md:pb-28 md:pt-36">
        <div className="ds-container">
          <Reveal>
            <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.75rem]">
              Ready to build something worth talking about?
            </h2>
            <a
              href="https://cal.com/digest/digest-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="ds-btn-primary"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
