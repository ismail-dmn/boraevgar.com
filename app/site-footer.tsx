import Image from "next/image";
import Link from "next/link";
import { studioEmail } from "./contact-details";
import { CookieSettingsButton } from "./cookie-settings-button";
import { messages, type Locale } from "./i18n";
import { localLandingPaths, serviceIndexPath } from "./seo/paths";

type SiteFooterProps = {
  locale: Locale;
};

const hasTracking = Boolean(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
);

export function SiteFooter({ locale }: SiteFooterProps) {
  const copy = messages[locale];
  const displayEmail = studioEmail.toUpperCase();

  return (
    <footer className="site-footer container">
      <Link className="footer-brand" href={`/${locale}`} aria-label="Bora Evgar Interior Architecture">
        <Image
          className="footer-logo"
          src="/images/brand/bora-evgar-logo.png"
          alt="Bora Evgar Interior Architecture — Design, Visualization, Application"
          width={755}
          height={422}
          unoptimized
        />
      </Link>
      <a
        className="db-brand"
        href="https://dbilisim.com/hizmetler/web-tasarim"
        target="_blank"
        rel="noreferrer"
        aria-label="DB Bilişim web tasarım hizmetleri"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.ico-z59U55CJqUs5Cibjtz7xtQYcusTDvd.x-icon"
          alt="DB Bilişim"
          width={28}
          height={28}
          unoptimized
        />
      </a>
      <div className="footer-links">
        <a href={`mailto:${studioEmail}`}>{displayEmail}</a>
        <Link href={`/${locale}#work`}>{copy.footer.work}</Link>
        <Link href={serviceIndexPath(locale)}>{locale === "tr" ? "Hizmetler" : "Services"}</Link>
        <Link href={localLandingPaths[locale]}>{locale === "tr" ? "Ankara" : "Ankara service area"}</Link>
        <Link href={locale === "tr" ? "/tr/iletisim" : "/en/contact"}>{locale === "tr" ? "İletişim" : "Contact"}</Link>
        <Link href={`/${locale}/blog`}>{locale === "tr" ? "Yazılar" : "Journal"}</Link>
        {hasTracking ? <CookieSettingsButton label={copy.footer.cookieSettings} /> : null}
      </div>
    </footer>
  );
}
