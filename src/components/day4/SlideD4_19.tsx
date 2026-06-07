"use client";

import { motion } from "framer-motion";
import { ArrowDown, Rocket } from "lucide-react";

const preview = ["Prototype", "Frontend", "Backend", "Database", "Authentication", "Deployment", "Users"];

export function SlideD4_19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Preview: Day 5</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">"Everything we've built..."</h1>
        <p className="text-3xl text-zinc-500 font-light">"...is still a <strong className="text-zinc-300">prototype.</strong>"</p>
      </motion.div>

      <div className="w-full max-w-lg flex flex-col items-center z-10 mb-8">
        {preview.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
              className={`w-full text-center py-4 px-8 rounded-2xl border-2 ${
                i === 0 ? "bg-zinc-900/40 border-zinc-700 text-zinc-400" :
                i === preview.length - 1 ? "bg-cyan-500/15 border-cyan-500 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-105 font-black text-2xl" :
                "bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-purple-500/20 text-zinc-300"
              } text-xl font-display font-bold`}>
              {step}
            </motion.div>
            {i < preview.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.15 + 0.08 }} className="my-1.5">
                <ArrowDown className="w-4 h-4 text-purple-500/40" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="z-10 bg-cyan-500/10 border border-cyan-500/30 px-10 py-5 rounded-2xl text-center">
        <p className="text-xl text-cyan-300 font-medium">"Tomorrow you'll enter the world of <strong className="text-white">real software.</strong>"</p>
      </motion.div>
    </div>
  );
}
