import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema, ORG_ID } from '@/lib/schema';

const description =
  "We'll review your website, Google presence, reviews and local visibility and show you the 3 things we'd fix first. Limited to 10 Newcastle businesses each month.";

export const metadata: Metadata = pageMetadata({
  title: 'Free Newcastle Business Growth Audit',
  description,
  path: '/growth-audit',
  ogTitle: 'Free Newcastle Business Growth Audit | Digest Studio',
  ogDescription: description,
  ogImageAlt: 'The Newcastle Business Growth Audit from Digest Studio',
});

const crumbs = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Growth Audit', path: '/growth-audit' },
]);

const service = serviceSchema(
  'The Newcastle Business Growth Audit',
  description,
  '/growth-audit',
);

const offer = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'The Newcastle Business Growth Audit',
  description,
  url: 'https://digeststudio.com.au/growth-audit',
  price: '0',
  priceCurrency: 'AUD',
  availability: 'https://schema.org/LimitedAvailability',
  eligibleRegion: {
    '@type': 'City',
    name: 'Newcastle',
  },
  seller: {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Digest Studio',
  },
};

export default function GrowthAuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offer) }} />
      {children}
    </>
  );
}
