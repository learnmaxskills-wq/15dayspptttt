"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Lightbulb } from "lucide-react";

export function SlideD13_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Wait prompt */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-zinc-600 font-mono tracking-widest text-xs uppercase mb-8">
          [ Wait for students to respond ]
        </motion.p>

        {/* Dialog section */}
        <div className="flex flex-col gap-6 w-full max-w-xl mb-12">
          {/* Student Bubble */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl px-6 py-4">
              <p className="text-sm font-mono text-zinc-500 mb-1">Some student says:</p>
              <p className="text-xl font-bold font-display text-zinc-300">"Zero."</p>
            </div>
          </motion.div>

          {/* Teacher Response */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="flex items-start gap-4 justify-end">
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl px-6 py-4 text-right">
              <p className="text-sm font-mono text-rose-400 mb-1">Then say:</p>
              <p className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">"Correct."</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <CheckCircle className="w-5 h-5 animate-bounce" />
            </div>
          </motion.div>
        </div>

        {/* Core Lesson Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }} className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full max-w-2xl relative overflow-hidden text-center mb-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px]" />
          
          <h3 className="text-xl md:text-2xl font-light text-zinc-400 mb-4">The Golden Rule of Startups:</h3>
          
          <p className="text-2xl md:text-3xl font-extrabold font-display leading-tight mb-6">
            The market does <span className="text-zinc-500 line-through decoration-rose-500/80">not reward</span> the best product.<br/>
            The market rewards the product <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">people know about.</span>
          </p>

          <div className="h-[1px] w-12 bg-zinc-800 mx-auto my-4" />
          
          <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest italic">
            [ Pause ]
          </p>
        </motion.div>

        {/* Closing commitment */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} className="flex items-center gap-2 text-amber-400 font-mono text-sm">
          <Lightbulb className="w-4 h-4 animate-pulse" />
          <span>"Today we learn how to make people care."</span>
        </motion.div>
      </div>
    </div>
  );
}
