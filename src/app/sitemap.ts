import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site-config";
import { origamiData } from "../data/origami";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/infrastructure",
    "/career",
    "/contact",
    "/origami",
    "/origami/easy",
    "/origami/medium",
    "/origami/hard",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const tutorialEntries: MetadataRoute.Sitemap = origamiData.map((item) => ({
    url: `${siteConfig.url}/origami/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...tutorialEntries];
}
