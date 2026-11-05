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
    title: project.images[0].fileName,
    summary:
      locale === "tr"
        ? `${project.images.length} görsel · özgün dosya adları korunmuştur`
        : `${project.images.length} images · original file names preserved`,
    images: project.images.map(({ src, fileName }) => ({ src, fileName, alt: fileName })),
  }));
}

export function getProject(slug: string, locale: Locale): PortfolioProject | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projectRecords.map(({ slug }) => slug);
}
