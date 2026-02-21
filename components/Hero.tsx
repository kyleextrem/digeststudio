'use client';

import React from 'react';
import { ArrowRight, Zap, Users, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-20 md:pt-32 md:pb-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto text-center">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Work starts in 48 hours</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-accent leading-[1.1]">
          Be the Newcastle Business <span className="text-primary">Locals Think of First</span>
        </h1>

        <p className="text-xl md:text-2xl text-accent/70 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          The only Newcastle marketing studio with <span className="text-accent font-bold">distribution baked in</span>.
          We optimise your local presence AND feature you to our 7,000+ local subscribers.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12 text-accent/80 border-y border-accent/5 py-6 bg-accent/[0.02]">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">7,000+ Local Subscribers</span>
          </div>
          <div className="hidden md:block text-accent/20">|</div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">60% Open Rate</span>
          </div>
          <div className="hidden md:block text-accent/20">|</div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">Results in 30 Days</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white text-xl md:text-2xl px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 group w-full sm:w-auto"
          >
            Book Free Consult
            <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
          </a>
          <p className="text-accent/40 text-sm font-medium">
            Founding Client rates available for February intake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
