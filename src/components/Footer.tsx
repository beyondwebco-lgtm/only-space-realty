"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-neutral-900 py-16 px-6 md:px-12 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 space-y-6">
          <Logo variant="footer" />
          <p className="font-sans text-xs tracking-wider text-grey leading-relaxed">
            Your Trusted Real Estate Partner. Helping buyers, sellers, and investors make confident real estate decisions across Ahmedabad since 2015.
          </p>

        </div>

        <div>
          <h3 className="font-serif text-xs uppercase tracking-widest text-gold mb-6">Properties</h3>
          <ul className="space-y-3 font-sans text-xs tracking-wider text-neutral-300">
            <li>
              <Link href="/residences" className="hover:text-gold transition-colors">
                Luxury Apartments
              </Link>
            </li>
            <li>
              <Link href="/residences" className="hover:text-gold transition-colors">
                Modern Villas
              </Link>
            </li>
            <li>
              <Link href="/residences" className="hover:text-gold transition-colors">
                Commercial Offices
              </Link>
            </li>
            <li>
              <Link href="/residences" className="hover:text-gold transition-colors">
                Investment Projects
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold transition-colors">
                Property Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xs uppercase tracking-widest text-gold mb-6">Services</h3>
          <ul className="space-y-3 font-sans text-xs tracking-wider text-neutral-300">
            <li><Link href="/amenities" className="hover:text-gold transition-colors">Residential Properties</Link></li>
            <li><Link href="/amenities" className="hover:text-gold transition-colors">Commercial Properties</Link></li>
            <li><Link href="/amenities" className="hover:text-gold transition-colors">Luxury Villas & Plots</Link></li>
            <li><Link href="/amenities" className="hover:text-gold transition-colors">Property Investment</Link></li>
            <li><Link href="/amenities" className="hover:text-gold transition-colors">Rental & Home Loan Guidance</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xs uppercase tracking-widest text-gold mb-2">Contact Us</h3>
          <ul className="space-y-4 font-sans text-xs tracking-wider text-neutral-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Shilaj, Ahmedabad, Gujarat – 380059
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+918734848266" className="hover:text-gold transition-colors">+91 87348 48266</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              <a href="mailto:dhrumitdarji2512@gmail.com" className="hover:text-gold transition-colors break-all">dhrumitdarji2512@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-[10px] tracking-widest text-grey uppercase">
        <div className="text-center md:text-left space-y-1">
          <div>© {currentYear} ONLY SPACE REALTY. All Rights Reserved.</div>
          <div className="text-[9px] text-neutral-600">
            Registered Real Estate Consultancy | Ahmedabad, Gujarat
          </div>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gold transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
