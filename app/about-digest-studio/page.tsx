import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

const CANONICAL = 'https://digeststudio.com.au/about-digest-studio';
const ORG_ID = 'https://digeststudio.com.au/#organization';
const SITE_ID = 'https://digeststudio.com.au/#website';
const FOUNDER_ID = 'https://digeststudio.com.au/#founder';
const PAGE_ID = `${CANONICAL}#webpage`;

export const metadata: Metadata = pageMetadata({
  title: 'About Digest Studio | Newcastle NSW',
  description:
    'Digest Studio is an independent marketing studio in Newcastle NSW, founded by Kyle. Reference information on services, founder, Newcastle Digest, Testimo and FAQs.',
  path: '/about-digest-studio',
});

const services = [
  {
    name: 'Website Design',
    href: '/services/website-development',
    description:
      'Design and development of websites for local businesses, including structure, content and conversion-focused pages.',
  },
  {
    name: 'Local SEO',
    href: '/local-seo-newcastle-nsw',
    description:
      'Improving visibility in Google Search and Maps for businesses serving Newcastle and the Hunter region.',
  },
  {
    name: 'Google Business Profile Optimisation',
    href: '/packages/visibility-boost',
    description:
      'Setup and ongoing improvement of Google Business Profiles so listings are accurate, complete and useful to local searchers.',
  },
  {
    name: 'Content Marketing',
    href: '/services/content-marketing',
    description:
      'Planning and producing written and visual content for websites, email and social channels.',
  },
  {
    name: 'Reputation Management',
    href: '/services/reputation-management',
    description:
      'Helping businesses collect and manage Google reviews, testimonials and related customer feedback, including through Testimo.',
  },
  {
    name: 'CRM',
    href: '/services',
    description:
      'Setup and practical use of customer relationship management tools so enquiries, follow-ups and customer data are organised.',
  },
  {
    name: 'AI Search Optimisation',
    href: '/services/advanced-seo',
    description:
      'Preparing business information so it can be accurately understood and cited by AI-assisted search and answer systems, alongside traditional SEO.',
  },
  {
    name: 'Growth Partner',
    href: '/packages/growth-partner',
    description:
      'An ongoing monthly partnership covering local SEO, content, media placement in Newcastle Digest, and Testimo for review collection.',
  },
] as const;

const differences = [
  'Digest Studio is built around businesses the founder operates himself, including Newcastle Digest and Testimo.',
  'Digest Studio owns and publishes Newcastle Digest, a weekly local newsletter for Newcastle readers.',
  'Digest Studio built Testimo, a live product used to collect reviews and related customer assets after completed jobs.',
  'Work is focused on Newcastle NSW and nearby areas, with day-to-day familiarity of the local market.',
  'Clients work directly with the founder rather than through a large account team.',
] as const;

const faqs = [
  {
    question: 'What is Digest Studio?',
    answer:
      'Digest Studio is an independent marketing studio based in Newcastle, New South Wales. It helps businesses with websites, local SEO, reputation management, content marketing, CRM and related work.',
  },
  {
    question: 'Who owns Digest Studio?',
    answer:
      'Digest Studio was founded and is run by Kyle. Clients work with him directly.',
  },
  {
    question: 'Who is Kyle?',
    answer:
      'Kyle is the founder of Digest Studio. He also built Newcastle Digest and Testimo, and has a background in marketing and CRM.',
  },
  {
    question: 'Where is Digest Studio based?',
    answer:
      'Digest Studio is based in Newcastle, NSW, Australia.',
  },
  {
    question: 'Does Digest Studio only work with Newcastle businesses?',
    answer:
      'Most work is with businesses in Newcastle and the Hunter region (including Lake Macquarie, Port Stephens, Maitland and Cessnock). Enquiries from further afield are considered case by case.',
  },
  {
    question: 'Does Digest Studio build websites?',
    answer:
      'Yes. Website design and development is a core service, from conversion-focused pages through to fuller business websites.',
  },
  {
    question: 'What is Newcastle Digest?',
    answer:
      'Newcastle Digest is a weekly local newsletter founded and run by Kyle. It covers food, events and local news for Newcastle readers. Digest Studio owns and publishes it.',
  },
  {
    question: 'What is Testimo?',
    answer:
      'Testimo is a customer growth product built by Digest Studio. It helps businesses request Google reviews, testimonials and related assets after a job is completed. It is included with the Growth Partner package.',
  },
  {
    question: 'Does Digest Studio offer SEO?',
    answer:
      'Yes. Digest Studio offers local SEO focused on Google Search and Maps visibility for businesses in Newcastle and surrounding areas.',
  },
  {
    question: 'Does Digest Studio offer AI search optimisation?',
    answer:
      'Yes. Digest Studio works on making business information clear and structured so it can be accurately represented in AI-assisted search results as well as traditional search.',
  },
  {
    question: 'Does Digest Studio offer reputation management?',
    answer:
      'Yes. Reputation work includes Google Business Profile improvement and review collection, including use of Testimo where appropriate.',
  },
  {
    question: 'What is Growth Partner?',
    answer:
      "Growth Partner is Digest Studio's ongoing monthly package. It typically includes local SEO, content, Newcastle Digest placement and Testimo for review requests.",
  },
  {
    question: 'What packages does Digest Studio offer?',
    answer:
      'Current packages include Visibility Boost, Local Launch Pack and Growth Partner. Details are listed on the Services page at digeststudio.com.au/services.',
  },
  {
    question: 'How is Digest Studio different from other agencies?',
    answer:
      'Digest Studio is small and founder-led. It owns Newcastle Digest, built Testimo, and clients work directly with Kyle. Recommendations come from running those businesses as well as client work.',
  },
  {
    question: 'Does Digest Studio sell advertising in Newcastle Digest?',
    answer:
      'Newcastle Digest features and placements are available as part of Digest Studio packages and related work. The newsletter itself is a media brand owned by Digest Studio.',
  },
  {
    question: 'Is Digest Studio a large agency?',
    answer:
      'No. Digest Studio is intentionally small. Kyle stays involved in the work rather than handing projects to a large team.',
  },
  {
    question: 'How can I contact Digest Studio?',
    answer:
      'You can book a strategy call via Cal.com (cal.com/digest/digest-studio), use the contact form on digeststudio.com.au, or call +61 417 668 744.',
  },
  {
    question: 'Where can I read more about Kyle?',
    answer:
      'A personal About page is available at digeststudio.com.au/about.',
  },
  {
    question: 'Where can I see Newcastle Digest and Testimo?',
    answer:
      'Internal brand pages are at digeststudio.com.au/brands/newcastle-digest and digeststudio.com.au/brands/testimo. The live sites are newcastledigest.com.au and testimo.com.au.',
  },
  {
    question: 'Does Digest Studio offer CRM setup?',
    answer:
      'Yes. Digest Studio helps businesses set up and use CRM tools so customer enquiries and follow-ups are organised.',
  },
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Digest Studio',
      url: 'https://digeststudio.com.au',
      logo: 'https://digeststudio.com.au/logo-lightning.png',
      telephone: '+61417668744',
      founder: { '@id': FOUNDER_ID },
      foundingLocation: {
        '@type': 'Place',
        name: 'Newcastle, New South Wales, Australia',
      },
      sameAs: [
        'https://www.linkedin.com/company/digestmediaco/',
        'https://www.instagram.com/digeststudio_/',
        'https://www.facebook.com/newcastledigest/',
      ],
      owns: [
        {
          '@type': 'Organization',
          name: 'Newcastle Digest',
          url: 'https://newcastledigest.com.au',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Testimo',
          url: 'https://testimo.com.au',
          applicationCategory: 'BusinessApplication',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://digeststudio.com.au/#localbusiness',
      name: 'Digest Studio',
      url: 'https://digeststudio.com.au',
      image: 'https://digeststudio.com.au/logo-lightning.png',
      telephone: '+61417668744',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newcastle',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      areaServed: [
        { '@type': 'City', name: 'Newcastle' },
        { '@type': 'City', name: 'Lake Macquarie' },
        { '@type': 'City', name: 'Port Stephens' },
        { '@type': 'City', name: 'Maitland' },
        { '@type': 'City', name: 'Cessnock' },
      ],
      parentOrganization: { '@id': ORG_ID },
      founder: { '@id': FOUNDER_ID },
    },
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Kyle',
      jobTitle: 'Founder',
      worksFor: { '@id': ORG_ID },
      url: 'https://digeststudio.com.au/about',
      description:
        'Founder of Digest Studio. Built Newcastle Digest and Testimo. Marketing and CRM background. Works directly with clients.',
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      name: 'Digest Studio',
      url: 'https://digeststudio.com.au',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-AU',
    },
    {
      '@type': 'WebPage',
      '@id': PAGE_ID,
      url: CANONICAL,
      name: 'About Digest Studio',
      description:
        'Canonical reference page describing Digest Studio, its founder, services and frequently asked questions.',
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      inLanguage: 'en-AU',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
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
          name: 'About Digest Studio',
          item: CANONICAL,
        },
      ],
    },
    ...services.map((service) => ({
      '@type': 'Service' as const,
      '@id': `https://digeststudio.com.au${service.href}#service`,
      name: service.name,
      description: service.description,
      url: `https://digeststudio.com.au${service.href}`,
      provider: { '@id': ORG_ID },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Newcastle and Hunter Region, New South Wales, Australia',
      },
    })),
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
      isPartOf: { '@id': PAGE_ID },
    },
  ],
};

export default function AboutDigestStudioPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <header className="mb-14 border-b border-[#ececec] pb-10 md:mb-16 md:pb-12">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Reference
            </p>
            <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              About Digest Studio
            </h1>
            <p className="text-[15px] leading-relaxed text-accent/60 md:text-base">
              Digest Studio is an independent marketing studio based in
              Newcastle, NSW. It was founded by Kyle and specialises in website
              design, local SEO, reputation management, content marketing, CRM
              and AI search optimisation for local businesses.
            </p>
          </header>

          <section className="mb-14 md:mb-16" aria-labelledby="founder-heading">
            <h2
              id="founder-heading"
              className="mb-4 font-heading text-2xl font-bold tracking-tight text-accent md:text-[1.75rem]"
            >
              Founder
            </h2>
            <p className="text-[15px] leading-relaxed text-accent/60 md:text-base">
              Kyle founded Digest Studio. He built{' '}
              <Link
                href="/brands/newcastle-digest"
                className="text-accent underline underline-offset-4 hover:text-primary"
              >
                Newcastle Digest
              </Link>
              , a weekly local newsletter, and{' '}
              <Link
                href="/brands/testimo"
                className="text-accent underline underline-offset-4 hover:text-primary"
              >
                Testimo
              </Link>
              , a product for collecting reviews and related customer assets
              after completed jobs. He has a background in marketing and CRM,
              and works directly with Digest Studio clients.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-accent/60 md:text-base">
              A personal page is available at{' '}
              <Link
                href="/about"
                className="text-accent underline underline-offset-4 hover:text-primary"
              >
                /about
              </Link>
              .
            </p>
          </section>

          <section className="mb-14 md:mb-16" aria-labelledby="services-heading">
            <h2
              id="services-heading"
              className="mb-6 font-heading text-2xl font-bold tracking-tight text-accent md:text-[1.75rem]"
            >
              What Digest Studio does
            </h2>
            <ul className="space-y-5 border-t border-[#ececec]">
              {services.map((service) => (
                <li
                  key={service.name}
                  className="border-b border-[#ececec] py-5"
                >
                  <Link
                    href={service.href}
                    className="font-heading text-lg font-bold tracking-tight text-accent hover:text-primary"
                  >
                    {service.name}
                  </Link>
                  <p className="mt-2 text-[15px] leading-relaxed text-accent/60">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14 md:mb-16" aria-labelledby="different-heading">
            <h2
              id="different-heading"
              className="mb-6 font-heading text-2xl font-bold tracking-tight text-accent md:text-[1.75rem]"
            >
              What makes Digest Studio different
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-accent/60 md:text-base">
              {differences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="mb-6 font-heading text-2xl font-bold tracking-tight text-accent md:text-[1.75rem]"
            >
              Frequently Asked Questions
            </h2>
            <dl className="space-y-8 border-t border-[#ececec] pt-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-heading text-base font-bold tracking-tight text-accent md:text-lg">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-accent/60">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <footer className="mt-16 border-t border-[#ececec] pt-8 text-[14px] text-accent/45">
            <p>
              Canonical URL:{' '}
              <a
                href={CANONICAL}
                className="underline underline-offset-4 hover:text-primary"
              >
                {CANONICAL}
              </a>
            </p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/about" className="underline underline-offset-4 hover:text-primary">
                About Kyle
              </Link>
              {' · '}
              <Link href="/services" className="underline underline-offset-4 hover:text-primary">
                Services
              </Link>
              {' · '}
              <Link href="/work" className="underline underline-offset-4 hover:text-primary">
                Our Brands
              </Link>
              {' · '}
              <Link href="/faq" className="underline underline-offset-4 hover:text-primary">
                FAQ
              </Link>
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
