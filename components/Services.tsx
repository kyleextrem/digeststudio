'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, Layout, Megaphone, Camera, Search } from 'lucide-react';

const services = [
  {
    title: "Visibility Boost",
    subtitle: "Fast wins for local presence",
    price: "$750",
    period: "once-off",
    tag: "One-off • Fast wins",
    features: [
      "Google Business Profile optimisation",
      "Local SEO audit + priority fixes",
      "Website conversion review",
      "Social starter pack (3 posts)",
      "Newcastle Digest spotlight feature",
      "Summary report with next steps"
    ],
    highlight: false
  },
  {
    title: "Local Launch Pack",
    subtitle: "Launch with credibility",
    price: "$2,500",
    period: "once-off",
    tag: "Popular",
    features: [
      "Google Business Profile setup",
      "One-page conversion landing page",
      "Professional photo pack (15-20 images)",
      "Feature article in Newcastle Digest",
      "Canva social starter kit",
    ],
    highlight: false
  },
  {
    title: "Growth Partner Plan",
    subtitle: "Consistent local growth",
    price: "$1,999",
    period: "monthly",
    tag: "Most Popular",
    features: [
      "Monthly campaign planning",
      "Full Local SEO & GBP management",
      "Social content (8-12 posts/mo)",
      "Quarterly content shoot (Photo + Video)",
      "Performance tracking & monthly insights",
      "Guaranteed quarterly Digest feature",
      "Testimo review automation (included — $49/month value)",
      "Quarterly strategy sessions"
    ],
    highlight: true
  }
];

const addons = [
  {
    title: "Custom Website Build",
    icon: Layout,
    subtitle: "Bigger, more detailed website",
    price: "From $2,500",
    features: [
      "4-7 page custom website",
      "Clean, modern, mobile-first design",
      "Conversion-focused copy",
      "SEO-ready structure",
      "Forms & booking integration",
      "14 days post-launch support"
    ],
    cta: "Discuss Website Build"
  },
  {
    title: "Paid Ads Management",
    icon: Megaphone,
    subtitle: "Meta or Google",
    price: "Custom pricing",
    features: [
      "Strategy and campaign setup",
      "Ongoing optimisation",
      "Management of ad spend",
      "Detailed performance reporting"
    ],
    cta: "Discuss Ad Management"
  },
  {
    title: "Additional Content",
    icon: Camera,
    subtitle: "Shoots, Blogs & Emails",
    price: "Custom pricing",
    features: [
      "Additional content shoots",
      "Email marketing campaigns",
      "Blog content creation",
      "Visual storytelling"
    ],
    cta: "Discuss Content Needs"
  },
  {
    title: "Advanced SEO",
    icon: Search,
    subtitle: "Backlinks & Authority",
    price: "Custom pricing",
    features: [
      "Advanced SEO strategies",
      "Backlink building",
      "Authority growth",
      "Branding & visual identity"
    ],
    cta: "Discuss SEO Options"
  }
];

const Services: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-h2 font-heading font-bold mb-6">
            Helping Newcastle businesses get found, chosen, and contacted.
          </h2>
          <p className="text-body text-accent/60 max-w-3xl mx-auto">
            Clear inclusions. Straightforward pricing. No long contracts, no hidden extras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-10 rounded-[40px] border-2 transition-all hover:shadow-2xl hover:shadow-accent/5 group ${service.highlight ? 'border-primary bg-primary/[0.02]' : 'border-accent/5 bg-white'}`}
            >
              {service.tag && (
                <span className={`self-start px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8 ${service.highlight ? 'bg-primary text-white' : 'bg-accent/5 text-accent/60'}`}>
                  {service.tag}
                </span>
              )}

              <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-accent/60 mb-8 font-medium">{service.subtitle}</p>

              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-heading font-bold text-accent">{service.price}</span>
                  <span className="text-accent/40 font-bold uppercase tracking-widest text-sm">{service.period}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${service.highlight ? 'text-primary' : 'text-accent/20'}`} />
                    <span className="text-accent/70 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleContactClick}
                className={`w-full py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${service.highlight ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-accent' : 'bg-accent text-white hover:bg-primary'}`}
              >
                Get Started
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-32 max-w-4xl mx-auto text-center text-accent/80 text-lg font-medium shadow-sm">
            All Growth Partner clients receive free access to Testimo — our proprietary Google review automation tool. SMS-based review requests, automated follow-ups, and a live review dashboard. Built by us, for businesses like yours.
        </div>

        {/* Add-ons Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Enhancements</span>
            <h2 className="text-4xl font-heading font-bold mb-4 text-accent">ADD-ONS</h2>
            <p className="text-xl text-accent/60">Enhance any plan with targeted extras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, i) => (
              <div key={i} className="bg-accent/5 p-8 rounded-[32px] border border-accent/5 hover:border-primary/20 transition-all flex flex-col">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <addon.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-1">{addon.title}</h3>
                <p className="text-accent/60 text-sm font-medium mb-4">{addon.subtitle}</p>
                <div className="text-primary font-bold mb-6">{addon.price}</div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-accent/70 flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleContactClick}
                  className="w-full py-3 rounded-xl border border-accent/10 text-center text-sm font-bold hover:bg-accent hover:text-white transition-all"
                >
                  {addon.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Partnerships</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-accent">Some businesses don't need a package. They need a partner.</h2>
            <p className="text-xl text-accent/60 max-w-4xl mx-auto leading-relaxed">
              If you're expanding into new markets, building a lead generation engine from scratch, or need someone to own your marketing end-to-end — that's a different conversation. We work with a small number of Newcastle and Hunter businesses on a retained basis, handling strategy and execution together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-accent/5 hover:border-primary/20 transition-all">
              <h3 className="text-2xl font-heading font-bold mb-8 text-accent">What this looks like</h3>
              <ul className="space-y-4">
                {[
                  "Monthly retainer, scoped to your business — no cookie-cutter deliverables",
                  "Strategy, execution, and reporting all under one roof",
                  "SEO, content, conversion, HubSpot, paid — whatever the business actually needs",
                  "Access to Newcastle Digest's 7,000+ subscriber audience as a distribution channel",
                  "Testimo reputation management included where relevant",
                  "One point of contact who knows your business"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-accent/70 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-accent/5 hover:border-primary/20 transition-all">
              <h3 className="text-2xl font-heading font-bold mb-8 text-accent">Who it's for</h3>
              <ul className="space-y-4">
                {[
                  "B2B businesses entering or growing in the Newcastle and Hunter market",
                  "Businesses that have tried agencies and been burned by vague retainers and no accountability",
                  "Operators who want a marketing partner, not a vendor"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-accent/70 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-accent/5 hover:border-primary/20 transition-all">
              <h3 className="text-2xl font-heading font-bold mb-8 text-accent">How it works</h3>
              <ul className="space-y-4">
                {[
                  "30-minute discovery call to understand your situation",
                  "We come back with a proposed scope, phased approach, and monthly investment",
                  "Phase 1 typically kicks off within a week of agreement",
                  "No lock-in beyond the current phase — if it's not working, we'll tell you"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-accent/70 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* HubSpot Callout */}
          <div className="bg-[#FF7A59]/10 border border-[#FF7A59]/20 rounded-2xl p-8 mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center">
              <span className="font-bold text-[#FF7A59] text-xl tracking-tight">HubSpot</span>
            </div>
            <p className="text-accent/80 text-lg font-medium leading-relaxed">
              We implement and manage HubSpot for our Strategic Partnership clients — from initial setup and CRM configuration through to tracking, lead flow, and reporting. HubSpot implementation is included as standard where required.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://cal.com/digest/digest-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Book a Strategy Call
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
