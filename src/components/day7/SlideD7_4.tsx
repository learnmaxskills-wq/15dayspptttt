"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const notBuilt = ["Marketplace", "Groups", "Stories", "Reels", "Ads", "Meta AI", "Messenger"];
const built = ["Profile", "Friends", "Messages"];

export function SlideD7_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <p className="text-indigo-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Facebook Example</p>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">What Did Zuckerberg Build?</h1>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-2 gap-12 z-10 px-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-6">Not This:</p>
          <div className="flex flex-wrap gap-3">
            {notBuilt.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-red-500/5 border border-red-500/20 px-5 py-3 rounded-xl flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-zinc-500 line-through">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}>
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-6">Just This:</p>
          <div className="space-y-4">
            {built.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 + i * 0.3 }}
                className="bg-indigo-500/10 border-2 border-indigo-500/40 px-8 py-5 rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.15)]">
                <p className="text-3xl font-display font-bold text-indigo-200">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-zinc-500 font-mono text-sm mt-6">That's it. Version 1.</motion.p>
        </motion.div>
      </div>
    </div>
  );
}
