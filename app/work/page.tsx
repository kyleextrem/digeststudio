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

const brands = [
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
] as const;

export default function WorkPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <section className="ds-section !pb-12 md:!pb-16">
        <div className="ds-container">
          <Reveal>
            <span className="ds-eyebrow">Our Brands</span>
            <h1 className="ds-h2 mb-5 max-w-3xl !text-[2.5rem] sm:!text-5xl md:!text-[3.5rem]">
              Brands we&apos;ve built.
            </h1>
            <p className="ds-lede max-w-lg">
              Before helping other businesses grow, we built our own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 pb-20 pt-4 md:pb-28 md:pt-8">
        <div className="ds-container space-y-16 md:space-y-24">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 80}>
              <article className="group">
                <Link
                  href={brand.href}
                  className="block overflow-hidden rounded-2xl border border-[#ececec] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.28)]"
                >
                  <img
                    src={brand.image}
                    alt={brand.imageAlt}
                    className="aspect-[16/9] w-full object-cover object-top md:aspect-[2.2/1]"
                  />
                </Link>

                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-xl">
                    <p className="mb-2 text-[13px] text-accent/40">{brand.tagline}</p>
                    <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight text-accent md:text-4xl">
                      {brand.name}
                    </h2>
                    <p className="mb-6 text-[15px] leading-relaxed text-accent/55">
                      {brand.summary}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-6">
                      {brand.metrics.map((m) => (
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
                    <Link
                      href={brand.href}
                      className="group/link inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-primary"
                    >
                      {brand.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
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
