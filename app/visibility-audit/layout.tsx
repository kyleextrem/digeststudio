import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Newcastle Local Business Visibility Audit | Digest Studio",
    description:
        "Find out how visible your Newcastle business is to local customers. Free 2-minute audit from Digest Studio.",
    alternates: {
        canonical: "/visibility-audit",
    },
};

export default function VisibilityAuditLayout({ children }: { children: React.ReactNode }) {
    return children;
}
