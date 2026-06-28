'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    ArrowRight,
    BarChart3,
    Camera,
    ChevronRight,
    MapPin,
    Minus,
    Newspaper,
    Plus,
    Share2,
} from 'lucide-react';

const included = [
    {
        icon: MapPin,
        title: 'Local SEO & Google Business Profile',
        desc: 'We manage your GBP listing, build and maintain local citations, and optimise your site\'s on-page SEO every month, so when someone searches for what you do in Newcastle, you\'re the one they find.',
        highlight: false,
    },
    {
        icon: Share2,
        title: 'Content & Social (8-12 posts/month)',
        desc: 'Consistent social content keeps your business visible between searches. We plan, write, and post it, so you don\'t have to think about what to post next.',
        highlight: false,
    },
    {
        icon: Camera,
        title: 'Quarterly Content Shoot',
        desc: 'Every quarter, we run a professional photo and video shoot for your business: fresh, real content instead of recycled stock imagery.',
        highlight: false,
    },
    {
        icon: Newspaper,
        title: 'Guaranteed Newcastle Digest Feature',
        desc: 'Every quarter, your business gets featured directly to our 7,300 Newcastle Digest subscribers. A level of local reach no SEO or social post can match on its own.',
        highlight: true,
    },
    {
        icon: BarChart3,
        title: 'Monthly Reporting & Strategy',
        desc: 'You\'ll always know what\'s working. Monthly insights show real movement, and quarterly strategy sessions keep the plan sharp as your business changes.',
        highlight: false,
    },
];

const steps = [
    {
        num: '01',
        label: 'Month 1',
        title: 'Foundation',
        desc: 'GBP fully optimised, local SEO audit completed, citations cleaned up, content calendar built',
    },
    {
        num: '02',
        label: 'Month 2',
        title: 'Momentum',
        desc: 'Consistent posting begins, first quarterly shoot scheduled, early ranking movement tracked',
    },
    {
        num: '03',
        label: 'Month 3',
        title: 'Compounding',
        desc: 'First Digest feature goes out, reporting shows clear before/after, strategy session refines next quarter',
    },
];

const faqItems = [
    {
        question: 'Is there a lock-in contract?',
        answer: 'No. It\'s month-to-month. We earn the renewal every month rather than locking you into one.',
    },
    {
        question: 'What if I already have a website?',
        answer: 'No problem. The Growth Partner Plan works alongside any existing site. If your site needs work too, we can fold that into the plan or handle it separately.',
    },
    {
        question: 'How is this different from just boosting posts on social media?',
        answer: 'Boosted posts disappear the moment you stop paying. SEO and GBP work compounds: rankings, reviews, and citations keep working for you well after the work is done.',
    },
    {
        question: 'Do I need the Local Launch Pack first?',
        answer: 'No. The Growth Partner Plan stands on its own. The Local Launch Pack is a good starting point if you need a website built first, but they\'re not dependent on each other.',
    },
];

const GrowthPartnerPage: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
                        Growth Partner Plan
                    </li>
                </ol>
            </nav>

            {/* Hero */}
            <section className="bg-accent py-32 px-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                            Growth Partner Plan
                        </span>
                        <h1 className="text-h1 font-heading font-bold mb-8">
                            Marketing That Actually{' '}
                            <span className="text-primary italic">Compounds</span>
                        </h1>
                        <p className="text-2xl text-white/60 mb-12 leading-relaxed">
                            Most local businesses treat marketing like a tap: turn it on, get a burst, turn it off.
                            The Growth Partner Plan is built differently. Consistent SEO, content, and visibility
                            work every month, so your business keeps showing up and keeps getting found, long after
                            a one-off campaign would&apos;ve faded.
                        </p>
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-accent transition-all active:scale-95"
                        >
                            Become a Growth Partner
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        <p className="mt-6 text-white/50 font-bold text-lg">
                            $1,999/month. No lock-in contracts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-h2 font-heading font-bold text-accent mb-8">
                        One-off marketing fixes nothing
                    </h2>
                    <p className="text-xl text-accent/70 leading-relaxed font-medium">
                        A new website helps. A single ad campaign helps. But neither one keeps working three
                        months later. Local SEO takes consistency. Google Business Profile needs regular activity
                        to stay visible. Content needs to keep going out to stay relevant. Most Newcastle
                        businesses do marketing in bursts, then wonder why the results faded as fast as they came.
                    </p>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 px-6 bg-accent/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            The Plan
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent">
                            Everything your local visibility needs, handled every month
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {included.map((item, i) => (
                            <div
                                key={i}
                                className={`rounded-[32px] p-8 md:p-10 border-2 transition-all ${
                                    item.highlight
                                        ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30'
                                        : 'bg-white border-accent/5 hover:border-primary/20'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                                            item.highlight ? 'bg-primary text-white' : 'bg-primary/5'
                                        }`}
                                    >
                                        <item.icon
                                            className={`w-7 h-7 ${item.highlight ? 'text-white' : 'text-primary'}`}
                                        />
                                    </div>
                                    <div>
                                        {item.highlight && (
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                                Exclusive to Digest Studio
                                            </span>
                                        )}
                                        <h3 className="text-2xl font-heading font-bold mb-3 text-accent">
                                            {item.title}
                                        </h3>
                                        <p className="text-accent/60 font-medium leading-relaxed text-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
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
                            First 90 Days
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent">
                            What the first 90 days look like
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="bg-white p-10 rounded-[40px] border border-accent/5 hover:border-primary/20 transition-all group"
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
                        Built for businesses ready to stop starting over
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed font-medium">
                        If you&apos;ve tried marketing in bursts, a campaign here, a website refresh there, and
                        felt like you were starting from zero every time, this is built to fix that. The Growth
                        Partner Plan is for businesses that want visibility to keep building, month after month,
                        instead of resetting to zero every time the budget runs out.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-accent/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            FAQ
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent">
                            Common questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div
                                key={i}
                                className={`border-2 rounded-[32px] overflow-hidden transition-all ${
                                    openFaq === i
                                        ? 'border-primary bg-primary/[0.02]'
                                        : 'border-accent/5 bg-white'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-8 flex items-center justify-between text-left group gap-4"
                                >
                                    <span
                                        className={`text-xl md:text-2xl font-heading font-bold transition-colors ${
                                            openFaq === i
                                                ? 'text-primary'
                                                : 'text-accent group-hover:text-primary'
                                        }`}
                                    >
                                        {item.question}
                                    </span>
                                    <div
                                        className={`p-2 rounded-full transition-all flex-shrink-0 ${
                                            openFaq === i
                                                ? 'bg-primary text-white rotate-180'
                                                : 'bg-accent/5 text-accent'
                                        }`}
                                    >
                                        {openFaq === i ? <Minus size={24} /> : <Plus size={24} />}
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${
                                        openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-8 pt-0 text-lg text-accent/60 leading-relaxed border-t border-accent/5 mx-8">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-primary/5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-accent/5 border border-accent/10 rounded-[48px] p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-6">
                            Stop starting over every quarter
                        </h2>
                        <p className="text-lg text-accent/60 mb-10 max-w-xl mx-auto">
                            Join the Growth Partner Plan and let your visibility compound, month after month.
                        </p>
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-4 bg-primary text-white text-xl px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
                        >
                            Become a Growth Partner
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

export default GrowthPartnerPage;
