import { MetadataRoute } from 'next';
import { client } from '../lib/sanity';
import { postSlugsQuery } from '../lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://digeststudio.com.au';

    // Fetch all blog post slugs
    const slugs = await client.fetch(postSlugsQuery);

    const blogPosts = slugs.map((slug: string) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
    }));

    const routes = ['', '/services', '/about', '/blog', '/faq', '/privacy', '/terms'].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
        })
    );

    return [...routes, ...blogPosts];
}
