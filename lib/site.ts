/**
 * Single source of truth for business details.
 * Anything left empty ("") is hidden from the UI until it is filled in.
 *
 * VERIFIED: name, owner, GST registration date, registered address, product
 * categories (IndiaMART listing + GST record).
 * Phone and email: from the business's caution-tape flyer (October 2026).
 * TO BE SUPPLIED BY THE BUSINESS: whatsappNumber, mapsUrl, siteUrl.
 */
export const site = {
  name: "Shivam Weld Safe India",
  shortName: "Shivam Weld Safe",
  owner: "Shivam Mittal",
  tagline: "Industrial safety equipment and welding supplies, New Delhi",
  gstRegisteredSince: "November 2021",

  // Public site URL. Set NEXT_PUBLIC_SITE_URL at build time.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),

  // WhatsApp number in international format, digits only, e.g. "919876543210".
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  // Phone for click-to-call, international format with +, e.g. "+919876543210".
  phone: process.env.NEXT_PUBLIC_PHONE || "+917678685147",
  email: process.env.NEXT_PUBLIC_EMAIL || "shivamweldsafeindia@gmail.com",
  // Paste the Google Maps share link for the shop here.
  mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL ?? "",

  address: {
    lines: [
      "Shop No. 124, Property No. 3664-3665, 3903",
      "Shrinath Market, Gali Shahtara, G.B. Road",
      "Ajmeri Gate",
    ],
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110006",
    country: "IN",
  },
} as const;

export const fullAddress = [...site.address.lines, `${site.address.city}, ${site.address.region} ${site.address.postalCode}`].join(", ");

// Geocoding works best without the shop/property numbers.
const mapsQuery = encodeURIComponent(`Shivam Weld Safe, Shrinath Market, Gali Shahtara, G.B. Road, Ajmeri Gate, New Delhi ${site.address.postalCode}`);
/** Keyless Google Maps embed and a "get directions" deep link (opens the Maps app on mobile). */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

// Google reviews: no rating or review text is shown (none can be verified). We only link out.
// Set NEXT_PUBLIC_GOOGLE_PLACE_ID to enable the direct "Write a review" link.
export const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "";
export const reviewsUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || `https://www.google.com/maps/search/?api=1&query=${mapsQuery}${placeId ? `&query_place_id=${placeId}` : ""}`;
export const writeReviewUrl = placeId ? `https://search.google.com/local/writereview?placeid=${placeId}` : "";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products/", label: "Products" },
  { href: "/about/", label: "About Us" },
  { href: "/industries/", label: "Industries" },
  { href: "/why-choose-us/", label: "Why Choose Us" },
  { href: "/contact/", label: "Contact" },
] as const;

/** Stock photography used on the site (Unsplash License). */
export const photoCredits = [
  { name: "burak kose", url: "https://unsplash.com/photos/a-welder-uses-sparks-to-join-metal-FQynd63cHeQ" },
  { name: "John Kakuk", url: "https://unsplash.com/photos/men-in-safety-vests-standing-in-front-of-a-construction-vehicle-hfj5CG9dvuU" },
  { name: "Cemrecan Yurtman", url: "https://unsplash.com/photos/a-man-welding-a-piece-of-metal-in-a-factory-6Ips_2SI-qE" },
  { name: "Miguel Aguilera", url: "https://unsplash.com/photos/person-welding-metal-using-electrode-holder-SpVXUF0bL00" },
  { name: "Tuccera LLC", url: "https://unsplash.com/photos/black-work-boots-with-bandana-and-sticky-note-jvxy5eSmwwg" },
] as const;
