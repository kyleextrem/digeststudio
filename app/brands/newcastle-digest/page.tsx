import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Newcastle Digest | Brands We Built',
  description:
    'How Digest Studio built Newcastle Digest from scratch - brand, website, newsletter, SEO, community and events. 7,300+ subscribers, 60% open rate.',
  path: '/brands/newcastle-digest',
  ogImage: '/newcastle-digest.png',
  ogImageAlt: 'Newcastle Digest website',
  ogTitle: 'Newcastle Digest | Digest Studio',
  ogDescription:
    "Built from scratch into one of Australia's highest-engagement local newsletters.",
});

const brandBreadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Our Brands', path: '/work' },
  { name: 'Newcastle Digest', path: '/brands/newcastle-digest' },
]);

const metrics = [
  {
    value: '7,300+',
    label: 'Subscribers',
    note: 'An owned audience that opens, clicks and shows up - not rented reach.',
  },
  {
    value: '60%',
    label: 'Average open rate',
    note: 'Proof the writing earns attention week after week, not just once.',
  },
  {
    value: '50+',
    label: 'Newsletter editions',
    note: 'A publishing habit that compounds trust and local authority over time.',
  },
  {
    value: 'Weekly',
    label: 'Publish cadence',
    note: 'Consistency is the product - locals know when the Digest arrives.',
  },
] as const;

const gallery = [
  {
    src: '/newcastle-digest.png',
    alt: 'Newcastle Digest website homepage',
    caption: 'Website - the public home for the Digest brand',
  },
] as const;

const capabilities = [
  {
    title: 'Brand Strategy',
    body: 'Positioned Newcastle Digest as a useful local habit - clear voice, simple promise, and a brand people recognise in the inbox.',
  },
  {
    title: 'Website Design',
    body: 'Designed and shipped the site so visitors understand the Digest in seconds and can subscribe without friction.',
  },
  {
    title: 'SEO',
    body: 'Built local search presence around Newcastle topics so organic discovery feeds the list - not the other way around.',
  },
  {
    title: 'Content Marketing',
    body: 'Created a weekly editorial system: what to cover, how to write it, and how to keep it useful for locals.',
  },
  {
    title: 'Email Marketing',
    body: 'Owned the full newsletter stack - list growth, send cadence, subject lines, layout and performance tracking.',
  },
  {
    title: 'Community Building',
    body: 'Grew real relationships across Newcastle - readers, businesses and partners who treat the Digest as part of the city.',
  },
] as const;

const lessons = [
  {
    title: 'Growing an audience from zero',
    body: 'Nobody starts with a list. You earn one by showing up every week with something worth opening.',
  },
  {
    title: 'Creating content people share',
    body: 'Local usefulness beats cleverness. If a neighbour would forward it, it belongs in the edition.',
  },
  {
    title: 'Building local SEO authority',
    body: 'Consistent publishing on real Newcastle topics compounds. Search follows the habit, not the other way around.',
  },
  {
    title: 'Community-first marketing',
    body: 'The brand grows when the city feels seen. Coverage, events and partnerships only work when they serve locals first.',
  },
  {
    title: 'Sustainable recurring engagement',
    body: 'Open rates stay high when the cadence is reliable and the bar never slips. Habit is a strategy.',
  },
] as const;

export default function NewcastleDigestBrandPage() {
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
          <span className="ds-eyebrow">Media brand · Built in-house</span>
          <h1 className="ds-h2 mb-5 max-w-3xl !text-[2.5rem] sm:!text-5xl md:!text-[3.25rem]">
            Newcastle Digest
          </h1>
          <p className="ds-lede max-w-xl">
            Newcastle&apos;s weekly local newsletter - built from zero by Digest
            Studio.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="ds-container">
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="/newcastle-digest.png"
              alt="Newcastle Digest website"
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
              Newcastle Digest started because local discovery was fragmented.
              Good cafés, events and stories lived in group chats and word of
              mouth - not in one place locals could rely on every week.
            </p>
            <p>
              The problem was simple: people wanted a trustworthy weekly read
              about their city, and businesses wanted a way to reach engaged
              locals without paying for noise.
            </p>
            <p>
              Digest Studio built everything from the ground up - brand,
              website, newsletter, SEO, content system and community. No
              funding. No existing audience. Just a clear promise and a weekly
              habit of paying attention to Newcastle.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">By the numbers</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">What the Digest looks like today.</h2>
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
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">Real screenshots from the brand.</h2>
          <div className="grid grid-cols-1 gap-8 max-w-4xl">
            {gallery.map((item) => (
              <figure key={item.caption}>
                <div className="overflow-hidden rounded-2xl border border-[#ececec] bg-[#f4f4f5]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-accent/45">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
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
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">What We Learned</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">
            Lessons from building a media brand from scratch.
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
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container max-w-2xl">
          <span className="ds-eyebrow">How this benefits our clients</span>
          <h2 className="ds-h2 mb-6">We run the playbook on our own brands first.</h2>
          <p className="text-[15px] leading-relaxed text-accent/55 md:text-base">
            Newcastle Digest isn&apos;t a case study we invented for the
            brochure. It&apos;s a live media brand we built, tested and refined
            - audience growth, content systems, local SEO and community
            marketing included. When we bring that thinking to a client
            business, it comes from work we already do for ourselves.
          </p>
        </div>
      </section>

      {/* External CTA */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            If you&apos;d like us to apply the same thinking, systems and
            execution to your business, let&apos;s talk - or see the Digest live
            for yourself.
          </p>
          <a
            href="https://newcastledigest.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary"
          >
            Visit Newcastle Digest Website
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-[13px] text-accent/40">Next brand</p>
            <Link
              href="/brands/testimo"
              className="group inline-flex items-center gap-2 font-heading text-xl font-bold text-accent transition-colors hover:text-primary"
            >
              Explore Testimo
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
