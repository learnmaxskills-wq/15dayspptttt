"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool, Palette, Film, Hammer } from "lucide-react";

const pairs = [
  { role: "Writer", tool: "Microsoft Word", icon: PenTool },
  { role: "Designer", tool: "Photoshop", icon: Palette },
  { role: "Video Editor", tool: "Premiere", icon: Film },
  { role: "Builder", tool: "IDE", icon: Hammer, highlight: true },
];

export function SlideD6_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-amber-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">What Is An IDE?</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Integrated Development Environment</h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-xl text-zinc-500 font-light italic">"Here's what it actually means."</motion.p>
      </motion.div>

      <div className="w-full max-w-3xl z-10 space-y-5">
        {pairs.map((pair, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 + i * 0.3 }}
            className={`flex items-center gap-6 p-6 rounded-2xl ${pair.highlight ? "bg-gradient-to-r from-amber-500/15 to-transparent border-2 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]" : "bg-zinc-900/40 border border-zinc-800"}`}>
            <pair.icon className={`w-8 h-8 flex-shrink-0 ${pair.highlight ? "text-amber-400" : "text-zinc-500"}`} />
            <span className={`text-2xl font-display font-bold w-40 ${pair.highlight ? "text-white" : "text-zinc-400"}`}>{pair.role}</span>
            <ArrowRight className={`w-6 h-6 ${pair.highlight ? "text-amber-400" : "text-zinc-700"}`} />
            <span className={`text-2xl font-display font-bold ${pair.highlight ? "text-amber-400" : "text-zinc-300"}`}>{pair.tool}</span>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="mt-10 text-2xl text-amber-300 font-medium z-10">
        "It's your <strong className="text-white">digital workshop.</strong>"
      </motion.p>
    </div>
  );
}
