module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
  images: {
    domains: ["cdn.sanity.io", "localhost"],
    formats: ["image/webp"],
  },
};
