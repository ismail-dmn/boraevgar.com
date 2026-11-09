import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n";
import { getProjects } from "../../../portfolio-data";
import { ServiceDetailPage } from "../../../seo/service-pages";
import { absoluteUrl, brandedTitle, localizedAlternates, servicePath } from "../../../seo/paths";
import { getService, serviceRecords } from "../../../seo/services";

export function generateStaticParams() {
  return serviceRecords.map((service) => ({ slug: service.tr.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam) || localeParam !== "tr") notFound();
  const service = getService("tr", slug);
  if (!service) notFound();

  const path = servicePath("tr", service.tr.slug);
  const relatedProject = service.relatedProjectSlugs?.map((projectSlug) => getProjects("tr").find((project) => project.slug === projectSlug)).find(Boolean);
  const image = relatedProject?.images[0];
  const title = brandedTitle(service.tr.metaTitle);
  const description = service.tr.description;

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates("tr", {
      tr: path,
      en: servicePath("en", service.en.slug),
    }),
    openGraph: { title, description, url: absoluteUrl(path), type: "website", images: image ? [{ url: image.src, alt: image.alt }] : [] },
    twitter: { card: "summary_large_image", title, description, images: image ? [image.src] : [] },
  };
}

type ServiceDetailRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default function TurkishServiceDetail({ params }: ServiceDetailRouteProps) {
  return (
    <Suspense fallback={<div className="container project-loading" role="status">Loading service details…</div>}>
      <ResolvedServiceDetail params={params} />
    </Suspense>
  );
}

async function ResolvedServiceDetail({ params }: ServiceDetailRouteProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();
  return <ServiceDetailPage locale="tr" slug={slug} />;
}
