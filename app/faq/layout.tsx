import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

const CANONICAL = 'https://digeststudio.com.au/faq';

const faqEntities = [
  {
    question: 'How do we get started?',
    answer:
      'Book a free strategy call. We talk through your business, decide whether Digest Studio is a fit, and outline what would come next - usually a package or a scoped project.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes. Strategy calls are free and run through Cal.com. There is no obligation to proceed.',
  },
  {
    question: 'Do you only work with Newcastle businesses?',
    answer:
      'Most clients are in Newcastle and the Hunter. Work further afield is considered case by case.',
  },
  {
    question: 'Can you work remotely?',
    answer:
      'Yes. Most project work is remote. For local clients we can meet in Newcastle when it helps.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Visibility Boost is usually about two weeks. Local Launch Pack around three to four weeks. Custom websites depend on scope. Growth Partner is ongoing month to month.',
  },
  {
    question: 'Do you redesign existing websites?',
    answer:
      'Yes. We redesign and rebuild when the current site is holding the business back.',
  },
  {
    question: 'Can you build eCommerce websites?',
    answer:
      'Yes, for suitable products and catalogues. Scope and platforms are confirmed before work starts.',
  },
  {
    question: 'Do you use WordPress?',
    answer:
      'We choose the stack that fits the project. WordPress is an option when it makes sense; many builds use modern frameworks instead.',
  },
  {
    question: 'Can I edit my website myself?',
    answer:
      'Yes where practical. We set up editing access for content you should be able to change without a developer.',
  },
  {
    question: 'Will my website be mobile friendly?',
    answer:
      'Yes. Sites are built to work well on phones, tablets and desktops.',
  },
  {
    question: 'How long does Local SEO take?',
    answer:
      'Useful improvements can appear within weeks. Stronger ranking usually takes consistent work over several months.',
  },
  {
    question: 'Do I need Google Business Profile?',
    answer:
      'If you serve local customers, yes. A complete, accurate profile is one of the main ways people find you on Google Maps and Search.',
  },
  {
    question: 'Can you help me rank in Newcastle?',
    answer:
      'Yes. Local SEO for Newcastle and the Hunter is a core part of Digest Studio.',
  },
  {
    question: 'How does Testimo work?',
    answer:
      'After a job is completed, Testimo sends the customer through a simple flow to leave a Google review and other useful feedback.',
  },
  {
    question: 'Can I collect Google reviews automatically?',
    answer:
      'Yes. Testimo automates the request so you are not chasing reviews manually after every job.',
  },
  {
    question: 'Can I collect testimonials too?',
    answer:
      'Yes. The same flow can capture testimonials and related assets, not only star ratings.',
  },
  {
    question: 'What happens with negative feedback?',
    answer:
      'Unhappy responses can be routed privately so you can follow up before anything public is posted, depending on how the flow is set up.',
  },
  {
    question: 'What is included in Growth Partner?',
    answer:
      'Growth Partner is the monthly partnership. It typically includes local SEO, content, Newcastle Digest placement, quarterly photo or video, and Testimo for reviews.',
  },
  {
    question: 'Is there a minimum commitment for Growth Partner?',
    answer:
      'Growth Partner is month to month with no long lock-in. Details are confirmed before you start.',
  },
  {
    question: 'Can I upgrade later?',
    answer:
      'Yes. Many clients start with a once-off package and move into Growth Partner when they want ongoing work.',
  },
  {
    question: 'Can my business advertise in Newcastle Digest?',
    answer:
      'Yes. Features and placements are available through Digest Studio packages and related work.',
  },
  {
    question: 'How many subscribers does Newcastle Digest have?',
    answer:
      'Newcastle Digest has more than 7,000 subscribers, with a strong average open rate.',
  },
  {
    question: 'Who reads Newcastle Digest?',
    answer:
      'Locals in Newcastle and nearby areas who want a weekly read on food, events and what is happening around the city.',
  },
  {
    question: 'What advertising options are available in Newcastle Digest?',
    answer:
      'Options include package features and placements arranged through Digest Studio. Scope is agreed before anything goes out.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Custom websites typically start from $2,500 depending on pages and integrations. You get a clear quote before work begins.',
  },
  {
    question: 'How much does Local SEO cost?',
    answer:
      'Local SEO sits inside packages such as Visibility Boost and Growth Partner. Pricing depends on whether you want a once-off sprint or ongoing work.',
  },
  {
    question: 'Can I get a custom quote?',
    answer:
      'Yes. If a package is not the right fit, we can quote a scoped project after a strategy call.',
  },
  {
    question: 'Do you provide hosting?',
    answer:
      'Yes. Hosting can be arranged as part of the website project or ongoing support.',
  },
  {
    question: 'Can you manage my domain?',
    answer:
      'Yes. We can help with domain setup, DNS and renewals when needed.',
  },
  {
    question: 'Can you migrate an existing website?',
    answer:
      'Yes. Migrations are planned carefully so URLs, content and SEO signals are preserved where possible.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. Growth Partner includes ongoing work. Website and technical support can also be arranged after a build.',
  },
] as const;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${CANONICAL}#faq`,
  url: CANONICAL,
  mainEntity: faqEntities.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

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
      name: 'FAQ',
      item: CANONICAL,
    },
  ],
};

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description:
    'Answers to common questions about working with Digest Studio - websites, local SEO, Testimo, Growth Partner, Newcastle Digest, pricing and support.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
