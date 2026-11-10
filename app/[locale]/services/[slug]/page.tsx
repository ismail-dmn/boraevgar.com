import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n";
import { getProjects } from "../../../portfolio-data";
import { ServiceDetailPage } from "../../../seo/service-pages";
import { absoluteUrl, brandedTitle, localizedAlternates, servicePath } from "../../../seo/paths";
import { getService, serviceRecords } from "../../../seo/services";

export function generateStaticParams() {
  return serviceRecords.map((service) => ({ slug: service.en.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam) || localeParam !== "en") notFound();
  const service = getService("en", slug);
  if (!service) notFound();

  const path = servicePath("en", service.en.slug);
  const relatedProject = service.relatedProjectSlugs?.map((projectSlug) => getProjects("en").find((project) => project.slug === projectSlug)).find(Boolean);
  const image = relatedProject?.images[0];
  const title = brandedTitle(service.en.metaTitle);
  const description = service.en.description;

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates("en", {
      tr: servicePath("tr", service.tr.slug),
      en: path,
    }),
    openGraph: { title, description, url: absoluteUrl(path), type: "website", images: image ? [{ url: image.src, alt: image.alt }] : [] },
    twitter: { card: "summary_large_image", title, description, images: image ? [image.src] : [] },
  };
}

type ServiceDetailRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default function EnglishServiceDetail({ params }: ServiceDetailRouteProps) {
  return (
    <Suspense fallback={<div className="container project-loading" role="status">Loading service details…</div>}>
      <ResolvedEnglishServiceDetail params={params} />
    </Suspense>
  );
}

async function ResolvedEnglishServiceDetail({ params }: ServiceDetailRouteProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale !== "en") notFound();
  return <ServiceDetailPage locale="en" slug={slug} />;
}
