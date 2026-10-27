import { directionsUrl, fullAddress, mapsEmbedUrl, site } from "@/lib/site";

export function LocationMap() {
  return (
    <section aria-labelledby="visit-heading" className="section-y bg-mist">
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="visit-heading" className="text-2xl font-semibold sm:text-3xl">Visit our shop</h2>
            <address className="mt-2 max-w-xl text-sm not-italic text-ink/75">{fullAddress}</address>
          </div>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-deep">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
            Get Directions
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
          <iframe title={`Map showing ${site.name}, Ajmeri Gate, New Delhi`} src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen className="block h-[22rem] w-full sm:h-[28rem]" />
        </div>
      </div>
    </section>
  );
}
