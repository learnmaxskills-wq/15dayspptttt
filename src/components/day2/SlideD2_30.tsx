"use client";

import { motion } from "framer-motion";

const nodes = [
  { text: "Problem", color: "text-zinc-300", bg: "bg-zinc-900", border: "border-zinc-700" },
  { text: "Customer", color: "text-zinc-300", bg: "bg-zinc-900", border: "border-zinc-700" },
  { text: "Market", color: "text-zinc-300", bg: "bg-zinc-900", border: "border-zinc-700" },
  { text: "Trend", color: "text-green-400", bg: "bg-green-900/10", border: "border-green-800" },
  { text: "Customer Psychology", color: "text-pink-400", bg: "bg-pink-900/10", border: "border-pink-800" },
  { text: "Investor Feedback", color: "text-amber-400", bg: "bg-amber-900/10", border: "border-amber-800" },
  { text: "Opportunity", color: "text-emerald-400", bg: "bg-emerald-900/10", border: "border-emerald-800" },
  { text: "Decision", color: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-500", glow: true },
];

export function SlideD2_30() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">All Connected</h2>
        <h1 className="text-4xl md:text-5xl font-display font-black text-white">The Startup Validation Canvas</h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-5 z-10 max-w-5xl mb-10">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`px-7 py-4 rounded-full border-2 ${node.bg} ${node.border} ${node.glow ? "shadow-[0_0_30px_rgba(6,182,212,0.5)] scale-110" : ""}`}
          >
            <span className={`text-xl font-display font-bold ${node.color}`}>{node.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8 }} className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-6" />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-zinc-500 font-mono text-sm uppercase tracking-widest z-10">Everything is Connected</motion.p>
    </div>
  );
}
