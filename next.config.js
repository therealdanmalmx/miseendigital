module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: false,
    },
  },
  images: {
    domains: ["cdn.sanity.io", "localhost"],
    loader: "cloudinary",
    formats: ["image/webp"],
    // path: "https://test-medigital.surge.sh/",
  },
};
