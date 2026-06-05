"use client";

import { motion } from "framer-motion";

const scores = [
  { label: "Pain Score", value: "/10" },
  { label: "Market Size", value: "/10" },
  { label: "Trend Score", value: "/10" },
  { label: "Willingness To Pay", value: "/10" },
  { label: "Founder Excitement", value: "/10" },
];

export function SlideD2_31() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Rate Your Startup</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Founder Scorecard</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-3xl bg-[#040d1e] border border-cyan-900/40 rounded-[3rem] p-14 shadow-[0_0_60px_rgba(6,182,212,0.08)] z-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {scores.map((score, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex justify-between items-center border-b border-zinc-800 pb-6"
            >
              <span className="text-2xl font-display text-zinc-300">{score.label}</span>
              <div className="flex items-center gap-3">
                <div className="w-20 h-10 border-b-2 border-zinc-600" />
                <span className="text-3xl font-mono font-bold text-zinc-600">{score.value}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-between items-center pt-6"
          >
            <span className="text-4xl font-display font-black text-white uppercase tracking-widest">TOTAL</span>
            <span className="text-6xl font-mono font-black text-cyan-500">/50</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
