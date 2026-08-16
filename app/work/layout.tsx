import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Work',
  description:
    'Client case studies and brands from Digest Studio - including Tiny Moves, Newcastle Digest and Testimo.',
  path: '/work',
});

const schema = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
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
