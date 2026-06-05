"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const promptLines = [
  { text: "I am evaluating a startup opportunity.", type: "text" },
  { text: "", type: "blank" },
  { text: "Problem: [Paste]", type: "var" },
  { text: "Customer: [Paste]", type: "var" },
  { text: "", type: "blank" },
  { text: "Act as a McKinsey consultant.", type: "text" },
  { text: "", type: "blank" },
  { text: "Research:", type: "label" },
  { text: "  1. Market size", type: "item" },
  { text: "  2. Number of affected users", type: "item" },
  { text: "  3. Competitors", type: "item" },
  { text: "  4. Trends", type: "item" },
  { text: "  5. Hidden opportunities", type: "item" },
  { text: "  6. Risks", type: "item" },
  { text: "", type: "blank" },
  { text: "Use evidence. Challenge assumptions.", type: "highlight" },
];

const colorMap: Record<string, string> = {
  text: "text-zinc-300",
  blank: "",
  var: "text-violet-300 font-semibold",
  label: "text-cyan-400 font-bold",
  item: "text-zinc-300",
  highlight: "text-yellow-300 font-bold",
};

export function SlideD2_11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,92,246,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-violet-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Engine</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Research Prompt</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-4xl bg-[#060d1a] border border-violet-900/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.1)] z-10 flex flex-col"
        style={{ height: "58vh" }}
      >
        {/* Terminal header */}
        <div className="bg-[#0c1426] border-b border-violet-900/40 px-6 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 text-violet-400/70 font-mono text-sm ml-4">
            <Terminal className="w-4 h-4" />
            <span>mckinsey_research.prompt</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden p-6 gap-4">
          {/* Line numbers */}
          <div className="flex flex-col text-violet-900/60 font-mono text-sm leading-7 select-none text-right border-r border-violet-900/20 pr-4 flex-shrink-0">
            {promptLines.map((_, i) => <span key={i}>{i + 1}</span>)}
          </div>
          {/* Code */}
          <div className="flex-1 overflow-auto">
            {promptLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.04 }}
                className={`font-mono text-sm leading-7 ${colorMap[line.type] || "text-zinc-300"}`}
              >
                {line.text || "\u00A0"}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
