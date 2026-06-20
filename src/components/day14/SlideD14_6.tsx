"use client";

import { motion } from "framer-motion";
import { BookOpen, X, Check } from "lucide-react";

export function SlideD14_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 1: PEOPLE DON'T BUY PRODUCTS</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight text-center mb-12">
          "People don't buy products."
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl">
          {/* PRODUCT Card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="bg-zinc-950 border border-red-950/60 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden text-center group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-[40px] pointer-events-none" />
            <div className="flex items-center justify-center p-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 mb-6">
              <X className="w-8 h-8 font-black" />
            </div>
            <h3 className="text-3xl font-extrabold font-mono tracking-widest text-zinc-400">PRODUCT</h3>
          </motion.div>

          {/* OUTCOME Card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
            className="bg-zinc-950 border border-[#ccff00]/40 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden text-center group shadow-2xl"
          >
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#ccff00]/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ccff00]/5 blur-[40px] pointer-events-none" />
            <div className="flex items-center justify-center p-3 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] mb-6">
              <Check className="w-8 h-8 font-black animate-pulse" />
            </div>
            <h3 className="text-3xl font-extrabold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00]">OUTCOME</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
