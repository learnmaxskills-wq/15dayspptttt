"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const tasks = ["Create project", "Import startup architecture", "Generate structure", "Build screens", "Build flows", "Create software"];

export function SlideD6_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Day 7 Preview</h2>
        <h1 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">THE FIRST BUILD</h1>
      </motion.div>

      <div className="w-full max-w-3xl z-10">
        {tasks.map((task, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.2 }}
            className="flex items-center gap-6 bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-2xl mb-3">
            <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/40 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-mono font-bold">{i + 1}</span>
            </div>
            <span className="text-xl font-display font-semibold text-zinc-200">{task}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
