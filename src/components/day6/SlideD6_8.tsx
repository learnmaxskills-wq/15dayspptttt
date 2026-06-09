"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

const lines = [
  { text: "\"Coding is not the hard part anymore.\"", style: "text-amber-400 font-bold text-4xl" },
  { text: "The hard part is knowing what to build.", style: "text-zinc-300 text-2xl" },
  { text: "The hard part is understanding users.", style: "text-zinc-300 text-2xl" },
  { text: "The hard part is creating value.", style: "text-zinc-300 text-2xl" },
  { text: "The hard part is solving problems.", style: "text-zinc-300 text-2xl" },
];

export function SlideD6_8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <Brain className="w-16 h-16 text-amber-400 mx-auto mb-6" />
        <h2 className="text-amber-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Most Important Lesson</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">What's Actually Hard?</h1>
      </motion.div>

      <div className="z-10 text-center max-w-4xl space-y-6">
        {lines.map((line, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.5 }} className={`${line.style} font-display`}>
            {line.text}
          </motion.p>
        ))}
      </div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 3.5, duration: 1 }} className="w-[400px] h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent my-10 z-10" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} className="z-10 text-center space-y-2">
        <p className="text-2xl text-zinc-500">"AI is making building easier every month."</p>
        <p className="text-2xl text-white font-bold">"But AI still cannot tell you what problem is worth solving."</p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }} className="text-xl text-amber-400 mt-4 font-medium">That's why Days 1-5 mattered.</motion.p>
      </motion.div>
    </div>
  );
}
