"use client";

import { motion } from "framer-motion";

export function SlideD5_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 1</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Biggest Lie About Startups</h1>
      </motion.div>

      <div className="z-10 flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-3xl text-zinc-400 font-light mb-16">
          When you open Instagram, what do you see?
        </motion.p>

        <div className="flex items-center gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            Instagram
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring" }} className="text-6xl font-mono font-bold text-red-500">
            ≠
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} className="text-6xl font-display font-black text-zinc-500 line-through decoration-red-500/50 decoration-4">
            App
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="bg-emerald-500/10 border border-emerald-500/30 px-12 py-8 rounded-3xl text-center">
          <p className="text-4xl font-display font-bold text-white mb-4">Instagram</p>
          <p className="text-3xl font-mono text-emerald-400">=</p>
          <p className="text-3xl font-display font-bold text-emerald-300 mt-4">20 Systems Working Together</p>
        </motion.div>
      </div>
    </div>
  );
}
