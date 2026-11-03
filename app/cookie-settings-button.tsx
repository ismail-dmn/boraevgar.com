"use client";

type CookieSettingsButtonProps = {
  label: string;
};

export function CookieSettingsButton({ label }: CookieSettingsButtonProps) {
  return (
    <button
      className="cookie-settings-link"
      onClick={() => window.dispatchEvent(new Event("boraevgar:open-consent"))}
      type="button"
    >
      {label}
    </button>
  );
}
