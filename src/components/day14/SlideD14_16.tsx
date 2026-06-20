"use client";

import { motion } from "framer-motion";
import { Sparkles, Wifi } from "lucide-react";

export function SlideD14_16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          The Historical Constant
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-snug max-w-3xl mb-8">
          "Humans are addicted to stories.<br/>
          Since cave paintings.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ccff00]">Nothing changed.</span>"
        </motion.h2>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="w-32 h-[1px] bg-zinc-800 mb-10" />

        {/* The Punchline */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-xl shadow-2xl relative"
        >
          <div className="absolute top-2 right-2 text-[#00f0ff]">
            <Wifi className="w-5 h-5 animate-pulse" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00]">
            "Just better WiFi."
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
