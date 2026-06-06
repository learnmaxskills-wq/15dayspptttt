"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const blueprint = [
  "Customer", "Problem", "Outcome", "Solution", "Product Name",
  "Product Modules", "User Journey", "MVP", "Wireframe", "Prototype"
];

export function SlideD3_7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.06),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[100px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            <Zap className="w-6 h-6 text-orange-400" />
          </div>
        </div>
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">What You're Building Today</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Product Blueprint</h1>
      </motion.div>

      <div className="grid grid-cols-2 gap-5 w-full max-w-4xl z-10">
        {blueprint.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`flex items-center gap-5 p-5 rounded-2xl border ${i === blueprint.length - 1 ? "bg-orange-500/15 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] col-span-2 justify-center" : "bg-[#110900] border-zinc-800"}`}
          >
            <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${i < 3 ? "text-green-500" : "text-orange-500/50"}`} />
            <span className={`text-xl font-display font-semibold ${i === blueprint.length - 1 ? "text-orange-300 text-2xl font-bold" : "text-zinc-300"}`}>
              <span className="text-zinc-600 font-mono text-sm mr-3">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
