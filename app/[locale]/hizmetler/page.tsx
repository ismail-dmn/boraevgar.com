import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n";
import { ServicesIndexPage } from "../../seo/service-pages";
import { absoluteUrl, localizedAlternates, serviceIndexPath } from "../../seo/paths";
import { getProjects } from "../../portfolio-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  const image = getProjects(locale)[0]?.images[0];
  const path = serviceIndexPath(locale);
  const title = "İç Mimarlık Hizmetleri | Bora Evgar Studio";
  const description = "Konut, villa, ofis ve ticari mekânlar için iç mimarlık, 3D görselleştirme, teknik proje ve anahtar teslim hizmet kapsamları.";

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates(locale, { tr: path, en: serviceIndexPath("en") }),
    openGraph: { title, description, url: absoluteUrl(path), type: "website", images: image ? [{ url: image.src, alt: image.alt }] : [] },
    twitter: { card: "summary_large_image", title, description, images: image ? [image.src] : [] },
  };
}

export default async function TurkishServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  return <ServicesIndexPage locale="tr" />;
}
