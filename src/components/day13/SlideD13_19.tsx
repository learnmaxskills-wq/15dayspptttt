"use client";

import { motion } from "framer-motion";
import { Award, Hammer, HeartHandshake, Eye } from "lucide-react";

export function SlideD13_19() {
  const realizations = [
    { text: "Solving problems.", icon: Award, glow: "border-rose-950/40 text-rose-400" },
    { text: "Building solutions.", icon: Hammer, glow: "border-fuchsia-950/40 text-fuchsia-400" },
    { text: "Communicating value.", icon: HeartHandshake, glow: "border-indigo-950/40 text-indigo-400" },
    { text: "And earning attention.", icon: Eye, glow: "border-amber-950/40 text-amber-400" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Timing badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-xs text-zinc-500">
          <span>FINAL 10 MINUTES</span>
          <span className="text-zinc-700">|</span>
          <span className="text-rose-400">THE CONCLUDING MONOLOGUE</span>
        </motion.div>

        {/* Framing quote */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-400 font-mono text-sm uppercase tracking-widest mb-6">
          End with:
        </motion.p>

        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl text-zinc-300 font-light mb-4 italic text-center max-w-2xl">
          "When we started this challenge, you thought startups were about coding."
        </motion.h3>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-3xl md:text-5xl font-black font-display tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300 mb-12">
          "Now you know the truth."
        </motion.h2>

        {/* The 4 truths grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-3xl mb-8">
          {realizations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.3 }}
                className={`bg-zinc-950/80 border ${item.glow} rounded-2xl p-5 flex flex-col items-center text-center`}
              >
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl mb-3 text-zinc-300">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold font-display text-zinc-200 leading-snug">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Final sentence */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} className="text-center mt-6">
          <p className="text-lg md:text-xl font-mono text-amber-300">
            "Because <span className="text-white font-bold underline decoration-amber-500/60 decoration-2">attention is the currency</span> of the internet."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
