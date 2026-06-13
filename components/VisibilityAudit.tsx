'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const SUBURBS = [
    'Newcastle',
    'Merewether',
    'Hamilton',
    'Adamstown',
    'Broadmeadow',
    'Charlestown',
    'Warners Bay',
    'Mayfield',
    'Lambton',
    'Kotara',
    'Jesmond',
    'Belmont',
    'Toronto',
    'Maitland',
    'Wallsend',
    'Tighes Hill',
    'Cooks Hill',
    'The Junction',
    'New Lambton',
    'Stockton',
    'Other Hunter suburb',
];

const INDUSTRIES = [
    'Hospitality',
    'Trades',
    'Retail',
    'Health & Wellness',
    'Professional Services',
    'Other',
];

const CATEGORIES = [
    {
        id: 'gbp',
        name: 'Google Business Profile',
        description: 'How you show up when someone searches your business on Google.',
        questions: [
            'Is your Google Business Profile claimed and verified?',
            'Do you have 20+ Google reviews?',
            'Have you posted on your Google Business Profile in the last 30 days?',
        ],
    },
    {
        id: 'seo',
        name: 'Local SEO',
        description: 'Whether Newcastle locals can find you when they search for your service.',
        questions: [
            'Does your website mention your Newcastle suburb and service in the page title?',
            'Are you listed on at least 5 local directories (Yellow Pages, True Local, etc.)?',
            'Do you appear in the Google Map Pack for your main service?',
        ],
    },
    {
        id: 'reviews',
        name: 'Reviews & Reputation',
        description: 'What customers see when they\'re deciding whether to trust you.',
        questions: [
            'Do you actively ask customers for reviews?',
            'Do you respond to all your Google reviews?',
            'Do you have a system for handling negative reviews?',
        ],
    },
    {
        id: 'social',
        name: 'Social & Content',
        description: 'How active and consistent your presence is beyond Google.',
        questions: [
            'Do you post on social media at least once a week?',
            'Have you published a blog post or local guide in the last 3 months?',
            'Do you have a consistent visual brand across your social profiles?',
        ],
    },
    {
        id: 'web',
        name: 'Website & Conversion',
        description: 'Whether your website actually turns visitors into calls and bookings.',
        questions: [
            'Does your website load in under 3 seconds on mobile?',
            'Is your phone number clickable on mobile?',
            'Does your homepage clearly state what you do and where you are?',
        ],
    },
] as const;

type Step = 1 | 2 | 3;

type Band = 'invisible' | 'getting-there' | 'well-positioned';

interface BusinessDetails {
    businessName: string;
    suburb: string;
    industry: string;
}

interface LeadDetails {
    firstName: string;
    email: string;
    phone: string;
}

function getBand(score: number): { band: Band; label: string; description: string } {
    if (score <= 5) {
        return {
            band: 'invisible',
            label: 'Invisible',
            description: "You're missing the basics. Newcastle locals can't find you.",
        };
    }
    if (score <= 10) {
        return {
            band: 'getting-there',
            label: 'Getting There',
            description: 'Some foundations in place, but significant gaps are costing you customers.',
        };
    }
    return {
        band: 'well-positioned',
        label: 'Well Positioned',
        description: 'Strong local presence. Let\'s talk about amplifying it.',
    };
}

function getTeaser(band: Band, businessName: string): string {
    const name = businessName || 'your business';
    switch (band) {
        case 'invisible':
            return `${name} has serious visibility gaps. Newcastle customers are searching for your service right now — and finding your competitors instead. Submit your details below and we'll send you a prioritised fix list within 48 hours.`;
        case 'getting-there':
            return `${name} has some foundations in place, but the gaps are still sending customers elsewhere. We've identified where you're losing ground — enter your details to get the full breakdown and action plan.`;
        case 'well-positioned':
            return `${name} is ahead of most local businesses. The opportunity now is amplification — getting in front of more Newcastle locals, faster. Enter your details to see exactly where you can push harder.`;
    }
}

function getPersonalizedSummary(
    categoryScores: { name: string; score: number }[],
    businessName: string
): string {
    const name = businessName || 'Your business';
    const weak = categoryScores.filter((c) => c.score <= 1);
    const moderate = categoryScores.filter((c) => c.score === 2);

    if (weak.length >= 2) {
        const areas = weak.map((c) => c.name).join(' and ');
        return `${name} is weakest in ${areas} — the areas Newcastle customers check first when choosing a local business. Fixing these should be your top priority before spending on ads or social campaigns. We'll outline exactly what to tackle first in your report.`;
    }
    if (weak.length === 1) {
        return `${name} is solid in most areas, but ${weak[0].name} is holding you back. That's often the first thing locals notice when comparing you to competitors. Your report will focus on closing this gap quickly.`;
    }
    if (moderate.length >= 2) {
        const areas = moderate.map((c) => c.name).join(' and ');
        return `${name} has a decent foundation, but ${areas} have room to improve. Small changes here could meaningfully increase how many Newcastle locals find and choose you.`;
    }
    return `${name} is performing well across the board. Your report will focus on amplification — how to get more reach from what's already working, including our distribution channel of 7,000+ local subscribers.`;
}

const BOOKING_URL = 'https://cal.com/digest/digest-studio';

const VisibilityAudit: React.FC = () => {
    const [step, setStep] = useState<Step>(1);
    const [stepVisible, setStepVisible] = useState(true);
    const [business, setBusiness] = useState<BusinessDetails>({
        businessName: '',
        suburb: '',
        industry: '',
    });
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [lead, setLead] = useState<LeadDetails>({ firstName: '', email: '', phone: '' });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const totalQuestions = CATEGORIES.length * 3;
    const answeredCount = Object.keys(answers).length;

    const categoryScores = useMemo(
        () =>
            CATEGORIES.map((cat) => {
                const score = cat.questions.reduce((sum, _, qi) => {
                    const key = `${cat.id}-${qi}`;
                    return sum + (answers[key] === true ? 1 : 0);
                }, 0);
                return { id: cat.id, name: cat.name, score };
            }),
        [answers]
    );

    const totalScore = useMemo(
        () => categoryScores.reduce((sum, c) => sum + c.score, 0),
        [categoryScores]
    );

    const bandInfo = getBand(totalScore);

    const currentCategory = CATEGORIES[categoryIndex];
    const categoryComplete = currentCategory.questions.every(
        (_, qi) => answers[`${currentCategory.id}-${qi}`] !== undefined
    );

    const transitionStep = (next: Step) => {
        setStepVisible(false);
        setTimeout(() => {
            setStep(next);
            setStepVisible(true);
        }, 300);
    };

    const handleAnswer = (questionIndex: number, value: boolean) => {
        const key = `${currentCategory.id}-${questionIndex}`;
        setAnswers((prev) => ({ ...prev, [key]: value }));
    };

    const handleNextCategory = () => {
        if (categoryIndex < CATEGORIES.length - 1) {
            setCategoryIndex((i) => i + 1);
        } else {
            transitionStep(3);
        }
    };

    const handleStartAudit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!business.businessName || !business.suburb || !business.industry) return;
        transitionStep(2);
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!lead.firstName || !lead.email) return;

        setSubmitting(true);
        setSubmitError('');

        const payload = {
            firstname: lead.firstName,
            email: lead.email,
            phone: lead.phone || undefined,
            audit_score: totalScore,
            audit_band: bandInfo.label,
            audit_suburb: business.suburb,
            audit_industry: business.industry,
        };

        console.log('[audit-lead] payload:', payload);

        try {
            const res = await fetch('/api/audit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Submission failed');
            setSubmitted(true);
        } catch {
            setSubmitError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step, categoryIndex]);

    const inputClass =
        'w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all';

    return (
        <div className="min-h-screen bg-accent text-white pt-28 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block">
                        Free 2-Minute Audit
                    </span>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
                        Newcastle Local Business{' '}
                        <span className="text-primary italic">Visibility Audit</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-lg mx-auto">
                        Find out how visible your business is to Newcastle locals — and what to fix first.
                    </p>
                </div>

                {/* Step indicator */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    {([1, 2, 3] as Step[]).map((s) => (
                        <div key={s} className="flex items-center gap-3">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                                    step === s
                                        ? 'bg-primary text-white scale-110'
                                        : step > s
                                          ? 'bg-primary/20 text-primary'
                                          : 'bg-white/10 text-white/30'
                                }`}
                            >
                                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={`w-12 h-0.5 rounded-full transition-all duration-500 ${
                                        step > s ? 'bg-primary' : 'bg-white/10'
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Question progress bar (step 2 only) */}
                {step === 2 && (
                    <div className="mb-8">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                            <span>Audit progress</span>
                            <span>
                                {answeredCount} / {totalQuestions}
                            </span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Step content */}
                <div
                    className={`transition-all duration-300 ${
                        stepVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    {/* Step 1 — Business Details */}
                    {step === 1 && (
                        <form onSubmit={handleStartAudit} className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 space-y-6">
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
                                        Business name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={business.businessName}
                                        onChange={(e) =>
                                            setBusiness((b) => ({ ...b, businessName: e.target.value }))
                                        }
                                        placeholder="e.g. Merewether Plumbing"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
                                        Suburb
                                    </label>
                                    <select
                                        required
                                        value={business.suburb}
                                        onChange={(e) =>
                                            setBusiness((b) => ({ ...b, suburb: e.target.value }))
                                        }
                                        className={`${inputClass} appearance-none cursor-pointer`}
                                    >
                                        <option value="" disabled className="bg-accent text-white">
                                            Select your suburb
                                        </option>
                                        {SUBURBS.map((s) => (
                                            <option key={s} value={s} className="bg-accent text-white">
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
                                        Industry
                                    </label>
                                    <select
                                        required
                                        value={business.industry}
                                        onChange={(e) =>
                                            setBusiness((b) => ({ ...b, industry: e.target.value }))
                                        }
                                        className={`${inputClass} appearance-none cursor-pointer`}
                                    >
                                        <option value="" disabled className="bg-accent text-white">
                                            Select your industry
                                        </option>
                                        {INDUSTRIES.map((i) => (
                                            <option key={i} value={i} className="bg-accent text-white">
                                                {i}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                Start My Audit
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    )}

                    {/* Step 2 — Audit Questions */}
                    {step === 2 && currentCategory && (
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10">
                                <div className="mb-8">
                                    <span className="text-primary font-bold uppercase tracking-widest text-[11px] mb-2 block">
                                        Category {categoryIndex + 1} of {CATEGORIES.length}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                                        {currentCategory.name}
                                    </h2>
                                    <p className="text-white/50">{currentCategory.description}</p>
                                </div>

                                <div className="space-y-6">
                                    {currentCategory.questions.map((question, qi) => {
                                        const key = `${currentCategory.id}-${qi}`;
                                        const answer = answers[key];
                                        return (
                                            <div key={key} className="space-y-3">
                                                <p className="font-medium text-white/90 leading-relaxed">
                                                    {qi + 1}. {question}
                                                </p>
                                                <div className="flex gap-3">
                                                    {[true, false].map((val) => (
                                                        <button
                                                            key={String(val)}
                                                            type="button"
                                                            onClick={() => handleAnswer(qi, val)}
                                                            className={`flex-1 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${
                                                                answer === val
                                                                    ? val
                                                                        ? 'bg-primary text-white'
                                                                        : 'bg-white/20 text-white'
                                                                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                                                            }`}
                                                        >
                                                            {val ? 'Yes' : 'No'}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {categoryComplete && (
                                <button
                                    type="button"
                                    onClick={handleNextCategory}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                                >
                                    {categoryIndex < CATEGORIES.length - 1
                                        ? 'Next Category'
                                        : 'See My Results'}
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    )}

                    {/* Step 3 — Results */}
                    {step === 3 && (
                        <div className="space-y-8">
                            {/* Band result (always visible) */}
                            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 text-center">
                                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block">
                                    Your visibility band
                                </span>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3">
                                    {bandInfo.label}
                                </h2>
                                <p className="text-white/60 text-lg mb-6">{bandInfo.description}</p>

                                {!submitted && (
                                    <p className="text-white/50 text-base leading-relaxed border-t border-white/10 pt-6">
                                        {getTeaser(bandInfo.band, business.businessName)}
                                    </p>
                                )}

                                {submitted && (
                                    <div className="border-t border-white/10 pt-6 space-y-6 text-left">
                                        <div className="text-center">
                                            <p className="text-6xl font-heading font-bold text-white mb-1">
                                                {totalScore}{' '}
                                                <span className="text-white/30 text-3xl">/ {totalQuestions}</span>
                                            </p>
                                            <p className="text-white/40 text-sm uppercase tracking-widest font-bold">
                                                Visibility score
                                            </p>
                                        </div>

                                        <p className="text-white/70 leading-relaxed">
                                            {getPersonalizedSummary(categoryScores, business.businessName)}
                                        </p>

                                        <div className="space-y-3">
                                            <p className="text-sm font-bold uppercase tracking-widest text-white/40">
                                                Score by category
                                            </p>
                                            {categoryScores.map((cat) => (
                                                <div key={cat.id} className="flex items-center gap-4">
                                                    <span className="text-sm text-white/70 flex-1">{cat.name}</span>
                                                    <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-primary rounded-full"
                                                            style={{ width: `${(cat.score / 3) * 100}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-sm font-bold text-white/50 w-8 text-right">
                                                        {cat.score}/3
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Lead capture / thank you */}
                            {!submitted ? (
                                <form onSubmit={handleLeadSubmit} className="space-y-6">
                                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 space-y-6">
                                        <div>
                                            <h3 className="text-xl font-heading font-bold mb-2">
                                                Want us to walk you through your results?
                                            </h3>
                                            <p className="text-white/50 text-sm leading-relaxed">
                                                Enter your details and we&apos;ll be in touch to talk through what the
                                                score means for your business.
                                            </p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={lead.firstName}
                                                onChange={(e) =>
                                                    setLead((l) => ({ ...l, firstName: e.target.value }))
                                                }
                                                placeholder="Your first name"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={lead.email}
                                                onChange={(e) =>
                                                    setLead((l) => ({ ...l, email: e.target.value }))
                                                }
                                                placeholder="you@yourbusiness.com.au"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
                                                Phone <span className="text-white/20">(optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                value={lead.phone}
                                                onChange={(e) =>
                                                    setLead((l) => ({ ...l, phone: e.target.value }))
                                                }
                                                placeholder="04XX XXX XXX"
                                                className={inputClass}
                                            />
                                        </div>
                                        {submitError && (
                                            <p className="text-red-400 text-sm">{submitError}</p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {submitting ? 'Sending...' : 'Send Me My Report'}
                                        {!submitting && <ArrowRight className="w-5 h-5" />}
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-primary/10 border border-primary/20 rounded-[32px] p-8 md:p-10 text-center">
                                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-2xl font-heading font-bold mb-3">
                                        You&apos;re on the list.
                                    </h3>
                                    <p className="text-white/60 mb-8">
                                        We&apos;ll be in touch soon. In the meantime, book a free 15-minute strategy
                                        call to talk through your results.
                                    </p>
                                    <a
                                        href={BOOKING_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98]"
                                    >
                                        Book a Free Strategy Call
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VisibilityAudit;
