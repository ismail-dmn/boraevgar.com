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

const englishProjectTerms: Array<[string, string]> = [
  ["Bora EVGAR concept renderları", "Bora EVGAR concept renders"],
  ["concept poje", "concept project"],
  ["dış cephe", "exterior facade"],
  ["dışcephe", "exterior facade"],
  ["yatak odası", "bedroom"],
  ["oturma odası", "living room"],
  ["çalışma odası", "study room"],
  ["çalışma", "study"],
  ["toplantı", "meeting"],
  ["yemekhane", "cafeteria"],
  ["zemin kat", "ground floor"],
  ["küçük", "small"],
  ["giriş", "entrance"],
  ["banyo", "bathroom"],
  ["kırmızı", "red"],
  ["çocuk", "children"],
  ["mutfak", "kitchen"],
  ["salon", "living room"],
  ["projeleri", "projects"],
  ["projectsi", "projects"],
  ["projectleri", "projects"],
  ["projectler", "projects"],
  ["projectsi", "projects"],
  ["inşaat", "construction"],
  ["cephe", "facade"],
  ["mekanları", "spaces"],
  ["genç odası", "young person room"],
  ["lüks", "luxury"],
  ["mekânı", "interior space"],
  ["ırak", "iraq"],
  ["ticari", "commercial"],
  ["tasarımları", "designs"],
  ["tasarımları", "designs"],
  ["bilişim", "technology"],
  ["mimarlık", "architecture"],
  ["diş kliniği", "dental clinic"],
  ["terapi merkezi", "therapy center"],
  ["makam odası", "executive office"],
  ["özel", "private"],
  ["merkezi", "center"],
  ["kuaför", "salon"],
  ["alternatifli", "alternatives"],
  ["otel", "hotel"],
  ["proje", "project"],
  ["renderları", "renders"],
  ["ofis", "office"],
  ["ofisi", "office"],
  ["cephesi", "facade"],
  ["altın saatte", "golden hour"],
];

function translateProjectLabel(value: string, locale: Locale): string {
  if (locale === "tr") return value;

  const lowerCaseValue = value.toLocaleLowerCase("tr-TR");

  return englishProjectTerms.reduce(
    (label, [turkish, english]) => label.replaceAll(turkish, english),
    lowerCaseValue,
  );
}

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
    sourceFolder: translateProjectLabel(project.sourceFolder, locale),
    workTypeKey,
    workTypeLabel,
    category: categoryLabels[project.categoryKey],
    title: normalizeImportedName(translateProjectLabel(project.images[0].fileName, locale), locale),
    summary:
      locale === "tr"
        ? `${project.images.length} görsel · proje bazlı arşiv`
        : `${project.images.length} images · project-based archive`,
    images: project.images.map(({ src, fileName }) => {
      const displayName = normalizeImportedName(translateProjectLabel(fileName, locale), locale);
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
