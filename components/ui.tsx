import Link from "next/link";
import type { ReactNode } from "react";

const base = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading text-sm font-semibold transition-colors";
const variants = {
  primary: "bg-accent text-navy hover:bg-[#dcc700]",
  dark: "bg-navy text-white hover:bg-navy-deep",
  outline: "border border-navy/30 text-navy hover:border-navy hover:bg-white",
  outlineLight: "border border-white/40 text-white hover:bg-white/10",
};

export function ButtonLink({ href, variant = "primary", children, className = "" }: { href: string; variant?: keyof typeof variants; children: ReactNode; className?: string }) {
  return <Link href={href} className={`${base} ${variants[variant]} ${className}`}>{children}</Link>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow mb-4 flex items-center gap-3 ${light ? "text-white/80" : "text-navy/70"}`}>
      <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />{children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1] ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg ${light ? "text-steel" : "text-navy/75"}`}>{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-grid-light relative border-b border-line bg-mist/60">
      <div className="container-x py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-6xl md:leading-[1.05]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-navy/75">{intro}</p>
      </div>
    </section>
  );
}
