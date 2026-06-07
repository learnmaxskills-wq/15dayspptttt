"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SlideD4_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/8 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-cyan-500/40 rounded-full flex items-center justify-center mx-auto mb-14 shadow-[0_0_80px_rgba(6,182,212,0.3)]">
          <Sparkles className="w-12 h-12 text-cyan-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-4xl text-zinc-400 font-light mb-12">
          "AI doesn't <span className="text-zinc-500 line-through decoration-red-500/60 decoration-4">replace</span> founders."
        </motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
          className="text-6xl md:text-[100px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 leading-none">
          IT AMPLIFIES FOUNDERS.
        </motion.h1>
      </motion.div>
    </div>
  );
}
