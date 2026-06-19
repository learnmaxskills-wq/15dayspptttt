"use client";

import { motion } from "framer-motion";
import { Cpu, UserCheck, ArrowRightLeft } from "lucide-react";

export function SlideD13_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-rose-950/20 border border-rose-500/30 px-6 py-2 rounded-lg mb-8">
          <span className="text-rose-300 font-mono text-xs uppercase font-bold tracking-widest">Then improve it.</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight text-center mb-12">
          The Division of Labor
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl relative items-center">
          {/* Connector icons */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-800 p-3 rounded-full text-zinc-400 hidden md:flex">
            <ArrowRightLeft className="w-5 h-5 animate-pulse" />
          </div>

          {/* AI card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-8 relative flex flex-col items-center text-center group">
            <div className="flex items-center justify-center p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-rose-400 mb-6 group-hover:scale-115 transition-transform">
              <Cpu className="w-8 h-8" />
            </div>
            <h4 className="text-zinc-500 font-mono text-xs uppercase mb-2 tracking-wider">AI Role</h4>
            <h3 className="text-2xl md:text-3xl font-black font-display text-white mb-4">Writes Drafts</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Instantly generates multiple raw script drafts, outline points, and structure hooks based on your input parameters.
            </p>
          </motion.div>

          {/* Human card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-zinc-950/60 border border-rose-900/50 rounded-2xl p-8 relative flex flex-col items-center text-center group">
            <div className="flex items-center justify-center p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-6 group-hover:scale-115 transition-transform">
              <UserCheck className="w-8 h-8" />
            </div>
            <h4 className="text-amber-400 font-mono text-xs uppercase mb-2 tracking-wider">Human Role</h4>
            <h3 className="text-2xl md:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200 mb-4">Creates Strategy</h3>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              Polishes copy, applies emotional intuition, guides direction, curates details, and makes high-level decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
