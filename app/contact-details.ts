import type { Locale } from "./i18n";

export const studioEmail = "hello@boraevgar.com";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export function getWhatsAppHref(locale: Locale) {
  const message =
    locale === "tr"
      ? "Merhaba Bora Evgar Studio, mimari görselleştirme projem hakkında görüşmek istiyorum."
      : "Hello Bora Evgar Studio, I would like to discuss an architectural visualization project.";
  const encodedMessage = encodeURIComponent(message);

  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

export function getProposalHref(locale: Locale) {
  const subject =
    locale === "tr" ? "Mimari görselleştirme teklifi" : "Architectural visualization proposal";
  const body =
    locale === "tr"
      ? "Merhaba Bora Evgar Studio,\n\nBir proje hakkında görüşmek istiyorum.\n\nProje türü:\nKonum:\nHedef teslim tarihi:\n\n"
      : "Hello Bora Evgar Studio,\n\nI would like to discuss a project.\n\nProject type:\nLocation:\nTarget delivery date:\n\n";

  return `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
