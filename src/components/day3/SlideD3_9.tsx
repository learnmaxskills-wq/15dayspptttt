"use client";

import { motion } from "framer-motion";
import { Crosshair, PenLine } from "lucide-react";

export function SlideD3_9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <Crosshair className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Step 02</h2>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-8">Problem</h1>
            <p className="text-2xl text-zinc-400 font-light mb-10">What pain are we solving?</p>
          </motion.div>

          <div className="space-y-5 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-red-950/20 border border-red-900/40 p-6 rounded-2xl">
              <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-3">Bad</p>
              <p className="text-xl text-zinc-500 line-through decoration-red-500">Students need career guidance.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-green-950/20 border border-green-500/30 p-6 rounded-2xl">
              <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-3">Good</p>
              <p className="text-xl text-zinc-200 leading-relaxed">Students feel <strong>overwhelmed and uncertain</strong> when making career decisions.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-2xl">
            <p className="text-amber-300 text-lg font-bold">Founder Rule: <span className="text-white">Specific Problems Create Strong Products.</span></p>
          </motion.div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-8">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Your Notes</p>
          </div>
          <p className="text-zinc-300 text-2xl font-bold mb-3">My Problem:</p>
          <p className="text-zinc-600 text-sm italic mb-8">(Be specific — use emotion, not general terms)</p>
          <div className="space-y-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-10 border-b border-orange-900/40" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
