export type TestimonialId = 'cloudwize' | 'anna' | 'aaron';

export type Testimonial = {
  id: TestimonialId;
  /** Display name (person or company). */
  name: string;
  /** Optional secondary line (e.g. company context). */
  role?: string;
  initials: string;
  rating: 5;
  quote: string;
};

/**
 * Genuine client testimonials only.
 * Do not invent, embellish, or combine these quotes.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: 'cloudwize',
    name: 'Cloudwize Technologies',
    initials: 'CT',
    rating: 5,
    quote:
      "We've partnered with Kyle to support our marketing function, and the experience has been outstanding. Kyle has been exceptional to work with, bringing a collaborative and professional approach. His ability to understand our objectives and translate them into practical marketing initiatives has made a real difference.",
  },
  {
    id: 'anna',
    name: 'Anna Spiteri',
    initials: 'AS',
    rating: 5,
    quote:
      "I initially reached out to Kyle for support with a newsletter feature to target local prospects in the Newcastle area. He delivered fantastic results over several newsletter campaigns, and our more recent conversations have focused on a website revamp and an SEO strategy for my kids' music and movement business. As a small business owner, I truly appreciate working with like-minded professionals and supporting local businesses. I highly recommend Kyle for any marketing support.",
  },
  {
    id: 'aaron',
    name: 'Aaron Spiteri',
    initials: 'AS',
    rating: 5,
    quote:
      "Working with Kyle has been a breath of fresh air. He's highly professional, incredibly supportive, and nothing is ever in the 'too hard' basket. Thanks to Kyle, we're finally building a proper marketing strategy. Working directly with him is a total breeze compared to dealing with a large agency. Highly recommended.",
  },
] as const;

const byId: Record<TestimonialId, Testimonial> = {
  cloudwize: testimonials[0],
  anna: testimonials[1],
  aaron: testimonials[2],
};

/** Website / SEO pages → Anna · Growth Partner / general → Aaron · Strategy / ongoing → Cloudwize */
export function getTestimonial(
  context: 'website-seo' | 'growth-partner' | 'strategy',
): Testimonial {
  if (context === 'website-seo') return byId.anna;
  if (context === 'growth-partner') return byId.aaron;
  return byId.cloudwize;
}

export function getTestimonialById(id: TestimonialId): Testimonial {
  return byId[id];
}
