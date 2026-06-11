import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/work/testimo",
    },
};

export default function TestimoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
