
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-40 pb-20 md:pt-60 md:pb-40 px-6 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Exclusively for Newcastle Businesses</span>
        </div>
        
        <h1 className="text-h1 font-heading font-bold mb-10 text-accent">
          Stop Shouting into the Void. Start Getting <span className="text-primary">Booked.</span>
        </h1>

        <p className="text-body text-accent/70 mb-12 max-w-3xl mx-auto">
          Most Newcastle businesses waste thousands on agencies that deliver "reach" but zero revenue. We give you built-in local distribution so you can stop begging for attention and start handling enquiries.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white text-2xl px-12 py-6 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 group w-full sm:w-auto"
          >
            Fix My Marketing
            <ArrowRight className="group-hover:translate-x-2 transition-transform w-7 h-7" />
          </a>
          <p className="text-accent/40 font-medium text-lg">Results in <span className="text-accent font-bold">14 days</span> or less.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
