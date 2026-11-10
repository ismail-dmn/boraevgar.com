import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n";
import { BlogArticlePage, getArticleParams } from "../../../seo/blog-pages";
import { getArticle } from "../../../seo/articles";
import { absoluteUrl, blogPath, brandedTitle, localizedAlternates } from "../../../seo/paths";

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return getArticleParams(params.locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const article = getArticle(localeParam, slug);
  if (!article) notFound();
  const copy = article[localeParam];
  const path = blogPath(localeParam, copy.slug);
  const title = brandedTitle(copy.metaTitle);
  return {
    title: { absolute: title },
    description: copy.description,
    alternates: localizedAlternates(localeParam, {
      tr: blogPath("tr", article.tr.slug),
      en: blogPath("en", article.en.slug),
    }),
    openGraph: { title, description: copy.description, url: absoluteUrl(path), type: "article" },
    twitter: { card: "summary", title, description: copy.description },
  };
}

type BlogArticleRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default function BlogArticleRoute({ params }: BlogArticleRouteProps) {
  return (
    <Suspense fallback={<div className="container project-loading" role="status">Loading article…</div>}>
      <ResolvedBlogArticle params={params} />
    </Suspense>
  );
}

async function ResolvedBlogArticle({ params }: BlogArticleRouteProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  return <BlogArticlePage locale={locale} slug={slug} />;
}
