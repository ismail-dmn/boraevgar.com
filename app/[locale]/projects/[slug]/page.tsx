import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "../../../contact-panel";
import { isLocale, messages, type Locale } from "../../../i18n";
import { getProject, getProjectSlugs, getProjects } from "../../../portfolio-data";
import { ProjectDossier } from "../../../project-dossier";
import { ProjectImage } from "../../../project-image";
import { SiteFooter } from "../../../site-footer";
import { SiteHeader } from "../../../site-header";
import { absoluteUrl, breadcrumbSchema, localizedAlternates, servicePath } from "../../../seo/paths";
import { getServiceById, type ServiceId } from "../../../seo/services";
import { StructuredData } from "../../../seo/structured-data";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const project = getProject(slug, localeParam);

  if (!project) notFound();

  const canonical = `/${localeParam}/projects/${project.slug}`;
  const title = `${project.title} | Bora Evgar Studio`;

  return {
    title: { absolute: title },
    description: project.summary,
    alternates: localizedAlternates(localeParam, {
      tr: `/tr/projects/${project.slug}`,
      en: `/en/projects/${project.slug}`,
    }),
    openGraph: {
      title,
      description: project.summary,
      url: absoluteUrl(canonical),
      locale: localeParam === "tr" ? "tr_TR" : "en_US",
      type: "article",
      images: [{ url: project.images[0].src, alt: project.images[0].alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [project.images[0].src],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) notFound();
  if (!getProject(slug, localeParam)) notFound();

  return <ProjectPageContent locale={localeParam} slug={slug} />;
}

function ProjectPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const copy = messages[locale];
  const projects = getProjects(locale);
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const currentHref = `/${locale}/projects/${project.slug}`;
  const alternateHref = `/${alternateLocale}/projects/${project.slug}`;
  const projectText = `${project.title} ${project.sourceFolder}`.toLocaleLowerCase(locale === "tr" ? "tr-TR" : "en-US");
  const relatedServiceId: ServiceId =
    project.categoryKey === "exterior"
      ? "exterior-design"
      : project.categoryKey === "concept-renders"
        ? "architectural-visualization"
        : /otel|hotel/u.test(projectText)
          ? "hotel-interiors"
          : /restoran|restaurant|kafe|cafe/u.test(projectText)
            ? "restaurant-cafe-interiors"
            : /villa/u.test(projectText)
              ? "villa-design"
              : /ofis|office|toplantı|meeting/u.test(projectText)
                ? "office-design"
                : "commercial-interiors";
  const relatedService = getServiceById(relatedServiceId);
  const preserveOriginalImages =
    project.slug === "commercial-projects-irak-avrocity-projesi" ||
    project.slug === "commercial-projects-4s-bilisim-teknolojileri";
  const homeLabel = locale === "tr" ? "Ana sayfa" : "Home";
  const portfolioLabel = locale === "tr" ? "Portfolyo" : "Portfolio";
  const projectBreadcrumb = breadcrumbSchema([
    { name: homeLabel, url: absoluteUrl(`/${locale}`) },
    { name: portfolioLabel, url: absoluteUrl(`/${locale}#work`) },
    { name: project.title, url: absoluteUrl(currentHref) },
  ]);
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(currentHref)}#project`,
    name: project.title,
    description: project.summary,
    creator: { "@id": "https://boraevgar.com/#organization" },
    mainEntityOfPage: absoluteUrl(currentHref),
    genre: project.category,
    inLanguage: locale === "tr" ? "tr-TR" : "en",
    isPartOf: { "@id": "https://boraevgar.com/#website" },
    image: project.images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(image.src),
      caption: image.alt,
    })),
  };

  return (
    <>
      <SiteHeader alternateHref={alternateHref} currentHref={currentHref} locale={locale} />
      <main id="main-content">
        <StructuredData data={projectSchema} />
        <StructuredData data={projectBreadcrumb} />
        <header className="project-intro container">
          <div className="project-back-row">
            <Link href={`/${locale}#work`}>
              <span aria-hidden="true">←</span> {copy.project.back}
            </Link>
            <span>
              {copy.project.project} {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="project-heading-row">
            <div>
              <p className="project-source-folder">{project.sourceFolder}</p>
              <h1>{project.title}</h1>
            </div>
            <p className="project-summary">{project.summary}</p>
          </div>
        </header>

        <dl className="project-facts container">
          <div>
            <dt>{copy.project.category}</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>{copy.project.frames}</dt>
            <dd>{`${project.images.length} ${project.images.length === 1 ? copy.work.frame : copy.work.frames}`}</dd>
          </div>
        </dl>

        {project.dossier ? <ProjectDossier dossier={project.dossier} locale={locale} /> : null}

        <section
          className="project-gallery container"
          aria-label={`${project.title} ${copy.project.gallery}`}
        >
          {project.images.map((image, index) => (
            <figure
              className={`gallery-item${index === 0 ? " gallery-item-featured" : " gallery-item-secondary"}`}
              key={image.src}
              style={
                preserveOriginalImages && image.width && image.height
                  ? { aspectRatio: `${image.width} / ${image.height}` }
                  : undefined
              }
            >
              <ProjectImage
                alt={image.alt}
                className={`gallery-image${preserveOriginalImages ? " gallery-image-original" : ""}`}
                isPlaceholder={image.isPlaceholder}
                placeholderLabel={copy.work.imagePlaceholder}
                sizes={
                  index === 0
                    ? "(max-width: 760px) 100vw, calc(100vw - 72px)"
                    : "(max-width: 760px) 100vw, 66vw"
                }
                src={image.src}
                unoptimized={preserveOriginalImages || image.src.endsWith(".gif")}
              />
              <figcaption className="gallery-caption">{image.fileName}</figcaption>
            </figure>
          ))}
        </section>

        <nav
          className="project-next container"
          aria-label={locale === "tr" ? "Proje gezinme" : "Project navigation"}
        >
          <span className="eyebrow">{copy.project.next}</span>
          <Link href={`/${locale}/projects/${nextProject.slug}`}>
            {nextProject.title} <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        {relatedService ? (
          <nav className="project-next container" aria-label={locale === "tr" ? "İlgili hizmet" : "Related service"}>
            <span className="eyebrow">{locale === "tr" ? "HİZMET" : "SERVICE"}</span>
            <Link href={servicePath(locale, relatedService[locale].slug)}>
              {relatedService[locale].title} <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        ) : null}

        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
