"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0A0A0A]">
      {/* Background Noise Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />

      {/* Floating Orb 1 (Gold/Bronze) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[130px]"
      />

      {/* Floating Orb 2 (Charcoal / Muted Gold) */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -120, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px]"
      />

      {/* Floating Orb 3 (Soft Beige/White) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 left-1/2 w-[350px] h-[350px] rounded-full bg-neutral-800/20 blur-[120px]"
      />
    </div>
  );
}
