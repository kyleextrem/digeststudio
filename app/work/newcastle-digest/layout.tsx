import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/brands/newcastle-digest",
    },
};

export default function LegacyDigestLayout({ children }: { children: React.ReactNode }) {
    return children;
}
