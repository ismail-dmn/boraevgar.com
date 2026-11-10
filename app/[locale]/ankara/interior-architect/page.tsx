import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n";
import { getLocalContent } from "../../../seo/local";
import { LocalLandingPage } from "../../../seo/local-page";
import { absoluteUrl, brandedTitle, localizedAlternates, localLandingPaths } from "../../../seo/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  const copy = getLocalContent(locale);
  const path = localLandingPaths.en;
  const title = brandedTitle(copy.metaTitle);
  return {
    title: { absolute: title },
    description: copy.description,
    alternates: localizedAlternates("en", localLandingPaths),
    openGraph: { title, description: copy.description, url: absoluteUrl(path), type: "website" },
    twitter: { card: "summary", title, description: copy.description },
  };
}

export default async function EnglishAnkaraInteriorArchitecturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  return <LocalLandingPage locale="en" />;
}
