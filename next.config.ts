import type { NextConfig } from "next";
import { getProjectSlugs } from "./app/portfolio-data";

const legacyProjectRedirects = getProjectSlugs().flatMap((slug) => {
  const prefix = ["commercial-projects-", "exterior-", "concept-renders-"].find((candidate) =>
    slug.startsWith(candidate),
  );

  if (!prefix) return [];

  const legacySlug = `ticari-projeler-${slug.slice(prefix.length)}`;

  return ["tr", "en"].map((locale) => ({
    source: `/${locale}/projects/${legacySlug}`,
    destination: `/${locale}/projects/${slug}`,
    permanent: true,
  }));
});

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacyProjectRedirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
