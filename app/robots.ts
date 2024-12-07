import { baseUrl } from "app/sitemap";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/obqvi/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
