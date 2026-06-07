"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export function SlideD4_12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="w-20 h-20 bg-blue-500/15 border border-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <Flame className="w-10 h-10 text-blue-400" />
        </motion.div>
        <p className="text-blue-400 font-mono tracking-[0.5em] text-sm uppercase mb-2">Round 3</p>
        <h1 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400 mb-4">FIREBASE STUDIO</h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-3xl text-zinc-300 font-bold mb-12">"This is <span className="text-blue-400">Google's</span> entry."</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="bg-blue-500/5 border-2 border-blue-500/30 rounded-3xl p-10 inline-block shadow-[0_0_60px_rgba(59,130,246,0.1)] mb-10">
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: "Speed", desc: "How fast it builds" },
              { label: "Quality", desc: "Design & code" },
              { label: "Features", desc: "What it includes" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.2 }} className="text-center">
                <p className="text-3xl font-display font-bold text-blue-300 mb-2">{item.label}</p>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-xl text-zinc-500 font-light italic">Students immediately pay attention. Humans trust large companies.</motion.p>
      </motion.div>
    </div>
  );
}
