"use client";

import { motion } from "framer-motion";
import { Hammer, Users } from "lucide-react";

export function SlideD13_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-amber-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-rose-400 font-mono tracking-widest text-xs uppercase mb-4 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
          The Pivotal Shift
        </motion.span>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight max-w-3xl leading-tight mb-6">
          Day 13 is actually one of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">most important days</span> of the entire challenge.
        </motion.h2>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="text-xl text-amber-400 font-mono font-bold mb-10">
          Why?
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Phase 1 card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: "spring", stiffness: 100 }} className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-8 flex flex-col items-start relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 blur-[40px] group-hover:bg-rose-500/10 transition-all duration-500" />
            <div className="flex items-center justify-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-rose-400 mb-6">
              <Hammer className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Days 1 - 12</span>
            <h3 className="text-2xl font-bold font-display mb-3">How To Build</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Mastering the code, designing features, setting up databases, wiring APIs, and creating the prototype structure.
            </p>
          </motion.div>

          {/* Phase 2 card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, type: "spring", stiffness: 100 }} className="bg-zinc-950/60 border border-rose-900/40 rounded-2xl p-8 flex flex-col items-start relative overflow-hidden group">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-[40px] group-hover:bg-amber-500/10 transition-all duration-500" />
            <div className="flex items-center justify-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-6">
              <Users className="w-6 h-6 animate-bounce" />
            </div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Today (Day 13)</span>
            <h3 className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200 mb-3">How To Get Users</h3>
            <p className="text-zinc-300 font-light leading-relaxed">
              Making the world care. Turning code and prototypes into functional startup operations that capture real attention.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
