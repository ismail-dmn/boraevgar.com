import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "../contact-panel";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import type { Locale } from "../i18n";
import { absoluteUrl, blogIndexPath, blogPath, breadcrumbSchema, servicePath } from "./paths";
import { BreadcrumbTrail } from "./content-components";
import { articleRecords, getArticle, getArticles } from "./articles";
import { getServiceById } from "./services";
import { StructuredData } from "./structured-data";

const blogIndexCopy = {
  tr: {
    title: "İç Mimarlık ve Tasarım Rehberleri",
    eyebrow: "Notlar ve rehberler",
    intro: "İç mimarlık süreci, teknik kararlar ve mekân tasarımı hakkında proje sahiplerine yardımcı olacak açıklayıcı yazılar.",
    home: "Ana sayfa",
    blog: "Yazılar",
  },
  en: {
    title: "Interior Architecture and Design Guides",
    eyebrow: "Notes and guides",
    intro: "Practical articles for clients exploring interior architecture, technical decisions and the design of a space.",
    home: "Home",
    blog: "Journal",
  },
} as const;

export function BlogIndexPage({ locale }: { locale: Locale }) {
  const copy = blogIndexCopy[locale];
  const articles = getArticles(locale);
  const currentPath = blogIndexPath(locale);
  const alternatePath = blogIndexPath(locale === "tr" ? "en" : "tr");

  return (
    <>
      <SiteHeader locale={locale} currentHref={currentPath} alternateHref={alternatePath} />
      <main id="main-content">
        <BreadcrumbTrail items={[{ label: copy.home, href: `/${locale}` }, { label: copy.blog, href: currentPath }]} />
        <header className="editorial-hero container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="editorial-lead">{copy.intro}</p>
        </header>
        <section className="editorial-section container" aria-label={copy.blog}>
          <div className="article-card-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.id}>
                <p className="eyebrow">{locale === "tr" ? "İÇ MİMARLIK" : "INTERIOR ARCHITECTURE"}</p>
                <h2><Link href={blogPath(locale, article.slug)}>{article.title}</Link></h2>
                <p>{article.description}</p>
                <Link className="text-link" href={blogPath(locale, article.slug)}>
                  {locale === "tr" ? "Yazıyı oku" : "Read article"} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: copy.title,
          description: copy.intro,
          url: absoluteUrl(currentPath),
          inLanguage: locale === "tr" ? "tr-TR" : "en",
          blogPost: articles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: absoluteUrl(blogPath(locale, article.slug)),
          })),
        }} />
        <StructuredData data={breadcrumbSchema([
          { name: copy.home, url: absoluteUrl(`/${locale}`) },
          { name: copy.blog, url: absoluteUrl(currentPath) },
        ])} />
        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

const articleIndexLabel = { tr: "Yazılar", en: "Journal" } as const;
const homeLabel = { tr: "Ana sayfa", en: "Home" } as const;

export function BlogArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const article = getArticle(locale, slug);
  if (!article) notFound();

  const copy = article[locale];
  const currentPath = blogPath(locale, copy.slug);
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const alternatePath = blogPath(alternateLocale, article[alternateLocale].slug);
  const relatedServices = copy.relatedServices
    .map((id) => getServiceById(id))
    .filter((service): service is NonNullable<ReturnType<typeof getServiceById>> => Boolean(service));
  const breadcrumbItems = [
    { name: homeLabel[locale], url: absoluteUrl(`/${locale}`) },
    { name: articleIndexLabel[locale], url: absoluteUrl(blogIndexPath(locale)) },
    { name: copy.title, url: absoluteUrl(currentPath) },
  ];

  return (
    <>
      <SiteHeader locale={locale} currentHref={currentPath} alternateHref={alternatePath} />
      <main id="main-content">
        <BreadcrumbTrail items={[
          { label: homeLabel[locale], href: `/${locale}` },
          { label: articleIndexLabel[locale], href: blogIndexPath(locale) },
          { label: copy.title, href: currentPath },
        ]} />
        <article className="blog-article container">
          <header className="editorial-hero blog-article-header">
            <p className="eyebrow">{locale === "tr" ? "İç mimarlık rehberi" : "Interior architecture guide"}</p>
            <h1>{copy.title}</h1>
            <p className="editorial-lead">{copy.intro}</p>
          </header>
          <div className="blog-article-body">
            {copy.sections.map((section, index) => (
              <section className="blog-article-section" key={section.heading}>
                <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? (
                    <ul className="editorial-bullets">
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
          <section className="editorial-pair blog-related-services" aria-label={locale === "tr" ? "İlgili hizmetler" : "Related services"}>
            {relatedServices.map((service) => (
              <Link href={servicePath(locale, service[locale].slug)} key={service.id}>
                {service[locale].title} <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </section>
        </article>
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": copy.title,
          "description": copy.description,
          url: absoluteUrl(currentPath),
          mainEntityOfPage: absoluteUrl(currentPath),
          inLanguage: locale === "tr" ? "tr-TR" : "en",
          author: { "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: "Bora Evgar Studio" },
          publisher: { "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: "Bora Evgar Studio" },
        }} />
        <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
        <ContactPanel locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

export function getArticleParams(locale: Locale) {
  return articleRecords.map((article) => ({ slug: article[locale].slug }));
}
