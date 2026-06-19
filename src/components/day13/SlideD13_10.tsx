"use client";

import { motion } from "framer-motion";
import { Mic, Zap, UserCheck } from "lucide-react";

export function SlideD13_10() {
  const cards = [
    {
      label: "Feature",
      title: "AI Voice Analysis",
      description: "Proprietary natural language model that reviews speech flow, pacing, and vocabulary usage.",
      icon: Mic,
      badge: "border-zinc-800 text-zinc-500",
      pill: "bg-zinc-900",
      glow: "bg-zinc-500/5",
    },
    {
      label: "Benefit",
      title: "Instant Feedback",
      description: "Receive a detailed review scoresheet and performance evaluation 2 seconds after finishing.",
      icon: Zap,
      badge: "border-rose-900/50 text-rose-400",
      pill: "bg-rose-950/20",
      glow: "bg-rose-500/5",
    },
    {
      label: "Transformation",
      title: "Get Hired",
      description: "Eliminate anxiety, perfect your responses, and secure your dream job offer.",
      icon: UserCheck,
      badge: "border-amber-900/50 text-amber-400",
      pill: "bg-amber-950/20",
      glow: "bg-amber-500/10",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-4">
          Framework in Action
        </motion.span>
        
        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold font-display text-center mb-12 tracking-tight">
          Case Study: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">AI Interview Platform</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.3, type: "spring", stiffness: 100 }}
                className={`bg-zinc-950/80 border ${card.badge} rounded-2xl p-6 flex flex-col relative overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${card.glow} blur-[40px] pointer-events-none`} />
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase ${card.pill} border ${card.badge}`}>
                    {card.label}
                  </div>
                  <Icon className="w-5 h-5 text-zinc-500 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-2xl font-bold font-display mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {card.description}
                </p>

                {card.label === "Transformation" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-2 right-2 text-xs font-mono text-amber-500/50 uppercase tracking-widest">
                    The Holy Grail
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
