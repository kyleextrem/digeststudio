import Image from 'next/image';
import Link from 'next/link';
import AuditCta from '@/components/AuditCta';
import GrowthAuditAnalytics from '@/components/GrowthAuditAnalytics';
import GrowthAuditForm from '@/components/GrowthAuditForm';

const journey = [
  { title: 'Be found', detail: 'Google + local search' },
  { title: 'Be trusted', detail: 'Reviews + social proof' },
  { title: 'Be chosen', detail: 'Website + offer + conversion' },
  { title: 'Be remembered', detail: 'Content + local visibility' },
] as const;

const reviews = [
  {
    number: '01',
    title: 'Google',
    body: "Can local customers actually find you when they're looking for what you sell?",
  },
  {
    number: '02',
    title: 'Website',
    body: "Does your website make it obvious what you do, why you're worth choosing and what someone should do next?",
  },
  {
    number: '03',
    title: 'Reviews',
    body: 'Are your reviews helping build trust, and are you consistently generating new ones?',
  },
  {
    number: '04',
    title: 'Local visibility',
    body: 'How visible is your business compared with the other businesses competing for the same customers?',
  },
  {
    number: '05',
    title: 'Content',
    body: 'Is your content actually building trust and demand, or are you just posting because you feel like you should?',
  },
  {
    number: '06',
    title: 'Conversion',
    body: 'Once someone finds you, how easy is it for them to become a customer?',
  },
] as const;

const findings = [
  {
    number: '01',
    title: 'Improve your local Google visibility',
    body: 'Your business is competing for high-intent local searches, but there are opportunities to improve how your Google Business Profile and website work together.',
    why: 'Customers are already searching. The opportunity is getting in front of more of them.',
  },
  {
    number: '02',
    title: 'Make the website work harder',
    body: 'Your site explains what you do, but the path from visitor to enquiry could be clearer.',
    why: 'More of your existing traffic could potentially become enquiries.',
  },
  {
    number: '03',
    title: 'Create a consistent review system',
    body: "Your existing reviews create trust, but there isn't an obvious system for consistently generating new ones.",
    why: 'Recent customer feedback is one of the strongest trust signals available to a local business.',
  },
] as const;

const priorities = [
  'Fix local visibility',
  'Improve conversion',
  'Build the review engine',
] as const;

const proof = [
  {
    name: 'Newcastle Digest',
    stat: '7,000+ local subscribers',
    body: 'A real local audience, not a theoretical one.',
    href: '/brands/newcastle-digest',
    image: '/newcastle-digest.png',
    imageAlt: 'Newcastle Digest homepage',
  },
  {
    name: 'Testimo',
    stat: 'Built to turn customer feedback into a growth asset',
    body: 'A real product solving a real business problem.',
    href: '/brands/testimo',
    image: '/Testimo.jpg',
    imageAlt: 'Testimo, the customer follow-up product built by Digest Studio',
  },
  {
    name: 'Digest Studio',
    stat: 'Websites, SEO, content, reviews and local distribution',
    body: 'The Studio brings those pieces together when a business actually needs them.',
    href: '/about',
    image: '/logo-lightning.png',
    imageAlt: 'Digest Studio logo',
    contain: true,
  },
] as const;

const notForYou = [
  'You\'re looking for someone to simply "post on Instagram".',
  'You want a giant marketing report that sits in your inbox.',
  'You\'re not interested in changing anything.',
  'You\'re looking for the cheapest possible agency.',
  'You don\'t have a genuine business growth goal.',
] as const;

const isForYou = [
  'You have a good business but know your marketing could work harder.',
  'You want to know where the biggest opportunity actually is.',
  'You want practical recommendations rather than marketing jargon.',
  'You\'re ready to act on the right problems.',
] as const;

const steps = [
  {
    number: '01',
    title: 'You apply',
    body: "Tell us about your business and what you're trying to improve.",
  },
  {
    number: '02',
    title: 'We investigate',
    body: 'We review your website, Google presence, reviews and local visibility.',
  },
  {
    number: '03',
    title: 'You get the audit',
    body: "We send you the 3 things we'd fix first.",
  },
  {
    number: '04',
    title: 'You decide what happens next',
    body: "If you want help implementing it, we'll show you what we'd recommend. If not, you still get the audit.",
  },
] as const;

const previewItems = [
  { number: '01', title: 'Google visibility' },
  { number: '02', title: 'Website conversion' },
  { number: '03', title: 'Review generation' },
] as const;

function AuditPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-8 rounded-[36px] bg-primary/[0.05] blur-2xl" />
      <article className="relative rounded-2xl border border-[#e6e6e6] bg-[#fbfbfa] shadow-[0_32px_64px_-28px_rgba(17,24,39,0.4)] md:rotate-[1.15deg]">
        <header className="flex items-center justify-between gap-4 border-b border-[#ececec] px-5 py-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/70">
            Digest Studio / Growth Audit
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Example</p>
        </header>
        <div className="px-5 py-7 sm:px-7 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/75">
            Your business
          </p>
          <p className="mt-3 font-heading text-[1.65rem] font-bold leading-[1.15] tracking-tight text-accent">
            The 3 things we&apos;d fix first
          </p>
          <ol className="mt-7 space-y-3">
            {previewItems.map((item) => (
              <li
                key={item.number}
                className="flex items-baseline gap-4 border-t border-[#ececec] pt-3"
              >
                <span className="font-heading text-sm font-semibold tabular-nums text-primary">
                  {item.number}
                </span>
                <span className="font-heading text-lg font-semibold tracking-tight text-accent">
                  {item.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </div>
  );
}

export default function GrowthAuditLanding() {
  return (
    <div className="bg-white">
      <GrowthAuditAnalytics />

      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-28 md:pb-24 md:pt-36 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Free for 10 Newcastle businesses each month
            </p>
            <h1 className="mb-6 max-w-xl font-heading text-[2.45rem] font-bold leading-[1.05] tracking-[-0.035em] text-accent sm:text-5xl md:text-[3.35rem]">
              Find the biggest growth opportunity you&apos;re missing.
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-accent/75 md:text-[17px]">
              We&apos;ll review your website, Google presence, reviews and local visibility, then
              show you the 3 things we&apos;d fix first.
            </p>
            <AuditCta location="hero">Apply for a Free Growth Audit</AuditCta>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-accent/70">
              No generic checklist. No obligation. Just a practical look at your business.
            </p>
            <p className="mt-6 max-w-md border-t border-accent/10 pt-5 text-[14px] leading-relaxed text-accent/80">
              <span className="font-heading font-semibold text-accent">
                10 Newcastle businesses per month.
              </span>{' '}
              Personally reviewed.
            </p>
          </div>

          <div className="lg:col-span-6">
            <AuditPreview />
          </div>
        </div>
      </section>

      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <div className="max-w-3xl">
            <h2 className="ds-h2 mb-5">Your marketing might not be the problem.</h2>
            <p className="text-base leading-relaxed text-accent/75 md:text-lg">
              You can spend more on ads, post more often and redesign your website, but if
              you&apos;re fixing the wrong problem, you&apos;re just doing more of the same.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-accent/75 md:text-lg">
              We look at the parts of your online presence that influence whether a Newcastle
              customer finds you, trusts you and gets in touch.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#ececec] bg-[#ececec] sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <div key={item.title} className="bg-white px-6 py-8">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] text-accent/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="ds-container">
          <div className="mb-12 max-w-2xl">
            <h2 className="ds-h2">We look at the whole customer journey.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => (
              <article key={item.number} className="ds-card p-6 md:p-7">
                <p className="font-heading text-sm font-semibold tabular-nums text-primary">
                  {item.number}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-accent/75">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ececec] bg-[#f7f6f4] px-6 py-20 md:py-28">
        <div className="ds-container">
          <div className="mb-12 max-w-3xl">
            <h2 className="ds-h2 mb-5">You won&apos;t get a 40-page marketing report.</h2>
            <p className="text-base leading-relaxed text-accent/75 md:text-lg">
              You&apos;ll get something more useful: a clear view of what we&apos;d fix first.
            </p>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-[#e7e5e1] bg-[#fbfbfa] shadow-[0_28px_60px_-36px_rgba(17,24,39,0.45)]">
            <header className="flex flex-wrap items-end justify-between gap-4 border-b border-[#ececec] px-6 py-6 sm:px-10 sm:py-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/75">
                  Digest Studio
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                  Your business growth audit
                </h3>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Example
              </p>
            </header>

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <p className="font-heading text-xl font-bold tracking-tight text-accent md:text-2xl">
                The 3 things we&apos;d fix first
              </p>

              <div className="mt-8 divide-y divide-[#ececec]">
                {findings.map((finding) => (
                  <div key={finding.number} className="grid gap-4 py-8 first:pt-0 md:grid-cols-12 md:gap-8">
                    <p className="font-heading text-sm font-semibold tabular-nums text-primary md:col-span-1">
                      {finding.number}
                    </p>
                    <div className="md:col-span-11">
                      <h3 className="font-heading text-xl font-bold tracking-tight text-accent md:text-2xl">
                        {finding.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-accent/75 md:text-base">
                        {finding.body}
                      </p>
                      <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-accent/75">
                        Why it matters
                      </p>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-accent/80">
                        {finding.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#ececec] bg-accent px-6 py-8 text-white sm:px-10 sm:py-10">
              <h3 className="font-heading text-2xl font-bold tracking-tight">
                If this were our business...
              </h3>
              <ol className="mt-6 grid gap-4 md:grid-cols-3">
                {priorities.map((item, index) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5">
                    <span className="font-heading text-sm font-semibold tabular-nums text-primary">
                      {index + 1}
                    </span>
                    <p className="mt-3 font-heading text-lg font-semibold tracking-tight">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="ds-container">
          <div className="mb-12 max-w-3xl">
            <h2 className="ds-h2 mb-5">
              We don&apos;t just talk about marketing. We build the things we&apos;re talking about.
            </h2>
            <p className="text-base leading-relaxed text-accent/75 md:text-lg">
              Digest Studio grew out of Newcastle Digest, a local media business reaching thousands
              of people across Newcastle every week. We&apos;ve also built products like Testimo to
              solve specific problems for local businesses.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {proof.map((item) => (
              <Link key={item.name} href={item.href} className="ds-card-interactive group flex flex-col overflow-hidden">
                <div className={`relative aspect-[16/10] ${'contain' in item && item.contain ? 'bg-[#fafafa]' : 'bg-[#f4f4f5]'}`}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className={'contain' in item && item.contain ? 'object-contain p-8' : 'object-cover object-top'}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-accent">
                    {item.name}
                  </h3>
                  <p className="mt-3 font-heading text-[15px] font-semibold leading-snug text-accent">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-accent/75">{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <h2 className="ds-h2 mb-10 max-w-xl">This probably isn&apos;t for you if...</h2>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/15 pl-4 text-[15px] leading-relaxed text-accent/80 md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <h3 className="mb-5 font-heading text-2xl font-bold tracking-tight text-accent">
                It is for you if...
              </h3>
              <ul className="space-y-4">
                {isForYou.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-primary pl-4 text-[15px] leading-relaxed text-accent/80 md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent px-6 py-20 text-white md:py-28">
        <div className="ds-container grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-5xl">
              10 businesses. Every month.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              I personally review every Growth Audit, which means we keep the number deliberately
              small.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Once the 10 monthly audits are taken, applications close until the following month.
            </p>
            <div className="mt-8">
              <AuditCta location="scarcity" variant="dark">
                Apply for a Free Growth Audit
              </AuditCta>
              <p className="mt-4 text-[13px] text-white/70">Takes about 2 minutes.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <figure className="mx-auto max-w-xs lg:ml-auto">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src="/kyle-profile.jpg"
                  alt="Kyle, founder of Digest Studio"
                  width={1600}
                  height={2000}
                  sizes="320px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-[13px] leading-relaxed text-white/70">
                Kyle, founder of Digest Studio. Every audit is reviewed personally.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <GrowthAuditForm />
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-20 md:py-28">
        <div className="ds-container">
          <h2 className="ds-h2 mb-12">What happens next.</h2>
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="font-heading text-sm font-semibold tabular-nums text-primary">
                  {step.number}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-accent">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-accent/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-accent px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Stop guessing what your marketing needs.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            Find out what we&apos;d fix first.
          </p>
          <div className="mt-8 flex justify-center">
            <AuditCta location="final" variant="dark">
              Apply for a Free Growth Audit
            </AuditCta>
          </div>
          <p className="mt-5 text-[13px] text-white/70">
            10 Newcastle businesses reviewed each month.
          </p>
        </div>
      </section>
    </div>
  );
}
