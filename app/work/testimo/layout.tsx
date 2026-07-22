import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/brands/testimo",
    },
};

export default function LegacyTestimoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
