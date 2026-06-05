"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export function SlideD2_26() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-4xl">
        <div className="w-28 h-28 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(16,185,129,0.25)]">
          <Lightbulb className="w-14 h-14 text-emerald-400" />
        </div>
        <h1 className="text-7xl md:text-9xl font-display font-black text-white mb-4">CHATGPT</h1>
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-xl uppercase mb-20">The Strategy Room</h2>
        <div className="space-y-8">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-4xl text-zinc-400 font-light">Now We Stop Researching</motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="text-6xl text-emerald-400 font-black tracking-tight">And Start Thinking.</motion.p>
        </div>
      </motion.div>
    </div>
  );
}
