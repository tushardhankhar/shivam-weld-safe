import { pageMeta } from "@/lib/seo";
import { strengths } from "@/lib/content";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: "Why Choose Shivam Weld Safe India",
  description: "A focused range of safety and welding supplies, wholesale supply and direct WhatsApp enquiries from a GST-registered New Delhi trader at Ajmeri Gate.",
  path: "/why-choose-us/",
});

export default function WhyPage() {
  return (
    <>
      <PageHero eyebrow="Why choose us" title="Straightforward supply for industrial buyers" intro="What you can expect when you enquire with us." />
      <section className="section-y">
        <div className="container-x">
          <ol className="grid gap-6 md:grid-cols-2">
            {strengths.map((s, n) => (
              <li key={s.title} className="flex gap-5 rounded-lg border border-line bg-white p-7 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft font-heading text-accent text-sm font-bold">{n + 1}</span>
                <div><h2 className="text-lg font-semibold">{s.title}</h2><p className="mt-2 text-ink/75">{s.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
