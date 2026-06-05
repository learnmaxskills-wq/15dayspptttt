"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function SlideD2_12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      {/* Rotating background conic */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(56,189,248,0.15) 25%, transparent 50%)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(6,182,212,0.05),transparent)]" />
      <div className="absolute top-12 left-12 opacity-10">
        <Quote className="w-40 h-40 text-cyan-400" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-6xl"
      >
        <p className="text-cyan-400 font-mono tracking-[0.5em] text-lg uppercase mb-16">Founder Insight</p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-black text-zinc-400 leading-[1.2] mb-10"
        >
          The Market Doesn't Care About Your{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-white line-through decoration-red-500 decoration-8">Excitement.</span>
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-[1.2]"
        >
          The Market Cares About Reality.
        </motion.h2>
      </motion.div>
    </div>
  );
}
