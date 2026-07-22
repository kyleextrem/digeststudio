'use client';

import React, { type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { serviceSchema } from '@/lib/schema';

export interface ProcessStep {
    title: string;
    description: string;
}

export interface LocalExample {
    headline: string;
    summary: string;
    result?: string;
}

export interface GeoServicePageProps {
    title: string;
    h1: string;
    metaDescription: string;
    serviceName: string;
    location: string;
    intro: ReactNode;
    whyItMatters?: ReactNode;
    process?: ProcessStep[];
    localExample?: LocalExample;
    ctaText: string;
    ctaLink: string;
}

const GeoServicePage: React.FC<GeoServicePageProps> = ({
    serviceName,
    h1,
    location,
    intro,
    whyItMatters,
    process,
    localExample,
    ctaText,
    ctaLink,
}) => {
    const router = useRouter();
    const schema = serviceSchema(serviceName, typeof intro === 'string' ? intro : '');

    const handleCtaClick = (e: React.MouseEvent) => {
        if (ctaLink.startsWith('#') || ctaLink.startsWith('/#')) {
            e.preventDefault();
            const id = ctaLink.replace('/#', '').replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            } else {
                router.push(ctaLink);
            }
        }
    };

    return (
        <div className="pt-20">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Breadcrumb */}
            <nav className="px-6 py-6 border-b border-accent/5" aria-label="Breadcrumb">
                <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm font-medium text-accent/50">
                    <li>
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    </li>
                    <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
                    <li>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    </li>
                    <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
                    <li className="text-accent font-bold" aria-current="page">{serviceName}</li>
                </ol>
            </nav>

            {/* Hero */}
            <section className="bg-accent py-32 px-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                            {serviceName} - {location}
                        </span>
                        <h1 className="text-h1 font-heading font-bold mb-8">{h1}</h1>
                        <div className="text-2xl text-white/60 mb-12 leading-relaxed">
                            {intro}
                        </div>
                        <Link
                            href={ctaLink}
                            onClick={handleCtaClick}
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-accent transition-all active:scale-95"
                        >
                            {ctaText}
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-h2 font-heading font-bold text-accent mb-8">
                        Why this matters for {location} businesses
                    </h2>
                    {whyItMatters ? (
                        <div className="text-xl text-accent/70 leading-relaxed font-medium">
                            {whyItMatters}
                        </div>
                    ) : (
                        <p className="text-xl text-accent/70 leading-relaxed font-medium">
                            Local customers search for businesses like yours every day. If you're not
                            showing up where {location} locals are looking, you're leaving growth on the
                            table. A focused {serviceName.toLowerCase()} strategy built for your area
                            makes sure the right people find you first.
                        </p>
                    )}
                </div>
            </section>

            {/* Process / What's Included */}
            {process && process.length > 0 && (
                <section className="py-24 px-6 bg-accent/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                                What&apos;s Included
                            </span>
                            <h2 className="text-h2 font-heading font-bold text-accent">
                                How it works
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {process.map((step, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-10 rounded-[40px] border border-accent/5 hover:border-primary/20 transition-all group"
                                >
                                    <div className="text-primary font-heading font-bold text-6xl mb-4 group-hover:scale-110 transition-transform origin-left">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
                                        {step.title}
                                    </h3>
                                    <p className="text-accent/60 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Local Example / Case Study */}
            {localExample && (
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-[32px] p-8 md:p-12">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                                Local Success Story
                            </span>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-accent">
                                {localExample.headline}
                            </h3>
                            <p className="text-lg text-accent/60 leading-relaxed mb-6">
                                {localExample.summary}
                            </p>
                            {localExample.result && (
                                <div className="flex items-start gap-4 bg-white/60 rounded-2xl p-6 border border-primary/10">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-accent font-bold text-lg">{localExample.result}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 px-6 bg-primary/5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-accent/5 border border-accent/10 rounded-[48px] p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-6">
                            Ready to grow your {location} business?
                        </h2>
                        <p className="text-lg text-accent/60 mb-10 max-w-xl mx-auto">
                            Let&apos;s talk about how {serviceName.toLowerCase()} can put your business in front of more local customers.
                        </p>
                        <Link
                            href={ctaLink}
                            onClick={handleCtaClick}
                            className="inline-flex items-center gap-4 bg-primary text-white text-xl px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
                        >
                            {ctaText}
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest">
                        <Link href="/services" className="text-accent/50 hover:text-primary transition-colors">
                            ← All Services
                        </Link>
                        <span className="text-accent/20">|</span>
                        <Link href="/visibility-audit" className="text-accent/50 hover:text-primary transition-colors">
                            Free Visibility Audit →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GeoServicePage;
