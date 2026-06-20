"use client";

import { motion } from "framer-motion";
import { Landmark, Users, TrendingUp, HandCoins, Heart } from "lucide-react";

export function SlideD14_5() {
  const points = [
    { label: "Sell products", icon: Landmark },
    { label: "Build communities", icon: Users },
    { label: "Grow businesses", icon: TrendingUp },
    { label: "Raise funds", icon: HandCoins },
    { label: "And change lives", icon: Heart },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Power of Attention
        </motion.p>

        {/* Small intro list */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="px-4 py-2 bg-zinc-950 border border-zinc-800/80 rounded-xl flex items-center gap-2"
              >
                <Icon className="w-4 h-4 text-[#00f0ff]" />
                <span className="font-mono text-sm text-zinc-300">{p.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Main Monolith */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 max-w-2xl text-center relative overflow-hidden shadow-2xl mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/5 to-transparent pointer-events-none" />
          
          <h2 className="text-2xl md:text-3.5xl font-black font-display tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ccff00]">
            "The people who control attention control the world. And today we're going to learn how attention works."
          </h2>

          <div className="h-[1px] w-12 bg-zinc-800 mx-auto my-4" />
          
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest italic">
            [ Pause. Let that sink in. ]
          </p>
        </motion.div>
      </div>
    </div>
  );
}
