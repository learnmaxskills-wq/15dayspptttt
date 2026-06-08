"use client";

import { motion } from "framer-motion";
import { Lock, Fingerprint } from "lucide-react";

export function SlideD5_12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 6</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">AUTHENTICATION</h1>
      </motion.div>

      <div className="z-10 text-center max-w-4xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl text-zinc-300 font-display font-bold mb-16">
          "What if anyone could see <span className="text-red-400">everyone's</span> reports?"
        </motion.p>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} className="w-24 h-24 bg-purple-500/15 border border-purple-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
          <Lock className="w-10 h-10 text-purple-400" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {["Login", "Signup", "Google Sign-In", "User Sessions"].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 + i * 0.2 }} className="bg-zinc-900/50 border border-zinc-700 py-4 px-6 rounded-2xl">
              <p className="text-zinc-300 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="bg-purple-500/10 border-l-4 border-purple-500 py-6 px-10 inline-block text-left">
          <p className="text-2xl text-zinc-300 font-light mb-2">When you log into Netflix, Instagram, or Gmail...</p>
          <div className="flex items-center gap-4">
            <Fingerprint className="w-8 h-8 text-purple-400" />
            <p className="text-3xl text-white font-bold">Authentication is happening.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
