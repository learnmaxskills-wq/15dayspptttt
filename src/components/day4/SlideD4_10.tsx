"use client";

import { motion } from "framer-motion";
import { Zap, Terminal } from "lucide-react";

const promptLines = [
  { text: "Build CareerGPS AI.", type: "highlight" },
  { text: "", type: "blank" },
  { text: "An AI-powered career guidance platform", type: "text" },
  { text: "for Indian students.", type: "text" },
  { text: "", type: "blank" },
  { text: "Include:", type: "label" },
  { text: "  • Onboarding Questions", type: "item" },
  { text: "  • Career Recommendations", type: "item" },
  { text: "  • Career Dashboard", type: "item" },
  { text: "  • Roadmap Generator", type: "item" },
  { text: "", type: "blank" },
  { text: "Modern Design.", type: "highlight" },
];
const colorMap: Record<string, string> = { text: "text-zinc-300", blank: "", highlight: "text-purple-300 font-bold", label: "text-cyan-400 font-bold", item: "text-zinc-300" };

export function SlideD4_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-12 z-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="w-20 h-20 bg-yellow-500/15 border border-yellow-500/30 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(234,179,8,0.3)]">
            <Zap className="w-10 h-10 text-yellow-400" />
          </motion.div>
          <p className="text-yellow-400 font-mono tracking-[0.5em] text-sm uppercase mb-2">Round 1</p>
          <h1 className="text-7xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-6">BOLT</h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">The lightning-fast prototype builder. Watch it generate a full app in seconds.</p>
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl"><p className="text-green-400 font-medium">💪 Strengths?</p></motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl"><p className="text-red-400 font-medium">🎯 Weaknesses?</p></motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-[#0a0818] border border-purple-900/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.08)] flex flex-col" style={{ height: "55vh" }}>
          <div className="bg-[#0d0a1e] border-b border-purple-900/30 px-6 py-4 flex items-center gap-4 flex-shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
            <div className="flex items-center gap-2 text-purple-500/60 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>bolt_round1.prompt</span></div>
          </div>
          <div className="flex flex-1 overflow-hidden p-5 gap-4">
            <div className="flex flex-col text-purple-900/50 font-mono text-xs leading-7 select-none text-right border-r border-purple-900/20 pr-3 flex-shrink-0">
              {promptLines.map((_, i) => <span key={i}>{i + 1}</span>)}
            </div>
            <div className="flex-1 overflow-auto">
              {promptLines.map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.05 }} className={`font-mono text-sm leading-7 ${colorMap[line.type]}`}>{line.text || "\u00A0"}</motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
