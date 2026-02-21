import React from 'react';
import { client, urlFor } from '../../../lib/sanity';
import { postQuery, postSlugsQuery } from '../../../lib/queries';
import PortableText from '../../../components/PortableText';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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

    return {
        title: `${post.title} | Digest Studio`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.mainImage ? [{ url: urlFor(post.mainImage).url() }] : [],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-32 pb-32 px-6">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent mb-8 leading-tight">
                        {post.title}
                    </h1>
                    {post.mainImage && (
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] mb-12">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                    {post.excerpt && (
                        <p className="text-2xl text-accent/60 font-medium leading-relaxed italic border-l-4 border-primary pl-8">
                            {post.excerpt}
                        </p>
                    )}
                </header>

                <div className="prose prose-lg max-w-none">
                    <PortableText value={post.body} />
                </div>

                <footer className="mt-20 pt-12 border-t border-accent/5">
                    <div className="bg-accent/5 p-12 rounded-[48px] text-center">
                        <h3 className="text-2xl font-heading font-bold mb-4">Want more local insights?</h3>
                        <p className="text-accent/60 mb-8 max-w-md mx-auto">
                            Join 7,000+ local Newcastle business owners getting marketing strategy delivered weekly.
                        </p>
                        <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/30 transition-all">
                            Join the Digest
                        </button>
                    </div>
                </footer>
            </div>
        </article>
    );
}
