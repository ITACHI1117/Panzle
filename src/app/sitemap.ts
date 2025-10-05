import { MetadataRoute } from "next";
// JOSEPH tyr and check what this does and update it

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://panzle.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://panzle.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://panzle.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
