'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

const whyStudio = [
  {
    title: 'Local knowledge.',
    body: 'I live here, work here and build businesses here. Everything I recommend is grounded in the Newcastle market.',
  },
  {
    title: 'Direct access.',
    body: 'You work directly with me from the first conversation through to launch and beyond.',
  },
  {
    title: 'Built through experience.',
    body: "I don't just recommend tools and strategies - I build, use and improve them through my own businesses every day.",
  },
] as const;

const CAL = 'https://cal.com/digest/digest-studio';

export default function AboutPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      {/* Hero + full-width portrait */}
      <section className="ds-section !pb-10 md:!pb-14">
        <div className="ds-container">
          <Reveal>
            <span className="ds-eyebrow">About</span>
            <h1 className="ds-h2 mb-6 max-w-3xl !text-[2.75rem] sm:!text-5xl md:!text-[3.5rem] md:leading-[1.08]">
              Building businesses. Helping others do the same.
            </h1>
            <div className="mb-12 max-w-2xl space-y-5 md:mb-14">
              <p className="text-[15px] leading-relaxed text-accent/55 md:text-base">
                I built Newcastle Digest from zero to more than 7,000
                subscribers with a 60% average open rate - learning how to earn
                attention and trust in a local market, week by week.
              </p>
              <p className="text-[15px] leading-relaxed text-accent/55 md:text-base">
                Then I built Testimo from scratch: a platform that helps
                businesses turn completed jobs into reviews, testimonials,
                referrals and other useful follow-up.
              </p>
              <p className="text-[15px] leading-relaxed text-accent/55 md:text-base">
                Digest Studio is where those experiences meet Newcastle
                businesses that need a stronger brand, a clearer website, or
                marketing that still matters after launch day.
              </p>
              <p className="text-[15px] font-medium leading-relaxed text-accent md:text-base">
                When you work with Digest Studio, you work directly with me.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-[#ececec] bg-[#f4f4f5] sm:max-w-[280px] md:max-w-[300px]">
              <Image
                src="/kyle-profile.jpg"
                alt="Kyle, founder of Digest Studio, standing outdoors"
                width={1600}
                height={2000}
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 300px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meet Kyle */}
      <section className="border-t border-[#ececec] px-6 py-20 md:py-28">
        <div className="ds-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <span className="ds-eyebrow">Meet Kyle</span>
              <h2 className="ds-h2 max-w-sm">Why Digest Studio exists.</h2>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={80}>
              <div className="max-w-xl space-y-5 text-[15px] leading-relaxed text-accent/55 md:text-base">
                <p>
                  I didn&apos;t start Digest Studio because I wanted an agency.
                  It grew out of Newcastle Digest and Testimo - work I was
                  already doing for myself, that other businesses started asking
                  about.
                </p>
                <p>
                  What I enjoy is fairly simple: solving practical problems,
                  building useful products, and helping a business become easier
                  to find, trust and choose. That&apos;s the through-line between
                  the newsletter, the product and the studio.
                </p>
                <p>
                  So Digest Studio stays small. You get me - the same person who
                  writes the Digest, ships Testimo, and cares whether the thing
                  we build still works a few months later.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Newcastle advantage */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <Reveal>
            <h2 className="ds-h2 mb-6 max-w-2xl">
              Why Newcastle gives us an advantage.
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-accent/55 md:text-base">
              Newcastle Digest wasn&apos;t built as a marketing channel. I
              started it because there wasn&apos;t a local newsletter I wanted
              to read. Over time it became one of Newcastle&apos;s largest local
              email communities - and teaching me, edition by edition, what
              people here actually care about. That kind of understanding
              doesn&apos;t come from analytics alone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Digest Studio */}
      <section className="border-t border-[#ececec] px-6 py-20 md:py-28">
        <div className="ds-container">
          <Reveal>
            <h2 className="ds-h2 mb-10 max-w-2xl md:mb-12">
              Why Digest Studio.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {whyStudio.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="ds-card flex h-full flex-col p-8 md:p-9">
                  <h3 className="mb-4 font-heading text-xl font-bold tracking-tight text-accent md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-accent/55">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newcastle Digest */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <Reveal>
            <article>
              <Link
                href="/brands/newcastle-digest"
                className="block overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.28)]"
              >
                <img
                  src="/newcastle-digest.png"
                  alt="Newcastle Digest website homepage screenshot"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover object-top md:aspect-[2.2/1]"
                />
              </Link>
              <div className="mt-8 max-w-2xl">
                <p className="mb-2 text-[13px] text-accent/40">Owned media</p>
                <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-accent md:text-4xl">
                  Newcastle Digest
                </h2>
                <p className="mb-6 text-[15px] leading-relaxed text-accent/55 md:text-base">
                  A weekly email for locals - written because I wanted something
                  worth opening, not because I needed a lead magnet. The numbers
                  matter, but the point is the habit: showing up every week and
                  earning trust in a city I live in.
                </p>
                <div className="mb-6 flex flex-wrap gap-8">
                  <div>
                    <div className="font-heading text-xl font-bold tabular-nums text-accent">
                      7,000+
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                      Subscribers
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold tabular-nums text-accent">
                      60%
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                      Average open rate
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold tabular-nums text-accent">
                      Built from zero
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                      No team, no shortcuts
                    </div>
                  </div>
                </div>
                <Link
                  href="/brands/newcastle-digest"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-primary"
                >
                  Explore Newcastle Digest
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Testimo */}
      <section className="border-t border-[#ececec] px-6 py-20 md:py-28">
        <div className="ds-container">
          <Reveal>
            <article>
              <Link
                href="/brands/testimo"
                className="block overflow-hidden rounded-2xl border border-[#ececec] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.28)]"
              >
                <img
                  src="/Testimo.png"
                  alt="Testimo product homepage screenshot"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover object-top md:aspect-[2.2/1]"
                />
              </Link>
              <div className="mt-8 max-w-2xl">
                <p className="mb-2 text-[13px] text-accent/40">In-house product</p>
                <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-accent md:text-4xl">
                  Testimo
                </h2>
                <p className="mb-6 text-[15px] leading-relaxed text-accent/55 md:text-base">
                  Most businesses finish a job and then forget to ask for the
                  review, the quote, the photo or the referral. I built Testimo
                  to catch that moment - proof that Digest Studio ships products,
                  not just advice.
                </p>
                <div className="mb-6 flex flex-wrap gap-8">
                  <div>
                    <div className="font-heading text-xl font-bold tabular-nums text-accent">
                      In-house
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                      Built in-house
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold tabular-nums text-accent">
                      Live
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                      Live product
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold tabular-nums text-accent">
                      Included
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent/40">
                      With Growth Partner
                    </div>
                  </div>
                </div>
                <Link
                  href="/brands/testimo"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-primary"
                >
                  Explore Testimo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-[#ececec] bg-[#fafafa] px-6 py-20 md:py-28">
        <div className="ds-container">
          <Reveal>
            <h2 className="ds-h2 mb-6 max-w-2xl">
              I&apos;m not an agency using &quot;Newcastle&quot; as a keyword.
              I&apos;m building my own businesses here too.
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-accent/55 md:text-base">
              If you want practical advice, honest conversations and someone who
              actually enjoys building things - I&apos;d be glad to talk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#ececec] px-6 py-16 md:py-20">
        <div className="ds-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="max-w-2xl">
            <h2 className="mb-3 font-heading text-2xl font-bold tracking-tight text-accent md:text-3xl">
              Ready when you are.
            </h2>
            <p className="text-[15px] leading-relaxed text-accent/50 md:text-base">
              Book a free strategy call and tell me what you&apos;re working on.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-btn-primary shrink-0"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
