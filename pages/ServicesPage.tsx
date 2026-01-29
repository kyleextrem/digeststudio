
import React from 'react';
import Services from '../components/Services';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <div className="bg-accent py-32 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Our Solutions</span>
            <h1 className="text-h1 font-heading font-bold mb-8">Packages built for Newcastle <span className="text-primary italic">momentum.</span></h1>
            <p className="text-2xl text-white/60 mb-12 leading-relaxed">
              We've productised our services so you know exactly what you're getting, how much it costs, and what the outcome will be. No vague retainers. Just growth.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-bold">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-bold">Transparent fixed pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-bold">Newcastle distribution included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Component (Packages + Add-ons) */}
      <Services />

      {/* Support CTA */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Not sure which path to take?</h2>
          <p className="text-xl text-accent/60 mb-10">Book a free 15-minute consultation. We'll look at your business and tell you exactly where the quick wins are.</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-primary transition-all"
          >
            Request a Growth Audit
            <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
