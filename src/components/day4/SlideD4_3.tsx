"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function SlideD4_3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      {/* Warning pulse */}
      <motion.div className="absolute inset-0 bg-red-600/5 pointer-events-none" animate={{ opacity: [0, 0.08, 0] }} transition={{ duration: 2, repeat: Infinity }} />
      {/* Scan line */}
      <motion.div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent pointer-events-none" animate={{ y: ["0vh", "100vh"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }} className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-32 h-32 bg-red-500/15 border-2 border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-14 shadow-[0_0_80px_rgba(239,68,68,0.4)]"
        >
          <AlertTriangle className="w-16 h-16 text-red-500" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-2xl text-zinc-500 font-light mb-8">But today I need to tell you something important.</motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring", stiffness: 200 }} className="text-7xl md:text-9xl font-display font-black text-red-500 leading-none mb-8">
          YOU'RE IN DANGER.
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.5, duration: 0.8 }} className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-8" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="text-4xl font-display font-bold text-zinc-300">
          You're in danger of becoming <span className="text-red-400 underline decoration-red-500/50 decoration-4 underline-offset-8">tool collectors.</span>
        </motion.p>
      </motion.div>
    </div>
  );
}
