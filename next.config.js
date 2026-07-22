/** @type {import('next').NextConfig} */
const nextConfig = {
    // Keep build output off iCloud Desktop — syncing .next causes white pages / hung "Starting..."
    distDir: process.env.NEXT_DIST_DIR || '.next',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

export default nextConfig;
