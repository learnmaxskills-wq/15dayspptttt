"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export function SlideD14_23() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          The Production Shift
        </motion.p>

        {/* Narrative quotes */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 max-w-2xl shadow-2xl relative"
        >
          <div className="absolute top-2 right-2 text-[#00f0ff]">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          <h3 className="text-xl md:text-2xl font-mono text-zinc-500 line-through tracking-wide mb-6">
            "Five years ago this required a studio."
          </h3>
          
          <div className="h-[1px] w-12 bg-zinc-800 mx-auto my-4" />

          <h2 className="text-4xl md:text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00] tracking-tight mb-2">
            "Today it requires a founder."
          </h2>
        </motion.div>

        {/* Presenter tag */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8 flex justify-center">
          <span className="bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-lg">
            [ That line will hit. ]
          </span>
        </motion.div>
      </div>
    </div>
  );
}
