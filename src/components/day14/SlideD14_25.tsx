"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export function SlideD14_25() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Monologue Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-xs text-zinc-500">
          <Sparkles className="w-4 h-4 text-[#ccff00]" />
          <span>CLOSING SPEECH</span>
          <span className="text-zinc-700">|</span>
          <span className="text-[#00f0ff]">PART 2</span>
        </motion.div>

        {/* Closing sentences */}
        <div className="space-y-6 max-w-2xl mb-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed italic">
            "Because the greatest startup in the world means nothing if nobody knows it exists."
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed italic">
            "Today you learned how to tell stories. And stories are how ideas travel through the world."
          </motion.p>
        </div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="w-32 h-[1px] bg-zinc-800 mb-8" />

        {/* Final Motto Monolith */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }}
          className="bg-zinc-950/90 border border-zinc-800 p-8 rounded-3xl max-w-xl shadow-2xl relative"
        >
          <div className="absolute top-2 right-2 text-[#00f0ff]">
            <Terminal className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4.5xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00]">
            "Now let's create something worth sharing."
          </h2>
        </motion.div>

        {/* Teacher instruction overlay */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-8 bg-zinc-900/50 border border-zinc-850 px-6 py-3 rounded-xl max-w-md">
          <p className="text-xs font-mono text-zinc-500">
            [ That's how I'd run Day 14. Not as an AI tools class. As a masterclass on human attention disguised as a marketing lesson. 🚀 ]
          </p>
        </motion.div>
      </div>
    </div>
  );
}
