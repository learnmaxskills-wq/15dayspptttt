"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, LayoutGrid, Image, Sparkles, Volume2, Music, Film, ArrowRight } from "lucide-react";

export function SlideD14_22() {
  const steps = [
    { label: "Script", icon: FileText, border: "border-zinc-800" },
    { label: "Scenes", icon: LayoutGrid, border: "border-zinc-800" },
    { label: "Images", icon: Image, border: "border-zinc-800" },
    { label: "Animation", icon: Sparkles, border: "border-zinc-800" },
    { label: "Voiceover", icon: Volume2, border: "border-zinc-800" },
    { label: "Music", icon: Music, border: "border-zinc-800" },
    { label: "Asset", icon: Film, border: "border-[#ccff00]/40 text-[#ccff00] bg-[#ccff00]/5" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 10: VIDEO CREATION</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-4">
          The Automated Asset Pipeline
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          Show: Step-by-Step Production Sequence
        </motion.p>

        {/* Pipeline flowchart */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-5xl relative">
          {/* Connector line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-zinc-850 hidden md:block z-0 -translate-y-4" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto z-10">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 100 }}
                  className={`bg-zinc-950 border ${step.border} rounded-xl p-3.5 w-full md:w-28 flex flex-col items-center justify-center text-center`}
                >
                  <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg text-zinc-350 mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Step 0{i + 1}</span>
                  <span className="font-mono text-[11px] font-bold tracking-wider text-zinc-200">{step.label}</span>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.15 }} className="my-1.5 md:my-0 md:mx-1 text-zinc-700 rotate-90 md:rotate-0">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
