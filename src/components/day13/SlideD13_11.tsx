"use client";

import { motion } from "framer-motion";
import { Film, Flame, AlertCircle, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";

export function SlideD13_11() {
  const steps = [
    { label: "Hook", icon: Flame, text: "Capture attention in 3s", color: "text-rose-400 border-rose-950/40 bg-rose-950/10" },
    { label: "Problem", icon: AlertCircle, text: "Agitate a massive pain point", color: "text-red-400 border-red-950/40 bg-red-950/10" },
    { label: "Solution", icon: Cpu, text: "Introduce your startup product", color: "text-fuchsia-400 border-fuchsia-950/40 bg-fuchsia-950/10" },
    { label: "Result", icon: ShieldCheck, text: "Reveal the magical outcome", color: "text-emerald-400 border-emerald-950/40 bg-emerald-950/10" },
    { label: "CTA", icon: ArrowUpRight, text: "Direct them what to do next", color: "text-amber-400 border-amber-950/40 bg-amber-950/10" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <Film className="w-4 h-4" />
          <span>ACT 4: THE VIRAL VIDEO FORMULA</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-4">
          Every marketing video follows <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">one formula</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          Tell them: The 5 core pillars of conversion
        </motion.p>

        {/* Five columns layout */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl relative">
          {/* Connector line behind */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-rose-500/20 via-fuchsia-500/20 to-amber-500/20 hidden md:block z-0 -translate-y-6" />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 100 }}
                className={`bg-zinc-950/80 border ${step.color} rounded-2xl p-5 flex flex-col items-center text-center relative z-10`}
              >
                <div className="flex items-center justify-center p-3 rounded-full bg-zinc-900 border border-zinc-800 mb-4 text-zinc-300">
                  <Icon className="w-6 h-6 text-zinc-200" />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase mb-2">Step 0{i + 1}</span>
                <h4 className="text-xl font-bold font-display mb-2">{step.label}</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
