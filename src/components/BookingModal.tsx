"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Sparkles, Check, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [success, setSuccess] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    propertyType: "residential",
    location: "shilaj",
    budget: "50-100",
    servicesNeeded: [] as string[],
  });

  const serviceOptions = [
    "Buying Assistance",
    "Selling / Listing Property",
    "Commercial Investment",
    "Home Loan & Legal Guidance",
  ];

  const toggleOption = (opt: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(opt)
        ? prev.servicesNeeded.filter((x) => x !== opt)
        : [...prev.servicesNeeded, opt],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "OSR-";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPasscode(code);
    setSuccess(true);
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      propertyType: "residential",
      location: "shilaj",
      budget: "50-100",
      servicesNeeded: [],
    });
    onClose();
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Glass Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-lg bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase font-bold block">
                    Only Space Realty
                  </span>
                  <h3 className="font-serif text-2xl text-white font-semibold">
                    Book Free Consultation
                  </h3>
                  <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
                    Connect directly with our experienced real estate consultants in Ahmedabad. We will review your property requirements and present curated options.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] tracking-wider text-grey uppercase block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                    />
                  </div>

                  {/* Dual Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] tracking-wider text-grey uppercase block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] tracking-wider text-grey uppercase block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Property Type & Location Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] tracking-wider text-grey uppercase block">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                      >
                        <option value="residential">Residential Apartments</option>
                        <option value="villa">Luxury Villas</option>
                        <option value="commercial">Commercial Offices</option>
                        <option value="plot">Plots & Land</option>
                        <option value="investment">Property Investment</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[10px] tracking-wider text-grey uppercase block">Preferred Location</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                      >
                        <option value="shilaj">Shilaj Area</option>
                        <option value="sbr">Sindhu Bhavan Road</option>
                        <option value="bodakdev">Bodakdev</option>
                        <option value="science-city">Science City &amp; Science Park</option>
                        <option value="sg-highway">SG Highway</option>
                        <option value="ambli">Ambli Bopal Road</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] tracking-wider text-grey uppercase block flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gold" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] tracking-wider text-grey uppercase block flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gold" /> Preferred Time
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-gold/60 focus:bg-neutral-900 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Service options checkboxes */}
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] tracking-wider text-grey uppercase block">Consultation Interest</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {serviceOptions.map((opt) => {
                        const active = formData.servicesNeeded.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => toggleOption(opt)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-left cursor-pointer transition-all ${
                              active
                                ? "border-gold bg-gold/10 text-white"
                                : "border-neutral-800 bg-[#181818]/40 text-neutral-400 hover:border-neutral-700"
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                              active ? "border-gold bg-gold text-white" : "border-neutral-700"
                            }`}>
                              {active && <Check className="h-2 w-2" />}
                            </span>
                            <span className="font-sans text-[10px] tracking-wide">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white text-charcoal text-xs uppercase tracking-widest py-4 rounded-full border border-white hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 cursor-pointer shadow-lg font-bold"
                >
                  Confirm Consultation Request
                  <ArrowRight className="h-4 w-4 text-gold" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto text-gold animate-[pulse_3s_infinite]">
                  <Sparkles className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase font-bold block">
                    Consultation Requested
                  </span>
                  <h3 className="font-serif text-2xl text-white font-semibold">
                    Thank You, {formData.name}
                  </h3>
                  <p className="font-sans text-xs tracking-wider text-grey leading-relaxed max-w-sm mx-auto">
                    Your consultation request has been submitted successfully. A dedicated property advisor from Only Space Realty will call you shortly.
                  </p>
                </div>

                {/* Booking Pass Display */}
                <div className="bg-[#181818] border border-neutral-800 p-6 rounded-2xl max-w-xs mx-auto space-y-4">
                  <div className="text-[10px] tracking-[0.2em] text-grey uppercase font-sans">
                    Consultation Ref Code
                  </div>
                  <div className="font-mono text-xl tracking-[0.2em] text-white font-bold">
                    {passcode}
                  </div>
                  <div className="border-t border-neutral-900 pt-3 flex justify-between text-[8px] tracking-widest text-neutral-400 uppercase font-sans">
                    <div>{formData.date || "Today"}</div>
                    <div>{formData.time || "Scheduled"}</div>
                  </div>
                </div>

                <button
                  onClick={handleCloseSuccess}
                  className="w-full bg-white text-charcoal text-xs uppercase tracking-widest py-3.5 rounded-full hover:bg-gold hover:text-white transition-colors cursor-pointer font-bold"
                >
                  Close Confirmation
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>,
        document.body
      )}
    </AnimatePresence>
  );
}
