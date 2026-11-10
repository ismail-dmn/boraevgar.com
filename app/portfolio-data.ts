import { messages, type Locale } from "./i18n";
import { weTransferProjectRecords } from "./wetransfer-project-records";

export const projectCategoryKeys = ["commercial-projects", "exterior", "concept-renders"] as const;

export type ProjectCategoryKey = (typeof projectCategoryKeys)[number];

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
  const categoryTranslations: Record<string, string> = {
    "ticari projeler": "Commercial Projects",
    "dış cephe": "Exterior Facades",
    "bora evgar konsept renderler": "Bora Evgar Concept Renders",
  };

  if (categoryTranslations[lowerCaseValue]) {
    return categoryTranslations[lowerCaseValue];
  }

  return englishProjectTerms.reduce(
    (label, [turkish, english]) => label.replaceAll(turkish, english),
    lowerCaseValue,
  );
}

function normalizeImportedName(value: string, locale: Locale): string {
  const language = locale === "tr" ? "tr-TR" : "en-US";

  return value
    .trim()
    .replace(/\s*--\s*(?:jpe?g|png|webp)\s*$/iu, "")
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

  return projectRecords.map((project) => {
    const title = normalizeImportedName(translateProjectLabel(project.title, locale), locale);
    const category = categoryLabels[project.categoryKey];
    const summary =
      locale === "tr"
        ? `${title}, ${category.toLocaleLowerCase("tr-TR")} portföyünde yer alan seçili bir çalışmadır.`
        : `${title} is a selected project in the ${category.toLocaleLowerCase("en-US")} portfolio.`;

    return {
      slug: project.slug,
      categoryKey: project.categoryKey,
      sourceFolder: translateProjectLabel(project.sourceFolder, locale),
      category,
      title,
      summary,
      images: project.images.map(({ src, fileName }) => {
        const displayName = normalizeImportedName(translateProjectLabel(fileName, locale), locale);
        const alt =
          displayName === title
            ? displayName
            : locale === "tr"
              ? `${displayName} — ${title} projesi`
              : `${displayName} — ${title} project`;
        return { src, fileName: displayName, alt };
      }),
    };
  });
}

export function getProject(slug: string, locale: Locale): PortfolioProject | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projectRecords.map(({ slug }) => slug);
}
