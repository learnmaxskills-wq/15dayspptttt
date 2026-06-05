"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Slide17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[1200px] h-[1200px] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#000000_50%,#ea580c_100%)] opacity-30 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-5xl relative"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-orange-500/20">
          <Quote className="w-40 h-40" />
        </div>
        <h2 className="text-orange-500 font-mono tracking-widest text-lg uppercase mb-8 relative z-10">
          Startup Lesson 3
        </h2>
        <h1 className="text-7xl md:text-9xl font-display font-black leading-[1.1] mb-12 relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
          Data kills <br /> assumptions.
        </h1>
        <p className="text-3xl text-zinc-400 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
          "Every startup that has ever failed... failed because the founder assumed something that turned out to be wrong."
        </p>
      </motion.div>
    </div>
  );
}
