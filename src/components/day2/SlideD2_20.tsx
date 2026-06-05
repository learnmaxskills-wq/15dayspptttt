"use client";

import { motion } from "framer-motion";
import { MessageSquare, Terminal } from "lucide-react";

const lines = [
  { text: "Find Reddit discussions related to:", type: "text" },
  { text: "", type: "blank" },
  { text: "[Problem]", type: "var" },
  { text: "", type: "blank" },
  { text: "Show:", type: "label" },
  { text: "  1. Complaints", type: "item" },
  { text: "  2. Frustrations", type: "item" },
  { text: "  3. Failed Solutions", type: "item" },
  { text: "  4. Wishes", type: "item" },
  { text: "  5. Emotional Language", type: "item" },
];
const colorMap: Record<string, string> = {
  text: "text-zinc-300",
  blank: "",
  var: "text-orange-300 font-semibold",
  label: "text-orange-400 font-bold",
  item: "text-zinc-300",
};

export function SlideD2_20() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(249,115,22,0.06),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 z-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="w-24 h-24 bg-orange-500/10 border border-orange-500/30 rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
            <MessageSquare className="w-12 h-12 text-orange-400" />
          </div>
          <p className="text-orange-400 font-mono tracking-[0.4em] uppercase text-sm mb-4">Listen To The Customer</p>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6">REDDIT MINING</h1>
          <p className="text-zinc-400 text-xl font-light leading-relaxed">Mining real complaints is your most valuable research activity.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full bg-[#100a04] border border-orange-900/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.08)] flex flex-col"
          style={{ height: "50vh" }}
        >
          <div className="bg-[#170f06] border-b border-orange-900/30 px-6 py-4 flex items-center gap-4 flex-shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
            <div className="flex items-center gap-2 text-orange-500/60 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>reddit_mining.prompt</span></div>
          </div>
          <div className="flex flex-1 overflow-hidden p-6 gap-4">
            <div className="flex flex-col text-orange-900/50 font-mono text-sm leading-7 select-none text-right border-r border-orange-900/20 pr-4 flex-shrink-0">
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
    </div>
  );
}
