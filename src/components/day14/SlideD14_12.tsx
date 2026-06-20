"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";

export function SlideD14_12() {
  const elements = [
    { label: "Curiosity", sub: "Agitates the brain", glow: "border-[#00f0ff] text-[#00f0ff]" },
    { label: "Attention", sub: "Locks the viewer", glow: "border-zinc-800 text-zinc-300" },
    { label: "Retention", sub: "Feeds the algorithm", glow: "border-zinc-800 text-zinc-300" },
    { label: "Growth", sub: "Explodes the reach", glow: "border-[#ccff00]/40 text-[#ccff00]" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Attention Engine
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-4">
          Why does it work?
        </motion.h2>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="bg-zinc-950 border border-zinc-850 px-6 py-2.5 rounded-lg mb-12 flex items-center gap-2 text-zinc-400 font-mono text-sm"
        >
          <HelpCircle className="w-4 h-4 text-[#ccff00]" />
          <span>Explain: Humans are curious.</span>
        </motion.div>

        {/* Loop horizontal blocks */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-4xl">
          {elements.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.2, type: "spring", stiffness: 100 }}
                className={`bg-zinc-950/70 border ${item.glow} rounded-2xl p-5 w-full md:w-44 flex flex-col items-center justify-center text-center`}
              >
                <span className="text-xs font-mono text-zinc-500 uppercase mb-2">Step 0{i + 1}</span>
                <h4 className="text-xl font-bold font-display mb-1">{item.label}</h4>
                <p className="text-zinc-500 text-xs font-mono leading-relaxed">{item.sub}</p>
              </motion.div>

              {i < elements.length - 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.2 }} className="my-2 md:my-0 md:mx-2 text-zinc-700 rotate-90 md:rotate-0">
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
