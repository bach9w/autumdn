import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://myride.bg/home",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://myride.bg/home",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://myride.bg/auction",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.5,
    },
  ];
}
