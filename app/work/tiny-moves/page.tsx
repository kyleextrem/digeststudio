import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Tiny Moves - Custom Website Build | Digest Studio',
  description:
    "How Digest Studio built a bespoke custom website for Tiny Moves, a Newcastle children's music and movement program.",
  path: '/work/tiny-moves',
  absoluteTitle: true,
  ogTitle: 'Tiny Moves - Custom Website Build | Digest Studio',
  ogDescription:
    "How Digest Studio built a bespoke custom website for Tiny Moves, a Newcastle children's music and movement program.",
  ogImage: '/work/tiny-moves/homepage.png',
  ogImageAlt: 'Tiny Moves custom website homepage',
});

const caseBreadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Tiny Moves', path: '/work/tiny-moves' },
]);

const CAL = 'https://cal.com/digest/digest-studio';
const SITE_URL = 'https://tinymoves.com.au';

const heroStats = [
  'Web Design & Development',
  'Newcastle, NSW',
  'Custom Build',
] as const;

const requirements = [
  'A bespoke design built for their brand specifically',
  'Self-managed content, no developer dependency',
  'Multi-venue class and booking integration',
] as const;

const techStack = [
  'Next.js 15',
  'TypeScript',
  'Tailwind CSS',
  'Sanity CMS',
  'Vercel',
] as const;

const avoided = [
  'Identical decorative accents repeated across every card',
  'Perfect circles used as organic shapes',
  'Template clip art or stock illustration',
  'Soft glows and arc highlights at card corners',
] as const;

const resultStats = [
  {
    value: '90+',
    label: 'Lighthouse performance score',
  },
  {
    value: 'Full',
    label: 'Self-managed content via Sanity',
  },
  {
    value: 'Zero',
    label: 'Downtime DNS migration',
  },
] as const;

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ececec] bg-[#f4f4f5]">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

export default function TinyMovesCaseStudyPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseBreadcrumb) }}
      />

      <nav
        className="border-b border-[#ececec] px-6 py-5"
        aria-label="Breadcrumb"
      >
        <div className="ds-container">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-accent/40">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/work"
                className="transition-colors hover:text-primary"
              >
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-accent/70">Tiny Moves</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="ds-section !pb-12 md:!pb-16">
        <div className="ds-container">
          <Link
            href="/work"
            className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-accent/45 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Work
          </Link>

          <div className="mb-8 flex flex-wrap gap-2.5">
            {heroStats.map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center rounded-full border border-[#ececec] bg-[#fafafa] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent/55"
              >
                {stat}
              </span>
            ))}
          </div>

          <h1 className="ds-h2 mb-5 max-w-3xl !text-[2.25rem] sm:!text-5xl md:!text-[3.25rem]">
            A Website That Actually Feels Like the Business
          </h1>
          <p className="ds-lede max-w-2xl">
            Tiny Moves runs children&apos;s music and movement classes across
            three Newcastle venues. They needed a website that reflected the
            warmth and care of what they do, not something that looked like it
            came off a shelf.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Transformation</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">Before and After</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <figure>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/40">
                Before
              </p>
              <Screenshot
                src="/work/tiny-moves/old-homepage.png"
                alt="The previous Tiny Moves website homepage"
              />
            </figure>
            <figure>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/40">
                After
              </p>
              <Screenshot
                src="/work/tiny-moves/homepage.png"
                alt="The new Tiny Moves homepage"
              />
            </figure>
            <figure>
              <Screenshot
                src="/work/tiny-moves/old-about.png"
                alt="The previous Tiny Moves about page, with a generic oval photo mask"
              />
            </figure>
            <figure>
              <Screenshot
                src="/work/tiny-moves/meet-anna.png"
                alt="Meet Anna section on the new Tiny Moves site"
              />
            </figure>
          </div>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-accent/50 md:text-base">
            Same business. Completely different impression.
          </p>
        </div>
      </section>

      {/* The Brief */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">The Brief</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">What They Needed</h2>
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-accent/55 md:mb-12 md:text-base">
            Tiny Moves offers classes across three venues in New Lambton,
            Adamstown, and Belmont, with three age groups and online booking.
            The site needed to handle that complexity clearly, reflect a
            boutique and personal brand, and be something the owner could update
            without calling a developer every time.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
            {requirements.map((item) => (
              <div key={item} className="ds-card p-6 md:p-7">
                <p className="text-[14px] font-medium leading-relaxed text-accent">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Built It */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Build</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">How We Built It</h2>
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            Built from scratch in Next.js 15 with TypeScript and Tailwind.
            Sanity CMS manages all content: classes, packages, testimonials,
            and FAQs.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-[#ececec] bg-white px-3.5 py-1.5 text-[12px] font-medium text-accent/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Design Story */}
      <section className="border-t border-[#ececec] px-6 py-20 md:py-28">
        <div className="ds-container">
          <span className="ds-eyebrow">Design</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">
            The Part That Actually Mattered
          </h2>
          <div className="mb-12 max-w-2xl space-y-5 text-[15px] leading-relaxed text-accent/55 md:mb-14 md:text-base">
            <p>
              The brief was clear: warm, boutique, hand-crafted. Not clip art.
              Not a children&apos;s activity template. Something that felt like
              a real design decision had been made for this specific business.
            </p>
            <p>
              The hero went through several iterations before it got there. The
              final version uses a custom SVG clip-path to create an asymmetric
              organic photo mask, layered accent shapes, and a hand-drawn
              movement line motif that carries through to the section below.
              Every element is intentional.
            </p>
          </div>
          <figure className="max-w-5xl">
            <Screenshot
              src="/work/tiny-moves/homepage.png"
              alt="Tiny Moves homepage hero with a custom organic photo mask"
            />
            <figcaption className="mt-4 text-[13px] text-accent/45">
              The hero uses a custom SVG clip-path rather than a standard
              circular or oval photo mask.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What We Actively Avoided */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Craft standards</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">What We Actively Avoided</h2>
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-accent/55 md:mb-12 md:text-base">
            Generic web design has recognisable patterns: the same decorative
            accents on every card, perfect circles used as organic shapes, soft
            glows at card corners. We had a specific list of things we refused
            to do and checked every section against it before moving on.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {avoided.map((item) => (
              <div key={item} className="ds-card p-7 md:p-8">
                <p className="text-[15px] font-medium leading-relaxed text-accent">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Launch</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">The Outcome</h2>
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-accent/55 md:mb-12 md:text-base">
            A site that looks and feels like the business it represents. The
            owner manages all content themselves through Sanity Studio.
            Lighthouse performance score sits above 90. The site launched with
            full DNS migration handled, preserving all existing email records
            throughout.
          </p>
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
            {resultStats.map((stat) => (
              <div key={stat.label} className="ds-card p-7 md:p-8">
                <div className="mb-2 font-heading text-3xl font-bold tracking-tight text-accent tabular-nums sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <figure>
            <Screenshot
              src="/work/tiny-moves/audience.png"
              alt="Who Tiny Moves is for section on the new website"
            />
            <figcaption className="mt-4 text-[13px] text-accent/45">
              Interior pages carry the same level of care as the homepage.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Client Quote */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container max-w-3xl">
          <span className="ds-eyebrow">Client</span>
          <h2 className="ds-h2 mb-10">From the Client</h2>
          <blockquote className="border-l-4 border-primary pl-6 md:pl-8">
            <p className="mb-6 font-heading text-lg font-medium leading-relaxed text-accent/70 md:text-xl">
              &ldquo;I initially reached out to Kyle for support with a
              newsletter feature to target local prospects in the Newcastle
              area. He delivered fantastic results over a few newsletter runs,
              and our more recent conversations have focused on a website
              revamp and an SEO strategy for my kids&apos; music and movement
              business. As a small business owner, I truly appreciate working
              with like-minded professionals and supporting local businesses.
              Highly recommend Kyle for any marketing support.&rdquo;
            </p>
            <footer className="text-[14px] text-accent/45">
              Anna, Founder, Tiny Moves
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Visit the site */}
      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            Tiny Moves is live at tinymoves.com.au
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary"
          >
            Visit Tiny Moves
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <h2 className="ds-h2 mb-5 max-w-2xl">
            Want a website that actually represents your business?
          </h2>
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            Custom coded, built for your brand specifically.
          </p>
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary"
          >
            Get Started
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-[13px] text-accent/40">Our brands</p>
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
            Back to Work
          </Link>
        </div>
      </section>
    </div>
  );
}
