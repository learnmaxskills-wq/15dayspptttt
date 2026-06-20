"use client";

import { motion } from "framer-motion";
import { BookOpen, ThumbsDown, ThumbsUp } from "lucide-react";

export function SlideD14_11() {
  const goodHooks = [
    "What if I told you...",
    "Most students are making this mistake...",
    "Nobody talks about this...",
    "This startup should not exist...",
    "I spent 14 days building...",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 3: THE HOOK (VIRAL START)</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl md:text-3.5xl font-mono text-zinc-300 tracking-tight text-center max-w-3xl leading-relaxed mb-10">
          "The first 3 seconds decide everything."
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-6 w-full max-w-4xl">
          {/* BAD Hook Card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-zinc-950 border border-red-950/60 rounded-2xl p-6 flex flex-col group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-red-950/20 border border-red-950 text-red-400 font-bold">BAD</span>
              <ThumbsDown className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-zinc-500 font-mono text-sm leading-relaxed italic p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl min-h-[80px] flex items-center justify-center">
              "Hi, my name is..."
            </p>
          </motion.div>

          {/* GOOD Hooks Card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
            className="md:col-span-3 bg-zinc-950 border border-emerald-950/60 rounded-2xl p-6 flex flex-col relative overflow-hidden group shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-emerald-950/20 border border-emerald-950 text-emerald-400 font-bold">GOOD</span>
              <ThumbsUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col gap-2">
              {goodHooks.map((hook, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                  className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-left font-mono text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="text-[#ccff00] mr-2">✦</span> {hook}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
