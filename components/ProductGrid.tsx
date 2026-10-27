"use client";
import { useMemo, useState } from "react";
import { categories, type Product } from "@/lib/products";
import { CategoryIcon } from "./Icons";
import { QuoteDialog } from "./QuoteDialog";

export function ProductGrid({ items, showFilters = true }: { items: Product[]; showFilters?: boolean }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [quote, setQuote] = useState<string | null>(null);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((p) => (cat === "all" || p.category === cat) && (!q || `${p.brand ?? ""} ${p.name} ${p.description}`.toLowerCase().includes(q)));
  }, [items, query, cat]);

  const chip = (active: boolean) => `rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active ? "border-ink bg-ink text-white" : "border-ink/25 hover:border-ink"}`;

  return (
    <div>
      {showFilters && (
        <div className="mb-8 space-y-4">
          <div>
            <label htmlFor="product-search" className="sr-only">Search products</label>
            <input id="product-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products, e.g. gloves, regulator"
              className="w-full rounded-md border border-ink/25 bg-white px-4 py-3 md:max-w-md" />
          </div>
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={cat === "all"} onClick={() => setCat("all")} className={chip(cat === "all")}>All</button>
            {categories.map((c) => <button key={c.slug} type="button" aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)} className={chip(cat === c.slug)}>{c.name}</button>)}
          </div>
          <p role="status" className="text-sm text-ink/65">{shown.length} product{shown.length === 1 ? "" : "s"} shown</p>
        </div>
      )}

      {shown.length === 0 ? (
        <div className="rounded-lg border border-dashed border-ink/30 bg-white p-10 text-center">
          <p className="font-heading text-lg font-semibold">No products match your search</p>
          <p className="mt-2 text-ink/70">Try a different keyword, or tell us what you need and we will source it.</p>
          <button type="button" onClick={() => { setQuery(""); setCat("all"); }} className="mt-5 rounded-md border border-ink/30 px-5 py-2.5 text-sm font-semibold">Clear filters</button>
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const category = categories.find((c) => c.slug === p.category)!;
            return (
              <li key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-transform hover:-translate-y-0.5">
                {(p.image || p.photo || category.photo) ? (() => {
                  const photo = p.photo ?? category.photo;
                  return (
                    <div className={`relative aspect-[3/2] overflow-hidden ${p.image ? "border-b border-line bg-white" : "bg-mist"}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image ?? photo!.src} alt={p.image ? `${p.brand ? `${p.brand} ` : ""}${p.name}` : `${category.name} (representative image)`} loading="lazy" width={600} height={400}
                        style={p.image ? undefined : { objectPosition: photo!.position, transformOrigin: photo!.position ?? "center", transform: photo!.zoom ? `scale(${photo!.zoom})` : undefined }}
                        className={p.image ? "h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]" : "h-full w-full object-cover"} />
                      {!p.image && <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-[0.65rem] font-semibold text-ink/70">Representative image</span>}
                    </div>
                  );
                })() : (
                  <div className="bg-grid-light relative flex aspect-[3/2] items-center justify-center bg-mist text-ink" role="img" aria-label={`${category.name} illustration`}>
                    <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-accent-soft text-accent"><CategoryIcon name={category.icon} className="h-14 w-14" /></span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="eyebrow w-fit rounded-full bg-mist px-3 py-1 text-[0.68rem] text-ink/70">{category.name}</p>
                    {p.brand && <p className="eyebrow text-[0.68rem] text-accent">{p.brand}</p>}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink/75">{p.description}</p>
                  {p.specs && (
                    <dl className="mt-3 grid grid-cols-2 gap-x-3 text-xs">
                      {p.specs.map(([k, v]) => <div key={k} className="contents"><dt className="text-ink/55">{k}</dt><dd>{v}</dd></div>)}
                    </dl>
                  )}
                  <button type="button" onClick={() => setQuote(p.name)} className="mt-5 rounded-lg bg-ink px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent">Request a Quote</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <QuoteDialog productName={quote} onClose={() => setQuote(null)} />
    </div>
  );
}
