"use client";

import { motion } from "framer-motion";
import { MessageSquare, Smile, ShieldAlert } from "lucide-react";

export function SlideD14_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-red-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Attention Trap
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-mono text-zinc-400 tracking-tight text-center max-w-3xl leading-relaxed mb-8">
          "What happens if I start a video like this?"
        </motion.h2>

        {/* Dialog card */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
          className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 md:p-8 w-full max-w-xl relative overflow-hidden shadow-2xl mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-500 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left relative">
              <span className="text-xs font-mono text-zinc-600 block mb-2">The Standard Opener:</span>
              <p className="text-lg md:text-xl font-mono text-zinc-300 leading-relaxed italic">
                "Hello everyone. Today I'm going to explain my startup."
              </p>
              {/* Strike-through line */}
              <motion.div className="absolute left-0 right-0 h-[2px] bg-red-500 top-[60%]"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Action tags */}
        <div className="flex flex-col items-center gap-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }}
            className="flex items-center gap-2 bg-[#ccff00]/10 border border-[#ccff00]/30 px-4 py-2 rounded-lg text-[#ccff00] text-sm font-mono"
          >
            <Smile className="w-4 h-4" />
            <span>[ Everyone laughs ]</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }}
            className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl max-w-md text-center"
          >
            <div className="flex items-center justify-center gap-2 text-red-500 mb-2 font-mono text-xs uppercase font-bold tracking-widest">
              <ShieldAlert className="w-4 h-4 animate-bounce" />
              <span>Congratulations.</span>
            </div>
            <h3 className="text-2xl font-black font-display text-white">
              You lost 90% of viewers in 3 seconds.
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
