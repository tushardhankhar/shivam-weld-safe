import type { Metadata, Viewport } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const viewport: Viewport = { themeColor: "#2f3342", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Industrial Safety & Welding Supplies, New Delhi`, template: `%s | ${site.shortName}` },
  description: "Industrial safety equipment and welding accessories in Delhi: gloves, goggles, electrode holders, gas regulators, safety shoes and harnesses. Request a quote on WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${raleway.variable}`}>
      <body className="flex min-h-screen flex-col pb-16 md:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:text-navy focus:px-4 focus:py-2 focus:font-semibold">Skip to content</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileBar />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
