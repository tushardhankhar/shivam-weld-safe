"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap leading-tight" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt={`${site.shortName} home`} width={798} height={314} className="h-11 w-auto sm:h-14" />
          <span className="hidden flex-col border-l border-line pl-3 sm:flex">
            <span className="font-heading text-base font-bold text-ink">{site.shortName}</span>
            <span className="eyebrow text-[0.62rem] text-ink/60">India · New Delhi</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
              className={`border-b-2 py-1 text-sm font-semibold transition-colors ${isActive(n.href) ? "border-accent text-ink" : "border-transparent text-ink/70 hover:text-ink"}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink href="/contact/" className="whitespace-nowrap !px-4 !py-2.5 text-xs sm:!px-6 sm:text-sm"><span className="sm:hidden">Get Quote</span><span className="hidden sm:inline">Request a Quote</span></ButtonLink>
          <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)} className="rounded-md border border-ink/20 p-2 lg:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-ivory lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block border-l-4 px-3 py-3 font-semibold ${isActive(n.href) ? "border-accent" : "border-transparent text-ink/75"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-3"><ButtonLink href="/contact/" className="w-full">Request a Quote</ButtonLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
