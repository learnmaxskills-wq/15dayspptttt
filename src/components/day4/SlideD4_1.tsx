"use client";

import { motion } from "framer-motion";

export function SlideD4_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#030308] text-white relative overflow-hidden">
      {/* Massive radial core glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-700/20 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Horizontal neon lines */}
      <motion.div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />

      {/* Rising particles — 3 layers */}
      {[...Array(12)].map((_, i) => (
        <motion.div key={`p1-${i}`} className="absolute w-1 h-1 bg-purple-400 rounded-full pointer-events-none" style={{ left: `${8 + i * 7}%`, bottom: "-5%" }}
          animate={{ y: [0, -800], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5] }}
          transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <motion.div key={`p2-${i}`} className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full pointer-events-none" style={{ left: `${15 + i * 10}%`, bottom: "-5%" }}
          animate={{ y: [0, -900], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 8 + i * 0.7, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.div key={`p3-${i}`} className="absolute w-[2px] h-[40px] rounded-full pointer-events-none" style={{ left: `${20 + i * 12}%`, bottom: "-5%", background: "linear-gradient(to top, transparent, rgba(168,85,247,0.6))" }}
          animate={{ y: [0, -700], opacity: [0, 1, 0] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 1.2 }}
        />
      ))}

      {/* Scan line */}
      <motion.div className="absolute left-0 right-0 h-[2px] pointer-events-none" style={{ background: "linear-gradient(to right, transparent 0%, rgba(168,85,247,0.15) 20%, rgba(6,182,212,0.3) 50%, rgba(168,85,247,0.15) 80%, transparent 100%)" }}
        animate={{ y: ["-10vh", "110vh"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="z-10 text-center max-w-6xl px-8">
        {/* Day label with line decorators */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center justify-center gap-6 mb-10">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="h-[1px] w-32 bg-gradient-to-r from-transparent to-purple-500/60 origin-right" />
          <motion.span initial={{ letterSpacing: "4px", opacity: 0 }} animate={{ letterSpacing: "16px", opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} className="text-purple-400/80 uppercase font-mono font-bold text-sm tracking-[16px]">
            LearnMax · Day 04
          </motion.span>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="h-[1px] w-32 bg-gradient-to-l from-transparent to-purple-500/60 origin-left" />
        </motion.div>

        {/* Main title — stacked dramatic */}
        <div className="relative mb-6">
          <motion.h1 initial={{ opacity: 0, y: 60, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 0.8 }}
            className="text-[42px] md:text-[56px] font-display font-light text-zinc-500 tracking-tight leading-none">
            THE AI BUILDER'S
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 80, filter: "blur(30px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 1.2 }}
            className="text-[80px] md:text-[130px] font-display font-black leading-none tracking-tighter"
            style={{ background: "linear-gradient(135deg, #c084fc 0%, #e879f9 25%, #a78bfa 50%, #22d3ee 75%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            PLAYGROUND
          </motion.h1>
        </div>

        {/* Decorative line under title */}
        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} className="w-[500px] max-w-full h-[2px] mx-auto mb-10" style={{ background: "linear-gradient(to right, transparent, #a855f7, #06b6d4, transparent)" }} />

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3, duration: 0.8 }}
          className="text-2xl md:text-3xl text-zinc-400 font-extralight tracking-wide mb-14">
          How One Person Can Build Like a Team
        </motion.p>

        {/* Bottom quote card */}
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 3, duration: 0.8 }}
          className="relative inline-block">
          <div className="absolute -inset-[1px] rounded-2xl opacity-60" style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4, #a855f7)" }} />
          <div className="relative bg-[#0a0a18]/90 backdrop-blur-xl px-12 py-6 rounded-2xl">
            <p className="text-xl text-zinc-300 font-light italic">
              "The future belongs to people who can clearly explain{" "}
              <strong className="text-white font-bold not-italic">what they want built.</strong>"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-purple-500/20 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/20 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/20 rounded-br-lg pointer-events-none" />
    </div>
  );
}
