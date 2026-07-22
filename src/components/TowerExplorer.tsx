"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Key, Eye, ShieldAlert, Award, Grid3X3 } from "lucide-react";

interface FloorZone {
  id: string;
  name: string;
  floors: string;
  title: string;
  areaRange: string;
  description: string;
  features: string[];
  availability: string;
  pricing: string;
}

export default function TowerExplorer() {
  const [activeZone, setActiveZone] = useState<string>("penthouse");

  const zones: Record<string, FloorZone> = {
    penthouse: {
      id: "penthouse",
      name: "Crowning 6 BHK Sky Penthouse",
      floors: "Floors 41 - 42",
      title: "The Ultimate Sky Estates",
      areaRange: "14,500 Sq.Ft. (Duplex)",
      description: "Crowning our 42-story signature blocks. Features double master suites with wardrobe galleries, private horizon pool, and massive wrap-around double glazing overlooking the lakeshores.",
      features: [
        "Private 15m heated horizon pool",
        "Rooftop observatory & private deck",
        "Otis touchless elevator portals",
        "Triple-glazed acoustic glass walls",
      ],
      availability: "Exclusively by Private Code",
      pricing: "Pricing on Request",
    },
    high: {
      id: "high",
      name: "High-Zone 5 BHK Residences",
      floors: "Floors 26 - 40",
      title: "Lakeside Horizon Residences",
      areaRange: "8,200 Sq.Ft.",
      description: "Rising above the forest tree canopy. Glass architectural walls offer fully unobstructed panoramas of the corporate corridors and the tranquil local lake views.",
      features: [
        "Unobstructed panoramic water views",
        "Selected marble flooring trim",
        "VRV climate automation pre-installed",
        "Extra-deep cantilevered balconies",
      ],
      availability: "Select Units Available",
      pricing: "Pricing from ₹12.50 Cr*",
    },
    mid: {
      id: "mid",
      name: "Mid-Zone 4 BHK Residences",
      floors: "Floors 11 - 25",
      title: "Premium Sky Homes",
      areaRange: "6,500 Sq.Ft.",
      description: "Perfect height balances merging central park views with far horizons. Optimal light corridors and clean ventilation pathways designed by international consultants.",
      features: [
        "Dual aspect ventilation paths",
        "Integrated home-automation systems",
        "Private entry foyer vestibules",
        "Bespoke modular dry kitchens",
      ],
      availability: "Available allocation",
      pricing: "Pricing from ₹10.20 Cr*",
    },
    low: {
      id: "low",
      name: "Garden-Zone 4 BHK Estates",
      floors: "Floors 2 - 10",
      title: "Central Parkland Canopy",
      areaRange: "6,500 Sq.Ft.",
      description: "Enjoying direct sight lines into the central park lawns and the signature flowing water systems. Peaceful visual shielding provided by surrounding forest canopies.",
      features: [
        "Immediate parkland canopy view",
        "Extra soundproof glass trims",
        "Easiest access to central amenities",
        "Private lift lobby & security keycards",
      ],
      availability: "Select Options Left",
      pricing: "Pricing from ₹10.20 Cr*",
    },
  };

  const selectedZone = zones[activeZone];

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="tower-explorer">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="max-w-xl space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block">
            Interactive Portal
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
            Explore the Heights.
          </h2>
          <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
            Select a vertical zone on the 42-story tower structure to inspect spatial configurations, bespoke engineering features, and current availability logs.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical Tower Mockup Column (Left) */}
          <div className="lg:col-span-4 flex justify-center items-center bg-[#121212]/60 rounded-3xl p-8 border border-neutral-900 min-h-[480px]">
            <div className="relative flex flex-col justify-between w-40 h-[420px] bg-neutral-950 rounded-2xl p-2 border border-neutral-800/40">
              {/* Glass Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent pointer-events-none rounded-2xl" />

              {/* Tower Sections */}
              {[
                { id: "penthouse", label: "Sky Suites", floors: "L41-42", height: "h-[18%]", color: "border-gold bg-gold/10" },
                { id: "high", label: "High-Zone", floors: "L26-40", height: "h-[28%]", color: "border-neutral-700 bg-neutral-900/40" },
                { id: "mid", label: "Mid-Zone", floors: "L11-25", height: "h-[28%]", color: "border-neutral-700 bg-neutral-900/40" },
                { id: "low", label: "Garden-Zone", floors: "L2-10", height: "h-[20%]", color: "border-neutral-700 bg-neutral-900/40" },
              ].map((sect) => {
                const isActive = activeZone === sect.id;
                return (
                  <button
                    key={sect.id}
                    onClick={() => setActiveZone(sect.id)}
                    className={`relative w-full ${sect.height} border-2 rounded-xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-gold bg-gold/20 shadow-2xl scale-105"
                        : "border-transparent bg-neutral-950/40 hover:bg-neutral-950/60"
                    }`}
                  >
                    <span className="font-serif text-[11px] font-bold text-white">
                      {sect.label}
                    </span>
                    <span className="font-sans text-[8px] tracking-wider text-grey uppercase mt-0.5">
                      {sect.floors}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Configuration Data Column (Right) */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              key={selectedZone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-gold/10 text-gold font-sans text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full border border-gold/20">
                  {selectedZone.floors}
                </span>
                <span className="text-grey font-sans text-xs tracking-wider border-l border-neutral-800 pl-3">
                  Average Area: {selectedZone.areaRange}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-white font-bold tracking-wide">
                  {selectedZone.name}
                </h3>
                <p className="font-serif text-sm italic text-gold">
                  {selectedZone.title}
                </p>
              </div>

              <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                {selectedZone.description}
              </p>

              {/* Core Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
                {selectedZone.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-200 tracking-wide">
                    <Award className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Callout box */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#121212]/50 border border-neutral-900 p-6 rounded-2xl mt-8 shadow-xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-grey font-sans text-[10px] tracking-widest uppercase font-semibold">
                    <Grid3X3 className="h-3.5 w-3.5 text-gold" />
                    Pricing Tier
                  </div>
                  <div className="font-serif text-lg font-bold text-white">
                    {selectedZone.pricing}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-grey font-sans text-[10px] tracking-widest uppercase font-semibold">
                    <ShieldAlert className="h-3.5 w-3.5 text-gold" />
                    Allocation Status
                  </div>
                  <div className="font-sans text-xs text-gold font-semibold tracking-wider">
                    {selectedZone.availability}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white text-charcoal hover:bg-gold hover:text-white transition-colors font-sans text-[10px] uppercase tracking-widest px-6 py-3 rounded-full shrink-0 font-bold"
                >
                  <Key className="h-3.5 w-3.5" />
                  Get Cost Sheets
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
