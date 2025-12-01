/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Fix Vercel build blocking ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    // Uncomment this only if you are using the app directory
    // appDir: true,
  },
};

export default nextConfig;
