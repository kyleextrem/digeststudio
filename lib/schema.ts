export const SITE_URL = 'https://digeststudio.com.au';
export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const LOGO_URL = `${SITE_URL}/logo-lightning.png`;

export const AREAS_SERVED = [
  'Newcastle',
  'Lake Macquarie',
  'Port Stephens',
  'Maitland',
  'Cessnock',
] as const;

export const SAME_AS = [
  'https://www.linkedin.com/company/digestmediaco/',
  'https://www.instagram.com/digeststudio_/',
  'https://www.facebook.com/newcastledigest/',
] as const;

const areaServedPlaces = AREAS_SERVED.map((name) => ({
  '@type': 'City' as const,
  name,
  containedInPlace: {
    '@type': 'AdministrativeArea' as const,
    name: 'New South Wales',
    containedInPlace: {
      '@type': 'Country' as const,
      name: 'Australia',
    },
  },
}));

export const founderPerson = {
  '@type': 'Person' as const,
  '@id': FOUNDER_ID,
  name: 'Kyle',
  jobTitle: 'Founder',
  url: `${SITE_URL}/about`,
  worksFor: { '@id': ORG_ID },
  description:
    'Founder of Digest Studio. Built Newcastle Digest and Testimo. Marketing and CRM background. Works directly with clients.',
  image: `${SITE_URL}/kyle-profile.jpg`,
};

export const organizationSchema = {
  '@type': 'Organization' as const,
  '@id': ORG_ID,
  name: 'Digest Studio',
  legalName: 'Digest Studio',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject' as const,
    url: LOGO_URL,
  },
  image: LOGO_URL,
  telephone: '+61417668744',
  email: 'info@digeststudio.com.au',
  founder: { '@id': FOUNDER_ID },
  foundingLocation: {
    '@type': 'Place' as const,
    name: 'Newcastle, New South Wales, Australia',
  },
  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: 'Newcastle',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  sameAs: [...SAME_AS],
  contactPoint: {
    '@type': 'ContactPoint' as const,
    telephone: '+61417668744',
    email: 'info@digeststudio.com.au',
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: ['English'],
  },
};

export const localBusinessSchema = {
  '@type': 'ProfessionalService' as const,
  '@id': LOCAL_BUSINESS_ID,
  name: 'Digest Studio',
  url: SITE_URL,
  image: LOGO_URL,
  logo: LOGO_URL,
  telephone: '+61417668744',
  email: 'info@digeststudio.com.au',
  priceRange: '$$',
  description:
    'Independent marketing studio in Newcastle NSW. Websites, local SEO, reputation management, content marketing, CRM and AI search optimisation.',
  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: 'Newcastle',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates' as const,
    latitude: -32.9283,
    longitude: 151.7817,
  },
  areaServed: areaServedPlaces,
  founder: { '@id': FOUNDER_ID },
  parentOrganization: { '@id': ORG_ID },
  sameAs: [...SAME_AS],
  contactPoint: {
    '@type': 'ContactPoint' as const,
    telephone: '+61417668744',
    email: 'info@digeststudio.com.au',
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: ['English'],
  },
};

export const websiteSchema = {
  '@type': 'WebSite' as const,
  '@id': WEBSITE_ID,
  name: 'Digest Studio',
  url: SITE_URL,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-AU',
  description:
    'Digest Studio - Newcastle marketing studio founded by Kyle. Websites, local SEO, content and reputation for local businesses.',
};

/** Homepage JSON-LD: Organization, LocalBusiness, WebSite, Person, ContactPoint */
export const homepageGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    founderPerson,
  ],
};

/** @deprecated Prefer homepageGraph or localBusinessSchema - kept for existing imports */
export const legacyLocalBusinessSchema = {
  '@context': 'https://schema.org',
  ...localBusinessSchema,
  '@type': 'MarketingAgency',
};

export function serviceSchema(name: string, description: string, path?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: path ? `${SITE_URL}${path}` : undefined,
    provider: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Digest Studio',
    },
    areaServed: AREAS_SERVED.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

export function personAboutSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      founderPerson,
      {
        ...organizationSchema,
        founder: { '@id': FOUNDER_ID },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: 'About Kyle | Digest Studio',
        about: { '@id': FOUNDER_ID },
        isPartOf: { '@id': WEBSITE_ID },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About Kyle',
              item: `${SITE_URL}/about`,
            },
          ],
        },
      },
    ],
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    image: input.image ? [input.image] : [LOGO_URL],
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Kyle',
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Digest Studio',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    inLanguage: 'en-AU',
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[],
  pageUrl: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
