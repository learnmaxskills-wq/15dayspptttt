"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export function SlideD4_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring" }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-purple-500/15 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-14 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
          <Brain className="w-14 h-14 text-purple-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-3xl text-zinc-400 font-light mb-8">For decades humans wrote code.</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-3xl text-zinc-300 font-medium mb-16">Today humans increasingly <strong className="text-purple-400">direct AI.</strong></motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2, type: "spring" }} className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/40 px-16 py-10 rounded-[3rem] inline-block shadow-[0_0_80px_rgba(168,85,247,0.15)]">
          <p className="text-6xl md:text-8xl font-display font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Clear Thinking</span>
            <span className="text-zinc-600 mx-4">&gt;</span>
            <span className="text-zinc-500">Coding</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
