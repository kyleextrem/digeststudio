import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Local SEO Newcastle NSW | Get Found on Google',
  description:
    'Local SEO for Newcastle NSW businesses. Google Business Profile optimisation, local citations and geo-targeted content for Search and Maps.',
  path: '/local-seo-newcastle-nsw',
});

const schemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Local SEO Newcastle', path: '/local-seo-newcastle-nsw' },
  ]),
  serviceSchema(
    'Local SEO Newcastle NSW',
    'Local SEO for Newcastle NSW businesses including Google Business Profile and map pack visibility.',
    '/local-seo-newcastle-nsw',
  ),
];

export default function LocalSeoNewcastleLayout({
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
