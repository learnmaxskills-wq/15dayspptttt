"use client";

import { motion } from "framer-motion";
import { Database, Lock, UserCircle, Save, Sparkles, Rocket } from "lucide-react";

const features = [
  { icon: Lock, label: "Authentication" },
  { icon: Database, label: "Database" },
  { icon: UserCircle, label: "User Profiles" },
  { icon: Save, label: "Saved Data" },
  { icon: Sparkles, label: "Real Features" },
];

export function SlideD7_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <Rocket className="w-12 h-12 text-violet-400 mx-auto mb-4" />
        <h2 className="text-violet-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Day 8 Preview</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">THE MEMORY LAYER</h1>
      </motion.div>

      <div className="w-full max-w-3xl z-10 space-y-4 px-8">
        {features.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.2 }}
            className="flex items-center gap-6 bg-violet-500/5 border border-violet-500/20 p-5 rounded-2xl">
            <div className="w-12 h-12 bg-violet-500/15 border border-violet-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-violet-400" />
            </div>
            <span className="text-xl font-display font-semibold text-zinc-200">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-10 text-xl text-violet-300 font-medium z-10">
        "Tomorrow we teach it to <strong className="text-white">remember.</strong>"
      </motion.p>
    </div>
  );
}
