import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutTemplate, Search, Send, BarChart3, ArrowRight } from 'lucide-react';

const LeadMagnet: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/#contact');
        }
    };
    return (
        <section className="py-24 px-6 bg-accent text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">We Do the Work. You Get the Results.</h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        No "marketing theory". We execute the practical tasks that actually make the phone ring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Step 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                            <Search className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">1. Local Visibility Engine</h3>
                        <p className="text-white/70 leading-relaxed mb-6">
                            We take over your Google Business Profile and local SEO. We fix your categories, optimise your photos, and build the citations that signal to Google you're the authority in Newcastle.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-sm text-white/50">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Google Map Pack Optimisation
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/50">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Review Generation Strategy
                            </li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                            <LayoutTemplate className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">2. Authority Content</h3>
                        <p className="text-white/70 leading-relaxed mb-6">
                            We write and publish articles that position you as the local expert. Not generic "AI filler" content, but verified, high-quality local guides that build trust with customers.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-sm text-white/50">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Expert Articles & Guides
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/50">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Case Studies & Customer Stories
                            </li>
                        </ul>
                    </div>

                    {/* Step 3 (The Amplifier) */}
                    <div className="md:col-span-2 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="flex-grow">
                                <div className="inline-flex items-center gap-2 bg-primary text-white border border-primary px-3 py-1 rounded-full mb-6 font-bold text-xs uppercase tracking-wider">
                                    The Unfair Advantage
                                </div>
                                <h3 className="text-3xl font-heading font-bold mb-4 text-white">3. The Distribution Cannon</h3>
                                <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">
                                    This is what other agencies can't offer. We take your new content and offer and feature it in <span className="text-white font-bold">Newcastle Digest</span>. It goes straight to 7,000+ locals' inboxes.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-white/60">
                                        <Send className="w-5 h-5 text-primary" />
                                        <span>Immediate Distribution</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/60">
                                        <BarChart3 className="w-5 h-5 text-primary" />
                                        <span>7,000+ Reach (Guaranteed)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex flex-col items-center justify-center bg-white/10 rounded-2xl p-6 min-w-[200px] border border-white/10 group-hover:bg-white/20 transition-colors">
                                <span className="text-6xl font-heading font-bold text-white mb-2">60%</span>
                                <span className="text-white/60 uppercase tracking-widest text-xs font-bold">Open Rate</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button
                        onClick={handleContactClick}
                        className="inline-flex items-center gap-3 bg-primary text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white hover:text-primary transition-all shadow-2xl shadow-primary/20"
                    >
                        Work starts in 48 hours. Let's talk.
                        <ArrowRight />
                    </button>
                    <p className="mt-6 text-white/40 font-medium italic">Newcastle's only marketing partner with distribution baked in.</p>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
