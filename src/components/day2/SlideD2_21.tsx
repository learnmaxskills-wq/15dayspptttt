"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const flow = [
  { text: "Complaint", color: "text-zinc-500", border: "border-zinc-800", bg: "bg-zinc-900/40" },
  { text: "Pain", color: "text-red-400", border: "border-red-900/40", bg: "bg-red-500/5" },
  { text: "Opportunity", color: "text-green-400", border: "border-green-900/40", bg: "bg-green-500/5" },
  { text: "Business", color: "text-cyan-400", border: "border-cyan-500/40", bg: "bg-cyan-500/10", glow: true },
];

export function SlideD2_21() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Every Complaint Is An Opportunity</h1>
      </motion.div>

      <div className="w-full max-w-2xl flex flex-col items-center z-10">
        {flow.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.4 }}
              className={`w-full text-center p-8 rounded-3xl border-2 ${step.border} ${step.bg} ${step.glow ? "shadow-[0_0_40px_rgba(6,182,212,0.25)] scale-110" : ""}`}
            >
              <span className={`text-4xl md:text-5xl font-display font-bold uppercase tracking-widest ${step.color}`}>{step.text}</span>
            </motion.div>
            {i < flow.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.4 + 0.2 }} className="my-5">
                <ArrowDown className="w-8 h-8 text-zinc-700" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
