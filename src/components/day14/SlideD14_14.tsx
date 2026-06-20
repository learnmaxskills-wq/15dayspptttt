"use client";

import { motion } from "framer-motion";
import { Flame, AlertCircle, Heart, Cpu, Sparkles, Send } from "lucide-react";

export function SlideD14_14() {
  const definitions = [
    { label: "HOOK", title: "Grab attention.", desc: "The pattern interrupt. Stop their thumb scrolling.", icon: Flame, color: "text-[#00f0ff] border-[#00f0ff]/30 bg-[#00f0ff]/5" },
    { label: "PROBLEM", title: "Show a struggle.", desc: "Humans connect through shared frustrations and challenges.", icon: AlertCircle, color: "text-zinc-400 border-zinc-800 bg-zinc-950" },
    { label: "PAIN", title: "Make them feel it.", desc: "The emotional core. Agitate the problem until it hurts.", icon: Heart, color: "text-[#ccff00] border-[#ccff00]/30 bg-[#ccff00]/5" },
    { label: "SOLUTION", title: "Introduce startup.", desc: "Only now. Never before. Position it as the hero.", icon: Cpu, color: "text-zinc-400 border-zinc-800 bg-zinc-950" },
    { label: "TRANSFORMATION", title: "Show before/after.", desc: "Contrast the struggle with relief. This builds trust.", icon: Sparkles, color: "text-[#ccff00] border-[#ccff00]/30 bg-[#ccff00]/5" },
    { label: "CTA", title: "Tell them what to do.", desc: "Direct command. Go to link, sign up, try today.", icon: Send, color: "text-[#00f0ff] border-[#00f0ff]/30 bg-[#00f0ff]/5" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Storyboard Details
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
          {definitions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 100 }}
                className={`border ${item.color} rounded-2xl p-5 flex flex-col items-start relative overflow-hidden group`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-500">{item.label}</span>
                </div>
                <h4 className="text-base font-bold font-display text-zinc-200 mb-1">{item.title}</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
