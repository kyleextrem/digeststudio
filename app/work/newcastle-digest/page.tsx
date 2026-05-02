'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NewcastleDigestCaseStudy: React.FC = () => {
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
                        How a personal email became a weekly read for thousands of <span className="text-primary italic">Newcastle</span> locals
                    </h1>

                    {/* Stat Bar */}
                    <div className="flex flex-wrap gap-4 items-center">
                        {[
                            "7,000+ Subscribers",
                            "60% Open Rate",
                            "Built from scratch"
                        ].map((stat, i) => (
                            <div key={i} className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-5 py-2.5 rounded-full">
                                <span className="text-primary font-bold uppercase tracking-widest text-[11px] md:text-xs">
                                    {stat}
                                </span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Hero Image (Optional, using the already uploaded one to add some flair) */}
                <div className="w-full aspect-video bg-accent/5 rounded-[40px] overflow-hidden mb-20 border border-accent/10 shadow-2xl relative">
                    <img 
                        src="/newcastle-digest.png" 
                        alt="Newcastle Digest Website" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                </div>

                {/* Body Copy */}
                <div className="space-y-8 text-xl text-accent/80 leading-relaxed font-medium mb-24 max-w-3xl mx-auto">
                    <p>
                        Newcastle Digest didn't start as a business idea. It started because Kyle wanted a simple way to know what was happening in his own city. What was on, what looked good, what was actually worth leaving the house for.
                    </p>
                    <p>
                        So he started writing it down and sending it to people he knew.
                    </p>
                    <p>
                        No funding. No team. No existing audience. Just a genuine interest in the city and a weekly habit of paying attention to it.
                    </p>
                    <p>
                        That simplicity turned out to be the point. Newcastle didn't need another content aggregator or a copy of what every other city newsletter was doing. It needed something written by someone who actually lived here, cared about what was happening, and could tell the difference between what was worth covering and what wasn't.
                    </p>
                    <p>
                        Locals noticed. The list grew. The open rate stayed high because the content stayed honest.
                    </p>
                    <p>
                        Today Newcastle Digest reaches 7,000+ subscribers every Wednesday with a 60% open rate. For context, the industry average sits around 40%. The gap exists because the newsletter was never built to perform metrics. It was built to be genuinely useful to the people who read it.
                    </p>
                    <p>
                        <strong className="text-accent">That foundation is what Digest Studio is built on.</strong> Before we ever worked with a client, we spent years learning what Newcastle locals click on, what they ignore, and what makes them pick up the phone. Every business we work with inherits that knowledge and that audience.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="bg-accent/5 border border-accent/10 rounded-[48px] p-12 md:p-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-6">
                        Ready to grow your Newcastle audience?
                    </h2>
                    <p className="text-lg text-accent/60 mb-10 max-w-xl mx-auto">
                        Get the same expertise, tools, and distribution that built Newcastle Digest.
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

export default NewcastleDigestCaseStudy;
