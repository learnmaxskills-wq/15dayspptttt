"use client";

import { motion } from "framer-motion";
import { ArrowDown, PenLine } from "lucide-react";

export function SlideD3_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Step 03</h2>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6">Outcome</h1>
            <p className="text-2xl text-zinc-400 font-light">What transformation are we creating?</p>
          </motion.div>

          <div className="space-y-6">
            {[
              { before: "Confused Student", after: "Confident Student" },
              { before: "Wasted Time", after: "Clear Roadmap" },
            ].map((pair, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.4 }} className="flex flex-col items-center gap-3 bg-[#110900] border border-zinc-800 rounded-2xl p-6">
                <div className="bg-red-950/30 border border-red-900/40 w-full py-3 px-6 rounded-xl text-center">
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1">Before</p>
                  <p className="text-xl text-zinc-400">{pair.before}</p>
                </div>
                <ArrowDown className="w-5 h-5 text-orange-500" />
                <div className="bg-orange-500/10 border border-orange-500/40 w-full py-3 px-6 rounded-xl text-center shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                  <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-1">After</p>
                  <p className="text-xl text-orange-300 font-bold">{pair.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-8">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Your Notes</p>
          </div>
          <div className="bg-red-950/20 border border-red-900/40 p-6 rounded-2xl mb-5">
            <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-4">Before (how student feels now)</p>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => <div key={i} className="w-full h-8 border-b border-red-900/30" />)}
            </div>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-2xl">
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">After (what your product gives them)</p>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => <div key={i} className="w-full h-8 border-b border-orange-900/30" />)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
