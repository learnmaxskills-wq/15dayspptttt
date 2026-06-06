"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const journey = [
  { day: "Day 1", label: "Problem Discovery", done: true },
  { day: "Day 2", label: "Validation", done: true },
  { day: "Day 3", label: "Product Design", done: false, current: true },
  { day: "Day 4", label: "AI Developer Toolkit", done: false },
  { day: "Day 5", label: "Real Product Building", done: false },
  { day: "Day 6+", label: "Scaling Into A Startup", done: false },
];

export function SlideD3_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Your Map</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Journey So Far</h1>
      </motion.div>

      <div className="w-full max-w-2xl flex flex-col items-center z-10">
        {journey.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 ${
                step.current
                  ? "bg-orange-500/15 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.3)] scale-105"
                  : step.done
                  ? "bg-zinc-900/60 border-zinc-700"
                  : "bg-[#0d0600] border-zinc-800"
              }`}
            >
              <div className="flex items-center gap-5">
                {step.current && <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0" />}
                <div>
                  <p className={`font-mono text-xs uppercase tracking-widest mb-1 ${step.current ? "text-orange-400" : step.done ? "text-zinc-500" : "text-zinc-700"}`}>{step.day}</p>
                  <p className={`text-2xl font-display font-bold ${step.current ? "text-white" : step.done ? "text-zinc-400" : "text-zinc-600"}`}>{step.label}</p>
                </div>
              </div>
              {step.done && <span className="text-green-500 font-mono text-sm">✓ Done</span>}
              {step.current && <span className="text-orange-400 font-mono text-sm animate-pulse">● NOW</span>}
            </motion.div>
            {i < journey.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 + 0.08 }} className="my-2">
                <ArrowDown className={`w-5 h-5 ${i < 2 ? "text-zinc-600" : "text-zinc-800"}`} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
