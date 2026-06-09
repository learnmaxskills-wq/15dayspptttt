"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const myth = ["Idea", "Success"];
const reality = ["Idea", "Prototype", "Engineering", "Testing", "Improvement", "Launch", "Users", "Failure", "Improvement", "Growth", "Success"];

export function SlideD6_7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-black text-white mb-12 z-10">The Hidden Truth</motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 z-10 px-8">
        {/* Myth */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-900/40 border border-zinc-700 rounded-3xl p-10">
          <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-8">What People Think</p>
          <div className="flex flex-col items-center gap-3">
            {myth.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-zinc-800 border border-zinc-600 px-10 py-4 rounded-2xl"><p className="text-2xl font-display font-bold text-zinc-400">{step}</p></div>
                {i < myth.length - 1 && <ArrowDown className="w-5 h-5 text-zinc-600 my-2" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reality */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-500/30 rounded-3xl p-10 overflow-hidden">
          <p className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-8">Reality</p>
          <div className="flex flex-col items-center gap-1">
            {reality.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 + i * 0.15 }}
                  className={`px-6 py-2 rounded-xl text-sm font-bold ${step === "Failure" ? "bg-red-500/15 border border-red-500/40 text-red-400" : step === "Success" ? "bg-amber-500/15 border border-amber-500 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]" : "bg-zinc-800/50 border border-zinc-700/50 text-zinc-400"}`}>
                  {step}
                </motion.div>
                {i < reality.length - 1 && <ArrowDown className="w-3 h-3 text-zinc-700 my-0.5" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} className="mt-10 text-xl text-zinc-500 font-light z-10 italic">
        "Unfortunately Hollywood doesn't make movies about debugging."
      </motion.p>
    </div>
  );
}
