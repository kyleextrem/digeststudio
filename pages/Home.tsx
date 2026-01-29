
import React from 'react';
import Hero from '../components/Hero';
import Proof from '../components/Proof';
import HowItWorks from '../components/HowItWorks';
import { ShieldAlert, Target, Coins, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Problems Section */}
      <section className="py-32 px-6 bg-white border-y border-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Hard Truth</span>
            <h2 className="text-h2 font-heading font-bold mb-6">Local marketing is broken.</h2>
            <p className="text-xl text-accent/60 max-w-2xl mx-auto">If you're facing these three issues, you're not failing—your strategy is.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldAlert,
                title: "The 'Invisible' Problem",
                problem: "You're posting to Instagram every day, but only your mum and two employees are liking it. Nobody new is seeing your work.",
                solve: "We plug you into Newcastle Digest (6,500+ locals) immediately. You stop shouting and start being heard."
              },
              {
                icon: Coins,
                title: "The 'Money Pit' Problem",
                problem: "You've paid agencies $3k/mo for 'strategy sessions' and 'engagement reports' that didn't lead to a single new customer.",
                solve: "Our packages are productised and result-focused. You pay for execution and visibility, not vague overhead."
              },
              {
                icon: Target,
                title: "The 'Stock Photo' Problem",
                problem: "Generic marketing makes you look like every other business. Newcastle locals trust people, not polished stock graphics.",
                solve: "We send real creators to your business to capture authentic content that locals actually resonate with."
              }
            ].map((item, i) => (
              <div key={i} className="bg-accent/5 p-12 rounded-[48px] border border-accent/5">
                <item.icon className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-accent/60 mb-8 text-lg">{item.problem}</p>
                <div className="pt-6 border-t border-accent/10">
                  <p className="font-bold text-accent text-lg">How we fix it:</p>
                  <p className="text-accent/70 mt-2">{item.solve}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / 3 Points */}
      <section className="py-32 px-6 bg-accent text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div className="text-[500px] font-heading font-bold leading-none rotate-12">*</div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-h2 font-heading font-bold mb-8">The Digest Advantage</h2>
            <p className="text-xl text-white/60 max-w-2xl">We built the channel before we built the agency. That's why we win for you.</p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Built-in Local Reach",
                desc: "Every plan includes direct access to our 6,500+ Newcastle subscribers. We don't 'hope' for reach; we guarantee it."
              },
              {
                title: "Productised Outcomes",
                desc: "No hourly billing. No scope creep. You pick a package, you know the price, you get the results. Simple."
              },
              {
                title: "Newcastle-First Creative",
                desc: "We live here. We know the suburbs, the vibe, and the people. We create content that actually looks like Newcastle."
              }
            ].map((prop, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-primary font-heading font-bold text-7xl leading-none">{i + 1}</div>
                <div>
                  <h3 className="text-4xl font-heading font-bold mb-4">{prop.title}</h3>
                  <p className="text-2xl text-white/70 max-w-3xl leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Proof />
      
      <HowItWorks />

      {/* Final CTA Section */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Take Action</span>
              <h2 className="text-h2 font-heading font-bold mb-8">Ready to grow in Newcastle?</h2>
              <p className="text-body text-accent/60 mb-12">
                We're currently accepting <span className="text-accent font-bold">3 new founding clients</span> this month. Fill out the form to secure your spot and lock in our launch pricing.
              </p>
              
              <div className="space-y-6">
                {[
                  "Free 30-minute growth consult",
                  "Customised local visibility plan",
                  "Founder-to-founder communication"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl font-bold text-accent">
                    <CheckCircle2 className="text-primary w-8 h-8" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-accent p-12 rounded-[48px] text-white shadow-2xl">
              <h3 className="text-3xl font-heading font-bold mb-2">Book Your Consult</h3>
              <p className="text-white/60 mb-8">We'll reach out within 48 hours.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
