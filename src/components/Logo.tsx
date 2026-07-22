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
        <div className="relative h-10 w-36 md:w-44 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/assets/official_logo_dark.png"
            alt="ONLY SPACE REALTY Logo"
            fill
            sizes="(max-width: 768px) 144px, 176px"
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>
    );
  }

  if (variant === "footer" || variant === "card") {
    return (
      <Link href="/" className={`flex items-center group ${className}`}>
        <div className="relative h-12 w-44 md:w-52 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/assets/official_logo_dark.png"
            alt="ONLY SPACE REALTY Logo"
            fill
            sizes="208px"
            className="object-contain object-left"
          />
        </div>
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="relative h-8 w-32 shrink-0">
        <Image
          src="/assets/official_logo_dark.png"
          alt="ONLY SPACE REALTY Logo"
          fill
          sizes="128px"
          className="object-contain object-left"
        />
      </div>
    </div>
  );
}
