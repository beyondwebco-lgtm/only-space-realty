"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-auto">
      {/* Phone Call Quick Button */}
      <a
        href="tel:+918734848266"
        aria-label="Call Only Space Realty"
        className="w-12 h-12 rounded-full bg-neutral-900 border border-gold/40 text-gold shadow-2xl flex items-center justify-center hover:bg-gold hover:text-black hover:scale-110 transition-all duration-300 group"
      >
        <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20am%20interested%20in%20exploring%20properties%20in%20Ahmedabad."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 border border-emerald-400 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
