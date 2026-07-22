"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ArrowLeft, Check, Compass, Download, ShieldCheck, Waves, Trees, Map, MessageCircle } from "lucide-react";

interface DetailSpec {
  name: string;
  area: string;
  floors: string;
  price: string;
  intro: string;
  paragraphs: string[];
  features: string[];
  materials: string[];
  image: string;
}

const data: Record<string, DetailSpec> = {
  "4-bhk": {
    name: "The 4 BHK Private Sanctuary",
    area: "6,500 Sq.Ft.",
    floors: "Floors 2 to 40",
    price: "₹10.2 Cr onwards",
    intro: "A masterpiece of layout and light, designed with a focus on seamless indoor-outdoor transitions and absolute privacy.",
    paragraphs: [
      "The 4 BHK Private Sanctuary offers a grand horizontal footprint structured around a central 700 sq.ft. living salon. Entering through a dedicated private lift vestibule, you are greeted by sweeping views of Gandipet Lake through high-performance acoustic floor-to-ceiling glass.",
      "The estate segregates active social areas from the bedrooms. It features a professional dry kitchen with premium integrated appliances, a separate heavy-duty wet kitchen, and independent service corridors that connect to the service lift.",
      "All four bedrooms feature walk-in closets and en-suite marble bathrooms. The master suite features an exclusive 12ft deep cantilevered private deck overlooking the water, offering a serene morning escape."
    ],
    features: [
      "Private elevator vestibule with biometric security",
      "Gourmet dry kitchen + separate wet kitchen",
      "All bedrooms feature dedicated en-suite baths",
      "VRV climate automation with individual zone controls",
      "Solid bookmatched Calacatta Gold marble flooring",
      "Isolated maid quarters with independent washrooms"
    ],
    materials: [
      "Flooring: Premium 18mm Calacatta Gold Italian Marble",
      "Glazing: Sound-insulated double-glazed structural glass (Saint-Gobain)",
      "Kitchen: Miele appliances, Valcucine customizable cabinets",
      "Sanitaryware: Gessi fittings, Toto Neorest smart toilets"
    ],
    image: "/assets/interior_living.png"
  },
  "5-bhk": {
    name: "The 5 BHK Grand Estate",
    area: "8,200 Sq.Ft.",
    floors: "Floors 2 to 40",
    price: "₹12.5 Cr onwards",
    intro: "An expansive single-level estate designed for multi-generational legacy living and grand formal entertaining.",
    paragraphs: [
      "The 5 BHK Grand Estate represents the epitome of single-level luxury. Bounded by structural columns along the perimeter, the internal layout is open and fluid, allowing natural light to penetrate deep into the living spaces.",
      "A primary feature of the 5 BHK layout is the inclusion of a dedicated media room/study den that functions as a semi-private retreat. The central area includes an expansive lakeside terrace, double-height family dining room, and an attached dry kitchen.",
      "A dedicated, touchless service entrance links the service elevator to the storage pantry and staff rooms, ensuring that home maintenance runs seamlessly without encroaching on family areas."
    ],
    features: [
      "Dedicated multi-media study / office room",
      "Integrated 6-seat home cinema room option",
      "Extra-large 1,000 sq.ft. living and formal dining hall",
      "Dual service elevator links & separate pantry storage",
      "Centrally automated touchless control panels",
      "Deep perimeter decks with integrated glass planter beds"
    ],
    materials: [
      "Flooring: Selected Bianco Carrara & Crema Marfil marble slabs",
      "Kitchen: Gaggenau cooking range and convection cabinets",
      "Automation: Crestron automated control gates",
      "Bathrooms: Antonio Lupi wash basins and custom glass shower domes"
    ],
    image: "/assets/interior_living.png"
  },
  "6-bhk": {
    name: "The 6 BHK Sky Penthouse",
    area: "14,500 Sq.Ft.",
    floors: "Floors 41 & 42 (Crowning levels)",
    price: "Pricing on Request",
    intro: "The crown jewel of Vega Towers. A double-level sky estate featuring a private pool, rooftop garden, and unmatched lake views.",
    paragraphs: [
      "Perched on the crowning 41st and 42nd floors, the 6 BHK Sky Penthouse is a private sanctuary. Designed as a standalone villa in the sky, it provides fully unobstructed panoramas of Gandipet Lake and surrounding green reserves.",
      "The lower level hosts the primary formal entertaining areas: a double-height grand saloon, formal dining rooms, a professional show kitchen, and a private media library. An architectural floating stair leads to the upper residential level.",
      "The upper level contains four master suites and the sky terrace. The terrace features a heated infinity lap pool, an outdoor kitchen, and an open fire pit deck, designed for custom private social gatherings."
    ],
    features: [
      "Private 15m heated infinity pool with wood decking",
      "Rooftop observatory, sky garden, and fireplace deck",
      "Double-height 22ft ceiling in the main gallery lounge",
      "Otis touchless elevator ports opening inside both levels",
      "Dedicated wellness spa studio & massage deck",
      "Triple-glazed acoustic glass walls for ultimate privacy"
    ],
    materials: [
      "Flooring: Rare Statuario Marble & solid European Oak parquet",
      "Pool: Blue mosaics with temperature control automation",
      "Kitchen: Sub-Zero wine coolers, Wolf range and hood",
      "Deck: High-density composite thermo-wood and glass railings"
    ],
    image: "/assets/infinity_pool.png"
  }
};

export default function ResidenceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [bookingOpen, setBookingOpen] = useState(false);

  const spec = data[slug] || data["4-bhk"]; // Default fallback

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Back button link */}
      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/residences"
          className="inline-flex items-center gap-2 text-grey hover:text-white transition-colors font-sans text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="h-4 w-4 text-gold" />
          Back to Residences
        </Link>
      </div>

      {/* Main Details Section */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        {/* Core content (Left) */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-grey font-sans uppercase">
              <span className="text-gold font-bold">{spec.area}</span>
              <span>•</span>
              <span>{spec.floors}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
              {spec.name}
            </h1>
            <p className="font-serif text-lg text-gold font-light italic leading-relaxed">
              {spec.intro}
            </p>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={spec.image}
              alt={spec.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 font-sans text-xs tracking-wider text-grey leading-relaxed">
            {spec.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Detailed Floor Plan Section */}
          <div className="space-y-6 pt-6 border-t border-neutral-900">
            <div className="space-y-2">
              <span className="font-sans text-[9px] tracking-widest text-gold uppercase block font-bold">
                Architectural Blueprint
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Floor Layout Plan
              </h3>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-neutral-900 bg-neutral-950/60 shadow-2xl">
              <Image
                src="/assets/floor_plan.png"
                alt={`${spec.name} Floor Layout Blueprint`}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Technical material sheet */}
          <div className="space-y-6 pt-6 border-t border-neutral-900">
            <h3 className="font-serif text-xl font-bold text-white">
              Premium Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-neutral-200">
              {spec.materials.map((mat, i) => (
                <div key={i} className="bg-[#121212]/50 p-4 rounded-xl border border-neutral-900 leading-relaxed">
                  {mat}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar specs card (Right) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#121212]/50 border border-neutral-900 rounded-3xl p-8 shadow-2xl space-y-8">
            <div className="space-y-1">
              <span className="font-sans text-[9px] tracking-widest text-grey uppercase block">Standard Pricing</span>
              <span className="font-serif text-2xl font-bold text-white">{spec.price}</span>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-900">
              <h4 className="font-sans text-[10px] tracking-widest text-white font-bold uppercase">
                Layout Specifications
              </h4>
              <ul className="space-y-3 font-sans text-xs text-neutral-300">
                {spec.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <Check className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-900">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-white text-charcoal hover:bg-gold hover:text-white transition-colors font-sans text-xs uppercase tracking-widest py-4 rounded-full cursor-pointer shadow-lg font-bold"
              >
                Get Cost Sheet
              </button>

              <a
                href={`https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20please%20send%20me%20floor%20plans%20and%20details%20for%20${encodeURIComponent(spec.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-emerald-500/60 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-xs uppercase tracking-widest py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer font-bold shadow-lg"
              >
                <MessageCircle className="h-4.5 w-4.5 text-emerald-400 fill-emerald-400/20" />
                Request Details on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
