"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stages = [
  { label: "IDEA", done: true, color: "text-zinc-500 bg-zinc-900/40 border-zinc-700" },
  { label: "PROTOTYPE", done: true, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/40" },
  { label: "PRODUCT", done: false, color: "text-white bg-emerald-500/15 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)]", current: true },
];

export function SlideD5_3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Next Challenge</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Journey</h1>
      </motion.div>

      <div className="flex flex-col items-center z-10 mb-12">
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.4, type: "spring" }}
              className={`px-16 py-8 rounded-3xl border-2 text-center ${stage.color} ${stage.current ? "scale-110" : ""}`}>
              <p className="text-4xl font-display font-black">{stage.label}</p>
              {stage.done && !stage.current && <p className="text-xs font-mono uppercase tracking-widest mt-2 opacity-50">✓ DONE</p>}
              {stage.current && <p className="text-xs font-mono uppercase tracking-widest mt-2 text-emerald-400 animate-pulse">● TODAY</p>}
            </motion.div>
            {i < stages.length - 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.4 }} className="my-3"><ArrowDown className="w-6 h-6 text-emerald-500/40" /></motion.div>}
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="z-10 text-center">
        <p className="text-3xl text-zinc-500 font-light">"Most people never get past the idea stage."</p>
        <p className="text-3xl text-white font-bold mt-3">"We got past that."</p>
      </motion.div>
    </div>
  );
}
