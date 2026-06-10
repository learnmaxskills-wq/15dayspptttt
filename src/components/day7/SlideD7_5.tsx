"use client";

import { motion } from "framer-motion";

const rules = [
  { num: 1, left: "Working", right: "Perfect", symbol: ">" },
  { num: 2, left: "Simple", right: "Complex", symbol: ">" },
  { num: 3, left: "Launch", right: "Delay", symbol: ">" },
  { num: 4, left: "Users Decide", right: "Not You", symbol: "—" },
];

export function SlideD7_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-display font-black text-white mb-16 z-10">THE BUILD RULES</motion.h1>

      <div className="w-full max-w-4xl z-10 space-y-6 px-8">
        {rules.map((rule, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
            className="flex items-center gap-6 bg-indigo-500/5 border border-indigo-500/20 p-7 rounded-2xl hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all">
            <div className="w-16 h-16 bg-indigo-500/15 border border-indigo-500/40 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-400 font-mono font-black text-xl">#{rule.num}</span>
            </div>
            <div className="flex items-center gap-4 flex-1">
              <span className="text-3xl font-display font-bold text-white">{rule.left}</span>
              <span className="text-3xl font-mono text-indigo-500">{rule.symbol}</span>
              <span className="text-3xl font-display font-bold text-zinc-600">{rule.right}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-12 text-xl text-indigo-300 font-light z-10 italic">
        "This should be written on every founder's wall."
      </motion.p>
    </div>
  );
}
