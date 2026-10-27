import Link from "next/link";
import { nav, site } from "@/lib/site";
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
        <div className="container-x pb-6">
          <a href="https://studio.tushardhankhar.com/" target="_blank" rel="noopener" className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 py-1.5 pl-1.5 pr-4 text-xs text-steel transition-colors hover:border-[#C9A55C]/60 hover:text-white">
            <svg viewBox="0 0 40 40" aria-hidden="true" className="h-6 w-6 shrink-0"><rect width="40" height="40" rx="12" fill="#123B33" /><path d="M9.5 9.5h21v5.2h-7.9V27h-5.2V14.7H9.5z" fill="#F4EEE0" /><rect x="17.6" y="29.3" width="4.8" height="4.8" rx=".6" transform="rotate(45 20 31.7)" fill="#C9A55C" /></svg>
            <span>Built and managed by <span className="font-heading font-extrabold tracking-tight text-white">Studio</span><em className="font-serif text-[0.85rem] text-[#E9DDC3]"> by Tushar</em></span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
