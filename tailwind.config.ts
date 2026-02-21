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
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            fontSize: {
                'h1': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'body': ['24px', { lineHeight: '1.5' }],
            }
        },
    },
    plugins: [],
};
export default config;
