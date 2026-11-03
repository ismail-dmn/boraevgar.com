"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { messages, type Locale } from "./i18n";

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConsentChoice = "accepted" | "rejected" | null;

type AnalyticsProps = {
  locale: Locale;
};

const cookieName = "boraevgar_consent";
const hasTracking = Boolean(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
);

function readConsentCookie(): ConsentChoice {
  const value = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${cookieName}=`))
    ?.split("=")[1];

  return value === "accepted" || value === "rejected" ? value : null;
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener("boraevgar:consent-change", onChange);
  return () => window.removeEventListener("boraevgar:consent-change", onChange);
}

function getServerConsent(): ConsentChoice {
  return null;
}

export function Analytics({ locale }: AnalyticsProps) {
  const pathname = usePathname();
  const copy = messages[locale];
  const consent = useSyncExternalStore(subscribeToConsent, readConsentCookie, getServerConsent);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    function openPreferences() {
      setShowPreferences(true);
    }

    window.addEventListener("boraevgar:open-consent", openPreferences);
    return () => window.removeEventListener("boraevgar:open-consent", openPreferences);
  }, []);

  useEffect(() => {
    if (consent !== "accepted") {
      return;
    }

    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });

    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag?.("event", "page_view", {
        page_location: window.location.href,
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [consent, pathname]);

  function chooseConsent(choice: Exclude<ConsentChoice, null>) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${cookieName}=${choice}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
    window.dispatchEvent(new Event("boraevgar:consent-change"));
    setShowPreferences(false);
    window.gtag?.("consent", "update", {
      ad_storage: choice === "accepted" ? "granted" : "denied",
      ad_user_data: choice === "accepted" ? "granted" : "denied",
      ad_personalization: choice === "accepted" ? "granted" : "denied",
      analytics_storage: choice === "accepted" ? "granted" : "denied",
    });
  }

  if (!hasTracking || (consent !== null && !showPreferences)) {
    return null;
  }

  return (
    <aside
      className="cookie-consent"
      aria-label={locale === "tr" ? "Çerez tercihleri" : "Cookie preferences"}
      aria-live="polite"
    >
      <div>
        <p className="cookie-consent-title">{copy.consent.title}</p>
        <p className="cookie-consent-copy">{copy.consent.description}</p>
      </div>
      <div className="cookie-consent-actions">
        <button
          className="cookie-button cookie-button--quiet"
          onClick={() => chooseConsent("rejected")}
          type="button"
        >
          {copy.consent.decline}
        </button>
        <button
          className="cookie-button cookie-button--primary"
          onClick={() => chooseConsent("accepted")}
          type="button"
        >
          {copy.consent.accept}
        </button>
      </div>
    </aside>
  );
}

