"use client";

import { motion } from "framer-motion";
import { Image, EyeOff, Eye } from "lucide-react";

export function SlideD13_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-6 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <Image className="w-4 h-4 text-rose-400" />
          <span>ACT 8: IMAGE GENERATION</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight text-center mb-4">
          Now generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">scenes.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-10">
          Explain: prompt quality changes everything
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-10">
          {/* BAD prompt */}
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
            className="bg-zinc-950/60 border border-red-950/40 rounded-2xl p-6 relative flex flex-col group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold bg-red-950/20 px-3 py-1 rounded-md border border-red-950/50">Bad Prompt</span>
              <EyeOff className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-zinc-400 font-mono text-sm leading-relaxed p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl min-h-[140px] flex items-center justify-center">
              "Student studying."
            </p>
          </motion.div>

          {/* GOOD prompt */}
          <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
            className="bg-zinc-950/60 border border-emerald-950/40 rounded-2xl p-6 relative flex flex-col group shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-950/20 px-3 py-1 rounded-md border border-emerald-950/50">Good Prompt</span>
              <Eye className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div className="text-zinc-200 font-mono text-xs leading-relaxed p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl min-h-[140px]">
              <span className="text-emerald-400">Cinematic</span> Indian high school student sitting alone at night, surrounded by books, stressed before an interview, <span className="text-amber-400">dramatic lighting, ultra realistic</span>, shallow depth of field, 4k.
            </div>
          </motion.div>
        </div>

        {/* Huge Difference Banner */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }}
          className="w-full max-w-3xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-amber-950/40 border border-zinc-800/80 p-6 rounded-2xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-200 uppercase">
            Huge difference.
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
