"use client";

import { motion } from "framer-motion";
import { BookOpen, Table, Edit } from "lucide-react";

export function SlideD14_20() {
  const columns = ["Scene", "Visual", "Voiceover", "Emotion", "Prompt", "Music"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-6 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 8: STORYBOARD CREATION</span>
        </motion.div>

        {/* Framing Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            "Every video starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ccff00]">on paper.</span>"
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            Not in a video generator.
          </motion.p>
        </div>

        {/* Storyboard grid layout */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 w-full max-w-3xl relative overflow-hidden shadow-2xl mb-8"
        >
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
              <Table className="w-4 h-4 text-[#00f0ff]" />
              <span>storyboard_template.csv</span>
            </div>
            <div className="text-zinc-500 font-mono text-xs">
              [ Grid View ]
            </div>
          </div>

          {/* Staggered Row Columns */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {columns.map((col, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, type: "spring", stiffness: 100 }}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center group hover:border-[#ccff00]/40 transition-colors"
              >
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2">Col 0{i + 1}</span>
                <h4 className="text-sm font-bold font-mono tracking-wider text-zinc-200">{col}</h4>
              </motion.div>
            ))}
          </div>

          <div className="h-[1px] w-full bg-zinc-900 my-6" />

          {/* Interactive footer instruction */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
            className="flex items-center justify-center gap-2 text-[#ccff00] font-mono text-xs uppercase tracking-widest border border-[#ccff00]/20 bg-[#ccff00]/5 py-2.5 rounded-lg"
          >
            <Edit className="w-4 h-4 animate-pulse" />
            <span>[ Action: Create one together on the board ]</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
