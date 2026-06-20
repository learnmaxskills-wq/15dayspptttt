"use client";

import { motion } from "framer-motion";
import { Mic, Globe } from "lucide-react";

export function SlideD14_24() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Monologue Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-xs text-zinc-500">
          <Mic className="w-4 h-4 text-[#00f0ff]" />
          <span>CLOSING SPEECH</span>
          <span className="text-zinc-700">|</span>
          <span className="text-[#ccff00]">PART 1</span>
        </motion.div>

        {/* Narrative */}
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-zinc-400 font-mono text-lg italic max-w-2xl leading-relaxed mb-6">
          "Fourteen days ago you were learning how to build. Today you're learning how to communicate."
        </motion.p>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="w-24 h-[1px] bg-zinc-800 mb-10" />

        {/* Big Contrast Monolith */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-3xl max-w-2xl shadow-2xl relative"
        >
          <div className="absolute top-2 right-2 text-[#ccff00]">
            <Globe className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="text-3.5xl md:text-5xl font-black font-display tracking-tight leading-snug">
            "And communication is what separates <span className="text-zinc-500 line-through decoration-red-500/80">products</span> from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ccff00] uppercase font-extrabold tracking-wider">movements.</span>"
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
