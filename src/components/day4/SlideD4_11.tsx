"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function SlideD4_11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="w-20 h-20 bg-pink-500/15 border border-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(236,72,153,0.3)]">
          <Heart className="w-10 h-10 text-pink-400" />
        </motion.div>
        <p className="text-pink-400 font-mono tracking-[0.5em] text-sm uppercase mb-2">Round 2</p>
        <h1 className="text-7xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-8">LOVABLE</h1>
        <p className="text-2xl text-zinc-400 font-light mb-12">Same prompt. Different tool. Let's compare.</p>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-pink-500/5 border border-pink-500/30 rounded-2xl p-8 text-left">
            <p className="text-pink-400 font-mono text-xs uppercase tracking-widest mb-4">Evaluate</p>
            <div className="space-y-3">
              {["Which looks better?", "Which feels better?", "Which is more usable?"].map((q, i) => (
                <p key={i} className="text-xl text-zinc-300 font-medium">{q}</p>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-purple-500/5 border border-purple-500/30 rounded-2xl p-8 text-left">
            <p className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-4">Compare With Bolt</p>
            <div className="space-y-3">
              {["Speed of generation", "Design quality", "Code structure"].map((q, i) => (
                <p key={i} className="text-xl text-zinc-300 font-medium">{q}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
