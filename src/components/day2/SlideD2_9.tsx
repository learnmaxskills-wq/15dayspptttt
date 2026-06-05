"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = ["Problem", "Customer", "Market", "Trends", "Psychology", "Investor", "Opportunity", "Decision"];

export function SlideD2_9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(56,189,248,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Framework</h2>
        <h1 className="text-4xl md:text-5xl font-display font-black text-white">The LearnMax Startup Validation Canvas</h1>
      </motion.div>

      {/* Horizontal flow */}
      <div className="w-full max-w-7xl flex items-center justify-center flex-wrap gap-3 z-10 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`px-6 py-3 rounded-full border-2 font-display font-bold text-lg transition-all ${
                i === steps.length - 1
                  ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-110"
                  : i === 0
                  ? "bg-[#0a1628] border-cyan-700 text-cyan-300"
                  : "bg-[#0a1628] border-zinc-700 text-zinc-400"
              }`}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 + 0.05 }}>
                <ArrowDown className="w-4 h-4 text-zinc-700 rotate-[-90deg]" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom visual: connection lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-[#040d1e] border border-cyan-900/40 p-6 rounded-2xl text-center z-10 max-w-3xl"
      >
        <p className="text-xl text-zinc-400 font-light">Everything Today Feeds Into This Framework</p>
      </motion.div>
    </div>
  );
}
