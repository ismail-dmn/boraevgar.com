import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n";
import { BlogIndexPage } from "../../seo/blog-pages";
import { absoluteUrl, blogIndexPath, brandedTitle, localizedAlternates } from "../../seo/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const path = blogIndexPath(locale);
  const title = locale === "tr" ? "İç Mimarlık ve Tasarım Rehberleri" : "Interior Architecture and Design Guides";
  const description = locale === "tr"
    ? "İç mimarlık proje süreci, anahtar teslim hizmet kapsamı, villa tasarımı, malzeme ve aydınlatma üzerine açıklayıcı rehberler."
    : "Practical guides to interior architecture, turnkey project scope, villa design, materials and lighting.";
  const fullTitle = brandedTitle(title);
  return {
    title: { absolute: fullTitle },
    description,
    alternates: localizedAlternates(locale, { tr: blogIndexPath("tr"), en: blogIndexPath("en") }),
    openGraph: { title: fullTitle, description, url: absoluteUrl(path), type: "website" },
    twitter: { card: "summary", title: fullTitle, description },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <BlogIndexPage locale={locale} />;
}
