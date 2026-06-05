"use client";

import { motion } from "framer-motion";
import { Skull, X, AlertTriangle } from "lucide-react";

const reasons = [
  "No Market Need",
  "Wrong Customer",
  "Poor Validation",
  "Wrong Timing",
  "Building Too Early",
];

export function SlideD2_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(239,68,68,0.06),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 z-10 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="w-24 h-24 bg-red-500/10 border border-red-500/30 rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <Skull className="w-12 h-12 text-red-500" />
          </div>
          <p className="text-red-400 font-mono tracking-[0.4em] uppercase text-sm mb-4">Why Most Startups Fail</p>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight text-white">
            The Startup Graveyard
          </h1>
        </motion.div>

        {/* Right: failure list */}
        <div className="space-y-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              className="bg-[#0a1628] border border-red-900/40 p-6 rounded-2xl flex items-center gap-5"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-2xl font-display font-semibold text-zinc-200">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-3xl px-8 z-10"
      >
        <div className="bg-yellow-500/10 border border-yellow-500/30 p-5 rounded-2xl flex items-center gap-5 justify-center">
          <AlertTriangle className="w-7 h-7 text-yellow-400 flex-shrink-0" />
          <p className="text-xl text-yellow-300 font-medium">
            Notice: Not one of these says <strong className="font-bold text-yellow-400">"Bad Coding"</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
