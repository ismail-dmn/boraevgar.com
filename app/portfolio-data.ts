import { messages, type Locale } from "./i18n";
import { archiveProjects } from "./archive-projects";

export const projectCategoryKeys = ["residential", "hospitality", "commercial"] as const;

export type ProjectCategoryKey = (typeof projectCategoryKeys)[number];
export type ProjectWorkTypeKey = "design-render" | "implemented";

type LocalizedText = Record<Locale, string>;

type ProjectImageRecord = {
  src: string;
  alt: LocalizedText;
};

type ProjectRecord = {
  slug: string;
  categoryKey: ProjectCategoryKey;
  workTypeKey?: ProjectWorkTypeKey;
  title: LocalizedText;
  summary: LocalizedText;
  narrative: LocalizedText;
  images: readonly ProjectImageRecord[];
};

type ProjectImage = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  categoryKey: ProjectCategoryKey;
  workTypeKey: ProjectWorkTypeKey;
  workTypeLabel: string;
  category: string;
  title: string;
  summary: string;
  narrative: string;
  images: readonly ProjectImage[];
};

function photo(projectSlug: string, imageNumber: number, altTr: string, altEn: string): ProjectImageRecord {
  return {
    src: `/images/projects/${projectSlug}/${String(imageNumber).padStart(2, "0")}.webp`,
    alt: { tr: altTr, en: altEn },
  };
}

const baseProjectRecords: readonly ProjectRecord[] = [
  {
    slug: "city-villa",
    categoryKey: "residential",
    workTypeKey: "design-render",
    title: { tr: "Kentte Bir Villa", en: "A Villa in the City" },
    summary: {
      tr: "Koyu taş, sıcak ahşap ve geniş cam yüzeylerle bütünleşen çok katmanlı bir villa iç mekânı.",
      en: "A layered villa interior shaped by dark stone, warm timber and generous glazing.",
    },
    narrative: {
      tr: "Salon, mutfak, kış bahçesi ve yatak odası; koyu taş, yumuşak tekstiller ve sıcak metal detaylarla tek bir görsel dilde buluşuyor.",
      en: "Living, kitchen, winter garden and bedroom spaces share one visual language of dark stone, soft textiles and warm metal accents.",
    },
    images: [
      photo("city-villa", 1, "Koyu taş TV duvarı ve geniş oturma alanıyla çağdaş villa salonu.", "Contemporary villa living room with a dark stone media wall and generous seating."),
      photo("city-villa", 2, "Şömine, kitaplık ve kavisli koltuklarla düzenlenen salon.", "Living room arranged around a fireplace, built-in shelving and curved chairs."),
      photo("city-villa", 3, "Oluklu cam sürgülü kapılar ve ceviz dolaplarla tasarlanan mutfak.", "Kitchen with fluted glass sliders and warm walnut cabinetry."),
      photo("city-villa", 4, "Geniş cam yüzeylerle bahçeye açılan kış bahçesi.", "Winter garden opening onto the landscape through full-height glazing."),
      photo("city-villa", 5, "Sıcak ahşap ve yumuşak aydınlatmayla düzenlenen yatak odası.", "Bedroom layered with warm timber and soft lighting."),
    ],
  },
  {
    slug: "japandi-home",
    categoryKey: "residential",
    workTypeKey: "design-render",
    title: { tr: "Japandi Yalınlığı", en: "Japandi Calm" },
    summary: {
      tr: "Kemerli pencereler, açık ahşap ve doğal dokularla şekillenen dingin bir yaşam alanı.",
      en: "A quiet living space shaped by arched windows, pale timber and natural textures.",
    },
    narrative: {
      tr: "Nötr renkler ve alçak profilli mobilyalar, gün ışığını ve malzeme dokularını öne çıkaran yalın bir iç mekân dili kuruyor.",
      en: "Neutral tones and low-profile furniture create a restrained interior language that lets daylight and material texture lead.",
    },
    images: [
      photo("japandi-home", 1, "Kemerli pencereler önünde doğal tonlarda düzenlenen salon.", "Living room in natural tones framed by arched windows."),
      photo("japandi-home", 2, "Açık ahşap ve kavisli oturma grubuyla aydınlık yaşam alanı.", "Daylit living area with pale timber and curved seating."),
      photo("japandi-home", 3, "Doğal dokulu koltuk ve heykelsi yan sehpa detayı.", "Detail of a textured lounge chair and sculptural side table."),
      photo("japandi-home", 4, "Yumuşak formlu sarkıt aydınlatma ve sakin salon düzeni.", "Softly sculptural pendant above a calm living room composition."),
    ],
  },
  {
    slug: "garden-villa",
    categoryKey: "residential",
    workTypeKey: "design-render",
    title: { tr: "Bahçeye Açılan Ev", en: "A Home Framed by Garden" },
    summary: {
      tr: "Yalın geometriler, geniş camlar ve peyzajla bütünleşen çağdaş bir villa.",
      en: "A contemporary villa where clean geometry, generous glazing and landscape meet.",
    },
    narrative: {
      tr: "Açık renkli yüzeyler ve koyu doğramalar, ağaçların gölgesinde sakin ve güçlü bir cephe kompozisyonu oluşturuyor.",
      en: "Pale surfaces and dark frames shape a calm, confident facade beneath the surrounding trees.",
    },
    images: [
      photo("garden-villa", 1, "Ağaçlar ve alçak peyzajla çevrili çağdaş villa cephesi.", "Contemporary villa facade surrounded by trees and low planting."),
      photo("garden-villa", 2, "Geniş cam açıklıklar ve koyu doğramalarla modern ev görünümü.", "Modern residence with generous glazing and dark frames."),
      photo("garden-villa", 3, "Yatay hacimler ve bahçeyle ilişki kuran villa dış görünümü.", "Villa exterior defined by horizontal volumes and a garden connection."),
    ],
  },
  {
    slug: "mediterranean-terrace",
    categoryKey: "hospitality",
    workTypeKey: "design-render",
    title: { tr: "Akdeniz Terası", en: "Mediterranean Terrace" },
    summary: {
      tr: "Gölgelikli oturma alanları, yoğun bitkilendirme ve açık taş dokularıyla tasarlanan teras.",
      en: "A terrace composed with shaded seating, lush planting and pale stone textures.",
    },
    narrative: {
      tr: "Desenli zemin, çizgili saçaklar ve katmanlı bitkilendirme; açık havada yemek ve dinlenme için ferah bir akış kuruyor.",
      en: "Patterned flooring, striped canopies and layered planting create an easy flow for outdoor dining and rest.",
    },
    images: [
      photo("mediterranean-terrace", 1, "Bitkiler ve gölgelikli oturma alanlarıyla Akdeniz terası.", "Mediterranean terrace with layered planting and shaded seating."),
      photo("mediterranean-terrace", 2, "Açık havada yemek alanı ve gölgelikli pergola.", "Outdoor dining beneath a shaded pergola."),
      photo("mediterranean-terrace", 3, "Havuz kenarında açık tonlu masa ve oturma düzeni.", "Pale dining and lounge furniture beside the pool."),
    ],
  },
  {
    slug: "dark-residence",
    categoryKey: "residential",
    title: { tr: "Koyu Dokular", en: "Dark Tones" },
    summary: {
      tr: "Koyu ahşap, taş ve keskin çizgilerle kurgulanan çağdaş bir konut.",
      en: "A contemporary residence shaped by dark timber, stone and precise lines.",
    },
    narrative: {
      tr: "Dış cepheden banyoya uzanan kareler, aynı malzeme dilini farklı ölçeklerde bir araya getiriyor. Koyu yüzeyler ve çizgisel ışık mekâna sakin bir derinlik katıyor.",
      en: "From the facade to the bathroom, each frame carries the same material language across different scales. Dark surfaces and linear light give the home a quiet depth.",
    },
    images: [
      photo("dark-residence", 1, "Koyu ahşap kaplamalı çağdaş villa ve giriş bahçesi.", "Contemporary villa with dark timber cladding and an entry garden."),
      photo("dark-residence", 2, "Gömme raflar ve çalışma masasıyla koyu tonlu ev ofisi.", "Dark-toned home office with built-in shelving and a desk."),
      photo("dark-residence", 3, "Koyu taş lavabo ve siyah armatürle sade bir banyo detayı.", "Minimal bathroom detail with a dark stone vanity and black faucet."),
      photo("dark-residence", 4, "Doğrusal tavan ışıklarıyla koyu tonlarda tasarlanmış banyo.", "Dark bathroom finished with linear ceiling lighting."),
    ],
  },
  {
    slug: "soft-residence",
    categoryKey: "residential",
    title: { tr: "Yumuşak Bir Ev", en: "A Softer Home" },
    summary: {
      tr: "Yumuşak renkler, doğal ahşap ve gündelik yaşama açık bir ev içi.",
      en: "A welcoming home interior shaped by soft color, natural timber and everyday life.",
    },
    narrative: {
      tr: "Salon ile oyun köşesi, aynı sıcak palet ve doğal ışık etrafında bir araya geliyor.",
      en: "A living area and a playful corner come together through a shared warm palette and natural light.",
    },
    images: [
      photo("soft-residence", 1, "Yumuşak tonlu salon, açık raflar ve heykelsi aydınlatmalar.", "Soft-toned living room with open shelving and sculptural pendant lights."),
      photo("soft-residence", 2, "Geniş pencere yanında oyun çadırı bulunan çocuk köşesi.", "Children's play corner with a small teepee beside a large window."),
    ],
  },
  {
    slug: "arched-living",
    categoryKey: "residential",
    title: { tr: "Kemerli Salon", en: "Arched Living" },
    summary: {
      tr: "Kemerli pencereler ve kıvrımlı oturma elemanlarıyla tanımlanan aydınlık bir salon.",
      en: "A bright living room defined by arched windows and curved seating.",
    },
    narrative: {
      tr: "Geniş açıklıklar, alçak profilli mobilyalar ve taş dokulu yüzeyler sade bir odağı koruyor.",
      en: "Generous openings, low-profile furniture and tactile stone surfaces keep the composition calm.",
    },
    images: [
      photo("arched-living", 1, "Kemerli pencereler, kavisli oturma grubu ve taş sehpayla aydınlık salon.", "Bright living room with arched windows, curved seating and a stone coffee table."),
    ],
  },
  {
    slug: "quiet-residence",
    categoryKey: "residential",
    title: { tr: "Sessiz Işık", en: "Quiet Light" },
    summary: {
      tr: "Gün ışığıyla öne çıkan sakin bir salon ve yatak odası.",
      en: "A calm living room and bedroom shaped by natural daylight.",
    },
    narrative: {
      tr: "Nötr tekstiller ve açık meşe yüzeyler, iki mekân arasında dingin bir devamlılık kuruyor.",
      en: "Neutral textiles and pale oak create a gentle continuity between the two rooms.",
    },
    images: [
      photo("quiet-residence", 1, "Doğal ışık alan geniş salon ve yumuşak tonlu oturma alanı.", "Daylit living room with soft-toned seating."),
      photo("quiet-residence", 2, "Açık meşe başlık paneli ve nötr tekstillerle yatak odası.", "Bedroom with pale oak headboard paneling and neutral textiles."),
    ],
  },
  {
    slug: "urban-residence",
    categoryKey: "residential",
    title: { tr: "Kentte Yaşam", en: "Urban Living" },
    summary: {
      tr: "Bir konut yapısının cephesinden mutfak ve çalışma alanlarına uzanan seçki.",
      en: "A selection spanning a residential facade, kitchen and study.",
    },
    narrative: {
      tr: "Dış cepheden iç mekânlara uzanan kareler, yaşam alanlarını doğal ışık ve yalın malzemelerle ele alıyor.",
      en: "From the exterior to the interiors, the collection pairs natural light with a restrained material palette.",
    },
    images: [
      photo("urban-residence", 1, "Açık taş ve koyu ahşap cepheleri bir araya getiren konut yapısı.", "Residential building combining pale stone and dark timber facades."),
      photo("urban-residence", 2, "Geniş pencereler yanında yer alan açık tonlu mutfak.", "Pale kitchen beside tall windows."),
      photo("urban-residence", 3, "Yemek alanına açılan modern mutfak ve ahşap dolaplar.", "Modern kitchen opening to a dining area with timber cabinetry."),
      photo("urban-residence", 4, "Koyu kitaplıklar ve geniş masa ile ev çalışma alanı.", "Home study with dark bookshelves and a wide desk."),
    ],
  },
  {
    slug: "auditorium",
    categoryKey: "commercial",
    title: { tr: "Konferans Salonu", en: "Auditorium" },
    summary: {
      tr: "Sahne, sıralı oturma ve çizgisel tavan ışıklarıyla düzenlenen geniş bir salon.",
      en: "A generous hall arranged around a stage, tiered seating and linear ceiling lights.",
    },
    narrative: {
      tr: "Tekrarlanan oturma düzeni ve tavan çizgileri mekânın ölçeğini vurguluyor.",
      en: "Repeated seating and ceiling lines emphasize the scale of the room.",
    },
    images: [
      photo("auditorium", 1, "Sahneye ve sıralı koltuklara bakan geniş konferans salonu.", "Wide auditorium facing a stage with rows of seats."),
    ],
  },
  {
    slug: "bedroom-suite",
    categoryKey: "residential",
    title: { tr: "Dinlenme Alanı", en: "Restful Suite" },
    summary: {
      tr: "Taş dokulu duvar ve koyu ahşapla tamamlanan yatak odası ve giyinme alanı.",
      en: "A bedroom and dressing area finished with textured stone and dark timber.",
    },
    narrative: {
      tr: "Yatak odası ve gardırop alanı, dokulu bir duvar ile koyu ahşap yüzeylerin dengesiyle bir araya geliyor.",
      en: "The bedroom and wardrobe area balance a tactile feature wall with dark timber surfaces.",
    },
    images: [
      photo("bedroom-suite", 1, "Taş dokulu duvar, alçak yatak ve nötr tekstiller.", "Bedroom with a textured stone wall, low bed and neutral linens."),
      photo("bedroom-suite", 2, "Dumanlı camlı gardırop ve koyu ahşap giyinme alanı.", "Dressing area with smoked-glass wardrobe fronts and dark timber."),
    ],
  },
  {
    slug: "stone-house",
    categoryKey: "residential",
    title: { tr: "Taş Ev", en: "Stone House" },
    summary: {
      tr: "Bahçeye açılan, doğal taşla kaplı yalın bir ev.",
      en: "A simple stone house opening onto a landscaped garden.",
    },
    narrative: {
      tr: "Taş örgü, sade açıklıklar ve çevresindeki yeşil peyzaj yapıyı öne çıkarıyor.",
      en: "Stonework, restrained openings and surrounding greenery define the home.",
    },
    images: [
      photo("stone-house", 1, "Çevresi yeşilliklerle sarılmış alçak taş ev.", "Low stone house set within a green garden."),
    ],
  },
  {
    slug: "garden-pavilion",
    categoryKey: "residential",
    title: { tr: "Bahçe Pavyonu", en: "Garden Pavilion" },
    summary: {
      tr: "Derin saçakları ve cam cepheleriyle peyzajın içine yerleşen bir pavyon.",
      en: "A pavilion nestled in the landscape beneath a deep canopy and glass facade.",
    },
    narrative: {
      tr: "Açık planlı yapı bahçeyle kesintisiz bir ilişki kuruyor; iki açı aynı yapının farklı yüzlerini gösteriyor.",
      en: "The open pavilion stays connected to its garden; the two views reveal different sides of the same structure.",
    },
    images: [
      photo("garden-pavilion", 1, "Derin saçakları ve cam duvarlarıyla bahçe pavyonu.", "Garden pavilion with a deep canopy and glass walls."),
      photo("garden-pavilion", 2, "Peyzaj içindeki pavyonun yuvarlak kolonlu dış görünümü.", "Exterior view of the garden pavilion with its round structural column."),
    ],
  },
  {
    slug: "dining-room",
    categoryKey: "residential",
    title: { tr: "Yemek Odası", en: "Dining Room" },
    summary: {
      tr: "Ahşap kitaplıklar ve mermer dokulu bir duvarla çevrelenen sıcak bir yemek alanı.",
      en: "A warm dining area framed by timber shelving and a marble-textured wall.",
    },
    narrative: {
      tr: "Dokulu yüzeyler ve yumuşak ışık, yemek masasını mekânın odağına taşıyor.",
      en: "Tactile surfaces and soft light bring the dining table to the center of the room.",
    },
    images: [
      photo("dining-room", 1, "Ahşap kitaplık, mermer dokulu duvar ve uzun yemek masası.", "Dining room with timber shelving, a marble-textured wall and a long table."),
    ],
  },
  {
    slug: "wellness-suite",
    categoryKey: "commercial",
    title: { tr: "Hareket Alanı", en: "Movement Studio" },
    summary: {
      tr: "Hareket ve dinlenme için düzenlenen, cam bölmeli bir stüdyo.",
      en: "A glass-partitioned studio arranged for movement and rest.",
    },
    narrative: {
      tr: "Geniş açıklıklar, doğal zemin ve ayrıştırılmış çalışma alanları ferah bir akış sağlıyor.",
      en: "Generous openings, natural flooring and distinct activity zones create an open flow.",
    },
    images: [
      photo("wellness-suite", 1, "Gün ışığı alan stüdyo ve egzersiz ekipmanları.", "Daylit wellness studio with exercise equipment."),
      photo("wellness-suite", 2, "Hareket alanında mat ve ekipmanların bulunduğu iç mekân.", "Movement studio with mats and training equipment."),
      photo("wellness-suite", 3, "Siyah çerçeveli cam bölmelerle ayrılan stüdyo alanı.", "Studio interior divided by black-framed glass partitions."),
      photo("wellness-suite", 4, "Doğal ahşap zeminli ve geniş pencereli egzersiz alanı.", "Exercise area with oak flooring and large windows."),
    ],
  },
  {
    slug: "restaurant",
    categoryKey: "hospitality",
    title: { tr: "Açık Sofra", en: "Open Table" },
    summary: {
      tr: "Girişten yemek alanına uzanan, terracotta ve yeşil tonlarla katmanlanan bir yeme-içme mekânı.",
      en: "A hospitality space moving from arrival to dining through terracotta and green tones.",
    },
    narrative: {
      tr: "Dış karşılama alanı, bitkilendirilmiş oturma bölümleri ve geniş yemek masaları tek bir akış içinde bir araya geliyor.",
      en: "The entrance, planted seating areas and generous dining tables come together in one continuous sequence.",
    },
    images: [
      photo("restaurant", 1, "Yumuşak oturma grupları ve dairesel aydınlatmalarla restoran salonu.", "Restaurant lounge with soft seating and circular light fixtures."),
      photo("restaurant", 2, "Bitkilendirilmiş açık teras ve terracotta renkli servis bankosu.", "Planted outdoor terrace with a terracotta service counter."),
      photo("restaurant", 3, "Uzun masalar ve zeytin yeşili sandalyelerle yemek alanı.", "Dining area with long tables and olive-green chairs."),
      photo("restaurant", 4, "Bitkilendirilmiş giriş alanında koyu kırmızı bir sundurma.", "Deep red entrance canopy framed by planting."),
      photo("restaurant", 5, "Bitkiler ve yuvarlak oturma elemanlarıyla merkezi servis alanı.", "Central service area with planting and rounded seating."),
      photo("restaurant", 6, "Ahşap tavan çıtaları altında düzenli yemek masaları.", "Dining tables arranged beneath a slatted timber ceiling."),
    ],
  },
  {
    slug: "boardroom",
    categoryKey: "commercial",
    title: { tr: "Toplantı Odası", en: "Boardroom" },
    summary: {
      tr: "Ahşap tavan detayları ve geniş toplantı masasıyla düzenlenen kurumsal bir salon.",
      en: "A corporate meeting room with timber ceiling details and a generous table.",
    },
    narrative: {
      tr: "Düzenli oturma planı ve gün ışığı, toplantılar için sakin bir arka plan oluşturuyor.",
      en: "An orderly seating plan and natural light create a calm backdrop for meetings.",
    },
    images: [
      photo("boardroom", 1, "Gün ışığı alan toplantı salonunda büyük masa ve sıralı sandalyeler.", "Daylit boardroom with a large meeting table and orderly seating."),
    ],
  },
  {
    slug: "lounge-bar",
    categoryKey: "hospitality",
    title: { tr: "Lounge & Bar", en: "Lounge & Bar" },
    summary: {
      tr: "Koyu taş, metal detaylar ve yumuşak ışıkla şekillenen bir lounge bar.",
      en: "A lounge bar shaped by dark stone, metal details and soft lighting.",
    },
    narrative: {
      tr: "Merkezi servis bankosu ve aydınlatılmış arka raflar, akşam atmosferinin odağını oluşturuyor.",
      en: "A central bar and illuminated back shelving anchor the evening atmosphere.",
    },
    images: [
      photo("lounge-bar", 1, "Koyu tonlu lounge alanında aydınlatılmış servis bankosu.", "Illuminated service bar within a dark-toned lounge."),
      photo("lounge-bar", 2, "Kavisli raflar ve katmanlı aydınlatmayla bar alanı.", "Bar area with curved shelving and layered lighting."),
    ],
  },
  {
    slug: "media-residence",
    categoryKey: "residential",
    title: { tr: "Yaşam ve Medya Alanı", en: "Living & Media Room" },
    summary: {
      tr: "Kitaplık, ekran ve oturma alanlarının bir araya geldiği çağdaş bir konut.",
      en: "A contemporary residence bringing shelving, media and lounge spaces together.",
    },
    narrative: {
      tr: "Farklı açılardan görüntülenen yaşam alanları, ahşap yüzeyler ve yüksek pencereler etrafında tutarlı bir dil kuruyor.",
      en: "Seen from several angles, the living spaces share a consistent language of timber surfaces and tall windows.",
    },
    images: [
      photo("media-residence", 1, "Kitaplık ve ekran duvarının karşısında geniş oturma alanı.", "Spacious living area facing built-in shelving and a media wall."),
      photo("media-residence", 2, "Ahşap kitaplık ve oturma gruplarıyla medya odası.", "Media room with timber bookshelves and lounge seating."),
      photo("media-residence", 3, "Mermer duvar yüzeyi ve ekran bulunan oturma alanı.", "Living area with a marble feature wall and television."),
      photo("media-residence", 4, "Yüksek pencereler önünde sakin bir oturma alanı.", "Quiet living area in front of full-height windows."),
      photo("media-residence", 5, "Tam boy pencereler ve açık ahşapla aydınlık salon.", "Bright living room with full-height windows and pale timber."),
      photo("media-residence", 6, "Ahşap duvarlar ve alçak oturma gruplarıyla geniş salon.", "Spacious lounge with timber walls and low seating."),
    ],
  },
];

const projectRecords: readonly ProjectRecord[] = [...baseProjectRecords, ...archiveProjects];

function normalizeProjectTitle(value: string, locale: Locale): string {
  const words = value
    .replace(/\s*\(\d+\)\s*$/u, "")
    .trim()
    .split(/\s+/u)
    .filter(Boolean);

  return words
    .map((word) => {
      const lower = word.toLocaleLowerCase(locale === "tr" ? "tr-TR" : "en-US");
      return lower.charAt(0).toLocaleUpperCase(locale === "tr" ? "tr-TR" : "en-US") + lower.slice(1);
    })
    .join(" ");
}

export function getProjects(locale: Locale): PortfolioProject[] {
  const categoryLabels = messages[locale].work.categoryLabels;
  const workTypeLabels = messages[locale].work.filterLabels;

  return projectRecords.map((project) => {
    const workTypeKey = project.workTypeKey ?? "implemented";

    return {
      slug: project.slug,
      categoryKey: project.categoryKey,
      workTypeKey,
      workTypeLabel: workTypeLabels[workTypeKey],
      category: categoryLabels[project.categoryKey],
      title: normalizeProjectTitle(project.title[locale], locale),
      summary: project.summary[locale],
      narrative: project.narrative[locale],
      images: project.images.map(({ src, alt }) => ({ src, alt: alt[locale] })),
    };
  });
}

export function getProject(slug: string, locale: Locale): PortfolioProject | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projectRecords.map(({ slug }) => slug);
}
