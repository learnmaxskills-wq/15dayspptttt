"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function SlideD3_19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-16">
          <p className="text-4xl font-display font-black text-zinc-400">Bolt</p>
          <p className="text-3xl text-orange-500">+</p>
          <p className="text-4xl font-display font-black text-zinc-400">Lovable</p>
          <p className="text-3xl text-orange-500">=</p>
          <p className="text-4xl font-display font-black text-orange-300">Amazing.</p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, type: "spring" }} className="bg-orange-500/10 border-2 border-orange-500 rounded-3xl py-10 px-16 mb-16 inline-block shadow-[0_0_60px_rgba(249,115,22,0.2)]">
          <p className="text-6xl md:text-8xl font-display font-black">
            <span className="text-zinc-400">PROTOTYPE</span>
            <span className="text-orange-500 mx-6">≠</span>
            <span className="text-white">PRODUCT</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-zinc-900/60 border border-zinc-700 p-8 rounded-2xl">
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-4">Prototype</p>
            <p className="text-3xl font-display font-bold text-zinc-300">Proves Idea</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="bg-orange-500/10 border border-orange-500/40 p-8 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">Product</p>
            <p className="text-3xl font-display font-bold text-white">Serves Customers</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="flex items-center justify-center gap-4 bg-amber-500/10 border border-amber-500/30 px-8 py-5 rounded-2xl">
          <AlertTriangle className="w-7 h-7 text-amber-400 flex-shrink-0" />
          <p className="text-xl text-amber-300 font-medium">This is critical. Spend time here. Don't confuse the two.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
