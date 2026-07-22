import { client, urlFor } from '../../../lib/sanity';
import { postQuery, postSlugsQuery } from '../../../lib/queries';
import PortableText from '../../../components/PortableText';
import VisibilityAuditCTA from '../../../components/VisibilityAuditCTA';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/seo';

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : `${SITE_URL}/og-image.png`;

  return {
    title: `${post.title} | Digest Studio`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: 'Digest Studio',
      locale: 'en_AU',
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).url()
    : undefined;

  const schemas = [
    articleSchema({
      title: post.title,
      description: post.excerpt || post.title,
      path: `/blog/${slug}`,
      image: imageUrl,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${slug}` },
    ]),
  ];

  return (
    <article className="px-6 pb-32 pt-32">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="mx-auto max-w-3xl">
        <header className="mb-12">
          <div className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary">
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <h1 className="mb-8 font-heading text-4xl font-bold leading-tight text-accent md:text-6xl">
            {post.title}
          </h1>
          {post.mainImage && (
            <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[32px]">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}
          {post.excerpt && (
            <p className="border-l-4 border-primary pl-8 text-2xl font-medium italic leading-relaxed text-accent/60">
              {post.excerpt}
            </p>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>

        <p className="mt-12 text-[15px] text-accent/50">
          Related:{' '}
          <Link href="/services" className="underline underline-offset-4 hover:text-primary">
            Packages
          </Link>
          {' · '}
          <Link href="/faq" className="underline underline-offset-4 hover:text-primary">
            FAQ
          </Link>
          {' · '}
          <Link href="/about" className="underline underline-offset-4 hover:text-primary">
            About Kyle
          </Link>
        </p>

        <VisibilityAuditCTA variant="blog" />
      </div>
    </article>
  );
}
