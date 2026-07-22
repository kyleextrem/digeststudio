'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const CAL = 'https://cal.com/digest/digest-studio';

function FaqItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#ececec]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
        aria-expanded={open}
      >
        <span className="font-heading text-lg font-bold tracking-tight text-accent md:text-xl">
          {question}
        </span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-primary md:h-6 md:w-6" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-accent/30 md:h-6 md:w-6" />
        )}
      </button>
      {open && (
        <div className="pb-6 pr-10 text-[15px] leading-relaxed text-accent/55 md:pb-7 md:text-base [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          {children}
        </div>
      )}
    </div>
  );
}

const categories = [
  {
    id: 'working-together',
    title: 'Working Together',
    items: [
      {
        question: 'How do we get started?',
        answer: (
          <>
            Book a free strategy call. We talk through your business, decide
            whether Digest Studio is a fit, and outline what would come next  - 
            usually a{' '}
            <Link href="/services">package</Link> or a scoped project.
          </>
        ),
      },
      {
        question: 'Do you offer free consultations?',
        answer: (
          <>
            Yes. Strategy calls are free. You can{' '}
            <a href={CAL} target="_blank" rel="noopener noreferrer">
              book one here
            </a>
            . There is no obligation to proceed.
          </>
        ),
      },
      {
        question: 'Do you only work with Newcastle businesses?',
        answer: (
          <>
            Most clients are in Newcastle and the Hunter. Work further afield is
            considered case by case. More context is on{' '}
            <Link href="/about-digest-studio">About Digest Studio</Link>.
          </>
        ),
      },
      {
        question: 'Can you work remotely?',
        answer:
          'Yes. Most project work is remote. For local clients we can meet in Newcastle when it helps.',
      },
      {
        question: 'How long does a typical project take?',
        answer: (
          <>
            <Link href="/packages/visibility-boost">Visibility Boost</Link> is
            usually about two weeks.{' '}
            <Link href="/packages/local-launch-pack">Local Launch Pack</Link>{' '}
            around three to four weeks. Custom websites depend on scope.{' '}
            <Link href="/packages/growth-partner">Growth Partner</Link> is
            ongoing month to month.
          </>
        ),
      },
    ],
  },
  {
    id: 'websites',
    title: 'Websites',
    items: [
      {
        question: 'Do you redesign existing websites?',
        answer: (
          <>
            Yes. We redesign and rebuild when the current site is holding the
            business back. See{' '}
            <Link href="/services/website-development">website development</Link>
            .
          </>
        ),
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
    ],
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    items: [
      {
        question: 'How long does Local SEO take?',
        answer: (
          <>
            Useful improvements can appear within weeks. Stronger ranking usually
            takes consistent work over several months. Read more on{' '}
            <Link href="/local-seo-newcastle-nsw">Local SEO in Newcastle</Link>.
          </>
        ),
      },
      {
        question: 'Do I need Google Business Profile?',
        answer: (
          <>
            If you serve local customers, yes. A complete profile is one of the
            main ways people find you on Maps and Search. GBP work is included in{' '}
            <Link href="/packages/visibility-boost">Visibility Boost</Link> and
            ongoing SEO packages.
          </>
        ),
      },
      {
        question: 'Can you help me rank in Newcastle?',
        answer: (
          <>
            Yes. Local SEO for Newcastle and the Hunter is core work for Digest
            Studio. Start with{' '}
            <Link href="/local-seo-newcastle-nsw">Local SEO</Link> or{' '}
            <Link href="/services/advanced-seo">advanced SEO</Link>.
          </>
        ),
      },
    ],
  },
  {
    id: 'reputation',
    title: 'Reputation Management',
    items: [
      {
        question: 'How does Testimo work?',
        answer: (
          <>
            After a job is completed, Testimo sends the customer through a simple
            flow to leave a Google review and other useful feedback. Full detail
            is on the{' '}
            <Link href="/brands/testimo">Testimo</Link> page and{' '}
            <Link href="/services/reputation-management">
              reputation management
            </Link>
            .
          </>
        ),
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
    ],
  },
  {
    id: 'growth-partner',
    title: 'Growth Partner',
    items: [
      {
        question: 'What is included?',
        answer: (
          <>
            Growth Partner is the monthly partnership. It typically includes local
            SEO, content, Newcastle Digest placement, quarterly photo or video,
            and Testimo. See the full list on{' '}
            <Link href="/packages/growth-partner">Growth Partner</Link>.
          </>
        ),
      },
      {
        question: 'Is there a minimum commitment?',
        answer:
          'Growth Partner is month to month with no long lock-in. Details are confirmed before you start.',
      },
      {
        question: 'Can I upgrade later?',
        answer: (
          <>
            Yes. Many clients start with{' '}
            <Link href="/packages/visibility-boost">Visibility Boost</Link> or{' '}
            <Link href="/packages/local-launch-pack">Local Launch Pack</Link>{' '}
            and move into Growth Partner when they want ongoing work.
          </>
        ),
      },
    ],
  },
  {
    id: 'newcastle-digest',
    title: 'Newcastle Digest',
    items: [
      {
        question: 'Can my business advertise?',
        answer: (
          <>
            Yes. Features and placements are available through Digest Studio
            packages and related work. See{' '}
            <Link href="/brands/newcastle-digest">Newcastle Digest</Link> and{' '}
            <Link href="/services">packages</Link>.
          </>
        ),
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
        question: 'What advertising options are available?',
        answer:
          'Options include package features and placements arranged through Digest Studio. Scope is agreed before anything goes out.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    items: [
      {
        question: 'How much does a website cost?',
        answer: (
          <>
            Custom websites typically start from $2,500 depending on pages and
            integrations. Details are on{' '}
            <Link href="/services/website-development">website development</Link>
            . You get a clear quote before work begins.
          </>
        ),
      },
      {
        question: 'How much does Local SEO cost?',
        answer: (
          <>
            Local SEO sits inside packages such as{' '}
            <Link href="/packages/visibility-boost">Visibility Boost</Link> ($750
            once-off) and{' '}
            <Link href="/packages/growth-partner">Growth Partner</Link> ($1,999
            /month). Pricing depends on once-off vs ongoing work.
          </>
        ),
      },
      {
        question: 'Can I get a custom quote?',
        answer: (
          <>
            Yes. If a package is not the right fit, we can quote a scoped project
            after a{' '}
            <a href={CAL} target="_blank" rel="noopener noreferrer">
              strategy call
            </a>
            . Full package list:{' '}
            <Link href="/services">Our Solutions</Link>.
          </>
        ),
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    items: [
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
        answer: (
          <>
            Yes. Migrations are planned carefully so URLs, content and SEO
            signals are preserved where possible. Talk through it on a{' '}
            <a href={CAL} target="_blank" rel="noopener noreferrer">
              strategy call
            </a>
            .
          </>
        ),
      },
      {
        question: 'Do you provide ongoing support?',
        answer: (
          <>
            Yes.{' '}
            <Link href="/packages/growth-partner">Growth Partner</Link> includes
            ongoing work. Website and technical support can also be arranged
            after a build.
          </>
        ),
      },
    ],
  },
] as const;

export default function FAQPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <section className="ds-section !pb-12 md:!pb-16">
        <div className="ds-container max-w-3xl">
          <span className="ds-eyebrow">FAQ</span>
          <h1 className="ds-h2 mb-5 !text-[2.5rem] sm:!text-5xl md:!text-[3.25rem]">
            Questions people ask before we work together.
          </h1>
          <p className="ds-lede max-w-xl">
            Straight answers on websites, local SEO, Testimo, Growth Partner and
            Newcastle Digest.
          </p>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 pb-20 md:pb-28">
        <div className="ds-container max-w-3xl space-y-16 md:space-y-20">
          {categories.map((category) => (
            <div key={category.id} id={category.id}>
              <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight text-accent md:text-3xl">
                {category.title}
              </h2>
              <div className="mt-4 border-t border-[#ececec]">
                {category.items.map((item, i) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    defaultOpen={category.id === 'working-together' && i === 0}
                  >
                    {item.answer}
                  </FaqItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container flex max-w-3xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight text-accent md:text-3xl">
              Still have a question?
            </h2>
            <p className="text-[15px] leading-relaxed text-accent/50 md:text-base">
              Book a free strategy call.
            </p>
          </div>
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary shrink-0"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </section>
    </div>
  );
}
