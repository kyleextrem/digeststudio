import { MapPin, ShieldCheck, Radio } from 'lucide-react';

const pillars = [
    {
        icon: MapPin,
        title: 'Local Visibility',
        sentence: 'Google Business Profile, Local SEO, and AI Search.',
    },
    {
        icon: ShieldCheck,
        title: 'Authority',
        sentence: 'Website, reviews, and content.',
    },
    {
        icon: Radio,
        title: 'Distribution',
        sentence: 'Newcastle Digest, 7,000+ subscribers, and community reach.',
    },
] as const;

export default function WhyDigestStudio() {
    return (
        <section className="bg-white py-28 md:py-40 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
                    <span className="inline-block text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-8">
                        How we help
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-accent tracking-tight leading-[1.15] mb-6">
                        Everything your business needs to become the obvious local choice.
                    </h2>
                    <p className="text-lg md:text-xl text-accent/55 leading-relaxed font-medium max-w-2xl mx-auto">
                        Most agencies stop after building your marketing. We help people actually discover it.
                    </p>
                </div>

                <div className="relative">
                    {/* Animated connecting line - desktop only */}
                    <div
                        className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-6 hidden md:block"
                        aria-hidden="true"
                    >
                        <div className="h-px w-full bg-accent/[0.08] overflow-hidden">
                            <div className="h-full w-1/3 bg-primary/40 why-line-shimmer" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                        {pillars.map(({ icon: Icon, title, sentence }) => (
                            <div key={title} className="text-center md:text-left">
                                <div className="relative z-10 inline-flex mb-8">
                                    <Icon className="w-12 h-12 text-accent stroke-[1.25]" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-accent mb-4 tracking-tight">
                                    {title}
                                </h3>
                                <p className="text-base md:text-lg text-accent/55 leading-relaxed font-medium">
                                    {sentence}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
