import { messages, type Locale } from "./i18n";
import { weTransferProjectRecords } from "./wetransfer-project-records";

export const projectCategoryKeys = ["residential", "hospitality", "commercial"] as const;

export type ProjectCategoryKey = (typeof projectCategoryKeys)[number];
export type ProjectWorkTypeKey = "design-render" | "implemented";

type ProjectImageRecord = {
  src: string;
  fileName: string;
};

type ProjectRecord = {
  slug: string;
  categoryKey: ProjectCategoryKey;
  sourceFolder: string;
  title: string;
  images: readonly ProjectImageRecord[];
};

type ProjectImage = {
  src: string;
  fileName: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  categoryKey: ProjectCategoryKey;
  sourceFolder: string;
  workTypeKey: ProjectWorkTypeKey;
  workTypeLabel: string;
  category: string;
  title: string;
  summary: string;
  images: readonly ProjectImage[];
};

const projectRecords: readonly ProjectRecord[] = weTransferProjectRecords;

function normalizeImportedName(value: string, locale: Locale): string {
  const language = locale === "tr" ? "tr-TR" : "en-US";

  return value
    .replace(/\s*\(\d+\)\s*$/u, "")
    .trim()
    .split(/\s+/u)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLocaleLowerCase(language);
      return lower.charAt(0).toLocaleUpperCase(language) + lower.slice(1);
    })
    .join(" ");
}

export function getProjects(locale: Locale): PortfolioProject[] {
  const categoryLabels = messages[locale].work.categoryLabels;
  const workTypeKey: ProjectWorkTypeKey = "design-render";
  const workTypeLabel = messages[locale].work.filterLabels[workTypeKey];

  return projectRecords.map((project) => ({
    slug: project.slug,
    categoryKey: project.categoryKey,
    sourceFolder: project.sourceFolder,
    workTypeKey,
    workTypeLabel,
    category: categoryLabels[project.categoryKey],
    title: normalizeImportedName(project.images[0].fileName, locale),
    summary:
      locale === "tr"
        ? `${project.images.length} görsel · proje bazlı arşiv`
        : `${project.images.length} images · project-based archive`,
    images: project.images.map(({ src, fileName }) => {
      const displayName = normalizeImportedName(fileName, locale);
      return { src, fileName: displayName, alt: displayName };
    }),
  }));
}

export function getProject(slug: string, locale: Locale): PortfolioProject | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projectRecords.map(({ slug }) => slug);
}
