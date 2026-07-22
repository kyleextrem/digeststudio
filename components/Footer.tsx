import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import AskAiAboutDigest from '@/components/AskAiAboutDigest';

const services = [
    { label: 'Our Solutions', href: '/services' },
    { label: 'Visibility Boost', href: '/packages/visibility-boost' },
    { label: 'Local Launch Pack', href: '/packages/local-launch-pack' },
    { label: 'Growth Partner', href: '/packages/growth-partner' },
    { label: 'Website Design', href: '/services/website-development' },
    { label: 'Local SEO', href: '/local-seo-newcastle-nsw' },
    { label: 'Content Marketing', href: '/services/content-marketing' },
    { label: 'Paid Ads', href: '/services/paid-ads' },
    { label: 'Advanced SEO', href: '/services/advanced-seo' },
    { label: 'Reputation Management', href: '/services/reputation-management' },
    { label: 'Local Advertising', href: '/services/local-advertising' },
] as const;

const company = [
    { label: 'About', href: '/about' },
    { label: 'About Digest Studio', href: '/about-digest-studio' },
    { label: 'Our Brands', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
] as const;

const resources = [
    { label: 'Free Audit', href: '/visibility-audit' },
    { label: 'Newcastle Digest', href: '/brands/newcastle-digest' },
    { label: 'Testimo', href: '/brands/testimo' },
] as const;

const social = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/digeststudio_/',
        icon: Instagram,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/digestmediaco/',
        icon: Linkedin,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/newcastledigest/',
        icon: Facebook,
    },
] as const;

export default function Footer() {
    return (
        <footer className="bg-white border-t border-[#ececec]">
            <div className="ds-container px-6 pt-14 md:pt-16 pb-10">
                <AskAiAboutDigest />

                <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-14">
                    <div className="col-span-2 md:col-span-4">
                        <Link href="/" className="inline-block mb-5">
                            <img
                                src="/logo-lightning.png"
                                alt="Digest Studio"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[15px] text-accent/50 leading-relaxed max-w-xs mb-6">
                            Newcastle marketing studio with built-in distribution.
                            We build it - then help locals see it.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {social.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ececec] text-accent/45 hover:text-primary hover:border-primary/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/35 mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {services.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-[14px] text-accent/55 hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/35 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2.5">
                            {company.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-[14px] text-accent/55 hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/35 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2.5">
                            {resources.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-[14px] text-accent/55 hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/35 mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2.5 text-[14px] text-accent/55">
                            <li>
                                <a
                                    href="tel:+61417668744"
                                    className="hover:text-primary transition-colors"
                                >
                                    +61 417 668 744
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@digeststudio.com.au"
                                    className="hover:text-primary transition-colors break-all"
                                >
                                    info@digeststudio.com.au
                                </a>
                            </li>
                            <li className="text-accent/40 leading-relaxed pt-1">
                                Newcastle, NSW
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-[#ececec]">
                    <p className="text-[12px] text-accent/35">
                        © {new Date().getFullYear()} Digest Studio · A product of Digest Media
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-[12px] text-accent/35 hover:text-accent transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-[12px] text-accent/35 hover:text-accent transition-colors"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
