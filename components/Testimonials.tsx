import { Star } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mb-5 flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-primary text-primary"
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="ds-section bg-white">
      <div className="ds-container">
        <div className="mb-14 max-w-2xl md:mb-16">
          <span className="ds-eyebrow">Client feedback</span>
          <h2 className="ds-h2">What clients say.</h2>
        </div>

        <div className="grid grid-cols-1 gap-0 border-t border-[#ececec] md:grid-cols-3 md:gap-0">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className={`flex flex-col border-b border-[#ececec] py-10 md:border-b-0 md:px-8 md:py-12 first:md:pl-0 last:md:pr-0 ${
                i > 0 ? 'md:border-l md:border-[#ececec]' : ''
              }`}
            >
              <Stars rating={t.rating} />

              <blockquote className="mb-10 flex-1 font-heading text-xl leading-[1.35] tracking-tight text-accent md:text-[1.25rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/[0.06] font-heading text-[13px] font-bold tracking-tight text-accent"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-accent">
                    {t.name}
                  </div>
                  {t.role && (
                    <div className="mt-0.5 text-[13px] text-accent/45">
                      {t.role}
                    </div>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
