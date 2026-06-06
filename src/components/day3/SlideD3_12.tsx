"use client";

import { motion } from "framer-motion";
import { ArrowDown, PenLine, Cpu } from "lucide-react";

const arch = ["Student Inputs Data", "AI Analyzes Data", "Recommendations Generated", "Roadmap Generated", "Student Takes Action"];

export function SlideD3_12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.04),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <Cpu className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Inside The Product</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-6">Product Architecture</h1>
            <p className="text-xl text-zinc-400 font-light">What happens inside the product, step by step?</p>
          </motion.div>

          <div className="flex flex-col items-start w-full gap-2">
            {arch.map((step, i) => (
              <div key={i} className="flex flex-col items-start w-full">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }} className={`w-full p-5 rounded-2xl border flex items-center gap-4 ${i === arch.length - 1 ? "bg-orange-500/15 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)]" : "bg-[#110900] border-zinc-800"}`}>
                  <span className="text-orange-500/50 font-mono text-sm flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`text-xl font-medium ${i === arch.length - 1 ? "text-orange-300 font-bold" : "text-zinc-300"}`}>{step}</span>
                </motion.div>
                {i < arch.length - 1 && <ArrowDown className="w-4 h-4 text-zinc-800 my-1 ml-8" />}
              </div>
            ))}
          </div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-6">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Draw Your Architecture</p>
          </div>
          <p className="text-zinc-500 text-sm mb-8 italic">Trace how a user goes from start to result in your product:</p>
          <div className="space-y-6">
            {["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"].map((label, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-orange-500/40 font-mono text-xs w-12 flex-shrink-0">{label}</span>
                <div className="flex-1 h-8 border-b border-orange-900/40" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
