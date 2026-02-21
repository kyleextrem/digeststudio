import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ValueEquation from "@/components/ValueEquation";
import LeadMagnet from "@/components/LeadMagnet";
import ContactForm from "@/components/ContactForm";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Be the Newcastle Business Locals Think of First",
    description: "The only Newcastle marketing studio with distribution baked in. We optimize your local presence and feature you to 7,000+ local subscribers.",
};

export default function Home() {
    return (
        <>
            <Hero />

            <ValueEquation />

            <LeadMagnet />

            {/* Contact Section - Premium Dual Booking & Form */}
            <section id="contact" className="py-24 px-6 md:py-40 bg-[#FBFBFC] relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-flex items-center gap-3 bg-white shadow-sm px-5 py-2 rounded-full mb-8 border border-accent/5">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[11px]">Growth Partner Intake Open</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-accent mb-8 tracking-tight">
                            Start your <span className="text-primary italic">Newcastle</span> growth
                        </h2>
                        <p className="text-xl md:text-2xl text-accent/60 max-w-2xl mx-auto leading-relaxed font-medium">
                            A quick strategy call is the fastest path to clarity. Choose the method that works for your schedule.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch relative">

                        {/* Booking Card */}
                        <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.04)] border border-accent/5 flex flex-col relative overflow-hidden group hover:border-primary/20 transition-all duration-700">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full -mr-40 -mt-20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-10">
                                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                                        <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Recommended</span>
                                    </div>
                                    <div className="text-accent/10 font-black text-6xl select-none">01</div>
                                </div>

                                <h3 className="text-4xl font-heading font-bold text-accent mb-6 leading-tight">Book a 15-min discovery call</h3>
                                <p className="text-lg text-accent/60 mb-12 leading-relaxed">
                                    No pitch. We'll map out your current presence and see if our local distribution model is the right engine for your growth.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                                    {[
                                        "Local Presence Audit",
                                        "Distribution Review",
                                        "Pricing Transparency",
                                        "Zero Sales Pressure",
                                        "Strategy Roadmap",
                                        "Quick 15 Min Chat"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-accent/80">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="font-bold text-[16px]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://cal.com/digest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white text-xl px-12 py-7 rounded-3xl font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-5 w-full group/btn relative overflow-hidden active:scale-[0.98]"
                                >
                                    <span className="relative z-10 uppercase tracking-widest">Schedule Call</span>
                                    <Clock className="w-7 h-7 opacity-50 group-hover/btn:rotate-12 transition-transform relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                </a>

                                <div className="mt-10 flex items-center justify-center gap-3 text-accent/30 text-[12px] font-bold uppercase tracking-[0.2em]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
                                    Usually available within 48h
                                </div>
                            </div>
                        </div>

                        {/* Middle OR Divider */}
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border border-accent/5 shadow-2xl items-center justify-center text-accent/20 font-black z-20 pointer-events-none text-sm group">
                            <div className="absolute inset-2 border-2 border-dashed border-accent/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            OR
                        </div>

                        {/* Contact Form Card */}
                        <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.04)] border border-accent/5 flex flex-col relative overflow-hidden group hover:border-accent/10 transition-all duration-700">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-10">
                                    <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 px-4 py-2 rounded-full">
                                        <span className="text-accent/60 font-bold uppercase tracking-widest text-[11px]">Direct Message</span>
                                    </div>
                                    <div className="text-accent/5 font-black text-6xl select-none">02</div>
                                </div>

                                <h3 className="text-4xl font-heading font-bold text-accent mb-6 leading-tight">Prefer to email?</h3>
                                <p className="text-lg text-accent/60 leading-relaxed mb-12">
                                    Drop us a note with your details and we'll get back to you with a personal response within 24 hours.
                                </p>

                                <div className="flex-grow hubspot-form-wrap">
                                    <ContactForm />
                                </div>

                                <div className="mt-10 pt-10 border-t border-accent/5 text-center">
                                    <p className="text-accent/20 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Encrypted & Secure Communication
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
