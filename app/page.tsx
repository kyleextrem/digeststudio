import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import ProofOfWork from '@/components/ProofOfWork';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, Check } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  title: 'Be the Newcastle Business Locals Think of First',
  description:
    'The only Newcastle marketing studio with distribution baked in. Websites, local SEO and content - backed by Newcastle Digest and 7,000+ subscribers.',
  path: '/',
  absoluteTitle: true,
});

const callBenefits = [
  "A clear view of what's working",
  "Where you're invisible locally",
  'How Digest distribution fits',
  'Next steps - with no pitch deck',
] as const;

const homeBreadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }}
      />
      <Hero />

      <WhyChooseUs />

      <OurServices />

      <ProofOfWork />

      <Testimonials />

      <section id="contact" className="ds-section bg-accent text-white">
        <div className="ds-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div>
              <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Book a call
              </span>
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-[1.12] sm:text-4xl md:text-[2.75rem]">
                Tell us where you want to be found.
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/55 md:text-lg">
                A free strategy call. We look at your presence, your market, and
                whether Digest Studio is the right fit.
              </p>

              <a
                href="https://cal.com/digest/digest-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                Book a free strategy call
                <ArrowRight className="h-4 w-4 opacity-80" />
              </a>

              <p className="mt-6 text-[14px] text-white/40">
                Prefer to read first? See the{' '}
                <Link
                  href="/faq"
                  className="text-white/70 underline underline-offset-4 hover:text-white"
                >
                  FAQ
                </Link>
                ,{' '}
                <Link
                  href="/about"
                  className="text-white/70 underline underline-offset-4 hover:text-white"
                >
                  About Kyle
                </Link>
                , or{' '}
                <Link
                  href="/services"
                  className="text-white/70 underline underline-offset-4 hover:text-white"
                >
                  packages
                </Link>
                .
              </p>

              <ul className="mt-10 space-y-3">
                {callBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-white/65"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary stroke-[2.5]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[13px] text-white/35">
                Usually available within 48 hours · Newcastle, NSW
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white p-6 md:p-8">
              <p className="mb-5 text-[13px] font-medium text-accent/40">
                Prefer email? We reply within one business day.
              </p>
              <div className="hubspot-form-wrap contact-form-lite">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
