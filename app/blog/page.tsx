import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '../../lib/sanity';
import { postsQuery } from '../../lib/queries';

export const revalidate = 60;

export const metadata = {
    title: "Local Insights & Marketing Strategy | Digest Studio",
    description: "Practical marketing advice and insights specifically for Newcastle business owners from Digest Studio.",
};

async function getPosts() {
    return await client.fetch(postsQuery);
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="pt-32 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Digest Blog</span>
                        <h1 className="text-h1 font-heading font-bold">Local Insights. <span className="text-primary italic">Pure Strategy.</span></h1>
                    </div>
                    <p className="text-body text-accent/60 max-w-sm md:mb-4">
                        Practical marketing advice specifically for Newcastle business owners.
                    </p>
                </div>

                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post: any) => (
                            <Link href={`/blog/${post.slug.current}`} key={post.slug.current} className="group cursor-pointer">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-6">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                                            <span className="text-accent/20 font-bold">Digest Studio</span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary">
                                        <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-accent group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-accent/60 line-clamp-3 font-medium">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-32 text-center border-2 border-dashed border-accent/10 rounded-[48px]">
                        <h2 className="text-3xl font-heading font-bold text-accent/40 mb-4">Insights coming soon.</h2>
                        <p className="text-xl text-accent/30 max-w-md mx-auto">We're currently documenting our latest local marketing strategies. Check back shortly.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
