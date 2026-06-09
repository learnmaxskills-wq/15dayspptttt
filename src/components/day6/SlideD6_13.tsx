"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";

export function SlideD6_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-orange-500/15 border-2 border-orange-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(249,115,22,0.3)]">
          <History className="w-14 h-14 text-orange-400" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.8 }}
          className="text-8xl md:text-[120px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 leading-none mb-10">GIT</motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="bg-zinc-900/50 border border-zinc-700 p-6 rounded-2xl max-w-2xl mx-auto mb-10">
          <p className="text-zinc-600 font-mono text-sm line-through mb-4">"Git is a distributed version control system."</p>
          <p className="text-zinc-500 text-sm">"Sounds important. Also sounds confusing."</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-red-500/10 border-2 border-red-500/30 p-8 rounded-3xl max-w-2xl mx-auto mb-10 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <p className="text-2xl text-zinc-300 font-light mb-4">"You spend 50 hours building your startup."</p>
          <p className="text-2xl text-zinc-300 font-light mb-4">"Tomorrow you accidentally delete everything."</p>
          <p className="text-5xl mb-4">💀</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} className="space-y-3">
          <p className="text-3xl text-orange-400 font-display font-bold">"Git prevents emotional damage."</p>
          <p className="text-xl text-zinc-500 font-light">"Git is basically a <strong className="text-white">time machine.</strong>"</p>
          <p className="text-lg text-zinc-600 mt-4">It remembers versions. It remembers history. It remembers mistakes.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
