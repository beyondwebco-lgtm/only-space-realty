"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, PhoneCall, Sparkles } from "lucide-react";

interface PriceBreakupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PriceBreakupModal({ isOpen, onClose }: PriceBreakupModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => {
    setErrorMsg("");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for required fields
    if (!name.trim() || !mobile.trim() || !interestedIn) {
      setErrorMsg("Please fill in your Name, Mobile Number, and Interested In category.");
      return;
    }

    setErrorMsg("");

    // Build exact WhatsApp message format
    const rawMsg = `Hello Only Space Realty,

I would like to request the detailed price breakup.

Name: ${name.trim()}
Mobile: ${mobile.trim()}
Interested In: ${interestedIn}
Preferred Location: ${location ? location : "Not Specified"}
Budget: ${budget ? budget : "Not Specified"}

Please share the complete price breakup, brochure, floor plans, payment plan, and available inventory.

Thank you.`;

    const whatsappUrl = `https://wa.me/918734848266?text=${encodeURIComponent(rawMsg)}`;

    try {
      const opened = window.open(whatsappUrl, "_blank");
      if (!opened || opened.closed || typeof opened.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }

    // Reset form and close modal
    setName("");
    setMobile("");
    setEmail("");
    setInterestedIn("");
    setLocation("");
    setBudget("");
    handleClose();
  };

  if (!mounted || typeof document === "undefined" || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6">
      {/* Glass Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
        className="absolute inset-0 bg-neutral-950/85 backdrop-blur-xl pointer-events-auto"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.4, damping: 25 }}
        className="relative w-full max-w-lg bg-[#121212] border border-gold/40 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto pointer-events-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer p-1.5 rounded-full hover:bg-neutral-800"
          aria-label="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Only Space Realty
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide">
              Request Price Breakup
            </h3>
            <p className="font-sans text-xs text-grey leading-relaxed">
              Provide your details below to receive direct floor plans, consulting from our sales team, and pricing breakdowns on WhatsApp.
            </p>
          </div>

          {/* Validation Error Banner */}
          {errorMsg && (
            <div className="bg-red-950/60 border border-red-500/60 text-red-300 text-xs px-4 py-2.5 rounded-xl font-sans font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name (Required) */}
            <div className="space-y-1">
              <label className="font-sans text-[10px] tracking-wider text-grey uppercase block font-bold">
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Dhrumit Darji"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
              />
            </div>

            {/* Dual Grid: Mobile Number (Required) & Email Address (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-sans text-[10px] tracking-wider text-grey uppercase block font-bold">
                  Mobile Number <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 8734848266"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                />
              </div>
              <div className="space-y-1">
                <label className="font-sans text-[10px] tracking-wider text-grey uppercase block font-bold">
                  Email Address <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                />
              </div>
            </div>

            {/* Interested In (Required Dropdown) */}
            <div className="space-y-1">
              <label className="font-sans text-[10px] tracking-wider text-grey uppercase block font-bold">
                Interested In <span className="text-gold">*</span>
              </label>
              <select
                value={interestedIn}
                onChange={(e) => setInterestedIn(e.target.value)}
                className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans cursor-pointer"
              >
                <option value="" disabled className="bg-[#121212] text-neutral-500">
                  Select Category...
                </option>
                <option value="Residential" className="bg-[#121212] text-white">
                  Residential (2, 3 & 4 BHK)
                </option>
                <option value="Commercial" className="bg-[#121212] text-white">
                  Commercial (Offices & Retail)
                </option>
                <option value="Plot / Land" className="bg-[#121212] text-white">
                  Plot / Land (Verified Parcels)
                </option>
              </select>
            </div>

            {/* Dual Grid: Preferred Location (Optional) & Budget Range (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-sans text-[10px] tracking-wider text-grey uppercase block font-bold">
                  Preferred Location <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans cursor-pointer"
                >
                  <option value="" className="bg-[#121212] text-neutral-500">
                    Select Location...
                  </option>
                  <option value="Shilaj Area" className="bg-[#121212] text-white">
                    Shilaj Area
                  </option>
                  <option value="Sindhu Bhavan Road (SBR)" className="bg-[#121212] text-white">
                    Sindhu Bhavan Road (SBR)
                  </option>
                  <option value="Bodakdev & SG Highway" className="bg-[#121212] text-white">
                    Bodakdev & SG Highway
                  </option>
                  <option value="Ambli Area" className="bg-[#121212] text-white">
                    Ambli Area
                  </option>
                  <option value="Science City & Science Park" className="bg-[#121212] text-white">
                    Science City &amp; Science Park
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-sans text-[10px] tracking-wider text-grey uppercase block font-bold">
                  Budget Range <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans cursor-pointer"
                >
                  <option value="" className="bg-[#121212] text-neutral-500">
                    Select Budget...
                  </option>
                  <option value="Under ₹1.50 Cr" className="bg-[#121212] text-white">
                    Under ₹1.50 Cr
                  </option>
                  <option value="₹1.50 Cr – ₹3.00 Cr" className="bg-[#121212] text-white">
                    ₹1.50 Cr – ₹3.00 Cr
                  </option>
                  <option value="₹3.00 Cr – ₹5.00 Cr" className="bg-[#121212] text-white">
                    ₹3.00 Cr – ₹5.00 Cr
                  </option>
                  <option value="₹5.00 Cr – ₹10.00 Cr" className="bg-[#121212] text-white">
                    ₹5.00 Cr – ₹10.00 Cr
                  </option>
                  <option value="₹10.00 Cr+" className="bg-[#121212] text-white">
                    ₹10.00 Cr+
                  </option>
                </select>
              </div>
            </div>

            {/* Form Action Buttons: Cancel & Submit */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-neutral-800 mt-6">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-widest text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gold text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-widest px-8 py-3.5 rounded-full font-bold cursor-pointer shadow-xl flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4" /> Get Price Breakup
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
