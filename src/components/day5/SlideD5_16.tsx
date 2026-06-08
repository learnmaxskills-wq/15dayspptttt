"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const stack = [
  { role: "Frontend", tool: "Cursor + Antigravity", color: "emerald" },
  { role: "Backend", tool: "Cursor + Antigravity", color: "cyan" },
  { role: "Database", tool: "Supabase", color: "blue" },
  { role: "Authentication", tool: "Supabase Auth", color: "purple" },
  { role: "AI", tool: "OpenAI", color: "fuchsia" },
  { role: "Code Storage", tool: "GitHub", color: "zinc" },
  { role: "Deployment", tool: "Vercel", color: "orange" },
  { role: "Domain", tool: "Custom Domain", color: "yellow" },
];

export function SlideD5_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 11</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">THE STARTUP STACK</h1>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 z-10 px-8">
        {stack.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
            className={`bg-zinc-900/60 border border-${item.color}-500/30 p-6 rounded-2xl flex flex-col justify-center`}>
            <p className={`text-${item.color}-400 font-mono text-xs uppercase tracking-widest mb-2`}>{item.role}</p>
            <p className="text-xl font-bold text-white">{item.tool}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="mt-14 z-10 bg-emerald-500/10 border-2 border-emerald-500/40 px-12 py-6 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.2)]">
        <p className="text-2xl text-emerald-300 font-light text-center">"This is exactly what <strong className="text-white font-bold">we're going to use.</strong>"</p>
      </motion.div>
    </div>
  );
}
