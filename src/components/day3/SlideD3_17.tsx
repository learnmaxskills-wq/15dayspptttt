"use client";

import { motion } from "framer-motion";
import { X, PenLine, ShieldX } from "lucide-react";

const notBuilding = ["Community", "Marketplace", "Chat", "Leaderboards", "Premium Features", "Notifications"];

export function SlideD3_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(239,68,68,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <ShieldX className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-red-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">One of the most important exercises</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">What We Are NOT Building</h1>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {notBuilding.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-red-950/15 border border-red-900/40 p-4 rounded-2xl flex items-center gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-lg text-zinc-400">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-2xl text-center">
            <p className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Why? Focus.</p>
          </motion.div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-8">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Your Commitment</p>
          </div>
          <p className="text-zinc-300 text-2xl font-bold mb-8">Three Features I Refuse To Build:</p>
          <div className="space-y-8">
            {["1.", "2.", "3."].map((num, i) => (
              <div key={i}>
                <p className="text-red-500/60 font-mono text-xl font-bold mb-2">{num}</p>
                <div className="w-full h-10 border-b-2 border-red-900/30" />
              </div>
            ))}
          </div>
          <div className="mt-10 bg-red-950/20 border border-red-900/30 p-5 rounded-2xl">
            <p className="text-zinc-500 text-sm italic">Writing this down builds discipline. Great founders say NO more than YES.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
