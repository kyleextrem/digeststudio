import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Camera,
  Mail,
  MessageSquareQuote,
  Star,
  UserPlus,
} from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Testimo | Brands We Built',
  description:
    'Testimo is a customer growth platform built by Digest Studio. Turn every completed job into reviews, testimonials, photos, referrals and list growth.',
  path: '/brands/testimo',
  ogImage: '/Testimo.png',
  ogImageAlt: 'Testimo product screenshot',
  ogTitle: 'Testimo | Digest Studio',
  ogDescription:
    'One customer interaction. Multiple marketing assets. Built in-house by Digest Studio.',
});

const brandBreadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Our Brands', path: '/work' },
  { name: 'Testimo', path: '/brands/testimo' },
]);

const metrics = [
  {
    value: 'One flow',
    label: 'Per completed job',
    note: 'One customer moment - not five separate follow-ups to chase.',
  },
  {
    value: '6+',
    label: 'Asset types',
    note: 'Reviews, quotes, photos, referrals, list growth and insights from the same interaction.',
  },
  {
    value: 'Included',
    label: 'With Growth Partner',
    note: 'Client businesses get Testimo as part of the partnership - not a bolt-on upsell.',
  },
  {
    value: 'In-house',
    label: 'Built by Digest Studio',
    note: 'We designed, shipped and iterate on the product ourselves - then put it to work for clients.',
  },
] as const;

const outputs = [
  {
    icon: Star,
    title: 'Google Review',
    sentence: 'Ask for a review at the moment trust is highest.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Customer Testimonial',
    sentence: 'Capture quotes ready for your website and proposals.',
  },
  {
    icon: Camera,
    title: 'Customer Photos',
    sentence: 'Collect real job photos without a second chase.',
  },
  {
    icon: UserPlus,
    title: 'Referral',
    sentence: 'Turn a happy customer into an introduction.',
  },
  {
    icon: Mail,
    title: 'Mailing List Growth',
    sentence: 'Grow an owned audience from every completed job.',
  },
  {
    icon: BarChart3,
    title: 'Customer Insights',
    sentence: 'See what customers valued - and improve the next job.',
  },
] as const;

const capabilities = [
  {
    title: 'Product Strategy',
    body: 'Defined the problem clearly: local businesses lose marketing value the moment a job ends. Testimo captures it before it disappears.',
  },
  {
    title: 'Product Design',
    body: 'Designed a simple customer journey that feels natural to complete - and hard to abandon halfway.',
  },
  {
    title: 'Customer Experience',
    body: 'Built the flow around timing and trust, so asking for reviews and assets feels like a thank-you, not a hassle.',
  },
  {
    title: 'Brand Strategy',
    body: 'Positioned Testimo as a growth system for completed work - not another review widget with a long feature list.',
  },
  {
    title: 'Website Design',
    body: 'Shipped the product site so operators understand the value in one scroll and can see how the flow works.',
  },
  {
    title: 'Content Marketing',
    body: 'Explain the product through real job outcomes - reviews, photos, referrals - so the story matches what the software does.',
  },
] as const;

const lessons = [
  {
    title: "Reviews alone aren't enough",
    body: 'A star rating helps. A quote, a photo and a referral from the same job compound much faster.',
  },
  {
    title: 'Every completed job is a marketing moment',
    body: 'Trust peaks when the work is done. That window closes quickly if you wait to follow up later.',
  },
  {
    title: 'Collect multiple assets in one journey',
    body: 'One thoughtful flow beats five separate asks. Customers finish once; the business walks away with more.',
  },
  {
    title: 'Automation improves consistency',
    body: 'Teams forget to ask. Systems don\'t. Reliable prompts turn "we should request a review" into a habit.',
  },
  {
    title: 'Simplicity beats feature overload',
    body: 'Operators adopt tools they understand in a minute. Extra settings that slow the ask kill the outcome.',
  },
] as const;

export default function TestimoBrandPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandBreadcrumb) }}
      />
      <nav className="border-b border-[#ececec] px-6 py-5" aria-label="Breadcrumb">
        <div className="ds-container">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-accent/45 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Our Brands
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="ds-section !pb-12 md:!pb-16">
        <div className="ds-container">
          <span className="ds-eyebrow">Product · Built in-house</span>
          <h1 className="ds-h2 mb-5 max-w-3xl !text-[2.5rem] sm:!text-5xl md:!text-[3.25rem]">
            Testimo
          </h1>
          <p className="ds-lede max-w-xl">
            A customer growth platform built around the end of every completed
            job.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="ds-container">
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="/Testimo.png"
              alt="Testimo"
              className="aspect-[16/9] w-full object-cover object-top md:aspect-[2.2/1]"
            />
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">The Story</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">Why we built it.</h2>
          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-accent/55 md:text-base">
            <p>
              Testimo started from a pattern we kept seeing: local businesses
              finish great work, then leave the marketing value on the table.
              The customer is happiest in that moment - and then nobody asks.
            </p>
            <p>
              The problem wasn&apos;t &quot;get more reviews.&quot; It was
              turning one completed job into lasting assets - a Google review,
              a usable testimonial, real photos, a referral and a chance to
              grow an owned list.
            </p>
            <p>
              Digest Studio built Testimo from the ground up: product strategy,
              UX, brand, development and the go-to-market story. We use it with
              Growth Partner clients so the system we sell is the system we run.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">By the numbers</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">How Testimo is designed to work.</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="ds-card p-7 md:p-8">
                <div className="mb-2 font-heading text-3xl font-bold tracking-tight text-accent tabular-nums sm:text-4xl">
                  {m.value}
                </div>
                <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-accent/40">
                  {m.label}
                </div>
                <p className="text-[14px] leading-relaxed text-accent/50">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Gallery</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">Real product screenshot.</h2>
          <figure className="max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-[#ececec] bg-[#f4f4f5]">
              <img
                src="/Testimo.png"
                alt="Testimo product screenshot"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-accent/45">
              Product - the Testimo customer growth flow
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What the flow captures */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Customer flow</span>
          <h2 className="ds-h2 mb-4 max-w-xl">
            One customer interaction. Multiple marketing assets.
          </h2>
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-accent/55 md:mb-12 md:text-base">
            After a job is done, Testimo guides the customer through a single
            flow that can capture everything below - without a second chase.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {outputs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="ds-card flex flex-col p-7 md:p-8">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/[0.04]">
                    <Icon className="h-5 w-5 text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-accent">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-accent/50">
                    {item.sentence}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">What We Built</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">
            Everything Digest Studio owned end to end.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {capabilities.map((item) => (
              <div key={item.title} className="ds-card p-7 md:p-8">
                <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-accent">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-accent/50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Learned */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">What We Learned</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">
            Lessons from building a customer growth product.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {lessons.map((item) => (
              <div key={item.title} className="ds-card p-7 md:p-8">
                <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-accent">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-accent/50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How this benefits clients */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container max-w-2xl">
          <span className="ds-eyebrow">How this benefits our clients</span>
          <h2 className="ds-h2 mb-6">We ship the system we built for ourselves.</h2>
          <p className="text-[15px] leading-relaxed text-accent/55 md:text-base">
            Testimo isn&apos;t a theory about reviews. It&apos;s a product Digest
            Studio designed, tested and refined - then included with Growth
            Partner so client businesses get the same post-job marketing system
            we believe in. The lessons above show up in how we run reputation,
            content and list growth for partners every month.
          </p>
        </div>
      </section>

      {/* External CTA */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            If you&apos;d like us to apply the same thinking, systems and
            execution to your business, let&apos;s talk - or see Testimo for
            yourself.
          </p>
          <a
            href="https://testimo.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary"
          >
            Visit Testimo
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-[13px] text-accent/40">Previous brand</p>
            <Link
              href="/brands/newcastle-digest"
              className="group inline-flex items-center gap-2 font-heading text-xl font-bold text-accent transition-colors hover:text-primary"
            >
              Explore Newcastle Digest
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <Link
            href="/work"
            className="text-[14px] font-medium text-accent/45 transition-colors hover:text-primary"
          >
            Back to Our Brands
          </Link>
        </div>
      </section>
    </div>
  );
}
