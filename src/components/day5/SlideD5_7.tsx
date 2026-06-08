"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function SlideD5_7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center z-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-24 h-24 bg-emerald-500/15 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <Search className="w-12 h-12 text-emerald-400" />
        </motion.div>
        
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 3</h2>
        <h1 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-10">
          DISSECTING<br />CAREERGPS
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-3xl text-zinc-400 font-light mb-4">
          "This is where things get interesting."
        </motion.p>
      </motion.div>
    </div>
  );
}
