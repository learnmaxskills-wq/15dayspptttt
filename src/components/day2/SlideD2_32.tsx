"use client";

import { motion } from "framer-motion";

export function SlideD2_32() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(56,189,248,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl">
        <p className="text-zinc-500 font-mono tracking-[0.5em] text-xl uppercase mb-16">The Final Test</p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-4xl md:text-5xl font-display font-light text-zinc-300 mb-8">
          You Have <span className="text-yellow-400 font-bold">₹10 Crore</span>.
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-24">
          Would You Invest In Your Own Startup?
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex justify-center gap-12">
          <motion.div whileHover={{ scale: 1.08, borderColor: "rgba(34,197,94,0.8)", boxShadow: "0 0 40px rgba(34,197,94,0.3)" }} className="px-16 py-6 rounded-full border-2 border-zinc-700 text-5xl font-display font-bold text-zinc-500 cursor-pointer transition-all duration-300">YES</motion.div>
          <motion.div whileHover={{ scale: 1.08, borderColor: "rgba(239,68,68,0.8)", boxShadow: "0 0 40px rgba(239,68,68,0.3)" }} className="px-16 py-6 rounded-full border-2 border-zinc-700 text-5xl font-display font-bold text-zinc-500 cursor-pointer transition-all duration-300">NO</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
