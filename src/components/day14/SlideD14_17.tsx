"use client";

import { motion } from "framer-motion";
import { BookOpen, Clapperboard } from "lucide-react";

export function SlideD14_17() {
  const scenes = [
    { num: "Scene 1", name: "Attention", color: "border-[#00f0ff]/30 text-[#00f0ff] bg-[#00f0ff]/5" },
    { num: "Scene 2", name: "Problem", color: "border-zinc-800 text-zinc-300" },
    { num: "Scene 3", name: "Escalation", color: "border-zinc-800 text-zinc-300" },
    { num: "Scene 4", name: "Solution", color: "border-zinc-800 text-zinc-300" },
    { num: "Scene 5", name: "Transformation", color: "border-[#ccff00]/40 text-[#ccff00] bg-[#ccff00]/5" },
    { num: "Scene 6", name: "CTA", color: "border-[#00f0ff]/30 text-[#00f0ff] bg-[#00f0ff]/5" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-6 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 6: THE MOVIE METHOD</span>
        </motion.div>

        {/* Narrative commands */}
        <div className="flex flex-col items-center text-center gap-2 mb-10 max-w-2xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-6 py-2 rounded-lg mb-2">
            <span className="text-[#00f0ff] font-mono text-sm uppercase font-bold tracking-widest">"Stop thinking like marketers. Start thinking like movie directors."</span>
          </motion.div>
          
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-zinc-400 text-sm font-mono italic">
            "Movies aren't random. Every scene exists for a reason. Same with marketing."
          </motion.p>
        </div>

        {/* Film Reels Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 w-full max-w-4xl">
          {scenes.map((scene, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, type: "spring", stiffness: 100 }}
              className={`bg-zinc-950/70 border ${scene.color} rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden`}
            >
              <Clapperboard className="w-4 h-4 text-zinc-600 mb-3" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">{scene.num}</span>
              <h4 className="text-sm font-bold font-mono tracking-wider uppercase text-zinc-200">{scene.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
