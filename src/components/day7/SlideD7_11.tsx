"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain } from "lucide-react";

export function SlideD7_11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      {/* Pulsing ring */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-violet-500/10 rounded-full pointer-events-none" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-indigo-500/10 rounded-full pointer-events-none" animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-violet-500/15 border-2 border-violet-500/40 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(139,92,246,0.3)]">
          <Brain className="w-14 h-14 text-violet-400" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-indigo-400 font-mono tracking-[0.5em] text-sm uppercase mb-6">The Magic Moment</motion.h2>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-5xl md:text-7xl font-display font-black text-white mb-14">Your Product Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Thinking.</span></motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="space-y-4 mb-12">
          <p className="text-2xl text-zinc-500 font-light">"A few days ago... this was an idea."</p>
          <p className="text-2xl text-indigo-300 font-medium">"Now your product is thinking."</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3 }} className="inline-flex items-center gap-3 bg-violet-500/10 border border-violet-500/30 px-8 py-4 rounded-full">
          <Sparkles className="w-6 h-6 text-violet-400" />
          <p className="text-xl text-violet-200 font-light">Students will remember this moment.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
