/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

// Local only: keep build output off iCloud Desktop (syncing .next causes white pages / hung "Starting...")
// Vercel always uses the default `.next` so it can find routes-manifest.json.
const distDir = isVercel
  ? '.next'
  : process.env.NEXT_DIST_DIR || '.next';

const nextConfig = {
  distDir,
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
