"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  { text: "Big Problem", color: "text-zinc-400" },
  { text: "Small Entry Point", color: "text-cyan-300" },
  { text: "Trust", color: "text-emerald-400" },
  { text: "Expansion", color: "text-white", glow: true },
];

export function SlideD2_28() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Execution</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Founder's Secret</h1>
      </motion.div>

      <div className="w-full max-w-6xl flex items-center justify-center flex-wrap gap-6 z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.4, type: "spring", stiffness: 200 }}
              className={`px-10 py-8 rounded-[2rem] border-2 bg-[#040d1e] backdrop-blur-sm ${step.glow ? "border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.4)] bg-cyan-500/10 scale-110" : "border-zinc-800"}`}
            >
              <span className={`text-3xl font-display font-bold ${step.color}`}>{step.text}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.4 + 0.2 }}>
                <ChevronRight className="w-10 h-10 text-zinc-700" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
