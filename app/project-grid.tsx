"use client";

import Link from "next/link";
import { useState } from "react";
import { messages, type Locale } from "./i18n";
import { projectCategoryKeys, type PortfolioProject, type ProjectCategoryKey } from "./portfolio-data";
import { ProjectImage } from "./project-image";

type ProjectGridProps = {
  locale: Locale;
  projects: readonly PortfolioProject[];
};

type ProjectFilter = "all" | ProjectCategoryKey;

export function ProjectGrid({ locale, projects }: ProjectGridProps) {
  const copy = messages[locale];
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const filters: readonly ProjectFilter[] = ["all", ...projectCategoryKeys];
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.filterCategoryKeys.includes(activeFilter),
  );

  return (
    <section className="work-section container" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div className="section-heading-copy">
          <p className="eyebrow">{copy.work.eyebrow}</p>
          <h2 aria-label={`${copy.work.first} ${copy.work.emphasis}`} id="work-title">
            {copy.work.first} <em>{copy.work.emphasis}</em>
          </h2>
        </div>
        <div
          className="filter-list"
          role="group"
          aria-label={
            locale === "tr"
              ? "Projeleri kategoriye göre filtrele"
              : "Filter projects by category"
          }
        >
          {filters.map((filter) => {
            const label = copy.work.filterLabels[filter];

            return (
              <button
                aria-pressed={activeFilter === filter}
                className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {`${visibleProjects.length} ${locale === "tr" ? "proje gösteriliyor" : "projects shown"}`}
      </p>

      <div className="project-grid">
        {visibleProjects.map((project, index) => {
          const preserveOriginalImage =
            project.slug === "commercial-projects-irak-avrocity-projesi" ||
            project.slug === "commercial-projects-4s-bilisim-teknolojileri" ||
            project.slug === "application-site-gurbag-genel-merkez-ofisi";
          const leadImage = project.images[0];

          return (
            <article className="project-card" key={project.slug}>
              <Link
                aria-label={`${project.title}, ${project.category}${project.badge ? `, ${project.badge}` : ""}, ${project.images.length} ${project.images.length === 1 ? copy.work.frame : copy.work.frames}, ${copy.work.viewProject}`}
                className="project-card-link"
                href={`/${locale}/projects/${project.slug}`}
              >
                <figure
                  className="project-card-image"
                  style={
                    preserveOriginalImage && leadImage.width && leadImage.height
                      ? { aspectRatio: `${leadImage.width} / ${leadImage.height}` }
                      : undefined
                  }
                >
                  <ProjectImage
                    alt={leadImage.alt}
                    className={`project-card-img${preserveOriginalImage ? " project-card-img-original" : ""}`}
                    isPlaceholder={leadImage.isPlaceholder}
                    placeholderLabel={copy.work.imagePlaceholder}
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    src={leadImage.src}
                    unoptimized={preserveOriginalImage || leadImage.src.endsWith(".gif")}
                  />
                  {project.badge ? <span className="project-card-badge">{project.badge}</span> : null}
                  <figcaption className="project-card-overlay">
                    <span className="project-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="project-card-view">
                      {copy.work.viewProject} <span aria-hidden="true">↗</span>
                    </span>
                  </figcaption>
                </figure>
                <div className="project-card-meta">
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-subtitle">{project.sourceFolder}</p>
                  </div>
                  <span className="project-card-year">
                    {project.images.length} {project.images.length === 1 ? copy.work.frame : copy.work.frames}
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
