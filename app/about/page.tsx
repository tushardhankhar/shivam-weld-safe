import { pageMeta } from "@/lib/seo";
import { site, fullAddress } from "@/lib/site";
import { categories } from "@/lib/products";
import { PageHero, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import Link from "next/link";

export const metadata = pageMeta({
  title: "About Shivam Weld Safe India",
  description: "Shivam Weld Safe India is a New Delhi wholesale trader of industrial safety equipment and welding accessories, GST-registered since November 2021 and based at Ajmeri Gate.",
  path: "/about/",
});

export default function AboutPage() {
  const facts: [string, string][] = [
    ["Business name", site.name],
    ["Owner", site.owner],
    ["Business type", "Wholesale trader"],
    ["GST registered since", site.gstRegisteredSince],
    ["Location", fullAddress],
  ];
  return (
    <>
      <PageHero eyebrow="About us" title="A focused supplier of safety and welding equipment" intro="Based in the Ajmeri Gate market of New Delhi, serving businesses that need dependable protective gear and welding accessories." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-navy/85">
            <SectionHeading title="What we do" />
            <p>{site.name} is a wholesale trader of industrial safety equipment and welding accessories, owned by {site.owner}. The business is registered for GST since {site.gstRegisteredSince} and operates from Shrinath Market on G.B. Road, Ajmeri Gate.</p>
            <p>Our range covers {categories.map((c) => c.name.toLowerCase()).join(", ")}. Browse the full <Link href="/products/" className="font-semibold underline decoration-accent decoration-2 underline-offset-4">product catalogue</Link> or send us a requirement directly.</p>
            <p>We work on enquiries: tell us the product and quantity you need and we respond on WhatsApp. For the reasons buyers choose us, see <Link href="/why-choose-us/" className="font-semibold underline decoration-accent decoration-2 underline-offset-4">Why Choose Us</Link>.</p>
          </div>
          <dl className="h-fit divide-y divide-line rounded-lg border border-line bg-white">
            {facts.map(([k, v]) => <div key={k} className="p-5"><dt className="eyebrow text-navy/55">{k}</dt><dd className="mt-1 font-semibold">{v}</dd></div>)}
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
