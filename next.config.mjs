/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/webp'], deviceSizes: [390, 640, 828, 1080, 1280, 1600] },
  poweredByHeader: false,
};
export default nextConfig;
