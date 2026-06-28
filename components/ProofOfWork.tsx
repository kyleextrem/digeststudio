'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ProofOfWork: React.FC = () => {
    return (
        <section id="our-work" className="py-24 px-6 md:py-32 bg-white relative overflow-hidden text-center md:text-left">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20 pl-0 md:pl-0 md:text-center max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-6 leading-tight">
                        Built By Us. Proven Here.
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    
                    {/* Card 1 */}
                    <div className="bg-accent rounded-[32px] p-8 md:p-12 text-white flex flex-col items-start border border-accent/10 shadow-2xl relative group hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-full aspect-[16/10] bg-accent/50 rounded-2xl mb-10 overflow-hidden border border-white/10 relative">
                            {/* Newcastle Digest Image */}
                            <img 
                                src="/newcastle-digest.png" 
                                alt="Newcastle Digest website screenshot" 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>

                        <h3 className="text-3xl font-heading font-bold mb-4">From zero to Newcastle's most-read local newsletter</h3>
                        
                        <p className="text-white/70 text-lg leading-relaxed mb-8 flex-grow text-left">
                            We built Newcastle Digest from scratch. Today it reaches 7,000+ local subscribers with a 60% open rate, one of the strongest engagement rates of any local newsletter in Australia. It's not just our flagship product. It's proof we know how to build a local audience.
                        </p>

                        <div className="mb-10 inline-flex flex-wrap items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px] md:text-xs text-center w-full">
                                7,000+ Subscribers · 60% Open Rate · Built from zero
                            </span>
                        </div>

                        <Link 
                            href="/work/newcastle-digest" 
                            className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:text-white transition-colors group/link mt-auto"
                        >
                            Read Case Study <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-accent rounded-[32px] p-8 md:p-12 text-white flex flex-col items-start border border-accent/10 shadow-2xl relative group hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-full aspect-[16/10] bg-accent/50 rounded-2xl mb-10 overflow-hidden border border-white/10 relative">
                            {/* Testimo Image */}
                            <img 
                                src="/Testimo.png" 
                                alt="Testimo landing page screenshot" 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>

                        <h3 className="text-3xl font-heading font-bold mb-4">We don't just recommend tools. We build them.</h3>
                        
                        <p className="text-white/70 text-lg leading-relaxed mb-8 flex-grow text-left">
                            Testimo is our own Google review automation software, built specifically for local businesses. SMS-based, Stripe-integrated, and live at testimo.com.au. Every Growth Partner client gets it included.
                        </p>

                        <div className="mb-10 inline-flex flex-wrap items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px] md:text-xs text-center w-full">
                                Built in-house · Live product · Included in Growth Partner Plan
                            </span>
                        </div>

                        <Link 
                            href="/work/testimo" 
                            className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:text-white transition-colors group/link mt-auto"
                        >
                            Read Case Study <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProofOfWork;
