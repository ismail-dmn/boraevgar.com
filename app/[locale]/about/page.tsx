import { AboutSection } from "../../about-section";
import { SiteFooter } from "../../site-footer";
import { SiteHeader } from "../../site-header";
import type { Locale } from "../../i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SiteHeader
        locale={locale}
        currentHref={`/${locale}/about`}
        alternateHref={`/${locale === "tr" ? "en" : "tr"}/about`}
      />
      <main>
        <AboutSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
