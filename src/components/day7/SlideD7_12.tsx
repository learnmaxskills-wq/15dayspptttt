"use client";

import { motion } from "framer-motion";

export function SlideD7_12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-red-400 font-mono tracking-[0.5em] text-sm uppercase mb-6">Founder Lesson</motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-4xl text-zinc-300 font-display font-bold mb-16">"If AI gives a wrong answer... whose fault is it?"</motion.p>

        <div className="flex items-center justify-center gap-16 mb-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} className="bg-zinc-900/40 border border-zinc-700 px-12 py-8 rounded-3xl text-center">
            <p className="text-4xl font-display font-black text-zinc-500 line-through decoration-red-500/50">AI</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3, type: "spring" }} className="bg-indigo-500/15 border-2 border-indigo-500 px-12 py-8 rounded-3xl text-center shadow-[0_0_40px_rgba(99,102,241,0.3)]">
            <p className="text-4xl font-display font-black text-white">FOUNDER</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 px-12 py-6 rounded-2xl">
          <p className="text-2xl text-indigo-200 font-light">"Founders own the <strong className="text-white font-bold">output.</strong> Not the tool."</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
