"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const steps = [
  { label: "Problem", done: true },
  { label: "Validation", done: true },
  { label: "MVP", done: true },
  { label: "Prototype", done: true },
  { label: "Workshop", done: true, current: true },
  { label: "Code", done: false, next: true },
  { label: "Product", done: false },
  { label: "Users", done: false },
];

export function SlideD6_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-amber-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Big Moment</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Journey So Far</h1>
      </motion.div>

      <div className="w-full max-w-lg flex flex-col items-center z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 ${
                step.current ? "bg-amber-500/15 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.3)] scale-105" :
                step.next ? "bg-cyan-500/10 border-cyan-500/50 border-dashed" :
                step.done ? "bg-zinc-900/40 border-zinc-700" :
                "bg-[#0a0a08] border-zinc-800/50"
              }`}>
              <div className="flex items-center gap-4">
                {step.current && <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />}
                <span className={`text-xl font-display font-bold ${step.current ? "text-white" : step.next ? "text-cyan-300" : step.done ? "text-zinc-400" : "text-zinc-600"}`}>{step.label}</span>
              </div>
              {step.done && !step.current && <span className="text-green-500 font-mono text-xs">✓</span>}
              {step.current && <span className="text-amber-400 font-mono text-xs animate-pulse">● TODAY</span>}
              {step.next && <span className="text-cyan-400 font-mono text-xs">→ TOMORROW</span>}
            </motion.div>
            {i < steps.length - 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 + 0.08 }} className="my-1"><ArrowDown className="w-4 h-4 text-zinc-700" /></motion.div>}
          </div>
        ))}
      </div>
    </div>
  );
}
