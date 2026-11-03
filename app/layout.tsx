import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bora Evgar — Architectural Visualization Studio",
  description: "Bora Evgar Studio creates atmospheric architectural imagery for studios, developers and brands shaping the built environment.",
  metadataBase: new URL("https://boraevgar.com"),
  openGraph: { title: "Bora Evgar — Architectural Visualization Studio", description: "Spaces, imagined with clarity.", url: "https://boraevgar.com", siteName: "Bora Evgar Studio", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
