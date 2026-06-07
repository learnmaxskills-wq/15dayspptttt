"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const tools = [
  { name: "Bolt", color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/5" },
  { name: "Lovable", color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/5" },
  { name: "Firebase Studio", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/5" },
];
const criteria = ["Speed", "Design", "Code Quality", "Features", "Usability"];

export function SlideD4_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Students Vote</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Score Table</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-full max-w-5xl bg-[#0a0818] border border-purple-900/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.08)] z-10">
        {/* Header */}
        <div className="grid grid-cols-4 bg-purple-500/10 border-b border-purple-900/30">
          <div className="p-5 text-purple-400 font-mono text-sm uppercase tracking-widest">Criteria</div>
          {tools.map((tool, i) => (
            <div key={i} className={`p-5 text-center ${tool.color} font-display font-bold text-lg`}>{tool.name}</div>
          ))}
        </div>
        {/* Rows */}
        {criteria.map((criterion, ci) => (
          <motion.div key={ci} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + ci * 0.12 }} className="grid grid-cols-4 border-b border-zinc-800/50 hover:bg-purple-500/5 transition-colors">
            <div className="p-5 text-zinc-300 font-medium text-lg">{criterion}</div>
            {tools.map((tool, ti) => (
              <div key={ti} className="p-5 flex items-center justify-center">
                <div className={`w-16 h-10 border-b-2 ${tool.border} flex items-center justify-center`}>
                  <span className="text-zinc-600 font-mono text-sm">/10</span>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
        {/* Total */}
        <div className="grid grid-cols-4 bg-purple-500/5">
          <div className="p-5 text-white font-display font-black text-xl uppercase tracking-widest">Total</div>
          {tools.map((tool, ti) => (
            <div key={ti} className="p-5 flex items-center justify-center">
              <span className={`text-3xl font-mono font-bold ${tool.color}`}>/50</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
