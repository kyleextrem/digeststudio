
import React from 'react';
import { ArrowRight, Check, X, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-7">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">The Founder</span>
            <h1 className="text-h1 font-heading font-bold mb-10 text-accent leading-none">
              I'm <span className="text-primary">Kyle.</span> I'm building the marketing partner I wish existed in Newcastle.
            </h1>
            <div className="space-y-6 text-body text-accent/70 max-w-3xl">
              <p>
                I've spent years inside marketing teams seeing the same thing: businesses being sold complex "funnels" and "strategies" while they ignore the people right on their doorstep.
              </p>
              <p className="font-bold text-accent">
                I built Digest Studio because local businesses shouldn't have to fight for attention when they already have a community ready to support them.
              </p>
              <p>
                My background isn't just theory. I built <strong>Newcastle Digest</strong> from zero to thousands of subscribers. I know what Newcastle locals click on, what they ignore, and what makes them pick up the phone.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-accent/5 rounded-[64px] overflow-hidden shadow-2xl shadow-accent/10 border-8 border-white">
              {/* Updated image to reflect the user's provided photo: Young guy, curly hair, black puffer, colorful hillside city background */}
              <img
                src="/kyle-profile.jpg"
                alt="Kyle - Digest Studio Founder"
                className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white border border-accent/5 shadow-2xl p-8 rounded-[40px] max-w-[300px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold font-heading">K</div>
                <div>
                  <p className="font-heading font-bold text-xl leading-none uppercase">Kyle</p>
                  <p className="text-accent/50 text-sm mt-1">Founder, Digest Studio</p>
                </div>
              </div>
              <p className="text-sm font-medium text-accent/70 italic">"Newcastle businesses deserve better than generic agency work."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle Digest Section */}
      <section className="bg-accent text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-h2 font-heading font-bold mb-8">The Media Advantage</h2>
            <div className="space-y-6 text-white/70 text-lg">
              <p>
                Most agencies start with a client and then try to find an audience. <strong>We did it the other way around.</strong>
              </p>
              <p>
                We built Newcastle Digest first. We spent months learning what this city cares about. We created a platform where 6,500+ locals actually want to read what we have to say.
              </p>
              <p className="text-primary font-bold text-xl">When you work with Digest Studio, you aren't just buying service hours—you're buying access to our audience.</p>
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 backdrop-blur-sm">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-10">
              <Zap className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Why local matters</h3>

            <div className="space-y-8">
              <div className="group">
                <div className="text-primary font-bold mb-2 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary/30"></span>
                  Trust is the currency.
                </div>
                <p className="text-white/60 pl-8">In a city like Newcastle, your reputation spreads fast. We help you build the kind of visibility that turns into genuine community trust.</p>
              </div>
              <div className="group">
                <div className="text-primary font-bold mb-2 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary/30"></span>
                  No "Big Agency" Fluff.
                </div>
                <p className="text-white/60 pl-8">I work directly with every business. You aren't being handed off to a junior account manager in another city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Newcastle matters */}
      <section className="py-32 bg-primary/5 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-primary/5 font-heading font-bold text-[400px] leading-none pointer-events-none select-none">
          NCL
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-h2 font-heading font-bold mb-8 italic">"I'm not a remote agency using 'local' as a keyword strategy. I live here. I work here."</h2>
          <div className="space-y-6 text-body text-accent/70">
            <p>
              Newcastle isn't just a market to us. It's home. That's why we only work with businesses we genuinely believe we can help grow.
            </p>
          </div>

          <div className="mt-20">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-4 bg-primary text-white text-2xl px-12 py-6 rounded-2xl font-bold hover:bg-accent hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Let's Talk Newcastle
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
