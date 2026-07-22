'use client';

import type { MouseEvent } from 'react';
import { ArrowRight, Star, Heart, MessageCircle, Share2 } from 'lucide-react';

const proof = [
    { value: '7,000+', label: 'local subscribers' },
    { value: '60%', label: 'avg. open rate' },
    { value: 'Owned', label: 'media, not ads' },
] as const;

export default function Hero() {
    const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative flex items-center overflow-hidden bg-white">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
                    {/* Copy */}
                    <div className="lg:col-span-5 xl:col-span-5">
                        <p className="hero-enter hero-delay-0 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/35 mb-5">
                            Newcastle marketing studio
                        </p>

                        <h1 className="hero-enter hero-delay-1 font-heading font-bold text-accent text-[2.5rem] sm:text-5xl md:text-[3.25rem] leading-[1.05] tracking-[-0.035em] mb-6">
                            Be the local business{' '}
                            <span className="text-primary">people think of first.</span>
                        </h1>

                        <p className="hero-enter hero-delay-2 text-base md:text-[17px] text-accent/55 leading-relaxed max-w-md mb-8">
                            We build your marketing - then put it in front of an audience we
                            already own. Websites, local search and content, backed by
                            Newcastle Digest.
                        </p>

                        <div className="hero-enter hero-delay-3 flex flex-col items-start gap-6">
                            <a
                                href="#contact"
                                onClick={scrollToContact}
                                className="ds-btn-primary"
                            >
                                Book a free strategy call
                                <ArrowRight className="w-4 h-4 opacity-80" />
                            </a>

                            <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[13px] text-accent/40">
                                {proof.map((item, i) => (
                                    <span
                                        key={item.label}
                                        className="inline-flex items-baseline gap-1.5"
                                    >
                                        {i > 0 && (
                                            <span className="mx-2.5 text-accent/15" aria-hidden="true">
                                                ·
                                            </span>
                                        )}
                                        <span className="font-heading font-semibold text-accent/70 tabular-nums">
                                            {item.value}
                                        </span>
                                        <span>{item.label}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Marketing ecosystem collage */}
                    <div className="lg:col-span-7 xl:col-span-7 hero-enter hero-delay-2">
                        <div
                            className="relative mx-auto w-full max-w-[600px] lg:max-w-none h-[460px] sm:h-[500px] md:h-[540px]"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-[10%] rounded-[42%] bg-accent/[0.025] blur-3xl" />

                            {/* 1 - Website browser (hero piece, ~15% larger) */}
                            <div className="absolute left-[2%] top-[4%] z-[2] w-[66%] sm:w-[64%] rounded-xl border border-[#ddd] bg-white shadow-[0_32px_64px_-28px_rgba(17,24,39,0.45)] overflow-hidden rotate-[-1.5deg]">
                                {/* Chrome */}
                                <div className="flex items-center gap-2 px-3 py-2 bg-[#f0f0f0] border-b border-[#e0e0e0]">
                                    <div className="flex items-center gap-1.5 shrink-0">
                                        <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                                        <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                                        <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
                                    </div>
                                    <div className="flex-1 flex items-center gap-1.5 h-6 rounded-md bg-white border border-[#e0e0e0] px-2.5 min-w-0">
                                        <svg className="w-2.5 h-2.5 text-[#34a853] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                        </svg>
                                        <span className="text-[10px] text-[#5f6368] truncate font-sans">
                                            harbourcoffee.com.au
                                        </span>
                                    </div>
                                </div>
                                {/* Site */}
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#f0f0f0]">
                                        <span className="text-[10px] font-heading font-bold text-accent tracking-tight">
                                            Harbour Coffee
                                        </span>
                                        <div className="hidden sm:flex items-center gap-3 text-[8px] font-medium uppercase tracking-wider text-accent/35">
                                            <span>Menu</span>
                                            <span>About</span>
                                            <span>Visit</span>
                                        </div>
                                        <span className="rounded-md bg-primary px-2 py-1 text-[8px] font-semibold text-white">
                                            Book a table
                                        </span>
                                    </div>
                                    <div className="relative px-3.5 pt-4 pb-3.5">
                                        <div className="absolute inset-x-0 top-0 h-24 bg-[#f7f5f2]" />
                                        <div className="relative">
                                            <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-primary mb-1.5">
                                                Newcastle · Est. 2019
                                            </p>
                                            <h3 className="font-heading font-bold text-[15px] sm:text-[17px] text-accent leading-[1.15] tracking-tight mb-1.5 max-w-[90%]">
                                                The neighbourhood café locals recommend first.
                                            </h3>
                                            <p className="text-[9px] text-accent/45 leading-relaxed max-w-[85%] mb-3">
                                                Specialty coffee, weekend brunch, and a spot on the
                                                Newcastle Digest shortlist.
                                            </p>
                                            <div className="flex items-center gap-2 mb-3.5">
                                                <span className="rounded-md bg-accent px-2.5 py-1.5 text-[8px] font-semibold text-white">
                                                    Find us
                                                </span>
                                                <span className="text-[8px] text-accent/40">
                                                    Open today · 7am-3pm
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-1.5">
                                                <div className="aspect-[4/3] rounded-md bg-[#e8e4df]" />
                                                <div className="aspect-[4/3] rounded-md bg-[#d4cfc8]" />
                                                <div className="aspect-[4/3] rounded-md bg-[#ece8e3]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2 - Google Search (real SERP styling) */}
                            <div className="absolute right-[0%] top-[0%] z-[4] w-[42%] sm:w-[40%] rounded-xl border border-[#dadce0] bg-white p-3.5 shadow-[0_20px_48px_-22px_rgba(17,24,39,0.4)] rotate-[2.5deg]">
                                <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#f1f3f4]">
                                    <div className="flex items-center gap-[1px] shrink-0">
                                        <span className="text-[13px] font-medium leading-none text-[#4285F4]">G</span>
                                        <span className="text-[13px] font-medium leading-none text-[#EA4335]">o</span>
                                        <span className="text-[13px] font-medium leading-none text-[#FBBC05]">o</span>
                                        <span className="text-[13px] font-medium leading-none text-[#4285F4]">g</span>
                                        <span className="text-[13px] font-medium leading-none text-[#34A853]">l</span>
                                        <span className="text-[13px] font-medium leading-none text-[#EA4335]">e</span>
                                    </div>
                                    <div className="flex-1 h-7 rounded-full bg-white border border-[#dfe1e5] shadow-sm px-2.5 flex items-center min-w-0">
                                        <span className="text-[10px] text-[#202124] truncate">
                                            cafe newcastle nsw
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-0.5">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <div className="h-4 w-4 rounded-full bg-[#fbbc04]/20 flex items-center justify-center text-[7px] font-bold text-[#b06000]">
                                            H
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[10px] text-[#202124] leading-tight truncate">
                                                Harbour Coffee
                                            </div>
                                            <div className="text-[9px] text-[#4d5156] truncate">
                                                https://harbourcoffee.com.au
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[13px] text-[#1a0dab] leading-snug font-normal hover:underline cursor-default">
                                        Harbour Coffee | Best Cafe Newcastle NSW
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px]">
                                        <span className="text-[#70757a]">4.9</span>
                                        <span className="text-[#fbbc04] tracking-[-1px] text-[9px]">★★★★★</span>
                                        <span className="text-[#70757a]">(214) · Café</span>
                                    </div>
                                    <p className="text-[10px] text-[#4d5156] leading-relaxed pt-0.5">
                                        Specialty coffee and brunch in Newcastle East. Walk-ins welcome.
                                        Open today until 3pm.
                                    </p>
                                </div>
                            </div>

                            {/* 3 - Google Business Profile */}
                            <div className="absolute left-[-1%] bottom-[14%] z-[5] w-[40%] sm:w-[37%] rounded-xl border border-[#dadce0] bg-white shadow-[0_24px_52px_-24px_rgba(17,24,39,0.42)] rotate-[-3deg] overflow-hidden">
                                <div className="relative h-[72px] sm:h-[80px] bg-[#dfe3e8]">
                                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#c5cdd6_0%,#e8ecf0_50%,#b8c2cc_100%)]" />
                                    <div className="absolute left-2.5 -bottom-4 h-10 w-10 rounded-full border-2 border-white bg-primary flex items-center justify-center shadow-sm">
                                        <span className="text-white text-[11px] font-bold">H</span>
                                    </div>
                                </div>
                                <div className="pt-6 px-2.5 pb-2.5">
                                    <div className="text-[12px] font-medium text-[#202124] leading-tight mb-0.5">
                                        Harbour Coffee
                                    </div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="text-[10px] font-medium text-[#202124]">4.9</span>
                                        <span className="text-[#fbbc04] text-[9px] tracking-[-1px]">★★★★★</span>
                                        <span className="text-[9px] text-[#70757a]">(214)</span>
                                    </div>
                                    <div className="text-[9px] text-[#70757a] mb-2">
                                        Café · Newcastle East
                                    </div>
                                    <div className="flex gap-1.5 mb-1">
                                        <span className="flex-1 text-center rounded-full bg-[#1a73e8] text-white text-[8px] font-medium py-1.5">
                                            Directions
                                        </span>
                                        <span className="flex-1 text-center rounded-full border border-[#dadce0] text-[#1a73e8] text-[8px] font-medium py-1.5">
                                            Call
                                        </span>
                                        <span className="flex-1 text-center rounded-full border border-[#dadce0] text-[#1a73e8] text-[8px] font-medium py-1.5">
                                            Website
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[8px] text-[#188038] pt-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
                                        Open · Closes 3pm
                                    </div>
                                </div>
                            </div>

                            {/* 4 - Newcastle Digest (owned distribution) */}
                            <div className="absolute right-[1%] top-[34%] z-[5] w-[44%] sm:w-[41%] rounded-xl border border-[#e4e4e4] bg-white shadow-[0_28px_56px_-26px_rgba(17,24,39,0.44)] rotate-[3.5deg] overflow-hidden">
                                <div className="bg-accent px-3 py-2">
                                    <div className="flex items-start justify-between gap-2 mb-1.5">
                                        <div className="text-[10px] font-heading font-bold text-white tracking-tight">
                                            Newcastle Digest
                                        </div>
                                        <span className="shrink-0 rounded bg-primary px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-wider text-white leading-none">
                                            Built-in Distribution
                                        </span>
                                    </div>
                                    <div className="text-[7px] text-white/45 leading-snug">
                                        Weekly newsletter · Reaches 7,000+ Newcastle locals
                                    </div>
                                </div>
                                <div className="p-2.5 space-y-2">
                                    <div className="aspect-[2.2/1] rounded-md overflow-hidden bg-[#1a1a1a] relative">
                                        <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a,#111)]" />
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <div className="text-[7px] font-semibold uppercase tracking-wider text-primary mb-0.5">
                                                Sponsored Feature
                                            </div>
                                            <div className="text-[8px] font-heading font-bold text-white leading-tight">
                                                Harbour Coffee makes the shortlist
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                                        <div className="rounded-md border border-[#ececec] bg-[#fafafa] px-2 py-1.5">
                                            <div className="text-[10px] font-heading font-bold text-accent tabular-nums leading-none">
                                                7,000+
                                            </div>
                                            <div className="text-[6px] text-accent/40 mt-0.5 uppercase tracking-wide">
                                                Subscribers
                                            </div>
                                        </div>
                                        <div className="rounded-md border border-[#ececec] bg-[#fafafa] px-2 py-1.5">
                                            <div className="text-[10px] font-heading font-bold text-accent tabular-nums leading-none">
                                                60%
                                            </div>
                                            <div className="text-[6px] text-accent/40 mt-0.5 uppercase tracking-wide">
                                                Avg open rate
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 5 - Instagram-style post */}
                            <div className="absolute right-[6%] bottom-[2%] z-[3] w-[36%] sm:w-[33%] rounded-xl border border-[#dbdbdb] bg-white shadow-[0_18px_42px_-20px_rgba(17,24,39,0.38)] rotate-[-2deg] overflow-hidden">
                                <div className="flex items-center gap-2 px-2 py-1.5">
                                    <div className="h-5 w-5 rounded-full bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] p-[1px]">
                                        <div className="h-full w-full rounded-full bg-white p-[1px]">
                                            <div className="h-full w-full rounded-full bg-primary/20" />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[9px] font-semibold text-[#262626] truncate">
                                            harbourcoffee
                                        </div>
                                    </div>
                                    <span className="text-[#262626] text-[10px] leading-none">•••</span>
                                </div>
                                <div className="aspect-square bg-[#c8bfb4] relative">
                                    <div className="absolute inset-0 bg-[linear-gradient(160deg,#d4cbc0_0%,#a89a8c_100%)]" />
                                    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-[linear-gradient(to_top,rgba(0,0,0,0.25),transparent)]" />
                                </div>
                                <div className="flex items-center gap-2.5 px-2 py-1.5 text-[#262626]">
                                    <Heart className="w-3 h-3" strokeWidth={1.75} />
                                    <MessageCircle className="w-3 h-3" strokeWidth={1.75} />
                                    <Share2 className="w-3 h-3" strokeWidth={1.75} />
                                </div>
                                <div className="px-2 pb-2">
                                    <p className="text-[8px] text-[#262626] leading-snug">
                                        <span className="font-semibold">harbourcoffee</span>{' '}
                                        <span className="text-[#262626]/90">
                                            Morning rush. Flat whites flying.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* 6 - Google review / Testimo */}
                            <div className="absolute left-[30%] bottom-[0%] z-[6] w-[38%] sm:w-[35%] rounded-xl border border-[#e8e8e8] bg-white p-3 shadow-[0_26px_52px_-22px_rgba(17,24,39,0.46)] rotate-[1.5deg]">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-6 w-6 rounded-full bg-[#4285F4] flex items-center justify-center text-[9px] font-bold text-white">
                                        S
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-medium text-[#202124] leading-tight">
                                            Sarah M.
                                        </div>
                                        <div className="text-[8px] text-[#70757a]">2 days ago</div>
                                    </div>
                                </div>
                                <div className="flex gap-[1px] mb-1.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star
                                            key={s}
                                            className="w-2.5 h-2.5 fill-[#fbbc04] text-[#fbbc04]"
                                        />
                                    ))}
                                </div>
                                <p className="text-[10px] text-[#3c4043] leading-snug mb-2">
                                    &ldquo;Booked us within a week of going live. Best marketing
                                    decision we&apos;ve made.&rdquo;
                                </p>
                                <div className="flex items-center justify-between pt-1.5 border-t border-[#f1f3f4]">
                                    <span className="text-[8px] text-[#70757a]">Google review</span>
                                    <span className="text-[8px] font-semibold uppercase tracking-wider text-primary">
                                        via Testimo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
