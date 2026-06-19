"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Compass, Sparkles } from "lucide-react";

export function SlideD13_9() {
  const steps = [
    {
      title: "Features",
      description: "What the product does",
      sub: "(The Specs / Technology)",
      icon: Box,
      color: "border-zinc-800 text-zinc-500",
      glow: "from-zinc-500/5 to-transparent",
    },
    {
      title: "Benefits",
      description: "What the user gets",
      sub: "(Saves 5 hours every week)",
      icon: Compass,
      color: "border-rose-950/40 text-rose-400",
      glow: "from-rose-500/5 to-transparent",
    },
    {
      title: "Transformation",
      description: "Who the user becomes",
      sub: "(Free, relaxed, successful)",
      icon: Sparkles,
      color: "border-amber-950/40 text-amber-400",
      glow: "from-amber-500/10 to-transparent",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Highlight Hook */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-amber-950/30 border border-amber-500/30 px-6 py-3 rounded-2xl mb-12 max-w-2xl text-center">
          <p className="text-lg md:text-xl font-light text-amber-300">
            "But if I tell you this <span className="font-semibold text-white underline decoration-amber-500/60 decoration-2">saves 5 hours every week...</span> Suddenly you care."
          </p>
        </motion.div>

        {/* Framework Title */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Marketer's Blueprint
        </motion.p>

        {/* Pipeline / Funnel */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-4xl">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.3, type: "spring", stiffness: 100 }}
                  className={`bg-zinc-950/70 border ${step.color} rounded-2xl p-6 w-full md:w-64 min-h-[220px] flex flex-col items-center text-center relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${step.glow} pointer-events-none`} />
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 mb-4 text-zinc-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black font-display tracking-tight mb-2">{step.title}</h4>
                  <p className="text-zinc-300 text-sm font-light mb-1">{step.description}</p>
                  <span className="text-zinc-500 font-mono text-xs italic">{step.sub}</span>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.3 }}
                    className="my-3 md:my-0 md:mx-3 text-zinc-600 rotate-90 md:rotate-0"
                  >
                    <ArrowRight className="w-6 h-6 animate-pulse" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
