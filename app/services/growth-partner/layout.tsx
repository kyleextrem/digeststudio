import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/packages/growth-partner",
    },
};

export default function GrowthPartnerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
