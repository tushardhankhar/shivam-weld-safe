/**
 * Product catalogue. To add a product, append an entry to `products` and, if
 * needed, a category to `categories`. Products with an `image` come from the
 * business's own product photos; their names and specs are taken from what is
 * printed on the packaging, flyer or rate list. The rest come from the
 * company's IndiaMART listing and stay generic. No prices are stated.
 */
export interface Category {
  slug: string;
  name: string;
  summary: string;
  icon: "goggles" | "holder" | "glove" | "shoe" | "regulator" | "harness" | "tape" | "arrestor" | "torch" | "flowmeter" | "cable";
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
  brand?: string;
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
  { slug: "gas-regulators", name: "Gas Regulators", icon: "regulator", summary: "Single and two stage pressure regulators for oxygen, CO₂ and LPG." },
  { slug: "flashback-arrestors", name: "Flashback Arrestors", icon: "arrestor", summary: "Flashback arrestors for regulators and cutting torches." },
  { slug: "gas-cutting", name: "Gas Cutting Torches & Nozzles", icon: "torch", summary: "Cutting torches, nozzles and a portable pug cutting machine." },
  { slug: "flow-meters", name: "Flow Meters & Heaters", icon: "flowmeter", summary: "Argon and CO₂ flow meters, regulators with flow meters, and gas pre-heaters." },
  { slug: "hand-gloves", name: "Hand Gloves", icon: "glove", summary: "Welding, rubber, nitrile-coated and cut-resistant gloves.", photo: { src: "/images/products/gloves.jpg" } },
  { slug: "safety-goggles", name: "Safety Goggles", icon: "goggles", summary: "Safety eyewear and goggles for workshops, fabrication and site work.", photo: { src: "/images/products/eye-protection-banner.jpg", position: "50% 40%" } },
  { slug: "cables-wires", name: "Cables & Wires", icon: "cable", summary: "Welding cables with lugs and flexible PVC multi-core cables." },
  { slug: "electrode-holders", name: "Electrode Holders", icon: "holder", summary: "Holders for arc welding in several designs.", photo: { src: "/images/products/electrode-holder.jpg", position: "60% 30%" } },
  { slug: "barricade-tape", name: "Barricade Tape", icon: "tape", summary: "Caution tape, made and marketed by Shivam Weld Safe India." },
  { slug: "safety-shoes", name: "Safety Shoes & Jackets", icon: "shoe", summary: "Foot protection and high-visibility wear.", photo: { src: "/images/products/safety-shoes.jpg", position: "40% 55%" } },
  { slug: "safety-belts", name: "Safety Belts & Harnesses", icon: "harness", summary: "Harnesses and full body safety belts for work at height." },
];

export const products: Product[] = [
  // Gas regulators
  { slug: "euroweld-lx-pro-single-stage-pressure-regulator", brand: "EUROWELD", name: "LX Pro Single Stage Pressure Regulator", category: "gas-regulators", description: "Single stage pressure regulator for industrial use.", image: "/images/products/lx-pro-pressure-regulator.jpg" },
  { slug: "euroweld-power-single-stage-pressure-regulator", brand: "EUROWELD", name: "Power Single Stage Pressure Regulator", category: "gas-regulators", description: "Single stage pressure regulator for industrial use.", image: "/images/products/power-pressure-regulator.jpg" },
  { slug: "euroweld-k2-single-stage-pressure-regulator", brand: "EUROWELD", name: "K-2 Single Stage Pressure Regulator", category: "gas-regulators", description: "Single stage pressure regulator.", image: "/images/products/k2-pressure-regulator.jpg" },
  { slug: "euro-fine-cut-single-stage-pressure-regulator", brand: "EUROWELD", name: "Euro Fine-Cut Single Stage Pressure Regulator", category: "gas-regulators", description: "Single stage pressure regulator with double gauge.", specs: [["Gauge", "Double"]], image: "/images/products/fine-cut-pressure-regulator.jpg" },
  { slug: "euro-ultra-two-stage-pressure-regulator", brand: "EUROWELD", name: "Euro Ultra Two Stage Pressure Regulator", category: "gas-regulators", description: "Two stage pressure regulator for industrial use.", image: "/images/products/euro-ultra-two-stage-regulator.jpg" },
  { slug: "euro-single-stage-oxygen-regulator", brand: "EUROWELD", name: "Euro Single Stage Oxygen Regulator", category: "gas-regulators", description: "Single stage regulator for oxygen cylinders, with twin gauges.", image: "/images/products/oxygen-regulator.jpg" },
  { slug: "euro-single-stage-co2-regulator", brand: "EUROWELD", name: "Euro Single Stage CO₂ Regulator", category: "gas-regulators", description: "Single stage regulator for CO₂, with twin gauges.", image: "/images/products/co2-regulator.jpg" },
  { slug: "euro-flame-hi-pressure-lpg-regulator", brand: "EUROWELD", name: "Euro Flame Hi-Pressure LPG Industrial Regulator", category: "gas-regulators", description: "High pressure LPG regulator in forged brass, for industrial use.", specs: [["Body", "Forged brass"]], image: "/images/products/euro-flame-lpg-regulator.jpg" },
  { slug: "cobra-lpg-regulator", brand: "EUROWELD", name: "Cobra LPG Regulator", category: "gas-regulators", description: "LPG regulator for industrial use.", image: "/images/products/cobra-lpg-regulator.jpg" },
  // Flashback arrestors
  { slug: "euro-seal-flashback-arrestor", brand: "EUROWELD", name: "Euro-Seal Flashback Arrestor", category: "flashback-arrestors", description: "Flashback arrestors for the regulator and the cutter, supplied in pairs.", specs: [["Fits", "Regulator, cutter"], ["Standard", "ISO 5175-1:2017"]], image: "/images/products/euro-seal-flashback-arrestor.jpg" },
  { slug: "gassers-flashback-arrestor-oxygen", brand: "EUROWELD", name: "Gassers Flashback Arrester for Oxygen Regulator", category: "flashback-arrestors", description: "Flashback arrester for oxygen regulators, sold singly or in packs of 10.", specs: [["Fits", "Oxygen regulator"], ["Standard", "IS 11006:2011"]], image: "/images/products/gassers-flashback-arrestor.jpg" },
  // Gas cutting
  { slug: "fine-cut-gas-cutting-torch", brand: "EUROWELD", name: "Fine-Cut Gas Cutting Torch", category: "gas-cutting", description: "Gas cutting torch from the Fine-Cut range.", image: "/images/products/fine-cut-gas-cutting-torch.jpg" },
  { slug: "power-gas-cutting-torch", brand: "EUROWELD", name: "Power Gas Cutting Torch", category: "gas-cutting", description: "Gas cutting torch from the Power range.", image: "/images/products/power-gas-cutting-torch.jpg" },
  { slug: "fine-cut-gas-cutting-nozzle", brand: "EUROWELD", name: "Fine-Cut Gas Cutting Nozzle", category: "gas-cutting", description: "Gas cutting nozzles, boxed in quantity.", image: "/images/products/fine-cut-gas-cutting-nozzle.jpg" },
  { slug: "power-gas-cutting-nozzle", brand: "EUROWELD", name: "Power Gas Cutting Nozzle", category: "gas-cutting", description: "Gas cutting nozzle from the Power range.", image: "/images/products/power-gas-cutting-nozzle.jpg" },
  { slug: "fine-cut-pug-machine", brand: "EUROWELD", name: "Fine-Cut Pug Machine", category: "gas-cutting", description: "Portable gas cutting machine for straight and circular cuts.", image: "/images/products/fine-cut-pug-machine.jpg" },
  // Flow meters and heaters
  { slug: "fine-cut-argon-co2-flow-meter", brand: "EUROWELD", name: "Fine-Cut Flow Meter for Argon / CO₂", category: "flow-meters", description: "Flow meter for argon and CO₂ with a full brass body.", specs: [["Gas", "Argon, CO₂"], ["Body", "Brass"]], image: "/images/products/argon-co2-flow-meter.jpg" },
  { slug: "robo-co2-regulator-heater-flow-meter", brand: "EUROWELD", name: "ROBO CO₂ Regulator with Heater and Flow Meter", category: "flow-meters", description: "CO₂ regulator with built-in heater and flow meter. An argon regulator with flow meter is also available.", specs: [["Voltage", "36/42 V, 110 V, 220 V"]], image: "/images/products/robo-co2-regulator-heater-flow-meter.jpg" },
  { slug: "co2-gas-pre-heater", brand: "EUROWELD", name: "Fully Insulated CO₂ Gas Pre-Heater", category: "flow-meters", description: "Fully insulated CO₂ gas pre-heater with thermostat and on/off indicator.", image: "/images/products/co2-gas-pre-heater.jpg" },
  // Gloves
  { slug: "engiweld-leather-welding-gloves", brand: "ENGIWELD", name: "ENGIWELD Leather Welding Gloves", category: "hand-gloves", description: "Leather welding gloves with long cuffs.", specs: [["Standards", "EN 388, EN 407"], ["Size", "14"]], image: "/images/products/engiweld-safety-gloves.jpg" },
  { slug: "orange-yellow-gloves", name: "Orange Yellow Gloves", category: "hand-gloves", description: "Rubber hand gloves in orange and yellow." },
  { slug: "red-black-gloves", name: "Red and Black Gloves", category: "hand-gloves", description: "Rubber hand gloves in red and black." },
  { slug: "white-grey-nitrile-coated-gloves", name: "White and Grey Nitrile Coated Gloves", category: "hand-gloves", description: "Nitrile-coated gloves in white and grey; 32 GMS variant also listed." },
  { slug: "cut-resistant-gloves", name: "Cut Resistant Gloves", category: "hand-gloves", description: "Gloves for handling tasks with cut hazards." },
  // Eyewear
  { slug: "eagle-safety-eyewear-clear", brand: "Pilot", name: "Eagle Safety Eyewear, Clear", category: "safety-goggles", description: "Clear-lens safety eyewear.", image: "/images/products/eagle-safety-eyewear-clear.jpg" },
  { slug: "eagle-safety-eyewear-smoke", brand: "Pilot", name: "Eagle Safety Eyewear, Dark", category: "safety-goggles", description: "Dark-lens safety eyewear for bright conditions.", image: "/images/products/eagle-safety-eyewear-smoke.jpg" },
  { slug: "sun-gold-safety-spectacles", brand: "Punk", name: "Sun Gold Safety Spectacles", category: "safety-goggles", description: "Safety spectacles in clear and dark lens versions.", image: "/images/products/sun-gold-safety-spectacles.jpg" },
  { slug: "sun-100-polycarbonate-safety-goggles", name: "Sun 100 Transparent Polycarbonate Safety Goggles", category: "safety-goggles", description: "Transparent polycarbonate safety goggles for general eye protection." },
  { slug: "chemical-splash-polycarbonate-safety-goggles", name: "Chemical Splash Polycarbonate Safety Goggles", category: "safety-goggles", description: "Polycarbonate goggles for work where chemical splash is a concern." },
  { slug: "safeline-safety-goggles", name: "Safeline Safety Goggles", category: "safety-goggles", description: "Safety goggles from the Safeline range for workshop use." },
  // Cables
  { slug: "welding-cable-with-copper-lugs", name: "Welding Cable with Copper Lugs", category: "cables-wires", description: "Welding cable lengths fitted with copper lugs, ready to connect.", image: "/images/products/welding-cable-lugs.jpg" },
  { slug: "engisafe-pvc-flexible-cables", brand: "ENGISAFE", name: "ENGISAFE PVC Flexible Multi-Core Cables", category: "cables-wires", description: "Round PVC flexible cables in multiple cores and sizes.", specs: [["Cores", "2, 3, 4, 6, 10"], ["Size", "0.75 to 10 sq mm"]], image: "/images/products/engisafe-pvc-wires.jpg" },
  // Electrode holders
  { slug: "fully-insulated-electrode-holder", name: "Fully Insulated Electrode Holder", category: "electrode-holders", description: "Fully insulated holder for arc welding electrodes." },
  { slug: "4-copper-strips-electrode-holder", name: "4 Copper Strips Electrode Holder", category: "electrode-holders", description: "Electrode holder built with four copper strips." },
  { slug: "little-electrode-holder", name: "Little Electrode Holder", category: "electrode-holders", description: "Compact electrode holder for light welding jobs." },
  // Tape
  { slug: "caution-tape", brand: "Shivam Weld Safe", name: "Caution Tape", category: "barricade-tape", description: "Caution tape manufactured and marketed by Shivam Weld Safe India, supplied by weight.", specs: [["Width", "3 in, 4 in"], ["Length", "90 to 120 m"], ["Roll weight", "1 kg; also 600 g, 700 g, 1.5 kg, 2 kg"], ["Packing", "30 kg standard"]], image: "/images/products/caution-tape.jpg" },
  // Shoes and jackets
  { slug: "pvc-sole-leather-safety-shoes", name: "PVC Sole Leather Safety Shoes", category: "safety-shoes", description: "Leather safety shoes with PVC sole." },
  { slug: "reflective-safety-jacket", name: "Reflective Safety Jacket", category: "safety-shoes", description: "Reflective jacket for visibility on site.", photo: { src: "/images/site-safety.jpg", position: "30% 40%", zoom: 1.8 } },
  // Belts
  { slug: "safety-harness", name: "Safety Harness", category: "safety-belts", description: "Safety harness for work at height." },
  { slug: "full-body-safety-belt", name: "Full Body Safety Belt", category: "safety-belts", description: "Full body safety belt for work at height." },
];


export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const productsIn = (slug: string) => products.filter((p) => p.category === slug);
