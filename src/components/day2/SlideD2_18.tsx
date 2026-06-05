"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  { text: "Nobody Wants A Drill", highlight: "Drill", color: "text-zinc-500", border: "border-zinc-800", bg: "bg-zinc-900/40" },
  { text: "People Want A Hole", highlight: "Hole", color: "text-zinc-300", border: "border-zinc-600", bg: "bg-zinc-800/30" },
  { text: "People Want A Beautiful Home", highlight: "Beautiful Home", color: "text-pink-400", border: "border-pink-500", bg: "bg-pink-500/5", glow: true },
];

export function SlideD2_18() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(236,72,153,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-pink-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Founder Thinking</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Drill Lesson</h1>
      </motion.div>

      <div className="w-full max-w-3xl flex flex-col items-center z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.8 }}
              className={`w-full text-center p-10 rounded-3xl border-2 ${step.border} ${step.bg} backdrop-blur-sm ${step.glow ? "shadow-[0_0_50px_rgba(236,72,153,0.2)]" : ""}`}
            >
              <span className={`text-4xl md:text-5xl font-display font-light ${step.color}`}>
                {step.text.split(step.highlight)[0]}
                <strong className="font-black text-white">{step.highlight}</strong>
                {step.text.split(step.highlight)[1]}
              </span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.8 + 0.4 }} className="my-6">
                <ArrowDown className="w-10 h-10 text-zinc-700" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
