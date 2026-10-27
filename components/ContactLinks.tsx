import { site, fullAddress, directionsUrl } from "@/lib/site";

/** Renders only contact details that have actually been configured. */
export function ContactDetails({ light = false }: { light?: boolean }) {
  const link = light ? "text-white hover:underline" : "text-ink hover:underline";
  return (
    <ul className="space-y-3 text-sm">
      <li><span className="font-heading font-semibold">Address</span><br /><address className="not-italic">{fullAddress}</address>
        <a href={site.mapsUrl || directionsUrl} target="_blank" rel="noopener noreferrer" className={`font-semibold underline ${link}`}>Get directions</a></li>
      {site.phone && <li><span className="font-heading font-semibold">Phone</span><br /><a href={`tel:${site.phone}`} className={link}>{site.phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2")}</a></li>}
      {site.email && <li><span className="font-heading font-semibold">Email</span><br /><a href={`mailto:${site.email}`} className={link}>{site.email}</a></li>}
    </ul>
  );
}
