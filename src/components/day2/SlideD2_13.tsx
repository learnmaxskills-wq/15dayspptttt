"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function SlideD2_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(34,197,94,0.06),transparent)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-28 h-28 bg-green-500/10 border border-green-500/30 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(34,197,94,0.2)]"
        >
          <TrendingUp className="w-14 h-14 text-green-400" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-4">GOOGLE TRENDS</h1>
        <h2 className="text-green-400 font-mono tracking-[0.5em] text-xl uppercase mb-20">The Founder's Time Machine</h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#040d1e] border border-green-900/40 rounded-[3rem] p-14 inline-flex flex-col items-center gap-6 shadow-[0_0_60px_rgba(34,197,94,0.06)]"
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-4xl font-display font-bold text-white">Great Businesses</motion.p>
          <motion.p initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring" }} className="text-5xl text-green-400 font-black">×</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-4xl font-display font-light text-zinc-400">Wrong Timing</motion.p>
          <motion.p initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5, type: "spring" }} className="text-5xl text-green-400 font-black">=</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="text-6xl font-display font-black text-red-500 uppercase tracking-widest">Failure</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
