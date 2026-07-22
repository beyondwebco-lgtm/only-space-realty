"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Logo from "@/components/Logo";
import { Compass, Calendar, Sparkles, MapPin, Grid, Building2, UserCheck, GraduationCap, Award, CheckCircle, Shield, Mail } from "lucide-react";

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-neutral-950/40 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            The Vision & Strategic Advisory
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white">
            The Vision & Legacy of ONLY SPACE REALTY.
          </h1>
          <p className="font-sans text-xs tracking-wider text-grey max-w-2xl leading-relaxed">
            <strong className="text-white">ONLY SPACE REALTY</strong> is built upon a simple promise: to provide strategic real estate advisory, transparent property dealings, and market leadership across Ahmedabad-West since 2017.
          </p>
        </div>
      </section>

      {/* Only Space Realty Consultancy & Founder Feature */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-b border-neutral-900">
        <div className="bg-[#121212]/80 border border-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-neutral-800 pb-8">
            <Logo variant="card" />
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shrink-0">
              <Calendar className="h-4 w-4" /> Est. Sept 21, 2017
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Profile Card */}
            <div className="lg:col-span-5 bg-[#181818] border border-gold/30 rounded-2xl p-8 space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
              
              <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-neutral-800 pb-6">
                <div className="relative w-28 h-36 rounded-2xl overflow-hidden border-2 border-gold/60 shadow-xl bg-gradient-to-b from-[#2A2A2A] to-[#121212] shrink-0">
                  <Image
                    src="/assets/founder_suit.png"
                    alt="Dhrumit Darji - Founder & Chief Consultant"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <span className="font-sans text-[9px] text-gold font-bold uppercase tracking-widest bg-gold/10 px-2.5 py-0.5 rounded-full inline-block">
                    Leader & Visionary
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white pt-1">Dhrumit Darji</h3>
                  <p className="font-sans text-xs text-gold font-semibold uppercase tracking-wider">Founder & Chief Consultant</p>
                  <p className="font-sans text-[10px] text-neutral-400">ONLY SPACE REALTY</p>
                </div>
              </div>

              <div className="space-y-3 font-sans text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-gold shrink-0" />
                  <span><strong>Education:</strong> MBA in Marketing</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-4 w-4 text-gold shrink-0" />
                  <span><strong>Experience:</strong> Working in Real Estate since 2015 (10+ Years)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <span><strong>Email:</strong> <a href="mailto:dhrumitdarji2512@gmail.com" className="text-white hover:text-gold transition-colors">dhrumitdarji2512@gmail.com</a></span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Office Address:</strong> Shilaj, Ahmedabad, Gujarat - 380059</span>
                </div>
              </div>
            </div>

            {/* Business Narrative */}
            <div className="lg:col-span-7 space-y-6 font-sans text-xs tracking-wider text-grey leading-relaxed">
              <div>
                <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase font-bold block mb-1">
                  Real Estate Consultancy & Property Management Company
                </span>
                <h3 className="font-serif text-2xl text-white font-light">
                  About ONLY SPACE REALTY
                </h3>
              </div>
              <p>
                <strong className="text-white">ONLY SPACE REALTY</strong> is an accomplished real estate firm that deals in the <strong className="text-white">&quot;Ahmedabad-West&quot;</strong> locality. Drawing from their years of experience they bring a strategic yet personal approach to the home buying, selling, and renting process.
              </p>
              <p>
                Over the years, <strong className="text-white">ONLY SPACE REALTY</strong> has built a reputation for providing a seamless experience for customers to secure their dream home under the leadership of <strong className="text-white">Dhrumit Darji</strong> (MBA in Marketing, in Real Estate since 2015).
              </p>

              {/* Specialities / Core Pillars */}
              <div className="pt-2">
                <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-bold block mb-3">Our Core Specialities</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#181818] p-3.5 rounded-xl border border-gold/30 flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-xs text-white font-semibold">Transparent Dealings</span>
                  </div>
                  <div className="bg-[#181818] p-3.5 rounded-xl border border-gold/30 flex items-center gap-3">
                    <Shield className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-xs text-white font-semibold">Reliable Services</span>
                  </div>
                  <div className="bg-[#181818] p-3.5 rounded-xl border border-gold/30 flex items-center gap-3">
                    <Award className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-xs text-white font-semibold">Believe in Commitment</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-center">
                <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800">
                  <div className="font-serif text-xl font-bold text-gold">2017</div>
                  <div className="text-[10px] text-grey uppercase tracking-wider mt-1">Established</div>
                </div>
                <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800">
                  <div className="font-serif text-xl font-bold text-gold">10+ Yrs</div>
                  <div className="text-[10px] text-grey uppercase tracking-wider mt-1">Real Estate Focus</div>
                </div>
                <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800 col-span-2 sm:col-span-1">
                  <div className="font-serif text-xl font-bold text-gold">Ahmedabad-West</div>
                  <div className="text-[10px] text-grey uppercase tracking-wider mt-1">Prime Locality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities & Locality Focus */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase block font-bold">
            Prime Real Estate Hub • Ahmedabad-West
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Shilaj & Sindhu Bhavan Area.
          </h2>
          <div className="h-[1px] w-20 bg-gold" />
          <div className="space-y-4 font-sans text-xs tracking-wider text-grey leading-relaxed">
            <p>
              <strong className="text-white">Shilaj</strong> and <strong className="text-white">Sindhu Bhavan Road</strong> represent the epicenter of high-end real estate growth in <strong className="text-white">Ahmedabad-West</strong>. Known for wide tree-lined avenues, corporate hubs, and prime residential developments, this corridor is the most sought-after destination for homebuyers and investors.
            </p>
            <p>
              At <strong className="text-white">ONLY SPACE REALTY</strong>, we specialize across three primary property sectors in the Shilaj & Sindhu Bhavan Area:
            </p>
          </div>

          {/* 3 Categories: Residential, Commercial, Plot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#141414] p-5 rounded-2xl border border-gold/30 space-y-2 hover:border-gold transition-colors">
              <span className="font-serif text-lg font-bold text-white block">Residential</span>
              <p className="font-sans text-[11px] text-grey leading-relaxed">
                Luxury Apartments, Sky Duplexes, High-End Penthouses & Premium Gated Villas.
              </p>
            </div>
            <div className="bg-[#141414] p-5 rounded-2xl border border-gold/30 space-y-2 hover:border-gold transition-colors">
              <span className="font-serif text-lg font-bold text-white block">Commercial</span>
              <p className="font-sans text-[11px] text-grey leading-relaxed">
                Corporate Office Towers, Executive Workspaces, High-Street Retail & Showrooms.
              </p>
            </div>
            <div className="bg-[#141414] p-5 rounded-2xl border border-gold/30 space-y-2 hover:border-gold transition-colors">
              <span className="font-serif text-lg font-bold text-white block">Plot & Land</span>
              <p className="font-sans text-[11px] text-grey leading-relaxed">
                Prime Residential Land, High-ROI Commercial Plots & Strategic Land Deals.
              </p>
            </div>
          </div>

          {/* Corporate Clients We Work With */}
          <div className="pt-6 border-t border-neutral-800 space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gold shrink-0" />
              <span className="font-serif text-xs md:text-sm font-bold text-white tracking-wider uppercase">
                Working With Premier Corporate Clients
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#181818] p-3 rounded-xl border border-gold/30 text-center hover:border-gold transition-colors">
                <span className="font-serif text-xs text-white font-bold block">Torrent Pharma</span>
                <span className="text-[9px] text-gold uppercase tracking-wider block mt-0.5">Corporate Client</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-xl border border-gold/30 text-center hover:border-gold transition-colors">
                <span className="font-serif text-xs text-white font-bold block">Taj Skyline</span>
                <span className="text-[9px] text-gold uppercase tracking-wider block mt-0.5">Hospitality Client</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-xl border border-gold/30 text-center hover:border-gold transition-colors">
                <span className="font-serif text-xs text-white font-bold block">Eris Pharma</span>
                <span className="text-[9px] text-gold uppercase tracking-wider block mt-0.5">Pharma Client</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-xl border border-gold/30 text-center hover:border-gold transition-colors">
                <span className="font-serif text-xs text-white font-bold block">IT Companies</span>
                <span className="text-[9px] text-gold uppercase tracking-wider block mt-0.5">Tech Executives</span>
              </div>
            </div>
            <p className="text-[11px] font-sans text-grey italic pt-1">
              ...and many more corporate firms, HNI investors, and business leaders across Shilaj & Sindhu Bhavan Road.
            </p>
          </div>
        </div>

        {/* Visual Box */}
        <div className="lg:col-span-5 relative h-[460px] rounded-3xl overflow-hidden border border-neutral-900 shadow-2xl bg-neutral-950">
          <Image
            src="/assets/interior_living.png"
            alt="ONLY SPACE REALTY Luxury Interior lounge view"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#121212]/90 border border-gold/30 backdrop-blur-md">
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold block">Corporate Trust</span>
            <p className="font-serif text-xs text-white mt-1">
              Trusted by Torrent Pharma, Taj Skyline, Eris Pharma, IT Leaders & HNIs across Shilaj & Sindhu Bhavan Road.
            </p>
          </div>
        </div>
      </section>

      {/* Fact sheet table */}
      <section className="py-16 px-6 md:px-12 bg-[#0B0B0B]/30 border-y border-neutral-900 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <h3 className="font-serif text-2xl text-white text-center font-bold">
            Consultancy Specifications & Firm Overview
          </h3>
          <div className="max-w-3xl mx-auto overflow-hidden bg-[#121212]/50 border border-neutral-900 rounded-3xl shadow-2xl">
            <table className="w-full font-sans text-xs tracking-wide text-left text-neutral-300">
              <tbody>
                <tr className="border-b border-neutral-900">
                  <td className="px-6 py-4 font-semibold text-grey uppercase text-[10px] w-1/3 bg-[#181818]/60">Real Estate Consultant</td>
                  <td className="px-6 py-4 font-bold text-gold">ONLY SPACE REALTY (Est. Sept 21, 2017)</td>
                </tr>
                <tr className="border-b border-neutral-900">
                  <td className="px-6 py-4 font-semibold text-grey uppercase text-[10px] bg-[#181818]/60">Consultant Founder</td>
                  <td className="px-6 py-4">Dhrumit Darji (MBA Marketing, Real Estate exp. since 2015)</td>
                </tr>
                <tr className="border-b border-neutral-900">
                  <td className="px-6 py-4 font-semibold text-grey uppercase text-[10px] bg-[#181818]/60">Consultancy HQ</td>
                  <td className="px-6 py-4">Shilaj, Ahmedabad, Gujarat - 380059</td>
                </tr>
                <tr className="border-b border-neutral-900">
                  <td className="px-6 py-4 font-semibold text-grey uppercase text-[10px] bg-[#181818]/60">Specialties (Shilaj & Sindhu Bhavan)</td>
                  <td className="px-6 py-4 font-medium text-white">Residential, Commercial, Plot</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-grey uppercase text-[10px] bg-[#181818]/60">Working With Companies / Clients</td>
                  <td className="px-6 py-4 text-neutral-200 leading-relaxed">
                    <strong className="text-gold">Torrent Pharma</strong>, <strong className="text-gold">Taj Skyline</strong>, <strong className="text-gold">Eris Pharma</strong>, <strong className="text-gold">IT Companies</strong> &amp; many more
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Leadership message */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-8 text-center relative z-10">
        <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
          Consultancy Leadership Vision
        </span>
        <h2 className="font-serif text-3xl font-light text-white italic">
          “ONLY SPACE REALTY is built on client trust, transparent dealings, and long-term commitment. We empower buyers, sellers, and corporate clients to make confident real estate investments.”
        </h2>
        <div className="font-sans text-xs tracking-widest uppercase text-white font-bold mt-4">
          — Dhrumit Darji &amp; ONLY SPACE REALTY Team
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
