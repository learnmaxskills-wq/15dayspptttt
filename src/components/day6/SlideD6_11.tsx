"use client";

import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

export function SlideD6_11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-blue-500/15 border-2 border-blue-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(59,130,246,0.3)]">
          <MousePointerClick className="w-14 h-14 text-blue-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-2xl text-blue-300 font-mono uppercase tracking-widest mb-6">Meet Your First Employee</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.2 }}
          className="text-8xl md:text-[120px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400 leading-none mb-12">CURSOR</motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-3xl max-w-3xl mx-auto mb-10">
          <p className="text-zinc-600 font-mono text-sm mb-4 line-through">Cursor is an AI-powered development environment with contextual codebase awareness and agentic capabilities.</p>
          <p className="text-zinc-400 font-mono text-sm mb-4">Translation:</p>
          <p className="text-2xl text-blue-300 font-display font-bold">"Like having a software engineer sitting beside you 24 hours a day."</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="space-y-2">
          <p className="text-xl text-zinc-500">It never gets tired.</p>
          <p className="text-xl text-zinc-500">It never asks for salary.</p>
          <p className="text-xl text-zinc-500">It never asks for weekends.</p>
          <p className="text-xl text-amber-400 font-bold mt-4">"It just wants prompts."</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
