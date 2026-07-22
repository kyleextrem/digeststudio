'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const brands = [
    {
        name: 'Newcastle Digest',
        role: 'Owned media',
        href: '/brands/newcastle-digest',
        cta: 'See how Digest was built',
        image: '/newcastle-digest.png',
        imageAlt: 'Newcastle Digest homepage',
        browserUrl: 'newcastledigest.com.au',
        description:
            "Newcastle's largest local newsletter. Built from an empty list into a media brand locals actually open.",
        metrics: [
            { value: '7,000+', label: 'Subscribers' },
            { value: '60%', label: 'Open rate' },
            { value: 'Weekly', label: 'Publish cadence' },
        ],
    },
    {
        name: 'Testimo',
        role: 'In-house product',
        href: '/brands/testimo',
        cta: 'See how Testimo works',
        image: '/Testimo.png',
        imageAlt: 'Testimo product screenshot',
        browserUrl: 'testimo.com.au',
        description:
            'Review generation for Australian local businesses. We built it - and clients get it with us.',
        metrics: [
            { value: 'Google', label: 'Review focus' },
            { value: 'Automated', label: 'Request flow' },
            { value: 'Included', label: 'With Growth Partner' },
        ],
    },
] as const;

export default function ProofOfWork() {
    return (
        <section id="our-work" className="ds-section bg-[#fafafa] border-y border-[#ececec]">
            <div className="ds-container">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
                    <div className="max-w-2xl">
                        <span className="ds-eyebrow">We practice what we sell</span>
                        <h2 className="ds-h2">
                            Our own brands are the brief.
                        </h2>
                    </div>
                    <p className="ds-lede max-w-sm md:text-right md:pb-1">
                        We don&apos;t recommend what we haven&apos;t built, run, and grown ourselves.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {brands.map((brand) => (
                        <Link
                            key={brand.name}
                            href={brand.href}
                            className="group ds-card-interactive flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                        >
                            <div className="relative bg-[#f4f4f5]">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e8e8e8] bg-[#ebebec]">
                                    <div className="flex items-center gap-1.5" aria-hidden="true">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                    </div>
                                    <div className="flex-1 h-7 rounded-lg bg-white border border-[#e0e0e0] px-3 flex items-center min-w-0">
                                        <span className="text-[12px] text-accent/40 truncate">
                                            {brand.browserUrl}
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-[16/10] overflow-hidden bg-white">
                                    <img
                                        src={brand.image}
                                        alt={brand.imageAlt}
                                        width={1200}
                                        height={750}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 px-7 py-7 md:px-8 md:py-8">
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <h3 className="font-heading font-bold text-2xl text-accent tracking-tight">
                                        {brand.name}
                                    </h3>
                                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent/35">
                                        {brand.role}
                                    </span>
                                </div>

                                <p className="text-[15px] text-accent/55 leading-relaxed mb-6">
                                    {brand.description}
                                </p>

                                <div className="grid grid-cols-3 gap-3 mb-7 pt-5 border-t border-[#ececec]">
                                    {brand.metrics.map((m) => (
                                        <div key={m.label}>
                                            <div className="font-heading font-bold text-lg md:text-xl text-accent tracking-tight tabular-nums leading-none mb-1.5">
                                                {m.value}
                                            </div>
                                            <div className="text-[11px] text-accent/40 leading-snug">
                                                {m.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <span className="ds-text-link mt-auto group-hover:text-primary">
                                    {brand.cta}
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
