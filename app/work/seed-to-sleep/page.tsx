import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Seed to Sleep - Website Rebuild | Digest Studio',
  description:
    'How Digest Studio rebuilt the website for Seed to Sleep, Anna Spiteri’s Newcastle sleep consultancy, with clearer packages, secure guide downloads and online payments.',
  path: '/work/seed-to-sleep',
  absoluteTitle: true,
  ogTitle: 'Seed to Sleep - Website Rebuild | Digest Studio',
  ogDescription:
    'How Digest Studio rebuilt the website for Seed to Sleep, Anna Spiteri’s Newcastle sleep consultancy, with clearer packages, secure guide downloads and online payments.',
  ogImage: '/work/seed-to-sleep/homepage.jpg',
  ogImageAlt: 'The rebuilt Seed to Sleep homepage',
});

const caseBreadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Seed to Sleep', path: '/work/seed-to-sleep' },
]);

const CAL = 'https://cal.com/digest/digest-studio';
const SITE_URL = 'https://seedtosleep.com.au/';

const heroStats = [
  'Web Design & Development',
  'Newcastle, NSW',
  'Website Rebuild',
] as const;

const requirements = [
  'A clearer presentation of sleep consultancy packages and digital sleep guides',
  'A free introductory consultation as the obvious first step',
  'Payments, guide delivery and customer records connected',
] as const;

type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const beforeSize = { width: 2000, height: 1556 } as const;
const afterSize = { width: 2000, height: 1310 } as const;

const gallery: {
  title: string;
  before: Shot;
  after: Shot;
}[] = [
  {
    title: 'Homepage',
    before: {
      src: '/work/seed-to-sleep/old-homepage.jpg',
      alt: 'The previous Seed to Sleep homepage, with a centred logo and an oval family photograph',
      ...beforeSize,
    },
    after: {
      src: '/work/seed-to-sleep/homepage.jpg',
      alt: 'The rebuilt Seed to Sleep homepage, with the headline beside a photograph of Anna Spiteri holding a baby',
      ...afterSize,
    },
  },
  {
    title: 'Packages',
    before: {
      src: '/work/seed-to-sleep/old-packages.jpg',
      alt: 'The previous Seed to Sleep packages page, titled Sleep Consult Packages, with a large oval photograph',
      ...beforeSize,
    },
    after: {
      src: '/work/seed-to-sleep/packages.jpg',
      alt: 'The rebuilt Seed to Sleep packages page, presenting support from a free call through to email support',
      ...afterSize,
    },
  },
  {
    title: 'Sleep guides',
    before: {
      src: '/work/seed-to-sleep/old-guides.jpg',
      alt: 'The previous Seed to Sleep guides page, with long introductory copy and dotted price lines',
      ...beforeSize,
    },
    after: {
      src: '/work/seed-to-sleep/guides.jpg',
      alt: 'The rebuilt Sleep Guides page, with the Newborn and 3–12 Month guides listed as clear cards',
      ...afterSize,
    },
  },
  {
    title: 'About',
    before: {
      src: '/work/seed-to-sleep/old-about.jpg',
      alt: 'The previous About Anna page, with a circular portrait and a long block of text',
      ...beforeSize,
    },
    after: {
      src: '/work/seed-to-sleep/about.jpg',
      alt: 'The rebuilt About Anna page, with a rectangular portrait and a shorter introduction',
      ...afterSize,
    },
  },
  {
    title: 'Contact',
    before: {
      src: '/work/seed-to-sleep/old-contact.jpg',
      alt: 'The previous Seed to Sleep contact page, with a photograph beside a Contact Me form',
      ...beforeSize,
    },
    after: {
      src: '/work/seed-to-sleep/contact.jpg',
      alt: 'The rebuilt Seed to Sleep contact page, inviting families to get in touch and book a free 15-minute call',
      width: 2000,
      height: 1389,
    },
  },
];

function Screenshot({ src, alt, width, height }: Shot) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ececec] bg-[#f4f4f5]">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </div>
  );
}

function Comparison({
  before,
  after,
}: {
  before: Shot;
  after: Shot;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      <figure>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/40">
          Before
        </p>
        <Screenshot {...before} />
      </figure>
      <figure>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/40">
          After
        </p>
        <Screenshot {...after} />
      </figure>
    </div>
  );
}

export default function SeedToSleepCaseStudyPage() {
  const homepage = gallery[0];

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
            <li className="font-medium text-accent/70">Seed to Sleep</li>
          </ol>
        </div>
      </nav>

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
            A Warmer Website for a Newcastle Sleep Consultancy
          </h1>
          <p className="ds-lede mb-8 max-w-2xl">
            Seed to Sleep is Anna Spiteri&apos;s sleep consultancy in Newcastle.
            The rebuild gives families a clearer way to understand her packages,
            buy a digital sleep guide, and book a free introductory
            consultation.
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-primary"
          >
            Visit seedtosleep.com.au
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Transformation</span>
          <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">Before and After</h2>
          <Comparison before={homepage.before} after={homepage.after} />
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-accent/50 md:text-base">
            Same consultancy. A warmer, more coherent first impression.
          </p>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">The Brief</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">What the Business Needed</h2>
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-accent/55 md:mb-12 md:text-base">
            Anna works with tired families in Newcastle and across Australia.
            The website needed to explain her sleep consultancy packages and
            digital sleep guides, and to make the first step obvious: a free
            introductory consultation. It also needed to take payment, deliver
            a purchased guide securely, and keep customer details in the system
            she already uses.
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

      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <span className="ds-eyebrow">Design</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">The Transformation</h2>
          <div className="mb-12 max-w-2xl space-y-5 text-[15px] leading-relaxed text-accent/55 md:mb-14 md:text-base">
            <p>
              The new site carries a warmer, more cohesive visual identity.
              Headlines sit in one serif, the ground is a quiet cream, and
              photographs are framed as part of the page.
            </p>
            <p>
              Navigation names what families come for: packages, sleep guides,
              about and contact, with a free call available from every page.
              Packages are set out as ways to begin, from a free call through a
              single conversation, weekly support and email support for
              families who have already worked with Anna.
            </p>
          </div>
          <figure className="max-w-5xl">
            <Screenshot
              src="/work/seed-to-sleep/approach.jpg"
              alt="A section of the rebuilt Seed to Sleep homepage explaining understand, plan and support"
              width={2000}
              height={1310}
            />
            <figcaption className="mt-4 text-[13px] text-accent/45">
              The homepage explains the work in three steps: understand, plan
              and support.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Build</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">How the Site Works</h2>
          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-accent/55 md:text-base">
            <p>
              A family can book a free introductory consultation, choose a
              sleep package, or buy a digital sleep guide. Each path is written
              in plain language, with the next step on the page.
            </p>
            <p>
              Stripe takes payment for packages and guides. After a guide
              purchase, Resend sends an email with a secure download link that
              expires, so the file stays private. Package purchases and the
              customer&apos;s details are recorded in HubSpot, where Anna can
              see them alongside the rest of her client information.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Launch</span>
          <h2 className="ds-h2 mb-8 max-w-2xl">The Outcome</h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            Seed to Sleep now has a bespoke website with a warmer visual
            identity, a clearer path through packages and guides, Stripe
            payments, secure guide delivery, purchase emails through Resend,
            and package purchases recorded in HubSpot. The free introductory
            consultation sits at the front of the journey.
          </p>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <span className="ds-eyebrow">Gallery</span>
          <h2 className="ds-h2 mb-12 max-w-2xl md:mb-16">Project Gallery</h2>
          <div className="space-y-16 md:space-y-20">
            {gallery.map((item) => (
              <div key={item.title}>
                <h3 className="mb-6 font-heading text-2xl font-bold tracking-tight text-accent md:text-3xl">
                  {item.title}
                </h3>
                <Comparison before={item.before} after={item.after} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container">
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-accent/55 md:text-base">
            Seed to Sleep is live at seedtosleep.com.au
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary"
          >
            Visit Seed to Sleep
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>

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
            <p className="mb-1 text-[13px] text-accent/40">Client work</p>
            <Link
              href="/work/tiny-moves"
              className="group inline-flex items-center gap-2 font-heading text-xl font-bold text-accent transition-colors hover:text-primary"
            >
              Read the Tiny Moves case study
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
