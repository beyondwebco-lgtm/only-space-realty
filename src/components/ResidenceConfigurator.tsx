"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PhoneCall, MapPin, Building2, Home, Landmark, Sparkles, AlertCircle } from "lucide-react";
import BookingModal from "./BookingModal";

// 1. Types
export type SectorType = "RESIDENTIAL" | "COMMERCIAL" | "PLOT";
export type CorridorType = "SHILAJ" | "SBR" | "BODAKDEV";
export type IntentType = "END_USE" | "CORPORATE" | "INVESTMENT";

export interface Recommendation {
  category: string;
  locationBadge: string;
  schemes: string[];
  priceRange: string;
  expectedYield: string;
  isClosestMatch?: boolean;
}

// 2. Centralized Structured Recommendation Database (All 27 exact combinations)
const RECOMMENDATION_DATABASE: Record<string, Recommendation> = {
  // Residential
  "RESIDENTIAL_SHILAJ_END_USE": {
    category: "Luxury Residential Apartments & Sky Duplexes",
    locationBadge: "Shilaj Area",
    schemes: ["Kaveri Soham Vivanta (Shilaj)", "Suryansh Solitaire (Shilaj Area)", "Sharnya Altura (Shilaj Corridor)"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "5.5% – 7.2% Expected Rental Yield",
  },
  "RESIDENTIAL_SHILAJ_CORPORATE": {
    category: "Executive Residential & Corporate Living Suites",
    locationBadge: "Shilaj Growth Belt",
    schemes: ["Kaveri Soham Vivanta (Executive Units)", "Sharnya Altura (Duplex Suites)", "Suryansh Solitaire (Luxury Wing)"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "6.2% – 7.8% Rental Yield",
  },
  "RESIDENTIAL_SHILAJ_INVESTMENT": {
    category: "High Appreciation Luxury Housing Assets",
    locationBadge: "Shilaj Prime Corridor",
    schemes: ["Kaveri Soham Vivanta", "Suryansh Solitaire", "Ashray Aurum (Residential Sector)"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.0% – 8.5% Capital Growth + Yield",
  },
  "RESIDENTIAL_SBR_END_USE": {
    category: "Ultra-Luxury Sindhu Bhavan Sky Residences",
    locationBadge: "Sindhu Bhavan Road",
    schemes: ["Sharnya Altura (Sindhu Bhavan Road)", "Kaveri Soham Vivanta (SBR Extension)", "Shilp One (Residential Wing)"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "6.0% – 7.5% Expected Yield",
  },
  "RESIDENTIAL_SBR_CORPORATE": {
    category: "SBR Executive Duplexes & Guest Mansions",
    locationBadge: "SBR Corporate Hub",
    schemes: ["Sharnya Altura (Penthouse Wing)", "Kaveri Soham Vivanta (Corporate Suites)"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "6.8% – 8.2% Rental Yield",
  },
  "RESIDENTIAL_SBR_INVESTMENT": {
    category: "High-ROI SBR Premium Residential Assets",
    locationBadge: "Sindhu Bhavan Growth Belt",
    schemes: ["Sharnya Altura (Luxury Tower)", "Suryansh Solitaire (High Floor)", "Kaveri Soham Vivanta"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.5% – 9.0% Projected ROI",
  },
  "RESIDENTIAL_BODAKDEV_END_USE": {
    category: "Bodakdev & SG Highway Luxury Apartments",
    locationBadge: "Bodakdev Core",
    schemes: ["Sharnya Altura (Bodakdev Sector)", "Suryansh Solitaire", "Shilp One (Luxury Sector)"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "5.8% – 7.2% Expected Yield",
  },
  "RESIDENTIAL_BODAKDEV_CORPORATE": {
    category: "Bodakdev Executive Apartments & Guest Suites",
    locationBadge: "SG Highway Corridor",
    schemes: ["Shilp One (Residential Sector)", "Kaveri Soham Vivanta", "Sharnya Altura"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "6.5% – 8.0% Corporate Rental",
  },
  "RESIDENTIAL_BODAKDEV_INVESTMENT": {
    category: "Bodakdev Prime Housing Investments",
    locationBadge: "Bodakdev / SG Highway",
    schemes: ["Suryansh Solitaire (Bodakdev Belt)", "Sharnya Altura", "Kaveri Soham Vivanta"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.2% – 8.8% Annual ROI",
  },

  // Commercial
  "COMMERCIAL_SHILAJ_END_USE": {
    category: "Shilaj Commercial Showrooms & Offices",
    locationBadge: "Shilaj Area",
    schemes: ["Ashray Aurum (Near Shilaj)", "Shilp One (Shilaj Extension)", "Kaveri Soham Commercial Wing"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.0% – 8.8% Expected Rental Yield",
  },
  "COMMERCIAL_SHILAJ_CORPORATE": {
    category: "Shilaj Corporate Towers & Tech Offices",
    locationBadge: "Shilaj Hub",
    schemes: ["Ashray Aurum (Commercial Tower)", "Shilp One (Shilaj Corridor)", "Suryansh Solitaire Commercial"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.8% – 9.2% Pre-Leased Yield",
  },
  "COMMERCIAL_SHILAJ_INVESTMENT": {
    category: "Shilaj Commercial High-Yield Showrooms",
    locationBadge: "Shilaj Growth Belt",
    schemes: ["Ashray Aurum (Retail Showrooms)", "Shilp One Commercial", "Kaveri Soham Retail"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "8.5% – 10.2% Projected ROI",
  },
  "COMMERCIAL_SBR_END_USE": {
    category: "Sindhu Bhavan Road High-Street Showrooms",
    locationBadge: "Sindhu Bhavan Road",
    schemes: ["Shilp One (Sindhu Bhavan Road)", "Ashray Aurum (SBR Frontage)", "Kaveri Soham SBR Commercial"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.5% – 9.5% Expected Yield",
  },
  "COMMERCIAL_SBR_CORPORATE": {
    category: "SBR Glass-Facade Corporate Headquarters",
    locationBadge: "Sindhu Bhavan Prime",
    schemes: ["Shilp One (Sindhu Bhavan Road)", "Ashray Aurum (Corporate Floors)", "Sharnya Altura Commercial Hub"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "8.2% – 10.5% Corporate Pre-Leased Yield",
  },
  "COMMERCIAL_SBR_INVESTMENT": {
    category: "Sindhu Bhavan High-ROI Pre-Leased Assets",
    locationBadge: "Sindhu Bhavan High-Street",
    schemes: ["Shilp One (SBR High-Street Retail)", "Ashray Aurum (Pre-Leased Units)", "Kaveri Soham Commercial"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "9.0% – 11.5% Corporate Yield",
  },
  "COMMERCIAL_BODAKDEV_END_USE": {
    category: "Bodakdev & SG Highway Business Outlets",
    locationBadge: "Bodakdev & SG Highway",
    schemes: ["Shilp One (Bodakdev Sector)", "Ashray Aurum (SG Highway Belt)", "Suryansh Solitaire Retail"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "7.2% – 9.0% Expected Yield",
  },
  "COMMERCIAL_BODAKDEV_CORPORATE": {
    category: "SG Highway Corporate Tech Hubs",
    locationBadge: "SG Highway Business District",
    schemes: ["Shilp One (Corporate Towers)", "Ashray Aurum Commercial", "Bodakdev Corporate Hub"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "8.0% – 9.8% Corporate Rental Yield",
  },
  "COMMERCIAL_BODAKDEV_INVESTMENT": {
    category: "Bodakdev Commercial Investment Portfolios",
    locationBadge: "Bodakdev Prime",
    schemes: ["Shilp One (Retail Assets)", "Ashray Aurum Commercial", "Kaveri Soham Commercial Assets"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "8.8% – 10.8% Rental Yield",
  },

  // Plot / Land
  "PLOT_SHILAJ_END_USE": {
    category: "Shilaj Residential Plot Parcels for Villas",
    locationBadge: "Shilaj Area",
    schemes: ["Prime Shilaj Plot Parcels", "Shilaj Extension Villa Land", "Ambli-Shilaj Private Estates"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "12% – 15% Land Value Growth",
  },
  "PLOT_SHILAJ_CORPORATE": {
    category: "Shilaj Commercial Land Parcels for Tech Parks",
    locationBadge: "Shilaj Growth Belt",
    schemes: ["Shilaj Commercial Plot Parcels", "Ambli-Shilaj Land Ring", "Shilaj Outer Ring Parcels"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "14% – 18% Land Value Growth",
  },
  "PLOT_SHILAJ_INVESTMENT": {
    category: "Shilaj High-ROI Land Investments",
    locationBadge: "Shilaj Growth Belt",
    schemes: ["Prime Shilaj Plot Parcels", "Bopal-Shilaj Outer Ring Parcels", "Ambli Land Extensions"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "15% – 20% Annual Appreciation",
  },
  "PLOT_SBR_END_USE": {
    category: "Sindhu Bhavan Road Exclusive Land Parcels",
    locationBadge: "Sindhu Bhavan Road",
    schemes: ["Sindhu Bhavan Road Villa Plots", "Ambli-SBR Junction Parcels", "SBR Prime Estate Land"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "14% – 17% Land Appreciation",
  },
  "PLOT_SBR_CORPORATE": {
    category: "SBR High-Street Commercial Land Plots",
    locationBadge: "Sindhu Bhavan Prime",
    schemes: ["Sindhu Bhavan Commercial Land Parcels", "SBR Extension Commercial Plots", "Ambli Commercial Belt"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "16% – 22% Commercial Land Growth",
  },
  "PLOT_SBR_INVESTMENT": {
    category: "Sindhu Bhavan Premium Land Portfolio",
    locationBadge: "Sindhu Bhavan Belt",
    schemes: ["SBR Prime Commercial Land", "Ambli-SBR Growth Corridor", "Sindhu Bhavan Plot Holdings"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "18% – 25% High Capital Growth",
  },
  "PLOT_BODAKDEV_END_USE": {
    category: "Bodakdev Luxury Residential Plot Estates",
    locationBadge: "Bodakdev Core",
    schemes: ["Bodakdev Prime Bungalow Plots", "SG Highway Extension Land", "Bodakdev Villa Parcels"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "12% – 16% Land Appreciation",
  },
  "PLOT_BODAKDEV_CORPORATE": {
    category: "Bodakdev & SG Highway Commercial Land",
    locationBadge: "SG Highway Business Corridor",
    schemes: ["Bodakdev Commercial Plots", "SG Highway Corporate Land Parcels", "Bodakdev Outer Ring Land"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "15% – 20% Capital Growth",
  },
  "PLOT_BODAKDEV_INVESTMENT": {
    category: "SG Highway Land Investment Assets",
    locationBadge: "Bodakdev & SG Highway",
    schemes: ["SG Highway Commercial Land Parcels", "Bodakdev High-Density Plot", "Ambli-Bodakdev Growth Ring"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "16% – 22% Annual Appreciation",
  },
};

// 3. Fallback Finder Algorithm for Nearest Match
function getRecommendation(sector: SectorType, corridor: CorridorType, intent: IntentType): Recommendation {
  const exactKey = `${sector}_${corridor}_${intent}`;
  if (RECOMMENDATION_DATABASE[exactKey]) {
    return RECOMMENDATION_DATABASE[exactKey];
  }

  // Fallback to sector + corridor
  const partialKey = Object.keys(RECOMMENDATION_DATABASE).find(
    (key) => key.startsWith(`${sector}_${corridor}`)
  );

  if (partialKey && RECOMMENDATION_DATABASE[partialKey]) {
    return {
      ...RECOMMENDATION_DATABASE[partialKey],
      isClosestMatch: true,
    };
  }

  // Generic Sector Fallback
  return {
    category: `${sector === "RESIDENTIAL" ? "Luxury Residential" : sector === "COMMERCIAL" ? "Commercial Real Estate" : "Land & Plot"} Solutions`,
    locationBadge: "Western Ahmedabad",
    schemes: ["Kaveri Soham Vivanta", "Sharnya Altura", "Shilp One", "Ashray Aurum"],
    priceRange: "₹1.00 Cr – ₹3.00 Cr",
    expectedYield: "6.5% – 12.0% Estimated ROI",
    isClosestMatch: true,
  };
}

export default function ResidenceConfigurator() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [sector, setSector] = useState<SectorType>("RESIDENTIAL");
  const [corridor, setCorridor] = useState<CorridorType>("SHILAJ");
  const [intent, setIntent] = useState<IntentType>("END_USE");

  const recommendation = getRecommendation(sector, corridor, intent);

  // Labels for WhatsApp Message
  const sectorLabelMap: Record<SectorType, string> = {
    RESIDENTIAL: "Residential (2, 3 & 4 BHK)",
    COMMERCIAL: "Commercial (Offices & Retail)",
    PLOT: "Plot / Land (Verified Parcels)",
  };

  const corridorLabelMap: Record<CorridorType, string> = {
    SHILAJ: "Shilaj Area",
    SBR: "Sindhu Bhavan Road",
    BODAKDEV: "Bodakdev & SG Highway",
  };

  const intentLabelMap: Record<IntentType, string> = {
    END_USE: "Self-Use Residence",
    CORPORATE: "Corporate Office",
    INVESTMENT: "High ROI Investment",
  };

  // Dynamic WhatsApp pre-filled message generator
  const generateWhatsAppUrl = () => {
    const rawMsg = `Hello Dhrumit Darji,

I used the Interactive Scheme Match Finder on the Only Space Realty website and would like to request a shortlist based on my preferences.

📋 Selected Preferences
• Property Sector: ${sectorLabelMap[sector]}
• Growth Corridor: ${corridorLabelMap[corridor]}
• Investment Intent: ${intentLabelMap[intent]}

🏡 Matched Scheme
• Category: ${recommendation.category}
• Location: ${recommendation.locationBadge}
• Projects: ${recommendation.schemes.join(", ")}
• Budget: ${recommendation.priceRange}

Please share the cost sheet, floor plans, brochure, and available inventory. I would also like to schedule a consultation with Only Space Realty.

Thank you.`;

    return `https://wa.me/918734848266?text=${encodeURIComponent(rawMsg)}`;
  };

  const currentSelectionKey = `${sector}_${corridor}_${intent}`;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]/40 relative z-10 border-t border-neutral-900" id="configurator">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Title */}
        <div className="max-w-2xl space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            Interactive Property Advisory
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
            Find Your Ideal Scheme Match.
          </h2>
          <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
            Filter by property sector, preferred growth corridor, and investment intent. ONLY SPACE REALTY will shortlist verified listings tailored for your requirements across Western Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Options Selection Panel (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 01. Property Sector */}
            <div className="space-y-4">
              <h3 className="font-sans text-[10px] tracking-widest text-white font-bold uppercase flex items-center gap-2">
                <span className="text-gold">01 /</span> Select Property Sector
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "RESIDENTIAL" as SectorType, label: "Residential", sub: "2, 3 & 4 BHK Estates", icon: Home },
                  { id: "COMMERCIAL" as SectorType, label: "Commercial", sub: "Offices & Retail", icon: Building2 },
                  { id: "PLOT" as SectorType, label: "Plot / Land", sub: "Verified Parcels", icon: Landmark },
                ].map((item) => {
                  const IconComp = item.icon;
                  const isSelected = sector === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSector(item.id)}
                      className={`border rounded-2xl p-4 text-left cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "border-gold bg-gold/10 text-white shadow-lg ring-1 ring-gold/40"
                          : "border-neutral-800 bg-[#141414] text-neutral-300 hover:border-gold/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <IconComp className={`h-5 w-5 ${isSelected ? "text-gold" : "text-neutral-400"}`} />
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-gold" />}
                      </div>
                      <div className="font-serif text-sm font-bold">{item.label}</div>
                      <div className="font-sans text-[10px] text-grey mt-0.5">{item.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 02. Preferred Growth Corridor */}
            <div className="space-y-4">
              <h3 className="font-sans text-[10px] tracking-widest text-white font-bold uppercase flex items-center gap-2">
                <span className="text-gold">02 /</span> Preferred Growth Corridor
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "SHILAJ" as CorridorType, name: "Shilaj Area", detail: "Luxury Living & Land" },
                  { id: "SBR" as CorridorType, name: "Sindhu Bhavan Road", detail: "High-Street & Corporate" },
                  { id: "BODAKDEV" as CorridorType, name: "Bodakdev & SG Highway", detail: "Established Hubs" },
                ].map((item) => {
                  const isSelected = corridor === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCorridor(item.id)}
                      className={`border rounded-2xl p-4 text-left cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "border-gold bg-gold/10 text-white shadow-lg ring-1 ring-gold/40"
                          : "border-neutral-800 bg-[#141414] text-neutral-300 hover:border-gold/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-gold font-bold uppercase tracking-wider">
                          <MapPin className="h-3 w-3" /> Corridor
                        </div>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-gold" />}
                      </div>
                      <div className="font-serif text-sm font-bold">{item.name}</div>
                      <div className="font-sans text-[10px] text-grey mt-0.5">{item.detail}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 03. Primary Investment Intent */}
            <div className="space-y-4">
              <h3 className="font-sans text-[10px] tracking-widest text-white font-bold uppercase flex items-center gap-2">
                <span className="text-gold">03 /</span> Primary Investment Intent
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "END_USE" as IntentType, label: "Self-Use Residence", desc: "Family Luxury Home" },
                  { id: "CORPORATE" as IntentType, label: "Corporate Office", desc: "Business HQ / Leasing" },
                  { id: "INVESTMENT" as IntentType, label: "High ROI Investment", desc: "Capital Growth & Rental" },
                ].map((item) => {
                  const isSelected = intent === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setIntent(item.id)}
                      className={`border rounded-2xl p-4 text-left cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "border-gold bg-gold/10 text-white shadow-lg ring-1 ring-gold/40"
                          : "border-neutral-800 bg-[#141414] text-neutral-300 hover:border-gold/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-serif text-sm font-bold">{item.label}</div>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-gold" />}
                      </div>
                      <div className="font-sans text-[10px] text-grey mt-0.5">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Summary Card (Right Column) with Smooth Animation */}
          <div className="lg:col-span-5 bg-[#121212] border border-gold/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSelectionKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-gold" /> Matched Scheme Outlook
                  </span>
                  <div className="flex items-center gap-2">
                    {recommendation.isClosestMatch && (
                      <span className="text-[9px] bg-amber-500/20 border border-amber-500/50 text-amber-300 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> Closest Match
                      </span>
                    )}
                    <span className="text-[9px] bg-gold/10 border border-gold/40 text-gold px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                      {recommendation.locationBadge}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-grey uppercase tracking-widest block font-bold">Category</span>
                  <h3 className="font-serif text-xl font-bold text-white mt-0.5 leading-snug">
                    {recommendation.category}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[10px] text-grey uppercase tracking-widest block font-bold">Primary Matched Schemes</span>
                  <div className="space-y-2">
                    {recommendation.schemes.map((scheme, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white bg-[#181818] p-3 rounded-xl border border-neutral-800 font-semibold hover:border-gold/30 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{scheme}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800">
                  <span className="text-[9px] text-grey uppercase tracking-widest block font-bold">Est. Price Range</span>
                  <span className="font-serif text-lg font-bold text-white block mt-0.5">{recommendation.priceRange}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 mt-6 border-t border-neutral-800 space-y-3 relative z-10">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest py-4 rounded-full font-bold cursor-pointer shadow-xl flex items-center justify-center gap-2 text-center"
              >
                <PhoneCall className="h-4 w-4 shrink-0" /> Request Shortlist From Dhrumit Darji
              </a>
              <div className="text-center font-sans text-[9px] text-grey">
                Direct WhatsApp Advisory • 100% Verified Title Check Included
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
