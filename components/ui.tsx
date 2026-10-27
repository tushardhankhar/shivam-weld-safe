import Link from "next/link";
import type { ReactNode } from "react";

const base = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading text-sm font-semibold transition-colors";
const variants = {
  primary: "bg-accent text-white shadow-sm hover:bg-accent-deep",
  dark: "bg-ink text-white hover:bg-ink-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-white",
  outlineLight: "border border-white/40 text-white hover:bg-white/10",
};

export function ButtonLink({ href, variant = "primary", children, className = "" }: { href: string; variant?: keyof typeof variants; children: ReactNode; className?: string }) {
  return <Link href={href} className={`${base} ${variants[variant]} ${className}`}>{children}</Link>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow mb-4 flex items-center gap-3 ${light ? "text-white/80" : "text-ink/70"}`}>
      <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />{children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg ${light ? "text-steel" : "text-ink/75"}`}>{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-grid-light relative border-b border-line bg-mist/60">
      <div className="container-x py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink md:text-6xl md:leading-[1.05]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/75">{intro}</p>
      </div>
    </section>
  );
}
