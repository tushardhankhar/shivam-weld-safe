/**
 * Product catalogue. To add a product, append an entry to `products` and, if
 * needed, a category to `categories`. Names below come from the company's
 * IndiaMART listing. Descriptions are deliberately generic: no specifications,
 * standards or prices are stated because none have been verified.
 * Add `specs` and `image` per product once the business confirms them.
 */
export interface Category {
  slug: string;
  name: string;
  summary: string;
  icon: "goggles" | "holder" | "glove" | "shoe" | "regulator" | "harness" | "tape";
  /** Representative stock photo shown on product cards that have no photo of their own. */
  photo?: Photo;
}

/** A cropped stock photo. position = focus point (CSS %), zoom = magnification. */
export interface Photo {
  src: string;
  position?: string;
  zoom?: number;
}

export interface Product {
  slug: string;
  name: string;
  category: Category["slug"];
  description: string;
  /** Verified specifications only, e.g. [["Material", "Leather"]]. */
  specs?: [string, string][];
  /** Real photo of this exact product, e.g. "/images/products/x.jpg". Shown without a "representative" label. */
  image?: string;
  /** Representative stock photo overriding the category's. */
  photo?: Photo;
}

export const categories: Category[] = [
  { slug: "safety-goggles", name: "Safety Goggles", icon: "goggles", summary: "Eye protection for workshops, fabrication and chemical handling.", photo: { src: "/images/hero-grinding.jpg", position: "72% 30%", zoom: 2 } },
  { slug: "electrode-holders", name: "Electrode Holders", icon: "holder", summary: "Holders for arc welding in several designs.", photo: { src: "/images/products/electrode-holder.jpg", position: "60% 30%" } },
  { slug: "hand-gloves", name: "Hand Gloves", icon: "glove", summary: "Welding, rubber, nitrile-coated and cut-resistant gloves.", photo: { src: "/images/products/gloves.jpg" } },
  { slug: "safety-shoes", name: "Safety Shoes & Jackets", icon: "shoe", summary: "Foot protection and high-visibility wear.", photo: { src: "/images/products/safety-shoes.jpg", position: "40% 55%" } },
  { slug: "gas-regulators", name: "Gas Regulators", icon: "regulator", summary: "Regulators for industrial and LPG gas use." },
  { slug: "safety-belts", name: "Safety Belts & Harnesses", icon: "harness", summary: "Harnesses and full body safety belts for work at height." },
  { slug: "barricade-tape", name: "Barricade Tape", icon: "tape", summary: "Caution tape to mark and secure work areas.", photo: { src: "/images/products/barricade-tape.jpg", position: "50% 50%" } },
];

export const products: Product[] = [
  { slug: "sun-100-polycarbonate-safety-goggles", name: "Sun 100 Transparent Polycarbonate Safety Goggles", category: "safety-goggles", description: "Transparent polycarbonate safety goggles for general eye protection." },
  { slug: "chemical-splash-polycarbonate-safety-goggles", name: "Chemical Splash Polycarbonate Safety Goggles", category: "safety-goggles", description: "Polycarbonate goggles for work where chemical splash is a concern." },
  { slug: "safeline-safety-goggles", name: "Safeline Safety Goggles", category: "safety-goggles", description: "Safety goggles from the Safeline range for workshop use." },
  { slug: "fully-insulated-electrode-holder", name: "Fully Insulated Electrode Holder", category: "electrode-holders", description: "Fully insulated holder for arc welding electrodes." },
  { slug: "4-copper-strips-electrode-holder", name: "4 Copper Strips Electrode Holder", category: "electrode-holders", description: "Electrode holder built with four copper strips." },
  { slug: "little-electrode-holder", name: "Little Electrode Holder", category: "electrode-holders", description: "Compact electrode holder for light welding jobs." },
  { slug: "welding-hand-gloves", name: "Welding Hand Gloves", category: "hand-gloves", description: "Hand gloves for welding work." },
  { slug: "orange-yellow-gloves", name: "Orange Yellow Gloves", category: "hand-gloves", description: "Rubber hand gloves in orange and yellow." },
  { slug: "red-black-gloves", name: "Red and Black Gloves", category: "hand-gloves", description: "Rubber hand gloves in red and black." },
  { slug: "white-grey-nitrile-coated-gloves", name: "White and Grey Nitrile Coated Gloves", category: "hand-gloves", description: "Nitrile-coated gloves in white and grey; 32 GMS variant also listed." },
  { slug: "cut-resistant-gloves", name: "Cut Resistant Gloves", category: "hand-gloves", description: "Gloves for handling tasks with cut hazards." },
  { slug: "pvc-sole-leather-safety-shoes", name: "PVC Sole Leather Safety Shoes", category: "safety-shoes", description: "Leather safety shoes with PVC sole." },
  { slug: "reflective-safety-jacket", name: "Reflective Safety Jacket", category: "safety-shoes", description: "Reflective jacket for visibility on site.", photo: { src: "/images/site-safety.jpg", position: "30% 40%", zoom: 1.8 } },
  { slug: "industrial-lpg-regulator", name: "Industrial LPG Regulator", category: "gas-regulators", description: "Regulator for industrial LPG use." },
  { slug: "industrial-gas-regulators", name: "Industrial Gas Regulators", category: "gas-regulators", description: "Gas regulators for industrial applications." },
  { slug: "safety-harness", name: "Safety Harness", category: "safety-belts", description: "Safety harness for work at height." },
  { slug: "full-body-safety-belt", name: "Full Body Safety Belt", category: "safety-belts", description: "Full body safety belt for work at height." },
  { slug: "safety-barricade-tape", name: "Safety Barricade Tape", category: "barricade-tape", description: "Barricade and caution tape for marking work zones." },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const productsIn = (slug: string) => products.filter((p) => p.category === slug);
