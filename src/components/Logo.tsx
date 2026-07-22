"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer" | "card" | "inline";
  className?: string;
}

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  if (variant === "header") {
    return (
      <Link href="/" className={`flex items-center group cursor-pointer ${className}`}>
        <div className="bg-white/95 hover:bg-white rounded-xl px-3.5 py-1.5 flex items-center justify-center border border-white/40 shadow-lg transition-all duration-300 group-hover:scale-105">
          <div className="relative h-8 w-32 md:w-36">
            <Image
              src="/assets/official_logo.png"
              alt="ONLY SPACE REALTY Logo"
              fill
              sizes="(max-width: 768px) 128px, 144px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "footer" || variant === "card") {
    return (
      <Link href="/" className={`flex items-center group ${className}`}>
        <div className="bg-white rounded-2xl px-4 py-2.5 inline-flex items-center justify-center border border-white/50 shadow-xl transition-all duration-300 group-hover:scale-105">
          <div className="relative h-10 w-40 md:w-44">
            <Image
              src="/assets/official_logo.png"
              alt="ONLY SPACE REALTY Logo"
              fill
              sizes="176px"
              className="object-contain"
            />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="bg-white rounded-lg px-2.5 py-1 inline-flex items-center justify-center border border-white/30 shadow-md">
        <div className="relative h-6 w-24">
          <Image
            src="/assets/official_logo.png"
            alt="ONLY SPACE REALTY Logo"
            fill
            sizes="96px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
