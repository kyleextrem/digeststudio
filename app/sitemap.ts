import { MetadataRoute } from 'next';
import { client } from '../lib/sanity';
import { postSlugsQuery } from '../lib/queries';

const BASE_URL = 'https://digeststudio.com.au';

type Freq = MetadataRoute.Sitemap[number]['changeFrequency'];

const staticRoutes: { path: string; freq: Freq; priority: number }[] = [
    { path: '',                              freq: 'weekly',  priority: 1.0 },
    { path: '/services',                     freq: 'weekly',  priority: 0.9 },
    { path: '/packages/visibility-boost',    freq: 'weekly',  priority: 0.9 },
    { path: '/packages/local-launch-pack',   freq: 'weekly',  priority: 0.9 },
    { path: '/packages/growth-partner',      freq: 'weekly',  priority: 0.9 },
    { path: '/services/website-development', freq: 'weekly',  priority: 0.9 },
    { path: '/services/content-marketing',   freq: 'weekly',  priority: 0.9 },
    { path: '/services/paid-ads',            freq: 'weekly',  priority: 0.9 },
    { path: '/services/advanced-seo',        freq: 'weekly',  priority: 0.9 },
    { path: '/services/reputation-management', freq: 'weekly', priority: 0.9 },
    { path: '/services/local-advertising',   freq: 'weekly',  priority: 0.9 },
    { path: '/about',                        freq: 'monthly', priority: 0.7 },
    { path: '/about-digest-studio',          freq: 'monthly', priority: 0.8 },
    { path: '/work',                         freq: 'monthly', priority: 0.7 },
    { path: '/brands/newcastle-digest',      freq: 'monthly', priority: 0.8 },
    { path: '/brands/testimo',               freq: 'monthly', priority: 0.8 },
    { path: '/blog',                         freq: 'weekly',  priority: 0.8 },
    { path: '/local-seo-newcastle-nsw',       freq: 'weekly',  priority: 0.9 },
    { path: '/visibility-audit',             freq: 'monthly', priority: 0.8 },
    { path: '/faq',                          freq: 'monthly', priority: 0.7 },
    { path: '/privacy',                      freq: 'yearly',  priority: 0.3 },
    { path: '/terms',                        freq: 'yearly',  priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let blogPosts: MetadataRoute.Sitemap = [];

    try {
        const slugs: string[] = await client.fetch(postSlugsQuery);
        blogPosts = slugs.map((slug) => ({
            url: `${BASE_URL}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as Freq,
            priority: 0.7,
        }));
    } catch (e) {
        console.error('Sitemap: Sanity unavailable, skipping blog posts', e);
    }

    const pages: MetadataRoute.Sitemap = staticRoutes.map(({ path, freq, priority }) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
    }));

    return [...pages, ...blogPosts];
}
