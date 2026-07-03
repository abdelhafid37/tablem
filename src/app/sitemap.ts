import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tablem.vercel.app";
  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
  ];
}
