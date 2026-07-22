type Pillar = {
    title: string;
    body: string;
    featured?: boolean;
    stats?: readonly { value: string; label: string }[];
};

const pillars: readonly Pillar[] = [
    {
        title: 'We build.',
        body: 'Websites, SEO, content and systems that convert local demand into enquiries.',
    },
    {
        title: 'We distribute.',
        body: "We own Newcastle Digest - 7,000+ local subscribers, 60% open rates. Your offer lands in inboxes other agencies can't buy.",
        featured: true,
        stats: [
            { value: '7,000+', label: 'subscribers' },
            { value: '60%', label: 'open rate' },
        ],
    },
    {
        title: 'We measure.',
        body: 'Reviews, rankings, conversions and growth - reported clearly, improved continuously.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="ds-section bg-[#fafafa] border-t border-[#ececec]">
            <div className="ds-container">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <span className="ds-eyebrow">Built-in distribution</span>
                    <h2 className="ds-h2 mb-5">
                        Most agencies rent attention.
                        <br className="hidden sm:block" />
                        We already own it.
                    </h2>
                    <p className="ds-lede max-w-xl">
                        Digest Studio is the only Newcastle marketing studio with a
                        local media brand attached. That changes what &ldquo;marketing&rdquo;
                        can actually deliver.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className={`rounded-2xl border p-8 md:p-9 flex flex-col min-h-[240px] ${
                                pillar.featured
                                    ? 'bg-accent text-white border-accent'
                                    : 'ds-card'
                            }`}
                        >
                            <h3
                                className={`font-heading font-bold text-2xl tracking-tight mb-4 ${
                                    pillar.featured ? 'text-white' : 'text-accent'
                                }`}
                            >
                                {pillar.title}
                            </h3>
                            <p
                                className={`text-[15px] leading-relaxed flex-1 ${
                                    pillar.featured
                                        ? 'text-white/70'
                                        : 'text-accent/55'
                                }`}
                            >
                                {pillar.body}
                            </p>
                            {pillar.stats && (
                                <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
                                    {pillar.stats.map((s) => (
                                        <div key={s.label}>
                                            <div className="font-heading font-bold text-2xl text-primary tabular-nums leading-none mb-1">
                                                {s.value}
                                            </div>
                                            <div className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                                                {s.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
