import type { Metadata } from "next";
import { AboutSection } from "../../about-section";
import { studioLinkedIn } from "../../contact-details";
import { SiteFooter } from "../../site-footer";
import { SiteHeader } from "../../site-header";
import type { Locale } from "../../i18n";
import { absoluteUrl, brandedTitle, breadcrumbSchema, localizedAlternates } from "../../seo/paths";
import { StructuredData } from "../../seo/structured-data";

const profileImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bora-eqGp6ScOEgM94yjAGLwkfeOoHNdC1F.jpeg";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = `/${locale}/about`;
  const title = brandedTitle(locale === "tr" ? "Bora Evgar Hakkında | İç Mimar" : "About Bora Evgar | Interior Architect");
  const description = locale === "tr"
    ? "İç mimar Bora Evgar'ın iç mimarlık, 3D modelleme ve fotogerçekçi mimari görselleştirme yaklaşımını tanıyın."
    : "Meet interior architect Bora Evgar and explore his approach to interior architecture, 3D modelling and photorealistic visualization.";

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates(locale, { tr: "/tr/about", en: "/en/about" }),
    openGraph: { title, description, url: absoluteUrl(path), type: "profile", images: [{ url: profileImage, alt: locale === "tr" ? "Bora Evgar portre fotoğrafı" : "Portrait of Bora Evgar" }] },
    twitter: { card: "summary_large_image", title, description, images: [profileImage] },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const path = `/${locale}/about`;
  const title = locale === "tr" ? "Bora Evgar Hakkında" : "About Bora Evgar";
  const personDescription = locale === "tr"
    ? "İç mimarlık, 3D modelleme ve fotogerçekçi mimari görselleştirme alanlarında 16 yıllık deneyime sahip iç mimar ve görselleştirme uzmanı."
    : "Interior architect and visualization specialist with 16 years of experience in interior architecture, 3D modelling and photorealistic architectural visualization.";
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: title,
        inLanguage: locale === "tr" ? "tr-TR" : "en",
        about: { "@id": "https://boraevgar.com/#person" },
      },
      {
        "@type": "Person",
        "@id": "https://boraevgar.com/#person",
        name: "Bora Evgar",
        jobTitle: locale === "tr" ? "İç mimar ve 3D mimari görselleştirme uzmanı" : "Interior architect and 3D architectural visualization specialist",
        description: personDescription,
        url: absoluteUrl(path),
        image: profileImage,
        worksFor: { "@id": "https://boraevgar.com/#organization" },
        sameAs: [studioLinkedIn],
      },
    ],
  };
  const breadcrumb = breadcrumbSchema([
    { name: locale === "tr" ? "Ana sayfa" : "Home", url: absoluteUrl(`/${locale}`) },
    { name: title, url: absoluteUrl(path) },
  ]);

  return (
    <>
      <SiteHeader
        locale={locale}
        currentHref={path}
        alternateHref={`/${locale === "tr" ? "en" : "tr"}/about`}
      />
      <main id="main-content">
        <StructuredData data={aboutSchema} />
        <StructuredData data={breadcrumb} />
        <AboutSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
