"use client";

import { motion } from "framer-motion";

export function Slide2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-orange-500 font-mono tracking-widest text-lg uppercase mb-8"
        >
          The Instructor
        </motion.p>
        <h1 className="text-6xl md:text-8xl font-display font-black leading-tight mb-4">
          My name is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Tanish Arora
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl font-mono text-zinc-300 mb-12 uppercase tracking-wider"
        >
          Co-founder, Executive Officer & AI Engineer @ LearnMax
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-3xl text-zinc-400 font-light max-w-4xl mx-auto leading-relaxed"
        >
          "I want to be completely straight with you about what the next 15 days are and what they are not."
        </motion.p>
      </motion.div>
    </div>
  );
}
