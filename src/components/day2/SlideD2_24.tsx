"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const lines = [
  { text: "Act as a Sequoia Capital Partner.", type: "text" },
  { text: "", type: "blank" },
  { text: "Challenge this startup.", type: "highlight" },
  { text: "", type: "blank" },
  { text: "Tell me:", type: "label" },
  { text: "  1. Risks", type: "item" },
  { text: "  2. Assumptions", type: "item" },
  { text: "  3. Weaknesses", type: "item" },
  { text: "  4. Missing Evidence", type: "item" },
  { text: "  5. Would You Invest?", type: "item" },
  { text: "", type: "blank" },
  { text: "Be Brutally Honest.", type: "highlight" },
];
const colorMap: Record<string, string> = {
  text: "text-zinc-300", blank: "", label: "text-amber-400 font-bold", item: "text-zinc-300", highlight: "text-red-400 font-bold",
};

export function SlideD2_24() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-amber-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Stress Test</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Investor Prompt</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-4xl bg-[#0d0b04] border border-amber-900/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.1)] z-10 flex flex-col"
        style={{ height: "55vh" }}
      >
        <div className="bg-[#150f05] border-b border-amber-900/30 px-6 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
          <div className="flex items-center gap-2 text-amber-500/60 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>sequoia_partner.prompt</span></div>
        </div>
        <div className="flex flex-1 overflow-hidden p-6 gap-4">
          <div className="flex flex-col text-amber-900/50 font-mono text-sm leading-7 select-none text-right border-r border-amber-900/20 pr-4 flex-shrink-0">
            {lines.map((_, i) => <span key={i}>{i + 1}</span>)}
          </div>
          <div className="flex-1 overflow-auto">
            {lines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.06 }} className={`font-mono text-sm leading-7 ${colorMap[line.type] || "text-zinc-300"}`}>{line.text || "\u00A0"}</motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
