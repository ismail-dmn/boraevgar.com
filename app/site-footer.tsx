import Link from "next/link";
import { studioEmail } from "./contact-details";
import { CookieSettingsButton } from "./cookie-settings-button";
import { messages, type Locale } from "./i18n";

type SiteFooterProps = {
  locale: Locale;
};

const hasTracking = Boolean(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
);

export function SiteFooter({ locale }: SiteFooterProps) {
  const copy = messages[locale];

  return (
    <footer className="site-footer container">
      <Link className="footer-brand" href={`/${locale}`} aria-label="Bora Evgar Studio">
        Bora Evgar <span>Studio</span>
      </Link>
      <p className="footer-copyright">© 2026 Bora Evgar Studio</p>
      <div className="footer-links">
        <a href={`mailto:${studioEmail}`}>{copy.footer.email}</a>
        <Link href={`/${locale}#work`}>{copy.footer.work}</Link>
        {hasTracking ? <CookieSettingsButton label={copy.footer.cookieSettings} /> : null}
      </div>
    </footer>
  );
}
