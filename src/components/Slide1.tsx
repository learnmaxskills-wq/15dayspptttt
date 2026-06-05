"use client";

import { motion } from "framer-motion";

export function Slide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10 text-center"
      >
        <motion.img
          src="/logo.png"
          alt="LearnMax Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="w-32 h-auto mx-auto mb-8 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]"
        />
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "8px" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-orange-500 uppercase tracking-widest font-sans font-semibold mb-6"
        >
          Day 1 — Complete Word-for-Word Session Script
        </motion.p>
        
        <h1 className="text-8xl md:text-[120px] font-display font-black text-white leading-none tracking-tighter mix-blend-difference mb-8">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block"
          >
            WELCOME TO
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
          >
            THE REAL WORLD
          </motion.span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-zinc-300">45 Minutes · Live Zoom · Grade 11–12</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
