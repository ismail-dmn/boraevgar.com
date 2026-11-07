import Image from "next/image";
import type { Locale } from "./i18n";

type AboutSectionProps = {
  locale: Locale;
};

const aboutCopy = {
  tr: {
    eyebrow: "Hakkımda",
    quote: "Tasarım, detay ve fotogerçekçi görselleştirme ile sofistike mekânlara hayat veriyorum.",
    intro: "Sıcak minimalizm ve sessiz lüks anlayışıyla harmanlanmış çağdaş, sofistike iç mimari.",
    paragraphs: [
      "İç mimarlık, 3D modelleme ve fotogerçekçi mimari görselleştirme alanlarında 16 yıllık deneyime sahip bir iç mimar ve 3D mimari görselleştirme uzmanı olarak, mimari ve iç mekân tasarım fikirlerini etkileyici, gerçekçi ve güçlü görsel deneyimlere dönüştürme konusunda uzmanlaşıyorum.",
      "İç mimarlık alanındaki güçlü altyapımı ileri düzey görselleştirme uzmanlığıyla birleştirerek yaratıcı tasarım anlayışı ile teknik hassasiyet arasında bir köprü kuruyorum. Her projeye mekânsal kompozisyon, malzeme seçimi, aydınlatma, dokular ve mimari detaylar açısından bütüncül bir yaklaşımla bakıyorum.",
      "Tasarım ve görselleştirme anlayışımın temelinde çağdaş zarafet, sıcak minimalizm ve sessiz lüks yer alıyor. Özenle seçilmiş malzeme ve renk paletleri, dengeli oranlar, etkili aydınlatma ve gösterişten uzak bir şıklık, çalışmalarımın estetik kimliğini oluşturuyor.",
      "Deneyimim; özel konutlar, lüks villalar, kurumsal ofisler, otel ve restoran gibi ağırlama mekânları ile çeşitli ticari projeler dâhil olmak üzere farklı ölçek ve işlevlerdeki yaşam ve çalışma alanlarını kapsıyor.",
      "Uzmanlığımın merkezinde ileri düzey 3D modelleme ve fotogerçekçi mimari görselleştirme bulunuyor. AutoCAD deneyimimle desteklediğim çalışmalarımda malzeme, ışık, doku ve mimari detayları titizlikle ele alarak tasarım fikirlerini yüksek gerçekçilik düzeyine sahip görsellere dönüştürüyorum.",
      "Mimarlar, iç mimarlar, gayrimenkul geliştiricileri ve tasarım stüdyolarıyla iş birliği içinde çalışırken önceliğim; estetik açıdan güçlü, teknik olarak doğru ve özenle hazırlanmış çözümler üretmek.",
      "Nihai amacım; tasarım vizyonunu, teknik uzmanlığı ve fotogerçekçi görselleştirme hassasiyetini bir araya getirerek mimari fikirleri etkileyici görsel hikâyelere dönüştürmek.",
    ],
  },
  en: {
    eyebrow: "About me",
    quote: "Bringing sophisticated spaces to life through design, detail, and photorealistic visualization.",
    intro: "Contemporary, sophisticated interior architecture shaped by warm minimalism and quiet luxury.",
    paragraphs: [
      "With 16 years of experience in interior architecture, 3D modeling, and photorealistic architectural visualization, I specialize in transforming architectural and interior design concepts into compelling, lifelike visual experiences.",
      "Combining a strong foundation in interior architecture with advanced visualization expertise, my work bridges creative design thinking and technical precision. I approach each project with an understanding of spatial composition, materiality, lighting, textures, and architectural details.",
      "My visual approach is influenced by contemporary sophistication, warm minimalism, and quiet luxury. Refined material palettes, thoughtful lighting, balanced proportions, and understated elegance shape the aesthetic identity of my work.",
      "My experience encompasses residential and commercial projects of varying scales, including private residences, luxury villas, corporate offices, hospitality spaces, and commercial developments.",
      "At the core of my expertise is high-end 3D modeling and photorealistic architectural visualization, supported by extensive experience with AutoCAD. Through meticulous attention to materials, lighting, textures, and detail, I translate design concepts into realistic, emotionally engaging imagery.",
      "Whether collaborating with architects, interior designers, developers, and creative studios or working directly with residential and commercial clients, I strive to deliver visually compelling, technically accurate, and thoughtfully executed solutions.",
      "My goal is to bring together design intelligence, visual storytelling, and photorealistic precision—turning architectural ideas into immersive visual narratives that capture the character, atmosphere, and potential of every space.",
    ],
  },
} as const;

export function AboutSection({ locale }: AboutSectionProps) {
  const copy = aboutCopy[locale];

  return (
    <section className="about-section container" id="about" aria-labelledby="about-title">
      <div className="about-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="about-title">{copy.quote}</h2>
        <p className="about-intro">{copy.intro}</p>
        <figure className="about-profile">
          <Image
            alt={locale === "tr" ? "Bora Evgar portre fotoğrafı" : "Portrait of Bora Evgar"}
            className="about-profile-image"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bora-eqGp6ScOEgM94yjAGLwkfeOoHNdC1F.jpeg"
            unoptimized
          />
        </figure>
      </div>
      <div className="about-body">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
