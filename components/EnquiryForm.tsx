"use client";
import { useId, useState } from "react";
import { buildEnquiryMessage, whatsappConfigured, whatsappLink, type EnquiryData } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

type Errors = Partial<Record<keyof EnquiryData, string>>;

function validate(d: EnquiryData): Errors {
  const e: Errors = {};
  if (d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[+()\d\s-]{8,16}$/.test(d.phone.trim())) e.phone = "Enter a valid phone number (8–15 digits).";
  if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = "Enter a valid email address or leave it blank.";
  if (d.requirement.trim().length < 3) e.requirement = "Tell us which product you need.";
  return e;
}

export function EnquiryForm({ defaultRequirement = "", idPrefix = "enq" }: { defaultRequirement?: string; idPrefix?: string }) {
  const uid = useId();
  const [data, setData] = useState<EnquiryData>({ name: "", company: "", phone: "", email: "", requirement: defaultRequirement, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);

  const set = (k: keyof EnquiryData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const link = whatsappLink(buildEnquiryMessage(data));
    window.open(link, "_blank", "noopener,noreferrer");
    setSentLink(link);
  }

  const field = "mt-1.5 w-full rounded-md border border-navy/25 bg-white px-3.5 py-3 text-base focus:border-navy";
  const row = (k: keyof EnquiryData, label: string, opts: { required?: boolean; type?: string; autoComplete?: string; area?: boolean } = {}) => {
    const id = `${uid}-${k}`;
    const common = { id, value: data[k], onChange: set(k), className: field, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${id}-err` : undefined, autoComplete: opts.autoComplete };
    return (
      <div>
        <label htmlFor={id} className="font-heading text-sm font-medium">{label}{opts.required ? <span aria-hidden="true"> *</span> : <span className="font-body text-navy/55"> (optional)</span>}</label>
        {opts.area ? <textarea rows={4} {...common} /> : <input type={opts.type ?? "text"} {...common} />}
        {errors[k] && <p id={`${id}-err`} role="alert" className="mt-1 text-sm font-semibold text-red-700">{errors[k]}</p>}
      </div>
    );
  };

  if (sentLink) {
    return (
      <div role="status" className="rounded-lg border border-navy/15 bg-white p-6">
        <p className="font-heading text-lg font-semibold">WhatsApp opened with your enquiry</p>
        <p className="mt-2 text-navy/75">Press <strong>Send</strong> in WhatsApp to deliver it. Your enquiry is only received once you send the message.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={sentLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-heading text-sm font-semibold"><WhatsAppIcon /> Open WhatsApp again</a>
          <button type="button" onClick={() => setSentLink(null)} className="rounded-md border border-navy/30 px-5 py-2.5 font-heading text-sm font-semibold">Edit enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" data-form={idPrefix}>
      {!whatsappConfigured && (
        <p role="alert" className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-800">
          The WhatsApp enquiry number has not been configured yet (set <code>NEXT_PUBLIC_WHATSAPP_NUMBER</code>). The form cannot be submitted until it is.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {row("name", "Your name", { required: true, autoComplete: "name" })}
        {row("company", "Company", { autoComplete: "organization" })}
        {row("phone", "Phone", { required: true, type: "tel", autoComplete: "tel" })}
        {row("email", "Email", { type: "email", autoComplete: "email" })}
      </div>
      {row("requirement", "Product requirement", { required: true })}
      {row("message", "Message", { area: true })}
      <button type="submit" disabled={!whatsappConfigured} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-heading text-sm font-semibold transition-colors hover:bg-[#dcc700] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
        <WhatsAppIcon /> Send enquiry on WhatsApp
      </button>
      <p className="text-xs text-navy/60">Submitting opens WhatsApp with your details pre-filled. Nothing is sent until you press Send there.</p>
    </form>
  );
}
