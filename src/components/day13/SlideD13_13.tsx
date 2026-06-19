"use client";

import { motion } from "framer-motion";
import { Award, ThumbsDown, ThumbsUp, AlertTriangle } from "lucide-react";

export function SlideD13_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background radial spotlight */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-amber-400">
          <Award className="w-4 h-4" />
          <span>ACT 5: SCRIPT WRITING MASTERCLASS</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight text-center mb-10">
          Teach: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">How to Write Script</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
          {/* BAD card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-950/60 border border-red-950/50 rounded-2xl p-6 relative flex flex-col group">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono tracking-wider uppercase bg-red-950/30 border border-red-950 text-red-400 font-bold">BAD</span>
              <ThumbsDown className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-zinc-400 font-mono text-sm leading-relaxed italic">
              "Our platform has AI voice technology."
            </p>
          </motion.div>

          {/* GOOD card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-zinc-950/60 border border-emerald-950/50 rounded-2xl p-6 relative flex flex-col group">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono tracking-wider uppercase bg-emerald-950/30 border border-emerald-950 text-emerald-400 font-bold">GOOD</span>
              <ThumbsUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-zinc-200 font-mono text-sm leading-relaxed italic">
              "What if you could practice interviews anytime and receive instant feedback without waiting for a teacher?"
            </p>
          </motion.div>
        </div>

        {/* The Punchline */}
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }} className="bg-rose-500/10 border border-rose-500/30 px-6 py-2 rounded-lg mb-6 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 font-mono text-xs uppercase font-bold tracking-widest">[ This line always hits ]</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.8 }} className="bg-zinc-950/90 border border-zinc-800 p-8 rounded-3xl text-center max-w-2xl shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
            <h3 className="text-3xl md:text-4xl font-extrabold font-display leading-tight mb-2">
              "Nobody cares about <span className="text-rose-400">your startup</span>.
            </h3>
            <h3 className="text-3xl md:text-4xl font-extrabold font-display leading-tight">
              They care about <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">themselves</span>."
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
