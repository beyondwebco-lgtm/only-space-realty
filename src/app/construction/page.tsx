"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIInquiry from "@/components/AIInquiry";
import BookingModal from "@/components/BookingModal";
import { HardHat, Calendar, CheckCircle2, ShieldAlert } from "lucide-react";

export default function ConstructionUpdatesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const timelineSteps = [
    {
      quarter: "Q1 2026",
      title: "Excavation & Piling Complete",
      status: "completed",
      description: "Deep foundation excavation across all 24 acres. Structural pile loading tests audited and cleared by IIT engineering panels.",
    },
    {
      quarter: "Q3 2026",
      title: "Podium & Subgrade Framework",
      status: "completed",
      description: "Construction of double-height basement parking gates, retaining structures, and structural concrete podium slabs completed.",
    },
    {
      quarter: "Q1 2027",
      title: "Tower 1 & 2 Core Framing",
      status: "current",
      description: "Superstructure framing of Aether and Helios towers currently active. Tower 1 concrete casting cleared up to level 28.",
    },
    {
      quarter: "Q4 2027",
      title: "Glass Glazing Envelope",
      status: "upcoming",
      description: "Installation of high-performance double-glazed acoustic glass wall trimmings across the exterior tower shells.",
    },
    {
      quarter: "Q2 2028",
      title: "Interior Finishes & Automation",
      status: "upcoming",
      description: "Laying Calacatta Gold marble flooring, fitting Valcucine kitchens, and programming biometric home systems.",
    },
    {
      quarter: "Q4 2028",
      title: "Handover & Occupancy Code",
      status: "upcoming",
      description: "RERA structural handovers and activation of private preview residency keys for all six signature towers.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-100 font-sans overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-neutral-950/40 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase block font-bold">
            The Progress
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white">
            Construction Milestones.
          </h1>
          <p className="font-sans text-xs tracking-wider text-grey max-w-xl leading-relaxed">
            ONLY SPACE REALTY projects are built to outlast generations. Monitor our live quarterly construction progress logs, engineering tests, and RERA filing logs.
          </p>
        </div>
      </section>

      {/* Progress Bar Overview */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        <div className="bg-[#121212]/50 border border-neutral-900 rounded-3xl p-8 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-sans text-[10px] tracking-widest text-grey uppercase block">Overall Project Completion</span>
              <span className="font-serif text-2xl font-bold text-white">38% Complete</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gold/10 text-gold border border-gold/20 px-4 py-2 rounded-full font-sans text-[10px] tracking-wider uppercase font-semibold">
              <HardHat className="h-4.5 w-4.5 text-gold" />
              On Schedule
            </div>
          </div>
          <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden">
            <div className="h-full bg-gold rounded-full w-[38%]" />
          </div>
        </div>
      </section>

      {/* Timeline List */}
      <section className="py-12 px-6 md:px-12 max-w-3xl mx-auto space-y-12 relative z-10">
        <h3 className="font-serif text-2xl font-bold text-white text-center mb-8">
          Development Timeline
        </h3>

        <div className="relative border-l border-neutral-800 pl-8 ml-4 space-y-12">
          {timelineSteps.map((step, idx) => {
            const isCompleted = step.status === "completed";
            const isCurrent = step.status === "current";
            return (
              <div key={idx} className="relative">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-12 top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    isCompleted
                      ? "bg-gold border-gold text-white"
                      : isCurrent
                      ? "bg-[#0A0A0A] border-gold text-gold"
                      : "bg-neutral-900 border-neutral-800 text-neutral-600"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  ) : (
                    <Calendar className="h-4 w-4" />
                  )}
                </div>

                {/* Content box */}
                <div className={`p-6 rounded-2xl border ${
                  isCurrent ? "bg-gold/10 border-gold/40 shadow-2xl" : "bg-[#121212]/40 border-neutral-900"
                } space-y-2`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold">
                      {step.quarter}
                    </span>
                    <span className={`font-sans text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                      isCompleted
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-900"
                        : isCurrent
                        ? "bg-amber-950/40 text-amber-400 border-amber-900"
                        : "bg-neutral-900/60 text-neutral-500 border-neutral-800"
                    }`}>
                      {step.status === "completed" ? "Verified" : step.status === "current" ? "Active" : "Upcoming"}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RERA Warning callout */}
      <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        <div className="bg-[#121212]/50 border border-neutral-900 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4 text-xs text-grey tracking-wide leading-relaxed">
          <ShieldAlert className="h-8 w-8 text-gold shrink-0" />
          <p>
            * Handover dates and structural timelines are registered under TS RERA project logs. Standard audit certificates from concrete testing labs are updated monthly at the local project center in Gandipet.
          </p>
        </div>
      </section>

      <Footer />
      <AIInquiry />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
