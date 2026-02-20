import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ValueEquation from '../components/ValueEquation';
import LeadMagnet from '../components/LeadMagnet';
import ContactForm from '../components/ContactForm';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Be the Newcastle Business Locals Think of First"
        description="The only Newcastle marketing studio with distribution baked in. We optimize your local presence and feature you to 7,000+ local subscribers."
      />
      <Hero />

      <ValueEquation />

      <LeadMagnet />

      {/* Final CTA / Founding Client Offer */}
      <section id="contact" className="py-24 px-6 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-accent rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl text-center md:text-left">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">

              {/* Offer Details */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex self-center lg:self-start items-center gap-2 bg-primary/20 border border-primary/20 px-4 py-1.5 rounded-full mb-8">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">February Intake Open</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                  Founding Client <br /><span className="text-primary">Lifetime Rates</span>
                </h2>

                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  We're opening spots for 5 founding clients this month. You get our full marketing & distribution package at our lowest ever rate, locked in for the life of your partnership.
                </p>

                <div className="space-y-4 mb-10 text-left bg-white/5 p-6 rounded-2xl border border-white/5">
                  {[
                    "Full Local Marketing Execution",
                    "Monthly Features in Newcastle Digest",
                    "Strategy Call with Founders",
                    "Work Starts in 48 Hours"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg font-medium text-white">
                      <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl border border-white/10">
                <h3 className="text-2xl font-heading font-bold text-accent mb-2">Book Free Consult</h3>
                <p className="text-accent/60 mb-8 text-sm">No sales pitch. Just a quick chat to see if we're a fit.</p>
                <ContactForm dark={false} />
                <p className="mt-6 text-center text-xs text-accent/30">
                  Limited spots available for founding rate.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
