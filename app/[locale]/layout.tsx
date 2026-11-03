import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Analytics } from "../analytics";
import { isLocale, locales, messages } from "../i18n";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const primaryTagId = analyticsId || adsId;
const googleTagBootstrap = [
  "window.dataLayer = window.dataLayer || [];",
  "window.gtag = function(){ window.dataLayer.push(arguments); };",
  "window.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });",
  "window.gtag('js', new Date());",
  analyticsId && `window.gtag('config', ${JSON.stringify(analyticsId)}, { send_page_view: false });`,
  adsId && `window.gtag('config', ${JSON.stringify(adsId)}, { send_page_view: false });`,
]
  .filter(Boolean)
  .join("\n");

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type LocaleMetadataProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleMetadataProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const copy = messages[localeParam];
  const canonical = `/${localeParam}`;
  const imageAlt =
    localeParam === "tr"
      ? "Bora Evgar Studio imzalı çağdaş taş konut"
      : "Contemporary stone residence by Bora Evgar Studio";

  return {
    title: {
      default: copy.metadata.title,
      template: "%s | Bora Evgar Studio",
    },
    description: copy.metadata.description,
    metadataBase: new URL("https://boraevgar.com"),
    alternates: {
      canonical,
      languages: { tr: "/tr", en: "/en" },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: `https://boraevgar.com${canonical}`,
      siteName: "Bora Evgar Studio",
      locale: localeParam === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: [{ url: "/images/quiet-luxury-01.png", alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: ["/images/quiet-luxury-01.png"],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1efea",
};

export default async function RootLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <html lang={localeParam}>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {primaryTagId ? (
          <>
            <Script
              id="google-tag-bootstrap"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: googleTagBootstrap }}
            />
            <Script
              id="google-tag-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryTagId)}`}
              strategy="afterInteractive"
            />
          </>
        ) : null}
        <Analytics locale={localeParam} />
        {children}
      </body>
    </html>
  );
}
