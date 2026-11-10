import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n";
import { ContactPage } from "../../seo/contact-page";
import { absoluteUrl, localizedAlternates } from "../../seo/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  const path = "/tr/iletisim";
  const title = "İç Mimarlık Projesi İçin İletişim | Bora Evgar Studio";
  const description = "Bora Evgar Studio ile iç mimarlık, villa, konut veya ticari mekân projenizi konuşun. Telefon, WhatsApp, e-posta ve Çankaya adresi.";
  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates("tr", { tr: path, en: "/en/contact" }),
    openGraph: { title, description, url: absoluteUrl(path), type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function TurkishContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  return <ContactPage locale="tr" />;
}
