"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "@/components/Logo";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/residences" },
    { name: "Services", href: "/amenities" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#0E0E0E] border border-neutral-800/90 pointer-events-auto rounded-full px-6 py-3 shadow-2xl transition-all duration-300 hover:border-gold/40">
          <Logo variant="header" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-sans text-xs uppercase tracking-widest text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20book%20a%20real%20estate%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-white text-charcoal text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border border-white hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 cursor-pointer shadow-sm font-bold"
            >
              Book Consultation
              <ArrowRight className="h-3 w-3" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full md:hidden text-white hover:bg-neutral-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-md flex justify-end md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              className="w-4/5 max-w-sm bg-[#111111] border-l border-neutral-800 h-full shadow-2xl p-8 flex flex-col justify-between"
            >
              <div className="space-y-8 mt-16">
                <div className="border-b border-neutral-800 pb-4">
                  <Logo variant="header" />
                </div>
                <nav className="flex flex-col gap-6">
                  {menuItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={item.name}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`font-serif text-lg tracking-wider block ${
                            isActive ? "text-gold font-semibold" : "text-neutral-300 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/918734848266?text=Hello%20Only%20Space%20Realty,%20I%20would%20like%20to%20book%20a%20real%20estate%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-white text-xs uppercase tracking-widest py-4 rounded-full hover:bg-white hover:text-charcoal transition-colors cursor-pointer font-bold"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <div className="text-center font-sans text-[10px] tracking-widest text-grey uppercase">
                  Ahmedabad, Gujarat
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
