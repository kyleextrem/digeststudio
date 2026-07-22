import { Star } from 'lucide-react';
import {
  getTestimonial,
  getTestimonialById,
  type Testimonial,
  type TestimonialId,
} from '@/lib/testimonials';

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="mb-5 flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
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

type Props =
  | { context: 'website-seo' | 'growth-partner' | 'strategy'; id?: never }
  | { id: TestimonialId; context?: never };

export default function TestimonialQuote(props: Props) {
  const t: Testimonial =
    'id' in props && props.id
      ? getTestimonialById(props.id)
      : getTestimonial(props.context!);

  return (
    <figure className="max-w-2xl">
      <Stars rating={t.rating} />
      <blockquote className="mb-8 font-heading text-xl leading-[1.35] tracking-tight text-accent md:text-2xl">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/[0.06] font-heading text-[13px] font-bold tracking-tight text-accent"
          aria-hidden
        >
          {t.initials}
        </div>
        <div className="text-[14px] font-semibold text-accent">{t.name}</div>
      </figcaption>
    </figure>
  );
}

/** Map offer landing pages to the most relevant genuine testimonial. */
export function testimonialContextForOffer(
  offerId: string,
): 'website-seo' | 'growth-partner' | 'strategy' {
  if (
    offerId === 'website-development' ||
    offerId === 'advanced-seo' ||
    offerId === 'visibility-boost' ||
    offerId === 'local-launch-pack'
  ) {
    return 'website-seo';
  }
  if (offerId === 'growth-partner') {
    return 'growth-partner';
  }
  // content-marketing, paid-ads - general marketing
  return 'growth-partner';
}
