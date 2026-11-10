import type { Locale } from "../i18n";
import type { ServiceId } from "./services";

export type ArticleSection = Readonly<{
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}>;

export type ArticleCopy = Readonly<{
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: readonly ArticleSection[];
  relatedServices: readonly ServiceId[];
}>;

export type ArticleRecord = Readonly<{
  id: string;
  tr: ArticleCopy;
  en: ArticleCopy;
}>;

export const articleRecords: readonly ArticleRecord[] = [
  {
    id: "interior-architecture-project-process",
    tr: {
      slug: "ic-mimarlik-proje-sureci",
      title: "İç Mimarlık Projesi Nasıl Hazırlanır?",
      metaTitle: "İç Mimarlık Proje Süreci: İhtiyaçtan Uygulamaya",
      description:
        "İç mimarlık projesinin ihtiyaç analizi, yerleşim, konsept, 3D sunum, teknik çizim ve uygulama koordinasyonu adımlarını öğrenin.",
      intro:
        "Bir iç mimarlık projesi; ihtiyaçların ve mevcut mekânın anlaşılmasıyla başlar, tasarım kararlarının teknik dokümana dönüştürülmesiyle ilerler. Uygulama ve saha koordinasyonu isteniyorsa, bu işler de ayrıca tanımlı bir kapsama eklenir.",
      sections: [
        {
          heading: "1. İhtiyaç ve mevcut durum",
          paragraphs: [
            "İlk görüşmede mekânın ölçüleri ve mevcut planı, kullanıcıların ihtiyaçları, korunacak öğeler ve teslim beklentisi değerlendirilir. Bütçe ve hedef takvim varsa başlangıçta paylaşılması, tasarım alternatiflerinin doğru çerçevede ele alınmasına yardımcı olur.",
            "Eksik ölçü veya teknik bilgi varsa, kimin doğrulayacağı ve bu işin kapsamda olup olmadığı netleştirilmelidir.",
          ],
        },
        {
          heading: "2. Yerleşim ve konsept",
          paragraphs: [
            "Mekânsal yerleşim; dolaşım, işlev, depolama ve mobilya gereksinimlerini birlikte değerlendirir. Onaylanan yön doğrultusunda malzeme, renk, aydınlatma ve sabit mobilya kararları geliştirilir.",
            "3D görselleştirme, seçili kararları uygulamadan önce karşılaştırmaya yardımcı olur. Render görüntüsü, gerçek ürün ve saha koşullarının birebir garantisi değildir.",
          ],
        },
        {
          heading: "3. Teknik çizim ve uygulama",
          paragraphs: [
            "Uygulama çizimleri; üzerinde anlaşılan tasarım kapsamını sahada okunabilir hale getirir. AutoCAD çizimleri, asma tavan ve aydınlatma planları, elektrik ve altyapı koordinasyonu veya imalat detaylarının hangilerinin hazırlanacağı proje başında belirlenmelidir.",
            "Saha takibi ve anahtar teslim uygulama otomatik olarak her projeye dahil değildir; teklif ve sözleşmede görev, sınır ve sorumluluklar açıkça yazılmalıdır.",
          ],
        },
      ],
      relatedServices: ["interior-architecture", "architectural-visualization", "technical-documentation", "turnkey-interior-architecture"],
    },
    en: {
      slug: "interior-architecture-project-process",
      title: "How Is an Interior Architecture Project Prepared?",
      metaTitle: "The Interior Architecture Project Process | Bora Evgar Studio",
      description:
        "A practical overview of briefing, space planning, concept design, 3D visualization, technical drawings and implementation coordination.",
      intro:
        "An interior architecture project starts with understanding the brief and existing space, then develops design decisions into technical documentation. Implementation and site coordination are added only when they form part of the agreed scope.",
      sections: [
        {
          heading: "1. Brief and existing conditions",
          paragraphs: [
            "The initial review covers measurements and existing plans, user needs, elements to retain and required deliverables. Sharing budget and schedule expectations early helps keep design options grounded in the brief.",
            "If measurements or technical information are missing, clarify who will verify them and whether that work is included.",
          ],
        },
        {
          heading: "2. Layout and concept",
          paragraphs: [
            "Space planning considers circulation, function, storage and furniture together. Once a direction is agreed, material, colour, lighting and built-in furniture decisions can be developed.",
            "3D visualization helps compare selected decisions before implementation. A render is not a guarantee that products or site conditions will match the image exactly.",
          ],
        },
        {
          heading: "3. Technical drawings and delivery",
          paragraphs: [
            "Construction drawings make the agreed design readable on site. The project should specify whether it needs AutoCAD layouts, reflected ceiling and lighting plans, electrical coordination or fabrication details.",
            "Site follow-up and turnkey execution are not automatically part of every project; responsibilities and exclusions should be written into the proposal and agreement.",
          ],
        },
      ],
      relatedServices: ["interior-architecture", "architectural-visualization", "technical-documentation", "turnkey-interior-architecture"],
    },
  },
  {
    id: "turnkey-interior-architecture-guide",
    tr: {
      slug: "anahtar-teslim-ic-mimarlik-nedir",
      title: "Anahtar Teslim İç Mimarlık Nedir?",
      metaTitle: "Anahtar Teslim İç Mimarlık Nedir? Kapsamı Nasıl Belirlenir?",
      description:
        "Anahtar teslim iç mimarlığın tasarım, tedarik, işçilik ve saha koordinasyonundaki kapsamını teklif öncesi netleştirmek için pratik bir rehber.",
      intro:
        "Anahtar teslim iç mimarlık, tasarım ve uygulama işlerinin teklif ve sözleşmede tanımlanmış bir kapsamla koordine edilmesidir. İfadenin tek başına hangi ürün, işçilik veya saha sorumluluklarının dahil olduğunu açıklamadığı için kapsamın yazılı olarak netleştirilmesi gerekir.",
      sections: [
        {
          heading: "Hangi işler dahil olabilir?",
          paragraphs: [
            "Projeye göre konsept ve teknik çizimler, malzeme ve ürün seçimi, tedarik koordinasyonu, işçilik ve saha takibi birlikte planlanabilir. Her proje aynı iş paketlerini gerektirmez.",
          ],
          bullets: [
            "Tasarım, çizim ve görselleştirme teslimleri.",
            "Satın alma ve tedarik sorumlulukları.",
            "Uygulama, ekip koordinasyonu ve saha kontrolünün sınırları.",
          ],
        },
        {
          heading: "Teklifte hangi sorular yanıtlanmalı?",
          paragraphs: [
            "Teklif; hangi alanların dahil olduğunu, ürün ve malzeme kararlarının nasıl onaylanacağını, işlerin hangi sırayla ilerleyeceğini ve kapsam dışı kalemlerin nasıl ele alınacağını açıklamalıdır. Bütçe ve takvim, proje bilgisi görüldükten sonra değerlendirilmelidir.",
          ],
        },
        {
          heading: "İletişim ve karar takibi",
          paragraphs: [
            "Tek bir karar listesi ve onay akışı revizyonların izlenmesini kolaylaştırır. Saha koşulları veya ürün bulunabilirliği değiştiğinde, etkisi ve alternatifleri birlikte değerlendirilmelidir.",
          ],
        },
      ],
      relatedServices: ["turnkey-interior-architecture", "interior-architecture", "technical-documentation"],
    },
    en: {
      slug: "what-is-turnkey-interior-architecture",
      title: "What Does Turnkey Interior Architecture Mean?",
      metaTitle: "Turnkey Interior Architecture: Defining the Scope",
      description:
        "A practical guide to defining design, procurement, labour and site coordination responsibilities before agreeing a turnkey project.",
      intro:
        "Turnkey interior architecture coordinates design and implementation under a scope defined in the proposal and agreement. The phrase alone does not specify which products, trades or site responsibilities are included, so the deliverables should be written down.",
      sections: [
        {
          heading: "What can be included?",
          paragraphs: [
            "Depending on the brief, concept and technical drawings, material and product selection, procurement coordination, labour and site follow-up can be planned together. Not every project needs the same package.",
          ],
          bullets: [
            "Design, drawings and visualization deliverables.",
            "Purchasing and supplier responsibilities.",
            "The boundaries of implementation, team coordination and site review.",
          ],
        },
        {
          heading: "Questions to resolve in a proposal",
          paragraphs: [
            "A proposal should identify included areas, how product and material decisions are approved, the sequence of work and how exclusions are handled. Budget and schedule should be assessed after the project information is reviewed.",
          ],
        },
        {
          heading: "Communication and decisions",
          paragraphs: [
            "A shared decision log and approval process makes revisions easier to track. If site conditions or product availability change, their impact and alternatives should be reviewed together.",
          ],
        },
      ],
      relatedServices: ["turnkey-interior-architecture", "interior-architecture", "technical-documentation"],
    },
  },
  {
    id: "villa-materials-and-lighting",
    tr: {
      slug: "villa-tasariminda-malzeme-ve-aydinlatma",
      title: "Villa Tasarımında Malzeme ve Aydınlatma",
      metaTitle: "Villa Tasarımında Malzeme ve Aydınlatma Kararları",
      description:
        "Villa tasarımında malzeme ve aydınlatma seçimini kullanım, gün ışığı, bakım ve mekânlar arası görsel bütünlük üzerinden değerlendirin.",
      intro:
        "Villa tasarımında malzeme ve aydınlatma kararları; kullanım biçimi, doğal ışık, bakım gereksinimi ve mekânlar arasındaki geçişlerle birlikte değerlendirilmelidir. Tek başına trend veya ürün görseli, doğru seçim için yeterli değildir.",
      sections: [
        {
          heading: "Önce kullanım ve koşullar",
          paragraphs: [
            "Giriş, mutfak, yaşam alanları ve özel odaların kullanım yoğunluğu farklıdır. Malzeme seçerken temizlik, dayanıklılık, dokunma hissi ve mevcut yüzeylerle uyum birlikte ele alınmalıdır.",
            "Gün ışığının yönü ve yoğunluğu renklerin algısını değiştirir. Numune ve renk değerlendirmesini mekânın kendi ışığında yapmak, yalnızca ekrandaki görüntüye göre karar vermekten daha sağlıklıdır.",
          ],
        },
        {
          heading: "Aydınlatmayı katmanlı düşünün",
          paragraphs: [
            "Genel, görev ve vurgu aydınlatması farklı ihtiyaçlara karşılık gelir. Armatür yerleri, tavan kurgusu, mobilya ve kullanım senaryosuyla birlikte planlandığında gereksiz parlamayı ve karanlık bölgeleri azaltmaya yardımcı olur.",
          ],
        },
        {
          heading: "Mekânlar arasında tutarlılık",
          paragraphs: [
            "Her odanın aynı malzemeyi kullanması gerekmez; ancak renk, doku ve ışık kararları arasında bilinçli bir ilişki kurulmalıdır. Bu kararlar plan, malzeme örnekleri ve gerekiyorsa 3D görselleştirme üzerinden karşılaştırılabilir.",
          ],
        },
      ],
      relatedServices: ["villa-design", "interior-architecture", "architectural-visualization"],
    },
    en: {
      slug: "materials-and-lighting-in-villa-design",
      title: "Materials and Lighting in Villa Design",
      metaTitle: "Material and Lighting Decisions for Villa Design",
      description:
        "Consider materials and lighting in a villa through use, daylight, maintenance and visual continuity between rooms.",
      intro:
        "Material and lighting decisions in a villa should be assessed alongside daily use, daylight, maintenance and transitions between rooms. A trend or product image alone is not enough to make the right choice.",
      sections: [
        {
          heading: "Start with use and conditions",
          paragraphs: [
            "Entrances, kitchens, living areas and private rooms experience different levels of use. Material choices should consider cleaning, durability, tactile quality and compatibility with existing surfaces.",
            "The direction and intensity of daylight affect how colours appear. Reviewing samples in the actual space is more reliable than deciding from a screen image alone.",
          ],
        },
        {
          heading: "Think in layers of light",
          paragraphs: [
            "Ambient, task and accent lighting serve different needs. Planning fixture positions with ceilings, furniture and use scenarios can help reduce glare and dark areas.",
          ],
        },
        {
          heading: "Create continuity between rooms",
          paragraphs: [
            "Every room does not need the same material, but colour, texture and lighting decisions should have an intentional relationship. Plans, material samples and 3D visualization can help compare options.",
          ],
        },
      ],
      relatedServices: ["villa-design", "interior-architecture", "architectural-visualization"],
    },
  },
];

export function articleIndexPath(locale: Locale) {
  return `/${locale}/blog`;
}

export function articlePath(locale: Locale, slug: string) {
  return `${articleIndexPath(locale)}/${slug}`;
}

export function getArticles(locale: Locale) {
  return articleRecords.map((article) => ({ id: article.id, ...article[locale] }));
}

export function getArticle(locale: Locale, slug: string) {
  return articleRecords.find((article) => article[locale].slug === slug);
}
