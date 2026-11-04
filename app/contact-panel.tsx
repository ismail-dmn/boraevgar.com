import { getProposalHref, getWhatsAppHref, studioEmail } from "./contact-details";
import { messages, type Locale } from "./i18n";
import { LeadLink } from "./lead-link";

type ContactPanelProps = {
  locale: Locale;
};

export function ContactPanel({ locale }: ContactPanelProps) {
  const copy = messages[locale];

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner container">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <div className="contact-layout">
          <div>
<h2 aria-label={`${copy.contact.first} ${copy.contact.emphasis}`} className="contact-heading" id="contact-title">
          {copy.contact.first}{" "}<em>{copy.contact.emphasis}</em>
        </h2>
            <p className="contact-copy">{copy.contact.description}</p>
          </div>
          <div className="contact-actions">
            <LeadLink
              className="contact-button"
              href={getProposalHref(locale)}
              trackingLabel="proposal-email"
            >
              {copy.contact.proposal} <span aria-hidden="true">↗</span>
            </LeadLink>
            <LeadLink
              className="contact-whatsapp"
              href={getWhatsAppHref(locale)}
              rel="noreferrer"
              target="_blank"
              trackingLabel="whatsapp"
            >
              {copy.contact.whatsapp} <span aria-hidden="true">↗</span>
            </LeadLink>
          </div>
        </div>
        <div className="contact-footer">
          <span>{copy.contact.footer}</span>
          <a href={`mailto:${studioEmail}`}>{studioEmail}</a>
        </div>
      </div>
    </section>
  );
}
