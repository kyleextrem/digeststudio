import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '../../lib/sanity';
import { postsQuery } from '../../lib/queries';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const revalidate = 60;

export const metadata = pageMetadata({
  title: 'Local Insights & Marketing Strategy',
  description:
    'Practical marketing advice and insights specifically for Newcastle business owners from Digest Studio.',
  path: '/blog',
});

const schema = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
]);

async function getPosts() {
  return await client.fetch(postsQuery);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="px-6 pb-32 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
              The Digest Blog
            </span>
            <h1 className="text-h1 font-heading font-bold">
              Local Insights. <span className="text-primary italic">Pure Strategy.</span>
            </h1>
          </div>
          <p className="max-w-sm text-body text-accent/60 md:mb-4">
            Practical marketing advice specifically for Newcastle business owners.
            Also see our{' '}
            <Link href="/faq" className="font-medium text-accent underline underline-offset-4 hover:text-primary">
              FAQ
            </Link>{' '}
            and{' '}
            <Link href="/services" className="font-medium text-accent underline underline-offset-4 hover:text-primary">
              packages
            </Link>
            .
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: { slug: { current: string }; title: string; publishedAt: string; mainImage?: unknown; excerpt?: string }) => (
              <Link
                href={`/blog/${post.slug.current}`}
                key={post.slug.current}
                className="group cursor-pointer"
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[32px]">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-accent/5">
                      <span className="font-bold text-accent/20">Digest Studio</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="line-clamp-2 font-heading text-2xl font-bold text-accent transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="line-clamp-3 text-accent/55">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-accent/50">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
