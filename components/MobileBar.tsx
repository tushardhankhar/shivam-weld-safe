import { site } from "@/lib/site";
import { whatsappConfigured, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/** Sticky call / WhatsApp bar on phones. Renders only for configured channels. */
export function MobileBar() {
  if (!site.phone && !whatsappConfigured) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white md:hidden">
      {site.phone && <a href={`tel:${site.phone}`} className="flex-1 py-4 text-center font-heading text-sm font-semibold">Call now</a>}
      {whatsappConfigured && (
        <a href={whatsappLink(`Hello ${site.shortName}, I would like to make an enquiry.`)} target="_blank" rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-accent py-4 font-heading text-sm font-semibold"><WhatsAppIcon /> WhatsApp</a>
      )}
    </div>
  );
}
