"use client";

import { motion } from "framer-motion";
import { AlertCircle, Cpu, HelpCircle } from "lucide-react";

export function SlideD13_8() {
  const features = ["Feature 1", "Feature 2", "Feature 3", "Feature 4"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-red-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Act Title */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <AlertCircle className="w-4 h-4" />
          <span>ACT 3: THE BIGGEST MISTAKE FOUNDERS MAKE</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl items-center mb-10">
          {/* Feature List Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 relative">
            <h4 className="text-zinc-500 font-mono text-xs uppercase mb-4 tracking-wider">The Standard Pitch (Wrong)</h4>
            <div className="flex flex-col gap-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-2 px-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl relative overflow-hidden">
                  <span className="text-red-500 font-bold shrink-0">❌</span>
                  <span className="text-zinc-400 font-mono text-sm">{feature}</span>
                  {/* Strikeout */}
                  <motion.div className="absolute left-10 right-4 h-[1px] bg-red-500/50"
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8 + i * 0.2, duration: 0.3 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Jargon Column */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 blur-xl" />
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-zinc-500" />
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">The Engineering Trap</span>
            </div>
            <p className="text-zinc-300 font-light italic leading-relaxed mb-4">
              "If I tell you my AI uses <strong className="text-white font-semibold">17 neural layers</strong> and <strong className="text-white font-semibold">advanced architecture...</strong>"
            </p>
            <div className="h-[1px] w-full bg-zinc-800/60 my-4" />
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Then ask: "Do you care?"</span>
            </div>
          </motion.div>
        </div>

        {/* Realization */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }} className="bg-gradient-to-r from-red-950/40 to-rose-950/40 border border-rose-900/50 p-6 rounded-2xl max-w-xl text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-white mb-2">
            Nobody will.
          </h3>
          <p className="text-zinc-400 font-light text-sm">
            Features describe the mechanics of the machine. The user only wants to know if the machine solves their problem.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
