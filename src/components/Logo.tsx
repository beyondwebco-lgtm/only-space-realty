"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "header" | "footer" | "card" | "inline";
  className?: string;
}

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  if (variant === "header") {
    return (
      <Link href="/" className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
        {/* Luxury Gold/Red Architectural Skyline Emblem */}
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C1C1C] via-[#121212] to-[#0A0A0A] border border-gold/40 flex items-center justify-center p-1.5 shadow-xl group-hover:border-gold transition-all duration-300 group-hover:scale-105 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Left Tower */}
            <path d="M22,42 L38,34 L38,72 L22,78 Z" fill="#D4AF37" opacity="0.95" />
            {/* Center Red Highrise */}
            <path d="M42,20 L58,12 L58,62 L42,68 Z" fill="#E53935" />
            {/* Center Tower Windows */}
            <line x1="48" y1="20" x2="55" y2="16" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="48" y1="27" x2="55" y2="23" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="48" y1="34" x2="55" y2="30" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="48" y1="41" x2="55" y2="37" stroke="#FFFFFF" strokeWidth="2.5" />
            {/* Right Tower */}
            <path d="M62,34 L78,42 L78,78 L62,72 Z" fill="#D4AF37" opacity="0.95" />
            {/* Pitched Roof Frame */}
            <path d="M18,72 L50,45 L82,72 L82,76 L50,51 L18,76 Z" fill="#FFFFFF" />
            <path d="M25,72 L50,50 L75,72" fill="none" stroke="#E53935" strokeWidth="3" />
            {/* Red Grid Windows under roof */}
            <rect x="44" y="60" width="5" height="5" fill="#E53935" />
            <rect x="51" y="60" width="5" height="5" fill="#E53935" />
            <rect x="44" y="67" width="5" height="5" fill="#E53935" />
            <rect x="51" y="67" width="5" height="5" fill="#E53935" />
          </svg>
        </div>

        {/* Premium Typography */}
        <div className="flex flex-col justify-center">
          <span className="font-serif text-base md:text-lg font-bold tracking-[0.16em] text-white leading-none">
            ONLY SPACE
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-gradient-to-r from-transparent to-[#E53935]" />
            <span className="font-sans text-[9px] font-black tracking-[0.28em] text-[#E53935] uppercase leading-none">
              REALTY
            </span>
            <span className="h-[1px] w-3 bg-gradient-to-l from-transparent to-[#E53935]" />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "footer" || variant === "card") {
    return (
      <Link href="/" className={`flex items-center gap-4 group ${className}`}>
        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E1E1E] via-[#141414] to-[#0A0A0A] border border-gold/50 flex items-center justify-center p-2 shadow-2xl group-hover:border-gold transition-all duration-300 group-hover:scale-105 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M22,42 L38,34 L38,72 L22,78 Z" fill="#D4AF37" opacity="0.95" />
            <path d="M42,20 L58,12 L58,62 L42,68 Z" fill="#E53935" />
            <line x1="48" y1="20" x2="55" y2="16" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="48" y1="27" x2="55" y2="23" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="48" y1="34" x2="55" y2="30" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="48" y1="41" x2="55" y2="37" stroke="#FFFFFF" strokeWidth="2.5" />
            <path d="M62,34 L78,42 L78,78 L62,72 Z" fill="#D4AF37" opacity="0.95" />
            <path d="M18,72 L50,45 L82,72 L82,76 L50,51 L18,76 Z" fill="#FFFFFF" />
            <path d="M25,72 L50,50 L75,72" fill="none" stroke="#E53935" strokeWidth="3" />
            <rect x="44" y="60" width="5" height="5" fill="#E53935" />
            <rect x="51" y="60" width="5" height="5" fill="#E53935" />
            <rect x="44" y="67" width="5" height="5" fill="#E53935" />
            <rect x="51" y="67" width="5" height="5" fill="#E53935" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg md:text-xl font-bold tracking-[0.18em] text-white leading-tight">
            ONLY SPACE
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-[#E53935]" />
            <span className="font-sans text-[10px] font-black tracking-[0.28em] text-[#E53935] uppercase">
              REALTY
            </span>
            <span className="h-[1px] w-3 bg-[#E53935]" />
          </div>
          <span className="font-sans text-[8px] tracking-[0.2em] text-gold uppercase mt-1 font-semibold">
            Your Trusted Property Partner
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-9 h-9 rounded-xl bg-neutral-900 border border-gold/40 flex items-center justify-center p-1.5 shadow-md shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M22,42 L38,34 L38,72 L22,78 Z" fill="#D4AF37" />
          <path d="M42,20 L58,12 L58,62 L42,68 Z" fill="#E53935" />
          <path d="M62,34 L78,42 L78,78 L62,72 Z" fill="#D4AF37" />
          <path d="M18,72 L50,45 L82,72" fill="none" stroke="#FFFFFF" strokeWidth="4" />
        </svg>
      </div>
      <div>
        <span className="font-serif text-base font-bold tracking-widest text-white block leading-none">ONLY SPACE</span>
        <span className="font-sans text-[9px] font-black tracking-widest text-[#E53935] uppercase block mt-1">REALTY</span>
      </div>
    </div>
  );
}
