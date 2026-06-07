"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const steps = [
  { label: "Problem", done: true }, { label: "Research", done: true }, { label: "Validation", done: true },
  { label: "Design", done: true }, { label: "Prototype", done: true, current: true },
  { label: "Product", done: false }, { label: "Users", done: false },
];

export function SlideD4_7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Modern Building Ecosystem</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Where Are We Right Now?</h1>
      </motion.div>

      <div className="w-full max-w-lg flex flex-col items-center z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 ${
                step.current
                  ? "bg-purple-500/15 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.3)] scale-105"
                  : step.done
                  ? "bg-zinc-900/40 border-zinc-700"
                  : "bg-[#0a0a1a] border-zinc-800/50"
              }`}
            >
              <div className="flex items-center gap-4">
                {step.current && <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />}
                <span className={`text-2xl font-display font-bold ${step.current ? "text-white" : step.done ? "text-zinc-400" : "text-zinc-600"}`}>{step.label}</span>
              </div>
              {step.done && !step.current && <span className="text-green-500 font-mono text-xs">✓</span>}
              {step.current && <span className="text-purple-400 font-mono text-xs animate-pulse">● YOU</span>}
              {!step.done && <span className="text-zinc-700 font-mono text-xs">NEXT</span>}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 + 0.08 }} className="my-1.5">
                <ArrowDown className={`w-4 h-4 ${i < 4 ? "text-zinc-600" : "text-zinc-800"}`} />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8 z-10 bg-purple-500/10 border border-purple-500/30 px-8 py-4 rounded-2xl">
        <p className="text-xl text-purple-300 font-medium">"Today we're exploring <strong className="text-white">what comes next.</strong>"</p>
      </motion.div>
    </div>
  );
}
