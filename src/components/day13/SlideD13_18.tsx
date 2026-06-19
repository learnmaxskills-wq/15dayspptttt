"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Video, Volume2, Music, Sparkles } from "lucide-react";

export function SlideD13_18() {
  const steps = [
    { label: "Image", icon: Play, glow: "border-rose-950/40 text-rose-400" },
    { label: "Video", icon: Video, glow: "border-pink-950/40 text-pink-400" },
    { label: "Voiceover", icon: Volume2, glow: "border-purple-950/40 text-purple-400" },
    { label: "Music", icon: Music, glow: "border-indigo-950/40 text-indigo-400" },
    { label: "Marketing Asset", icon: Sparkles, glow: "border-amber-950/40 text-amber-400" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <Play className="w-4 h-4 text-rose-400" />
          <span>ACT 9: VIDEO GENERATION</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-4">
          Now <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">animate.</span> Show:
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          The Automated Asset Pipeline
        </motion.p>

        {/* Pipeline horizontal blocks */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-4xl mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 100 }}
                  className={`bg-zinc-950/70 border ${step.glow} rounded-xl p-4 w-full md:w-36 flex flex-col items-center justify-center text-center`}
                >
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">{step.label}</span>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.2 }} className="my-2 md:my-0 md:mx-2 text-zinc-700 rotate-90 md:rotate-0">
                    <ArrowRight className="w-4 h-4 animate-pulse" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Big Reveal card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }}
          className="bg-gradient-to-r from-rose-950/50 to-amber-950/40 border border-rose-900/50 p-8 rounded-3xl text-center max-w-2xl shadow-2xl relative"
        >
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-3">[ Students' minds explode here ]</p>
          <h3 className="text-2xl md:text-3xl font-black font-display text-white mb-4">
            A startup can now create advertisements <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">without a production studio.</span>
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
