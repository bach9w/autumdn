/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.imagin.studio",
      "wallpapercave.com",
      "cdn.ferrari.com",
      "cs.copart.com",
      "vis.iaai.com",
      "carstat.dev",
      "wandering-bison-612.convex.site",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
                ? "noindex"
                : "index,follow",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
