
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Book your plan",
    desc: "Choose what fits your stage and goals. We handle the rest from there."
  },
  {
    num: "02",
    title: "We execute",
    desc: "Work starts within 48 hours: setup, creative, local media, delivery."
  },
  {
    num: "03",
    title: "Track what works",
    desc: "See which campaigns drive bookings, calls, and local enquiries."
  },
  {
    num: "04",
    title: "Local success",
    desc: "Get known, get booked, and keep growing in your community."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-accent/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Process</span>
            <h2 className="text-h2 font-heading font-bold">We do the work, you get the results.</h2>
          </div>
          <p className="text-body text-accent/60 max-w-md lg:mb-4">
            No endless discovery meetings. No 6-month strategy documents that gather dust. We execute fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-accent/5 hover:border-primary/20 transition-all group">
              <div className="text-primary font-heading font-bold text-6xl mb-8 group-hover:scale-110 transition-transform origin-left">
                {step.num}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
              <p className="text-accent/60 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
