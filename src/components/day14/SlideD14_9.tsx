"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowDown } from "lucide-react";

export function SlideD14_9() {
  const steps = [
    { name: "ATTENTION", glow: "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10" },
    { name: "INTEREST", glow: "border-zinc-800 text-zinc-300 bg-zinc-950" },
    { name: "DESIRE", glow: "border-zinc-800 text-zinc-300 bg-zinc-950" },
    { name: "ACTION", glow: "border-[#ccff00]/40 text-[#ccff00] bg-[#ccff00]/5" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 2: THE ATTENTION FORMULA</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-10">
          The Conversion Funnel (AIDA)
        </motion.h2>

        {/* Vertical Pipeline */}
        <div className="flex flex-col items-center gap-2 w-full max-w-sm mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.25, type: "spring", stiffness: 100 }}
                className={`border rounded-2xl py-3 w-full text-center font-mono font-bold tracking-widest text-lg ${step.glow} relative`}
              >
                {step.name}
                {i === 0 && (
                  <span className="absolute -top-2 right-4 text-[9px] font-mono tracking-normal text-[#00f0ff] uppercase px-1.5 py-0.5 bg-zinc-950 border border-[#00f0ff]/30 rounded">
                    Critical Gate
                  </span>
                )}
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.25 }} className="text-zinc-600 my-1 animate-pulse">
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Warning Takeaway */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="bg-red-500/10 border border-red-500/30 px-6 py-3 rounded-lg text-center"
        >
          <p className="text-red-400 font-mono text-sm uppercase font-bold tracking-widest">
            "If you lose attention, nothing else matters."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
