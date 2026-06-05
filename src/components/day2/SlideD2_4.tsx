"use client";

import { motion } from "framer-motion";

const rows = [
  { left: "Most People See Problems", right: "Founders See Opportunities" },
  { left: "Most People Complain", right: "Founders Investigate" },
  { left: "Most People Wait", right: "Founders Build" },
];

export function SlideD2_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />
      {/* Vertical divider glow */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Mindset Shift</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">The Founder's Superpower</h1>
      </motion.div>

      <div className="w-full max-w-6xl z-10 space-y-6">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.3 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex items-center"
            >
              <span className="text-2xl text-zinc-400 font-light">{row.left}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.3 }}
              className="bg-cyan-500/5 border border-cyan-500/30 rounded-2xl p-8 flex items-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-2xl text-cyan-300 font-bold relative z-10">{row.right}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
