"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const days = [
  { day: "Day 1", label: "Problem" },
  { day: "Day 2", label: "Validation" },
  { day: "Day 3", label: "Product" },
  { day: "Day 4", label: "AI Developer Toolkit" },
  { day: "Day 5", label: "Real Startup Building Continues 🚀" },
];

export function SlideD3_25() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.08),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/20 blur-[120px] pointer-events-none" />
      {[...Array(10)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{ left: `${10 + i * 8}%`, bottom: "10%" }}
          animate={{ y: [-20, -200], opacity: [1, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-7xl font-display font-black text-zinc-400 leading-tight mb-6">
          Founders Don't Get Paid For
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-red-500 leading-tight mb-16">
          Execution.
        </motion.h2>

        {/* Wait — show journey roadmap */}
        <div className="flex items-center justify-center flex-wrap gap-4 mb-10">
          {days.map((d, i) => (
            <div key={i} className="flex items-center gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 + i * 0.2 }} className={`px-5 py-3 rounded-2xl border-2 text-center ${i <= 2 ? "bg-orange-500/10 border-orange-500/40 text-white" : i === days.length - 1 ? "bg-green-500/10 border-green-500/40 text-green-400" : "bg-zinc-900/40 border-zinc-800 text-zinc-500"}`}>
                <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-1">{d.day}</p>
                <p className="font-display font-bold text-sm">{d.label}</p>
              </motion.div>
              {i < days.length - 1 && <ArrowDown className="w-4 h-4 text-zinc-700 rotate-[-90deg]" />}
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="bg-orange-500/10 border border-orange-500/30 px-12 py-8 rounded-3xl shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <p className="text-2xl text-zinc-300 font-light italic">See you tomorrow. Don't stop now.</p>
          <p className="text-4xl font-display font-black text-orange-400 mt-3">You're becoming a founder. 🔥</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
