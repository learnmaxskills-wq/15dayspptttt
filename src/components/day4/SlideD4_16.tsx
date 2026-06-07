"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, User } from "lucide-react";

export function SlideD4_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Future Is Agentic</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">"What If AI Stopped <em className="not-italic text-zinc-500">Helping</em>?"</h1>
        <p className="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-4">"What If AI Started <em className="not-italic">Doing</em>?"</p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 z-10">
        {/* Old */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-zinc-900/40 border border-zinc-700 rounded-3xl p-10">
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-8">Old Workflow</p>
          <div className="flex items-center justify-center gap-6">
            <div className="bg-zinc-800 border border-zinc-600 px-8 py-6 rounded-2xl text-center">
              <User className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
              <p className="text-2xl font-display font-bold text-zinc-300">Human Works</p>
            </div>
            <ArrowRight className="w-8 h-8 text-zinc-600" />
            <div className="bg-zinc-800 border border-zinc-600 px-8 py-6 rounded-2xl text-center">
              <Bot className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
              <p className="text-2xl font-display font-bold text-zinc-500">AI Helps</p>
            </div>
          </div>
        </motion.div>

        {/* New */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-gradient-to-b from-purple-500/10 to-cyan-500/5 border-2 border-cyan-500/40 rounded-3xl p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-8">New Workflow</p>
          <div className="flex items-center justify-center gap-6">
            <div className="bg-purple-500/15 border border-purple-500/40 px-8 py-6 rounded-2xl text-center">
              <User className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <p className="text-2xl font-display font-bold text-white">Human Gives Mission</p>
            </div>
            <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="w-8 h-8 text-cyan-400" /></motion.div>
            <div className="bg-cyan-500/15 border border-cyan-500/40 px-8 py-6 rounded-2xl text-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <Bot className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <p className="text-2xl font-display font-bold text-cyan-300">AI Completes Mission</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
