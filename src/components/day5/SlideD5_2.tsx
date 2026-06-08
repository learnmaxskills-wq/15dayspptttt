"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = ["A problem worth solving", "Customer insights", "Market validation", "An MVP", "A prototype"];

export function SlideD5_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/8 blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4 z-10">
        <p className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Five Days Ago — Nothing.</p>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-2">Today — Everything.</h1>
        <p className="text-2xl text-zinc-500 font-light">Most people spend years talking. You built.</p>
      </motion.div>

      <div className="w-full max-w-3xl z-10 my-6">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center gap-6 bg-gradient-to-r from-emerald-500/8 to-transparent border border-emerald-500/20 p-5 rounded-2xl mb-3 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition-all duration-300">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + i * 0.2, type: "spring" }}><CheckCircle2 className="w-7 h-7 text-emerald-500 flex-shrink-0" /></motion.div>
            <span className="text-2xl font-display font-semibold text-zinc-200">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="z-10 bg-emerald-500/10 border border-emerald-500/30 px-10 py-5 rounded-2xl text-center">
        <p className="text-2xl text-emerald-300 font-bold">And that's a <span className="text-white">big deal.</span></p>
      </motion.div>
    </div>
  );
}
