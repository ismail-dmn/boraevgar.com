import type { Locale } from "../i18n";

export type ServiceId =
  | "interior-architecture"
  | "villa-design"
  | "residential-design"
  | "office-design"
  | "commercial-interiors"
  | "turnkey-interior-architecture"
  | "architectural-visualization"
  | "technical-documentation"
  | "exterior-design";

export type ServiceFaq = Readonly<{ question: string; answer: string }>;
export type ServiceStep = Readonly<{ title: string; description: string }>;

export type ServiceCopy = Readonly<{
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  scopeHeading: string;
  scope: readonly string[];
  processHeading: string;
  process: readonly ServiceStep[];
  faqHeading: string;
  faqs: readonly ServiceFaq[];
}>;

export type ServiceRecord = Readonly<{
  id: ServiceId;
  tr: ServiceCopy;
  en: ServiceCopy;
  relatedProjectSlugs?: readonly string[];
}>;

export const serviceRecords: readonly ServiceRecord[] = [
  {
    id: "interior-architecture",
    tr: {
      slug: "ic-mimarlik",
      title: "İç Mimarlık",
      metaTitle: "Ankara İç Mimarlık | Tasarımdan Uygulamaya",
      description:
        "Ankara/Çankaya merkezli Bora Evgar Studio; konsept, malzeme, ışık, teknik proje ve uygulama koordinasyonunu proje kapsamına göre bir arada planlar.",
      intro:
        "İç mimarlık; mekânın planını, işlevini, malzeme ve aydınlatma kararlarını bir bütün olarak ele alır. Bora Evgar Studio, konut ve ticari projelerde konsept tasarımdan teknik çizime ve uygulama koordinasyonuna uzanan kapsamı, proje ihtiyacına göre belirler.",
      scopeHeading: "İç mimarlık çalışmasının kapsamı",
      scope: [
        "Mevcut planın ve ihtiyaçların değerlendirilmesi; mekânsal yerleşim alternatifleri.",
        "Konsept, renk, malzeme, mobilya ve aydınlatma kararlarının birbiriyle uyumlu biçimde geliştirilmesi.",
        "Proje kapsamına göre 3D görselleştirme, AutoCAD teknik çizimleri ve uygulama koordinasyonu.",
      ],
      processHeading: "Çalışma adımları",
      process: [
        { title: "İhtiyaç ve kapsam", description: "Mekân, beklenti, teslim kapsamı ve mevcut teknik bilgiler netleştirilir." },
        { title: "Tasarım ve kararlar", description: "Planlama, konsept, malzeme ve aydınlatma kararları birlikte geliştirilir." },
        { title: "Dokümantasyon", description: "Kararlaştırılan kapsam, gerekli sunum ve teknik çizimlerle uygulamaya aktarılır." },
      ],
      faqHeading: "İç mimarlık hakkında sık sorulanlar",
      faqs: [
        { question: "İç mimarlık hizmeti neleri kapsar?", answer: "İhtiyaca göre mekânsal planlama, konsept, malzeme ve aydınlatma kararları, 3D görselleştirme, teknik çizimler ve uygulama koordinasyonundan bir veya birkaçını kapsayabilir. Kapsam proje başlangıcında netleştirilir." },
        { question: "İç mimarlık projesinin ücreti nasıl belirlenir?", answer: "Ücret; mekânın alanı, proje kapsamı, istenen çizim ve görselleştirme düzeyi ile uygulama sorumluluklarına göre değerlendirilir. Sabit bir fiyatı, proje bilgileri görülmeden doğru biçimde vermek mümkün değildir." },
      ],
    },
    en: {
      slug: "interior-architecture",
      title: "Interior Architecture",
      metaTitle: "Interior Architecture in Ankara | Bora Evgar Studio",
      description:
        "An Ankara and Çankaya-based studio coordinating concept design, materials, lighting, technical drawings and delivery around each project’s agreed scope.",
      intro:
        "Interior architecture brings spatial planning, function, materials and lighting into one coherent design. Bora Evgar Studio works with residential and commercial briefs, defining a scope that can range from concept design through technical drawings and on-site coordination.",
      scopeHeading: "What interior architecture can include",
      scope: [
        "Review of the existing plan and project brief, with spatial layout options.",
        "A coordinated concept for colour, materials, furniture and lighting.",
        "3D visualization, AutoCAD technical drawings and implementation coordination when included in the agreed scope.",
      ],
      processHeading: "A considered process",
      process: [
        { title: "Brief and scope", description: "The space, objectives, deliverables and available technical information are reviewed." },
        { title: "Design decisions", description: "Planning, concept, materials and lighting are developed as a connected whole." },
        { title: "Documentation", description: "The agreed design is translated into the presentations and technical drawings required for the project." },
      ],
      faqHeading: "Interior architecture FAQs",
      faqs: [
        { question: "What does an interior architecture service include?", answer: "Depending on the brief, it may include space planning, concept design, material and lighting decisions, 3D visualization, technical drawings or site coordination. The exact deliverables are agreed at the start." },
        { question: "How is an interior architecture fee determined?", answer: "Fees depend on the area, scope, level of drawings and visualization, and any implementation responsibilities. A reliable proposal requires an initial review of the project brief." },
      ],
    },
    relatedProjectSlugs: [
      "commercial-projects-4s-bilisim-teknolojileri",
      "concept-renders-acik-renk-mutfak-tasarimi",
    ],
  },
  {
    id: "villa-design",
    tr: {
      slug: "villa-tasarimi",
      title: "Villa Tasarımı",
      metaTitle: "Villa İç Mimarlık ve Tasarımı | Bora Evgar Studio",
      description:
        "Villa tasarımında plan, dolaşım, gün ışığı, malzeme ve aydınlatma kararlarını birlikte ele alan iç mimarlık ve görselleştirme hizmeti.",
      intro:
        "Villa tasarımı, farklı katlar ve yaşam alanları arasındaki ilişkiyi, mahremiyet ve dolaşım kararlarını birlikte çözmeyi gerektirir. Bora Evgar Studio; konsept, iç mekân tasarımı, 3D görselleştirme ve proje kapsamına alınan teknik çalışmaları bir arada planlar.",
      scopeHeading: "Villa projesinde ele alınabilecek başlıklar",
      scope: [
        "Giriş, ortak yaşam, özel alanlar ve katlar arasındaki kullanım ilişkisi.",
        "Doğal ışık, mobilya yerleşimi, malzeme ve aydınlatma kararları.",
        "Tasarım alternatiflerini değerlendirmek için 3D görselleştirme ve gerekli teknik çizimler.",
      ],
      processHeading: "Villa tasarım süreci",
      process: [
        { title: "Yaşam biçimi ve plan", description: "Kullanım alışkanlıkları, mevcut plan ve proje hedefleri birlikte incelenir." },
        { title: "Konsept ve görselleştirme", description: "Mekânsal kurgu ve tasarım dili belirlenir; gerekli alanlar 3D olarak sunulur." },
        { title: "Teknik geliştirme", description: "Onaylanan kararlar, iş kapsamına göre uygulama çizimlerine aktarılır." },
      ],
      faqHeading: "Villa tasarımı hakkında sık sorulanlar",
      faqs: [
        { question: "Villa iç mimarlık tasarımı nasıl başlar?", answer: "İlk aşamada plan, ihtiyaçlar, kullanım biçimi ve teslim beklentisi değerlendirilir. Ardından yerleşim ve konsept kararları geliştirilir." },
        { question: "Villa tasarımı Ankara dışında yapılabilir mi?", answer: "Bora Evgar Studio Ankara/Çankaya merkezlidir ve Türkiye genelinden proje taleplerini değerlendirebilir. Saha koordinasyonu ve teslim biçimi, proje konumu ve kapsamına göre netleştirilir." },
      ],
    },
    en: {
      slug: "villa-design",
      title: "Villa Design",
      metaTitle: "Villa Interior Design | Bora Evgar Studio",
      description:
        "Villa interior design that considers planning, circulation, daylight, materials and lighting together, supported by project-specific visualization.",
      intro:
        "Villa design connects different floors and living areas while balancing privacy and circulation. Bora Evgar Studio can coordinate concept design, interior architecture, 3D visualization and the technical work included in the agreed project scope.",
      scopeHeading: "Considerations for a villa project",
      scope: [
        "The relationship between arrival, shared living areas, private rooms and floors.",
        "Daylight, furniture layouts, material choices and lighting decisions.",
        "3D visualization and technical drawings where they support the agreed design scope.",
      ],
      processHeading: "A villa design process",
      process: [
        { title: "Lifestyle and plans", description: "The brief, existing plans and the way the home will be used are reviewed." },
        { title: "Concept and visualization", description: "The spatial concept and design language are developed, with 3D views for selected areas." },
        { title: "Technical development", description: "Approved decisions are translated into the technical drawings included in the scope." },
      ],
      faqHeading: "Villa design FAQs",
      faqs: [
        { question: "How does villa interior design begin?", answer: "The process starts with the plans, needs, intended use and required deliverables. Layout and concept decisions follow from that brief." },
        { question: "Can villa design be considered outside Ankara?", answer: "Bora Evgar Studio is based in Ankara/Çankaya and can assess project enquiries from across Türkiye. Site coordination and delivery are agreed according to location and scope." },
      ],
    },
    relatedProjectSlugs: [
      "commercial-projects-hakan-bey-villa",
      "commercial-projects-istanbul-ab-mimarlik-villa",
      "commercial-projects-istanbul-ozel-villa",
    ],
  },
  {
    id: "residential-design",
    tr: {
      slug: "konut-tasarimi",
      title: "Konut ve Ev Tasarımı",
      metaTitle: "Konut ve Ev İç Mimarlığı | Bora Evgar Studio",
      description:
        "Ev ve konut tasarımında işlevsel planlama, malzeme, aydınlatma ve kişiye uygun mekânsal kararları bir arada geliştirin.",
      intro:
        "Konut tasarımı, günlük kullanımın gereksinimlerini mekânın planı ve tasarım diliyle buluşturur. Ev yenileme, oda düzenleme veya yeni konut çalışmasında kapsam; ihtiyaçlar, mevcut ölçüler ve istenen teslimlere göre belirlenir.",
      scopeHeading: "Konut tasarımının temel başlıkları",
      scope: [
        "Oda işlevleri, depolama ve günlük dolaşım için yerleşim kararları.",
        "Mutfak, salon, yatak odası ve diğer alanlar arasında tutarlı malzeme ve renk yaklaşımı.",
        "Aydınlatma, mobilya ve teknik çizim ihtiyaçlarının tasarım aşamasında değerlendirilmesi.",
      ],
      processHeading: "Birlikte ilerleyen adımlar",
      process: [
        { title: "İhtiyaçları tanımlama", description: "Öncelikler, mevcut durum ve varsa korunacak öğeler belirlenir." },
        { title: "Yerleşim ve konsept", description: "Mekânsal çözümler ve malzeme yaklaşımı alternatiflerle geliştirilir." },
        { title: "Uygulamaya hazırlık", description: "Kararlaştırılan kapsam için gerekli çizim ve sunumlar hazırlanır." },
      ],
      faqHeading: "Konut tasarımı hakkında sık sorulanlar",
      faqs: [
        { question: "Ev tasarımı için iç mimarla hangi bilgiler paylaşılmalı?", answer: "Mevcut plan veya ölçüler, mekân fotoğrafları, ihtiyaç listesi ve hedeflenen teslimler ilk değerlendirme için yardımcı olur. Bütçe ve takvim beklentisi varsa başlangıçta paylaşılmalıdır." },
        { question: "Bir oda için ayrı tasarım desteği alınabilir mi?", answer: "Kısmi kapsamlar da değerlendirilebilir. Hangi alanların ve hangi teslimlerin dahil olacağı, ilk görüşmede netleştirilir." },
      ],
    },
    en: {
      slug: "residential-design",
      title: "Residential Design",
      metaTitle: "Residential Interior Design | Bora Evgar Studio",
      description:
        "Residential interior design shaped around practical planning, materials, lighting and the way each home is used.",
      intro:
        "Residential design connects everyday needs with a home’s plan and visual character. Whether the brief is a renovation, a room or a new residence, the scope is defined around the existing conditions and required deliverables.",
      scopeHeading: "Core residential design decisions",
      scope: [
        "Room functions, storage and circulation for everyday use.",
        "A coherent material and colour approach across kitchens, living rooms, bedrooms and other spaces.",
        "Lighting, furniture and technical drawing requirements considered during design.",
      ],
      processHeading: "A connected sequence",
      process: [
        { title: "Understand the brief", description: "Priorities, existing conditions and elements to retain are documented." },
        { title: "Plan and concept", description: "Spatial options and material direction are developed for review." },
        { title: "Prepare for delivery", description: "The drawings and presentations needed for the agreed scope are assembled." },
      ],
      faqHeading: "Residential design FAQs",
      faqs: [
        { question: "What should I share before discussing a home design project?", answer: "Existing plans or measurements, photographs, a list of needs and the intended deliverables help with an initial review. Share any budget or schedule expectations as well." },
        { question: "Can I get design help for a single room?", answer: "Smaller scopes can be considered. The spaces and deliverables included are clarified during the initial conversation." },
      ],
    },
    relatedProjectSlugs: [
      "commercial-projects-istanbul-ozel-villa",
      "commercial-projects-yatak-odasi-tasarimi-ankara",
      "concept-renders-acik-renk-mutfak-tasarimi",
    ],
  },
  {
    id: "office-design",
    tr: {
      slug: "ofis-tasarimi",
      title: "Ofis Tasarımı",
      metaTitle: "Ofis İç Mimarlık ve Tasarımı | Bora Evgar Studio",
      description:
        "Ofis iç mimarlığı; çalışma, toplantı ve ortak alanların dolaşım, aydınlatma ve kurumsal ihtiyaçlara göre planlanmasını kapsar.",
      intro:
        "Ofis tasarımı; çalışma alanları, toplantı odaları, karşılama ve ortak kullanımlı bölümlerin birbiriyle ilişkisini kurar. Bora Evgar Studio, kullanım senaryosu, mevcut mekân ve teknik gereksinimleri birlikte değerlendirerek proje kapsamını belirler.",
      scopeHeading: "Ofis projelerinde değerlendirilen konular",
      scope: [
        "Çalışma, toplantı, karşılama ve destek alanlarının mekânsal ilişkisi.",
        "Mobilya yerleşimi, dolaşım, aydınlatma ve malzeme kararları.",
        "İhtiyaca göre AutoCAD uygulama çizimleri, tavan ve aydınlatma planları.",
      ],
      processHeading: "Ofis tasarım süreci",
      process: [
        { title: "Kullanım senaryosu", description: "Ekiplerin ve alanların kullanım biçimi, mevcut planla birlikte incelenir." },
        { title: "Yerleşim ve tasarım", description: "Fonksiyonlar, mobilya ve tasarım dili bir bütün olarak geliştirilir." },
        { title: "Teknik dokümantasyon", description: "Onaylanan çözümler, üzerinde anlaşılan teknik teslimlere dönüştürülür." },
      ],
      faqHeading: "Ofis tasarımı hakkında sık sorulanlar",
      faqs: [
        { question: "Ofis iç mimarlık projesi neleri içerebilir?", answer: "Yerleşim planı, çalışma ve toplantı alanları, mobilya, aydınlatma, malzeme kararları ve teknik çizimler proje kapsamına göre ele alınabilir." },
        { question: "Mevcut ofis çalışırken tasarım yapılabilir mi?", answer: "Bu, mekânın kullanım düzeni ve uygulama planına bağlıdır. Çalışma saatleri, etaplama ve saha erişimi proje başında değerlendirilir; belirli bir çalışma düzeni varsayılmaz." },
      ],
    },
    en: {
      slug: "office-design",
      title: "Office Design",
      metaTitle: "Office Interior Design | Bora Evgar Studio",
      description:
        "Office interior design that considers work, meeting and shared spaces through circulation, lighting and project-specific needs.",
      intro:
        "Office design establishes relationships between work areas, meeting rooms, reception and shared spaces. Bora Evgar Studio reviews the intended use, existing space and technical requirements before defining a project scope.",
      scopeHeading: "Office design considerations",
      scope: [
        "The relationship between work, meeting, reception and support areas.",
        "Furniture layouts, circulation, lighting and material decisions.",
        "AutoCAD construction drawings, ceiling and lighting plans when required by the brief.",
      ],
      processHeading: "An office design process",
      process: [
        { title: "Understand use", description: "How teams use the space is considered alongside the existing plan." },
        { title: "Plan and design", description: "Functions, furniture and the design language are developed together." },
        { title: "Technical documentation", description: "Approved decisions are translated into the agreed technical deliverables." },
      ],
      faqHeading: "Office design FAQs",
      faqs: [
        { question: "What can an office interior design project include?", answer: "Depending on scope, it can include layouts, work and meeting areas, furniture, lighting, materials and technical drawings." },
        { question: "Can design work be planned around an operating office?", answer: "That depends on the space and implementation plan. Working hours, phasing and site access are reviewed at the start rather than assumed." },
      ],
    },
    relatedProjectSlugs: [
      "commercial-projects-ankara-ofis-toplanti",
      "commercial-projects-yasamkent-ofis-projesi",
      "commercial-projects-4s-bilisim-teknolojileri",
    ],
  },
  {
    id: "commercial-interiors",
    tr: {
      slug: "ticari-mekan-tasarimi",
      title: "Ticari Mekân Tasarımı",
      metaTitle: "Ticari Mekân İç Mimarlığı | Otel, Restoran, Kafe",
      description:
        "Otel, restoran, kafe ve diğer ticari mekânlar için konsept, yerleşim, malzeme, aydınlatma ve teknik proje desteği.",
      intro:
        "Ticari mekân tasarımı; kullanıcı deneyimini, işletme akışını ve mekânın görsel kimliğini birlikte ele alır. Otel, restoran, kafe ve ofis projelerinde tasarım kapsamı, işletme gereksinimleri ve mevcut teknik koşullara göre belirlenir.",
      scopeHeading: "Ticari iç mekân projelerinde kapsam",
      scope: [
        "Karşılama, kullanıcı dolaşımı, servis ve ortak alan ilişkilerinin planlanması.",
        "Konsepte uygun malzeme, mobilya, renk ve aydınlatma yaklaşımı.",
        "Proje ihtiyacına göre 3D sunum, teknik çizimler ve saha koordinasyonu.",
      ],
      processHeading: "İşletme ihtiyacından tasarıma",
      process: [
        { title: "İşletme ve mekân", description: "Kullanım senaryosu, kullanıcı profili ve mevcut koşullar anlaşılır." },
        { title: "Konsept ve yerleşim", description: "Akış ve tasarım dili birlikte geliştirilerek kararlar görselleştirilir." },
        { title: "Uygulama dokümanları", description: "Üzerinde anlaşılan kapsamın gerektirdiği teknik çizimler hazırlanır." },
      ],
      faqHeading: "Ticari mekân tasarımı hakkında sık sorulanlar",
      faqs: [
        { question: "Restoran veya kafe tasarımında ilk olarak neye bakılır?", answer: "Mekânın ölçüleri, kullanıcı ve servis akışı, işletme ihtiyaçları ve gerekli teknik koşullar birlikte incelenir. Bu bilgiler konsept ve yerleşim kararlarına yön verir." },
        { question: "Ticari mekân tasarımına uygulama da dahil mi?", answer: "Uygulama ve saha koordinasyonu, teklif ve sözleşmede açıkça tanımlanması halinde hizmet kapsamına alınabilir. Her proje için kapsam ayrıca netleştirilir." },
      ],
    },
    en: {
      slug: "commercial-interiors",
      title: "Commercial Interior Design",
      metaTitle: "Commercial Interior Design | Hotels, Restaurants, Cafés",
      description:
        "Concept, planning, materials, lighting and technical design for hotels, restaurants, cafés and other commercial interiors.",
      intro:
        "Commercial interior design connects the visitor experience, operational flow and visual identity of a space. For hospitality, restaurant, café and office briefs, the scope is set around business needs and existing technical conditions.",
      scopeHeading: "What a commercial interior scope can cover",
      scope: [
        "Planning arrival, visitor circulation, service and shared areas.",
        "A considered material, furniture, colour and lighting direction.",
        "3D presentations, technical drawings and site coordination when requested and agreed.",
      ],
      processHeading: "From operational needs to design",
      process: [
        { title: "Business and space", description: "The intended use, visitor profile and existing conditions are reviewed." },
        { title: "Concept and planning", description: "Flow and visual direction are developed together and presented for review." },
        { title: "Project documentation", description: "The drawings required by the agreed scope are prepared." },
      ],
      faqHeading: "Commercial interior design FAQs",
      faqs: [
        { question: "What is considered first in a restaurant or café design?", answer: "The dimensions, visitor and service flow, business needs and technical conditions are reviewed together before concept and layout decisions are developed." },
        { question: "Does commercial design include construction?", answer: "Implementation and site coordination can be included when explicitly defined in the proposal and agreement. Scope is clarified for each project." },
      ],
    },
    relatedProjectSlugs: [
      "commercial-projects-4s-bilisim-teknolojileri",
      "commercial-projects-antalya-otel",
      "commercial-projects-formaggio-cafe",
    ],
  },
  {
    id: "turnkey-interior-architecture",
    tr: {
      slug: "anahtar-teslim-ic-mimarlik",
      title: "Anahtar Teslim İç Mimarlık",
      metaTitle: "Anahtar Teslim İç Mimarlık | Bora Evgar Studio",
      description:
        "Tasarım, teknik çizim, tedarikçi koordinasyonu ve saha uygulamasını tanımlı bir proje kapsamı içinde bir araya getirin.",
      intro:
        "Anahtar teslim iç mimarlık, tasarım kararlarıyla uygulama sürecinin tek bir tanımlı kapsam altında koordine edilmesidir. Bora Evgar Studio, proje bazlı usta ve tedarikçi ağıyla saha koordinasyonu ve fiziksel uygulamayı teklif kapsamına göre üstlenebilir.",
      scopeHeading: "Kapsamı netleştirilmesi gereken işler",
      scope: [
        "Tasarım ve uygulama çizimlerinin hangi alanları kapsadığı.",
        "Malzeme, ürün, tedarik ve saha koordinasyonundaki sorumlulukların paylaşımı.",
        "Etaplar, karar onayları, uygulama takibi ve kapsam dışı kalemler.",
      ],
      processHeading: "Şeffaf bir uygulama akışı",
      process: [
        { title: "Keşif ve kapsam", description: "Mekân, hedefler, teslimler ve uygulama sorumlulukları tanımlanır." },
        { title: "Tasarım ve planlama", description: "Onaylı tasarım kararları uygulama çizimleri ve tedarik planıyla ilişkilendirilir." },
        { title: "Saha koordinasyonu", description: "Teklifte tanımlanan işler, proje bazlı ekip ve tedarikçilerle takip edilir." },
      ],
      faqHeading: "Anahtar teslim hizmet hakkında sık sorulanlar",
      faqs: [
        { question: "Anahtar teslim hizmet her işi kapsar mı?", answer: "Hayır. Kapsam; tasarım, satın alma, tedarik, işçilik ve saha koordinasyonu gibi başlıklar üzerinden açıkça tanımlanır. Teklifte yer almayan işler ayrıca değerlendirilir." },
        { question: "Anahtar teslim iç mimarlık fiyatı nasıl hesaplanır?", answer: "Mekânın mevcut durumu, seçilen işler, malzeme ve ürün kararları ile saha koordinasyonunun kapsamı birlikte değerlendirilir. Proje bilgisi olmadan sabit fiyat veya süre vermek doğru değildir." },
      ],
    },
    en: {
      slug: "turnkey-interior-architecture",
      title: "Turnkey Interior Architecture",
      metaTitle: "Turnkey Interior Architecture | Bora Evgar Studio",
      description:
        "Coordinate design, technical drawings, suppliers and site implementation within a clearly defined project scope.",
      intro:
        "Turnkey interior architecture coordinates design decisions and implementation under one clearly defined scope. Bora Evgar Studio can manage site coordination and physical execution through a project-based network of trades and suppliers, as agreed in the proposal.",
      scopeHeading: "Items to define before work begins",
      scope: [
        "Which areas are covered by the design and construction drawings.",
        "Responsibilities for materials, products, procurement and site coordination.",
        "Project phases, approvals, implementation follow-up and exclusions.",
      ],
      processHeading: "A transparent delivery sequence",
      process: [
        { title: "Review and scope", description: "The space, objectives, deliverables and implementation responsibilities are documented." },
        { title: "Design and planning", description: "Approved design decisions are connected to technical drawings and procurement planning." },
        { title: "Site coordination", description: "The agreed work is followed with project-based trades and suppliers." },
      ],
      faqHeading: "Turnkey service FAQs",
      faqs: [
        { question: "Does turnkey service include every item?", answer: "No. Design, purchasing, supply, labour and site coordination are defined explicitly. Work not listed in the proposal is assessed separately." },
        { question: "How is a turnkey interior project priced?", answer: "The existing space, selected work, materials and products, and the level of site coordination all affect the scope. A fixed price or timeline cannot be reliable without project details." },
      ],
    },
    relatedProjectSlugs: ["commercial-projects-4s-bilisim-teknolojileri"],
  },
  {
    id: "architectural-visualization",
    tr: {
      slug: "3d-mimari-gorsellestirme",
      title: "3D Mimari Görselleştirme",
      metaTitle: "3D Mimari Görselleştirme ve Render | Bora Evgar Studio",
      description:
        "Mimari ve iç mekân tasarım kararlarını malzeme, ışık ve kadrajı görünür kılan 3D modelleme ve fotogerçekçi renderlarla değerlendirin.",
      intro:
        "3D mimari görselleştirme, henüz uygulanmamış bir tasarımın mekânsal düzenini, malzeme ve ışık etkisini görsel olarak incelemeyi sağlar. Bora Evgar Studio, iç mekân ve mimari konseptler için 3D modelleme ve fotogerçekçi render çalışmaları sunar.",
      scopeHeading: "Görselleştirme çalışmasının kapsamı",
      scope: [
        "Mevcut plan, çizim, referans ve tasarım kararlarının değerlendirilmesi.",
        "3D modelleme, malzeme ve aydınlatma yaklaşımı ile seçili kamera açıları.",
        "Render çıktıları ve revizyon kapsamının proje başlangıcında belirlenmesi.",
      ],
      processHeading: "Görsel üretim adımları",
      process: [
        { title: "Kaynak dosyalar", description: "Planlar, ölçüler, referanslar ve görsel beklentiler toplanır." },
        { title: "Model ve sahne", description: "Mekân, malzeme ve ışık kararları üzerinde çalışılır." },
        { title: "Render ve revizyon", description: "Kararlaştırılan açılar sunulur; revizyon sayısı ve teslim formatı kapsamla birlikte belirlenir." },
      ],
      faqHeading: "3D render hakkında sık sorulanlar",
      faqs: [
        { question: "Render, uygulamanın birebir sonucu mudur?", answer: "Render, tasarım kararlarını görselleştirir; uygulama sonucu malzeme, ürün, ışık ve saha koşullarına bağlıdır. Görselin amacı tasarım yönünü değerlendirmeye yardımcı olmaktır." },
        { question: "Görselleştirme için hangi dosyalar gerekir?", answer: "Varsa plan, kesit, ölçü, ürün veya malzeme referansları ve beklentiyi anlatan görseller başlangıç için yararlıdır. Eksik bilgiler proje kapsamına göre birlikte netleştirilir." },
      ],
    },
    en: {
      slug: "architectural-visualization",
      title: "3D Architectural Visualization",
      metaTitle: "3D Architectural Visualization and Renders | Bora Evgar Studio",
      description:
        "Review architectural and interior design decisions through 3D modelling and photorealistic renders that clarify materials, light and space.",
      intro:
        "3D architectural visualization helps review the spatial layout, materials and lighting of a design before it is built. Bora Evgar Studio creates 3D models and photorealistic renders for interior and architectural concepts.",
      scopeHeading: "What a visualization brief can include",
      scope: [
        "Review of plans, drawings, references and established design decisions.",
        "3D modelling, material and lighting direction, and selected camera views.",
        "Render outputs and revision scope defined at the beginning of the project.",
      ],
      processHeading: "From source files to images",
      process: [
        { title: "Source information", description: "Plans, dimensions, references and visual expectations are collected." },
        { title: "Model and scene", description: "The space, materials and lighting are developed for the brief." },
        { title: "Render and review", description: "Agreed views are presented; revisions and delivery formats are set with the scope." },
      ],
      faqHeading: "3D visualization FAQs",
      faqs: [
        { question: "Is a render an exact promise of the built result?", answer: "A render visualizes design decisions. The built result depends on actual products, materials, lighting and site conditions; the image supports design review rather than guaranteeing an identical outcome." },
        { question: "What information is needed to start a visualization?", answer: "Plans, sections, dimensions, product or material references and images describing the desired direction are useful. Missing information is clarified according to scope." },
      ],
    },
    relatedProjectSlugs: [
      "concept-renders-acik-renk-mutfak-tasarimi",
      "concept-renders-banyorender",
      "concept-renders-cocuk-odasi",
    ],
  },
  {
    id: "technical-documentation",
    tr: {
      slug: "teknik-projelendirme",
      title: "Teknik Projelendirme",
      metaTitle: "İç Mimari Teknik Proje ve AutoCAD Çizimleri",
      description:
        "Uygulama için gerekli iç mimari teknik çizimler, aydınlatma ve asma tavan planları ile detayları proje kapsamına göre hazırlayın.",
      intro:
        "Teknik projelendirme, tasarım kararlarını sahada okunabilir ve uygulanabilir çizimlere dönüştürür. Gereken paftalar; mekânın mevcut bilgilerine, uygulama kapsamına ve proje ekibinin ihtiyaçlarına göre belirlenir.",
      scopeHeading: "Projeye göre hazırlanabilecek paftalar",
      scope: [
        "AutoCAD iç mekân yerleşim ve uygulama çizimleri.",
        "Asma tavan, aydınlatma senaryoları, elektrik ve altyapı hatlarının koordinasyonu.",
        "Malzeme birleşimleri, sabit mobilya ve imalat detayları için gerekli çizimler.",
      ],
      processHeading: "Teknik çizim iş akışı",
      process: [
        { title: "Mevcut bilgileri toplama", description: "Planlar, ölçüler, disiplinler ve çizim standardı gözden geçirilir." },
        { title: "Tasarımı koordine etme", description: "Mimari ve iç mekân kararları, mevcut teknik bilgilerle eşleştirilir." },
        { title: "Pafta ve teslim", description: "Üzerinde anlaşılan çizimler, belirtilen format ve kapsamda hazırlanır." },
      ],
      faqHeading: "Teknik projelendirme hakkında sık sorulanlar",
      faqs: [
        { question: "Teknik proje için mevcut ölçüler gerekli mi?", answer: "Evet. Güncel plan ve ölçüler çizimlerin doğruluğu için önemlidir. Eksik veya sahada doğrulanması gereken bilgiler varsa, sorumluluk ve ölçüm kapsamı proje başında belirlenmelidir." },
        { question: "Elektrik ve mekanik projeler de hazırlanıyor mu?", answer: "Mevcut iç mimarlık kapsamı; aydınlatma, elektrik ve altyapı hatlarının koordinasyonunu içerebilir. İmzalı mühendislik projeleri veya uzmanlık gerektiren disiplinler ayrıca tanımlanmalıdır." },
      ],
    },
    en: {
      slug: "technical-documentation",
      title: "Technical Documentation",
      metaTitle: "Interior Architecture Technical Drawings | AutoCAD",
      description:
        "Project-specific interior construction drawings, reflected ceiling and lighting plans, and details prepared around the agreed scope.",
      intro:
        "Technical documentation translates design decisions into drawings that can be read and coordinated on site. The required sheets depend on existing information, implementation scope and the needs of the project team.",
      scopeHeading: "Drawings that may be included",
      scope: [
        "AutoCAD interior layouts and construction drawings.",
        "Reflected ceiling, lighting scenarios, electrical and infrastructure coordination.",
        "Details for material junctions, built-in furniture and fabrication where required.",
      ],
      processHeading: "A technical drawing workflow",
      process: [
        { title: "Collect existing information", description: "Plans, measurements, disciplines and drawing standards are reviewed." },
        { title: "Coordinate the design", description: "Architectural and interior decisions are aligned with available technical information." },
        { title: "Prepare and deliver", description: "The agreed drawings are produced in the specified format and scope." },
      ],
      faqHeading: "Technical documentation FAQs",
      faqs: [
        { question: "Are current measurements needed for technical drawings?", answer: "Yes. Current plans and measurements are important for accurate drawings. Any missing or site-verified information should have a clear responsibility and scope." },
        { question: "Are electrical and mechanical engineering drawings included?", answer: "Interior scope may coordinate lighting, electrical and infrastructure routes. Stamped engineering designs and specialist disciplines should be defined separately." },
      ],
    },
    relatedProjectSlugs: ["commercial-projects-4s-bilisim-teknolojileri"],
  },
  {
    id: "exterior-design",
    tr: {
      slug: "dis-cephe-tasarimi",
      title: "Dış Cephe Tasarımı",
      metaTitle: "Dış Cephe Tasarımı ve Mimari Görselleştirme",
      description:
        "Bina dış cephelerinde malzeme, oran, renk ve aydınlatma kararlarını mimari konsept ve görselleştirme ile değerlendirin.",
      intro:
        "Dış cephe tasarımı; yapının oranlarını, çevresiyle ilişkisini, malzeme ve renk kararlarını birlikte ele alan bir tasarım çalışmasıdır. Bora Evgar Studio, konsept geliştirme ve 3D görselleştirme kapsamını proje ihtiyaçlarına göre belirler.",
      scopeHeading: "Dış cephe konseptinde ele alınabilecek konular",
      scope: [
        "Mevcut cephe, açıklıklar, giriş ve yapı kütlesinin değerlendirilmesi.",
        "Malzeme, renk, doku ve dış aydınlatma yaklaşımının geliştirilmesi.",
        "Tasarım kararlarını karşılaştırmaya yardımcı 3D cephe görselleri.",
      ],
      processHeading: "Konseptten görsele",
      process: [
        { title: "Mevcut durum", description: "Plan, cephe bilgisi, ölçüler ve görsel referanslar toplanır." },
        { title: "Tasarım alternatifi", description: "Oran, malzeme ve renk kararları konsept düzeyinde geliştirilir." },
        { title: "Görselleştirme", description: "Kararlaştırılan alternatifler, üzerinde anlaşılan görsel kapsamda sunulur." },
      ],
      faqHeading: "Dış cephe tasarımı hakkında sık sorulanlar",
      faqs: [
        { question: "Dış cephe tasarımı statik veya mühendislik projesi yerine geçer mi?", answer: "Hayır. Konsept tasarım ve görselleştirme, gerekli statik, mekanik, ruhsat veya imza gerektiren mühendislik projelerinin yerine geçmez. Bu disiplinlerin kapsamı ilgili uzmanlarla ayrıca tanımlanmalıdır." },
        { question: "Dış cephe çalışması için hangi bilgiler gerekir?", answer: "Mevcut cephe çizimleri, ölçüler, fotoğraflar, varsa malzeme kısıtları ve tasarım beklentileri başlangıç değerlendirmesini destekler." },
      ],
    },
    en: {
      slug: "exterior-design",
      title: "Exterior Design",
      metaTitle: "Exterior Façade Design and Visualization | Bora Evgar Studio",
      description:
        "Explore façade proportions, materials, colour and lighting through architectural concept design and 3D visualization.",
      intro:
        "Exterior design considers a building’s proportions, its relationship to the surroundings, and decisions about materials and colour. Bora Evgar Studio defines concept and 3D visualization deliverables around each project brief.",
      scopeHeading: "What an exterior concept can consider",
      scope: [
        "Existing façades, openings, entry points and building massing.",
        "Material, colour, texture and exterior lighting direction.",
        "3D façade views that help compare design options.",
      ],
      processHeading: "From concept to visual review",
      process: [
        { title: "Existing conditions", description: "Plans, façade information, dimensions and visual references are collected." },
        { title: "Design options", description: "Proportions, materials and colours are developed at concept level." },
        { title: "Visualization", description: "Agreed options are presented within the defined visual scope." },
      ],
      faqHeading: "Exterior design FAQs",
      faqs: [
        { question: "Does exterior concept design replace engineering or permit drawings?", answer: "No. Concept design and visualization do not replace structural, mechanical, permit or stamped engineering documents. Those disciplines should be scoped with the relevant specialists." },
        { question: "What information helps start a façade design?", answer: "Existing elevation drawings, dimensions, photographs, material constraints and design references help with the initial review." },
      ],
    },
    relatedProjectSlugs: [
      "exterior-beytepe-villa-ofis-cephe",
      "exterior-dis-cephe-konut-projesi",
      "exterior-ozel-villa-ankara",
    ],
  },
];

export function getServices(locale: Locale) {
  return serviceRecords.map((service) => ({ id: service.id, ...service[locale] }));
}

export function getService(locale: Locale, slug: string) {
  return serviceRecords.find((service) => service[locale].slug === slug);
}

export function getServiceById(id: ServiceId) {
  return serviceRecords.find((service) => service.id === id);
}
