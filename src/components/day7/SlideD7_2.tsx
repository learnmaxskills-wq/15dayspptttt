"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const had = ["Documents", "Notes", "Ideas", "Blueprints", "MVPs", "Prototypes"];
const know = ["The Problem", "The Customer", "The Solution", "The MVP", "The Product Flow"];

export function SlideD7_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 z-10 px-8">
        {/* Before */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-6">Until Now — Your Startup Existed In:</p>
          <div className="space-y-3">
            {had.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-zinc-900/40 border border-zinc-800 px-6 py-4 rounded-xl">
                <p className="text-xl text-zinc-500 font-medium line-through decoration-zinc-700">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-zinc-700 font-mono text-sm mt-6">But not reality.</motion.p>
        </motion.div>

        {/* After */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-6">Today — Every Student Knows:</p>
          <div className="space-y-3">
            {know.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 + i * 0.15 }}
                className="bg-indigo-500/5 border border-indigo-500/20 px-6 py-4 rounded-xl flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <p className="text-xl text-indigo-200 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="flex items-center gap-3 mt-6">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <p className="text-indigo-300 font-mono text-sm">One thing missing: <strong className="text-white">Software.</strong></p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
