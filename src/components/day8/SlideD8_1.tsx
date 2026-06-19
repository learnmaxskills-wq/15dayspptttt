"use client";

import { motion } from "framer-motion";

export function SlideD8_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#000a12] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Vertical data streams */}
      {[10, 25, 45, 60, 80, 92].map((left, i) => (
        <motion.div key={`ds-${i}`} className="absolute top-0 bottom-0 w-[1px] pointer-events-none" style={{ left: `${left}%`, background: `linear-gradient(to bottom, transparent 0%, rgba(6,182,212,${0.1 + (i%3)*0.1}) 50%, transparent 100%)` }}
          animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4 + i % 3, repeat: Infinity, delay: i * 0.3 }} />
      ))}

      {/* Floating data nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div key={`node-${i}`} className="absolute w-2 h-2 rounded-sm bg-cyan-400 pointer-events-none shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          style={{ left: `${15 + i * 10}%`, top: `${20 + (i % 4) * 20}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}

      {/* Horizontal scanner */}
      <motion.div className="absolute left-0 right-0 h-[2px] pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(6,182,212,0.5), transparent)", boxShadow: "0 0 20px rgba(6,182,212,0.5)" }}
        animate={{ y: ["-10vh", "110vh"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />

      <div className="z-10 text-center max-w-6xl px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center justify-center gap-6 mb-12">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="h-[1px] w-32 bg-gradient-to-r from-transparent to-cyan-500/60 origin-right" />
          <motion.span initial={{ letterSpacing: "4px", opacity: 0 }} animate={{ letterSpacing: "14px", opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} className="text-cyan-400/80 uppercase font-mono font-bold text-xs">LearnMax · Day 08</motion.span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="h-[1px] w-32 bg-gradient-to-l from-transparent to-cyan-500/60 origin-left" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 50, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 0.8 }} className="text-[32px] md:text-[44px] font-display font-light text-cyan-500/60 tracking-[0.2em] uppercase leading-none mb-4">THE</motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 80, filter: "blur(30px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 1.2 }} className="text-[70px] md:text-[120px] font-display font-black leading-none tracking-tighter" style={{ background: "linear-gradient(135deg, #22d3ee 0%, #06b6d4 30%, #3b82f6 70%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MEMORY LAYER</motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 2 }} className="w-[400px] max-w-full h-[1px] mx-auto my-10" style={{ background: "linear-gradient(to right, transparent, rgba(6,182,212,0.5), transparent)" }} />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="text-2xl md:text-3xl text-zinc-400 font-extralight tracking-wide mb-14">Backend, Database & Authentication</motion.p>

        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 3 }} className="relative inline-block">
          <div className="absolute -inset-[1px] rounded-2xl opacity-50" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(59,130,246,0.4), rgba(6,182,212,0.6))" }} />
          <div className="relative bg-[#000a12]/90 backdrop-blur-xl px-12 py-6 rounded-2xl">
            <p className="text-xl text-cyan-100/80 font-light italic">"Today we teach your startup <strong className="text-white font-bold not-italic">how to remember.</strong>"</p>
          </div>
        </motion.div>
      </div>

      {/* Cyberpunk corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cyan-500/30 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-cyan-500/30 rounded-br-sm pointer-events-none" />
    </div>
  );
}
