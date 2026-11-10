import type { Locale } from "./i18n";

export const studioEmail = "info@boraevgar.com";
export const studioPhone = "0541 966 19 86";
export const studioPhoneE164 = `+90${studioPhone.replace(/\D/g, "").replace(/^0/u, "")}`;
export const studioPostalAddress = {
  streetAddress: "Yıldızevler, 708. Sk. No:14 D:7",
  addressLocality: "Çankaya",
  addressRegion: "Ankara",
  postalCode: "06550",
  addressCountry: "TR",
} as const;
export const studioAddress = `${studioPostalAddress.streetAddress}, ${studioPostalAddress.postalCode} ${studioPostalAddress.addressLocality}/${studioPostalAddress.addressRegion}`;
export const studioInstagram = "https://instagram.com/boraevgar.interior";
export const studioLinkedIn = "https://linkedin.com/in/bora-evgar-380a8188";

const whatsappNumber = "905419661986";

export function getWhatsAppHref(locale: Locale) {
  const message =
    locale === "tr"
      ? "Merhaba Bora Evgar Studio, iç mimarlık ve anahtar teslim uygulama projem hakkında görüşmek istiyorum."
      : "Hello Bora Evgar Studio, I would like to discuss an interior architecture and turnkey delivery project.";
  const encodedMessage = encodeURIComponent(message);

  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

export function getProposalHref(locale: Locale) {
  const subject =
    locale === "tr" ? "İç mimarlık ve anahtar teslim uygulama teklifi" : "Interior architecture and turnkey delivery proposal";
  const body =
    locale === "tr"
      ? "Merhaba Bora Evgar Studio,\n\nBir proje hakkında görüşmek istiyorum.\n\nProje türü:\nKonum:\nYaklaşık alan:\nHedef başlangıç tarihi:\n\n"
      : "Hello Bora Evgar Studio,\n\nI would like to discuss a project.\n\nProject type:\nLocation:\nApproximate area:\nTarget start date:\n\n";

  return `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
