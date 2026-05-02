'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';

const WorkPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <h1 className="text-h1 font-heading font-bold mb-6 text-accent leading-none">
                    What we've built.
                </h1>
                <p className="text-xl text-accent/70 max-w-2xl mx-auto">
                    Before we help you grow, here's what we've already grown.
                </p>
            </section>

            {/* Section 1 — Newcastle Digest website */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative rounded-[40px] overflow-hidden shadow-2xl border border-accent/10 group bg-accent/5 aspect-video flex items-center justify-center">
                        <img 
                            src="/newcastle-digest.png" 
                            alt="Newcastle Digest Website" 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                // Fallback to placeholder if image doesn't exist yet
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('bg-primary/10');
                                const text = document.createElement('span');
                                text.innerText = 'Screenshot of newcastledigest.com';
                                text.className = 'text-primary font-bold';
                                e.currentTarget.parentElement?.appendChild(text);
                            }}
                        />
                        <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Media / Publishing</span>
                        <h2 className="text-4xl font-heading font-bold text-accent">Newcastle Digest</h2>
                        <p className="text-lg text-accent/70 leading-relaxed">
                            Designed, built, and grown by us. Newcastle's most-read local newsletter — 7,000 subscribers, 60% open rate.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link 
                                href="/work/newcastle-digest" 
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                            >
                                Read Case Study
                            </Link>
                            <Link 
                                href="https://newcastledigest.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
                            >
                                Visit Site <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 — Testimo */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">SaaS / Software</span>
                        <h2 className="text-4xl font-heading font-bold text-accent">Testimo</h2>
                        <p className="text-lg text-accent/70 leading-relaxed">
                            A full-stack Google review automation SaaS we built in-house. Live, Stripe-integrated, and included free for Growth Partner clients.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link 
                                href="/work/testimo" 
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                            >
                                Read Case Study
                            </Link>
                            <Link 
                                href="https://testimo.com.au" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
                            >
                                Visit Site <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-accent/10 group bg-accent/5 aspect-video flex items-center justify-center">
                        <img 
                            src="/Testimo.png" 
                            alt="Testimo Dashboard" 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                // Fallback to placeholder if image doesn't exist yet
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('bg-primary/10');
                                const text = document.createElement('span');
                                text.innerText = 'Screenshot of testimo.com.au';
                                text.className = 'text-primary font-bold';
                                e.currentTarget.parentElement?.appendChild(text);
                            }}
                        />
                        <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Section 3 — Newsletter issues */}
            <section className="max-w-4xl mx-auto px-6 mb-32 text-center bg-accent/5 rounded-[48px] py-20 border border-accent/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                    <Mail className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-accent mb-6">Inside the Newsletter</h2>
                <p className="text-xl text-accent/70 mb-10 max-w-2xl mx-auto">
                    Every Wednesday we write, design, and send Newcastle Digest to 7,000+ inboxes. Here's what that looks like.
                </p>
                <Link 
                    href="https://newcastledigest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                >
                    Read a recent edition <ArrowRight className="w-5 h-5" />
                </Link>
            </section>
        </div>
    );
};

export default WorkPage;
