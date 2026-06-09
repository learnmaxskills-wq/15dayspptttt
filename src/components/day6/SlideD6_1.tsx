"use client";

import { motion } from "framer-motion";

export function SlideD6_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      {/* Forge grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      {/* Core glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-700/12 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-orange-500/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[25%] right-[15%] w-[300px] h-[300px] bg-red-600/6 blur-[120px] rounded-full pointer-events-none" />
      {/* Horizontal neon lines */}
      <motion.div className="absolute top-[22%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/25 to-transparent pointer-events-none" animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute top-[78%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent pointer-events-none" animate={{ opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 5, repeat: Infinity, delay: 1.5 }} />
      {/* Spark particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-amber-400 rounded-full pointer-events-none" style={{ left: `${10 + i * 8}%`, bottom: "40%" }}
          animate={{ y: [0, -200 - i * 30], x: [0, (i % 2 === 0 ? 30 : -30)], opacity: [0, 1, 0], scale: [0.5, 1.5, 0] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.5 }} />
      ))}
      {/* Scan line */}
      <motion.div className="absolute left-0 right-0 h-[2px] pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.15), rgba(249,115,22,0.25), rgba(245,158,11,0.15), transparent)" }}
        animate={{ y: ["-10vh", "110vh"] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />

      {/* Content */}
      <div className="z-10 text-center max-w-6xl px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center justify-center gap-6 mb-10">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="h-[1px] w-32 bg-gradient-to-r from-transparent to-amber-500/60 origin-right" />
          <motion.span initial={{ letterSpacing: "4px", opacity: 0 }} animate={{ letterSpacing: "16px", opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} className="text-amber-400/80 uppercase font-mono font-bold text-sm">LearnMax · Day 06</motion.span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="h-[1px] w-32 bg-gradient-to-l from-transparent to-amber-500/60 origin-left" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 60, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 0.8 }} className="text-[38px] md:text-[52px] font-display font-light text-zinc-500 tracking-tight leading-none mb-2">THE BUILDER'S</motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 80, filter: "blur(30px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 1.2 }} className="text-[80px] md:text-[130px] font-display font-black leading-none tracking-tighter" style={{ background: "linear-gradient(135deg, #f59e0b 0%, #f97316 30%, #ef4444 60%, #f59e0b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WORKSHOP</motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 2 }} className="w-[500px] max-w-full h-[2px] mx-auto my-10" style={{ background: "linear-gradient(to right, transparent, #f59e0b, #ef4444, transparent)" }} />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="text-2xl md:text-3xl text-zinc-400 font-extralight tracking-wide mb-14">From Generated to Engineered</motion.p>

        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 3 }} className="relative inline-block">
          <div className="absolute -inset-[1px] rounded-2xl opacity-60" style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444, #f59e0b)" }} />
          <div className="relative bg-[#0a0806]/90 backdrop-blur-xl px-12 py-6 rounded-2xl">
            <p className="text-xl text-zinc-300 font-light italic">"Today I need to tell you something that <strong className="text-white font-bold not-italic">might hurt your feelings.</strong>"</p>
          </div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-500/20 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-amber-500/20 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-orange-500/20 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange-500/20 rounded-br-lg pointer-events-none" />
    </div>
  );
}
