import { ButtonLink } from "./ui";
import { site } from "@/lib/site";
import { whatsappConfigured, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import { LoopVideo } from "./LoopVideo";

export function CtaBand({ title = "Need a quote for your next order?", text = "Tell us the products and quantities you need. We respond to enquiries on WhatsApp." }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <LoopVideo src="/videos/gas-cutting.mp4" poster="/videos/gas-cutting.jpg" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden="true" />
      <div className="container-x flex flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1]">{title}</h2>
          <p className="mt-4 text-lg text-steel">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact/" className="!px-8 !py-4 text-base">Request a Quote</ButtonLink>
          {whatsappConfigured && (
            <a href={whatsappLink(`Hello ${site.shortName}, I would like to make an enquiry.`)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-8 py-4 font-heading text-base font-semibold hover:bg-white/10"><WhatsAppIcon /> Chat on WhatsApp</a>
          )}
        </div>
      </div>
    </section>
  );
}
