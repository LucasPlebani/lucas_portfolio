/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimisation aggressive des images
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
