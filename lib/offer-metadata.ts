import type { Metadata } from 'next';
import type { OfferPageData } from '@/lib/offers';
import { pageMetadata } from '@/lib/seo';

export function offerMetadata(data: OfferPageData): Metadata {
  return pageMetadata({
    title: data.seoTitle.includes('Digest Studio')
      ? data.seoTitle.replace(/\s*\|\s*Digest Studio\s*$/, '')
      : data.seoTitle,
    description: data.metaDescription,
    path: data.path,
    ogTitle: data.ogTitle ?? data.seoTitle,
  });
}
