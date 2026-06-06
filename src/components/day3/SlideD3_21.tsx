"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const lines = [
  { text: "Act as a senior startup product designer.", type: "text" },
  { text: "", type: "blank" },
  { text: "Build a modern web application.", type: "text" },
  { text: "", type: "blank" },
  { text: "Startup Name: [Name]", type: "var" },
  { text: "Customer: [Customer]", type: "var" },
  { text: "Problem: [Problem]", type: "var" },
  { text: "Outcome: [Outcome]", type: "var" },
  { text: "Core Modules: [List]", type: "var" },
  { text: "User Journey: [List]", type: "var" },
  { text: "", type: "blank" },
  { text: "Requirements:", type: "label" },
  { text: "  • Modern UI", type: "item" },
  { text: "  • Mobile Responsive", type: "item" },
  { text: "  • Startup Quality Design", type: "item" },
  { text: "  • Landing Page", type: "item" },
  { text: "  • Product Flow", type: "item" },
  { text: "  • Dashboard", type: "item" },
];
const colorMap: Record<string, string> = {
  text: "text-zinc-300", blank: "", var: "text-amber-300 font-semibold", label: "text-orange-400 font-bold", item: "text-zinc-300",
};

export function SlideD3_21() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Open Bolt</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Build Prompt</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-4xl bg-[#0e0700] border border-orange-900/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.08)] z-10 flex flex-col"
        style={{ height: "58vh" }}
      >
        <div className="bg-[#160b00] border-b border-orange-900/30 px-6 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
          <div className="flex items-center gap-2 text-orange-500/60 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>bolt_build.prompt</span></div>
        </div>
        <div className="flex flex-1 overflow-hidden p-5 gap-4">
          <div className="flex flex-col text-orange-900/50 font-mono text-xs leading-7 select-none text-right border-r border-orange-900/20 pr-3 flex-shrink-0">
            {lines.map((_, i) => <span key={i}>{i + 1}</span>)}
          </div>
          <div className="flex-1 overflow-auto">
            {lines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.04 }} className={`font-mono text-sm leading-7 ${colorMap[line.type] || "text-zinc-300"}`}>{line.text || "\u00A0"}</motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
