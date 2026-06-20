"use client";

import { motion } from "framer-motion";

export function SlideD14_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden font-sans">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(0,240,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      
      {/* CRT Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)", backgroundSize: "100% 4px" }} />

      {/* Cyber spot lights */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#00f0ff]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Accent frame corners */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]/40 pointer-events-none" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff]/40 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-[#ccff00]/40 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[#ccff00]/40 pointer-events-none" />

      <div className="z-10 text-center max-w-5xl px-8 flex flex-col items-center">
        {/* Day indicator */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 mb-6 bg-zinc-950 border border-[#00f0ff]/30 px-4 py-1.5 rounded-md">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-[#00f0ff] uppercase font-mono font-bold tracking-[0.2em] text-xs">LearnMax · Day 14</span>
        </motion.div>

        {/* Master title */}
        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8 }} className="text-xl md:text-3xl font-mono text-zinc-500 tracking-[0.3em] uppercase mb-2">
          THE
        </motion.h1>
        
        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(15px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.2 }} className="text-[52px] md:text-[90px] font-black tracking-tighter leading-none mb-8" style={{ background: "linear-gradient(135deg, #00f0ff 0%, #ccff00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ATTENTION<br/>MASTERCLASS
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.8 }} className="w-64 h-[1px] mb-8 bg-[#00f0ff]/40" />

        {/* Cinematic quote */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="text-lg md:text-xl text-zinc-300 font-light tracking-wide max-w-2xl mb-10">
          "The people who control <strong className="text-white font-semibold">attention</strong> control the world."
        </motion.p>

        {/* Play badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="px-6 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 backdrop-blur-xl">
          <p className="text-xs font-mono text-zinc-400">
            [SYS_STATE] <span className="text-[#ccff00] font-bold">ATTENTION_LOCK_ENABLED</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
