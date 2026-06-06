"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export function SlideD3_23() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.07),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/15 blur-[100px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <div className="w-24 h-24 bg-amber-500/20 border border-amber-500/30 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-[0_0_60px_rgba(245,158,11,0.3)]">
          <Trophy className="w-12 h-12 text-amber-400" />
        </div>

        <p className="text-orange-500 font-mono tracking-[0.5em] text-xl uppercase mb-16">Look What Happened</p>

        <div className="flex items-center justify-center gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-900/60 border border-zinc-700 rounded-3xl p-10 text-center">
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Three Days Ago</p>
            <p className="text-4xl font-display font-black text-zinc-400">Problem</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, type: "spring" }}>
            <ArrowRight className="w-14 h-14 text-orange-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="bg-orange-500/15 border-2 border-orange-500 rounded-3xl p-10 text-center shadow-[0_0_60px_rgba(249,115,22,0.3)]">
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">Today</p>
            <p className="text-5xl font-display font-black text-white">Prototype</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-3xl">
          <p className="text-3xl font-display font-bold text-amber-200">This is a huge psychological win.</p>
          <p className="text-2xl text-amber-400 mt-3 font-black">Pause here. Celebrate. 🎉</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
