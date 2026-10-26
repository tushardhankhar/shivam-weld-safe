import { site } from "./site";

export const whatsappConfigured = site.whatsappNumber.length > 0;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface EnquiryData {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
}

export function buildEnquiryMessage(d: EnquiryData): string {
  const lines: (string | false)[] = [
    `New enquiry via ${site.shortName} website`,
    "",
    `Name: ${d.name}`,
    d.company && `Company: ${d.company}`,
    `Phone: ${d.phone}`,
    d.email && `Email: ${d.email}`,
    `Requirement: ${d.requirement}`,
    d.message && `Message: ${d.message}`,
  ];
  return lines.filter((l) => l !== false && l !== "" && l !== undefined).join("\n");
}
