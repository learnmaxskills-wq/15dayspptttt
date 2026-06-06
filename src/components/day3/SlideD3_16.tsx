"use client";

import { motion } from "framer-motion";
import { PenLine, Zap } from "lucide-react";

export function SlideD3_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.06),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Constraint Game</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">MVP Exercise</h1>
            <div className="bg-orange-500/10 border border-orange-500/40 p-6 rounded-2xl mb-8">
              <p className="text-2xl text-orange-200 font-bold leading-relaxed">Could your startup work with only <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-4">ONE feature</span>?</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-[#110900] border border-orange-900/40 rounded-3xl p-8 mb-8">
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">Example: CareerGPS</p>
            <div className="bg-orange-500/15 border border-orange-500/50 p-5 rounded-2xl text-center mb-4 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-mono text-xs uppercase tracking-widest">One Feature</span>
              </div>
              <p className="text-2xl font-display font-bold text-white">Career Recommendation Engine</p>
            </div>
            <p className="text-zinc-500 text-lg text-center">Everything Else Removed.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-2xl">
            <p className="text-amber-300 font-bold text-lg">Founder Rule: The best MVP feels <em className="text-white not-italic">incomplete.</em></p>
          </motion.div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-8">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Your Notes</p>
          </div>
          <p className="text-zinc-300 text-2xl font-bold mb-3">My One Core Feature:</p>
          <p className="text-zinc-600 text-sm italic mb-8">(If your startup could only do ONE thing, what would it be?)</p>
          <div className="bg-orange-500/5 border border-orange-900/40 rounded-2xl p-6 min-h-[160px]" />
          <div className="mt-8">
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-4">Why this is the most important feature:</p>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => <div key={i} className="w-full h-8 border-b border-orange-900/40" />)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
