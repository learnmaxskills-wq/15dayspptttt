"use client";

import { motion } from "framer-motion";
import { ArrowDown, X, Check } from "lucide-react";

export function SlideD7_3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-display font-black text-white mb-16 z-10">THE TRAP</motion.h1>

      <div className="w-full max-w-5xl grid grid-cols-2 gap-16 z-10 px-8">
        {/* Beginner */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-red-500/5 border border-red-500/20 rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-8"><X className="w-8 h-8 text-red-500" /><p className="text-red-400 font-mono text-sm uppercase tracking-widest">Beginner</p></div>
          <div className="flex flex-col items-center gap-3">
            {["BEGINNER", "BUILD EVERYTHING", "FAIL"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`px-10 py-4 rounded-2xl border ${i === 2 ? "bg-red-500/15 border-red-500/50 text-red-400" : "bg-zinc-900/50 border-zinc-700 text-zinc-400"} text-2xl font-display font-bold`}>{step}</div>
                {i < 2 && <ArrowDown className="w-5 h-5 text-red-500/30 my-2" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Founder */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-indigo-500/5 border border-indigo-500/30 rounded-3xl p-10 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
          <div className="flex items-center gap-3 mb-8"><Check className="w-8 h-8 text-indigo-400" /><p className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Founder</p></div>
          <div className="flex flex-col items-center gap-3">
            {["FOUNDER", "BUILD ESSENTIALS", "LAUNCH"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`px-10 py-4 rounded-2xl border ${i === 2 ? "bg-indigo-500/15 border-indigo-500 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.3)]" : "bg-zinc-900/50 border-indigo-500/30 text-indigo-200"} text-2xl font-display font-bold`}>{step}</div>
                {i < 2 && <ArrowDown className="w-5 h-5 text-indigo-500/30 my-2" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-14 text-2xl text-indigo-300 font-display font-bold z-10">We're building <span className="text-white">Version 1.</span> Not Version 100.</motion.p>
    </div>
  );
}
