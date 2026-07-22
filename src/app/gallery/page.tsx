"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { MapPin, X, ZoomIn, Building2, Home, Landmark, PhoneCall } from "lucide-react";

export default function GalleryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    location: string;
    category: string;
    desc: string;
  } | null>(null);

  const categories = [
    { id: "ALL", name: "Show All" },
    { id: "RESIDENTIAL", name: "Residential Schemes" },
    { id: "COMMERCIAL", name: "Commercial Hubs" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "RESIDENTIAL",
      src: "/assets/kaveri_soham_vivanta.png",
      title: "Kaveri Soham Vivanta",
      location: "Shilaj, Ahmedabad West",
      desc: "Architectural elevation and entrance garden of Kaveri Soham Vivanta luxury residential apartments in Shilaj.",
    },
    {
      id: 2,
      category: "RESIDENTIAL",
      src: "/assets/sharnya_altura_v2.png",
      title: "Sharnya Altura",
      location: "Sindhu Bhavan Road / Shilaj, Ahmedabad West",
      desc: "Ultra-luxury high-rise residential towers offering sky-deck living and panoramic views off Sindhu Bhavan Road.",
    },
    {
      id: 3,
      category: "RESIDENTIAL",
      src: "/assets/suryansh_solitaire.png",
      title: "Suryansh Solitaire",
      location: "Shilaj Area, Ahmedabad West",
      desc: "Premium residential tower with luminous night architecture and luxury executive apartments.",
    },
    {
      id: 4,
      category: "COMMERCIAL",
      src: "/assets/shilp_one_v2.png",
      title: "Shilp One",
      location: "Sindhu Bhavan Road, Bodakdev, Ahmedabad West",
      desc: "Iconic corporate commercial office building with sleek glass facade and high-street retail showrooms.",
    },
    {
      id: 5,
      category: "RESIDENTIAL",
      src: "/assets/ashray_aurum_v2.png",
      title: "Ashray Aurum",
      location: "Near Shilaj, Ahmedabad West",
      desc: "Premier luxury residential apartments featuring modern architecture, rooftop sports courts, and lush green surroundings near Shilaj.",
    },
  ];

  const filteredItems = activeCategory === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-neutral-950/50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" /> ONLY SPACE REALTY • Property &amp; Project Showcase
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white">
            Ahmedabad West Gallery.
          </h1>
          <p className="font-sans text-xs tracking-wider text-grey max-w-2xl leading-relaxed">
            Explore site photos, architectural elevations, and luxury interior showcases of premier schemes represented by <strong className="text-white">ONLY SPACE REALTY</strong> across Shilaj, Sindhu Bhavan Road, Bodakdev, and SG Highway.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-neutral-900 pb-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
              Visual Collection
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-white">
              Project &amp; Scheme Photography
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gold text-white shadow-lg"
                    : "bg-[#141414] text-neutral-400 hover:text-white hover:border-gold/40 border border-neutral-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-[#121212] border border-neutral-800 hover:border-gold/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur px-3 py-1.5 rounded-full border border-gold/40 text-[9px] font-bold text-gold uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5 shrink-0" /> {item.location}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-grey leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-900 mt-2 flex items-center justify-between text-[10px] text-grey uppercase font-bold tracking-wider">
                <span>ONLY SPACE REALTY Verified</span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">Click to Enlarge &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-gold/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-gold flex items-center justify-center transition-colors cursor-pointer border border-neutral-800"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-[380px] md:h-[480px] w-full bg-neutral-950">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 md:p-8 space-y-4 border-t border-neutral-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider">
                    <MapPin className="h-4 w-4 shrink-0" /> {selectedImage.location}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
                <a
                  href={`https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(selectedImage.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest px-6 py-3 rounded-full font-bold cursor-pointer inline-block"
                >
                  Enquire Project &rarr;
                </a>
              </div>

              <p className="font-sans text-xs text-grey leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Advisory CTA */}
      <section className="py-16 px-6 md:px-12 bg-[#0B0B0B]/50 border-t border-neutral-900 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            Site Visits &amp; Personal Tours
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Schedule a Personal Property Site Visit
          </h2>
          <p className="font-sans text-xs text-grey leading-relaxed">
            Want to visit Kaveri Soham Vivanta, Sharnya Altura, Suryansh Solitaire, Shilp One, or Ashray Aurum in person? Contact Founder <strong className="text-white">Dhrumit Darji</strong> to organize a private site tour and price consultation.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/918734848266?text=Hello%20Dhrumit%20Darji,%20I%20would%20like%20to%20schedule%20a%20personal%20property%20site%20visit%20in%20Ahmedabad%20West."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest px-8 py-4 rounded-full font-bold cursor-pointer shadow-xl"
            >
              <PhoneCall className="h-4 w-4" /> Book Site Visit Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
