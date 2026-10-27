import type { Category } from "@/lib/products";

/** Simple line illustrations used until real product photography is added. */
export function CategoryIcon({ name, className = "h-12 w-12" }: { name: Category["icon"]; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<Category["icon"], React.ReactNode> = {
    goggles: <><path {...p} d="M4 24c0-4 3-7 7-7h26c4 0 7 3 7 7v3c0 4-3 7-7 7h-8c-3 0-4-2-5-4-1 2-2 4-5 4h-8c-4 0-7-3-7-7z" /><path {...p} d="M2 22h2M44 22h2" /></>,
    holder: <><path {...p} d="M8 36l20-20 6 6-20 20z" /><path {...p} d="M30 14l4-4 6 6-4 4M40 8l2-2" /><path {...p} d="M6 42l4-4" /></>,
    glove: <><path {...p} d="M14 42V24l-3-8c-1-2 1-4 3-3l3 6V10c0-2 3-2 3 0v10V8c0-2 3-2 3 0v12V10c0-2 3-2 3 0v14l3-5c1-2 4-1 3 1l-4 12v10z" /></>,
    shoe: <><path {...p} d="M6 34V14h10v6c0 4 4 6 8 7l14 4c3 1 4 2 4 5v2H6z" /><path {...p} d="M6 38h36" /></>,
    regulator: <><circle {...p} cx="24" cy="22" r="10" /><path {...p} d="M24 22l5-5M24 12v-6M20 6h8M18 34l-2 8M30 34l2 8M12 42h24" /></>,
    harness: <><path {...p} d="M16 6l8 8 8-8M24 14v10M24 24l-10 8v10M24 24l10 8v10M14 32h20" /></>,
    tape: <><path {...p} d="M4 14l40 8M4 26l40 8M4 38l40 8" /><path {...p} d="M12 12l6 14M28 16l6 14" /></>,
    arrestor: <><path {...p} d="M18 6h12v6H18zM16 12h16v24H16zM18 36h12v6H18z" /><path {...p} d="M16 20h16M16 28h16" /></>,
    torch: <><path {...p} d="M4 34l22-10M8 40l22-10" /><path {...p} d="M26 24l10-6 4 8-10 4z" /><path {...p} d="M40 22c3-2 4-6 2-9M44 26c3-3 3-8 0-12" /><path {...p} d="M12 33l2 5M18 30l2 5" /></>,
    flowmeter: <><path {...p} d="M20 6h8v30h-8z" /><circle {...p} cx="24" cy="16" r="2" /><path {...p} d="M28 12h3M28 20h3M28 28h3M16 36h16v6H16zM24 42v4" /></>,
    cable: <><path {...p} d="M6 12c10 0 10 12 20 12s10 12 18 12" /><path {...p} d="M6 20c8 0 8 12 18 12s10 8 18 8" /><path {...p} d="M2 9h6v6H2zM2 17h6v6H2z" /></>,
  };
  return <svg viewBox="3 3 42 42" aria-hidden="true" className={className}>{paths[name]}</svg>;
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2a9.93 9.93 0 0 0-8.5 15.1L2 22l5.05-1.5A9.96 9.96 0 1 0 12.04 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .88.9-2.92-.2-.3a8.2 8.2 0 1 1 6.8 3.67zm4.5-6.1c-.25-.12-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.12-.17.25-.64.8-.78.96-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.1-.5.12-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}
