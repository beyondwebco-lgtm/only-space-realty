"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Info, Check, MapPin } from "lucide-react";

interface ZoneDetail {
  id: string;
  name: string;
  type: string;
  description: string;
  specs: string[];
}

export default function MasterPlan() {
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>({
    id: "shilaj",
    name: "Shilaj Circle & Belt",
    type: "Prime Luxury Villa Corridor",
    description: "Hub of premium independent bungalows, modern gated villa communities, and Only Space Realty headquarters.",
    specs: ["Headquarters Location", "Exclusive Villa Gated Estates", "High Capital Appreciation"],
  });

  const zones: Record<string, ZoneDetail> = {
    shilaj: {
      id: "shilaj",
      name: "Shilaj Circle & Belt",
      type: "Prime Luxury Villa Corridor",
      description: "Hub of premium independent bungalows, modern gated villa communities, and Only Space Realty headquarters.",
      specs: ["Headquarters Location", "Exclusive Villa Gated Estates", "High Capital Appreciation"],
    },
    sbr: {
      id: "sbr",
      name: "Sindhu Bhavan Road (SBR)",
      type: "Ultra-Luxury Residential & Commercial Hub",
      description: "Ahmedabad's premier high-end lifestyle corridor featuring 3, 4 & 5 BHK luxury sky apartments and fine-dining plazas.",
      specs: ["Low-density luxury high-rises", "Italian marble residences", "Top developer portfolios"],
    },
    bodakdev: {
      id: "bodakdev",
      name: "Bodakdev & Judges Bungalow",
      type: "Established Elite Neighborhood",
      description: "Established luxury residential zone with tree-lined avenues, proximity to international schools and premium healthcare.",
      specs: ["3 & 4 BHK Luxury Flats", "Established Green Belt", "High Resale Value"],
    },
    science: {
      id: "science",
      name: "Science City Road Corridor",
      type: "Rapid Growth Residential & Commercial",
      description: "Surging growth corridor with high-yield commercial shops, corporate suites, and modern residential developments.",
      specs: ["High-Yield Commercial Units", "Fast Rental Growth", "RERA Approved Projects"],
    },
    sg: {
      id: "sg",
      name: "SG Highway Corporate Hub",
      type: "Grade-A Commercial Corridor",
      description: "Ahmedabad's primary commercial artery housing corporate headquarters, LEED certified towers, and retail hubs.",
      specs: ["Grade-A Commercial Suites", "100% DG Power Backup", "High Corporate Demand"],
    },
    ambli: {
      id: "ambli",
      name: "Ambli Bopal Road",
      type: "High-End Residential Haven",
      description: "Sought-after luxury residential enclave with sprawling luxury apartments, modern clubhouses, and serene living.",
      specs: ["Expansive 4 & 5 BHK Layouts", "Smart Home Automation", "Premium Lifestyle Amenities"],
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]/30 relative z-10" id="master-plan">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Title */}
        <div className="max-w-xl space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            Prime Growth Belts
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
            Ahmedabad Real Estate Map.
          </h2>
          <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
            Only Space Realty specializes in Ahmedabad's most valuable residential and commercial corridors. Click on key hubs below to explore investment highlights.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* SVG Map Panel */}
          <div className="lg:col-span-2 bg-[#121212]/60 rounded-3xl p-8 border border-neutral-900 shadow-2xl flex flex-col justify-center items-center relative min-h-[400px]">
            <div className="absolute top-4 left-6 flex items-center gap-2 text-grey font-sans text-[9px] tracking-widest uppercase">
              <Compass className="h-3.5 w-3.5 text-gold" />
              Ahmedabad West Regional Zones
            </div>

            {/* Master Plan SVG */}
            <svg
              viewBox="0 0 800 500"
              className="w-full h-auto max-h-[450px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SG Highway Axis Line */}
              <path
                d="M 100 480 Q 400 250 700 20"
                stroke="#333333"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
              />
              <text x="500" y="160" textAnchor="middle" fill="#666666" className="font-sans text-[10px] tracking-widest uppercase italic rotate-[-30]">
                SG Highway Arterial Axis
              </text>

              {/* Shilaj Zone Circle */}
              <circle
                cx="300"
                cy="280"
                r="65"
                fill={selectedZone?.id === "shilaj" ? "rgba(201, 169, 106, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                stroke={selectedZone?.id === "shilaj" ? "#C9A96A" : "#333"}
                strokeWidth={selectedZone?.id === "shilaj" ? "2.5" : "1.5"}
                className="cursor-pointer transition-all duration-300 hover:stroke-gold"
                onClick={() => setSelectedZone(zones.shilaj)}
              />
              <text x="300" y="284" textAnchor="middle" fill="#FAFAFA" className="font-serif text-[11px] pointer-events-none font-bold">
                Shilaj Circle
              </text>

              {/* SBR Zone */}
              <polygon
                points="420,200 540,190 520,260 400,270"
                fill={selectedZone?.id === "sbr" ? "rgba(201, 169, 106, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                stroke={selectedZone?.id === "sbr" ? "#C9A96A" : "#333"}
                strokeWidth={selectedZone?.id === "sbr" ? "2.5" : "1.5"}
                className="cursor-pointer transition-all duration-300 hover:stroke-gold"
                onClick={() => setSelectedZone(zones.sbr)}
              />
              <text x="470" y="235" textAnchor="middle" fill="#FAFAFA" className="font-serif text-[10px] pointer-events-none font-bold">
                Sindhu Bhavan
              </text>

              {/* Bodakdev Zone */}
              <circle
                cx="580"
                cy="320"
                r="45"
                fill={selectedZone?.id === "bodakdev" ? "rgba(201, 169, 106, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                stroke={selectedZone?.id === "bodakdev" ? "#C9A96A" : "#333"}
                strokeWidth={selectedZone?.id === "bodakdev" ? "2.5" : "1.5"}
                className="cursor-pointer transition-all duration-300 hover:stroke-gold"
                onClick={() => setSelectedZone(zones.bodakdev)}
              />
              <text x="580" y="324" textAnchor="middle" fill="#FAFAFA" className="font-serif text-[10px] pointer-events-none font-bold">
                Bodakdev
              </text>

              {/* Science City Zone */}
              <polygon
                points="220,100 360,90 340,170 200,180"
                fill={selectedZone?.id === "science" ? "rgba(201, 169, 106, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                stroke={selectedZone?.id === "science" ? "#C9A96A" : "#333"}
                strokeWidth={selectedZone?.id === "science" ? "2.5" : "1.5"}
                className="cursor-pointer transition-all duration-300 hover:stroke-gold"
                onClick={() => setSelectedZone(zones.science)}
              />
              <text x="280" y="140" textAnchor="middle" fill="#FAFAFA" className="font-serif text-[10px] pointer-events-none font-bold">
                Science City
              </text>

              {/* SG Highway Zone */}
              <circle
                cx="580"
                cy="140"
                r="45"
                fill={selectedZone?.id === "sg" ? "rgba(201, 169, 106, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                stroke={selectedZone?.id === "sg" ? "#C9A96A" : "#333"}
                strokeWidth={selectedZone?.id === "sg" ? "2.5" : "1.5"}
                className="cursor-pointer transition-all duration-300 hover:stroke-gold"
                onClick={() => setSelectedZone(zones.sg)}
              />
              <text x="580" y="144" textAnchor="middle" fill="#FAFAFA" className="font-serif text-[10px] pointer-events-none font-bold">
                SG Highway
              </text>

              {/* Ambli Zone */}
              <circle
                cx="220"
                cy="380"
                r="45"
                fill={selectedZone?.id === "ambli" ? "rgba(201, 169, 106, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                stroke={selectedZone?.id === "ambli" ? "#C9A96A" : "#333"}
                strokeWidth={selectedZone?.id === "ambli" ? "2.5" : "1.5"}
                className="cursor-pointer transition-all duration-300 hover:stroke-gold"
                onClick={() => setSelectedZone(zones.ambli)}
              />
              <text x="220" y="384" textAnchor="middle" fill="#FAFAFA" className="font-serif text-[10px] pointer-events-none font-bold">
                Ambli Bopal
              </text>
            </svg>

            <div className="absolute bottom-4 right-6 text-[8px] tracking-widest text-neutral-500 uppercase font-sans">
              Click zone to view corridor details
            </div>
          </div>

          {/* Interactive Info Card */}
          <div className="lg:col-span-1">
            {selectedZone ? (
              <motion.div
                key={selectedZone.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 shadow-2xl space-y-6"
              >
                <div className="space-y-1">
                  <span className="font-sans text-[9px] tracking-widest text-gold uppercase font-bold block">
                    {selectedZone.type}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-bold">
                    {selectedZone.name}
                  </h3>
                </div>

                <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                  {selectedZone.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-900">
                  <span className="font-sans text-[9px] tracking-widest text-white uppercase font-bold block">
                    Key Corridor Highlights:
                  </span>
                  <ul className="space-y-2">
                    {selectedZone.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                        <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <div className="bg-[#121212]/40 border border-neutral-900 rounded-3xl p-8 text-center text-grey text-xs font-sans">
                Select a zone on the map to inspect location specifics.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
