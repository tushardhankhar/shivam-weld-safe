import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/products/", "/about/", "/industries/", "/why-choose-us/", "/contact/", ...categories.map((c) => `/products/${c.slug}/`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
