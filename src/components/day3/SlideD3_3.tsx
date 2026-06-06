"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const wrong = ["Problem", "Feature Ideas", "Build", "FAIL ❌"];
const right = ["Problem", "Customer", "Outcome", "Product", "Features", "Build ✅"];

export function SlideD3_3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.04),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">The #1 Startup Mistake</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Biggest Startup Mistake</h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-10 z-10">
        {/* Wrong path */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-red-950/30 border border-red-900/50 rounded-3xl p-8">
          <p className="text-red-400 font-mono tracking-widest text-xs uppercase mb-6">Most Founders</p>
          <div className="flex flex-col items-center gap-2">
            {wrong.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className={`w-full text-center py-3 px-6 rounded-xl border ${step.includes("FAIL") ? "bg-red-500/20 border-red-500/50 text-red-400 font-black text-xl" : "bg-zinc-900/60 border-zinc-800 text-zinc-400 text-lg"}`}>
                  {step}
                </div>
                {i < wrong.length - 1 && <ArrowDown className="w-4 h-4 text-zinc-700 my-1" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right path */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-orange-950/20 border border-orange-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <p className="text-orange-400 font-mono tracking-widest text-xs uppercase mb-6">Great Founders</p>
          <div className="flex flex-col items-center gap-2">
            {right.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className={`w-full text-center py-3 px-6 rounded-xl border ${step.includes("✅") ? "bg-orange-500/20 border-orange-500/50 text-orange-300 font-black text-xl" : "bg-zinc-900/60 border-zinc-700 text-zinc-300 text-lg"}`}>
                  {step}
                </div>
                {i < right.length - 1 && <ArrowDown className="w-4 h-4 text-orange-800 my-1" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8 z-10 bg-orange-500/10 border border-orange-500/30 px-8 py-4 rounded-2xl">
        <p className="text-xl text-orange-300 font-bold">💬 Which path have most people in the world taken?</p>
      </motion.div>
    </div>
  );
}
