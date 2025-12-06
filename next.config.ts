/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← ВАЖНО
  images: {
    unoptimized: true, // картинки без встроенной оптимизации Next.js
  },
  trailingSlash: true, // чтобы пути работали на хостинге
};

module.exports = nextConfig;
