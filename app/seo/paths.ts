import type { Metadata } from "next";
import type { Locale } from "../i18n";

export const SITE_ORIGIN = "https://boraevgar.com";

export type LanguagePaths = Readonly<{ tr: string; en: string }>;
export type BreadcrumbItem = Readonly<{ name: string; url: string }>;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_ORIGIN).toString();
}

export function brandedTitle(title: string) {
  const cleanTitle = title.trim();
  return cleanTitle.endsWith("| Bora Evgar Studio")
    ? cleanTitle
    : `${cleanTitle} | Bora Evgar Studio`;
}

export function localizedAlternates(
  locale: Locale,
  paths: LanguagePaths,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: absoluteUrl(paths[locale]),
    languages: {
      tr: absoluteUrl(paths.tr),
      en: absoluteUrl(paths.en),
      "x-default": absoluteUrl(paths.tr),
    },
  };
}

export function serviceIndexPath(locale: Locale) {
  return locale === "tr" ? "/tr/hizmetler" : "/en/services";
}

export function servicePath(locale: Locale, slug: string) {
  return `${serviceIndexPath(locale)}/${slug}`;
}

export function blogIndexPath(locale: Locale) {
  return `/${locale}/blog`;
}

export function blogPath(locale: Locale, slug: string) {
  return `${blogIndexPath(locale)}/${slug}`;
}

export const localLandingPaths: LanguagePaths = {
  tr: "/tr/ankara/ic-mimar",
  en: "/en/ankara/interior-architect",
};

export function breadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
