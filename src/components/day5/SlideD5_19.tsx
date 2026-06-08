"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function SlideD5_19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/15 blur-[200px] rounded-full pointer-events-none" />

      {/* Grid Scan line */}
      <motion.div className="absolute left-0 right-0 h-[2px] bg-emerald-500/40 pointer-events-none shadow-[0_0_20px_rgba(16,185,129,0.8)]"
        animate={{ y: ["-10vh", "110vh"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 100 }} className="mb-12">
          <Rocket className="w-20 h-20 text-emerald-400 mx-auto" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, type: "spring", stiffness: 120 }}
          className="text-6xl md:text-[90px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 leading-tight mb-12">
          YOU'LL HAVE A LIVE STARTUP ON THE INTERNET.
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/40 px-16 py-8 rounded-full inline-block shadow-[0_0_60px_rgba(16,185,129,0.3)]">
          <p className="text-4xl text-white font-light">"And that, is where the <strong className="font-bold">real game begins.</strong>" 🚀</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
