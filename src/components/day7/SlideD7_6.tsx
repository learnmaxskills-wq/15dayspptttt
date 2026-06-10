"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function SlideD7_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-10 text-center max-w-4xl">
        <Terminal className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl text-zinc-400 font-light mb-6">"Everything starts with a prompt."</motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-2xl text-zinc-500 font-light mb-4">"What is the most expensive skill in software today?"</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="text-3xl text-zinc-500 line-through decoration-red-500/50 mb-4">Coding.</motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3, type: "spring", stiffness: 150 }}
          className="text-7xl md:text-[100px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 leading-none mb-10">
          PROMPTING.
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="text-2xl text-indigo-300 font-medium">
          "Because <strong className="text-red-400">bad instructions</strong> create <strong className="text-red-400">bad products.</strong>"
        </motion.p>
      </motion.div>
    </div>
  );
}
