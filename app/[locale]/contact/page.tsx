import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n";
import { ContactPage } from "../../seo/contact-page";
import { absoluteUrl, localizedAlternates } from "../../seo/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  const path = "/en/contact";
  const title = "Contact Bora Evgar Studio | Interior Architecture";
  const description = "Discuss your interior architecture, villa, residential or commercial project with Bora Evgar Studio in Ankara, Türkiye.";
  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates("en", { tr: "/tr/iletisim", en: path }),
    openGraph: { title, description, url: absoluteUrl(path), type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function EnglishContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  return <ContactPage locale="en" />;
}
