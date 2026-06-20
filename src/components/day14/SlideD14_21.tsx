"use client";

import { motion } from "framer-motion";
import { BookOpen, Camera, ShieldAlert, Sparkles } from "lucide-react";

export function SlideD14_21() {
  const categories = [
    { name: "Subject", desc: "The main focus" },
    { name: "Environment", desc: "Background / Setting" },
    { name: "Lighting", desc: "Cinematic, dramatic, soft" },
    { name: "Emotion", desc: "Stressed, excited, calm" },
    { name: "Camera", desc: "Shallow DOF, 35mm lens" },
    { name: "Details", desc: "Books, night time, rain" },
    { name: "Quality", desc: "4k, photorealistic" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-6 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 9: IMAGE PROMPTS</span>
        </motion.div>

        {/* Prompt columns */}
        <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl mb-10">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-center flex flex-col items-center min-w-[110px]"
            >
              <Camera className="w-4 h-4 text-zinc-500 mb-2" />
              <h4 className="text-xs font-mono font-bold text-zinc-300 mb-1">{cat.name}</h4>
              <span className="text-[10px] text-zinc-500 font-mono">{cat.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Outcomes comparison */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
          {/* BAD prompt */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}
            className="bg-zinc-950 border border-red-950/60 p-5 rounded-2xl flex items-center justify-center gap-3 text-red-500 font-mono text-sm"
          >
            <ShieldAlert className="w-5 h-5" />
            <span>Without this: <strong className="text-white font-bold">AI creates garbage.</strong></span>
          </motion.div>

          {/* GOOD prompt */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}
            className="bg-zinc-950 border border-emerald-950/60 p-5 rounded-2xl flex items-center justify-center gap-3 text-emerald-400 font-mono text-sm shadow-xl"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>With this: <strong className="text-white font-bold">AI creates cinema.</strong></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
