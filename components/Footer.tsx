import Link from "next/link";
import { nav, site, photoCredits } from "@/lib/site";
import { categories } from "@/lib/products";
import { ContactDetails } from "./ContactLinks";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 md:py-14">
        <div className="col-span-2 md:col-span-1">
          <img src="/logo-light.svg" alt="" width={798} height={314} loading="lazy" className="mb-4 h-14 w-auto" />
          <p className="font-heading text-lg font-bold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-steel">{site.tagline}. Proprietor: {site.owner}.</p>
          <Link href="/contact/" className="mt-5 inline-flex rounded-lg bg-accent px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-deep md:hidden">Request a Quote</Link>
        </div>
        <div className="order-last col-span-2 rounded-2xl bg-white/5 p-5 md:order-none md:col-span-1 md:rounded-none md:bg-transparent md:p-0">
          <p className="eyebrow mb-4 text-white/50">Visit & Contact</p>
          <ContactDetails light />
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-3 text-white/50 md:mb-4">Explore</p>
          <ul className="text-sm">{nav.map((n) => <li key={n.href}><Link href={n.href} className="block py-2 text-steel hover:text-white md:py-1">{n.label}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Product categories">
          <p className="eyebrow mb-3 text-white/50 md:mb-4">Products</p>
          <ul className="text-sm">{categories.map((c) => <li key={c.slug}><Link href={`/products/${c.slug}/`} className="block py-2 text-steel hover:text-white md:py-1">{c.name}</Link></li>)}</ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-steel sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. GST-registered since {site.gstRegisteredSince}.</p>
          <p>Wholesale safety and welding supplies · Ajmeri Gate, New Delhi</p>
        </div>
        <details className="container-x pb-6 text-[0.7rem] text-steel/80">
          <summary className="w-fit cursor-pointer py-1 underline-offset-2 hover:underline">Photo credits</summary>
          <p className="mt-2 leading-relaxed">Photography via Unsplash: {photoCredits.map((c, i) => <span key={c.name}><a href={c.url} target="_blank" rel="noopener noreferrer" className="underline">{c.name}</a>{i < photoCredits.length - 1 ? ", " : ""}</span>)}.</p>
        </details>
      </div>
    </footer>
  );
}
