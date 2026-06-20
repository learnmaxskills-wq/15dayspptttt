"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Eye } from "lucide-react";

export function SlideD14_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-600 font-mono tracking-widest text-xs uppercase mb-8">
          The Pivotal Variable
        </motion.p>

        {/* Attention Reveal Banner */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 w-full max-w-2xl mb-10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">The Answer is:</span>
          
          <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
            ATTENTION
          </h2>
        </motion.div>

        {/* Redirection Quote */}
        <div className="space-y-4 max-w-xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-3 text-zinc-500 font-mono text-sm">
            <Eye className="w-4 h-4 text-red-500" />
            <span className="line-through">Today is about creating videos.</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex items-center justify-center gap-3 text-[#ccff00] font-mono text-lg font-bold">
            <BrainCircuit className="w-5 h-5 animate-pulse" />
            <span>"Today is about understanding human psychology."</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
