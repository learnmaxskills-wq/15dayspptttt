"use client";

import { motion } from "framer-motion";
import { X, Rocket } from "lucide-react";

const timing = [
  { label: "Wrong Idea", icon: <X className="w-10 h-10 text-red-500" />, bg: "bg-red-500/5", border: "border-red-900/40", delay: 0.4 },
  { label: "Wrong Timing", icon: <X className="w-10 h-10 text-red-500" />, bg: "bg-red-500/5", border: "border-red-900/40", delay: 0.8 },
  { label: "Right Idea + Right Timing", icon: <Rocket className="w-10 h-10 text-green-400" />, bg: "bg-green-500/10", border: "border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.2)]", delay: 1.4, highlight: true },
];

export function SlideD2_14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(34,197,94,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-green-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Formula</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Timing Matters</h1>
      </motion.div>

      <div className="w-full max-w-3xl space-y-6 z-10">
        {timing.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
            className={`flex items-center justify-between p-8 rounded-3xl border-2 ${item.border} ${item.bg} backdrop-blur-sm ${item.highlight ? "scale-105" : ""}`}
          >
            <span className={`text-3xl font-display font-bold ${item.highlight ? "text-white" : "text-zinc-400"}`}>{item.label}</span>
            <div className="bg-black/40 p-3 rounded-2xl">{item.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
