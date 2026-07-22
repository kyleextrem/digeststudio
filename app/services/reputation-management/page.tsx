import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Reputation Management Newcastle',
  description:
    "Generate more Google reviews, testimonials and referrals with Testimo - Digest Studio's reputation system for Newcastle businesses.",
  path: '/services/reputation-management',
});

const schemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Reputation Management', path: '/services/reputation-management' },
  ]),
  serviceSchema(
    'Reputation Management',
    'Google reviews, testimonials and referrals for Newcastle businesses using Testimo.',
    '/services/reputation-management',
  ),
];

export default function ReputationManagementPage() {
  return (
    <div className="pt-20">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <nav className="border-b border-accent/5 px-6 py-6" aria-label="Breadcrumb">
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
            Reputation Management
          </li>
        </ol>
      </nav>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Reputation
          </span>
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-[2.75rem]">
            Reputation management for Newcastle businesses.
          </h1>
          <p className="mb-6 text-[15px] leading-relaxed text-accent/55 md:text-base">
            Collect Google reviews, testimonials and referrals after every
            completed job - powered by{' '}
            <Link
              href="/brands/testimo"
              className="font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              Testimo
            </Link>
            , built in-house by Digest Studio.
          </p>
          <p className="mb-10 text-[15px] leading-relaxed text-accent/55 md:text-base">
            Included with{' '}
            <Link
              href="/packages/growth-partner"
              className="font-semibold text-accent underline underline-offset-4 hover:text-primary"
            >
              Growth Partner
            </Link>
            . See also the{' '}
            <Link
              href="/faq#reputation"
              className="font-semibold text-accent underline underline-offset-4 hover:text-primary"
            >
              reputation FAQ
            </Link>
            .
          </p>
          <a
            href="https://cal.com/digest/digest-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>
    </div>
  );
}
