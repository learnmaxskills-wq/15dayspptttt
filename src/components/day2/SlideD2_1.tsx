"use client";

import { motion } from "framer-motion";
import { HelpCircle, Rocket } from "lucide-react";

export function SlideD2_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 relative overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "2px" }}
          animate={{ opacity: 1, letterSpacing: "10px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-cyan-400 uppercase font-mono font-bold mb-8 text-lg"
        >
          LearnMax · Day 2
        </motion.p>

        <h1 className="font-black text-white leading-none tracking-tighter text-center mb-8">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="block text-6xl md:text-[90px]"
          >
            FROM PROBLEM
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="block text-6xl md:text-[90px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            TO OPPORTUNITY
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-zinc-400 text-2xl font-light mb-16 max-w-2xl"
        >
          How Billion-Dollar Founders Think Before They Build
        </motion.p>

        {/* Rocket + Question mark visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 2 }}
          className="relative flex items-center justify-center"
        >
          <div className="w-32 h-32 rounded-full border-2 border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
            <HelpCircle className="w-16 h-16 text-cyan-500/50" />
          </div>
          <motion.div
            animate={{ y: [-8, 0, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-8"
          >
            <Rocket className="w-14 h-14 text-cyan-400 rotate-45" />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-cyan-500/50 font-mono tracking-widest text-sm uppercase mt-12"
        >
          Build Your Startup with AI
        </motion.p>
      </motion.div>
    </div>
  );
}
