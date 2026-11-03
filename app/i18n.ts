export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const messages = {
  tr: {
    metadata: {
      title: "Bora Evgar — Mimari Görselleştirme Stüdyosu",
      description:
        "Bora Evgar Studio; mimarlık ofisleri, geliştiriciler ve markalar için atmosferi güçlü mimari görseller üretir.",
    },
    nav: {
      work: "Seçili işler",
      studio: "Stüdyo",
      contact: "İletişim",
      cta: "Proje başlat",
      language: "Dil seçimi",
    },
    hero: {
      eyebrow: "Mimari görselleştirme · İstanbul / Dünya çapında",
      first: "Mekânın",
      emphasis: "hissini görün.",
      description:
        "Işığı, malzemeyi ve atmosferi; mimariyi henüz inşa edilmeden hissettiren görsellere dönüştürüyoruz.",
      workLink: "Seçili işlere göz at",
      viewProject: "Projeyi incele",
    },
    studio: {
      eyebrow: "Bora Evgar Studio",
      descriptor: "Bağımsız görselleştirme stüdyosu",
      location: "2018’den beri · İstanbul",
      first: "Mimariyi bir",
      emphasis: "duyguya dönüştürüyoruz.",
      description:
        "İlk eskizden son kareye uzanan yakın ve özenli bir iş birliği: hassasiyet, malzeme ve dingin bir atmosfer bir arada.",
      details: ["İstanbul merkezli", "Dünya çapında çalışıyoruz", "Seçili projelere açığız"],
    },
    work: {
      eyebrow: "Seçili projeler · 2023—2024",
      first: "Mekâna dair",
      emphasis: "seçkiler.",
      all: "Tüm işler",
      categoryLabels: {
        residential: "Konut",
        hospitality: "Konaklama",
        commercial: "Ticari",
      },
      viewProject: "Projeyi incele",
    },
    services: {
      eyebrow: "Hizmetler",
      first: "İlk eskizden",
      emphasis: "son kareye.",
      description: "Projenizin nasıl anlatılması gerektiğine göre şekillenen, odaklı görsel hizmetler.",
      items: [
        {
          title: "Sabit görseller",
          description: "Güçlü bir görsel bakış açısına sahip iç ve dış mekân çalışmaları.",
        },
        {
          title: "Animasyon ve film",
          description: "Henüz inşa edilmemiş bir mekânı izleyiciye hissettiren hareketli anlatımlar.",
        },
        {
          title: "Sanat yönetimi",
          description: "Hatırlanmaya değer projeler için tutarlı ve özenli bir görsel dil.",
        },
      ],
    },
    contact: {
      eyebrow: "Aklınızda bir proje var mı?",
      first: "Mekânları",
      emphasis: "hissettirelim.",
      description:
        "Projeyi, hedeflediğiniz tarihi ve yaratmak istediğiniz duyguyu kısaca paylaşın. Gerisini birlikte netleştirelim.",
      proposal: "Teklif isteyin",
      whatsapp: "WhatsApp’tan yazın",
      footer: "Dünya çapında çalışıyoruz · İstanbul merkezli",
    },
    project: {
      back: "Seçili işlere dön",
      project: "Proje",
      category: "Kategori",
      location: "Konum",
      services: "Hizmetler",
      year: "Yıl",
      approach: "Görsel yaklaşım",
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
      title: "Bora Evgar — Architectural Visualization Studio",
      description:
        "Bora Evgar Studio creates atmospheric architectural imagery for studios, developers and brands shaping the built environment.",
    },
    nav: {
      work: "Selected work",
      studio: "Studio",
      contact: "Contact",
      cta: "Start a project",
      language: "Choose language",
    },
    hero: {
      eyebrow: "Architectural visualization · Istanbul / Worldwide",
      first: "Spaces,",
      emphasis: "imagined.",
      description:
        "We shape light, material and atmosphere into imagery that lets architecture be felt before it is built.",
      workLink: "Explore selected work",
      viewProject: "View project",
    },
    studio: {
      eyebrow: "Bora Evgar Studio",
      descriptor: "Independent visualization studio",
      location: "Est. 2018 · Istanbul",
      first: "We translate architecture into",
      emphasis: "feeling.",
      description:
        "A close, considered collaboration from first sketch to final frame — balancing precision, materiality and a quiet sense of atmosphere.",
      details: ["Based in Istanbul", "Working worldwide", "Available for selected projects"],
    },
    work: {
      eyebrow: "Selected projects · 2023—2024",
      first: "A study in",
      emphasis: "space.",
      all: "All work",
      categoryLabels: {
        residential: "Residential",
        hospitality: "Hospitality",
        commercial: "Commercial",
      },
      viewProject: "View project",
    },
    services: {
      eyebrow: "Services",
      first: "From first sketch",
      emphasis: "to final frame.",
      description: "A focused set of visual services, shaped around the way your project needs to be seen.",
      items: [
        {
          title: "Still imagery",
          description: "High-end interior and exterior visuals with a strong point of view.",
        },
        {
          title: "Animation & film",
          description: "Moving images that let an audience feel the space before it exists.",
        },
        {
          title: "Art direction",
          description: "A considered visual language for projects that deserve to be remembered.",
        },
      ],
    },
    contact: {
      eyebrow: "Have a project in mind?",
      first: "Let’s make",
      emphasis: "something remarkable.",
      description:
        "Share a little about the place, the people it is for and the feeling you want it to hold. We’ll take it from there.",
      proposal: "Request a proposal",
      whatsapp: "Start a WhatsApp conversation",
      footer: "Working worldwide · Based in Istanbul",
    },
    project: {
      back: "Back to selected work",
      project: "Project",
      category: "Category",
      location: "Location",
      services: "Services",
      year: "Year",
      approach: "Visual approach",
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
