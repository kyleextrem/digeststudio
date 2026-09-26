import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const proof = [
  { value: '7,500+', label: 'local subscribers' },
  { value: '60%', label: 'average open rate' },
  { value: 'Newcastle, NSW', label: '' },
] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 md:pb-16 md:pt-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-14">
          <div>
            <h1 className="hero-enter hero-delay-1 mb-5 font-heading text-[2.35rem] font-bold leading-[1.05] tracking-[-0.035em] text-accent sm:text-5xl lg:text-[3.15rem]">
              Marketing built for Newcastle.
              <span className="mt-1 block text-primary">With an audience behind it.</span>
            </h1>

            <p className="hero-enter hero-delay-2 mb-8 max-w-md text-base leading-relaxed text-accent/55 md:text-[17px]">
              We build websites, SEO, content and marketing systems for local businesses, then use
              Newcastle Digest to help put them in front of 7,500+ local subscribers.
            </p>

            <div className="hero-enter hero-delay-3 flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/growth-audit" className="ds-btn-primary">
                  Get a free growth audit
                  <ArrowRight className="h-4 w-4 opacity-80" />
                </Link>
                <a href="#how-it-works" className="ds-text-link px-1 py-2">
                  See how it works
                </a>
              </div>

              <p className="flex max-w-lg flex-wrap items-baseline text-[13px] leading-relaxed text-accent/60">
                {proof.map((item, index) => (
                  <span key={item.value} className="whitespace-nowrap">
                    {item.label ? (
                      <>
                        <span className="font-heading font-semibold text-accent">{item.value}</span>{' '}
                        {item.label}
                      </>
                    ) : (
                      item.value
                    )}
                    {index < proof.length - 1 && (
                      <span className="mx-2 text-accent/25" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <figure className="hero-enter hero-delay-2 min-w-0">
            <div className="overflow-hidden rounded-[28px] border border-[#ececec] bg-white shadow-[0_24px_48px_-32px_rgba(17,24,39,0.35)]">
              <div className="relative aspect-[16/9] bg-[#f7f7f8]">
                <Image
                  src="/newcastle-digest.png"
                  alt="Newcastle Digest homepage. The headline reads: The best of Newcastle, delivered directly to you."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <figcaption className="flex items-center gap-4 border-t border-[#ececec] px-4 py-3.5 sm:px-5">
                <Image
                  src="/logo-lightning.png"
                  alt="Digest Studio"
                  width={931}
                  height={376}
                  className="h-9 w-auto shrink-0 sm:h-10"
                />
                <div className="min-w-0 border-l border-[#ececec] pl-4">
                  <p className="font-heading text-[15px] font-bold tracking-tight text-accent">
                    Newcastle Digest
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug text-accent/55">
                    Owned local audience · 7,500+ subscribers
                  </p>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
