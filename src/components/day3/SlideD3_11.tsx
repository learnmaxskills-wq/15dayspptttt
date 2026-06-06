"use client";

import { motion } from "framer-motion";
import { Brain, Terminal } from "lucide-react";

const lines = [
  { text: "Act as a senior product manager at a", type: "text" },
  { text: "billion-dollar startup.", type: "text" },
  { text: "", type: "blank" },
  { text: "Problem: [Paste]", type: "var" },
  { text: "Customer: [Paste]", type: "var" },
  { text: "Outcome: [Paste]", type: "var" },
  { text: "", type: "blank" },
  { text: "Help me create:", type: "label" },
  { text: "  1. Product Structure", type: "item" },
  { text: "  2. Product Modules", type: "item" },
  { text: "  3. User Journey", type: "item" },
  { text: "  4. MVP", type: "item" },
  { text: "  5. Features To Avoid", type: "item" },
  { text: "  6. Product Vision", type: "item" },
];
const colorMap: Record<string, string> = {
  text: "text-zinc-300", blank: "", var: "text-amber-300 font-semibold", label: "text-orange-400 font-bold", item: "text-zinc-300",
};

export function SlideD3_11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-12 z-10 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <div className="w-20 h-20 bg-purple-500/10 border border-purple-500/30 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <Brain className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">AI Product Manager</h2>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">Open Claude</h1>
          <p className="text-2xl text-zinc-400 font-light leading-relaxed mb-6">Students now use AI as their Product Manager.</p>
          <div className="space-y-3">
            {["It helps you build faster", "It catches blind spots", "It thinks like a senior PM"].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.2 }} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                <p className="text-xl text-zinc-300">{p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="w-full bg-[#0e0700] border border-orange-900/40 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.08)] flex flex-col" style={{ height: "55vh" }}>
          <div className="bg-[#160b00] border-b border-orange-900/30 px-6 py-4 flex items-center gap-4 flex-shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
            <div className="flex items-center gap-2 text-orange-500/60 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>product_manager.prompt</span></div>
          </div>
          <div className="flex flex-1 overflow-hidden p-5 gap-4">
            <div className="flex flex-col text-orange-900/50 font-mono text-xs leading-7 select-none text-right border-r border-orange-900/20 pr-3 flex-shrink-0">
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
    </div>
  );
}
