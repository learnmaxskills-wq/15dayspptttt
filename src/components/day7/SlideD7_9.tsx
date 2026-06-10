"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function SlideD7_9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <h2 className="text-indigo-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Copywriting For Founders</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Headline Formula</h1>
      </motion.div>

      <div className="w-full max-w-4xl z-10 px-8 space-y-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl flex items-center gap-6">
          <X className="w-10 h-10 text-red-500 flex-shrink-0" />
          <div>
            <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-3">Don't Write:</p>
            <p className="text-3xl text-zinc-500 line-through decoration-red-500/40">"AI Career Platform"</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="bg-indigo-500/10 border-2 border-indigo-500/40 p-8 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
          <Check className="w-10 h-10 text-indigo-400 flex-shrink-0" />
          <div>
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">Write:</p>
            <p className="text-3xl text-white font-display font-bold">"Discover The Career You're Actually Meant For"</p>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="mt-14 z-10 bg-violet-500/10 border border-violet-500/30 px-12 py-6 rounded-2xl">
        <p className="text-2xl text-violet-200 font-light">People buy <strong className="text-white font-bold">outcomes.</strong> Not features.</p>
      </motion.div>
    </div>
  );
}
