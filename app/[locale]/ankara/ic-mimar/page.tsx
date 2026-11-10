import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n";
import { getLocalContent } from "../../../seo/local";
import { LocalLandingPage } from "../../../seo/local-page";
import { absoluteUrl, brandedTitle, localizedAlternates, localLandingPaths } from "../../../seo/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  const copy = getLocalContent(locale);
  const path = localLandingPaths.tr;
  const title = brandedTitle(copy.metaTitle);
  return {
    title: { absolute: title },
    description: copy.description,
    alternates: localizedAlternates("tr", localLandingPaths),
    openGraph: { title, description: copy.description, url: absoluteUrl(path), type: "website" },
    twitter: { card: "summary", title, description: copy.description },
  };
}

export default async function TurkishAnkaraInteriorArchitecturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  return <LocalLandingPage locale="tr" />;
}
