"use client";

import { motion } from "framer-motion";
import { Check, Globe, Layout, Smartphone, Users } from "lucide-react";

export function SlideD14_3() {
  const elements = [
    { label: "The internet", desc: "is the same", icon: Globe },
    { label: "The platform", desc: "is the same", icon: Layout },
    { label: "The phone", desc: "is the same", icon: Smartphone },
    { label: "The audience", desc: "is the same", icon: Users },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Constants of the Experiment
        </motion.p>

        {/* List items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12">
          {elements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, type: "spring", stiffness: 100 }}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="flex items-center justify-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[#00f0ff] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-mono text-zinc-300">{item.label}</h4>
                <div className="flex items-center gap-1 mt-2 text-zinc-500 font-mono text-xs">
                  <Check className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>{item.desc}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Question */}
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="w-16 h-[1px] bg-zinc-800 mb-6" />
          
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}
            className="text-4xl md:text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00] tracking-tight"
          >
            "So what changed?"
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
