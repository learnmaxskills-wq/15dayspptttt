"use client";

import { motion } from "framer-motion";

export function SlideD4_21() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      {/* Scan line */}
      <motion.div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" animate={{ y: ["0vh", "100vh"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="z-10 text-center max-w-4xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-5xl text-zinc-500 font-display font-black mb-8">
          "Not Tools."
        </motion.p>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1 }} className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        <motion.h1 initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5, type: "spring", stiffness: 120 }}
          className="text-8xl md:text-[120px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 leading-none mb-14">
          BUILDING.
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 px-12 py-8 rounded-3xl inline-block">
          <p className="text-3xl text-zinc-300 font-light mb-3">"See you on <strong className="text-white font-bold">Day 5.</strong>"</p>
          <p className="text-5xl">🚀</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
