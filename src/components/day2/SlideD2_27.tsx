"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const lines = [
  { text: "Act as a startup strategist.", type: "text" },
  { text: "", type: "blank" },
  { text: "Based on:", type: "label" },
  { text: "  - Problem", type: "item" },
  { text: "  - Research", type: "item" },
  { text: "  - Customer Insights", type: "item" },
  { text: "  - Investor Feedback", type: "item" },
  { text: "", type: "blank" },
  { text: "Identify:", type: "label" },
  { text: "  1. Best Customer Segment", type: "item" },
  { text: "  2. Biggest Opportunity", type: "item" },
  { text: "  3. Best Business Model", type: "item" },
  { text: "  4. Competitive Advantage", type: "item" },
  { text: "  5. Future Growth Opportunities", type: "item" },
];
const colorMap: Record<string, string> = {
  text: "text-zinc-300", blank: "", label: "text-emerald-400 font-bold", item: "text-zinc-300",
};

export function SlideD2_27() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(16,185,129,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Synthesis</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Strategy Prompt</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-4xl bg-[#050f0c] border border-emerald-900/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.1)] z-10 flex flex-col"
        style={{ height: "55vh" }}
      >
        <div className="bg-[#09180e] border-b border-emerald-900/30 px-6 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
          <div className="flex items-center gap-2 text-emerald-500/60 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>strategist.prompt</span></div>
        </div>
        <div className="flex flex-1 overflow-hidden p-6 gap-4">
          <div className="flex flex-col text-emerald-900/50 font-mono text-sm leading-7 select-none text-right border-r border-emerald-900/20 pr-4 flex-shrink-0">
            {lines.map((_, i) => <span key={i}>{i + 1}</span>)}
          </div>
          <div className="flex-1 overflow-auto">
            {lines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.05 }} className={`font-mono text-sm leading-7 ${colorMap[line.type] || "text-zinc-300"}`}>{line.text || "\u00A0"}</motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
