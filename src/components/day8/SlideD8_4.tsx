"use client";

import { motion } from "framer-motion";

export function SlideD8_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#000a12] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px)", backgroundSize: "40px 40px" }} />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-black text-white mb-16 z-10">THE ANATOMY OF AN APP</motion.h1>

      <div className="w-full max-w-5xl flex items-center justify-center gap-12 z-10">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex-1 bg-zinc-900/50 border border-zinc-700/50 p-10 rounded-3xl text-center">
          <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">👁️</div>
          <h2 className="text-3xl font-display font-black text-zinc-300 mb-6">FRONTEND</h2>
          <div className="space-y-4">
            <p className="text-xl text-zinc-400">The Face & Body</p>
            <p className="text-xl text-zinc-400">Buttons, Colors, Design</p>
            <p className="text-xl text-zinc-400">Where the user clicks</p>
            <p className="text-xl text-zinc-400">Vercel & Next.js</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-4xl font-mono text-zinc-600 font-black">VS</motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="flex-1 bg-gradient-to-b from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/30 p-10 rounded-3xl text-center shadow-[0_0_40px_rgba(6,182,212,0.15)]">
          <div className="w-20 h-20 bg-cyan-500/20 border border-cyan-500/40 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🧠</div>
          <h2 className="text-3xl font-display font-black text-cyan-400 mb-6">BACKEND</h2>
          <div className="space-y-4">
            <p className="text-xl text-cyan-100/70">The Brain & Memory</p>
            <p className="text-xl text-cyan-100/70">Logic, Security, Data</p>
            <p className="text-xl text-cyan-100/70">Where the data lives</p>
            <p className="text-xl text-white font-bold">Supabase</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
