"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600); // Small pause at 100%
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.9 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          {/* Subtle gold grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

          <div className="max-w-xl text-center px-6 space-y-12 relative z-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase"
              >
                ONLY SPACE REALTY • Real Estate Consultant
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.5 }}
                className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight"
              >
                Where Every Home<br />Tells a Story. Let's Write Yours.
              </motion.h1>
            </div>

            <div className="flex flex-col items-center justify-center space-y-3 pt-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full rotate-270">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#161616"
                    strokeWidth="1.5"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#C9A96A"
                    strokeWidth="1.5"
                    fill="transparent"
                    strokeDasharray={126}
                    strokeDashoffset={126 - (126 * progress) / 100}
                    transition={{ ease: "easeOut" }}
                  />
                </svg>
                <span className="font-sans text-[10px] tracking-widest text-white font-medium">
                  {progress}%
                </span>
              </div>
              <span className="font-sans text-[8px] tracking-[0.2em] text-grey uppercase">
                Initiating Luxury Preview
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
