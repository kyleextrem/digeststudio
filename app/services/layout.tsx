import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Our Solutions | Packages for Newcastle Businesses',
  description:
    'Visibility Boost, Local Launch Pack and Growth Partner - clear packages for websites, local SEO, content and Newcastle Digest distribution.',
  path: '/services',
});

const schemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]),
  serviceSchema(
    'Digest Studio Marketing Packages',
    'Productised marketing packages for Newcastle businesses including Visibility Boost, Local Launch Pack and Growth Partner.',
    '/services',
  ),
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
