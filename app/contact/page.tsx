import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { whatsappConfigured, whatsappLink } from "@/lib/whatsapp";
import { PageHero } from "@/components/ui";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactDetails } from "@/components/ContactLinks";
import { WhatsAppIcon } from "@/components/Icons";
import { GoogleReviews } from "@/components/GoogleReviews";
import { LocationMap } from "@/components/LocationMap";

export const metadata = pageMeta({
  title: "Contact & Request a Quote",
  description: "Request a quote from Shivam Weld Safe India, Ajmeri Gate, New Delhi. Send your product requirement directly on WhatsApp.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request a quote" intro="Tell us what you need. Your enquiry opens in WhatsApp, pre-filled, ready to send." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-2xl font-semibold">Enquiry form</h2>
            <EnquiryForm idPrefix="contact" />
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Find us</h2>
              <ContactDetails />
            </div>
            {whatsappConfigured && (
              <a href={whatsappLink(`Hello ${site.shortName}, I would like to make an enquiry.`)} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-navy-deep"><WhatsAppIcon /> Chat on WhatsApp</a>
            )}
          </aside>
        </div>
      </section>
      <LocationMap />
      <GoogleReviews />
    </>
  );
}
