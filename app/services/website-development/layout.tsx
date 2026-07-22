import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Website Development Newcastle | Custom-Built Sites',
  description:
    'Custom-coded websites for Newcastle businesses. No templates, no themes. Built for search, speed and enquiries.',
  path: '/services/website-development',
});

export default function WebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
