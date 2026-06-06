"use client";

import { motion } from "framer-motion";
import { X, AlertTriangle, PenLine } from "lucide-react";

const reasons = ["Nobody Needs Them", "Too Many Features", "Wrong Customer", "No Clear Outcome", "Built Too Early"];

export function SlideD3_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(239,68,68,0.07),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <h2 className="text-red-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Graveyard</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">Why Products Fail</h1>
          </motion.div>

          <div className="space-y-4 mb-8">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }} className="flex items-center gap-4 bg-red-950/20 border border-red-900/40 p-5 rounded-2xl">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-xl text-zinc-300">{r}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <p className="text-lg text-amber-300 font-medium leading-relaxed">Most products don't fail because of <strong className="text-white">technology.</strong> They fail because of <strong className="text-amber-400">thinking.</strong></p>
          </motion.div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Your Notes</p>
          </div>
          <p className="text-zinc-300 text-xl font-medium mb-8">The biggest risk in my startup is:</p>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-10 border-b border-orange-900/40 flex items-end pb-1">
                <span className="text-zinc-700 text-sm font-mono">{i + 1}.</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
