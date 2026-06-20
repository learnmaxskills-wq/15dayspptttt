"use client";

import { motion } from "framer-motion";

export function SlideD14_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(0,240,255,0.4) 1px, transparent 1px)", backgroundSize: "100% 80px" }} />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          [ OPENING: WORD FOR WORD ]
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl md:text-4xl font-mono text-zinc-300 tracking-tight text-center max-w-3xl leading-relaxed mb-12">
          "Before we begin, I want everyone to answer one question."
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
          {/* Card 1 */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: "spring", stiffness: 100 }} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-zinc-900 blur-xl opacity-50 group-hover:opacity-100" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Video A</span>
            <h3 className="text-6xl md:text-7xl font-black font-display text-zinc-400 mb-2">10</h3>
            <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase">Views</span>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, type: "spring", stiffness: 100 }} className="bg-zinc-950 border border-[#ccff00]/20 rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#ccff00]/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#ccff00]/5 blur-xl group-hover:bg-[#ccff00]/10 transition-colors" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Video B</span>
            <h3 className="text-6xl md:text-7xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00] mb-2 animate-pulse">10M</h3>
            <span className="text-[#ccff00] font-mono text-sm tracking-wider uppercase font-bold">Views</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
