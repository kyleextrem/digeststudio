import { MetadataRoute } from 'next';
import { client } from '../lib/sanity';
import { postSlugsQuery } from '../lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://digeststudio.com.au';
    let blogPosts: MetadataRoute.Sitemap = [];

    try {
        // Fetch all blog post slugs from Sanity
        const slugs = await client.fetch(postSlugsQuery);

        blogPosts = slugs.map((slug: string) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));
    } catch (e) {
        console.error('Sitemap: Sanity unavailable or misconfigured, skipping blog posts', e);
    }

    const staticPages = ['', '/services', '/about', '/blog', '/faq', '/privacy', '/terms'].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1.0 : 0.8,
        })
    );

    return [...staticPages, ...blogPosts];
}
