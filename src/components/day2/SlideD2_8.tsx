"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

const objectives = [
  "A Validated Problem",
  "A Defined Customer",
  "Market Evidence",
  "Customer Insights",
  "Investor Feedback",
  "Opportunity Analysis",
  "Startup Validation Score",
  "Clear Startup Direction",
];

export function SlideD2_8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_50%,rgba(56,189,248,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-[#040d1e] border border-cyan-900/40 rounded-[3rem] p-16 shadow-[0_0_80px_rgba(6,182,212,0.08)] relative overflow-hidden z-10"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-6 mb-14">
          <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Target className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <p className="text-cyan-400 font-mono tracking-widest text-sm uppercase mb-2">Today's Mission</p>
            <h1 className="text-4xl font-display font-black text-white leading-tight">By The End Of This Session You Will Have:</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-5 mb-14 relative z-10">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0" />
              <span className="text-xl text-zinc-300 font-medium">{obj}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-2xl text-center relative z-10"
        >
          <p className="text-2xl text-cyan-300 font-bold">Today We Replace Assumptions With Evidence</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
