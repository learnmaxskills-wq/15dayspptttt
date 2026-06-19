"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldAlert } from "lucide-react";

export function SlideD13_4() {
  const points = [
    { title: "The design is perfect.", glow: "group-hover:bg-rose-500/10 border-rose-500/20" },
    { title: "The AI is perfect.", glow: "group-hover:bg-fuchsia-500/10 border-fuchsia-500/20" },
    { title: "The code is perfect.", glow: "group-hover:bg-amber-500/10 border-amber-500/20" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background vignette & gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#020005]/80 to-[#020005] z-0" />
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-rose-950/40 border border-rose-900/50 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <ShieldAlert className="w-4 h-4" />
          <span>ACT 1: THE BRUTAL TRUTH</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">10 MIN</span>
        </motion.div>

        {/* Narrative open */}
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-zinc-400 font-light mb-8 italic text-center max-w-2xl">
          "I want to tell you something that might hurt a little."
        </motion.h3>

        {/* Premise */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 md:p-8 w-full max-w-2xl mb-8 relative">
          <p className="text-lg md:text-xl font-sans font-light text-zinc-300 leading-relaxed text-center">
            Imagine I spend <span className="text-white font-semibold">10 years</span> building the greatest product in the world.
          </p>
        </motion.div>

        {/* Perfect stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
          {points.map((p, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.3 }}
              className={`bg-zinc-900/40 border ${p.glow} rounded-xl p-4 flex items-center justify-center gap-2 group transition-all duration-300`}
            >
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-mono text-sm text-zinc-200">{p.title}</span>
            </motion.div>
          ))}
        </div>

        {/* The complication & question */}
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 }} className="bg-rose-950/20 border border-rose-500/30 px-6 py-3 rounded-lg mb-6">
            <span className="text-rose-300 font-semibold tracking-wide">But nobody knows it exists.</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="text-3xl md:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-200 tracking-tight">
            How much money will it make?
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
