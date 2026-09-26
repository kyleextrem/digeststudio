import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PopupCTA from '@/components/PopupCTA';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Script from 'next/script';
import { homepageGraph } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const homeMeta = pageMetadata({
  title: 'Be the Newcastle Business Locals Think of First',
  description:
    "Newcastle's local marketing studio. Websites, local SEO and content - backed by Newcastle Digest and 7,500+ subscribers.",
  path: '/',
  absoluteTitle: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digeststudio.com.au'),
  title: {
    default: 'Digest Studio | Newcastle Marketing Studio',
    template: '%s | Digest Studio',
  },
  description: homeMeta.description,
  keywords: [
    'Newcastle marketing',
    'Newcastle business growth',
    'local advertising Newcastle',
    'Newcastle Digest',
    'Digest Studio',
    'marketing agency Newcastle',
  ],
  authors: [{ name: 'Digest Studio' }],
  openGraph: homeMeta.openGraph,
  twitter: homeMeta.twitter,
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraph) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <PopupCTA />
        <Analytics />
        <SpeedInsights />
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
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-ap1.hs-scripts.com/442301086.js"
          strategy="lazyOnload"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1065639906096074');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1065639906096074&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
