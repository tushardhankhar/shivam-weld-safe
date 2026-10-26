import Link from "next/link";
import { nav, site, photoCredits } from "@/lib/site";
import { categories } from "@/lib/products";
import { ContactDetails } from "./ContactLinks";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-heading text-lg font-bold">{site.name}</p>
          <p className="mt-3 text-sm text-steel">{site.tagline}. Proprietor: {site.owner}.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4 text-accent">Explore</p>
          <ul className="space-y-2 text-sm">{nav.map((n) => <li key={n.href}><Link href={n.href} className="text-steel hover:text-white">{n.label}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Product categories">
          <p className="eyebrow mb-4 text-accent">Products</p>
          <ul className="space-y-2 text-sm">{categories.map((c) => <li key={c.slug}><Link href={`/products/${c.slug}/`} className="text-steel hover:text-white">{c.name}</Link></li>)}</ul>
        </nav>
        <div>
          <p className="eyebrow mb-4 text-accent">Visit & Contact</p>
          <ContactDetails light />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-steel sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. GST-registered since {site.gstRegisteredSince}.</p>
          <p>Wholesale safety and welding supplies · Ajmeri Gate, New Delhi</p>
        </div>
        <p className="container-x pb-6 text-[0.7rem] text-steel/80">Photography via Unsplash: {photoCredits.map((c, i) => <span key={c.name}><a href={c.url} target="_blank" rel="noopener noreferrer" className="underline">{c.name}</a>{i < photoCredits.length - 1 ? ", " : ""}</span>)}.</p>
      </div>
    </footer>
  );
}
