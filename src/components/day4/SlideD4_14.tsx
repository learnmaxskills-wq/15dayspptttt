"use client";

import { motion } from "framer-motion";

export function SlideD4_14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl text-zinc-400 font-light mb-10">
          "If all three tools can build websites..."
        </motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }} className="text-5xl md:text-7xl font-display font-black text-white mb-16">
          Where Does The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Value</span> Come From?
        </motion.h1>

        <div className="flex items-center justify-center gap-6">
          {["The Prompt", "The Product Thinking", "The Customer Understanding"].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 2 + i * 0.3, type: "spring", stiffness: 200 }}
              className={`bg-gradient-to-b from-purple-500/15 to-transparent border-2 ${i === 1 ? "border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.3)] scale-110" : "border-purple-500/30"} rounded-3xl px-8 py-10 flex-1 max-w-[250px]`}>
              <p className={`text-2xl font-display font-bold ${i === 1 ? "text-white" : "text-purple-300"}`}>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
