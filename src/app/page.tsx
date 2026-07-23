"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Shield, Trees, Compass, Download, Award, ChevronRight, Map, Star, Building2, UserCheck, GraduationCap, Quote, MapPin, ShieldCheck, CheckCircle2, MessageCircle, Mail, Sparkles } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CinematicIntro from "@/components/CinematicIntro";
import MasterPlan from "@/components/MasterPlan";
import TowerExplorer from "@/components/TowerExplorer";
import BookingModal from "@/components/BookingModal";
import PriceBreakupModal from "@/components/PriceBreakupModal";
import ReviewsSection from "@/components/ReviewsSection";
import Logo from "@/components/Logo";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [priceBreakupOpen, setPriceBreakupOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      {/* 1. Preloader */}
      <CinematicIntro />

      {/* 2. Global Core Header */}
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* 3. Hero Visual Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-neutral-950 overflow-hidden">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/shilaj_circle_bg.png"
            alt="Shilaj, Ahmedabad, Gujarat — Real Estate Hub"
            fill
            priority
            className="object-cover opacity-60 scale-105 animate-[pulse_8s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/50 z-10" />
        </div>

        {/* Hero Copy overlay */}
        <div className="relative z-20 max-w-4xl text-center px-6 space-y-6 sm:space-y-8 mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="flex items-center justify-center gap-2 text-white font-sans text-xs tracking-[0.3em] uppercase"
          >
            <Compass className="h-4 w-4 text-gold animate-spin-slow" />
            Shilaj &amp; Sindhu Bhavan Road, Ahmedabad, Gujarat
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-wide leading-tight"
          >
            Discover Your Ideal<br />
            <span className="text-gold italic font-normal">Only Space.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="font-sans text-xs sm:text-sm tracking-widest text-neutral-300 max-w-xl mx-auto leading-relaxed"
          >
            Ahmedabad&apos;s premier real estate consultancy. Guiding luxury homebuyers and investors across Shilaj, Sindhu Bhavan Road, and SG Highway.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPriceBreakupOpen(true);
              }}
              className="w-full sm:w-auto bg-gold text-white font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full border border-gold hover:bg-white hover:text-charcoal hover:border-gold/30 transition-all duration-300 cursor-pointer shadow-lg font-bold inline-block text-center"
            >
              Get Price Breakup
            </button>
            <a
              href="#master-plan"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Explore Master Plan
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="font-sans text-[8px] tracking-[0.35em] text-neutral-400 uppercase font-bold">
            Scroll to Begin
          </span>
          <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-gold"
            />
          </div>
        </div>
      </section>

      {/* 4. Core Philosophy & Value Proposition */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A] relative z-10 border-y border-neutral-900/60">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Copy */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-sans font-bold tracking-[0.25em] uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" /> Our Guiding Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight"
            >
              Built on Trust, Strategic Insight &amp; Absolute Transparency.
            </motion.h2>

            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto tracking-wider"
            >
              At <strong className="text-white">ONLY SPACE REALTY</strong>, we believe acquiring high-value real estate in West Ahmedabad should be an empowering and seamless journey. Guided by Founder Dhrumit Darji (MBA, 10+ Years in Real Estate), we curate verified residential, commercial, and land assets with unwavering commitment to client success.
            </motion.p>
          </div>

          {/* 4 Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#141414]/90 border border-gold/20 hover:border-gold/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-sans text-gold uppercase tracking-widest font-bold block">Pillar 01</span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">100% Legal Transparency</h3>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  Every property title undergoes rigorous advocate verification to guarantee dispute-free legal ownership.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center gap-2 text-[10px] text-neutral-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" /> Verified Advocate Checks
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#141414]/90 border border-gold/20 hover:border-gold/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-sans text-gold uppercase tracking-widest font-bold block">Pillar 02</span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">West Ahmedabad Focus</h3>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  Unrivaled market intelligence across Shilaj, Sindhu Bhavan Road, and SG Highway.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center gap-2 text-[10px] text-neutral-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" /> Prime Growth Corridors
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#141414]/90 border border-gold/20 hover:border-gold/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <UserCheck className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-sans text-gold uppercase tracking-widest font-bold block">Pillar 03</span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">Direct Founder Consultation</h3>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  Personal advisory with Dhrumit Darji (MBA, 10+ Yrs Exp) for strategic negotiation and personalized matching.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center gap-2 text-[10px] text-neutral-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" /> Tailored Buyer Advocacy
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#141414]/90 border border-gold/20 hover:border-gold/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-sans text-gold uppercase tracking-widest font-bold block">Pillar 04</span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">End-to-End Seamless Service</h3>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  From site tours &amp; price negotiation to sub-registrar sale deed registration and home loan sanctioning.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center gap-2 text-[10px] text-neutral-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" /> Zero Hassle Guarantee
              </div>
            </motion.div>
          </div>

          {/* Bottom Highlights Banner */}
          <div className="bg-[#181818]/60 border border-neutral-800 rounded-2xl p-6 flex flex-wrap items-center justify-around gap-6 text-center">
            <div className="space-y-1">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold">2017</span>
              <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest block">Est. In Shilaj</span>
            </div>
            <div className="h-8 w-[1px] bg-neutral-800 hidden sm:block" />
            <div className="space-y-1">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold">10+ Years</span>
              <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest block">Real Estate Expertise</span>
            </div>
            <div className="h-8 w-[1px] bg-neutral-800 hidden sm:block" />
            <div className="space-y-1">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold">100%</span>
              <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest block">Verified Ownership</span>
            </div>
            <div className="h-8 w-[1px] bg-neutral-800 hidden sm:block" />
            <div className="space-y-1">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold">Torrent &amp; Taj</span>
              <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest block">Corporate Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Master Plan (Acreage and Zoning) */}
      <MasterPlan />

      {/* Strategic Advisory Process Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]/40 relative z-10 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase block font-bold">
                Consultancy Process
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
                How We Help You Secure Your Ideal Property.
              </h2>
              <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                At ONLY SPACE REALTY, we make real estate transactions in Ahmedabad West seamless, transparent, and rewarding. Here is our 4-step advisory process:
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="bg-[#141414] p-5 rounded-2xl border border-neutral-800 flex items-start gap-4 hover:border-gold/40 transition-all">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center font-serif text-sm font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Requirement Analysis &amp; Budgeting</h4>
                  <p className="font-sans text-xs text-grey leading-relaxed mt-1">
                    Direct consultation with Founder Dhrumit Darji to define your property location, budget, layout, and investment goals.
                  </p>
                </div>
              </div>

              <div className="bg-[#141414] p-5 rounded-2xl border border-neutral-800 flex items-start gap-4 hover:border-gold/40 transition-all">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center font-serif text-sm font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Curated Property Shortlisting</h4>
                  <p className="font-sans text-xs text-grey leading-relaxed mt-1">
                    Matching your preferences with 100% verified.
                  </p>
                </div>
              </div>

              <div className="bg-[#141414] p-5 rounded-2xl border border-neutral-800 flex items-start gap-4 hover:border-gold/40 transition-all">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center font-serif text-sm font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Direct Site Visits &amp; Price Negotiation</h4>
                  <p className="font-sans text-xs text-grey leading-relaxed mt-1">
                    Private guided site visits followed by direct builder/owner price negotiation to secure the best deal.
                  </p>
                </div>
              </div>

              <div className="bg-[#141414] p-5 rounded-2xl border border-neutral-800 flex items-start gap-4 hover:border-gold/40 transition-all">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center font-serif text-sm font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Legal Verification &amp; Registration</h4>
                  <p className="font-sans text-xs text-grey leading-relaxed mt-1">
                    Title check by legal advocates, home loan sanction assistance, and hassle-free sub-registrar sale deed registration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl border border-gold/30 shadow-2xl bg-[#121212] p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-8 relative z-10">
              <div>
                <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold mb-2">
                  Why Choose Us
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-bold">
                  Client Guarantees by ONLY SPACE REALTY
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-[#181818] p-4 rounded-2xl border border-neutral-800">
                  <ShieldCheck className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-serif text-base block">100% Title Verification</strong>
                    <span className="text-xs text-grey leading-relaxed block mt-0.5">Every property listing undergoes advocate title checks to guarantee clear legal ownership without disputes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#181818] p-4 rounded-2xl border border-neutral-800">
                  <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-serif text-base block">Zero Hidden Fees</strong>
                    <span className="text-xs text-grey leading-relaxed block mt-0.5">Complete clarity on market valuation, stamp duty, sub-registrar fees, and registration terms.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#181818] p-4 rounded-2xl border border-neutral-800">
                  <Award className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-serif text-base block">Corporate &amp; HNI Trusted</strong>
                    <span className="text-xs text-grey leading-relaxed block mt-0.5">Chosen by executives and companies from Torrent Pharma, Taj Skyline, Eris Pharma, and IT firms.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-800 relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-grey uppercase block font-bold">Headquarters Location</span>
                <span className="text-xs font-serif font-bold text-white">Shilaj, Ahmedabad West</span>
              </div>
              <a
                href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20book%20an%20advisory%20session%20with%20Dhrumit%20Darji."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest px-6 py-3.5 rounded-full font-bold cursor-pointer shadow-lg inline-block"
              >
                Book Advisory Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Residences Spotlight Grid */}
      <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="residences">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Title */}
          <div className="max-w-2xl space-y-4">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
              Prime Offerings • Shilaj & Sindhu Bhavan Area
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
              Our Property Specialities.
            </h2>
            <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
              Curated property deals in Ahmedabad-West backed by transparent dealings, reliable services, and commitment.
            </p>
          </div>

          {/* Cards Grid: Residential, Commercial, Plot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Residential */}
            <div className="bg-[#121212]/50 backdrop-blur rounded-3xl overflow-hidden border border-neutral-900 group shadow-2xl flex flex-col justify-between h-[520px]">
              <div className="space-y-6 p-8">
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold">
                  Living Estates
                </span>
                <h3 className="font-serif text-2xl text-white font-bold group-hover:text-gold transition-colors">
                  Residential Properties
                </h3>
                <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                  Premier 2, 3 & 4 BHK luxury apartments, sky duplexes, penthouses, and gated bungalow estates across Shilaj & Sindhu Bhavan Road.
                </p>
                <ul className="space-y-2 font-sans text-xs text-neutral-300">
                  <li>• Shilaj & Sindhu Bhavan Road prime corridors</li>
                  <li>• Gated security & multi-tier amenities</li>
                  <li>• High resale & rental yield advisory</li>
                </ul>
              </div>
              <div className="p-8 border-t border-neutral-900 bg-[#181818]/60 flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-white">Ahmedabad-West</span>
                <a
                  href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20consult%20on%20Residential%20Properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold font-bold hover:text-white transition-all"
                >
                  Consult Details
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Commercial */}
            <div className="bg-[#121212]/50 backdrop-blur rounded-3xl overflow-hidden border border-neutral-900 group shadow-2xl flex flex-col justify-between h-[520px]">
              <div className="space-y-6 p-8">
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold">
                  Corporate Spaces
                </span>
                <h3 className="font-serif text-2xl text-white font-bold group-hover:text-gold transition-colors">
                  Commercial Real Estate
                </h3>
                <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                  High-visibility commercial office spaces, corporate hubs, IT park units, and high-street retail showrooms on Sindhu Bhavan Road & SG Highway.
                </p>
                <ul className="space-y-2 font-sans text-xs text-neutral-300">
                  <li>• Prime Sindhu Bhavan Road frontage</li>
                  <li>• Pre-leased corporate income options</li>
                  <li>• Premium glass-facade corporate towers</li>
                </ul>
              </div>
              <div className="p-8 border-t border-neutral-900 bg-[#181818]/60 flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-white">Ahmedabad-West</span>
                <a
                  href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20consult%20on%20Commercial%20Real%20Estate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold font-bold hover:text-white transition-all"
                >
                  Consult Details
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Card 3: Plot & Land */}
            <div className="bg-[#121212] backdrop-blur rounded-3xl overflow-hidden border border-neutral-800 group shadow-2xl flex flex-col justify-between h-[520px] text-white">
              <div className="space-y-6 p-8">
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold">
                  Land Investment
                </span>
                <h3 className="font-serif text-2xl text-white font-bold group-hover:text-gold transition-colors">
                  Plot & Land Opportunities
                </h3>
                <p className="font-sans text-xs tracking-wider text-neutral-300 leading-relaxed">
                  Exclusive residential plots for custom villa construction and high-ROI commercial land parcels in Shilaj, Bopal, and surrounding Western Ahmedabad.
                </p>
                <ul className="space-y-2 font-sans text-xs text-neutral-300">
                  <li>• Clear title & verified land records</li>
                  <li>• Strategic Shilaj growth belt</li>
                  <li>• High appreciation land investments</li>
                </ul>
              </div>
              <div className="p-8 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-white">Ahmedabad-West</span>
                <a
                  href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20consult%20on%20Plot%20and%20Land%20Opportunities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold font-bold hover:text-white transition-all"
                >
                  Consult Details
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Consultancy Solutions Section */}
      <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="amenities">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
              Consultancy Solutions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
              End-to-End Real Estate Services.
            </h2>
            <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
              ONLY SPACE REALTY provides a full suite of property solutions for homebuyers, corporate tenants, and investors across Shilaj and Sindhu Bhavan Road.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-900">
              <div className="space-y-2">
                <Building2 className="h-6 w-6 text-gold" />
                <h4 className="font-serif text-sm font-bold text-white">Commercial Leasing</h4>
                <p className="font-sans text-[10px] tracking-wider text-grey leading-relaxed">
                  Corporate office towers, retail showrooms, and pre-leased ROI investment units on SBR.
                </p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="h-6 w-6 text-gold" />
                <h4 className="font-serif text-sm font-bold text-white">Verified Title Due Diligence</h4>
                <p className="font-sans text-[10px] tracking-wider text-grey leading-relaxed">
                  100% legal advocate checks, clear title verification, and sub-registrar registration support.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/amenities"
                className="inline-flex items-center gap-2 border border-neutral-800 text-white hover:bg-gold hover:border-gold transition-all duration-300 text-xs uppercase tracking-widest px-6 py-3.5 rounded-full font-sans font-bold"
              >
                View All Consultancy Services
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Consultant Spotlight Showcase Box */}
          <div className="lg:col-span-7 relative h-[420px] rounded-3xl overflow-hidden border border-gold/40 shadow-2xl bg-[#121212] flex items-center">
            {/* Background elements */}
            <Image
              src="/assets/shilp_one_v2.png"
              alt="ONLY SPACE REALTY Corporate Property Advisory"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10" />

            <div className="relative z-20 p-8 md:p-10 text-white space-y-4 max-w-md">
              <span className="font-sans text-[9px] tracking-widest text-gold uppercase font-bold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full inline-block">
                Consultant Spotlight • Founder Advisory
              </span>
              <h4 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Direct Guidance from Founder Dhrumit Darji
              </h4>
              <p className="font-sans text-xs tracking-wider text-neutral-300 leading-relaxed">
                MBA with 10+ years of dedicated real estate experience in Ahmedabad West. Personally guiding your property search across West Ahmedabad.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/918734848266?text=Hello%20Dhrumit%20Darji,%20I%20would%20like%20to%20book%20a%20founder%20advisory%20session%20with%20Only%20Space%20Realty."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-neutral-950 hover:bg-white hover:text-neutral-950 transition-all text-[10px] uppercase tracking-widest px-6 py-3 rounded-full font-bold cursor-pointer inline-flex items-center gap-2 shadow-lg"
                >
                  Book Founder Session &rarr;
                </a>
              </div>
            </div>

            {/* Founder Portrait cutout overlay */}
            <div className="hidden sm:block absolute right-2 bottom-0 z-20 w-52 md:w-60 h-[390px]">
              <Image
                src="/assets/founder_suit.png"
                alt="Dhrumit Darji - Founder Only Space Realty"
                fill
                className="object-contain object-bottom filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Authentic Customer Reviews Component */}
      <ReviewsSection />

      {/* 11. Custom VIP booking CTA section */}
      <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="contact">
        <div className="max-w-4xl mx-auto text-center space-y-12 border border-neutral-900 rounded-3xl py-16 px-8 bg-[#121212]/30 backdrop-blur relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold block">
              Private Reservation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
              Begin Your Legacy.
            </h2>
            <p className="font-sans text-xs tracking-wider text-grey max-w-md mx-auto leading-relaxed">
              We welcome distinguished high-net-worth clients for scheduled site explorations. Register below to coordinate directly with our sales team and receive consulting from our sales team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs mx-auto">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPriceBreakupOpen(true);
              }}
              className="w-full bg-white text-charcoal text-xs uppercase tracking-widest py-4 rounded-full border border-white hover:bg-gold hover:text-white hover:border-gold transition-all cursor-pointer shadow-lg font-bold text-center"
            >
              Get Price Breakup
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-8 text-[9px] tracking-widest text-grey uppercase font-sans">
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-gold" /> Secure Consultation
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-gold" /> VIP Site Coordinator
            </div>
          </div>
        </div>
      </section>

      {/* 12. Global Premium Footer */}
      <Footer />



      {/* 14. Preview Booking & Price Breakup Modals */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <PriceBreakupModal isOpen={priceBreakupOpen} onClose={() => setPriceBreakupOpen(false)} />
    </div>
  );
}
