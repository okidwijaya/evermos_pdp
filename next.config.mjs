/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
          rules: {
            "*.scss": {
              loaders: ["sass-loader"],
              as: "*.css",
            },
          },
        }
    },
    images: {
      domains: ['cdn.shopify.com'],
    },
};

export default nextConfig;
