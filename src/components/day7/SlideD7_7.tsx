"use client";

import { motion } from "framer-motion";
import { X, Check, Terminal } from "lucide-react";

const badPrompt = ["Build CareerGPS."];
const goodPrompt = [
  { text: "Create an AI-powered career guidance platform.", type: "highlight" },
  { text: "", type: "blank" },
  { text: "Pages:", type: "label" },
  { text: "  • Landing Page", type: "item" },
  { text: "  • Questionnaire", type: "item" },
  { text: "  • Dashboard", type: "item" },
  { text: "  • Career Analysis", type: "item" },
  { text: "  • Roadmap", type: "item" },
  { text: "", type: "blank" },
  { text: "Style: Modern, Student-Friendly, Trustworthy", type: "highlight" },
  { text: "Mobile Responsive: Yes", type: "item" },
];
const colorMap: Record<string, string> = { highlight: "text-indigo-300 font-bold", label: "text-violet-400 font-bold", item: "text-zinc-300", blank: "" };

export function SlideD7_7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-display font-black text-white mb-10 z-10">Bad Prompt vs Good Prompt</motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-10 z-10 px-8">
        {/* Bad */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-red-500/5 border border-red-500/20 rounded-3xl overflow-hidden">
          <div className="bg-red-500/10 border-b border-red-500/20 px-6 py-4 flex items-center gap-3">
            <X className="w-5 h-5 text-red-500" /><span className="text-red-400 font-mono text-sm">BAD PROMPT</span>
          </div>
          <div className="p-8">
            <div className="bg-[#0a0510] border border-zinc-800 rounded-2xl p-6 font-mono text-lg text-zinc-400">Build CareerGPS.</div>
            <p className="text-red-400 font-mono text-sm mt-6">→ That's garbage.</p>
          </div>
        </motion.div>

        {/* Good */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="bg-indigo-500/5 border border-indigo-500/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.08)]">
          <div className="bg-indigo-500/10 border-b border-indigo-500/20 px-6 py-4 flex items-center gap-3">
            <Check className="w-5 h-5 text-indigo-400" /><span className="text-indigo-400 font-mono text-sm">GOOD PROMPT</span>
          </div>
          <div className="p-6">
            <div className="bg-[#060820] border border-indigo-900/40 rounded-2xl p-5 flex gap-4">
              <div className="flex flex-col text-indigo-900/50 font-mono text-xs leading-6 select-none border-r border-indigo-900/20 pr-3 flex-shrink-0">
                {goodPrompt.map((_, i) => <span key={i}>{i + 1}</span>)}
              </div>
              <div className="flex-1">
                {goodPrompt.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.06 }} className={`font-mono text-sm leading-6 ${colorMap[line.type]}`}>{line.text || "\u00A0"}</motion.div>
                ))}
              </div>
            </div>
            <p className="text-indigo-400 font-mono text-sm mt-4">→ This changes everything.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
