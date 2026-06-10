"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SlideD7_14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-10 text-center max-w-4xl">
        <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-8" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-indigo-400 font-mono tracking-[0.5em] text-sm uppercase mb-6">The Most Important Lesson</motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-3xl text-zinc-400 font-light mb-6">"Today you learned something dangerous."</motion.p>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1 }} className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent my-10" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="text-4xl text-zinc-300 font-display font-bold mb-6">"Software is no longer the advantage."</motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5, type: "spring" }}
          className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 leading-tight mb-10">
          The advantage is knowing what to build.
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }} className="text-xl text-zinc-600">
          "Thousands can generate apps. Very few can <strong className="text-indigo-300">create value.</strong>"
        </motion.p>
      </motion.div>
    </div>
  );
}
