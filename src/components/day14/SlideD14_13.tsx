"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

export function SlideD14_13() {
  const steps = [
    { label: "Hook", glow: "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5" },
    { label: "Problem", glow: "border-zinc-800 text-zinc-300 bg-zinc-950" },
    { label: "Pain", glow: "border-zinc-800 text-zinc-300 bg-zinc-950" },
    { label: "Solution", glow: "border-zinc-800 text-zinc-300 bg-zinc-950" },
    { label: "Transformation", glow: "border-zinc-800 text-zinc-300 bg-zinc-950" },
    { label: "CTA", glow: "border-[#ccff00]/40 text-[#ccff00] bg-[#ccff00]/5" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 4: THE STORY FRAMEWORK</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-4">
          The Conversion Storyboard
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          Then explain each one step by step
        </motion.p>

        {/* 6 columns horizontal pipeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-5xl relative">
          {/* Connector line behind */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-[#00f0ff]/30 via-zinc-800 to-[#ccff00]/30 hidden md:block z-0 -translate-y-2" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto z-10">
              <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 100 }}
                className={`border ${step.glow} rounded-2xl p-4 w-full md:w-32 text-center flex flex-col items-center justify-center min-h-[100px]`}
              >
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">0{i + 1}</span>
                <h4 className="text-sm font-bold font-mono tracking-wider uppercase">{step.label}</h4>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.15 }} className="my-1 md:my-0 md:mx-1 text-zinc-700 rotate-90 md:rotate-0">
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
