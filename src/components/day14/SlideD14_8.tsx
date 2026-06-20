"use client";

import { motion } from "framer-motion";
import { Car, Cpu, Sparkles } from "lucide-react";

export function SlideD14_8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-15%] w-[450px] h-[450px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Outcome Principle: Part II
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-10">
          {/* Car membership */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/5 blur-xl pointer-events-none" />
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl mb-4 text-[#00f0ff]">
              <Car className="w-6 h-6" />
            </div>
            <p className="text-zinc-500 font-mono text-xs uppercase mb-2">"Nobody buys a car."</p>
            <h4 className="text-2xl font-bold font-display text-white">They buy freedom.</h4>
          </motion.div>

          {/* AI Platform */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#ccff00]/5 blur-xl pointer-events-none" />
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl mb-4 text-[#ccff00]">
              <Cpu className="w-6 h-6" />
            </div>
            <p className="text-zinc-500 font-mono text-xs uppercase mb-2">"Nobody buys AI."</p>
            <h4 className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00]">They buy a better future.</h4>
          </motion.div>
        </div>

        {/* Breakthrough realization */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
          className="bg-gradient-to-r from-[#00f0ff]/10 to-[#ccff00]/5 border border-[#00f0ff]/30 p-8 rounded-2xl max-w-2xl text-center shadow-lg relative"
        >
          <div className="absolute top-2 right-2 text-[#ccff00]">
            <Sparkles className="w-4 h-4 animate-spin" />
          </div>
          <p className="text-xl md:text-2xl font-black font-display text-white">
            "The moment you understand this,<br/>
            your marketing <span className="text-[#ccff00] underline decoration-[#ccff00]/40 decoration-2">changes forever.</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
