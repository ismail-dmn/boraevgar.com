export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const messages = {
  tr: {
    metadata: {
      title: "Bora Evgar — İç Mimarlık & Anahtar Teslim Uygulama",
      description:
        "Konut ve ticari mekânlar için konsept tasarım, teknik projelendirme, fotogerçekçi görselleştirme ve anahtar teslim iç mimarlık uygulaması.",
    },
    nav: {
      work: "Seçili işler",
      studio: "Çalışma Modeli",
      about: "Hakkımda",
      contact: "İletişim",
      services: "Hizmetler",
      cta: "Proje başlat",
      language: "Dil seçimi",
    },
    hero: {
      eyebrow: "İç mimarlık · Projelendirme · Uygulama",
      first: "Mekânı tasarlıyor,",
      emphasis: "projelendiriyor ve hayata geçiriyoruz.",
      description:
        "Konsept tasarımdan anahtar teslim uygulamaya kadar; evinizi henüz inşa edilmeden kusursuz görsellerle hissettiriyor, milimetrik projelerle şantiyesini ve uygulamasını üstleniyoruz.",
      workLink: "Seçili işlere göz at",
      viewProject: "Projeyi incele",
      carouselLabel: "Öne çıkan projeler",
      carouselRoleDescription: "slayt gösterisi",
      carouselControls: "Öne çıkan proje kontrolleri",
      previousSlide: "Önceki proje",
      nextSlide: "Sonraki proje",
      pauseSlideshow: "Slayt gösterisini duraklat",
      resumeSlideshow: "Slayt gösterisini sürdür",
    },
    studio: {
      eyebrow: "Bora Evgar Studio",
      descriptor: "İç mimarlık ve uygulama stüdyosu",
      location: "2018’den beri · Ankara",
      first: "Tasarımdan",
      emphasis: "uygulamaya.",
      description:
        "Konsept tasarımı, teknik çizimleri ve saha koordinasyonunu tek bir tutarlı süreçte birleştiriyoruz.",
      details: ["Konut ve ticari mekânlar", "Teknik projelendirme", "Anahtar teslim uygulama"],
    },
    work: {
      eyebrow: "Ticari projeler · Uygulama & Şantiye · Dış cephe · Konsept renderler",
      first: "Mekâna dair",
      emphasis: "seçkiler.",
      all: "Tüm işler",
      categoryLabels: {
        "commercial-projects": "Ticari Projeler",
        "application-site": "Uygulama & Şantiye",
        exterior: "Dış cephe",
        "concept-renders": "Bora Evgar Konsept Renderler",
      },
      filterLabels: {
        all: "Tüm işler",
        "commercial-projects": "Ticari Projeler",
        "application-site": "Uygulama & Şantiye",
        exterior: "Dış cephe",
        "concept-renders": "Bora Evgar Konsept Renderler",
      },
      imagePlaceholder: "Görsel yakında eklenecek",
      viewProject: "Projeyi incele",
      frame: "görsel",
      frames: "görsel",
    },
    services: {
      eyebrow: "Çalışma Modeli",
      first: "Tasarımdan",
      emphasis: "anahtar teslime.",
      description: "Her aşamayı tek bir plan ve sorumluluk altında birleştiriyor; tasarımdan şantiyeye kadar süreci birlikte yönetiyoruz.",
      projectReference: "Saha Referansı: Gürbağ Genel Merkez Ofisi",
      items: [
        {
          title: "Tasarım & Görselleştirme",
          description: "Mekânın planlanması, malzeme ve mobilya kararları, fotogerçekçi render sunumları.",
        },
        {
          title: "Teknik Proje",
          description: "AutoCAD uygulama projeleri; asma tavan, aydınlatma senaryoları, elektrik ve altyapı hatları, imalat detayları.",
        },
        {
          title: "Anahtar Teslim İç Mimarlık",
          description: "Proje bazlı usta ve malzeme tedarikçi ağıyla şantiye yönetimi, saha koordinasyonu ve fiziksel uygulama.",
        },
      ],
    },
    contact: {
      eyebrow: "Eviniz için bir planınız mı var?",
      first: "Evinizi",
      emphasis: "yenilemek mi istiyorsunuz?",
      description:
        "Hayalinizdeki konsepti anahtar teslim gerçeğe dönüştürmek için bizimle iletişime geçin. Tasarımdan şantiyeye tüm süreci biz yönetelim.",
      proposal: "Teklif isteyin",
      whatsapp: "WhatsApp’tan yazın",
      footer: "Ankara merkezli · Konut ve ticari projeler",
    },
    project: {
      back: "Seçili işlere dön",
      project: "Proje",
      category: "Kategori",
      frames: "Görsel sayısı",
      approach: "Görsel yaklaşım",
      dossierTitle: "Proje Künyesi",
      location: "Konum",
      roleScope: "Rol / Kapsam",
      status: "Durum",
      description: "Açıklama",
      next: "Sıradaki proje",
      gallery: "proje galerisi",
    },
    footer: {
      email: "E-posta",
      work: "Seçili işler",
      cookieSettings: "Çerez tercihleri",
    },
    consent: {
      title: "Veriyi özenle kullanıyoruz",
      description:
        "İzninizle Google Analytics ve Google Ads ziyaretleri anlamamıza ve proje taleplerini ölçmemize yardımcı olur. Tercihinizi dilediğiniz zaman değiştirebilirsiniz.",
      decline: "Reddet",
      accept: "Analitiği kabul et",
    },
  },
  en: {
    metadata: {
      title: "Bora Evgar — Interior Architecture & Turnkey Delivery",
      description:
        "Concept design, technical documentation, photorealistic visualization and turnkey interior architecture for residential and commercial spaces.",
    },
    nav: {
      work: "Selected work",
      studio: "Our process",
      about: "About me",
      contact: "Contact",
      services: "Services",
      cta: "Start a project",
      language: "Choose language",
    },
    hero: {
      eyebrow: "Interior architecture · Technical design · Build",
      first: "We design spaces,",
      emphasis: "document them, and bring them to life.",
      description:
        "From concept design to turnkey delivery, experience your home before it is built through photorealistic visuals, then see it through precise drawings, site coordination and construction.",
      workLink: "Explore selected work",
      viewProject: "View project",
      carouselLabel: "Featured projects",
      carouselRoleDescription: "carousel",
      carouselControls: "Featured project controls",
      previousSlide: "Previous project",
      nextSlide: "Next project",
      pauseSlideshow: "Pause slideshow",
      resumeSlideshow: "Resume slideshow",
    },
    studio: {
      eyebrow: "Bora Evgar Studio",
      descriptor: "Interior architecture & build studio",
      location: "Est. 2018 · Ankara",
      first: "From first sketch",
      emphasis: "to the finished space.",
      description:
        "We bring concept design, technical documentation and on-site coordination together in one considered process.",
      details: ["Residential and commercial", "Technical documentation", "Turnkey execution"],
    },
    work: {
      eyebrow: "Commercial projects · Construction & site execution · Exterior facades · Concept renders",
      first: "A study in",
      emphasis: "space.",
      all: "All work",
      categoryLabels: {
        "commercial-projects": "Commercial Projects",
        "application-site": "Construction & Site Execution",
        exterior: "Exterior Facades",
        "concept-renders": "Bora Evgar Concept Renders",
      },
      filterLabels: {
        all: "All work",
        "commercial-projects": "Commercial Projects",
        "application-site": "Construction & Site Execution",
        exterior: "Exterior Facades",
        "concept-renders": "Bora Evgar Concept Renders",
      },
      imagePlaceholder: "Project image coming soon",
      viewProject: "View project",
      frame: "image",
      frames: "images",
    },
    services: {
      eyebrow: "Our process",
      first: "From design",
      emphasis: "to turnkey delivery.",
      description: "Every stage follows one coordinated plan, from the first concept through site delivery.",
      projectReference: "Site reference: Gürbağ Head Office",
      items: [
        {
          title: "Design & visualization",
          description: "Space planning, material and furniture decisions, and photorealistic render presentations.",
        },
        {
          title: "Technical project",
          description: "AutoCAD construction drawings, reflected ceiling plans, lighting scenarios, electrical and infrastructure routes, and fabrication details.",
        },
        {
          title: "Turnkey interior architecture",
          description: "Site management, trade and material coordination, and physical implementation through a project-based supplier network.",
        },
      ],
    },
    contact: {
      eyebrow: "Ready to shape your home?",
      first: "Ready to",
      emphasis: "renew your home?",
      description:
        "Turn your concept into a turnkey reality. Get in touch and we’ll manage every step from design through site delivery.",
      proposal: "Request a proposal",
      whatsapp: "Message us on WhatsApp",
      footer: "Ankara-based · Residential and commercial projects",
    },
    project: {
      back: "Back to selected work",
      project: "Project",
      category: "Category",
      frames: "Image count",
      approach: "Visual approach",
      dossierTitle: "Project dossier",
      location: "Location",
      roleScope: "Role / Scope",
      status: "Status",
      description: "Description",
      next: "Next project",
      gallery: "project gallery",
    },
    footer: {
      email: "Email",
      work: "Selected work",
      cookieSettings: "Cookie settings",
    },
    consent: {
      title: "A considered use of data",
      description:
        "With your permission, Google Analytics and Google Ads help us understand visits and measure project enquiries. You can change this choice at any time.",
      decline: "Decline",
      accept: "Accept analytics",
    },
  },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
