import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { studioEmail, studioInstagram, studioLinkedIn, studioPhoneE164, studioPostalAddress } from "../contact-details";
import { ContactPanel } from "../contact-panel";
import { HeroSlider } from "../hero-slider";
import { isLocale, messages, type Locale } from "../i18n";
import { getProjects } from "../portfolio-data";
import { ProjectGrid } from "../project-grid";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { absoluteUrl, localizedAlternates, serviceIndexPath, servicePath } from "../seo/paths";
import { getServiceById } from "../seo/services";
import { StructuredData } from "../seo/structured-data";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

const homeServiceIds = [
  "architectural-visualization",
  "technical-documentation",
  "turnkey-interior-architecture",
] as const;

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const copy = messages[locale];
  const image = getProjects(locale)[0]?.images[0];
  const path = `/${locale}`;

  return {
    title: { absolute: copy.metadata.title },
    description: copy.metadata.description,
    alternates: localizedAlternates(locale, { tr: "/tr", en: "/en" }),
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: absoluteUrl(path),
      siteName: "Bora Evgar Studio",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: image ? [{ url: image.src, alt: image.alt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: image ? [image.src] : [],
    },
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const copy = messages[locale];
  const projects = getProjects(locale);
  const gurbagProjectSlug = "application-site-gurbag-genel-merkez-ofisi";
  const projectsWithCovers = projects.filter((project) => {
    const firstImage = project.images[0];
    return Boolean(firstImage?.src) && !firstImage?.isPlaceholder;
  });
  const heroProjects = [
    ...projectsWithCovers.filter((project) => project.slug === gurbagProjectSlug),
    ...projectsWithCovers.filter((project) => project.slug !== gurbagProjectSlug),
  ];
  const heroSlides = heroProjects.map((project) => ({
    project,
    caption:
      project.slug === gurbagProjectSlug && project.badge
        ? `${project.title} · ${project.badge}`
        : `${project.title} · ${project.category}`,
  }));
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://boraevgar.com/#organization",
        name: "Bora Evgar Studio",
        url: absoluteUrl("/tr"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/brand/bora-evgar-logo.png"),
        },
        foundingDate: "2018",
        sameAs: [studioInstagram, studioLinkedIn],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://boraevgar.com/#professional-service",
        name: "Bora Evgar Studio",
        url: absoluteUrl("/tr"),
        email: studioEmail,
        telephone: studioPhoneE164,
        parentOrganization: { "@id": "https://boraevgar.com/#organization" },
        address: {
          "@type": "PostalAddress",
          ...studioPostalAddress,
        },
        description: copy.metadata.description,
        areaServed: [
          { "@type": "City", name: "Ankara" },
          { "@type": "Country", name: "Türkiye" },
        ],
        serviceType:
          locale === "tr"
            ? ["İç mimarlık", "Konut ve ticari mekân tasarımı", "3D mimari görselleştirme", "Teknik projelendirme", "Dış cephe konsept tasarımı"]
            : ["Interior architecture", "Residential and commercial design", "3D architectural visualization", "Technical documentation", "Exterior concept design"],
        sameAs: [studioInstagram, studioLinkedIn],
      },
      {
        "@type": "WebSite",
        "@id": "https://boraevgar.com/#website",
        url: absoluteUrl("/"),
        name: "Bora Evgar Studio",
        inLanguage: ["tr-TR", "en"],
        publisher: { "@id": "https://boraevgar.com/#organization" },
      },
    ],
  };

  return (
    <>
      <SiteHeader
        alternateHref={`/${alternateLocale}`}
        currentHref={`/${locale}`}
        locale={locale}
      />
      <main id="main-content">
        <StructuredData data={organizationSchema} />

        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-intro">
            <div className="hero-title-group">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1 id="hero-title">
                {copy.hero.first} <em>{copy.hero.emphasis}</em>
              </h1>
            </div>
            <div className="hero-aside">
              <p>{copy.hero.description}</p>
              <Link className="text-link" href={`/${locale}#work`}>
                {copy.hero.workLink} <span aria-hidden="true">↘</span>
              </Link>
            </div>
          </div>

          <HeroSlider locale={locale} slides={heroSlides} />
        </section>

        <section className="studio-intro container" id="studio" aria-labelledby="studio-title">
          <div className="studio-label">
            <p className="eyebrow">{copy.studio.eyebrow}</p>
            <span>
              {copy.studio.descriptor}
              <br />
              {copy.studio.location}
            </span>
          </div>
          <div className="studio-copy">
            <h2 aria-label={`${copy.studio.first} ${copy.studio.emphasis}`} id="studio-title">
              {copy.studio.first} <em>{copy.studio.emphasis}</em>
            </h2>
            <p>{copy.studio.description}</p>
            <ul className="studio-details" aria-label={locale === "tr" ? "Stüdyo bilgileri" : "Studio details"}>
              {copy.studio.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </section>

        <ProjectGrid locale={locale} projects={projects} />

        <section className="services-section container" id="process" aria-labelledby="services-title">
          <div className="services-heading">
            <div>
              <p className="eyebrow">{copy.services.eyebrow}</p>
              <h2 id="services-title">
                {copy.services.first}
                <br />
                <em>{copy.services.emphasis}</em>
              </h2>
              <Link className="text-link" href={serviceIndexPath(locale)}>
                {locale === "tr" ? "Tüm hizmetleri inceleyin" : "Explore all services"} <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p>{copy.services.description}</p>
          </div>
          <div className="services-list">
            {copy.services.items.map((service, index) => {
              const serviceId = homeServiceIds[index];
              const relatedService = serviceId ? getServiceById(serviceId) : undefined;

              return (
                <div className="service-item-row" key={service.title}>
                  <details className="service-item" open={index === 0}>
                    <summary className="service-trigger">
                      <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                      <h3>{service.title}</h3>
                      <span className="service-toggle" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p>{service.description}</p>
                    {relatedService ? (
                      <p className="service-item-link">
                        <Link href={servicePath(locale, relatedService[locale].slug)}>
                          {locale === "tr" ? "Hizmet detayları" : "Service details"} <span aria-hidden="true">↗</span>
                        </Link>
                      </p>
                    ) : null}
                  </details>
                  {index === 2 ? (
                    <p className="service-item-project-reference">
                      <Link href={`/${locale}/projects/application-site-gurbag-genel-merkez-ofisi`}>
                        {copy.services.projectReference} <span aria-hidden="true">↗</span>
                      </Link>
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
