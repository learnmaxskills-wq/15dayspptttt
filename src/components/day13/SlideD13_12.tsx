"use client";

import { motion } from "framer-motion";
import { Terminal, AlignLeft } from "lucide-react";

export function SlideD13_12() {
  const scriptLines = [
    { label: "HOOK", line: '"Most students fail interviews because..."', glow: "border-rose-950/40 text-rose-400 bg-rose-950/10" },
    { label: "PROBLEM", line: '"They never get real practice."', glow: "border-red-950/40 text-red-400 bg-red-950/10" },
    { label: "SOLUTION", line: '"That\'s why we built [Product Name]..."', glow: "border-fuchsia-950/40 text-fuchsia-400 bg-fuchsia-950/10" },
    { label: "RESULT", line: '"Practice anytime with AI and receive instant feedback."', glow: "border-emerald-950/40 text-emerald-400 bg-emerald-950/10" },
    { label: "CTA", line: '"Try it today at [Link]."', glow: "border-amber-950/40 text-amber-400 bg-amber-950/10" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-4">
          Drafting the Storyboard
        </motion.span>
        
        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold font-display text-center mb-8 tracking-tight">
          The Video Outline: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">Step-by-Step</span>
        </motion.h2>

        {/* Script Sheet Card */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 md:p-8 w-full max-w-3xl relative overflow-hidden shadow-2xl"
        >
          {/* Script UI Header */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">startup_pitch_formula.txt</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {scriptLines.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.3 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 py-2 border-b border-zinc-900 last:border-0"
              >
                <div className={`px-3 py-1 rounded-md text-xs font-mono tracking-wider w-24 text-center shrink-0 uppercase border ${item.glow}`}>
                  {item.label}
                </div>
                <div className="flex items-center gap-2">
                  <AlignLeft className="w-4 h-4 text-zinc-600 hidden md:block" />
                  <p className="text-zinc-200 font-mono text-sm leading-relaxed">{item.line}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Prompt Done mark */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="mt-8 flex justify-end">
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-lg">
              Done.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
