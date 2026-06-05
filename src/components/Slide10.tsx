"use client";

import { motion } from "framer-motion";
import { Timer } from "lucide-react";

export function Slide10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="text-[400px] font-display font-black">09:00</span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-[3rem] p-16 relative overflow-hidden z-10"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-zinc-800">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 540, ease: "linear" }}
            className="h-full bg-orange-500"
          />
        </div>

        <div className="flex items-center gap-4 mb-8 text-orange-500">
          <Timer className="w-10 h-10 animate-pulse" />
          <h2 className="text-2xl font-mono uppercase tracking-widest">Live Activity: 9 Minutes</h2>
        </div>

        <h1 className="text-5xl font-display font-black leading-tight mb-8">
          Open your notes app.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            List problems exactly as they come to you.
          </span>
        </h1>
        
        <p className="text-2xl text-zinc-400 font-light mb-12">
          "No filtering. No judging. Watch me."
        </p>

        <div className="space-y-6 text-xl text-zinc-300 bg-black/50 p-8 rounded-2xl border border-zinc-800 font-mono">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-zinc-500">{`> Students waste 2 hours daily finding study resources...`}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-zinc-500">{`> Parents pay ₹5000 a month with no idea if it works...`}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="text-zinc-500">{`> Local kirana stores losing customers to Blinkit...`}</motion.p>
        </div>
      </motion.div>
    </div>
  );
}
