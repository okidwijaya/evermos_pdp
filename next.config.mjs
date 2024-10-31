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
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;
