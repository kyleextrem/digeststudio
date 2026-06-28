'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    ArrowRight,
    ChevronRight,
    Code2,
    Gauge,
    Search,
    TrendingUp,
} from 'lucide-react';

const whatYouGet = [
    {
        icon: Code2,
        title: 'Built from scratch',
        desc: 'Every page coded specifically for your business, your services, your customers',
    },
    {
        icon: Gauge,
        title: 'Fast by default',
        desc: 'Custom code means no bloat. Sites typically load in under 2 seconds',
    },
    {
        icon: Search,
        title: 'Built to be found',
        desc: 'Proper technical SEO foundations from day one: page structure, meta data, site speed, mobile performance',
    },
    {
        icon: TrendingUp,
        title: 'Yours to grow',
        desc: 'Built on modern infrastructure that scales as your business does, not locked into a theme you\'ll outgrow',
    },
];

const steps = [
    {
        num: '01',
        label: 'Day 1-2',
        title: 'Discovery',
        desc: 'We talk through your business, your customers, and what the site needs to do',
    },
    {
        num: '02',
        label: 'Day 3-7',
        title: 'Build',
        desc: 'Your site gets built, page by page, with real content, not placeholder text',
    },
    {
        num: '03',
        label: 'Day 8-11',
        title: 'Review',
        desc: 'You see it, we refine it based on your feedback',
    },
    {
        num: '04',
        label: 'Day 12-14',
        title: 'Launch',
        desc: 'Site goes live, connected to your domain, ready for customers',
    },
];

const WebsiteDevelopmentPage: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === '/') {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/#contact');
        }
    };

    return (
        <div className="pt-20">
            {/* Breadcrumb */}
            <nav className="px-6 py-6 border-b border-accent/5" aria-label="Breadcrumb">
                <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm font-medium text-accent/50">
                    <li>
                        <Link href="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                    </li>
                    <li aria-hidden="true">
                        <ChevronRight className="w-4 h-4" />
                    </li>
                    <li>
                        <Link href="/services" className="hover:text-primary transition-colors">
                            Services
                        </Link>
                    </li>
                    <li aria-hidden="true">
                        <ChevronRight className="w-4 h-4" />
                    </li>
                    <li className="text-accent font-bold" aria-current="page">
                        Website Development
                    </li>
                </ol>
            </nav>

            {/* Hero */}
            <section className="bg-accent py-32 px-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                            Website Development
                        </span>
                        <h1 className="text-h1 font-heading font-bold mb-8">
                            A Custom Website, Live in{' '}
                            <span className="text-primary italic">14 Days</span>
                        </h1>
                        <p className="text-2xl text-white/60 mb-12 leading-relaxed">
                            No templates. No drag-and-drop builders. Every site is custom coded for speed,
                            search, and conversions, built specifically for your business, not bent into shape
                            from someone else&apos;s theme.
                        </p>
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-accent transition-all active:scale-95"
                        >
                            Start Your Website
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-h2 font-heading font-bold text-accent mb-8">
                        Most Newcastle businesses are running on a template that&apos;s working against them
                    </h2>
                    <p className="text-xl text-accent/70 leading-relaxed font-medium">
                        Squarespace and Wix sites look fine until you check the page speed score. Slow load
                        times, bloated code, and generic structure all hurt how Google sees your site, and
                        how customers experience it on their phone. A template wasn&apos;t built for your
                        business. It was built to be built fast, for anyone.
                    </p>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 px-6 bg-accent/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            The Difference
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent">
                            What a custom build actually means
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whatYouGet.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-10 rounded-[40px] border border-accent/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                                    <item.icon className="text-primary w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
                                    {item.title}
                                </h3>
                                <p className="text-accent/60 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            The Process
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent">
                            Idea to live site in 14 days
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="bg-white p-10 rounded-[40px] border border-accent/5 hover:border-primary/20 transition-all group relative"
                            >
                                <div className="text-primary font-heading font-bold text-6xl mb-4 group-hover:scale-110 transition-transform origin-left">
                                    {step.num}
                                </div>
                                <span className="inline-block bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full text-primary font-bold uppercase tracking-widest text-xs mb-4">
                                    {step.label}
                                </span>
                                <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
                                    {step.title}
                                </h3>
                                <p className="text-accent/60 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-24 px-6 bg-accent text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <h2 className="text-h2 font-heading font-bold mb-8">
                        Built for Newcastle businesses who are done waiting
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed font-medium">
                        If you&apos;re a trade, a local service, a café, or a professional practice that
                        needs a site that actually represents the business, not a holding page, this is
                        built for you.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-primary/5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-accent/5 border border-accent/10 rounded-[48px] p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-6">
                            Ready for a website that&apos;s actually yours?
                        </h2>
                        <p className="text-lg text-accent/60 mb-10 max-w-xl mx-auto">
                            Tell us about your business. We&apos;ll have your new site live within 14 days.
                        </p>
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-4 bg-primary text-white text-xl px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
                        >
                            Get Started
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Related links */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest">
                        <Link
                            href="/services"
                            className="text-accent/50 hover:text-primary transition-colors"
                        >
                            ← All Services
                        </Link>
                        <span className="text-accent/20">|</span>
                        <Link
                            href="/visibility-audit"
                            className="text-accent/50 hover:text-primary transition-colors"
                        >
                            Free Visibility Audit →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDevelopmentPage;
