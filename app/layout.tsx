import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupCTA from "@/components/PopupCTA";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Script from "next/script";
import { localBusinessSchema } from "@/lib/schema";

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
    manifest: "/manifest.json",
    icons: {
        icon: "/icon.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </head>
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
                <PopupCTA />
                <Analytics />
                <SpeedInsights />
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-Q1RMQQ4VLQ"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-Q1RMQQ4VLQ');
                    `}
                </Script>
                {/* HubSpot Embed Code */}
                <Script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js-ap1.hs-scripts.com/442301086.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
