"use client";

import { motion } from "framer-motion";
import { UserCheck, Cpu, AlertTriangle } from "lucide-react";

export function SlideD14_19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Division of Strategy
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl mb-12">
          {/* Founder column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl mb-4 text-[#ccff00] group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-zinc-500 font-mono text-xs uppercase mb-2">You</h4>
            <h3 className="text-2xl font-bold font-display text-white mb-2">The Strategist / Founder</h3>
            <p className="text-zinc-400 text-xs font-mono leading-relaxed">
              Provides the direction, emotional hook, core parameters, and critical feedback.
            </p>
          </motion.div>

          {/* AI column */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl mb-4 text-[#00f0ff] group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-zinc-500 font-mono text-xs uppercase mb-2">AI</h4>
            <h3 className="text-2xl font-bold font-display text-white mb-2">The Intern</h3>
            <p className="text-zinc-400 text-xs font-mono leading-relaxed">
              Generates the drafts, outlines variations, and executes based on explicit parameters.
            </p>
          </motion.div>
        </div>

        {/* Enthusiastic Toaster Warning */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
          className="bg-gradient-to-r from-red-950/40 to-zinc-950 border border-red-500/30 p-8 rounded-3xl max-w-2xl text-center shadow-2xl relative"
        >
          <div className="absolute top-2 right-2 text-red-500">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
          </div>
          <p className="text-zinc-400 font-mono text-sm leading-relaxed">
            "Humans love giving AI magical powers. Then they wonder why the output looks like it was written by an <span className="text-red-400 font-bold underline decoration-red-500/40 decoration-2">enthusiastic toaster.</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
