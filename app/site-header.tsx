import Image from "next/image";
import Link from "next/link";
import { getProposalHref } from "./contact-details";
import { messages, type Locale } from "./i18n";
import { LeadLink } from "./lead-link";

type SiteHeaderProps = {
  locale: Locale;
  currentHref: string;
  alternateHref: string;
};

export function SiteHeader({ locale, currentHref, alternateHref }: SiteHeaderProps) {
  const copy = messages[locale];

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {locale === "tr" ? "İçeriğe geç" : "Skip to content"}
      </a>
      <div className="site-nav container">
        <Link className="brand" href={`/${locale}`} aria-label="Bora Evgar Interior Architecture">
          <Image
            className="brand-logo"
            src="/images/brand/bora-evgar-logo.png"
            alt="Bora Evgar Interior Architecture — Design, Visualization, Application"
            width={755}
            height={422}
            unoptimized
          />
        </Link>

        <nav className="primary-nav" aria-label={locale === "tr" ? "Ana menü" : "Main navigation"}>
          <Link href={`/${locale}#work`}>{copy.nav.work}</Link>
          <Link href={`/${locale}#process`}>{copy.nav.studio}</Link>
          <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
          <Link href={`/${locale}#contact`}>{copy.nav.contact}</Link>
        </nav>

        <div className="header-actions">
          <nav className="language-switcher" aria-label={copy.nav.language}>
            <Link
              aria-current={locale === "tr" ? "page" : undefined}
              className={locale === "tr" ? "is-active" : undefined}
              href={locale === "tr" ? currentHref : alternateHref}
              lang="tr"
            >
              TR
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              aria-current={locale === "en" ? "page" : undefined}
              className={locale === "en" ? "is-active" : undefined}
              href={locale === "en" ? currentHref : alternateHref}
              lang="en"
            >
              EN
            </Link>
          </nav>
          <LeadLink
            className="header-cta"
            href={getProposalHref(locale)}
            trackingLabel="header-proposal"
          >
            {copy.nav.cta} <span aria-hidden="true">↗</span>
          </LeadLink>
        </div>
      </div>
    </header>
  );
}
