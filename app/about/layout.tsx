import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, personAboutSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'About Kyle',
  description:
    "Hi, I'm Kyle - founder of Digest Studio in Newcastle. I build websites, products and media brands, including Newcastle Digest and Testimo.",
  path: '/about',
  ogImage: '/kyle-profile.jpg',
  ogImageAlt: 'Kyle, founder of Digest Studio',
});

const schemas = [
  personAboutSchema(),
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Kyle', path: '/about' },
  ]),
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
