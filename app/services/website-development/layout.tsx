import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Development Newcastle | Custom-Built, Live in 14 Days | Digest Studio",
    description:
        "Custom-coded websites for Newcastle businesses. No templates, no themes. From idea to live site in 14 days.",
    alternates: {
        canonical: "/services/website-development",
    },
};

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
    return children;
}
