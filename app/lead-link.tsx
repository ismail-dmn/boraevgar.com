"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type LeadLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  trackingLabel: string;
  children: ReactNode;
};

export function LeadLink({
  href,
  trackingLabel,
  children,
  ...props
}: LeadLinkProps) {
  function trackLeadIntent() {
    const consentGranted = document.cookie
      .split(";")
      .some((cookie) => cookie.trim() === "boraevgar_consent=accepted");

    if (!consentGranted || !window.gtag) {
      return;
    }

    window.gtag("event", "generate_lead", {
      event_label: trackingLabel,
    });

    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

    if (adsId && conversionLabel) {
      window.gtag("event", "conversion", {
        send_to: `${adsId}/${conversionLabel}`,
        event_label: trackingLabel,
      });
    }
  }

  return (
    <a href={href} onClick={trackLeadIntent} {...props}>
      {children}
    </a>
  );
}
