"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function SlideD2_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#020817] to-indigo-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(99,102,241,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-6xl relative border border-zinc-800/50 rounded-[3rem] p-20 bg-[#030b19]/80 backdrop-blur-xl shadow-[0_0_80px_rgba(99,102,241,0.06)]"
      >
        <Quote className="w-24 h-24 text-indigo-500/20 absolute top-10 left-10" />

        <p className="text-indigo-400 font-mono tracking-[0.5em] text-lg uppercase mb-16 relative z-10">The Big Lesson</p>

        <div className="space-y-12 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl text-zinc-400 font-light leading-relaxed"
          >
            Most People Look At The World <strong className="text-zinc-200">As It Is.</strong>
          </motion.p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-[1.2]"
          >
            Founders Look At The World As It Is Becoming.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
