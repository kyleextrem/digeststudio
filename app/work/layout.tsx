import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Our Brands',
  description:
    "Brands we've built - Newcastle Digest and Testimo. Before helping other businesses, we built our own.",
  path: '/work',
});

const schema = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Our Brands', path: '/work' },
]);

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
