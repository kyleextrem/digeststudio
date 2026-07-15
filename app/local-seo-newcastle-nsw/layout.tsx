import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Local SEO Newcastle NSW | Get Found on Google | Digest Studio",
    description:
        "Local SEO for Newcastle NSW businesses. Google Business Profile optimisation, local citations, and geo-targeted content that gets you into the map pack. Results in 30 days.",
    alternates: {
        canonical: "/local-seo-newcastle-nsw",
    },
};

export default function LocalSeoNewcastleLayout({ children }: { children: React.ReactNode }) {
    return children;
}
