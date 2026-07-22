'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    LayoutTemplate,
    MapPin,
    PenSquare,
    Star,
    Newspaper,
} from 'lucide-react';

const services = [
    {
        icon: LayoutTemplate,
        title: 'Website Design',
        outcome: 'Convert visitors into enquiries',
        description:
            'Fast, clear sites built for local businesses - not templates dressed up as brands.',
        href: '/services/website-development',
    },
    {
        icon: MapPin,
        title: 'Local SEO',
        outcome: 'Show up on Maps & Search',
        description:
            'Rank where Newcastle customers already look - Google Search and Google Maps.',
        href: '/local-seo-newcastle-nsw',
    },
    {
        icon: PenSquare,
        title: 'Content Marketing',
        outcome: 'Stay top of mind',
        description:
            'Photography, video, email and social that make your business feel unavoidable.',
        href: '/services/content-marketing',
    },
    {
        icon: Star,
        title: 'Reputation',
        outcome: 'More Google reviews',
        description:
            'Automated review generation with Testimo - built in-house, included with us.',
        href: '/services/reputation-management',
    },
    {
        icon: Newspaper,
        title: 'Local Advertising',
        outcome: 'Reach 7,000+ locals',
        description:
            'Feature your business in Newcastle Digest and campaigns that land in real inboxes.',
        href: '/services/local-advertising',
    },
] as const;

export default function OurServices() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="ds-section bg-white"
        >
            <div className="ds-container">
                <div
                    className={`max-w-2xl mb-14 md:mb-16 transition-all duration-700 ease-out ${
                        visible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-5'
                    }`}
                >
                    <span className="ds-eyebrow">What we do</span>
                    <h2 className="ds-h2 mb-5">
                        One marketing system.
                        <br className="hidden sm:block" />
                        Five ways in.
                    </h2>
                    <p className="ds-lede max-w-lg">
                        Pick a starting point. We connect the rest - so your website,
                        search, content, reviews and local reach work as one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isSecondRow = i >= 3;
                        const colClass = isSecondRow
                            ? i === 3
                                ? 'md:col-span-2 md:col-start-2'
                                : 'md:col-span-2'
                            : 'md:col-span-2';

                        return (
                            <Link
                                key={service.title}
                                href={service.href}
                                className={`group ds-card-interactive ${colClass} flex flex-col p-7 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                                    visible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                }`}
                                style={{
                                    transitionDelay: visible
                                        ? `${80 + i * 50}ms`
                                        : '0ms',
                                }}
                            >
                                <div className="flex items-start justify-between gap-4 mb-8">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.04] transition-colors duration-300 group-hover:bg-primary/[0.08]">
                                        <Icon className="h-5 w-5 text-accent stroke-[1.5] transition-colors duration-300 group-hover:text-primary" />
                                    </div>
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary text-right leading-snug max-w-[9rem]">
                                        {service.outcome}
                                    </span>
                                </div>

                                <h3 className="font-heading font-bold text-xl text-accent tracking-tight mb-2.5">
                                    {service.title}
                                </h3>

                                <p className="text-[14px] text-accent/50 leading-relaxed flex-1 mb-7">
                                    {service.description}
                                </p>

                                <span className="ds-text-link group-hover:text-primary">
                                    Learn more
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
