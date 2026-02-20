import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';

const faqItems = [
  {
    question: "Do I need a big marketing budget to work with you?",
    answer: "No. Our packages start at $750 for Visibility Boost (one-off) or $997/month for Growth Partner. We've structured everything so you pay for results, not retainers or vague strategy sessions. Small budgets work when they're focused on what actually drives bookings."
  },
  {
    question: "What if I don't have time to manage this?",
    answer: "That's exactly why we exist. You stay focused on running your business. We handle the creative, the posting, the media placements, the analytics. You get a summary each month and approve direction, but the execution is on us."
  },
  {
    question: "I've been burned by marketing agencies before. Why should I trust you?",
    answer: "We get it. Most agencies over-promise and under-deliver. We're different because we own Newcastle Digest, which means we control the media channel, not just buy space in it. Our packages are productised (you know exactly what you're getting), and we only work with businesses we can genuinely help grow in Newcastle."
  },
  {
    question: "How fast will I see results?",
    answer: "Visibility Boost delivers within 2 weeks. Local Launch Pack gets you live and featured within 4 weeks. Growth Partner builds momentum over 3-6 months as we layer campaigns, content, and local media. Quick wins are great, but sustained local presence is what keeps customers coming back."
  },
  {
    question: "What makes you different from other marketing agencies?",
    answer: "Three things: 1) We own Newcastle Digest (7,000+ local subscribers), so you get media reach without paying for ads. 2) Productised packages mean clear pricing and deliverables, no scope creep. 3) We only work locally in Newcastle, so we understand the audience, venues, and what actually works here."
  },
  {
    question: "Can I just start with one thing?",
    answer: "Absolutely. That's what Visibility Boost is for. It's a $750 one-off package that gives you immediate local traction without committing to a monthly plan. Many clients start there, see results, then move into Growth Partner when they're ready to scale."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-32 px-6">
      <SEO
        title="FAQ - Local Marketing Help"
        description="Common questions about marketing your Newcastle business, pricing, and how Digest Studio works."
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Help Centre</span>
          <h1 className="text-h1 font-heading font-bold mb-8">Common Questions</h1>
          <p className="text-body text-accent/60">Everything you need to know about working with Newcastle's local marketing studio.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`border-2 rounded-[32px] overflow-hidden transition-all ${openIndex === i ? 'border-primary bg-primary/[0.02]' : 'border-accent/5 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-2xl font-heading font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-accent group-hover:text-primary'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-accent/5 text-accent'}`}>
                  {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 pt-0 text-xl text-accent/60 leading-relaxed border-t border-accent/5 mx-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-accent p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-2">Still have questions?</h3>
            <p className="text-white/60 text-lg">Send us a message and we'll get back to you within 24 hours.</p>
          </div>
          <a href="/#contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
