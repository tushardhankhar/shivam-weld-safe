import { notFound } from "next/navigation";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { categories, categoryBySlug, productsIn } from "@/lib/products";
import { site } from "@/lib/site";
import { PageHero } from "@/components/ui";
import { ProductGrid } from "@/components/ProductGrid";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() { return categories.map((c) => ({ category: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const c = categoryBySlug((await params).category);
  if (!c) return {};
  return pageMeta({ title: `${c.name} in Delhi`, description: `${c.summary} Supplied by Shivam Weld Safe India, Ajmeri Gate, New Delhi. Request a quote on WhatsApp.`, path: `/products/${c.slug}/` });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const c = categoryBySlug((await params).category);
  if (!c) notFound();
  const items = productsIn(c.slug);
  const ld = {
    "@context": "https://schema.org",
    "@graph": items.map((p) => ({
      "@type": "Product", name: p.name, description: p.description, category: c.name,
      brand: { "@type": "Organization", "@id": `${site.url}/#organization` },
    })),
  };
  return (
    <>
      <PageHero eyebrow="Category" title={c.name} intro={c.summary} />
      <section className="section-y">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-navy/65"><Link href="/products/" className="underline">Products</Link> / {c.name}</nav>
          <ProductGrid items={items} showFilters={false} />
          <p className="mt-12 text-sm text-navy/70">Browse other categories: {categories.filter((x) => x.slug !== c.slug).map((x, i, a) => <span key={x.slug}><Link href={`/products/${x.slug}/`} className="underline">{x.name}</Link>{i < a.length - 1 ? ", " : ""}</span>)}.</p>
        </div>
      </section>
      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
