"use client";

import { motion } from "framer-motion";

export function SlideD3_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.07),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/15 blur-[100px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <p className="text-orange-500 font-mono tracking-[0.5em] text-lg uppercase mb-16">MVP Masterclass</p>

        <div className="grid grid-cols-2 gap-10 mb-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-red-950/20 border-2 border-red-900/50 rounded-3xl p-10 flex flex-col items-center justify-center">
            <span className="text-7xl font-display font-black text-red-500/40 mb-4">MVP</span>
            <div className="text-zinc-500 text-3xl font-display mb-2">≠</div>
            <span className="text-3xl font-display font-bold text-zinc-400 line-through decoration-red-500">Minimum Product</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-orange-500/10 border-2 border-orange-500 rounded-3xl p-10 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.2)]">
            <span className="text-7xl font-display font-black text-orange-400 mb-4">MVP</span>
            <div className="text-orange-500 text-3xl font-display mb-2">=</div>
            <span className="text-3xl font-display font-black text-white">Minimum <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Valuable</em> Product</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="bg-amber-500/10 border border-amber-500/30 px-12 py-6 rounded-2xl">
          <p className="text-2xl text-amber-200 font-bold">Huge difference. One ships something useless. One ships something <span className="text-white">that works.</span></p>
        </motion.div>
      </motion.div>
    </div>
  );
}
