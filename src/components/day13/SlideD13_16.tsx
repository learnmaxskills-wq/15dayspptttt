"use client";

import { motion } from "framer-motion";
import { Clapperboard } from "lucide-react";

export function SlideD13_16() {
  const scenes = ["Scene 1", "Scene 2", "Scene 3", "Scene 4", "Scene 5"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background spotlights */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <Clapperboard className="w-4 h-4 text-amber-400" />
          <span>ACT 7: STORYBOARD CREATION</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-center tracking-tight mb-4">
          Break script into <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">scenes.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-12">
          Now: Step-by-Step Visual Breakdown
        </motion.p>

        {/* Film Strip Storyboard */}
        <div className="grid grid-cols-5 gap-3 w-full max-w-4xl mb-12 relative">
          {/* Film perforations top */}
          <div className="absolute -top-6 left-0 right-0 flex justify-between px-2 text-[8px] font-mono text-zinc-700 select-none tracking-[12px] overflow-hidden">
            {"▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪"}
          </div>

          {scenes.map((scene, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 120 }}
              className="aspect-[4/3] bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-rose-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs font-mono text-zinc-500 mb-2">0{i + 1}</span>
              <h4 className="text-sm md:text-base font-bold font-mono text-zinc-300 group-hover:text-rose-300 transition-colors">{scene}</h4>
            </motion.div>
          ))}

          {/* Film perforations bottom */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-2 text-[8px] font-mono text-zinc-700 select-none tracking-[12px] overflow-hidden">
            {"▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪"}
          </div>
        </div>

        {/* Narrative quotes */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="text-center space-y-4 max-w-xl">
          <p className="text-lg md:text-xl font-light text-zinc-300">
            "Movies are not created at once."
          </p>
          <div className="h-[1px] w-12 bg-zinc-800 mx-auto" />
          <p className="text-xl md:text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
            They are created scene by scene.
          </p>
          <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest italic pt-2">
            Same with startup videos.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
