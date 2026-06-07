"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const levels = [
  { num: 1, label: "Problem Finder", color: "text-zinc-500", bg: "bg-zinc-900/40", border: "border-zinc-800" },
  { num: 2, label: "Researcher", color: "text-zinc-500", bg: "bg-zinc-900/40", border: "border-zinc-800" },
  { num: 3, label: "Product Designer", color: "text-zinc-500", bg: "bg-zinc-900/40", border: "border-zinc-800" },
  { num: 4, label: "Prototype Builder", color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500", current: true },
  { num: 5, label: "Product Builder", color: "text-zinc-600", bg: "bg-[#0a0a1a]", border: "border-zinc-800/50", next: true },
  { num: 6, label: "Startup Operator", color: "text-zinc-700", bg: "bg-[#0a0a1a]", border: "border-zinc-800/30" },
  { num: 7, label: "Founder", color: "text-zinc-700", bg: "bg-[#0a0a1a]", border: "border-zinc-800/30" },
];

export function SlideD4_18() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Your Progress</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Builder Ladder</h1>
      </motion.div>

      <div className="w-full max-w-3xl z-10 flex flex-col-reverse gap-3">
        {levels.map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (levels.length - 1 - i) * 0.12 }}
            className={`flex items-center justify-between p-5 rounded-2xl border-2 ${level.bg} ${level.border} ${level.current ? "shadow-[0_0_40px_rgba(168,85,247,0.3)] scale-105" : ""} ${level.next ? "border-dashed" : ""}`}
          >
            <div className="flex items-center gap-5">
              <span className={`font-mono text-2xl font-bold ${level.current ? "text-purple-400" : level.color}`}>L{level.num}</span>
              {level.current && <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />}
              <span className={`text-2xl font-display font-bold ${level.current ? "text-white" : level.color}`}>{level.label}</span>
            </div>
            {level.current && <span className="text-purple-400 font-mono text-sm animate-pulse">● YOU ARE HERE</span>}
            {level.next && <span className="text-cyan-500/60 font-mono text-sm">→ NEXT</span>}
            {level.num <= 3 && <span className="text-green-500/60 font-mono text-xs">✓</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
