"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";

export function SlideD5_11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 5</h2>
        <h1 className="text-6xl md:text-8xl font-display font-black text-white">SUPABASE</h1>
      </motion.div>

      <div className="z-10 text-center max-w-4xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-3xl text-zinc-400 font-light mb-12">
          "What happens if Aryan comes back tomorrow? How does CareerGPS remember him?"
        </motion.p>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-red-500/10 border border-red-500/30 p-8 rounded-3xl">
            <p className="text-red-400 font-mono text-sm uppercase tracking-widest mb-4">Without Database</p>
            <p className="text-2xl font-bold text-white">The product forgets everything.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-3xl">
            <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4">With Database</p>
            <p className="text-2xl font-bold text-white">The product remembers everything.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-gradient-to-b from-emerald-500/20 to-transparent border-2 border-emerald-500/50 p-10 rounded-3xl inline-block shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <Database className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
          <p className="text-2xl text-emerald-300 font-light mb-2">Think of it as:</p>
          <p className="text-4xl font-display font-bold text-white">"The memory center of our startup."</p>
        </motion.div>
      </div>
    </div>
  );
}
