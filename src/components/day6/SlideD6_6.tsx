"use client";

import { motion } from "framer-motion";
import { Users, AlertCircle } from "lucide-react";

const checks = [
  { q: "Can users sign up?", a: "Maybe not." },
  { q: "Can users log in?", a: "Maybe not." },
  { q: "Can users save information?", a: "Maybe not." },
  { q: "Can users return tomorrow?", a: "Maybe not." },
  { q: "Can the platform remember them?", a: "Maybe not." },
];

export function SlideD6_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6 z-10">
        <h2 className="text-red-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Reality Check</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">"1000 Users Visit Tomorrow."</h1>
        <p className="text-3xl text-zinc-500 font-light">"What happens?"</p>
      </motion.div>

      <div className="w-full max-w-3xl z-10 my-4">
        {checks.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.3 }}
            className="flex items-center justify-between bg-red-500/5 border border-red-500/20 p-5 rounded-2xl mb-3 hover:bg-red-500/10 transition-colors">
            <div className="flex items-center gap-4">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-xl text-zinc-300 font-medium">{item.q}</span>
            </div>
            <span className="text-red-400 font-mono font-bold text-sm">{item.a}</span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="z-10 bg-amber-500/10 border border-amber-500/30 px-10 py-5 rounded-2xl mt-4">
        <p className="text-2xl text-amber-300 font-bold">"Exactly. That's why we are here."</p>
      </motion.div>
    </div>
  );
}
