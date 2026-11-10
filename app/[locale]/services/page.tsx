import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n";
import { ServicesIndexPage } from "../../seo/service-pages";
import { absoluteUrl, localizedAlternates, serviceIndexPath } from "../../seo/paths";
import { getProjects } from "../../portfolio-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  const image = getProjects(locale)[0]?.images[0];
  const path = serviceIndexPath(locale);
  const title = "Interior Architecture Services | Bora Evgar Studio";
  const description = "Interior architecture, villa and residential design, office and commercial interiors, visualization and technical documentation.";

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates(locale, { tr: serviceIndexPath("tr"), en: path }),
    openGraph: { title, description, url: absoluteUrl(path), type: "website", images: image ? [{ url: image.src, alt: image.alt }] : [] },
    twitter: { card: "summary_large_image", title, description, images: image ? [image.src] : [] },
  };
}

export default async function EnglishServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  return <ServicesIndexPage locale="en" />;
}
