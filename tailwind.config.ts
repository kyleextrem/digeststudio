import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF4400',
                accent: '#111827',
                background: '#FFFFFF',
                textPrimary: '#111827',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
                heading: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
            },
            fontSize: {
                'h1': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'body': ['24px', { lineHeight: '1.5' }],
            },
            keyframes: {
                'popup-fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'popup-slide-up': {
                    from: { opacity: '0', transform: 'translateY(16px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'popup-fade-in': 'popup-fade-in 0.3s ease-out',
                'popup-slide-up': 'popup-slide-up 0.35s ease-out',
            },
        },
    },
    plugins: [],
};
export default config;
