import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Local Advertising Newcastle',
  description:
    'Reach thousands of Newcastle locals through Newcastle Digest, owned media and strategic local campaigns.',
  path: '/services/local-advertising',
});

const schemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Local Advertising', path: '/services/local-advertising' },
  ]),
  serviceSchema(
    'Local Advertising Newcastle',
    'Local advertising and Newcastle Digest placements for Newcastle businesses.',
    '/services/local-advertising',
  ),
];

export default function LocalAdvertisingPage() {
  return (
    <div className="pt-20">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <nav
        className="border-b border-accent/5 px-6 py-6"
        aria-label="Breadcrumb"
      >
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm font-medium text-accent/50">
          <li>
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <Link href="/services" className="transition-colors hover:text-primary">
              Services
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li className="font-bold text-accent" aria-current="page">
            Local Advertising
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-accent px-6 py-28 text-white md:py-32">
        <div className="absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-primary/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-primary">
              Local Advertising
            </span>
            <h1 className="mb-8 font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Reach Newcastle locals{' '}
              <span className="text-primary italic">where they already look.</span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed text-white/60">
              Reach thousands of locals through our owned media, Newcastle Digest
              newsletter and strategic local campaigns - distribution most agencies
              simply don&apos;t have.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white hover:text-accent"
            >
              Advertise locally
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-10 text-lg leading-relaxed text-accent/55">
            Full service page coming soon. Learn more about our distribution in the{' '}
            <Link
              href="/brands/newcastle-digest"
              className="font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              Newcastle Digest
            </Link>{' '}
            case study, see{' '}
            <Link
              href="/packages/growth-partner"
              className="font-semibold text-accent underline underline-offset-4 hover:text-primary"
            >
              Growth Partner
            </Link>
            , or check the{' '}
            <Link
              href="/faq#newcastle-digest"
              className="font-semibold text-accent underline underline-offset-4 hover:text-primary"
            >
              Digest FAQ
            </Link>
            .
          </p>
          <Link
            href="/services"
            className="text-sm font-bold uppercase tracking-widest text-accent/50 transition-colors hover:text-primary"
          >
            ← All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
