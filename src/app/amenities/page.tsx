"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Building2, Home, Landmark, FileText, ShieldCheck, TrendingUp, KeyRound, Handshake, CheckCircle2, PhoneCall } from "lucide-react";

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const realEstateServices = [
    {
      id: "residential-services",
      icon: Home,
      title: "Residential Property Advisory",
      subtitle: "Buying, Selling & Renting of Luxury Homes",
      description: "Comprehensive residential real estate consultation in Western Ahmedabad. We assist luxury homebuyers and investors in acquiring, selling, or renting 2, 3 & 4 BHK apartments, sky duplexes, penthouses, and gated bungalows in Shilaj and Sindhu Bhavan Road.",
      features: [
        "Curated site visits & direct owner/builder meetings",
        "Best market price negotiation & transparent terms",
        "Properties across Shilaj, SBR, Bodakdev & Bopal",
        "NRI home buying & rental management support",
      ],
      badge: "Residential Advisory",
    },
    {
      id: "commercial-services",
      icon: Building2,
      title: "Commercial Property Consulting",
      subtitle: "Corporate Offices, Executive Suites & Retail Showrooms",
      description: "Strategic commercial property consulting for corporations, retail brands, and investors. Specializing in prime office space leases, high-street retail showrooms, and pre-leased ROI investment deals on Sindhu Bhavan Road & SG Highway.",
      features: [
        "Corporate office leasing for IT & Pharma firms",
        "High-street retail showrooms with prime frontage",
        "Pre-leased commercial properties with high ROI",
        "Tenant sourcing & lease agreement management",
      ],
      badge: "Commercial Advisory",
    },
    {
      id: "plot-land-services",
      icon: Landmark,
      title: "Plot & Land Deals Advisory",
      subtitle: "Verified Residential & Commercial Land",
      description: "Expert guidance in acquiring title-verified residential land for custom villa construction and high-appreciation commercial plots near Shilaj and Western Ahmedabad growth belts.",
      features: [
        "100% Clear-title verified land parcels",
        "Residential plots for custom bungalow construction",
        "Commercial land deals with high ROI potential",
        "Legal due diligence & title search reports",
      ],
      badge: "Land Advisory",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-neutral-950/50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            <Handshake className="h-3.5 w-3.5" /> ONLY SPACE REALTY • Real Estate Consultancy Services
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white">
            Our Consultancy Services.
          </h1>
          <p className="font-sans text-xs tracking-wider text-grey max-w-2xl leading-relaxed">
            From residential home searches to corporate office leasing, verified land deals, banking home loans, and legal documentation — <strong className="text-white">ONLY SPACE REALTY</strong> provides 100% transparent, reliable, and committed real estate services across <strong className="text-white">Ahmedabad West</strong> since 2017.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realEstateServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#121212] border border-neutral-800 hover:border-gold/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-lg">
                      <IconComp className="h-7 w-7" />
                    </div>
                    <span className="text-[9px] bg-neutral-900 border border-neutral-800 text-gold px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                      {service.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-gold uppercase tracking-wider font-semibold">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-grey leading-relaxed">
                    {service.description}
                  </p>

                  <div className="h-[1px] w-full bg-neutral-900" />

                  <div className="space-y-2">
                    <span className="text-[10px] text-white uppercase tracking-widest block font-bold">Service Inclusions:</span>
                    <div className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[10px] text-grey uppercase tracking-widest font-semibold">Verified Advisory</span>
                  <a
                    href={`https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-gold font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                  >
                    Enquire Service &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advisory Callout */}
      <section className="py-20 px-6 md:px-12 bg-[#0B0B0B]/50 border-t border-neutral-900 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            Consultation With Dhrumit Darji
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            Need Expert Real Estate Guidance in Ahmedabad West?
          </h2>
          <p className="font-sans text-xs text-grey leading-relaxed">
            Whether you are buying your dream home in Shilaj, leasing a corporate office on Sindhu Bhavan Road, or applying for a home loan — get direct, honest advisory from Founder Dhrumit Darji (MBA, 10+ Years Real Estate Experience).
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/918734848266?text=Hello%20Dhrumit%20Darji,%20I%20would%20like%20to%20book%20a%20real%20estate%20consultation%20with%20Only%20Space%20Realty."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest px-8 py-4 rounded-full font-bold cursor-pointer shadow-xl"
            >
              <PhoneCall className="h-4 w-4" /> Book Consultation Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
