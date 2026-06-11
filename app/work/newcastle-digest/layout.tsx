import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/work/newcastle-digest",
    },
};

export default function NewcastleDigestLayout({ children }: { children: React.ReactNode }) {
    return children;
}
