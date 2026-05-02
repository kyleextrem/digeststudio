'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimoCaseStudy: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            <article className="max-w-4xl mx-auto px-6">
                
                {/* Back Link */}
                <Link 
                    href="/work" 
                    className="inline-flex items-center gap-2 text-accent/50 hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest mb-16"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Work
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent mb-12 leading-[1.1]">
                        How we built our own review automation tool because nothing else did the job properly
                    </h1>

                    {/* Stat Bar */}
                    <div className="flex flex-wrap gap-4 items-center">
                        {[
                            "Built in-house",
                            "SMS + Stripe integrated",
                            "Included in Growth Partner Plan"
                        ].map((stat, i) => (
                            <div key={i} className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-5 py-2.5 rounded-full">
                                <span className="text-primary font-bold uppercase tracking-widest text-[11px] md:text-xs">
                                    {stat}
                                </span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Hero Image */}
                <div className="w-full aspect-video bg-accent/5 rounded-[40px] overflow-hidden mb-20 border border-accent/10 shadow-2xl relative">
                    <img 
                        src="/Testimo.png" 
                        alt="Testimo Dashboard" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                </div>

                {/* Body Copy */}
                <div className="space-y-8 text-xl text-accent/80 leading-relaxed font-medium mb-24 max-w-3xl mx-auto">
                    <p>
                        Google reviews matter. Most local businesses know this. The problem is actually getting them consistently without making it awkward or adding another task to an already full plate.
                    </p>
                    <p>
                        The existing tools were either built for enterprise, priced for enterprise, or so complicated they never got used. None of them were built with a Newcastle tradie or a Beaumont St restaurant in mind.
                    </p>
                    <p>
                        So we built one ourselves.
                    </p>
                    <p>
                        <strong className="text-accent">Testimo</strong> is a review automation tool built specifically for local businesses. The idea is simple. A business sends a customer an SMS with a direct link to leave a Google review. Automated follow-ups handle the rest. No chasing, no awkward asks at the counter, no relying on customers to remember.
                    </p>
                    <p>
                        Under the hood it's a full-stack application. SMS delivery, automated follow-up sequences, a live review dashboard, QR code generation for physical locations, and AI-suggested replies for incoming reviews. Built from scratch, integrated with Stripe, and live at <a href="https://testimo.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline decoration-primary/30 underline-offset-4">testimo.com.au</a>.
                    </p>
                    <p>
                        We built it because we kept recommending review tools to businesses and none of them were good enough. Building it ourselves meant we could make it exactly what local businesses actually need rather than a watered-down version of something designed for a national chain.
                    </p>
                    <p>
                        Every Growth Partner client gets Testimo included. More Google reviews without changing how you run your business.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="bg-accent/5 border border-accent/10 rounded-[48px] p-12 md:p-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-6">
                        Ready to grow your Newcastle audience?
                    </h2>
                    <p className="text-lg text-accent/60 mb-10 max-w-xl mx-auto">
                        Get the same expertise, tools, and distribution that built Testimo.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-4 bg-primary text-white text-xl px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
                    >
                        Work with us
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>

            </article>
        </div>
    );
};

export default TestimoCaseStudy;
