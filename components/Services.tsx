'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import TestimonialQuote from '@/components/TestimonialQuote';

const packages = [
  {
    id: 'visibility',
    title: 'Visibility Boost',
    tag: 'Fast wins',
    outcome: 'Get found locally - and get in front of Newcastle - fast.',
    price: '$750',
    period: 'once-off',
    groups: [
      {
        label: 'Build',
        items: ['Google Business Profile', 'Website Conversion Review'],
      },
      {
        label: 'Grow',
        items: ['Local SEO', 'Social Content'],
      },
      {
        label: 'Distribute',
        items: ['Newcastle Digest', 'Next Steps'],
      },
    ],
    highlight: false,
    href: '/packages/visibility-boost' as string | null,
    span: 'lg:col-span-3',
  },
  {
    id: 'launch',
    title: 'Local Launch Pack',
    tag: 'Launch ready',
    outcome: 'Launch with credibility - a conversion page, photography and Digest reach.',
    price: '$2,500',
    period: 'once-off',
    groups: [
      {
        label: 'Build',
        items: ['Conversion Landing Page', 'Custom Website Option'],
      },
      {
        label: 'Grow',
        items: ['Google Business Profile', 'Photo Pack + Social Kit'],
      },
      {
        label: 'Distribute',
        items: ['Digest Feature Article', 'Launch-Ready Presence'],
      },
    ],
    highlight: false,
    href: '/packages/local-launch-pack' as string | null,
    span: 'lg:col-span-4',
  },
  {
    id: 'growth',
    title: 'Growth Partner',
    tag: 'Most popular',
    outcome: 'Marketing that compounds every month - SEO, content, reviews and Digest.',
    price: '$1,999',
    period: 'monthly',
    groups: [
      {
        label: 'Build',
        items: ['Campaign Planning', 'Quarterly Content Shoots'],
      },
      {
        label: 'Grow',
        items: ['Local SEO & GBP', 'Testimo Reviews'],
      },
      {
        label: 'Distribute',
        items: ['Quarterly Digest Feature', 'Monthly Insights'],
      },
    ],
    highlight: true,
    href: '/packages/growth-partner' as string | null,
    span: 'lg:col-span-5',
  },
] as const;

const additional = [
  {
    title: 'Custom Website Build',
    description:
      'Multi-page sites built for speed, search and conversions - not templates.',
    visual: 'website' as const,
    href: '/services/website-development' as string | null,
  },
  {
    title: 'Paid Ads',
    description:
      'Meta or Google campaigns set up, managed and optimised for local demand.',
    visual: 'ads' as const,
    href: '/services/paid-ads' as string | null,
  },
  {
    title: 'Additional Content',
    description:
      'Extra shoots, blogs and email campaigns when you need more fuel.',
    visual: 'content' as const,
    href: '/services/content-marketing' as string | null,
  },
  {
    title: 'Advanced SEO',
    description:
      'Authority, backlinks and deeper search strategy beyond local foundations.',
    visual: 'seo' as const,
    href: '/services/advanced-seo' as string | null,
  },
] as const;

const partnerPillars = [
  {
    title: 'Strategy',
    description:
      'Monthly planning, positioning and commercial direction.',
  },
  {
    title: 'Marketing',
    description:
      'SEO, websites, content, reviews and campaigns delivered by one team.',
  },
  {
    title: 'Distribution',
    description:
      'Reach Newcastle customers through Newcastle Digest alongside your own marketing.',
  },
] as const;

function BenefitGroups({
  groups,
  dark = false,
}: {
  groups: readonly { label: string; items: readonly string[] }[];
  dark?: boolean;
}) {
  return (
    <div
      className={`divide-y ${
        dark ? 'divide-white/10' : 'divide-accent/[0.08]'
      }`}
    >
      {groups.map((group) => (
        <div key={group.label} className="py-4 first:pt-0 last:pb-0">
          <div
            className={`mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              dark ? 'text-primary' : 'text-primary'
            }`}
          >
            {group.label}
          </div>
          <ul className="space-y-1.5">
            {group.items.map((item) => (
              <li
                key={item}
                className={`text-[14px] leading-snug tracking-tight ${
                  dark ? 'text-white/70' : 'text-accent/65'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function AddonVisual({ type }: { type: (typeof additional)[number]['visual'] }) {
  switch (type) {
    case 'website':
      return (
        <div className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_8px_20px_-12px_rgba(17,24,39,0.25)] transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="flex items-center gap-1 border-b border-[#eee] bg-[#f4f4f4] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <div className="ml-1 h-3.5 flex-1 rounded bg-white border border-[#e8e8e8]" />
          </div>
          <div className="space-y-1.5 p-2.5">
            <div className="h-2 w-1/3 rounded bg-primary/80" />
            <div className="h-2 w-2/3 rounded bg-accent/10" />
            <div className="mt-1 grid grid-cols-3 gap-1">
              <div className="aspect-[4/3] rounded bg-[#ebe7e2]" />
              <div className="aspect-[4/3] rounded bg-[#ddd7d0]" />
              <div className="aspect-[4/3] rounded bg-[#e8e4df]" />
            </div>
          </div>
        </div>
      );
    case 'ads':
      return (
        <div className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white p-2.5 shadow-[0_8px_20px_-12px_rgba(17,24,39,0.25)] transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="mb-2 flex items-center justify-between">
            <div className="h-1.5 w-12 rounded bg-accent/15" />
            <div className="h-4 rounded bg-primary/15 px-1.5 text-[7px] font-semibold leading-4 text-primary">
              +18%
            </div>
          </div>
          <div className="mb-2 flex h-12 items-end gap-1">
            {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-primary/20"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-md bg-[#f7f7f7] px-1.5 py-1">
              <div className="text-[8px] font-bold text-accent">2.4k</div>
              <div className="text-[6px] text-accent/40">Clicks</div>
            </div>
            <div className="rounded-md bg-[#f7f7f7] px-1.5 py-1">
              <div className="text-[8px] font-bold text-accent">$1.12</div>
              <div className="text-[6px] text-accent/40">CPC</div>
            </div>
          </div>
        </div>
      );
    case 'content':
      return (
        <div className="relative h-full min-h-[88px] overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="absolute left-0 top-1 h-[78%] w-[48%] -rotate-3 overflow-hidden rounded-lg border border-[#e4e0db] bg-white shadow-sm">
            <div className="aspect-square bg-[linear-gradient(160deg,#d4cbc0,#a89a8c)]" />
          </div>
          <div className="absolute bottom-1 right-0 w-[55%] rotate-2 overflow-hidden rounded-lg border border-[#e8e8e8] bg-white shadow-sm">
            <div className="bg-accent px-2 py-1">
              <div className="text-[7px] font-bold text-white">Digest</div>
            </div>
            <div className="space-y-1 p-1.5">
              <div className="h-1.5 w-full rounded bg-accent/10" />
              <div className="h-1.5 w-2/3 rounded bg-accent/10" />
            </div>
          </div>
        </div>
      );
    case 'seo':
      return (
        <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-white p-2.5 shadow-[0_8px_20px_-12px_rgba(17,24,39,0.25)] transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="mb-2 flex items-center gap-0.5">
            <span className="text-[10px] font-medium text-[#4285F4]">G</span>
            <span className="text-[10px] font-medium text-[#EA4335]">o</span>
            <span className="text-[10px] font-medium text-[#FBBC05]">o</span>
            <span className="text-[10px] font-medium text-[#4285F4]">g</span>
            <span className="text-[10px] font-medium text-[#34A853]">l</span>
            <span className="text-[10px] font-medium text-[#EA4335]">e</span>
          </div>
          <div className="mb-2 h-5 rounded-full border border-[#dfe1e5] px-2 text-[8px] leading-5 text-[#202124]/70">
            plumber newcastle
          </div>
          <div className="text-[10px] leading-snug text-[#1a0dab]">
            Rank #1 · Local Pack
          </div>
          <div className="mt-0.5 text-[8px] text-[#70757a]">★★★★★ · Maps</div>
        </div>
      );
  }
}

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-accent';

const secondaryLink =
  'inline-flex items-center gap-1.5 text-[14px] font-medium text-accent/45 transition-colors group-hover:text-primary';

export default function Services() {
  const router = useRouter();
  const pathname = usePathname();

  const goContact = () => {
    if (pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <div id="solutions" className="bg-white">
      {/* Intro */}
      <section className="relative overflow-hidden bg-accent px-6 pb-20 pt-28 text-white md:pb-24 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 85% 15%, rgba(255,68,0,0.22), transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Our Solutions
            </span>
            <h1 className="mb-6 font-heading text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-[3.5rem]">
              Packages built for Newcastle{' '}
              <span className="text-primary">momentum.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
              Clear offerings. Fixed pricing. Distribution included. Know exactly
              what you&apos;re getting - and what it drives.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>No long-term contracts</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <span>Transparent fixed pricing</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <span>Newcastle distribution included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Packages */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-xl md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Core packages
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              Pick the level of momentum you need.
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-6 lg:items-end">
            {packages.map((pkg) => {
              const inner = (
                <>
                  <div className="mb-6">
                    <span
                      className={`inline-block text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        pkg.highlight ? 'text-primary' : 'text-accent/40'
                      }`}
                    >
                      {pkg.tag}
                    </span>
                  </div>

                  {/* 1. Service name */}
                  <h3
                    className={`mb-3 font-heading font-bold tracking-tight ${
                      pkg.highlight
                        ? 'text-2xl text-white md:text-[1.85rem]'
                        : 'text-xl text-accent md:text-2xl'
                    }`}
                  >
                    {pkg.title}
                  </h3>

                  {/* 2. Outcome */}
                  <p
                    className={`mb-8 font-heading text-lg font-semibold leading-snug tracking-tight md:text-xl ${
                      pkg.highlight ? 'text-white/90' : 'text-accent/80'
                    }`}
                  >
                    {pkg.outcome}
                  </p>

                  {/* 3. Price */}
                  <div className="mb-8 flex items-baseline gap-2">
                    <span
                      className={`font-heading text-2xl font-bold tracking-tight tabular-nums md:text-[1.65rem] ${
                        pkg.highlight ? 'text-white/90' : 'text-accent/70'
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-[12px] font-medium uppercase tracking-wider ${
                        pkg.highlight ? 'text-white/30' : 'text-accent/30'
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  {/* 4. Build / Grow / Distribute */}
                  <div className="mb-9 flex-1">
                    <BenefitGroups groups={pkg.groups} dark={pkg.highlight} />
                  </div>

                  {/* 5. CTA */}
                  <span
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 ${
                      pkg.highlight
                        ? 'group-hover:bg-white group-hover:text-accent'
                        : 'group-hover:bg-accent'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </>
              );

              const className = `group flex h-full flex-col rounded-2xl p-7 text-left transition-all duration-500 ease-out hover:-translate-y-1 md:p-8 ${
                pkg.highlight
                  ? `${pkg.span} md:col-span-2 bg-accent text-white shadow-[0_28px_56px_-28px_rgba(17,24,39,0.45)] hover:shadow-[0_36px_64px_-28px_rgba(17,24,39,0.5)] lg:p-10 lg:pb-11 lg:scale-[1.03] lg:z-10`
                  : `${pkg.span} border border-[#ececec] bg-white hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.22)]`
              }`;

              if (pkg.href) {
                return (
                  <Link key={pkg.id} href={pkg.href} className={className}>
                    {inner}
                  </Link>
                );
              }

              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={goContact}
                  className={className}
                >
                  {inner}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="border-t border-[#f0f0f0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-xl md:mb-12">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Additional services
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.25rem]">
              Extend any package when you need more.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {additional.map((item) => {
              const className =
                'group flex flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.22)] md:p-8';

              const body = (
                <>
                  <div className="mb-7 h-[96px] w-full max-w-[160px]">
                    <AddonVisual type={item.visual} />
                  </div>
                  <h3 className="mb-2.5 font-heading text-xl font-bold tracking-tight text-accent">
                    {item.title}
                  </h3>
                  <p className="mb-7 flex-1 text-[14px] leading-relaxed text-accent/50">
                    {item.description}
                  </p>
                  <span className={secondaryLink}>
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </>
              );

              if (item.href) {
                return (
                  <Link key={item.title} href={item.href} className={className}>
                    {body}
                  </Link>
                );
              }

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={goContact}
                  className={`${className} w-full text-left`}
                >
                  {body}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="border-t border-[#f0f0f0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl bg-[#fafafa] lg:grid lg:grid-cols-12">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-6 lg:p-14 xl:p-16">
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Strategic Partnerships
              </span>
              <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-accent md:text-[2.5rem] md:leading-[1.12]">
                Some businesses don&apos;t need a package.
                <br />
                They need a marketing partner.
              </h2>
              <p className="mb-8 max-w-md text-[15px] leading-relaxed text-accent/50 md:text-base">
                Retained strategy and execution for Newcastle and Hunter operators
                who want one team owning the whole picture - not a vendor
                delivering tasks.
              </p>
              <a
                href="https://cal.com/digest/digest-studio"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtn}
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative flex flex-col justify-center gap-4 p-8 pt-0 md:p-12 md:pt-0 lg:col-span-6 lg:gap-5 lg:p-14 lg:pl-4 xl:p-16 xl:pl-6">
              {partnerPillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`relative rounded-2xl border border-[#ececec] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,24,39,0.28)] md:p-7 ${
                    i === 1 ? 'lg:ml-10' : i === 2 ? 'lg:ml-5' : ''
                  }`}
                >
                  <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-accent md:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-accent/55 md:text-[15px]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client testimonial */}
      <section className="border-t border-[#f0f0f0] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Client feedback
          </span>
          <TestimonialQuote context="strategy" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#f0f0f0] px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="mb-3 font-heading text-2xl font-bold tracking-tight text-accent md:text-3xl">
              Not sure which package is right for you?
            </h2>
            <p className="text-[15px] leading-relaxed text-accent/50 md:text-base">
              We&apos;ll review your business, identify the biggest opportunities
              and recommend the right approach - whether that&apos;s a one-off
              project or a long-term partnership.
            </p>
          </div>
          <a
            href="https://cal.com/digest/digest-studio"
            target="_blank"
            rel="noopener noreferrer"
            className={`${primaryBtn} shrink-0`}
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
