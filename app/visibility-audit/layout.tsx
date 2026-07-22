import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Free Newcastle Local Business Visibility Audit',
  description:
    'Find out how visible your Newcastle business is to local customers. Free 2-minute audit from Digest Studio.',
  path: '/visibility-audit',
});

const schema = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Visibility Audit', path: '/visibility-audit' },
]);

export default function VisibilityAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
