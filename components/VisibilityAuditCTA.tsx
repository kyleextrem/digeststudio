import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type VisibilityAuditCTAProps = {
    variant: 'home' | 'blog';
};

const VisibilityAuditCTA: React.FC<VisibilityAuditCTAProps> = ({ variant }) => {
    if (variant === 'home') {
        return (
            <section className="py-24 px-6 bg-accent text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                        How Visible Is Your Newcastle Business?
                    </h2>
                    <p className="text-xl text-white/60 mb-10 leading-relaxed">
                        Take our free 2-minute audit and find out exactly where locals can&apos;t find you — and what
                        to fix first.
                    </p>
                    <Link
                        href="/visibility-audit"
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98]"
                    >
                        Take the Free Audit
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <div className="mt-16 bg-accent/[0.03] border-2 border-accent/10 rounded-[32px] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent mb-4">
                Not sure where your business stands online?
            </h2>
            <p className="text-accent/60 text-lg leading-relaxed mb-8">
                Take the free Newcastle Visibility Audit — 15 questions, 2 minutes, and a clear picture of where
                locals can&apos;t find you.
            </p>
            <Link
                href="/visibility-audit"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent transition-all active:scale-[0.98]"
            >
                Start the Free Audit
                <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
    );
};

export default VisibilityAuditCTA;
