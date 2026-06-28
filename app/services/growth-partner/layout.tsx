import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Growth Partner Plan | Ongoing Local Marketing | Digest Studio",
    description:
        "Monthly local SEO, Google Business Profile management, content, and growth strategy for Newcastle businesses, backed by Newcastle Digest's audience.",
    alternates: {
        canonical: "/services/growth-partner",
    },
};

export default function GrowthPartnerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
