import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "../../../contact-panel";
import { isLocale, messages, type Locale } from "../../../i18n";
import { getProject, getProjectSlugs, getProjects } from "../../../portfolio-data";
import { SiteFooter } from "../../../site-footer";
import { SiteHeader } from "../../../site-header";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const project = getProject(slug, localeParam);

  if (!project) {
    return {
      title: localeParam === "tr" ? "Proje bulunamadı" : "Project not found",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/${localeParam}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical,
      languages: {
        tr: `/tr/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title} — Bora Evgar Studio`,
      description: project.summary,
      url: canonical,
      locale: localeParam === "tr" ? "tr_TR" : "en_US",
      type: "article",
      images: [{ url: project.images[0].src, alt: project.images[0].alt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
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

  return (
    <>
      <SiteHeader alternateHref={alternateHref} currentHref={currentHref} locale={locale} />
      <main id="main-content">
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
              <p className="eyebrow">
                {project.category} · {project.location} · {project.year}
              </p>
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
            <dt>{copy.project.location}</dt>
            <dd>{project.location}</dd>
          </div>
          <div>
            <dt>{copy.project.services}</dt>
            <dd>{project.services.join(" · ")}</dd>
          </div>
          <div>
            <dt>{copy.project.year}</dt>
            <dd>{project.year}</dd>
          </div>
        </dl>

        <section
          className="project-gallery container"
          aria-label={`${project.title} ${copy.project.gallery}`}
        >
          {project.images.map((image, index) => (
            <figure
              className={`gallery-item${index === 0 ? " gallery-item-featured" : " gallery-item-secondary"}`}
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="gallery-image"
                fill
                sizes={
                  index === 0
                    ? "(max-width: 760px) 100vw, calc(100vw - 72px)"
                    : "(max-width: 760px) 100vw, 66vw"
                }
                src={image.src}
              />
              <figcaption className="gallery-caption">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>
                  {project.title} · {project.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="project-story container">
          <p className="eyebrow">{copy.project.approach}</p>
          <p>{project.narrative}</p>
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

        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
