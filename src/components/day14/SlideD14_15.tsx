"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export function SlideD14_15() {
  const elements = [
    { label: "Curiosity", sub: '"What happens if..."', desc: "Leaving an open loop in the user's mind.", color: "border-[#00f0ff]/30 text-[#00f0ff]" },
    { label: "Surprise", sub: '"This should be impossible..."', desc: "Interrupting expected expectations and norms.", color: "border-zinc-800 text-zinc-300" },
    { label: "Emotion", sub: "Fear · Hope · Excitement", desc: "Forcing a visceral, chemical response.", color: "border-zinc-800 text-zinc-300" },
    { label: "Identity", sub: "Representation", desc: "People share things that reflect who they are.", color: "border-zinc-800 text-zinc-300" },
    { label: "Story", sub: "Narrative Arc", desc: "Humans are biologically addicted to narratives.", color: "border-[#ccff00]/40 text-[#ccff00]" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 5: WHY VIRAL CONTENT GOES VIRAL</span>
        </motion.div>

        {/* Framing Header */}
        <div className="flex flex-col items-center text-center mb-10 max-w-xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-red-500/10 border border-red-500/30 px-4 py-1.5 rounded-md mb-4 text-red-400 font-mono text-xs uppercase font-bold tracking-widest">
            Views = Luck? Wrong.
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl font-mono text-zinc-300">
            "Most viral content contains at least one of these..."
          </motion.h2>
        </div>

        {/* Trigger Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full max-w-5xl">
          {elements.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 100 }}
              className={`bg-zinc-950/70 border ${item.color} rounded-2xl p-5 flex flex-col items-start relative overflow-hidden min-h-[170px]`}
            >
              <span className="text-xs font-mono text-zinc-500 uppercase mb-2">Trigger 0{i + 1}</span>
              <h4 className="text-lg font-bold font-display mb-1 text-white">{item.label}</h4>
              <span className="text-xs font-mono text-zinc-400 font-bold mb-3 block">{item.sub}</span>
              <p className="text-zinc-500 text-[11px] font-mono leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
