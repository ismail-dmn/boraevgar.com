import type { Locale } from "./i18n";

export const projectCategoryKeys = ["residential", "hospitality", "commercial"] as const;

export type ProjectCategoryKey = (typeof projectCategoryKeys)[number];

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectContent = {
  title: string;
  category: string;
  location: string;
  summary: string;
  narrative: string;
  services: readonly string[];
  images: readonly ProjectImage[];
};

type ProjectRecord = {
  slug: string;
  year: string;
  categoryKey: ProjectCategoryKey;
  content: Record<Locale, ProjectContent>;
};

export type PortfolioProject = Omit<ProjectRecord, "content"> & ProjectContent;

const projectRecords: readonly ProjectRecord[] = [
  {
    slug: "quiet-luxury",
    year: "2024",
    categoryKey: "residential",
    content: {
      tr: {
        title: "Quiet Luxury",
        category: "Konut",
        location: "İstanbul",
        summary:
          "Doğal ışık, yalın geometri ve taş ile meşenin dokusuyla şekillenen özel bir konut.",
        narrative:
          "Görsel dil, mimariyle yarışmak yerine onu takip ediyor. Yumuşak gün ışığı, doğal malzemeler ve ölçülü kamera kullanımı her karede sakin bir karşılama hissi yaratıyor.",
        services: ["İç mekân görselleştirme", "Dış mekân görselleştirme", "Sanat yönetimi"],
        images: [
          {
            src: "/images/quiet-luxury-01.png",
            alt: "Yansıma havuzu ve ağaçlarla çevrili avluya açılan çağdaş taş konut",
          },
          {
            src: "/images/quiet-luxury-02.png",
            alt: "Traverten yüzeyler ve yumuşak gün ışığıyla tasarlanmış sıcak salon",
          },
        ],
      },
      en: {
        title: "Quiet Luxury",
        category: "Residential",
        location: "Istanbul",
        summary:
          "A private residence shaped by natural light, quiet geometry and a tactile palette of stone and oak.",
        narrative:
          "The visual language follows the architecture rather than competing with it. Soft daylight, grounded materials and a measured camera create a calm sense of arrival across every frame.",
        services: ["Interior imagery", "Exterior imagery", "Art direction"],
        images: [
          {
            src: "/images/quiet-luxury-01.png",
            alt: "Contemporary stone residence opening onto a reflecting pool and tree-lined courtyard",
          },
          {
            src: "/images/quiet-luxury-02.png",
            alt: "Warm, minimal living room with travertine surfaces and soft daylight",
          },
        ],
      },
    },
  },
  {
    slug: "the-courtyard",
    year: "2024",
    categoryKey: "hospitality",
    content: {
      tr: {
        title: "The Courtyard",
        category: "Konaklama",
        location: "Bodrum",
        summary:
          "Açık taş, uzun gölgeler ve Akdeniz bitkileriyle sakin bir ritim kuran butik bir kaçış.",
        narrative:
          "Görseller, geniş avlunun etkileyici ölçeğini konaklamaya dair samimi anlarla buluşturuyor. Güneşle yıkanmış sıcak palet, deneyimi kıyı manzarasına bağlıyor.",
        services: ["Dış mekân görselleştirme", "İç mekân görselleştirme", "Sanat yönetimi"],
        images: [
          {
            src: "/images/courtyard-01.png",
            alt: "Açık taş pavyonları ve uzun yansıma havuzuyla Akdeniz otel avlusu",
          },
          {
            src: "/images/courtyard-02.png",
            alt: "Sıcak sıva, meşe ve keten dokularıyla sakin bir butik otel odası",
          },
        ],
      },
      en: {
        title: "The Courtyard",
        category: "Hospitality",
        location: "Bodrum",
        summary:
          "A boutique retreat where pale stone, long shadows and Mediterranean planting set an unhurried rhythm.",
        narrative:
          "The imagery pairs the generous scale of the courtyard with intimate moments of hospitality. A warm, sun-washed palette keeps the experience connected to its coastal setting.",
        services: ["Exterior imagery", "Interior imagery", "Art direction"],
        images: [
          {
            src: "/images/courtyard-01.png",
            alt: "Mediterranean hotel courtyard with pale stone pavilions and a long reflecting pool",
          },
          {
            src: "/images/courtyard-02.png",
            alt: "Quiet boutique hotel suite with warm plaster, oak joinery and linen bedding",
          },
        ],
      },
    },
  },
  {
    slug: "soft-geometry",
    year: "2023",
    categoryKey: "residential",
    content: {
      tr: {
        title: "Soft Geometry",
        category: "Konut",
        location: "Londra",
        summary:
          "Yumuşak formları ev sıcaklığıyla buluşturan, özenle ele alınmış bir Londra evi.",
        narrative:
          "Kavisli sıva, açık meşe ve Londra’nın yumuşak gün ışığı karelerin karakterini belirliyor. Her kompozisyon, mimariyi ve malzeme detaylarını öne çıkaran bir nefes alanı bırakıyor.",
        services: ["İç mekân görselleştirme", "Malzeme yönlendirmesi", "Sanat yönetimi"],
        images: [
          {
            src: "/images/soft-geometry-01.png",
            alt: "Yumuşak ışık alan Londra evinde heykelsi, kıvrımlı merdiven",
          },
          {
            src: "/images/soft-geometry-02.png",
            alt: "Ceviz masa ve kavisli sıva kemeriyle sakin bir Londra yemek odası",
          },
        ],
      },
      en: {
        title: "Soft Geometry",
        category: "Residential",
        location: "London",
        summary:
          "A considered townhouse interior balancing sculptural forms with the familiar warmth of home.",
        narrative:
          "Curved plaster, pale oak and overcast daylight give the images their character. Each composition holds a little breathing room, allowing the architecture and its material details to lead.",
        services: ["Interior imagery", "Material direction", "Art direction"],
        images: [
          {
            src: "/images/soft-geometry-01.png",
            alt: "Sculptural curved staircase in a softly lit London townhouse interior",
          },
          {
            src: "/images/soft-geometry-02.png",
            alt: "Quiet townhouse dining room with a walnut table and softly curved plaster arch",
          },
        ],
      },
    },
  },
  {
    slug: "afterlight",
    year: "2023",
    categoryKey: "commercial",
    content: {
      tr: {
        title: "Afterlight",
        category: "Ticari",
        location: "Dubai",
        summary:
          "Sıcak taş, bronz detaylar ve günün son ışığı etrafında kurgulanan bir konaklama mekânı.",
        narrative:
          "Proje, giriş alanının açıklığından salonun daha sakin atmosferine ilerliyor. Yansıyan ışık ve ölçülü malzeme paleti, iki sahneyi farklı ama birbiriyle ilişkili kılıyor.",
        services: ["İç mekân görselleştirme", "Işık tasarımı yönlendirmesi", "Sanat yönetimi"],
        images: [
          {
            src: "/images/afterlight-01.png",
            alt: "Yontulmuş traverten bankosu ve bronz detaylarla güneş alan otel lobisi",
          },
          {
            src: "/images/afterlight-02.png",
            alt: "Kavisli oturma grupları ve akşam manzarasıyla çağdaş otel salonu",
          },
        ],
      },
      en: {
        title: "Afterlight",
        category: "Commercial",
        location: "Dubai",
        summary:
          "A hospitality interior built around warm stone, bronze detail and the last light of the day.",
        narrative:
          "The project moves from the clarity of the arrival space to the quieter mood of the lounge. Reflected light and a restrained material palette give both scenes a distinct but connected atmosphere.",
        services: ["Interior imagery", "Lighting direction", "Art direction"],
        images: [
          {
            src: "/images/afterlight-01.png",
            alt: "Sunlit hotel lobby with a sculpted travertine reception desk and bronze details",
          },
          {
            src: "/images/afterlight-02.png",
            alt: "Contemporary hospitality lounge with curved seating and an evening skyline",
          },
        ],
      },
    },
  },
];

export function getProjects(locale: Locale): PortfolioProject[] {
  return projectRecords.map(({ content, ...project }) => ({
    ...project,
    ...content[locale],
  }));
}

export function getProject(slug: string, locale: Locale): PortfolioProject | undefined {
  const project = projectRecords.find((item) => item.slug === slug);

  if (!project) {
    return undefined;
  }

  const { content, ...metadata } = project;
  return { ...metadata, ...content[locale] };
}

export function getProjectSlugs() {
  return projectRecords.map(({ slug }) => slug);
}
