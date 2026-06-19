"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";

export function SlideD8_3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#000a12] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-24 h-24 bg-cyan-500/15 border border-cyan-500/40 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
          <Server className="w-12 h-12 text-cyan-400" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Solution</motion.h2>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-6xl md:text-8xl font-display font-black text-white mb-16">THE BACKEND</motion.h1>

        <div className="grid grid-cols-2 gap-8 mb-16 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="bg-zinc-900/50 border border-zinc-700/50 p-8 rounded-3xl">
            <p className="text-3xl text-zinc-300 font-display font-bold mb-4">What it does:</p>
            <ul className="space-y-4 text-xl text-zinc-400">
              <li>• Stores data securely</li>
              <li>• Remembers who you are</li>
              <li>• Connects everything</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-3xl">
            <p className="text-3xl text-cyan-300 font-display font-bold mb-4">Think of it as:</p>
            <p className="text-xl text-cyan-100/70 mb-4">"The hidden machinery underneath the stage."</p>
            <p className="text-xl text-white font-medium">Without it, the show stops.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
