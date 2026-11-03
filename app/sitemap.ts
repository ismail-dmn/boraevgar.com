import type { MetadataRoute } from "next";
import { getProjectSlugs } from "./portfolio-data";

const siteUrl = "https://boraevgar.com";
const locales = ["tr", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        tr: `${siteUrl}/tr`,
        en: `${siteUrl}/en`,
      },
    },
  }));

  const projectPages = getProjectSlugs().flatMap((slug) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/projects/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${siteUrl}/tr/projects/${slug}`,
          en: `${siteUrl}/en/projects/${slug}`,
        },
      },
    })),
  );

  return [...homePages, ...projectPages];
}
