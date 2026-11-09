import type { MetadataRoute } from "next";
import { getProjectSlugs } from "./portfolio-data";
import { articleRecords, articlePath } from "./seo/articles";
import { absoluteUrl, blogIndexPath, localLandingPaths, serviceIndexPath, servicePath } from "./seo/paths";
import { serviceRecords } from "./seo/services";

function localizedEntries(paths: { tr: string; en: string }): MetadataRoute.Sitemap {
  const languages = {
    tr: absoluteUrl(paths.tr),
    en: absoluteUrl(paths.en),
  };

  return ["tr", "en"].map((locale) => ({
    url: absoluteUrl(paths[locale as "tr" | "en"]),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pairedPages = [
    localizedEntries({ tr: "/tr", en: "/en" }),
    localizedEntries({ tr: "/tr/about", en: "/en/about" }),
    localizedEntries({ tr: serviceIndexPath("tr"), en: serviceIndexPath("en") }),
    localizedEntries(localLandingPaths),
    localizedEntries({ tr: "/tr/iletisim", en: "/en/contact" }),
    localizedEntries({ tr: blogIndexPath("tr"), en: blogIndexPath("en") }),
    ...serviceRecords.map((service) =>
      localizedEntries({
        tr: servicePath("tr", service.tr.slug),
        en: servicePath("en", service.en.slug),
      }),
    ),
    ...articleRecords.map((article) =>
      localizedEntries({
        tr: articlePath("tr", article.tr.slug),
        en: articlePath("en", article.en.slug),
      }),
    ),
    ...getProjectSlugs().map((slug) =>
      localizedEntries({ tr: `/tr/projects/${slug}`, en: `/en/projects/${slug}` }),
    ),
  ];

  return pairedPages.flat();
}
