import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta(opts: { title: string; description: string; path: string }): Metadata {
  const url = `${site.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary", title: opts.title, description: opts.description },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    founder: { "@type": "Person", name: site.owner },
    description: "Wholesale supplier of industrial safety equipment and welding accessories in New Delhi.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.lines.join(", "),
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
    ...(site.mapsUrl && { hasMap: site.mapsUrl }),
  };
}
