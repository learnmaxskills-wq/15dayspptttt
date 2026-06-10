"use client";

import { motion } from "framer-motion";

const framework = [
  { label: "ROLE", desc: "What are we building?", color: "indigo" },
  { label: "TASK", desc: "What should it do?", color: "violet" },
  { label: "FEATURES", desc: "What does it include?", color: "purple" },
  { label: "STYLE", desc: "How should it look?", color: "fuchsia" },
  { label: "RULES", desc: "What should be avoided?", color: "pink" },
];

export function SlideD7_8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <h2 className="text-violet-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Secret Weapon</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Founder Prompting Framework</h1>
      </motion.div>

      <div className="w-full max-w-4xl z-10 space-y-5 px-8">
        {framework.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
            className={`flex items-center gap-8 bg-${item.color}-500/5 border border-${item.color}-500/20 p-6 rounded-2xl hover:border-${item.color}-500/50 transition-all`}>
            <div className={`w-20 h-14 bg-${item.color}-500/15 border border-${item.color}-500/40 rounded-xl flex items-center justify-center flex-shrink-0`}>
              <span className={`text-${item.color}-400 font-mono font-black text-sm tracking-widest`}>{item.label}</span>
            </div>
            <p className="text-xl text-zinc-300 font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-10 text-lg text-indigo-300 font-light z-10">
        "This alone will save you <strong className="text-white">hundreds of hours.</strong>"
      </motion.p>
    </div>
  );
}
