import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "../contact-panel";
import { isLocale, messages, type Locale } from "../i18n";
import { getProjects } from "../portfolio-data";
import { ProjectGrid } from "../project-grid";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const copy = messages[locale];
  const projects = getProjects(locale);
  const featuredProject = projects[0];
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bora Evgar Studio",
    url: `https://boraevgar.com/${locale}`,
    email: "hello@boraevgar.com",
    description: copy.metadata.description,
    areaServed: locale === "tr" ? "Dünya çapında" : "Worldwide",
    serviceType: locale === "tr" ? "Mimari görselleştirme" : "Architectural visualization",
  };

  return (
    <>
      <SiteHeader
        alternateHref={`/${alternateLocale}`}
        currentHref={`/${locale}`}
        locale={locale}
      />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

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

          <figure className="hero-visual">
            <Image
              alt={featuredProject.images[0].alt}
              className="hero-visual-image"
              fill
              fetchPriority="high"
              loading="eager"
              sizes="(max-width: 760px) 100vw, calc(100vw - 72px)"
              src={featuredProject.images[0].src}
            />
            <figcaption className="hero-visual-caption">
              <span className="hero-visual-caption-main">
                <span className="hero-index">01 / {String(projects.length).padStart(2, "0")}</span>
                <span>
                  {featuredProject.title} · {featuredProject.category}
                </span>
              </span>
              <Link className="hero-visual-link" href={`/${locale}/projects/${featuredProject.slug}`}>
                {copy.hero.viewProject} <span aria-hidden="true">↗</span>
              </Link>
            </figcaption>
          </figure>
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
          {copy.studio.first}{" "}<em>{copy.studio.emphasis}</em>
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

        <section className="services-section container" aria-labelledby="services-title">
          <div className="services-heading">
            <div>
              <p className="eyebrow">{copy.services.eyebrow}</p>
              <h2 id="services-title">
                {copy.services.first}
                <br />
                <em>{copy.services.emphasis}</em>
              </h2>
            </div>
            <p>{copy.services.description}</p>
          </div>
          <div className="services-list">
            {copy.services.items.map((service, index) => (
              <article className="service-item" key={service.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
