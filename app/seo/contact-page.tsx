import { getProposalHref, getWhatsAppHref, studioAddress, studioEmail, studioInstagram, studioLinkedIn, studioPhone } from "../contact-details";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import type { Locale } from "../i18n";
import { absoluteUrl, breadcrumbSchema } from "./paths";
import { BreadcrumbTrail } from "./content-components";
import { StructuredData } from "./structured-data";
import { LeadLink } from "../lead-link";

const contactCopy = {
  tr: {
    eyebrow: "İletişim",
    title: "Projeniz hakkında konuşalım",
    intro: "İç mimarlık, villa, konut veya ticari mekân projenizi kısaca paylaşın. İlk görüşmede ihtiyaç, konum ve beklenen teslim kapsamını netleştirebiliriz.",
    home: "Ana sayfa",
    email: "E-posta",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    address: "Stüdyo adresi",
    locationNote: "Bora Evgar Studio'nun tek fiziksel adresi Ankara/Çankaya Yıldızevler'dedir. Diğer semt ve şehirler hizmet alanıdır; şube değildir.",
    proposal: "Proje bilgilerini e-posta ile paylaşın",
  },
  en: {
    eyebrow: "Contact",
    title: "Let’s discuss your project",
    intro: "Briefly share your interior architecture, villa, residential or commercial project. An initial conversation can clarify the brief, location and expected deliverables.",
    home: "Home",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Studio address",
    locationNote: "Bora Evgar Studio has one physical address in Yıldızevler, Çankaya, Ankara. Other neighbourhoods and cities are service areas, not branches.",
    proposal: "Share project details by email",
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const copy = contactCopy[locale];
  const currentPath = locale === "tr" ? "/tr/iletisim" : "/en/contact";
  const alternatePath = locale === "tr" ? "/en/contact" : "/tr/iletisim";
  const breadcrumbItems = [
    { name: copy.home, url: absoluteUrl(`/${locale}`) },
    { name: copy.eyebrow, url: absoluteUrl(currentPath) },
  ];

  return (
    <>
      <SiteHeader locale={locale} currentHref={currentPath} alternateHref={alternatePath} />
      <main id="main-content">
        <BreadcrumbTrail items={[
          { label: copy.home, href: `/${locale}` },
          { label: copy.eyebrow, href: currentPath },
        ]} />
        <header className="editorial-hero container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="editorial-lead">{copy.intro}</p>
        </header>
        <section className="editorial-section container" aria-labelledby="contact-details-title">
          <div className="editorial-section-heading">
            <p className="eyebrow">01 / {locale === "tr" ? "DOĞRUDAN İLETİŞİM" : "DIRECT CONTACT"}</p>
            <h2 id="contact-details-title">{locale === "tr" ? "Size uygun kanaldan ulaşın" : "Choose a direct contact channel"}</h2>
          </div>
          <div className="contact-detail-grid">
            <article className="contact-detail-card">
              <p className="eyebrow">{copy.email}</p>
              <LeadLink href={`mailto:${studioEmail}`} trackingLabel="contact-email">
                {studioEmail} <span aria-hidden="true">↗</span>
              </LeadLink>
            </article>
            <article className="contact-detail-card">
              <p className="eyebrow">{copy.phone}</p>
              <LeadLink href={`tel:${studioPhone.replace(/\D/g, "")}`} trackingLabel="phone">
                {studioPhone} <span aria-hidden="true">↗</span>
              </LeadLink>
            </article>
            <article className="contact-detail-card">
              <p className="eyebrow">{copy.whatsapp}</p>
              <LeadLink href={getWhatsAppHref(locale)} rel="noreferrer" target="_blank" trackingLabel="whatsapp">
                {locale === "tr" ? "WhatsApp'tan mesaj gönderin" : "Send a WhatsApp message"} <span aria-hidden="true">↗</span>
              </LeadLink>
            </article>
          </div>
          <div className="contact-address-block">
            <p className="eyebrow">{copy.address}</p>
            <address>{studioAddress}</address>
            <p>{copy.locationNote}</p>
            <div className="contact-social-links">
              <a href={studioInstagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={studioLinkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="contact-proposal-link">
            <LeadLink href={getProposalHref(locale)} trackingLabel="contact-proposal">
              {copy.proposal} <span aria-hidden="true">↗</span>
            </LeadLink>
          </div>
        </section>
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${absoluteUrl(currentPath)}#contactpage`,
          url: absoluteUrl(currentPath),
          name: copy.title,
          description: copy.intro,
          inLanguage: locale === "tr" ? "tr-TR" : "en",
          about: { "@id": "https://boraevgar.com/#professional-service" },
          mainEntity: { "@id": "https://boraevgar.com/#professional-service" },
        }} />
        <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
