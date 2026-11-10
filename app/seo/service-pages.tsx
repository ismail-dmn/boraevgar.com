import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "../contact-panel";
import { getProjects } from "../portfolio-data";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { absoluteUrl, breadcrumbSchema, serviceIndexPath, servicePath } from "./paths";
import { BreadcrumbTrail, QuestionList } from "./content-components";
import { getService, getServices, serviceRecords, type ServiceId } from "./services";
import { StructuredData } from "./structured-data";
import type { Locale } from "../i18n";

const serviceIndexCopy = {
  tr: {
    title: "İç Mimarlık Hizmetleri",
    intro:
      "Bora Evgar Studio; konut ve ticari mekânlarda konsept tasarım, teknik projelendirme, 3D görselleştirme ve kapsamı belirlenmiş uygulama desteği sunar. Her hizmetin teslimleri proje ihtiyaçlarına göre netleştirilir.",
    eyebrow: "Hizmetler",
    scopeHeading: "Proje ihtiyacına göre seçilen kapsam",
    scope:
      "Tasarım, görselleştirme, teknik çizim ve saha koordinasyonu ayrı veya birlikte planlanabilir. Teklif öncesinde mekân, teslim beklentisi ve sorumluluklar netleştirilir.",
    localLink: "Ankara ve Çankaya hizmet alanını inceleyin",
    articleLink: "İç mimarlık rehberlerini okuyun",
    home: "Ana sayfa",
    services: "Hizmetler",
  },
  en: {
    title: "Interior Architecture Services",
    intro:
      "Bora Evgar Studio works across residential and commercial briefs, with concept design, technical documentation, 3D visualization and implementation support defined by scope. Deliverables are agreed for each project.",
    eyebrow: "Services",
    scopeHeading: "A scope shaped around the project",
    scope:
      "Design, visualization, technical drawings and site coordination can be planned separately or together. The space, expected deliverables and responsibilities are clarified before a proposal.",
    localLink: "Explore the Ankara and Çankaya service area",
    articleLink: "Read the interior architecture guides",
    home: "Home",
    services: "Services",
  },
} as const;

function localePaths(locale: Locale) {
  return {
    current: serviceIndexPath(locale),
    alternate: serviceIndexPath(locale === "tr" ? "en" : "tr"),
  };
}

export function ServicesIndexPage({ locale }: { locale: Locale }) {
  const copy = serviceIndexCopy[locale];
  const paths = localePaths(locale);
  const services = getServices(locale);
  const entries = services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: absoluteUrl(servicePath(locale, service.slug)),
  }));

  return (
    <>
      <SiteHeader locale={locale} currentHref={paths.current} alternateHref={paths.alternate} />
      <main id="main-content">
        <BreadcrumbTrail items={[{ label: copy.home, href: `/${locale}` }, { label: copy.services, href: paths.current }]} />
        <header className="editorial-hero container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="editorial-lead">{copy.intro}</p>
        </header>
        <section className="editorial-section container" aria-labelledby="services-list-title">
          <div className="editorial-section-heading">
            <p className="eyebrow">01 / {String(services.length).padStart(2, "0")}</p>
            <h2 id="services-list-title">{copy.scopeHeading}</h2>
            <p>{copy.scope}</p>
          </div>
          <div className="service-card-grid">
            {services.map((service, index) => (
              <Link className="service-card" href={servicePath(locale, service.slug)} key={service.id}>
                <span className="service-card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="text-link">
                  {locale === "tr" ? "Hizmeti incele" : "Explore service"} <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="editorial-pair container" aria-label={locale === "tr" ? "İlgili içerikler" : "Related pages"}>
          <Link href={locale === "tr" ? "/tr/ankara/ic-mimar" : "/en/ankara/interior-architect"}>
            {copy.localLink} <span aria-hidden="true">↗</span>
          </Link>
          <Link href={`/${locale}/blog`}>
            {copy.articleLink} <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: copy.title,
            description: copy.intro,
            url: absoluteUrl(paths.current),
            inLanguage: locale === "tr" ? "tr-TR" : "en",
            mainEntity: { "@type": "ItemList", itemListElement: entries },
          }}
        />
        <StructuredData
          data={breadcrumbSchema([
            { name: copy.home, url: absoluteUrl(`/${locale}`) },
            { name: copy.services, url: absoluteUrl(paths.current) },
          ])}
        />
        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

const relatedServiceIds: Readonly<Record<ServiceId, readonly ServiceId[]>> = {
  "interior-architecture": ["villa-design", "residential-design", "technical-documentation"],
  "villa-design": ["residential-design", "architectural-visualization", "exterior-design"],
  "residential-design": ["interior-architecture", "villa-design", "architectural-visualization"],
  "office-design": ["commercial-interiors", "technical-documentation", "turnkey-interior-architecture"],
  "commercial-interiors": ["hotel-interiors", "restaurant-cafe-interiors", "office-design"],
  "hotel-interiors": ["commercial-interiors", "restaurant-cafe-interiors", "turnkey-interior-architecture"],
  "restaurant-cafe-interiors": ["commercial-interiors", "hotel-interiors", "turnkey-interior-architecture"],
  "turnkey-interior-architecture": ["interior-architecture", "technical-documentation", "commercial-interiors"],
  "architectural-visualization": ["interior-architecture", "villa-design", "exterior-design"],
  "technical-documentation": ["interior-architecture", "office-design", "turnkey-interior-architecture"],
  "exterior-design": ["villa-design", "architectural-visualization", "technical-documentation"],
};

export function ServiceDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const service = getService(locale, slug);

  if (!service) {
    notFound();
  }

  const copy = service[locale];
  const currentPath = servicePath(locale, copy.slug);
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const alternatePath = servicePath(alternateLocale, service[alternateLocale].slug);
  const serviceIndexLabel = locale === "tr" ? "Hizmetler" : "Services";
  const homeLabel = locale === "tr" ? "Ana sayfa" : "Home";
  const breadcrumbItems = [
    { name: homeLabel, url: absoluteUrl(`/${locale}`) },
    { name: serviceIndexLabel, url: absoluteUrl(serviceIndexPath(locale)) },
    { name: copy.title, url: absoluteUrl(currentPath) },
  ];
  const projects = getProjects(locale);
  const relatedProjects = (service.relatedProjectSlugs ?? [])
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));
  const relatedServices = relatedServiceIds[service.id]
    .map((id) => serviceRecords.find((record) => record.id === id))
    .filter((record): record is (typeof serviceRecords)[number] => Boolean(record));

  return (
    <>
      <SiteHeader locale={locale} currentHref={currentPath} alternateHref={alternatePath} />
      <main id="main-content">
        <BreadcrumbTrail items={[
          { label: homeLabel, href: `/${locale}` },
          { label: serviceIndexLabel, href: serviceIndexPath(locale) },
          { label: copy.title, href: currentPath },
        ]} />
        <header className="editorial-hero container">
          <p className="eyebrow">{locale === "tr" ? "İç mimarlık hizmeti" : "Interior architecture service"}</p>
          <h1>{copy.title}</h1>
          <p className="editorial-lead">{copy.intro}</p>
          <p className="editorial-note">
            {locale === "tr"
              ? "Ankara/Çankaya merkezli stüdyo, Türkiye genelinden gelen proje taleplerini kapsam ve saha koordinasyonuna göre değerlendirir."
              : "Based in Ankara/Çankaya, the studio assesses project enquiries from across Türkiye according to scope and site coordination needs."}
          </p>
        </header>
        <section className="editorial-section container" aria-labelledby="service-scope-title">
          <div className="editorial-section-heading">
            <p className="eyebrow">01 / {locale === "tr" ? "KAPSAM" : "SCOPE"}</p>
            <h2 id="service-scope-title">{copy.scopeHeading}</h2>
          </div>
          <ul className="editorial-bullets">
            {copy.scope.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="editorial-section container" aria-labelledby="service-process-title">
          <div className="editorial-section-heading">
            <p className="eyebrow">02 / {locale === "tr" ? "SÜREÇ" : "PROCESS"}</p>
            <h2 id="service-process-title">{copy.processHeading}</h2>
          </div>
          <ol className="process-grid">
            {copy.process.map((step, index) => (
              <li className="process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
        {relatedProjects.length > 0 ? (
          <section className="editorial-section container" aria-labelledby="related-work-title">
            <div className="editorial-section-heading">
              <p className="eyebrow">03 / {locale === "tr" ? "PORTFOLYO" : "PORTFOLIO"}</p>
              <h2 id="related-work-title">{locale === "tr" ? "İlgili görsel çalışmalar" : "Selected visual work"}</h2>
            </div>
            <ul className="related-project-list">
              {relatedProjects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/${locale}/projects/${project.slug}`}>
                    <span>{project.title}</span>
                    <span className="related-project-category">{project.category}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <QuestionList heading={copy.faqHeading} items={copy.faqs} />
        <section className="editorial-pair container" aria-label={locale === "tr" ? "Diğer hizmetler" : "Other services"}>
          {relatedServices.map((record) => (
            <Link href={servicePath(locale, record[locale].slug)} key={record.id}>
              {record[locale].title} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </section>
        <StructuredData data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${absoluteUrl(currentPath)}#webpage`,
              url: absoluteUrl(currentPath),
              name: copy.title,
              description: copy.description,
              inLanguage: locale === "tr" ? "tr-TR" : "en",
              isPartOf: { "@id": `${absoluteUrl("/")}#website` },
              mainEntity: { "@id": `${absoluteUrl(currentPath)}#service` },
            },
            {
              "@type": "Service",
              "@id": `${absoluteUrl(currentPath)}#service`,
              name: copy.title,
              serviceType: copy.title,
              description: copy.description,
              url: absoluteUrl(currentPath),
              provider: { "@id": `${absoluteUrl("/")}#professional-service` },
              areaServed: [
                { "@type": "City", name: "Ankara" },
                { "@type": "Country", name: "Türkiye" },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl(currentPath)}#faq`,
              inLanguage: locale === "tr" ? "tr-TR" : "en",
              mainEntity: copy.faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ],
        }} />
        <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
