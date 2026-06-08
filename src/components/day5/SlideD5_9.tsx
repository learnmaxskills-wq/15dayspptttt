"use client";

import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

export function SlideD5_9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 4</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Journey of a User</h1>
      </motion.div>

      <div className="flex items-center gap-16 z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-gradient-to-br from-cyan-500/15 to-transparent border border-cyan-500/30 p-10 rounded-3xl w-[400px]">
          <UserCircle className="w-20 h-20 text-cyan-400 mb-6" />
          <h3 className="text-4xl font-display font-bold text-white mb-6">Meet Aryan</h3>
          <ul className="space-y-4 text-xl text-zinc-300 font-light">
            <li><strong className="text-cyan-300">Age:</strong> 16</li>
            <li><strong className="text-cyan-300">Grade:</strong> 11</li>
            <li><strong className="text-cyan-300">Stream:</strong> Science</li>
            <li><strong className="text-cyan-300">Dream:</strong> Build a startup</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="flex flex-col gap-8 w-[500px]">
          <div className="bg-zinc-900/50 border border-zinc-700 p-8 rounded-2xl">
            <p className="text-zinc-400 mb-4 font-mono text-sm uppercase tracking-widest">Aryan Enters:</p>
            <p className="text-2xl text-white font-medium">Name, Goals, Interests, Dream Career</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-700 p-8 rounded-2xl">
            <p className="text-zinc-400 mb-4 font-mono text-sm uppercase tracking-widest">Aryan Clicks:</p>
            <div className="bg-emerald-500 text-white font-bold text-xl py-4 px-6 rounded-xl text-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Generate My Career Report
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-16 text-4xl text-emerald-400 font-display font-bold z-10">
        "What happens next?"
      </motion.p>
    </div>
  );
}
