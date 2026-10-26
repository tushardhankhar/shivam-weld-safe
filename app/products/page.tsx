import { pageMeta } from "@/lib/seo";
import { products } from "@/lib/products";
import { PageHero } from "@/components/ui";
import { ProductGrid } from "@/components/ProductGrid";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: "Safety & Welding Products Catalogue",
  description: "Browse safety goggles, electrode holders, hand gloves, safety shoes, gas regulators, safety belts and barricade tape from Shivam Weld Safe India, New Delhi. Request a quote on WhatsApp.",
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Catalogue" title="Industrial safety and welding products" intro="Search or filter the range, then request a quote for any item. Prices are shared on enquiry." />
      <section className="section-y"><div className="container-x"><ProductGrid items={products} /></div></section>
      <CtaBand title="Can't find what you need?" text="Tell us the product and quantity. We will confirm availability." />
    </>
  );
}
