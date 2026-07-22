'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Minus,
  Plus,
} from 'lucide-react';
import {
  visibilityBoost,
  localLaunchPack,
  growthPartner,
  websiteDesign,
  contentMarketing,
  paidAds,
  advancedSeo,
  type OfferPageData,
} from '@/lib/offers';
import { serviceSchema } from '@/lib/schema';
import TestimonialQuote, {
  testimonialContextForOffer,
} from '@/components/TestimonialQuote';

const offersById: Record<string, OfferPageData> = {
  'visibility-boost': visibilityBoost,
  'local-launch-pack': localLaunchPack,
  'growth-partner': growthPartner,
  'website-development': websiteDesign,
  'content-marketing': contentMarketing,
  'paid-ads': paidAds,
  'advanced-seo': advancedSeo,
};

const CAL = 'https://cal.com/digest/digest-studio';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#ececec]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-base font-semibold tracking-tight text-accent md:text-lg">
          {question}
        </span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-primary" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-accent/30" />
        )}
      </button>
      {open && (
        <p className="pb-5 pr-8 text-[15px] leading-relaxed text-accent/55">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function OfferLandingPage({ offerId }: { offerId: string }) {
  const data = offersById[offerId];
  if (!data) return null;

  const schema = serviceSchema(data.name, data.metaDescription, data.path);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://digeststudio.com.au/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.breadcrumbParent.label,
        item: `https://digeststudio.com.au${data.breadcrumbParent.href}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.name,
        item: `https://digeststudio.com.au${data.path}`,
      },
    ],
  };

  return (
    <div className="bg-white pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="border-b border-[#f0f0f0] px-6 py-5" aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-[13px] font-medium text-accent/45">
          <li>
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          <li>
            <Link
              href={data.breadcrumbParent.href}
              className="transition-colors hover:text-primary"
            >
              {data.breadcrumbParent.label}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          <li className="font-semibold text-accent" aria-current="page">
            {data.name}
          </li>
        </ol>
      </nav>

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-accent px-6 py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 85% 10%, rgba(255,68,0,0.25), transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {data.eyebrow}
            </span>
            <h1 className="mb-6 font-heading text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-[3.25rem]">
              {data.h1}{' '}
              {data.h1Accent && (
                <span className="text-primary">{data.h1Accent}</span>
              )}
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
              {data.heroSupport}
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a
                href={data.primaryCta.href}
                target={data.primaryCta.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  data.primaryCta.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-accent"
              >
                {data.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white/55 transition-colors hover:text-white"
              >
                {data.secondaryCta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <p className="text-[13px] text-white/35">{data.proofLine}</p>
          </div>
        </div>
      </section>

      {/* 2. Who this is for */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Who this is for
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              Built for situations we see every week.
            </h2>
            <p className="text-base leading-relaxed text-accent/50 md:text-lg">
              {data.audienceIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {data.audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#ececec] bg-white p-7 md:p-8"
              >
                <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-accent">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-accent/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What you get */}
      <section className="border-t border-[#f0f0f0] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              What you get
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              Inclusions that do a job.
            </h2>
            <p className="text-base leading-relaxed text-accent/50 md:text-lg">
              {data.inclusionsIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {data.inclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-7 transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.22)] md:p-8 ${
                    item.highlight
                      ? 'border-primary/25 bg-white'
                      : 'border-[#ececec] bg-white'
                  }`}
                >
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                      item.highlight ? 'bg-primary/10' : 'bg-accent/[0.04]'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 stroke-[1.5] ${
                        item.highlight ? 'text-primary' : 'text-accent'
                      }`}
                    />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-accent">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-accent/55">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="border-t border-[#f0f0f0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              How it works
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              A clear path from first call to results.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {data.steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="mb-4 font-heading text-4xl font-bold tabular-nums text-primary/20">
                  0{i + 1}
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold tracking-tight text-accent">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-accent/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Digest Studio */}
      <section className="border-t border-[#f0f0f0] bg-accent px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Why Digest Studio
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-[2.25rem]">
              Not just another Newcastle agency.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {data.why.map((item) => (
              <div
                key={item.title}
                className="border-t border-white/10 pt-6"
              >
                <h3 className="mb-2 font-heading text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proof / Our Brands */}
      <section className="border-t border-[#f0f0f0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Our brands
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              Proof we build what we sell.
            </h2>
          </div>
          <div
            className={`grid grid-cols-1 gap-6 ${
              data.proof.length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1 lg:max-w-3xl'
            }`}
          >
            {data.proof.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.28)]"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#f4f4f5]">
                  <img
                    src={brand.image}
                    alt={brand.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-accent">
                      {brand.name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent/35">
                      {brand.role}
                    </span>
                  </div>
                  <p className="mb-5 text-[14px] leading-relaxed text-accent/55">
                    {brand.description}
                  </p>
                  <div className="mb-5 flex gap-6 border-t border-[#ececec] pt-5">
                    {brand.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-heading text-lg font-bold tabular-nums text-accent">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-accent/40">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent/45 transition-colors group-hover:text-primary">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6b. Client testimonial */}
      <section className="border-t border-[#f0f0f0] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Client feedback
          </span>
          <TestimonialQuote context={testimonialContextForOffer(offerId)} />
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="border-t border-[#f0f0f0] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              FAQs
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              Questions we get about {data.name}.
            </h2>
          </div>
          <div>
            {data.faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="border-t border-[#f0f0f0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              Ready to talk about {data.name}?
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-accent/55 md:text-lg">
              Book a free strategy call. We&apos;ll look at your business, tell
              you if this is the right fit, and outline exactly what we&apos;d
              do first - with no pitch deck and no lock-in.
            </p>
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-accent"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-5 text-[13px] text-accent/35">
              Usually replies within one business day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
