"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const achievements = [
  "A problem", "Market validation", "Customer insights",
  "Product blueprint", "MVP", "Prototype"
];

export function SlideD4_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/8 blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6 z-10">
        <p className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Three Days Ago, None Of Us Had A Startup</p>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-4">Today Every Person Has:</h1>
      </motion.div>

      <div className="w-full max-w-3xl z-10 mb-8">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center gap-6 bg-gradient-to-r from-green-500/8 to-transparent border border-green-500/20 p-5 rounded-2xl mb-3 group hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.2, type: "spring" }}>
              <CheckCircle2 className="w-7 h-7 text-green-500 flex-shrink-0" />
            </motion.div>
            <span className="text-2xl font-display font-semibold text-zinc-200">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="z-10 bg-purple-500/10 border border-purple-500/30 px-10 py-5 rounded-2xl text-center">
        <p className="text-2xl text-zinc-300 font-light">You've done more in <strong className="text-white font-bold">3 days</strong> than most people do in <strong className="text-purple-400 font-bold">3 years.</strong></p>
      </motion.div>
    </div>
  );
}
