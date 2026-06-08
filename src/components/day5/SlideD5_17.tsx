"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const days = [
  { day: 6, title: "Builder Setup Day", tools: "GitHub, Cursor, Node.js, Supabase" },
  { day: 7, title: "Frontend", tools: "Building what users see" },
  { day: 8, title: "Backend + Database", tools: "Wiring the logic & memory" },
  { day: 9, title: "AI Integration", tools: "Adding the intelligence" },
  { day: 10, title: "Launch Day", tools: "Going live to the world", highlight: true },
];

export function SlideD5_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <CalendarDays className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Final Reveal</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">THE NEXT 5 DAYS</h1>
      </motion.div>

      <div className="w-full max-w-4xl flex flex-col gap-4 z-10 px-8">
        {days.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.3 }}
            className={`flex items-center gap-6 p-6 rounded-2xl border-l-4 ${item.highlight ? "bg-gradient-to-r from-emerald-500/20 to-transparent border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]" : "bg-zinc-900/60 border-zinc-700"}`}>
            <div className={`w-16 h-16 flex items-center justify-center rounded-xl font-display font-black text-2xl ${item.highlight ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>
              D{item.day}
            </div>
            <div>
              <p className={`text-2xl font-bold mb-1 ${item.highlight ? "text-white" : "text-zinc-200"}`}>{item.title}</p>
              <p className={`text-lg ${item.highlight ? "text-emerald-300 font-medium" : "text-zinc-500 font-light"}`}>{item.tools}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
