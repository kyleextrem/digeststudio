
import React from 'react';
import { Newspaper, Users, TrendingUp, Zap } from 'lucide-react';

const Proof: React.FC = () => {
  const stats = [
    { label: "Locals Reached", value: "7,000+", icon: Users },
    { label: "Avg. Open Rate", value: "~60%", icon: Newspaper },
    { label: "Local Impact", value: "100%", icon: Zap },
    { label: "Growth Focus", value: "24/7", icon: TrendingUp },
  ];

  return (
    <section className="bg-accent py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-h2 font-heading font-bold text-white mb-8">
              A marketing studio with a <span className="text-primary underline decoration-2 underline-offset-8">built-in</span> audience.
            </h2>
            <p className="text-body text-white/70 mb-12">
              No need to start from scratch. We plug you straight into Newcastle Digest's trusted local following, giving your business visibility with people who actually live here.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Local Media Advantage</h3>
              <p className="text-white/60 mb-6">Access to distribution is baked into every plan. We don't just create content; we make sure it's seen by your next 100 customers.</p>
              <ul className="space-y-4">
                {[
                  "Priority inclusion for campaigns",
                  "Guaranteed quarterly feature on Growth Partner",
                  "Spotlight visibility for launches"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`p-8 rounded-3xl border-2 transition-all hover:-translate-y-2 cursor-default ${i % 2 === 0 ? 'bg-primary border-primary' : 'bg-transparent border-white/10'}`}>
                <stat.icon className={`w-10 h-10 mb-6 ${i % 2 === 0 ? 'text-white' : 'text-primary'}`} />
                <div className={`text-5xl font-heading font-bold mb-2 ${i % 2 === 0 ? 'text-white' : 'text-white'}`}>{stat.value}</div>
                <div className={i % 2 === 0 ? 'text-white/80' : 'text-white/60'}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
