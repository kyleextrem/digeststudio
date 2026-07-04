'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';

const STORAGE_KEY = 'ds_popup_last_shown';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const SCROLL_THRESHOLD = 0.7;
const BOOKING_URL = 'https://cal.com/digest/digest-studio';

function isVisibilityAuditPath(pathname: string): boolean {
    return pathname === '/visibility-audit' || pathname.startsWith('/visibility-audit/');
}

function wasShownRecently(): boolean {
    if (typeof window === 'undefined') return true;

    const lastShown = localStorage.getItem(STORAGE_KEY);
    if (!lastShown) return false;

    const timestamp = Number.parseInt(lastShown, 10);
    if (Number.isNaN(timestamp)) return false;

    return Date.now() - timestamp < SEVEN_DAYS_MS;
}

function recordDismissal(): void {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
}

function getScrollDepth(): number {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return 1;
    return window.scrollY / scrollableHeight;
}

export default function PopupCTA() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const hasTriggeredRef = useRef(false);

    const dismiss = useCallback(() => {
        recordDismissal();
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if (isVisibilityAuditPath(pathname)) {
            setIsOpen(false);
        }
    }, [pathname]);

    useEffect(() => {
        if (isVisibilityAuditPath(pathname) || wasShownRecently()) return;

        const handleScroll = () => {
            if (hasTriggeredRef.current) return;
            if (getScrollDepth() < SCROLL_THRESHOLD) return;

            hasTriggeredRef.current = true;
            setIsOpen(true);
            window.removeEventListener('scroll', handleScroll);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') dismiss();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, dismiss]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-6 animate-popup-fade-in"
            role="presentation"
        >
            <button
                type="button"
                aria-label="Close popup"
                className="absolute inset-0 bg-accent/80 backdrop-blur-sm"
                onClick={dismiss}
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-cta-heading"
                className="relative z-10 w-full md:max-w-lg bg-accent text-white rounded-t-[32px] md:rounded-[32px] border border-white/10 shadow-2xl shadow-black/40 p-8 md:p-10 animate-popup-slide-up"
            >
                <button
                    type="button"
                    onClick={dismiss}
                    aria-label="Close"
                    className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 pr-8">
                    <h2
                        id="popup-cta-heading"
                        className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight"
                    >
                        Not sure where to start?
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">
                        Book a free 15-minute strategy call and we&apos;ll tell you exactly where your
                        business&apos;s biggest visibility gap is.
                    </p>

                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 bg-primary text-white px-8 py-5 rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                    >
                        Book a Free Strategy Call
                        <ArrowRight className="w-5 h-5" />
                    </a>

                    <button
                        type="button"
                        onClick={dismiss}
                        className="mt-5 w-full text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                        No thanks
                    </button>
                </div>
            </div>
        </div>
    );
}
