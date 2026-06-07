"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export function SlideD4_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      {/* Grid matrix background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Core glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none" />
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full" style={{ width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`, background: i % 2 === 0 ? "#a855f7" : "#06b6d4", left: `${5 + i * 4.5}%`, top: `${10 + (i % 7) * 12}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.15 }} />
      ))}

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 150 }} className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_80px_rgba(168,85,247,0.4),0_0_40px_rgba(6,182,212,0.3)]">
          <Cpu className="w-12 h-12 text-purple-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0, letterSpacing: "2px" }} animate={{ opacity: 1, letterSpacing: "14px" }} transition={{ duration: 1.5, delay: 0.5 }} className="text-purple-400 uppercase font-mono font-bold mb-6 text-sm">
          LearnMax · Day 4
        </motion.p>

        <h1 className="font-black leading-none tracking-tighter mb-8">
          <motion.span initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="block text-5xl md:text-7xl text-zinc-400 font-light mb-2">THE AI BUILDER'S</motion.span>
          <motion.span initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="block text-7xl md:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">PLAYGROUND</motion.span>
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-3xl text-zinc-400 font-light mb-14">How One Person Can Build Like a Team</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 px-10 py-5 rounded-full inline-block backdrop-blur-sm">
          <p className="text-xl text-purple-300 font-light italic">"The future belongs to people who can clearly explain <strong className="text-white font-bold not-italic">what they want built.</strong>"</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
