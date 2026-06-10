"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const flow = ["Landing", "Questions", "Analysis", "Results", "Roadmap"];

export function SlideD7_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <h2 className="text-indigo-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Product Architecture</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">USER FLOW</h1>
      </motion.div>

      <div className="flex flex-col items-center z-10 mb-12">
        {flow.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
              className={`px-14 py-6 rounded-2xl border-2 ${
                i === 0 ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-200" :
                i === flow.length - 1 ? "bg-violet-500/15 border-violet-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] scale-105" :
                "bg-zinc-900/40 border-zinc-700 text-zinc-300"
              } text-2xl font-display font-bold`}>
              {step}
            </motion.div>
            {i < flow.length - 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.3 }} className="my-2"><ArrowDown className="w-5 h-5 text-indigo-500/40" /></motion.div>}
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="z-10 grid grid-cols-2 gap-6 max-w-xl">
        <div className="bg-indigo-500/5 border border-indigo-500/20 p-5 rounded-xl text-center"><p className="text-indigo-300 font-medium">Good products <strong className="text-white">remove</strong> confusion.</p></div>
        <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-xl text-center"><p className="text-red-300 font-medium">Bad products <strong className="text-white">create</strong> confusion.</p></div>
      </motion.div>
    </div>
  );
}
