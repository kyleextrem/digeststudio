import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
    metadataBase: new URL("https://digeststudio.com.au"),
    title: "Be the Newcastle Business Locals Think of First | Digest Studio",
    description: "Newcastle's local marketing partner. We optimize your local presence AND distribute your message to our 7,000+ local subscribers.",
    keywords: ["Newcastle marketing", "Newcastle business growth", "local advertising Newcastle", "Newcastle Digest", "Digest Studio", "marketing agency Newcastle"],
    authors: [{ name: "Digest Studio" }],
    openGraph: {
        type: "website",
        url: "https://digeststudio.com.au/",
        title: "Be the Newcastle Business Locals Think of First | Digest Studio",
        description: "The only Newcastle marketing studio with distribution baked in. Results in 30 days.",
        siteName: "Digest Studio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Digest Studio - Newcastle's Local Marketing partner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Be the Newcastle Business Locals Think of First | Digest Studio",
        description: "The only Newcastle marketing studio with distribution baked in. Results in 30 days.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://digeststudio.com.au/",
    },
    manifest: "/manifest.json",
    icons: {
        apple: "/apple-touch-icon.png", // We'll need to make sure this exists or use the SVG we have
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
