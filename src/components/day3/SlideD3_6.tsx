"use client";

import { motion } from "framer-motion";
import { ArrowDown, PenLine } from "lucide-react";

const framework = [
  { label: "Problem", example: "Career Confusion", color: "text-red-400", border: "border-red-900/50", bg: "bg-red-950/20" },
  { label: "Outcome", example: "Career Clarity", color: "text-amber-400", border: "border-amber-900/50", bg: "bg-amber-950/20" },
  { label: "Solution", example: "AI Career Strategist", color: "text-yellow-400", border: "border-yellow-900/50", bg: "bg-yellow-950/20" },
  { label: "Product", example: "CareerGPS", color: "text-orange-400", border: "border-orange-500/50", bg: "bg-orange-950/20" },
  { label: "Features", example: "Assessment · Roadmap · Recommendations", color: "text-green-400", border: "border-green-900/50", bg: "bg-green-950/20", glow: true },
];

export function SlideD3_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-12 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Mental Model</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white">Product Thinking Framework</h1>
          </motion.div>

          <div className="flex flex-col items-start w-full gap-2">
            {framework.map((step, i) => (
              <div key={i} className="flex flex-col items-start w-full">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.2 }} className={`w-full flex justify-between items-center p-5 rounded-2xl border ${step.border} ${step.bg} ${step.glow ? "shadow-[0_0_20px_rgba(249,115,22,0.15)]" : ""}`}>
                  <span className={`text-xl font-display font-bold uppercase tracking-widest ${step.color}`}>{step.label}</span>
                  <span className="text-zinc-400 text-sm font-light italic">{step.example}</span>
                </motion.div>
                {i < framework.length - 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.2 + 0.1 }} className="ml-5 my-1">
                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-6">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Fill Your Version</p>
          </div>
          {["Problem", "Outcome", "Solution", "Product", "Features"].map((label, i) => (
            <div key={i} className="mb-5">
              <p className="text-orange-400/70 font-mono text-xs uppercase tracking-widest mb-2">{label}</p>
              <div className="w-full h-10 border-b border-orange-900/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
