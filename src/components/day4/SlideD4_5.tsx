"use client";

import { motion } from "framer-motion";
import { Users, Bot } from "lucide-react";

const team2020 = ["Founder", "Designer", "Frontend Developer", "Backend Developer", "Product Manager", "Marketer"];

export function SlideD4_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Great Shift</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">What Changed?</h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 z-10 items-start">
        {/* 2020 */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-zinc-900/40 border border-zinc-700 rounded-3xl p-10">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8 text-zinc-500" />
            <p className="text-5xl font-display font-black text-zinc-500">2020</p>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">Startup Team</p>
          <div className="space-y-3">
            {team2020.map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-center gap-4 bg-zinc-800/40 border border-zinc-700 px-5 py-3 rounded-xl">
                <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-zinc-400 text-xs font-mono">{i + 1}</div>
                <span className="text-lg text-zinc-400">{role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2026 */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="bg-gradient-to-b from-purple-500/10 to-cyan-500/5 border-2 border-purple-500/40 rounded-3xl p-10 shadow-[0_0_80px_rgba(168,85,247,0.15)]">
          <div className="flex items-center gap-4 mb-8">
            <Bot className="w-8 h-8 text-purple-400" />
            <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">2026</p>
          </div>
          <p className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-6">Startup Team</p>
          <div className="flex flex-col items-center justify-center py-8 gap-6">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }} className="bg-purple-500/20 border-2 border-purple-500/50 px-12 py-6 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <p className="text-4xl font-display font-black text-white">Founder</p>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-5xl font-display font-black text-purple-400">×</motion.p>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring" }} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-2 border-cyan-500/50 px-12 py-6 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              <p className="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
