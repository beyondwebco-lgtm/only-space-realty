"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ArrowRight, MapPin, Building2, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";

export default function PropertiesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "RESIDENTIAL" | "COMMERCIAL" | "PLOT">("ALL");

  const specialties = [
    {
      category: "RESIDENTIAL",
      title: "Residential Properties",
      desc: "Luxury 2, 3 & 4 BHK Apartments, Sky Duplexes, High-End Penthouses & Premium Gated Bungalows across Shilaj & Sindhu Bhavan Road.",
      tag: "Ahmedabad West",
    },
    {
      category: "COMMERCIAL",
      title: "Commercial Properties",
      desc: "Corporate Office Towers, Executive Suites, High-Street Retail Outlets & Pre-Leased ROI Investment Showrooms on Sindhu Bhavan Road & SG Highway.",
      tag: "Prime Corporate Hubs",
    },
    {
      category: "PLOT",
      title: "Plot & Land Deals",
      desc: "100% Verified Clear-Title Residential Plot Parcels & High-Appreciation Commercial Land in Shilaj & Western Ahmedabad corridors.",
      tag: "Verified Land Parcels",
    },
  ];

  const featuredSchemes = [
    {
      id: "kaveri-soham-vivanta",
      name: "Kaveri Soham Vivanta",
      category: "RESIDENTIAL",
      type: "Luxury 3 & 4 BHK Apartments",
      location: "Shilaj, Ahmedabad West",
      price: "On Advisory Request",
      image: "/assets/kaveri_soham_vivanta.png",
      status: "Prime Residential Scheme",
      highlights: ["Prime Shilaj Location", "High-End Club Amenities", "Spacious 3 & 4 BHK Layouts"],
      description: "Kaveri Soham Vivanta is a benchmark residential development in Shilaj, Ahmedabad West. Offering meticulously planned 3 & 4 BHK apartments with expansive balconies, modern architectural elevations, and resort-inspired amenities.",
    },
    {
      id: "sharnya-altura",
      name: "Sharnya Altura",
      category: "RESIDENTIAL",
      type: "High-Rise Luxury Estates",
      location: "Sindhu Bhavan Road / Shilaj, Ahmedabad West",
      price: "Exclusive Listing",
      image: "/assets/sharnya_altura_v2.png",
      status: "Ultra-Luxury Living",
      highlights: ["Sindhu Bhavan Road Corridor", "Sky Deck & Infinity Views", "Exclusive Gated Security"],
      description: "Sharnya Altura represents ultra-luxury vertical living situated right off Sindhu Bhavan Road. Designed for discerning homebuyers seeking privacy, signature architectural design, and unmatched lifestyle amenities.",
    },
    {
      id: "suryansh-solitaire",
      name: "Suryansh Solitaire",
      category: "RESIDENTIAL",
      type: "Luxury Executive Apartments",
      location: "Shilaj Area, Ahmedabad West",
      price: "On Advisory Request",
      image: "/assets/suryansh_solitaire.png",
      status: "Premium Residence",
      highlights: ["Illuminated Facade", "Spacious Floor Plans", "High Appreciation"],
      description: "Suryansh Solitaire offers signature residential apartments crafted for exclusivity and comfort in the heart of Shilaj. Features elegant interior layouts, serene green surroundings, and rapid access to SBR.",
    },
    {
      id: "shilp-one",
      name: "Shilp One",
      category: "COMMERCIAL",
      type: "Corporate Office Towers & High-Street Retail",
      location: "Sindhu Bhavan Road, Ahmedabad West",
      price: "Corporate Leasing & Sale",
      image: "/assets/shilp_one_v2.png",
      status: "Iconic Commercial Hub",
      highlights: ["SBR Main Road Frontage", "Glass Curtain Wall Facade", "High ROI & Pre-Leased Units"],
      description: "Shilp One is an iconic corporate commercial landmark located on Sindhu Bhavan Road. Boasting high-street retail showrooms on lower floors and executive corporate office spaces above.",
    },
    {
      id: "sheladia-divine",
      name: "Sheladia Divine",
      category: "RESIDENTIAL",
      type: "2 & 3 BHK Residential Apartments",
      location: "Shilaj Circle, Ahmedabad West",
      price: "On Advisory Request",
      image: "/assets/sheladia_divine.png",
      status: "Prime Shilaj Circle Residence",
      highlights: ["Shilaj Circle Location", "Spacious 2 & 3 BHK Layouts", "Modern Architectural Elevation"],
      description: "Sheladia Divine offers thoughtfully designed 2 & 3 BHK residential apartments located at Shilaj Circle, Ahmedabad West. Features triple high-rise towers, premium lifestyle amenities, serene landscaped surroundings, and seamless connectivity.",
    },
    {
      id: "ashray-aurum",
      name: "Ashray Aurum",
      category: "RESIDENTIAL",
      type: "Luxury Residential Apartments",
      location: "Near Shilaj, Ahmedabad West",
      price: "Exclusive Listing",
      image: "/assets/ashray_aurum_v2.png",
      status: "Shilaj Landmark",
      highlights: ["Shilaj Proximity", "Modern Amenities & Sports Courts", "Spacious Floor Plans"],
      description: "Ashray Aurum is a premier residential enclave strategically situated near Shilaj, Ahmedabad West. Offering thoughtfully designed luxury apartments, rooftop solar amenities, green landscapes, and modern vertical living.",
    },
  ];

  const filteredSchemes = selectedCategory === "ALL" 
    ? featuredSchemes 
    : featuredSchemes.filter(s => s.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-neutral-950/50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" /> Ahmedabad West • Shilaj &amp; Sindhu Bhavan Area
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white">
            Specialties in Shilaj &amp; Sindhu Bhavan Area.
          </h1>
          <p className="font-sans text-xs tracking-wider text-grey max-w-2xl leading-relaxed">
            Discover curated premier schemes and property deals across <strong className="text-white">Ahmedabad West</strong>. ONLY SPACE REALTY delivers 100% transparent dealings, reliable advisory, and verified listings across <strong className="text-white font-serif">Residential</strong>, <strong className="text-white font-serif">Commercial</strong>, and <strong className="text-white font-serif">Plot</strong> sectors.
          </p>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl">
            {specialties.map((spec, idx) => (
              <div key={idx} className="bg-[#121212] p-4 rounded-2xl border border-gold/30 space-y-1">
                <span className="text-[9px] text-gold uppercase tracking-widest font-bold block">{spec.tag}</span>
                <span className="font-serif text-base text-white font-bold block">{spec.title}</span>
                <p className="text-[10px] text-grey leading-tight">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-neutral-900 pb-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
              Premier Property Listings
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-white">
              Featured Schemes &amp; Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["ALL", "RESIDENTIAL", "COMMERCIAL", "PLOT"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gold text-white shadow-lg"
                    : "bg-[#141414] text-neutral-400 hover:text-white hover:border-gold/40 border border-neutral-800"
                }`}
              >
                {cat === "ALL" ? "All Schemes" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Schemes Catalog */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-[#121212] border border-neutral-800 hover:border-gold/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Site Photo */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={scheme.image}
                    alt={`${scheme.name} Site Photo`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur px-3 py-1.5 rounded-full border border-gold/40 text-[9px] font-bold text-gold uppercase tracking-widest">
                    {scheme.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur px-3 py-1 rounded-full text-[9px] text-white font-medium">
                    {scheme.status}
                  </div>
                </div>

                {/* Scheme Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-wider">
                      <MapPin className="h-3.5 w-3.5 shrink-0" /> {scheme.location}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {scheme.name}
                    </h3>
                    <p className="font-sans text-xs text-neutral-300 font-semibold">{scheme.type}</p>
                  </div>

                  <p className="font-sans text-xs text-grey leading-relaxed line-clamp-3">
                    {scheme.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-800">
                    <span className="text-[10px] text-grey uppercase tracking-wider block font-bold">Key Scheme Highlights:</span>
                    <div className="space-y-1">
                      {scheme.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-neutral-900 mt-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] text-grey uppercase tracking-widest block">Price / Pricing</span>
                  <span className="font-serif text-sm font-bold text-gold">{scheme.price}</span>
                </div>
                <a
                  href={`https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20am%20interested%20in%20enquiring%20about%20${encodeURIComponent(scheme.name)}%20in%20${encodeURIComponent(scheme.location)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-charcoal hover:bg-gold hover:text-white transition-colors text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-full font-bold cursor-pointer"
                >
                  Enquire Property <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Banner */}
      <section className="py-16 px-6 md:px-12 bg-[#0B0B0B]/50 border-t border-neutral-900 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            Direct Founder Consultation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Looking for Premier Properties in Shilaj or SBR?
          </h2>
          <p className="font-sans text-xs text-grey leading-relaxed">
            Connect directly with <strong className="text-white">Dhrumit Darji</strong> (MBA, 10+ Years Experience in Ahmedabad West Real Estate). We will guide you through site visits, verified title checks, and price negotiations for best Ahmedabad West property options.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/918734848266?text=Hello%20Dhrumit%20Darji,%20I%20would%20like%20to%20book%20a%20personal%20consultation%20for%20properties%20in%20Shilaj%20and%20Sindhu%20Bhavan%20Road."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest px-8 py-4 rounded-full font-bold cursor-pointer shadow-xl"
            >
              <PhoneCall className="h-4 w-4" /> Book Personal Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
