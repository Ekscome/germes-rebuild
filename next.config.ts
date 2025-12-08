/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // обязательно для статики, иначе ошибка
  },

  trailingSlash: true, // желательно для reg.ru
};

module.exports = nextConfig;
