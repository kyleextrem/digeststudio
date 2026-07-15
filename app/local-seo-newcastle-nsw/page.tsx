import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, FileCheck, PenLine } from 'lucide-react';
import { localBusinessSchema, serviceSchema } from '@/lib/schema';

const SERVICE_NAME = 'Local SEO';
const LOCATION = 'Newcastle';

const schema = serviceSchema(
    'Local SEO Newcastle NSW',
    'Local SEO for Newcastle NSW businesses. Google Business Profile optimisation, local citations, and geo-targeted content that gets you into the map pack.',
);

const pillars = [
    {
        icon: MapPin,
        title: 'Google Business Profile, Done Right',
        desc: "Correct categories, a service area that actually matches where you work (not a polygon covering half the state), photos, regular posts, and a review strategy that doesn\u2019t rely on luck. This is the single biggest lever for showing up in the map pack \u2014 most businesses have it half set up and wonder why they\u2019re invisible.",
    },
    {
        icon: FileCheck,
        title: 'Citations That Match, Exactly',
        desc: "Your business name, phone number, and service area need to be identical everywhere \u2014 your website, directories, socials. Inconsistent listings quietly tell Google you\u2019re not a trustworthy business to surface.",
    },
    {
        icon: PenLine,
        title: "Content That\u2019s Actually About Newcastle",
        desc: "Not \u2018we service the greater metropolitan area\u2019 \u2014 specific suburbs, specific local context, written by someone who\u2019s actually here. Generic AI-written filler doesn\u2019t build authority. Being genuinely useful to a Newcastle reader does.",
    },
];

const deliverables = [
    'Google Business Profile audit and optimisation',
    'Local citation building and consistency fixes',
    'Geo-targeted content that actually ranks for Hunter Region searches',
    'Review generation via Testimo, our own review automation tool',
    'A summary report showing exactly what changed and why',
];

export default function LocalSeoNewcastlePage() {
    return (
        <div className="pt-20">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Breadcrumb */}
            <nav className="px-6 py-6 border-b border-accent/5" aria-label="Breadcrumb">
                <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm font-medium text-accent/50">
                    <li>
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    </li>
                    <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
                    <li>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    </li>
                    <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
                    <li className="text-accent font-bold" aria-current="page">
                        {SERVICE_NAME} {LOCATION} NSW
                    </li>
                </ol>
            </nav>

            {/* Hero */}
            <section className="bg-accent py-32 px-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                            {SERVICE_NAME} &mdash; {LOCATION} NSW
                        </span>
                        <h1 className="text-h1 font-heading font-bold mb-8">
                            Local SEO for {LOCATION} NSW{' '}
                            <span className="text-primary italic">Businesses</span>
                        </h1>
                        <p className="text-2xl text-white/60 mb-12 leading-relaxed">
                            If your business shows up on page two for &lsquo;your service +
                            Newcastle,&rsquo; you&apos;re invisible. Most Newcastle businesses lose
                            customers to competitors with worse products but better Google visibility.
                            We fix that &mdash; properly, not with keyword-stuffed filler.
                        </p>
                        <Link
                            href="/visibility-audit"
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-accent transition-all active:scale-95"
                        >
                            Take the Free Audit
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why "Newcastle" Alone Doesn't Work */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-h2 font-heading font-bold text-accent mb-8">
                        Why &lsquo;Newcastle&rsquo; Alone Doesn&apos;t Work
                    </h2>
                    <p className="text-xl text-accent/70 leading-relaxed font-medium mb-8">
                        Search &lsquo;marketing agency Newcastle&rsquo; and you&apos;ll mostly get
                        results for Newcastle-upon-Tyne in the UK &mdash; a bigger, older market that
                        dominates the generic term globally. If your website and Google Business Profile
                        aren&apos;t explicitly telling Google you&apos;re Newcastle, NSW, you&apos;re
                        competing in a fight you can&apos;t win, for traffic that was never going to
                        call you anyway.
                    </p>
                    <p className="text-xl text-accent/70 leading-relaxed font-medium">
                        Local SEO done properly means every signal &mdash; your website copy, your
                        Google Business Profile, your citations &mdash; makes it unmistakable you&apos;re
                        a Hunter Region business, serving Hunter Region customers. That&apos;s the
                        difference between showing up in the map pack for someone standing in Newcastle
                        right now, and getting buried under agencies on the other side of the planet.
                    </p>
                </div>
            </section>

            {/* What Local SEO Actually Involves */}
            <section className="py-24 px-6 bg-accent/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            The Approach
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent mb-6">
                            What Local SEO Actually Involves
                        </h2>
                        <p className="text-xl text-accent/60 max-w-2xl mx-auto">
                            Not backlink spam. Not 2,000-word blog posts nobody reads. Three things
                            that move the needle for a local business:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-10 rounded-[40px] border border-accent/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                                    <item.icon className="text-primary w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
                                    {item.title}
                                </h3>
                                <p className="text-accent/60 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Example */}
            {/* TODO: swap for Alley Electrical case study once live */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-[32px] p-8 md:p-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Proof, Not Promises
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-accent">
                            We&apos;re running this playbook on ourselves
                        </h3>
                        <p className="text-lg text-accent/60 leading-relaxed mb-6">
                            We&apos;re currently running this exact process on our own business &mdash;
                            Digest Studio&apos;s Google visibility is being rebuilt in public, using
                            the same playbook we&apos;re offering you.
                        </p>
                        <div className="flex items-start gap-4 bg-white/60 rounded-2xl p-6 border border-primary/10">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-accent font-bold text-lg">
                                See how we&apos;re building visibility in Newcastle &mdash;{' '}
                                <Link href="/work" className="text-primary underline underline-offset-4 hover:no-underline">
                                    check our work
                                </Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 px-6 bg-accent/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Deliverables
                        </span>
                        <h2 className="text-h2 font-heading font-bold text-accent">
                            What You Get
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {deliverables.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[32px] p-8 md:p-10 border-2 border-accent/5 hover:border-primary/20 transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-7 h-7 text-primary" />
                                    </div>
                                    <span className="text-xl md:text-2xl font-heading font-bold text-accent">
                                        {item}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-center text-lg text-accent/60 font-medium">
                        Want to see the full range of what we offer?{' '}
                        <Link href="/services" className="text-primary font-bold underline underline-offset-4 hover:no-underline">
                            View all services
                        </Link>.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-primary/5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-accent/5 border border-accent/10 rounded-[48px] p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-6">
                            Find Out Where You&apos;re Actually Ranking
                        </h2>
                        <p className="text-lg text-accent/60 mb-10 max-w-xl mx-auto">
                            Take the free 2-minute visibility audit and see exactly where Newcastle
                            locals can&apos;t find you &mdash; and what to fix first.
                        </p>
                        <Link
                            href="/visibility-audit"
                            className="inline-flex items-center gap-4 bg-primary text-white text-xl px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
                        >
                            Take the Free Audit
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest">
                        <Link href="/services" className="text-accent/50 hover:text-primary transition-colors">
                            ← All Services
                        </Link>
                        <span className="text-accent/20">|</span>
                        <Link href="/visibility-audit" className="text-accent/50 hover:text-primary transition-colors">
                            Free Visibility Audit →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
