import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { industries } from "@/lib/content";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: "Industries We Serve",
  description: "Safety equipment and welding accessories for fabrication shops, manufacturing units, construction sites, engineering workshops and industrial maintenance teams in Delhi NCR.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Industries we serve" intro="Our product range suits teams that weld, fabricate, build and maintain." />
      <section className="section-y">
        <div className="container-x">
          <ul className="grid gap-6 md:grid-cols-2">
            {industries.map((i, n) => (
              <li key={i.name} className="rounded-lg border border-line bg-white p-7 shadow-sm">
                <p className="eyebrow text-navy/50">0{n + 1}</p>
                <h2 className="mt-2 text-xl font-semibold">{i.name}</h2>
                <p className="mt-3 text-navy/75">{i.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-navy/75">See what we supply in the <Link href="/products/" className="font-semibold underline decoration-accent decoration-2 underline-offset-4">product catalogue</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
