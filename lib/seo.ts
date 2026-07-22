import type { Metadata } from 'next';

export const SITE_URL = 'https://digeststudio.com.au';
export const SITE_NAME = 'Digest Studio';
export const DEFAULT_OG_IMAGE = '/og-image.png';
export const DEFAULT_OG_ALT = 'Digest Studio - Newcastle marketing studio';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  /** Use absolute title (ignores root title.template). */
  absoluteTitle?: boolean;
};

/** Build consistent title, description, canonical, Open Graph and Twitter metadata. */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_ALT,
  type = 'website',
  noIndex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle =
    ogTitle ?? (title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`);
  const socialDescription = ogDescription ?? description;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: SITE_NAME,
      locale: 'en_AU',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
