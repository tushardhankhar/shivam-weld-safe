import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { categories, products } from "@/lib/products";
import { industries, strengths } from "@/lib/content";
import { CategoryIcon } from "@/components/Icons";
import { ButtonLink, SectionHeading, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { LocationMap } from "@/components/LocationMap";
import { GoogleReviews } from "@/components/GoogleReviews";
import { LoopVideo } from "@/components/LoopVideo";
import { ProductGrid } from "@/components/ProductGrid";

export const metadata = pageMeta({
  title: "Industrial Safety Equipment & Welding Supplies in Delhi",
  description: "Shivam Weld Safe India supplies industrial safety equipment and welding accessories from Ajmeri Gate, New Delhi: gas regulators, flashback arrestors, cutting torches, welding gloves, safety eyewear, cables and caution tape.",
  path: "/",
});

const brands = ["EUROWELD", "ENGIWELD", "ENGISAFE", "Eagle", "Sun Gold"];

const featured = [
  "euro-ultra-two-stage-pressure-regulator", "euro-seal-flashback-arrestor", "fine-cut-pug-machine", "robo-co2-regulator-heater-flow-meter",
  "engiweld-leather-welding-gloves", "eagle-safety-eyewear-clear", "fine-cut-gas-cutting-torch", "caution-tape", "euro-single-stage-co2-regulator",
].map((slug) => products.find((p) => p.slug === slug)!);

const reels = [
  { src: "/videos/engiweld-gloves.mp4", poster: "/videos/engiweld-gloves.jpg", title: "ENGIWELD leather welding gloves", tag: "Hand protection" },
  { src: "/videos/pvc-wires.mp4", poster: "/videos/pvc-wires.jpg", title: "2-core round PVC wires", tag: "Cables & wires" },
  { src: "/videos/sun-gold-spectacles.mp4", poster: "/videos/sun-gold-spectacles.jpg", title: "Sun Gold safety spectacles", tag: "Eye protection" },
];

const trust = [
  ["Wholesale supply", "For teams and sites"],
  ["Ajmeri Gate, New Delhi", "Shrinath Market, G.B. Road"],
  ["GST-registered", `Since ${site.gstRegisteredSince}`],
  ["Quotes on WhatsApp", "Pre-filled, one tap"],
];

export default function Home() {
  return (
    <>
      <section className="bg-grid-light relative overflow-hidden">
        <div className="container-x grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <Eyebrow>Wholesale · New Delhi</Eyebrow>
            <h1 className="text-5xl font-bold leading-[1.06] tracking-tight text-ink md:text-6xl xl:text-[4rem]">
              Industrial Safety.<br /><span className="mark-accent">Welding Excellence.</span><br />Reliable Supply.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
              Protective equipment and welding accessories for workshops, fabrication units and industrial sites, supplied from Ajmeri Gate, New Delhi.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact/" className="!px-8 !py-4 text-base">Request a Quote</ButtonLink>
              <ButtonLink href="/products/" variant="dark" className="!px-8 !py-4 text-base">Explore Products</ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border border-accent/40" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl bg-ink shadow-soft">
              <LoopVideo src="/videos/welding-apron.mp4" poster="/videos/welding-apron.jpg" eager label="Welder in a leather apron and gloves with sparks flying from a grinder"
                className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]" />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-xl border border-line bg-white px-6 py-4 shadow-soft sm:-left-8">
              <p className="font-heading text-3xl font-bold text-ink">{products.length}</p>
              <p className="text-xs text-ink/65">products across {categories.length} categories</p>
            </div>
          </div>
        </div>
        <div className="relative border-y border-line bg-white">
          <ul className="container-x grid grid-cols-2 gap-6 py-7 lg:grid-cols-4">
            {trust.map(([a, b]) => (
              <li key={a} className="border-l-2 border-accent pl-4"><p className="font-heading text-sm font-semibold">{a}</p><p className="text-xs text-ink/65">{b}</p></li>
            ))}
          </ul>
        </div>
        <div className="relative border-b border-line bg-ivory">
          <div className="container-x flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
            <p className="eyebrow text-[0.7rem] text-ink/50">Brands we stock</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:justify-end md:gap-x-12">
              {brands.map((b) => <li key={b} className="font-heading text-base font-bold tracking-wide text-ink/40 transition-colors hover:text-ink md:text-lg">{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Product range" title="Everything for safe, efficient welding" intro={`${categories.length} categories of welding, gas cutting and safety equipment, available in wholesale quantities.`} />
            <Link href="/products/" className="text-sm font-semibold underline decoration-accent/50 decoration-2 underline-offset-4 transition-colors hover:decoration-accent">View full catalogue →</Link>
          </div>
          <p className="mt-10 text-sm text-ink/55 sm:hidden" aria-hidden="true">Swipe to see all {categories.length} →</p>
          <ul aria-label="Product categories" className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 pt-2 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:p-0 lg:grid-cols-4">
            {categories.map((c, i) => {
              const n = products.filter((p) => p.category === c.slug).length;
              return (
                <li key={c.slug} className="w-[78%] shrink-0 snap-start sm:w-auto">
                  <Link href={`/products/${c.slug}/`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-ink/40">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent"><CategoryIcon name={c.icon} className="h-8 w-8" /></div>
                      <span className="font-heading text-sm font-semibold text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold">{c.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink/70">{c.summary}</p>
                    <span className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold">
                      {n} {n === 1 ? "product" : "products"}
                      <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-all group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-white">→</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-white section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="In stock now" title="Popular with our buyers" intro="Regulators, arrestors, cutting equipment and protective wear from the brands we stock. Ask for a quote on any item." />
            <Link href="/products/" className="text-sm font-semibold underline decoration-accent/50 decoration-2 underline-offset-4 transition-colors hover:decoration-accent">See all {products.length} products →</Link>
          </div>
          <div className="mt-14"><ProductGrid items={featured} showFilters={false} /></div>
        </div>
      </section>

      <section className="bg-ink section-y text-white">
        <div className="container-x">
          <SectionHeading light eyebrow="From the shop" title="See the products up close" intro="Short clips of stock at our Ajmeri Gate shop." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-3">
            {reels.map((r) => (
              <li key={r.src} className="group relative overflow-hidden rounded-2xl bg-ink-deep">
                <LoopVideo src={r.src} poster={r.poster} label={r.title} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-16">
                  <p className="eyebrow text-[0.68rem] text-white/60">{r.tag}</p>
                  <p className="mt-1 font-heading text-lg font-semibold">{r.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-mist section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-welder.jpg" alt="Welder in a protective helmet and gloves working on a metal frame" width={1800} height={1200} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
          </div>
          <div>
            <SectionHeading eyebrow="About us" title="A Delhi supplier built around welding and safety" />
            <p className="mt-6 text-lg text-ink/80">{site.name} is a New Delhi wholesale trader of industrial safety equipment and welding accessories, owned by {site.owner} and trading from Ajmeri Gate.</p>
            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {strengths.slice(0, 4).map((s) => (
                <li key={s.title} className="border-t border-ink/15 pt-3"><h3 className="text-base font-semibold">{s.title}</h3></li>
              ))}
            </ul>
            <ButtonLink href="/about/" variant="dark" className="mt-9">More about us</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/site-safety.jpg" alt="Two construction workers in high-visibility vests and hard hats at an excavation site" width={1100} height={1467} loading="lazy" className="h-full max-h-[34rem] w-full rounded-3xl object-cover shadow-soft" />
          </div>
          <div>
            <SectionHeading eyebrow="Industries" title="Equipment for the places work gets done" />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {industries.map((i, n) => (
                <li key={i.name} className="grid gap-1 py-5 sm:grid-cols-[3rem_1fr]">
                  <span className="font-heading text-sm font-semibold text-ink/35">0{n + 1}</span>
                  <div><h3 className="text-lg font-semibold">{i.name}</h3><p className="mt-1 text-sm text-ink/70">{i.text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <LocationMap />
      <CtaBand />
    </>
  );
}
