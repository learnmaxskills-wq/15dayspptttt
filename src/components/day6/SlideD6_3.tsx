"use client";

import { motion } from "framer-motion";

export function SlideD6_3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-10 text-center max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl text-zinc-500 font-light mb-12">"What you've built so far... is not a startup."</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-4xl text-amber-400 font-bold mb-20">"It's a prototype."</motion.p>

        {/* Prototype ≠ Product */}
        <div className="flex items-center justify-center gap-16 mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} className="bg-zinc-900/60 border-2 border-zinc-700 px-14 py-10 rounded-3xl">
            <p className="text-5xl font-display font-black text-zinc-400">PROTOTYPE</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5, type: "spring" }} className="text-7xl font-mono font-bold text-red-500">≠</motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 }} className="bg-gradient-to-br from-amber-500/15 to-transparent border-2 border-amber-500/50 px-14 py-10 rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.2)]">
            <p className="text-5xl font-display font-black text-white">PRODUCT</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4 }} className="space-y-3">
          <p className="text-2xl text-zinc-500">"A prototype is <strong className="text-zinc-300">proof.</strong>"</p>
          <p className="text-2xl text-amber-300">"A product is <strong className="text-white">reality.</strong>"</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
