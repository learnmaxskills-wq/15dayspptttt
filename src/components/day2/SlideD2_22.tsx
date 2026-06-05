"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";

export function SlideD2_22() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(234,179,8,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-yellow-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Gold Mine</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Customer Gold Mine</h1>
      </motion.div>

      <div className="w-full max-w-4xl z-10 mb-16 relative">
        <div className="absolute inset-0 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#0d0b04] border-2 border-zinc-700 p-10 rounded-t-[3rem] text-center border-b-0"
        >
          <p className="text-3xl font-display font-light text-zinc-400">Problem = <strong className="font-bold text-zinc-200">Surface</strong></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-b from-yellow-500/10 to-amber-600/10 border-2 border-yellow-500/40 p-14 rounded-b-[3rem] text-center shadow-[0_20px_60px_rgba(234,179,8,0.15)]"
        >
          <Gem className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <p className="text-5xl font-display font-black text-yellow-300">Emotion = <span className="text-yellow-400 uppercase tracking-widest">Gold</span></p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="text-center z-10">
        <p className="text-2xl text-zinc-400 font-light">Great Businesses Solve <strong className="text-white font-bold">Emotions</strong>. Not Just Problems.</p>
      </motion.div>
    </div>
  );
}
