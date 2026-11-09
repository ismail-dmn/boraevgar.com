import Link from "next/link";
import { ContactPanel } from "../contact-panel";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import type { Locale } from "../i18n";
import { absoluteUrl, breadcrumbSchema, localLandingPaths, servicePath } from "./paths";
import { BreadcrumbTrail, QuestionList } from "./content-components";
import { getServiceById } from "./services";
import { getLocalContent } from "./local";
import { StructuredData } from "./structured-data";

export function LocalLandingPage({ locale }: { locale: Locale }) {
  const copy = getLocalContent(locale);
  const otherLocale = locale === "tr" ? "en" : "tr";
  const currentPath = localLandingPaths[locale];
  const serviceIds = ["interior-architecture", "villa-design", "office-design", "commercial-interiors"] as const;
  const homeLabel = locale === "tr" ? "Ana sayfa" : "Home";
  const breadcrumbItems = [
    { name: homeLabel, url: absoluteUrl(`/${locale}`) },
    { name: copy.title, url: absoluteUrl(currentPath) },
  ];

  return (
    <>
      <SiteHeader locale={locale} currentHref={currentPath} alternateHref={localLandingPaths[otherLocale]} />
      <main id="main-content">
        <BreadcrumbTrail items={[{ label: homeLabel, href: `/${locale}` }, { label: copy.title, href: currentPath }]} />
        <header className="editorial-hero container">
          <p className="eyebrow">{locale === "tr" ? "Ankara · Çankaya" : "Ankara · Çankaya"}</p>
          <h1>{copy.title}</h1>
          <p className="editorial-lead">{copy.intro}</p>
          <p className="editorial-note">{copy.locationNote}</p>
        </header>
        {copy.sections.map((section, index) => (
          <section className="editorial-section container local-area-section" key={section.heading}>
            <div className="editorial-section-heading">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {locale === "tr" ? "HİZMET ALANI" : "SERVICE AREA"}</p>
              <h2>{section.heading}</h2>
            </div>
            <div className="editorial-copy">
              <p>{section.body}</p>
              <ul className="area-tag-list">
                {section.areas.map((area) => <li key={area}>{area}</li>)}
              </ul>
            </div>
          </section>
        ))}
        <section className="editorial-section container">
          <div className="editorial-section-heading">
            <p className="eyebrow">04 / {locale === "tr" ? "TÜRKİYE GENELİ" : "ACROSS TÜRKİYE"}</p>
            <h2>{copy.nationwideHeading}</h2>
          </div>
          <div className="editorial-copy"><p>{copy.nationwideBody}</p></div>
        </section>
        <section className="editorial-pair container" aria-label={locale === "tr" ? "Ankara hizmetleri" : "Ankara services"}>
          {serviceIds.map((id) => {
            const service = getServiceById(id);
            if (!service) return null;
            return (
              <Link href={servicePath(locale, service[locale].slug)} key={id}>
                {service[locale].title} <span aria-hidden="true">↗</span>
              </Link>
            );
          })}
          <Link href={`/${locale}#work`}>
            {locale === "tr" ? "Seçili proje portfolyosu" : "Selected project portfolio"} <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <QuestionList heading={copy.faqHeading} items={copy.faqs} />
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${absoluteUrl(currentPath)}#webpage`,
          url: absoluteUrl(currentPath),
          name: copy.title,
          description: copy.description,
          inLanguage: locale === "tr" ? "tr-TR" : "en",
          about: { "@id": `${absoluteUrl("/")}#professional-service` },
        }} />
        <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
