import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Handshake,
  LayoutTemplate,
  Mail,
  MapPin,
  Newspaper,
  UserRound,
} from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: '404 | Digest Studio' },
  description:
    "Looks like this page has gone walkabout. Head home or browse Digest Studio's popular pages.",
  robots: { index: false, follow: false },
};

const popularPages = [
  {
    title: 'Website Design',
    description: 'Fast, clear sites built to convert local enquiries.',
    href: '/services/website-development',
    icon: LayoutTemplate,
  },
  {
    title: 'Local SEO',
    description: 'Show up where Newcastle customers already search.',
    href: '/local-seo-newcastle-nsw',
    icon: MapPin,
  },
  {
    title: 'Growth Partner',
    description: 'Ongoing marketing support that compounds over time.',
    href: '/packages/growth-partner',
    icon: Handshake,
  },
  {
    title: 'About',
    description: 'Meet Kyle and the studio behind Digest Studio.',
    href: '/about',
    icon: UserRound,
  },
  {
    title: 'Newcastle Digest',
    description: 'Our owned media brand reaching 7,000+ locals.',
    href: '/brands/newcastle-digest',
    icon: Newspaper,
  },
  {
    title: 'Contact',
    description: 'Book a free strategy call and tell me what you need.',
    href: '/#contact',
    icon: Mail,
  },
] as const;

export default function NotFound() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div
          className="hero-grid pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div
          className="hero-noise pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="hero-enter hero-delay-0 mb-4 font-heading text-[clamp(4.5rem,18vw,9rem)] font-bold leading-none tracking-[-0.06em] text-primary">
              404
            </p>

            <h1 className="hero-enter hero-delay-1 mb-5 font-heading text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] text-accent sm:text-4xl md:text-[2.75rem]">
              Looks like this page has gone walkabout.
            </h1>

            <p className="hero-enter hero-delay-2 mx-auto mb-10 max-w-md text-base leading-relaxed text-accent/55 md:text-[17px]">
              The page you&apos;re looking for doesn&apos;t exist, may have
              moved, or the link may be out of date.
            </p>

            <div className="hero-enter hero-delay-3 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/" className="ds-btn-primary">
                Back to Home
                <ArrowRight className="h-4 w-4 opacity-80" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-accent transition-colors duration-300 hover:border-accent/20 hover:bg-[#fafafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section border-t border-[#ececec] bg-[#fafafa]">
        <div className="ds-container">
          <div className="mb-10 max-w-2xl md:mb-12">
            <span className="ds-eyebrow">Find your way</span>
            <h2 className="ds-h2">Popular Pages</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {popularPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group ds-card-interactive flex flex-col p-7 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.04] transition-colors duration-300 group-hover:bg-primary/[0.08]">
                    <Icon className="h-5 w-5 stroke-[1.5] text-accent transition-colors duration-300 group-hover:text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold tracking-tight text-accent">
                    {page.title}
                  </h3>
                  <p className="mb-7 flex-1 text-[14px] leading-relaxed text-accent/50">
                    {page.description}
                  </p>
                  <span className="ds-text-link group-hover:text-primary">
                    Go there
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-14 md:py-16">
        <div className="ds-container">
          <p className="mx-auto max-w-xl text-center text-[15px] leading-relaxed text-accent/50 md:text-base">
            Still can&apos;t find what you&apos;re looking for?{' '}
            <Link
              href="/#contact"
              className="font-medium text-accent underline decoration-accent/20 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/40"
            >
              Get in touch
            </Link>{' '}
            and I&apos;ll point you in the right direction.
          </p>
        </div>
      </section>
    </div>
  );
}
