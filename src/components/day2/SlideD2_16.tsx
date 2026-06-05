"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const flow = [
  { stage: "Trend", example: "AI", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/5" },
  { stage: "Problem", example: "Students Confused About AI", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/5" },
  { stage: "Opportunity", example: "Education Opportunity", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/5" },
  { stage: "Business", example: "LearnMax", color: "text-cyan-400", border: "border-cyan-500/50", bg: "bg-cyan-500/10", glow: true },
];

export function SlideD2_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Playbook</h2>
        <h1 className="text-4xl md:text-5xl font-display font-black text-white">How Trends Become Companies</h1>
      </motion.div>

      <div className="w-full max-w-3xl flex flex-col items-center z-10">
        {flow.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.4 }}
              className={`w-full flex items-center justify-between p-6 rounded-2xl border ${step.border} ${step.bg} ${step.glow ? "shadow-[0_0_40px_rgba(6,182,212,0.25)]" : ""}`}
            >
              <span className={`text-2xl font-display font-bold uppercase tracking-widest ${step.color}`}>{step.stage}</span>
              <span className={`text-xl font-medium ${step.glow ? "text-cyan-300 font-bold text-2xl" : "text-zinc-300"}`}>{step.example}</span>
            </motion.div>
            {i < flow.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.4 + 0.2 }} className="my-3">
                <ArrowDown className="w-6 h-6 text-zinc-600" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
