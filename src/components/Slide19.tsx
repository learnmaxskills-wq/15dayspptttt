"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";

export function Slide19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 z-10 items-center">
        {/* Left Side: Summary & Sign off */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-orange-500 font-mono tracking-widest text-lg uppercase mb-4">Day 1 Complete</h2>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-tight mb-8">
            Thank You. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              See you tomorrow.
            </span>
          </h1>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl mt-12 backdrop-blur-md">
            <h3 className="text-xl font-bold font-display mb-6 text-zinc-300 uppercase tracking-widest">Today's Core Lessons</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-xl text-zinc-400">
                <CheckCircle2 className="w-6 h-6 text-orange-500" /> Adopt the Founder Brain.
              </li>
              <li className="flex items-center gap-4 text-xl text-zinc-400">
                <CheckCircle2 className="w-6 h-6 text-orange-500" /> Build Painkillers, not Vitamins.
              </li>
              <li className="flex items-center gap-4 text-xl text-zinc-400">
                <CheckCircle2 className="w-6 h-6 text-orange-500" /> Data kills assumptions.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Side: Quote */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-[#1a0f0a] border border-orange-500/20 p-12 rounded-[3rem] relative">
          <Quote className="w-20 h-20 text-orange-500/20 absolute top-8 left-8" />
          <div className="relative z-10 pt-8">
            <p className="text-4xl text-zinc-200 font-light leading-relaxed italic mb-8">
              "Ideas are cheap. <br />
              <strong className="text-white font-bold">Execution is everything.</strong>"
            </p>
            <p className="text-orange-500 font-mono tracking-widest uppercase text-sm">
              — The Real World
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
