import type { ProjectCategoryKey } from "./portfolio-data";

const names: Array<[string, ProjectCategoryKey, string, string, number]> = [
  ["bora-evgar-concept-renderlari", "residential", "Bora Evgar Concept Renderları", "Bora Evgar Concept Renders", 64],
  ["beytepe-villa-ofis-cephe", "residential", "Beytepe Villa Ofis Cephe", "Beytepe Villa Office Facade", 2],
  ["afrika-banka-proje", "commercial", "Afrika Banka Projesi", "Africa Bank Project", 2],
  ["dis-cephe-konut-projesi", "residential", "Dış Cephe Konut Projesi", "Residential Exterior Project", 2],
  ["discephe-concept", "residential", "Dış Cephe Concept", "Exterior Concept", 4],
  ["maz-insaat-cephe-bilkent", "commercial", "MAZ İnşaat Cephe Bilkent", "MAZ Construction Bilkent Facade", 2],
  ["menderes-projesi", "residential", "Menderes Projesi", "Menderes Project", 3],
  ["ozel-villa-ankara", "residential", "Özel Villa Ankara", "Private Villa Ankara", 3],
  ["4s-bilisim-teknolojileri", "commercial", "4S Bilişim Teknolojileri", "4S Information Technologies", 9],
  ["ankara-ofis-toplanti", "commercial", "Ankara Ofis Toplantı", "Ankara Office Meeting Room", 2],
  ["antalya-otel", "hospitality", "Antalya Otel", "Antalya Hotel", 3],
  ["arinna-park", "commercial", "Arinna Park", "Arinna Park", 4],
  ["concorde-otel", "hospitality", "Concorde Otel", "Concorde Hotel", 7],
  ["eae-merkez-yemekhane", "commercial", "EAE Merkez Yemekhane", "EAE Headquarters Cafeteria", 9],
  ["formaggio-cafe", "hospitality", "Formaggio Cafe", "Formaggio Cafe", 3],
  ["gazprom-projesi", "commercial", "Gazprom Projesi", "Gazprom Project", 3],
  ["hakan-bey-villa", "residential", "Hakan Bey Villa", "Hakan Bey Villa", 5],
  ["istanbul-ab-mimarlik-villa", "residential", "İstanbul AB Mimarlık Villa", "Istanbul AB Architecture Villa", 5],
  ["istanbul-terapi-merkezi-hande-hanim", "commercial", "İstanbul Terapi Merkezi Hande Hanım", "Istanbul Hande Therapy Center", 7],
  ["istanbul-ozel-villa", "residential", "İstanbul Özel Villa", "Istanbul Private Villa", 10],
  ["izmir-dis-klinigi", "commercial", "İzmir Diş Kliniği", "Izmir Dental Clinic", 4],
  ["kaizen-kuafor", "commercial", "Kaizen Kuaför", "Kaizen Hair Studio", 5],
  ["maeven-design-yatak-odasi", "residential", "Maeven Design Yatak Odası", "Maeven Design Bedroom", 5],
  ["manaz-interiors", "residential", "Manaz Interiors", "Manaz Interiors", 3],
  ["nevsehir-makam-odasi-tasarimlari-alternatifli", "commercial", "Nevşehir Makam Odası Tasarımları", "Nevsehir Executive Office Studies", 14],
  ["yasamkent-ofis-projesi", "commercial", "Yaşamkent Ofis Projesi", "Yasamkent Office Project", 3],
  ["irak-avrocity-projesi", "commercial", "Irak Avrocity Projesi", "Iraq Avrocity Project", 15],
];

export const archiveProjects = names.map(([slug, categoryKey, tr, en, count]) => ({
  slug,
  categoryKey,
  workTypeKey: "design-render" as const,
  title: { tr, en },
  summary: {
    tr: `${tr} için proje bazlı tasarım ve görselleştirme çalışmaları.`,
    en: `Project-based design and visualization studies for ${en}.`,
  },
  narrative: {
    tr: "Konsept kararları, malzeme dili ve fotogerçekçi görseller aynı proje arşivinde bir araya geliyor.",
    en: "Concept decisions, material language and photorealistic visuals come together in one project archive.",
  },
  images: Array.from({ length: count }, (_, index) => ({
    src: `/images/projects/${slug}/${String(index + 1).padStart(2, "0")}.webp`,
    alt: { tr: `${tr} proje görseli ${index + 1}`, en: `${en} project image ${index + 1}` },
  })),
}));
