"use client";

import { motion } from "framer-motion";

const days = [
  { day: 1, title: "Problem", done: true },
  { day: 2, title: "Validation", done: true },
  { day: 3, title: "MVP", done: true },
  { day: 4, title: "Builder Ecosystem", done: true },
  { day: 5, title: "Product Machine", done: true },
  { day: 6, title: "Startup Factory", done: true },
  { day: 7, title: "Working Product", done: true, current: true },
];

export function SlideD7_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-display font-black text-white mb-14 z-10">THE JOURNEY</motion.h1>

      <div className="w-full max-w-4xl z-10 grid grid-cols-7 gap-3 px-8">
        {days.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
            className={`flex flex-col items-center p-4 rounded-2xl border-2 ${
              d.current ? "bg-indigo-500/15 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)]" : "bg-zinc-900/40 border-zinc-800"
            }`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl font-display font-black text-lg mb-3 ${
              d.current ? "bg-indigo-500 text-white" : "bg-zinc-800 text-zinc-500"
            }`}>D{d.day}</div>
            <p className={`text-sm font-medium text-center ${d.current ? "text-white" : "text-zinc-500"}`}>{d.title}</p>
            {d.done && !d.current && <span className="text-green-500/60 text-xs mt-2">✓</span>}
            {d.current && <span className="text-indigo-400 text-xs mt-2 animate-pulse font-mono">● NOW</span>}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="mt-14 z-10 text-center space-y-3">
        <p className="text-2xl text-zinc-500 font-light">"Seven days ago... this existed only in your imagination."</p>
        <p className="text-2xl text-indigo-300 font-bold">"Today... it exists on your computer."</p>
      </motion.div>
    </div>
  );
}
